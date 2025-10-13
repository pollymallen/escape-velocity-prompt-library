# Failure Post Template

**Use this template when:** Something took way longer than expected or went wrong, and you want to share the learning.

**Goal:** Build authentic connection by sharing failures and learnings, showing the reality behind building.

---

## Prompt for AI

Help me craft a "Failure Post" social media post for building in public. Here's the information:

**What Took Longer/Failed:**
[e.g., "The user authentication system", "Integrating payments", "Redesigning the dashboard", "Getting first 10 users"]

**How Long You Expected It To Take:**
[e.g., "2 days", "1 week", "3 days"]

**How Long It Actually Took:**
[e.g., "2 weeks", "A full month", "10 days"]

**What Went Wrong:**
[Specific problems - e.g., "Underestimated edge cases", "API documentation was outdated", "Had to rewrite it 3 times", "Users didn't understand the value prop"]

**What You Learned:**
[Key takeaways - e.g., "Always add 3x time buffer", "Test with real users earlier", "Read the docs completely first", "Simpler is better"]

**The Solution/Pivot:**
[How you resolved it - e.g., "Switched to a different API", "Simplified the whole approach", "Got user feedback and rebuilt", "Asked for help from the community"]

**Current Status:**
[e.g., "Finally working", "Shipped today", "Still debugging but closer"]

---

## Post Structure

The AI should create a post following this structure:

**Hook:** "This feature took 4x longer than expected. Here's what went wrong..."

**Body:**
- Share the specific challenge or failure
- Be honest about the time/effort involved
- Explain what you learned (make it valuable for others)
- Share the solution or pivot
- Show vulnerability but also resilience

**Engagement Ask:**
- "What's something that took you way longer than expected? I need to hear I'm not alone."
- "Tell me your worst time estimate fail"
- "Anyone else terrible at estimating dev time?"

---

## Best Practices

- **Specific numbers:** "4x longer" is better than "way longer"
- **Real learnings:** Not just "it was hard" but what you'd do differently
- **Stay positive:** Frustrated but not defeated
- **Value for audience:** They should learn something too
- **Show resolution:** Problem → Learning → Solution
- **Platform considerations:**
  - Twitter/X: Thread format for storytelling
  - LinkedIn: Focus on professional lessons learned
  - Instagram: Before/after visuals if possible

---

## Example Output

"This feature took 4x longer than expected. Here's what went wrong...

I thought building user authentication would take 2 days max. It took 2 WEEKS.

**What I underestimated:**
→ Edge cases (what if email doesn't send? what if they close the tab mid-signup?)
→ Security considerations (token expiration, password hashing, session management)
→ Third-party OAuth complications (each provider has different quirks)

**What I learned:**
→ Auth is never "just" auth - it's the foundation of trust
→ Use a library/service when possible (I should've used Supabase from day 1)
→ My time estimates are wildly optimistic - now I 3x everything

**The solution:**
Ripped out my custom auth and integrated Supabase. Works perfectly, took 4 hours.

Lesson: Don't reinvent the wheel on foundational features.

What's something that took you way longer than expected? I need to hear I'm not alone."
