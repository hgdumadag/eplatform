# College Entrance Review: Systems and Second-Degree Equations

> [!GOAL] Weekly Goal
>
> Build the exam habit of choosing the right structure before doing the algebra.
>
> **Main habit:** Ask two questions first: "What must be true at the same time?" and "Is this relationship linear or quadratic?"

## Weekly Roadmap

| Session | Main Focus | Target Time | Exam Use |
| --- | --- | --- | --- |
| 1 | Systems as simultaneous truths | 30-35 minutes | Use the practice exam to drill substitution and elimination choices |
| 2 | Quadratics as roots of a parabola | 30-35 minutes | Study the worked examples, then solve under light time pressure |
| 3 | Word problems, error repair, and timed transfer | 25-30 minutes | Finish with the assessment exam as a checkpoint |

---

## Session 1: Systems Mean "Both Are True"

> [!TARGET] Session Target
>
> **Target time:** 30-35 minutes
>
> See a system as one ordered pair that makes two statements true at the same time.

### Warm-Up Recall

1. Solve $2x + 5 = 17$.
2. If $y = 3x - 1$, find $y$ when $x = 2$.
3. What does the ordered pair $(4, 1)$ tell you?

### Core Idea 1: The Solution Is an Intersection and a Check

If two lines cross at $(a, b)$, that point satisfies both equations. Solving a system means finding the shared ordered pair, not just finding $x$ or $y$ alone.

**Example 1:** Find the solution of

$$y = x + 1$$
$$y = -x + 5$$

Set the expressions for $y$ equal:

$$x + 1 = -x + 5$$
$$2x = 4$$
$$x = 2$$

Then:

$$y = 3$$

Check in both equations:

- $3 = 2 + 1$
- $3 = -2 + 5$

So the solution is **$(2, 3)$**.

> [!TIP] Fast Interpretation Rule
>
> - One intersection means one solution.
> - Parallel lines mean no solution.
> - The same line written two ways means infinitely many solutions.

### Core Idea 2: Choose the Method from the Structure

| If you notice... | Best first move | Why |
| --- | --- | --- |
| A variable is already isolated, like $y = 2x - 5$ | Substitution | You can replace immediately |
| Coefficients are opposites or easy to match | Elimination | One variable disappears fast |
| The problem asks what point fits both conditions | Graph or check the pair | It keeps the meaning visible |

**Example 2: Substitution**

Solve:

$$x - y = 1$$
$$2x + 3y = 12$$

From the first equation:

$$x = y + 1$$

Substitute into the second:

$$2(y + 1) + 3y = 12$$
$$5y + 2 = 12$$
$$5y = 10$$
$$y = 2$$

Then:

$$x = 3$$

So the solution is **$(3, 2)$**.

**Example 3: Elimination**

Solve:

$$2x + y = 11$$
$$x - y = 1$$

Add the equations:

$$3x = 12$$
$$x = 4$$

Substitute into $x - y = 1$:

$$4 - y = 1$$
$$y = 3$$

So the solution is **$(4, 3)$**.

```interactive
{
  "spec": "interactives/elimination-sign-check.json",
  "mode": "interactive",
  "height": 360,
  "title": "Elimination Sign Check"
}
```

> [!WARNING] Common System Trap
>
> When you multiply an equation by $-1$, every term changes sign. Missing one sign creates a fake solution.

### Mini Check

- Which method is faster for $y = 4x - 7$ and $2x + y = 8$?
- Which method is faster for $3x + 2y = 14$ and $5x - 2y = 6$?
- How would you check an ordered pair in a system?

---

## Session 2: Quadratics Mean Roots and Turning Points

> [!TARGET] Session Target
>
> **Target time:** 30-35 minutes
>
> Connect the algebra of a quadratic equation to the graph of a parabola so the solving method makes sense.

### Warm-Up Recall

1. Factor $x^2 + 5x + 6$.
2. Expand $(x - 4)(x + 1)$.
3. What does it mean when $y = 0$ on a graph?

### Core Idea 1: A Quadratic Root Is an X-Intercept

A second-degree equation has the form

$$ax^2 + bx + c = 0 \qquad a \neq 0$$

Its solutions are the $x$-values where the parabola meets the $x$-axis.

**Example 4: Solve by factoring**

Solve:

$$x^2 - 5x + 6 = 0$$

Factor:

$$(x - 2)(x - 3) = 0$$

So:

$$x = 2 \quad \text{or} \quad x = 3$$

These are the two $x$-intercepts of the parabola.

```interactive
{
  "spec": "interactives/quadratic-roots-slider.json",
  "mode": "interactive",
  "height": 420,
  "title": "How c Changes the Roots"
}
```

### Core Idea 2: Pick the Method That Fits the Equation

| Situation | Best first move | Reason |
| --- | --- | --- |
| The trinomial factors cleanly | Factoring | Fastest under exam pressure |
| Factoring is not obvious | Quadratic formula | Works every time |
| You only need the number of real roots | Discriminant | No full solving needed |

**Example 5: Solve with the quadratic formula**

Solve:

$$x^2 - 6x + 1 = 0$$

Here $a = 1$, $b = -6$, and $c = 1$.

$$x = \frac{-(-6) \pm \sqrt{(-6)^2 - 4(1)(1)}}{2(1)}$$
$$x = \frac{6 \pm \sqrt{36 - 4}}{2}$$
$$x = \frac{6 \pm \sqrt{32}}{2}$$
$$x = \frac{6 \pm 4\sqrt{2}}{2}$$
$$x = 3 \pm 2\sqrt{2}$$

**Example 6: Use the discriminant before solving**

For

$$2x^2 + 4x + 5 = 0$$

$$\Delta = b^2 - 4ac = 4^2 - 4(2)(5) = 16 - 40 = -24$$

Since $\Delta < 0$, the equation has **no real roots**.

> [!TIP] Method-Choice Shortcut
>
> - If the numbers are small and friendly, try factoring first.
> - If the constant or middle term looks awkward, use the quadratic formula.
> - If the question says "how many real roots," compute the discriminant immediately.

> [!CHECK] Error Debug
>
> If a student writes
>
> $$x = \frac{-6 \pm \sqrt{36 - 4}}{1}$$
>
> the denominator is wrong. In the quadratic formula, the denominator is always $2a$, not just $a$.

---

## Session 3: Translate, Solve, and Look Back

> [!TARGET] Session Target
>
> **Target time:** 25-30 minutes
>
> Turn exam-style wording into structure, then verify whether the answer makes sense.

### Know and Wonder Routine

Before solving a word problem, write:

- `Know:` facts or totals given in the problem
- `Wonder:` what exact value the problem asks for
- `Structure:` system or quadratic?

This keeps the setup clear and reduces careless errors.

### Worked Example 7: System from a Ticket Problem

Student tickets cost Php90 and adult tickets cost Php150. A total of 14 tickets were sold for Php1500. How many adult tickets were sold?

Let:

- $a$ = adult tickets
- $s$ = student tickets

From the problem:

$$a + s = 14$$
$$150a + 90s = 1500$$

Divide the second equation by 30:

$$5a + 3s = 50$$

From $a + s = 14$, we get:

$$s = 14 - a$$

Substitute:

$$5a + 3(14 - a) = 50$$
$$5a + 42 - 3a = 50$$
$$2a = 8$$
$$a = 4$$

So **4 adult tickets** were sold.

### Worked Example 8: Quadratic from Area

A rectangle has width $x$ and length $x + 3$. Its area is 40 square units. Find the dimensions.

Set up the equation:

$$x(x + 3) = 40$$
$$x^2 + 3x - 40 = 0$$

Factor:

$$(x + 8)(x - 5) = 0$$

So $x = -8$ or $x = 5$.

Reject the negative width.  
Width $= 5$, length $= 8$.

> [!IMPORTANT] Look-Back Questions
>
> - Does the ordered pair satisfy both equations?
> - Does each root make the original quadratic equal to 0?
> - Does the answer make sense in the real situation? Lengths and ticket counts cannot be negative.

> [!CHECK] Personal Error Log
>
> Tag each miss with one label:
>
> - `setup`
> - `substitution`
> - `elimination-sign`
> - `factor-pair`
> - `formula-substitution`
> - `reasonableness-check`

## Key Takeaways

- A system solution is the ordered pair that makes both equations true.
- A quadratic root is an $x$-value where the parabola hits the $x$-axis.
- Method choice is a real test skill: substitution and elimination depend on structure, while factoring, the quadratic formula, and the discriminant answer different needs.
- Strong exam solvers always check whether the final answer fits the original conditions.

> [!PRACTICE] How to Use This Pack
>
> - Start with the **practice exam** to drill method choice and quick solving.
> - Use the **assessment exam** after Session 3 as a mixed checkpoint.
> - If you miss an item, rewrite only the setup and the first correct move before solving again.
