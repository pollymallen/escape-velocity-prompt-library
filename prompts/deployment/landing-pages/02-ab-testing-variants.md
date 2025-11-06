# A/B Testing Landing Page Variants

## The Prompt

```
I want to create 3 variations of the landing page with different core messaging
that's randomly rotated to show to each new user.

Each variant should also have a direct access link that I can target different
channels for (e.g., /variant-a, /variant-b, /variant-c).

Base landing page: [PASTE YOUR LANDING PAGE OR DESCRIPTION]

Create 3 variants that test different value propositions:
1. Variant A: Focus on [ANGLE 1]
2. Variant B: Focus on [ANGLE 2]
3. Variant C: Focus on [ANGLE 3]

For each variant, provide:
- Unique headline and subheadline
- Adjusted feature emphasis (same features, different order/language)
- Routing logic for both random assignment and direct links
- Tracking parameters to identify which variant the user saw
```

## Example Usage

```
<!-- Testing Different Pain Points for AI CRM -->

Base landing page: AI CRM for business professionals

Create 3 variants that test different value propositions:
1. Variant A: Focus on time savings ("Stop spending hours on manual follow-ups")
2. Variant B: Focus on relationship quality ("Never miss an important moment with your network")
3. Variant C: Focus on business outcomes ("Turn your network into your best sales channel")

<!-- Testing Different Audiences for Project Management Tool -->

Base landing page: Lightweight project management for makers

Create 3 variants that test different audiences:
1. Variant A: Solo founders building their first product
2. Variant B: Freelancers managing multiple clients
3. Variant C: Small agencies coordinating team work
```

## What You'll Get

**3 Complete Variants** each with:
- Different headline/messaging
- Same core features (reordered for emphasis)
- Unique URL route (e.g., `/landing/a`, `/landing/b`, `/landing/c`)
- Random rotation logic for organic traffic
- Direct link access for channel-specific testing

**Implementation Code** for:
- Routing visitors randomly on first visit
- Persisting variant choice via cookie/localStorage
- Tracking which variant each user sees
- Direct URL access that overrides random assignment

## Why Test Variants

**Learn What Resonates:** Different messaging appeals to different segments of your audience.

**Channel Optimization:** LinkedIn traffic might respond to different messaging than Reddit traffic.

**Data-Driven Decisions:** Stop guessing which value prop is strongest - measure it.

## What to Vary (and What Not To)

**✅ Good Things to Test:**
- Primary value proposition (time savings vs. quality vs. outcomes)
- Target audience language (founders vs. freelancers vs. agencies)
- Emotional vs. rational appeal
- Problem-focused vs. solution-focused messaging
- Different use cases highlighted

**❌ Don't Vary (Keep Consistent):**
- Pricing (creates confusion and trust issues)
- Core features listed (order is OK to change)
- Visual design/layout (makes analysis harder)
- CTA text (keep "Join Waitlist" same across variants)

## Channel-Specific Testing Strategy

Use direct links to test messaging for different channels:

```
- LinkedIn posts → /landing/b (professional outcomes focused)
- Reddit communities → /landing/a (problem/pain focused)
- Twitter/X → /landing/c (benefit focused)
- Email outreach → /landing/a (time savings focused)
```

## Implementation Tips

**Cookie Persistence:**
Once a user sees a variant, they should always see that variant (don't confuse them by switching).

**Analytics Tracking:**
Each variant needs a tracking identifier so you know which variant drove each conversion.

**Minimum Sample Size:**
Get at least 100 visitors per variant before making decisions (300 total minimum).

**Statistical Significance:**
Use a calculator to determine if differences are meaningful or just random variation.

## Follow-Up Prompt

After implementing variants:

```
Here's my 3-variant landing page setup. Now help me:
1. Create a simple analytics schema to track performance
2. Write the tracking code to log views and conversions
3. Design a dashboard to compare variant performance
4. Determine the minimum sample size needed for statistical significance
```

## Next Steps

Once variants are live:
- **Track performance** → See `03-admin-analytics.md`
- Run for 1-2 weeks or until you hit minimum sample size
- Analyze which variant has highest conversion rate
- Use winning messaging in all marketing materials
