# Feature Brainstorm from User Problem

## Purpose

Generate creative feature ideas by deeply analyzing a specific user problem. This prompt helps you move from problem identification to solution exploration by considering multiple perspectives, constraints, and innovative approaches.

## When to Use

- You've identified a user pain point but aren't sure how to solve it
- You need to expand your thinking beyond obvious solutions
- You're starting a discovery phase for a new feature area
- You want to generate multiple solution options before committing to one
- Your team is stuck on a single approach and needs fresh perspectives

## The Prompt

```
I'm working on {{PRODUCT_NAME}}, which is {{PRODUCT_DESCRIPTION}}.

Our users are experiencing this problem: {{USER_PROBLEM}}

Context:
- Target users: {{TARGET_USERS}}
- Current behavior/workaround: {{CURRENT_BEHAVIOR}}
- Impact of the problem: {{IMPACT}}
- Constraints: {{CONSTRAINTS}}

Please help me brainstorm feature ideas to solve this problem by:

1. Restating the core user need in 2-3 different ways to ensure we're solving the right problem
2. Generating 10 diverse feature ideas ranging from quick wins to ambitious solutions
3. For each idea, include:
   - Feature name
   - One-sentence description
   - Estimated effort (Low/Medium/High)
   - Unique advantage of this approach
   - Potential risks or drawbacks

4. Categorizing ideas by:
   - Quick wins (high impact, low effort)
   - Strategic bets (high impact, high effort)
   - Experiments (learning-focused, low effort)

5. Suggesting which 3 ideas to prototype first and why
```

## How to Customize

- **{{PRODUCT_NAME}}**: Your product name (e.g., "TaskFlow Pro", "ShopEase")
- **{{PRODUCT_DESCRIPTION}}**: Brief product description (e.g., "a project management tool for remote teams")
- **{{USER_PROBLEM}}**: The specific pain point (e.g., "Users can't easily track dependencies between tasks")
- **{{TARGET_USERS}}**: Who experiences this problem (e.g., "Engineering team leads managing 5-10 developers")
- **{{CURRENT_BEHAVIOR}}**: How users work around it now (e.g., "They use spreadsheets or Slack threads")
- **{{IMPACT}}**: Why this matters (e.g., "Teams miss deadlines because blockers aren't visible")
- **{{CONSTRAINTS}}**: Limitations to consider (e.g., "Must work on mobile", "Can't require admin permissions", "Budget: $50K")

## Example

### Input:

```
I'm working on MealPlanner, which is a meal planning and grocery shopping app for busy families.

Our users are experiencing this problem: Parents struggle to create meal plans that accommodate multiple family members' dietary restrictions and preferences.

Context:
- Target users: Parents with 2-4 children, ages 5-18, with varying dietary needs
- Current behavior/workaround: They manually write meal plans on paper or use notes apps, constantly checking multiple sources for what each kid can/will eat
- Impact of the problem: Meal planning takes 2-3 hours per week, leads to repeated meals, and results in food waste when kids refuse to eat
- Constraints: Must work on mobile, needs to integrate with existing recipe database, 8-week development timeline

Please help me brainstorm feature ideas to solve this problem by:
[rest of prompt as above]
```

### Output Sample:

```
Core User Need Restatements:
1. "Parents need a way to quickly generate meal plans that automatically account for each family member's dietary requirements and preferences"
2. "Families need a system that reduces decision fatigue by suggesting meals everyone can enjoy"
3. "Parents need confidence that their meal plans will be accepted by their children without constant negotiations"

10 Feature Ideas:

1. Family Profile Builder
   - Description: Create individual profiles for each family member with dietary restrictions, allergies, and preferences
   - Effort: Medium
   - Advantage: Once set up, automatically filters all meal suggestions
   - Risk: Initial setup might feel tedious for users

2. Smart Meal Recommendations
   - Description: AI-powered suggestions that only show meals matching all family members' requirements
   - Effort: High
   - Advantage: Eliminates manual checking across multiple restrictions
   - Risk: May feel limiting if filters are too restrictive

3. "Everyone Can Eat This" Badge
   - Description: Visual indicator on recipes showing compatibility with all family profiles
   - Effort: Low
   - Advantage: Quick visual scanning of options
   - Risk: Doesn't solve the planning problem, just makes it easier to spot solutions

[... 7 more ideas ...]

Quick Wins:
- "Everyone Can Eat This" Badge
- Dietary Restriction Tags on Recipes
- [one more]

Strategic Bets:
- Smart Meal Recommendations
- [two more]

Experiments:
- [three learning-focused ideas]

Top 3 to Prototype:
1. Family Profile Builder - Essential foundation for any personalized solution
2. Smart Meal Recommendations - Highest potential impact on time savings
3. "Everyone Can Eat This" Badge - Quick validation of whether filtering approach resonates
```

## Tips

- **Be specific about the problem**: Vague problems lead to vague solutions. Include actual user quotes or observations.
- **Include real constraints**: Budget, timeline, technical limitations help AI generate realistic ideas.
- **Ask for diverse solutions**: Explicitly request a range from simple to complex to avoid getting only ambitious ideas.
- **Request effort estimates**: Helps with prioritization conversations later.
- **Follow up prompts**: After getting initial ideas, pick 2-3 and ask for detailed implementation approaches.
- **Combine with validation**: Use ideas as starting points for user research, not final solutions.
- **Iterate on the problem statement**: If ideas don't resonate, reframe the core problem and run the prompt again.
- **Share context about past attempts**: If you've tried solutions before, mention what didn't work and why.

## Related Prompts

- `competitive-feature-analysis.md` - Analyze how competitors solve similar problems
- `user-interview-guide-for-feature.md` - Validate feature ideas with users
- `feature-prioritization-framework.md` - Decide which ideas to build first

## Tags

`ideation` `problem-solving` `feature-discovery` `brainstorming` `user-problems` `solution-design`

---

**Last Updated:** 2025-10-12
