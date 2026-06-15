# Geometry - Lesson 4: Completing the Square

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to transform a circle equation from general form into center-radius form, then identify the circle's center and radius.

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 45 minutes |
| Difficulty | Intermediate |
| Main skill | Completing the square for x-terms and y-terms |
| Tools | Graph paper, calculator when needed, ruler for sketches |

<!-- visual-assets:start -->

## Visual Study Set

Use these diagrams as anchors while you study. Each one shows a different part of the conversion process.

![Flow from general form to center-radius form](/content/grade-10/math/quarter-3/topic-completing-the-square-circle-equations/images/general-to-center-radius-flow.svg)

![Circle graph showing center and radius](/content/grade-10/math/quarter-3/topic-completing-the-square-circle-equations/images/circle-center-radius-graph.svg)

![Completing the square with algebra tiles](/content/grade-10/math/quarter-3/topic-completing-the-square-circle-equations/images/completing-square-algebra-tiles.svg)

<!-- visual-assets:end -->

## What You Should Already Know

Before starting, make sure these ideas feel familiar:

- Center-radius form is `(x - h)^2 + (y - k)^2 = r^2`.
- The center is `(h, k)`.
- The radius is `r`, not `r^2`.
- A perfect-square trinomial can be written as a squared binomial.
- Whatever you add to one side of an equation must also be added to the other side.

### Pre-check / Readiness Quiz

Try these first. Then reveal the answers.

1. What is the center of `(x - 3)^2 + (y + 2)^2 = 25`?
2. What is the radius if `r^2 = 49`?
3. Complete the square: `x^2 + 8x + ___`.
4. Rewrite `y^2 - 6y + 9` as a squared binomial.

<details>
<summary>Reveal pre-check answers</summary>

1. The center is `(3, -2)`. Remember that `(y + 2)` means `(y - (-2))`.
2. The radius is `7`, because `r = sqrt(49)`.
3. Add `16`, because half of `8` is `4`, and `4^2 = 16`.
4. `y^2 - 6y + 9 = (y - 3)^2`.

If these felt difficult, review center-radius form and perfect-square trinomials before continuing.
</details>

## Key Vocabulary

| Term | Meaning |
|---|---|
| General form | A circle equation written like `x^2 + y^2 + Dx + Ey + F = 0` |
| Center-radius form | A circle equation written like `(x - h)^2 + (y - k)^2 = r^2` |
| Completing the square | Adding a constant that turns a quadratic expression into a perfect-square trinomial |
| Perfect-square trinomial | A trinomial such as `x^2 + 6x + 9` that rewrites as `(x + 3)^2` |
| Radius squared | The number on the right side of center-radius form |
| Center | The point `(h, k)` at the middle of the circle |

> [!TARGET] Target Skill
>
> Transform general form to center-radius form, then find the center and radius.

## Try Before You Read

A circular fountain is drawn on a coordinate map. Its equation is:

`x^2 + y^2 - 6x + 4y - 12 = 0`

At first glance, the center and radius are hidden. What algebra move could reveal them?

<details>
<summary>Reveal thinking guide</summary>

The x-terms and y-terms need to become squared binomials. Completing the square does that.
</details>

<details>
<summary>Reveal answer</summary>

Move the constant to the other side, group x-terms and y-terms, then complete the square for each group.
</details>

## Visual Prompt

General form hides the graph information. Center-radius form exposes it.

![Flow from general form to center-radius form](/content/grade-10/math/quarter-3/topic-completing-the-square-circle-equations/images/general-to-center-radius-flow.svg)

In this lesson, the main job is to turn the left side into two squared binomials.

## Main Concept Explanation

### 1. Start with General Form

A circle in general form often looks like this:

`x^2 + y^2 + Dx + Ey + F = 0`

The center and radius are not obvious yet because the x-terms and y-terms are expanded.

### 2. Group the x-terms and y-terms

Keep x with x and y with y:

`(x^2 + Dx) + (y^2 + Ey) = -F`

This prepares each variable group for completing the square.

### 3. Complete the Square Twice

For each variable group:

1. Take half of the linear coefficient.
2. Square that half.
3. Add that number inside the group.
4. Add the same number to the other side of the equation.

![Completing the square with algebra tiles](/content/grade-10/math/quarter-3/topic-completing-the-square-circle-equations/images/completing-square-algebra-tiles.svg)

For `x^2 + 10x`, half of `10` is `5`, and `5^2 = 25`. So:

`x^2 + 10x + 25 = (x + 5)^2`

For `y^2 - 4y`, half of `-4` is `-2`, and `(-2)^2 = 4`. So:

`y^2 - 4y + 4 = (y - 2)^2`

### 4. Read the Center and Radius

Once the equation is in center-radius form:

`(x - h)^2 + (y - k)^2 = r^2`

the center is `(h, k)` and the radius is `r`.

![Circle graph showing center and radius](/content/grade-10/math/quarter-3/topic-completing-the-square-circle-equations/images/circle-center-radius-graph.svg)

> [!WARNING] Sign Trap
>
> The center uses the opposite-looking signs from the binomials. `(x + 5)^2` means `x - (-5)`, so the x-coordinate of the center is `-5`.

![Common sign trap in center-radius form](/content/grade-10/math/quarter-3/topic-completing-the-square-circle-equations/images/common-sign-trap.svg)

## Rule Box

To convert `x^2 + y^2 + Dx + Ey + F = 0`:

1. Move `F` to the right side.
2. Group x-terms and y-terms.
3. Complete the square for the x-group.
4. Complete the square for the y-group.
5. Factor each perfect-square trinomial.
6. Read center `(h, k)` and radius `r`.

| Expression | Number to add | Squared binomial |
|---|---:|---|
| `x^2 + 8x` | `16` | `(x + 4)^2` |
| `x^2 - 12x` | `36` | `(x - 6)^2` |
| `y^2 + 2y` | `1` | `(y + 1)^2` |
| `y^2 - 10y` | `25` | `(y - 5)^2` |

## Worked Example

### Example: Convert to Center-Radius Form

**Problem:** Transform `x^2 + y^2 - 6x + 4y - 12 = 0` to center-radius form. Then identify the center and radius.

**Step 1: Move the constant.**

`x^2 + y^2 - 6x + 4y = 12`

**Step 2: Group x-terms and y-terms.**

`(x^2 - 6x) + (y^2 + 4y) = 12`

**Step 3: Complete the square for each group.**

For `x^2 - 6x`, half of `-6` is `-3`, and `(-3)^2 = 9`.

For `y^2 + 4y`, half of `4` is `2`, and `2^2 = 4`.

Add both values to both sides:

`(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4`

**Step 4: Factor and simplify.**

`(x - 3)^2 + (y + 2)^2 = 25`

**Step 5: Read the graph information.**

Center: `(3, -2)`

Radius: `5`

> [!CHECK] Reasonableness Check
>
> The right side is `25`, so the radius is `sqrt(25) = 5`. Do not report the radius as `25`.

## Guided Practice

### Guided Problem 1

Convert `x^2 + y^2 + 8x - 10y + 16 = 0` to center-radius form.

<details>
<summary>Hint 1</summary>

Move the constant first: `x^2 + y^2 + 8x - 10y = -16`.
</details>

<details>
<summary>Hint 2</summary>

Complete each square: add `16` for the x-group and `25` for the y-group.
</details>

<details>
<summary>Show solution</summary>

`(x^2 + 8x + 16) + (y^2 - 10y + 25) = -16 + 16 + 25`

`(x + 4)^2 + (y - 5)^2 = 25`

Center: `(-4, 5)`, radius: `5`.
</details>

### Guided Problem 2

Convert `x^2 + y^2 - 2x - 12y + 21 = 0`.

<details>
<summary>Hint 1</summary>

Move `21` to the right: `x^2 + y^2 - 2x - 12y = -21`.
</details>

<details>
<summary>Hint 2</summary>

For `x^2 - 2x`, add `1`. For `y^2 - 12y`, add `36`.
</details>

<details>
<summary>Show solution</summary>

`(x^2 - 2x + 1) + (y^2 - 12y + 36) = -21 + 1 + 36`

`(x - 1)^2 + (y - 6)^2 = 16`

Center: `(1, 6)`, radius: `4`.
</details>

### Guided Problem 3

Find the center and radius of `x^2 + y^2 + 14x + 6y + 33 = 0`.

<details>
<summary>Hint 1</summary>

After moving the constant, complete the square with `49` for x and `9` for y.
</details>

<details>
<summary>Hint 2</summary>

The binomials will be `(x + 7)^2` and `(y + 3)^2`.
</details>

<details>
<summary>Show solution</summary>

`x^2 + y^2 + 14x + 6y = -33`

`(x^2 + 14x + 49) + (y^2 + 6y + 9) = -33 + 49 + 9`

`(x + 7)^2 + (y + 3)^2 = 25`

Center: `(-7, -3)`, radius: `5`.
</details>

## Mini-Quiz

Answer these without opening the solutions first.

1. What number completes `x^2 - 8x + ___`?
2. What is the center of `(x + 2)^2 + (y - 9)^2 = 36`?
3. What is the radius of `(x - 4)^2 + (y + 1)^2 = 81`?
4. In `x^2 + y^2 + 4x - 6y - 3 = 0`, what constant is added to complete the x-square?

<details>
<summary>Reveal mini-quiz answers</summary>

1. `16`, because half of `-8` is `-4`, and `(-4)^2 = 16`.
2. `(-2, 9)`.
3. `9`.
4. `4`, because half of `4` is `2`, and `2^2 = 4`.
</details>

## Independent Practice

Try these on your own. Use the worked example as a model.

1. Convert `x^2 + y^2 - 4x + 8y - 5 = 0`.
2. Convert `x^2 + y^2 + 10x - 2y + 17 = 0`.
3. Find the center and radius of `x^2 + y^2 - 16x + 12y + 75 = 0`.
4. Write a general-form equation that converts to `(x - 2)^2 + (y + 3)^2 = 49`.
5. Explain why adding `9` to the x-group also requires adding `9` to the other side.

<details>
<summary>Reveal independent practice answers</summary>

1. `(x - 2)^2 + (y + 4)^2 = 25`; center `(2, -4)`, radius `5`.
2. `(x + 5)^2 + (y - 1)^2 = 9`; center `(-5, 1)`, radius `3`.
3. `(x - 8)^2 + (y + 6)^2 = 25`; center `(8, -6)`, radius `5`.
4. `x^2 + y^2 - 4x + 6y - 36 = 0`.
5. Adding to only one side changes the equation. To keep an equivalent equation, the same amount must be added to both sides.
</details>

## Misconception Alerts

| Misconception | Correction |
|---|---|
| The center has the same signs as the binomials. | Read `(x - h)` and `(y - k)`. For `(x + 5)^2`, `h = -5`. |
| The radius is the number on the right side. | The right side is `r^2`. Take the square root to find `r`. |
| Only the left side needs the added constants. | Add the same constants to the right side to keep the equation equivalent. |
| Completing the square uses the whole coefficient squared. | Use half the coefficient, then square that half. |

## Error Analysis

A learner converts:

`x^2 + y^2 - 10x + 4y + 13 = 0`

Their work:

`(x - 5)^2 + (y + 2)^2 = -13 + 25 + 2`

`(x - 5)^2 + (y + 2)^2 = 14`

Center: `(5, -2)`, radius: `14`

What mistake happened?

<details>
<summary>Reveal mistake explanation</summary>

The y-square completion is wrong. For `y^2 + 4y`, half of `4` is `2`, and `2^2 = 4`, not `2`. The right side should be `-13 + 25 + 4 = 16`.

Correct equation:

`(x - 5)^2 + (y + 2)^2 = 16`

Center: `(5, -2)`, radius: `4`.
</details>

## Self-Explanation Prompts

Use these to check whether the process is making sense.

1. Why do you group the x-terms and y-terms before completing the square?
2. Why is `(x + 6)^2` connected to a center x-coordinate of `-6`?
3. How can you check whether your radius answer is reasonable?
4. What changes if the constant in general form is already negative?

<details>
<summary>Sample responses</summary>

1. Each variable needs its own perfect-square trinomial.
2. Center-radius form uses `(x - h)`, so `(x + 6)` means `x - (-6)`.
3. The radius must be positive, and it is the square root of the right side.
4. Moving a negative constant to the right side makes it positive, but the same completing-square steps still apply.
</details>

## Extension Challenge

Convert `x^2 + y^2 - 18x + 20y + 145 = 0`, then describe the graph.

<details>
<summary>Hint</summary>

Add `81` to complete the x-square and `100` to complete the y-square.
</details>

<details>
<summary>Full solution</summary>

`x^2 + y^2 - 18x + 20y = -145`

`(x^2 - 18x + 81) + (y^2 + 20y + 100) = -145 + 81 + 100`

`(x - 9)^2 + (y + 10)^2 = 36`

The graph is a circle with center `(9, -10)` and radius `6`.
</details>

## Mastery Checklist

Check each statement when it is true for you:

- I can recognize the general form of a circle equation.
- I can move the constant to the right side before completing the square.
- I can compute the square-completion value for x-terms.
- I can compute the square-completion value for y-terms.
- I can factor perfect-square trinomials into squared binomials.
- I can identify the center from center-radius form.
- I can identify the radius by taking the square root of `r^2`.
- I can explain a common sign error in circle equations.

> [!PRACTICE] Next Step
>
> Use the practice exam for immediate skill checks. Use the assessment after you can convert equations without opening the hints.

## Final Summary

Completing the square turns hidden circle information into visible graph information. Start from general form, group x and y terms, add the correct square-completion constants to both sides, factor the trinomials, and read the center and radius from center-radius form.
