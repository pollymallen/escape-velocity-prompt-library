# Notion Sync Setup Guide

This repository automatically syncs all prompts to Notion whenever changes are pushed to the `main` branch.

## Setup Instructions

### 1. Configure GitHub Secrets

Go to your repository settings and add these secrets:

**Settings → Secrets and variables → Actions → New repository secret**

#### Required Secrets:

1. **NOTION_API_KEY**
   - Your Notion integration secret (starts with `secret_`)
   - Get this from: https://www.notion.so/my-integrations
   - Select your "Escape Velocity Prompts Sync" integration
   - Copy the "Internal Integration Secret"

2. **NOTION_PARENT_PAGE_ID**
   - The ID of the Notion page where prompts will be created
   - Find this in your Notion page URL:
   ```
   https://notion.so/Your-Page-Name-32charslikethis1234567890ab
                                      ^^^^^^^^^^^^^^^^^^^^^^^^
                                      This is the page ID
   ```
   - **Important:** You must share this page with your integration:
     - Open the page in Notion
     - Click "..." (top right) → "Add connections"
     - Select "Escape Velocity Prompts Sync"

### 2. How It Works

- **Trigger:** Runs automatically on every push to `main` branch
- **Manual Trigger:** Can also be run manually from GitHub Actions tab
- **Structure:** Mirrors the folder structure in Notion as nested pages
- **Updates:** Clears and recreates page content on each sync (always up-to-date)

### 3. Test the Sync

After configuring secrets:

1. Make a small change to any prompt file
2. Commit and push to `main`
3. Go to **Actions** tab in GitHub
4. Watch the "Sync Prompts to Notion" workflow run
5. Check your Notion page to see the synced content

### 4. Troubleshooting

**"Missing required environment variables"**
- Make sure both secrets are configured in GitHub repository settings

**"Unauthorized" or API errors**
- Verify your NOTION_API_KEY is correct
- Ensure the parent page is shared with your integration

**Pages not appearing**
- Check that NOTION_PARENT_PAGE_ID is correct
- Verify the integration has "Insert content" permission

**Workflow not running**
- Ensure the workflow file is on the `main` branch
- Check the Actions tab for error messages

### 5. Local Testing (Optional)

To test the sync locally before pushing:

```bash
# Install dependencies
npm install

# Set environment variables
export NOTION_API_KEY="your_secret_key_here"
export NOTION_PARENT_PAGE_ID="your_page_id_here"

# Run sync
npm run sync
```

## How the Sync Works

1. **Scans** the `prompts/` directory for all `.md` files
2. **Creates** Notion pages matching the folder structure
3. **Converts** markdown to Notion blocks:
   - Headings (# ## ###)
   - Paragraphs
   - Code blocks with syntax highlighting
   - Bulleted and numbered lists
   - Basic formatting (bold, italic, code)
4. **Updates** existing pages or creates new ones as needed

## File Structure

```
.github/
└── workflows/
    └── notion-sync.yml       # GitHub Action workflow
scripts/
└── sync-to-notion.js         # Sync script
package.json                  # Node.js dependencies
```
