# Assumption Testing Framework

## The Prompt

```
I'm building [PRODUCT DESCRIPTION] for [TARGET CUSTOMER].

Help me identify and test my riskiest assumptions using the following framework:

**Step 1: List My Assumptions**
Extract all assumptions I'm making about:
- The problem exists and is painful enough to solve
- Who has this problem
- Current solutions are inadequate
- Customers will pay for a solution
- How customers will discover my solution
- Technical feasibility
- My ability to build/deliver this

**Step 2: Risk Ranking**
Rank these assumptions by:
- Impact (if wrong, does the business fail?)
- Uncertainty (how confident am I this is true?)

**Step 3: Test Design**
For the top 5 riskiest assumptions, design a test:
- What's the fastest way to validate or invalidate this?
- What evidence would prove it true or false?
- What's the minimum viable test I can run this week?
- What does success look like? What does failure look like?

**Step 4: Decision Criteria**
For each test, define:
- What result means "proceed"
- What result means "pivot"
- What result means "stop"

Format this as an action plan I can execute in priority order.
```

## Example Usage

```
I'm building an AI-powered meal planning app for busy parents who struggle with weeknight dinners.

My key assumptions:
- Parents find weeknight meal planning stressful enough to pay for help
- AI can generate meal plans that families will actually eat
- Parents will adopt a new tool vs. using Pinterest/Google
- $10/month is an acceptable price point
```

## Types of Assumptions to Test

**Problem Assumptions:**
- Does this problem exist?
- Is it painful enough that people seek solutions?
- How often does this problem occur?

**Solution Assumptions:**
- Will my solution actually solve the problem?
- Is my approach better than current alternatives?
- Can people understand how to use it?

**Market Assumptions:**
- Are there enough people with this problem?
- Can I reach them affordably?
- Will they pay what I need to charge?

**Execution Assumptions:**
- Can I build this with my resources?
- Can I build it fast enough?
- Can I deliver on the promise?

## Quick Validation Tests

**For Problem Validation:**
- Run social media painpoint research (see `social-media-painpoint-research.md`)
- Conduct 10 user interviews (see `user-interview-questions.md`)
- Create a landing page describing the problem, measure traffic/signups

**For Solution Validation:**
- Smoke test landing page with fake "Buy Now" button (measure clicks)
- Manual concierge: deliver the solution by hand before building tech
- Prototype test: show mockups, watch users try to complete tasks

**For Market Validation:**
- Pre-sell before building (money is the strongest signal)
- Run small paid ads to landing page (can you acquire customers affordably?)
- Interview 3 potential customers about budget and buying process

## Red Flags vs. Green Lights

**🚩 Red Flags (Consider Pivoting):**
- Can't find 10 people who actively experience this problem
- People say "nice to have" instead of "I need this now"
- No one has ever paid for a solution to this problem
- You can't reach customers without huge marketing budget
- People don't understand your solution after 3 attempts to explain

**🟢 Green Lights (Keep Going):**
- People interrupt you to share their painpoint stories
- They ask "when can I buy this?"
- They've already spent money on inadequate solutions
- You find active online communities discussing this problem
- People refer you to others with the same problem

## Iteration Prompt

After running tests:

```
Here are my assumption test results:
[PASTE YOUR FINDINGS]

Based on these results:
1. Which assumptions were validated?
2. Which were invalidated?
3. Should I proceed, pivot, or stop?
4. If pivoting, what should I change?
5. What are my NEW riskiest assumptions after this learning?
```
