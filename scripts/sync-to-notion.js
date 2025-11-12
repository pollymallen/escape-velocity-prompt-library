#!/usr/bin/env node
import { Client } from '@notionhq/client';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative, dirname, basename } from 'path';
import { glob } from 'glob';

// Initialize Notion client
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const PARENT_PAGE_ID = process.env.NOTION_PARENT_PAGE_ID;

if (!process.env.NOTION_API_KEY || !PARENT_PAGE_ID) {
  console.error('Missing required environment variables: NOTION_API_KEY and NOTION_PARENT_PAGE_ID');
  process.exit(1);
}

// Cache to store created pages (path -> page_id)
const pageCache = new Map();

/**
 * Convert markdown content to Notion blocks
 */
function markdownToBlocks(markdown) {
  const blocks = [];
  const lines = markdown.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
    if (!line.trim()) {
      i++;
      continue;
    }

    // Code blocks
    if (line.startsWith('```')) {
      const language = line.slice(3).trim() || 'plain text';
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      blocks.push({
        object: 'block',
        type: 'code',
        code: {
          rich_text: [{
            type: 'text',
            text: { content: codeLines.join('\n') }
          }],
          language: language
        }
      });
      i++;
      continue;
    }

    // Headings
    if (line.startsWith('# ')) {
      blocks.push({
        object: 'block',
        type: 'heading_1',
        heading_1: {
          rich_text: [{ type: 'text', text: { content: line.slice(2) } }]
        }
      });
      i++;
      continue;
    }

    if (line.startsWith('## ')) {
      blocks.push({
        object: 'block',
        type: 'heading_2',
        heading_2: {
          rich_text: [{ type: 'text', text: { content: line.slice(3) } }]
        }
      });
      i++;
      continue;
    }

    if (line.startsWith('### ')) {
      blocks.push({
        object: 'block',
        type: 'heading_3',
        heading_3: {
          rich_text: [{ type: 'text', text: { content: line.slice(4) } }]
        }
      });
      i++;
      continue;
    }

    // Bulleted list
    if (line.match(/^[\-\*]\s/)) {
      blocks.push({
        object: 'block',
        type: 'bulleted_list_item',
        bulleted_list_item: {
          rich_text: parseRichText(line.slice(2))
        }
      });
      i++;
      continue;
    }

    // Numbered list
    if (line.match(/^\d+\.\s/)) {
      blocks.push({
        object: 'block',
        type: 'numbered_list_item',
        numbered_list_item: {
          rich_text: parseRichText(line.replace(/^\d+\.\s/, ''))
        }
      });
      i++;
      continue;
    }

    // Regular paragraph
    blocks.push({
      object: 'block',
      type: 'paragraph',
      paragraph: {
        rich_text: parseRichText(line)
      }
    });
    i++;
  }

  return blocks;
}

/**
 * Parse rich text with basic markdown formatting (bold, italic, code)
 */
function parseRichText(text) {
  const richText = [];

  // Simple parsing - handle **bold**, *italic*, and `code`
  const segments = [];
  let current = '';
  let i = 0;

  while (i < text.length) {
    // Bold **text**
    if (text[i] === '*' && text[i + 1] === '*') {
      if (current) {
        segments.push({ content: current, bold: false, italic: false, code: false });
        current = '';
      }
      i += 2;
      let boldText = '';
      while (i < text.length && !(text[i] === '*' && text[i + 1] === '*')) {
        boldText += text[i];
        i++;
      }
      if (boldText) {
        segments.push({ content: boldText, bold: true, italic: false, code: false });
      }
      i += 2;
      continue;
    }

    // Italic *text* (but not if it's part of **)
    if (text[i] === '*' && text[i + 1] !== '*') {
      if (current) {
        segments.push({ content: current, bold: false, italic: false, code: false });
        current = '';
      }
      i++;
      let italicText = '';
      while (i < text.length && text[i] !== '*') {
        italicText += text[i];
        i++;
      }
      if (italicText) {
        segments.push({ content: italicText, bold: false, italic: true, code: false });
      }
      i++;
      continue;
    }

    // Code `text`
    if (text[i] === '`') {
      if (current) {
        segments.push({ content: current, bold: false, italic: false, code: false });
        current = '';
      }
      i++;
      let codeText = '';
      while (i < text.length && text[i] !== '`') {
        codeText += text[i];
        i++;
      }
      if (codeText) {
        segments.push({ content: codeText, bold: false, italic: false, code: true });
      }
      i++;
      continue;
    }

    current += text[i];
    i++;
  }

  if (current) {
    segments.push({ content: current, bold: false, italic: false, code: false });
  }

  // Convert segments to Notion rich text format
  return segments.map(seg => ({
    type: 'text',
    text: { content: seg.content },
    annotations: {
      bold: seg.bold,
      italic: seg.italic,
      code: seg.code
    }
  }));
}

/**
 * Get or create a page in Notion
 */
async function getOrCreatePage(title, parentId) {
  // Check cache first
  const cacheKey = `${parentId}:${title}`;
  if (pageCache.has(cacheKey)) {
    return pageCache.get(cacheKey);
  }

  // Search for existing page
  const response = await notion.search({
    query: title,
    filter: { property: 'object', value: 'page' }
  });

  // Find exact match that is a child of the parent
  for (const page of response.results) {
    if (page.parent?.page_id === parentId || page.parent?.page_id === parentId.replace(/-/g, '')) {
      const pageTitle = page.properties?.title?.title?.[0]?.plain_text || '';
      if (pageTitle === title) {
        pageCache.set(cacheKey, page.id);
        return page.id;
      }
    }
  }

  // Create new page
  const newPage = await notion.pages.create({
    parent: { page_id: parentId },
    properties: {
      title: {
        title: [{ type: 'text', text: { content: title } }]
      }
    }
  });

  pageCache.set(cacheKey, newPage.id);
  return newPage.id;
}

/**
 * Clear all blocks from a page
 */
async function clearPageBlocks(pageId) {
  let hasMore = true;
  let startCursor = undefined;

  while (hasMore) {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: startCursor
    });

    for (const block of response.results) {
      try {
        await notion.blocks.delete({ block_id: block.id });
      } catch (error) {
        console.warn(`Could not delete block ${block.id}:`, error.message);
      }
    }

    hasMore = response.has_more;
    startCursor = response.next_cursor;
  }
}

/**
 * Sync a markdown file to Notion
 */
async function syncMarkdownFile(filePath, parentId) {
  const content = readFileSync(filePath, 'utf-8');
  const fileName = basename(filePath, '.md');

  // Convert filename to title (replace hyphens with spaces, capitalize)
  const title = fileName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  console.log(`Syncing: ${filePath} -> "${title}"`);

  // Get or create the page
  const pageId = await getOrCreatePage(title, parentId);

  // Clear existing content
  await clearPageBlocks(pageId);

  // Convert markdown to blocks
  const blocks = markdownToBlocks(content);

  // Add blocks in batches (Notion API limit is 100 blocks per request)
  const batchSize = 100;
  for (let i = 0; i < blocks.length; i += batchSize) {
    const batch = blocks.slice(i, i + batchSize);
    await notion.blocks.children.append({
      block_id: pageId,
      children: batch
    });
  }

  console.log(`✓ Synced: ${title}`);
}

/**
 * Sync a directory to Notion (creates a parent page for the directory)
 */
async function syncDirectory(dirPath, parentId, basePath) {
  const relativePath = relative(basePath, dirPath);
  const dirName = basename(dirPath);

  // Skip if this is the base directory
  if (relativePath === '') {
    return parentId;
  }

  // Convert directory name to title
  const title = dirName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  console.log(`Creating directory page: "${title}"`);

  // Create or get page for this directory
  const pageId = await getOrCreatePage(title, parentId);

  return pageId;
}

/**
 * Main sync function
 */
async function syncToNotion() {
  console.log('Starting sync to Notion...\n');

  const promptsDir = 'prompts';

  // Get all markdown files
  const files = glob.sync(`${promptsDir}/**/*.md`);

  console.log(`Found ${files.length} markdown files\n`);

  // Group files by directory
  const filesByDir = new Map();

  for (const file of files) {
    const dir = dirname(file);
    if (!filesByDir.has(dir)) {
      filesByDir.set(dir, []);
    }
    filesByDir.get(dir).push(file);
  }

  // Process directories in order (parent before children)
  const dirs = Array.from(filesByDir.keys()).sort();

  // Create directory structure first
  const dirPageIds = new Map();
  dirPageIds.set(promptsDir, PARENT_PAGE_ID);

  for (const dir of dirs) {
    if (dir === promptsDir) continue;

    const parentDir = dirname(dir);
    const parentPageId = dirPageIds.get(parentDir) || PARENT_PAGE_ID;

    const pageId = await syncDirectory(dir, parentPageId, promptsDir);
    dirPageIds.set(dir, pageId);
  }

  // Now sync all markdown files
  for (const dir of dirs) {
    const parentPageId = dirPageIds.get(dir) || PARENT_PAGE_ID;
    const files = filesByDir.get(dir);

    for (const file of files) {
      await syncMarkdownFile(file, parentPageId);
    }
  }

  console.log('\n✅ Sync complete!');
}

// Run the sync
syncToNotion().catch(error => {
  console.error('Error syncing to Notion:', error);
  process.exit(1);
});
