# Equation from Conditions

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to write a circle equation when you know the center and at least one point on the circle.

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 40 minutes |
| Difficulty | Intermediate |
| Main skill | Using a point-on-circle condition to find radius |
| Tools | Graph paper, ruler, calculator when needed |

<!-- visual-assets:start -->

## Visual Study Set

Use these diagrams as anchors while you study. Each one shows how a condition becomes a usable radius.

![A point on a circle determines the radius from the center](/content/grade-10/math/quarter-3/topic-equation-from-conditions/images/point-condition-radius.svg)

![Distance formula turns center and point coordinates into radius squared](/content/grade-10/math/quarter-3/topic-equation-from-conditions/images/distance-to-radius-squared.svg)

![Workflow for writing a circle equation from conditions](/content/grade-10/math/quarter-3/topic-equation-from-conditions/images/condition-check-workflow.svg)

<!-- visual-assets:end -->

## What You Should Already Know

Before using conditions, check these ideas:

- A circle equation in center-radius form is `(x - h)^2 + (y - k)^2 = r^2`.
- The center is `(h, k)`.
- A point on the circle is exactly one radius away from the center.
- The distance formula comes from the Pythagorean theorem.
- The right side of the circle equation is `r^2`, not always `r`.

### Pre-check / Readiness Quiz

Try these first. Then reveal the answers.

1. What is the center of `(x - 2)^2 + (y + 5)^2 = 49`?
2. What is `(-4)^2`?
3. What is the horizontal distance from `(1, 3)` to `(6, 3)`?
4. If `r^2 = 25`, what is `r`?

<details>
<summary>Reveal pre-check answers</summary>

1. `(2, -5)`
2. `16`
3. `5`
4. `5`, because radius is a distance and is positive

If more than one item felt uncertain, review center-radius form and distance on the coordinate plane before continuing.
</details>

## Key Vocabulary

| Term | Meaning |
|---|---|
| Condition | Given information that the circle must satisfy |
| Point on the circle | A point exactly one radius from the center |
| Radius | Distance from the center to any point on the circle |
| Squared radius | The value `r^2` on the right side of the equation |
| Distance formula | `d = sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2)` |
| Center-radius form | `(x - h)^2 + (y - k)^2 = r^2` |

> [!IMPORTANT] Core Idea
>
> If the center is known and one point lies on the circle, the distance from the center to that point is the radius.

## Visual Prompt

A sprinkler is placed at a fixed point in a garden. Water reaches a marker stake. If the sprinkler is the center and the marker is on the edge, what can you determine?

<details>
<summary>Reveal thinking guide</summary>

The distance from the sprinkler to the marker is the radius. Once you know the radius and center, you can write the circle equation.
</details>

<details>
<summary>Reveal answer</summary>

You can determine the radius, or at least `r^2`, from the center and point-on-circle condition.
</details>

## Main Concept Explanation

### 1. A Point Condition Gives the Radius

If a circle has center `(h, k)` and passes through point `(a, b)`, then the radius is the distance from `(h, k)` to `(a, b)`.

![A point on a circle determines the radius from the center](/content/grade-10/math/quarter-3/topic-equation-from-conditions/images/point-condition-radius.svg)

Instead of finding `r` first, you can often find `r^2` directly:

$$ r^2 = (a - h)^2 + (b - k)^2 $$

Then write:

$$ (x - h)^2 + (y - k)^2 = r^2 $$

### 2. Horizontal and Vertical Distances Are Faster

If the center and point have the same y-coordinate, the radius is horizontal.

Example: center `(2, 3)`, point `(7, 3)`

The radius is `7 - 2 = 5`, so `r^2 = 25`.

If the center and point have the same x-coordinate, the radius is vertical.

Example: center `(-1, -4)`, point `(-1, 2)`

The radius is `2 - (-4) = 6`, so `r^2 = 36`.

### 3. Diagonal Distances Use the Distance Formula

For diagonal distances, use squared differences:

![Distance formula turns center and point coordinates into radius squared](/content/grade-10/math/quarter-3/topic-equation-from-conditions/images/distance-to-radius-squared.svg)

If center `(1, -2)` and point `(4, 2)` are given:

$$ r^2 = (4 - 1)^2 + (2 - (-2))^2 $$

$$ r^2 = 3^2 + 4^2 = 9 + 16 = 25 $$

The equation is:

$$ (x - 1)^2 + (y + 2)^2 = 25 $$

## Rule Box / Formula Box

| Given | Move |
|---|---|
| Center `(h, k)` | Use `(x - h)^2 + (y - k)^2` |
| Point on circle `(a, b)` | Compute `r^2 = (a - h)^2 + (b - k)^2` |
| Same x-coordinate | Radius is the vertical distance |
| Same y-coordinate | Radius is the horizontal distance |
| Final equation | Use the center and the squared radius |

![Workflow for writing a circle equation from conditions](/content/grade-10/math/quarter-3/topic-equation-from-conditions/images/condition-check-workflow.svg)

## Worked Example

### Example: Write the Equation from a Center and Point

**Problem:** A circle has center `(-2, 1)` and passes through `(4, 9)`. Write its equation.

**Step 1: Identify the center.**

`h = -2`, `k = 1`

So the left side is:

$$ (x + 2)^2 + (y - 1)^2 $$

**Step 2: Find `r^2` using the point condition.**

$$ r^2 = (4 - (-2))^2 + (9 - 1)^2 $$

$$ r^2 = 6^2 + 8^2 $$

$$ r^2 = 36 + 64 = 100 $$

**Step 3: Write the equation.**

$$ (x + 2)^2 + (y - 1)^2 = 100 $$

**Answer:** `(x + 2)^2 + (y - 1)^2 = 100`

## Guided Practice with Revealable Hints

### Guided Problem 1

A circle has center `(3, 4)` and passes through `(8, 4)`. Write the equation.

<details>
<summary>Hint 1</summary>

The points have the same y-coordinate, so the radius is horizontal.
</details>

<details>
<summary>Hint 2</summary>

The radius is `8 - 3 = 5`, so `r^2 = 25`.
</details>

<details>
<summary>Show solution</summary>

`(x - 3)^2 + (y - 4)^2 = 25`
</details>

### Guided Problem 2

A circle has center `(-1, 6)` and passes through `(-1, -2)`. Write the equation.

<details>
<summary>Hint 1</summary>

The points have the same x-coordinate, so the radius is vertical.
</details>

<details>
<summary>Hint 2</summary>

The distance from `6` to `-2` is `8`, so `r^2 = 64`.
</details>

<details>
<summary>Show solution</summary>

`(x + 1)^2 + (y - 6)^2 = 64`
</details>

### Guided Problem 3

A circle has center `(2, -3)` and passes through `(6, 0)`. Write the equation.

<details>
<summary>Hint 1</summary>

Use `r^2 = (a - h)^2 + (b - k)^2`.
</details>

<details>
<summary>Hint 2</summary>

`r^2 = (6 - 2)^2 + (0 - (-3))^2 = 4^2 + 3^2`.
</details>

<details>
<summary>Show solution</summary>

`r^2 = 16 + 9 = 25`, so the equation is `(x - 2)^2 + (y + 3)^2 = 25`.
</details>

## Mini-Quiz

Answer these before opening the solutions.

1. Center `(0, 0)`, point `(3, 4)`
2. Center `(5, -1)`, point `(5, 2)`
3. Center `(-3, 2)`, point `(1, 5)`
4. Center `(4, 4)`, point `(-2, 4)`

<details>
<summary>Reveal mini-quiz answers</summary>

1. `x^2 + y^2 = 25`
2. `(x - 5)^2 + (y + 1)^2 = 9`
3. `(x + 3)^2 + (y - 2)^2 = 25`
4. `(x - 4)^2 + (y - 4)^2 = 36`
</details>

## Independent Practice

Write each circle equation.

1. Center `(1, 2)`, point `(1, 7)`
2. Center `(-4, 0)`, point `(2, 0)`
3. Center `(3, -5)`, point `(6, -1)`
4. Center `(-2, -3)`, point `(2, 0)`
5. Center `(0, 6)`, point `(-8, 0)`
6. Center `(7, 1)`, point `(4, 5)`

<details>
<summary>Reveal answer key with explanations</summary>

1. `(x - 1)^2 + (y - 2)^2 = 25`. The vertical radius is `5`.
2. `(x + 4)^2 + y^2 = 36`. The horizontal radius is `6`.
3. `(x - 3)^2 + (y + 5)^2 = 25`. Here `r^2 = 3^2 + 4^2`.
4. `(x + 2)^2 + (y + 3)^2 = 25`. Here `r^2 = 4^2 + 3^2`.
5. `x^2 + (y - 6)^2 = 100`. Here `r^2 = 8^2 + (-6)^2 = 100`.
6. `(x - 7)^2 + (y - 1)^2 = 25`. Here `r^2 = (-3)^2 + 4^2 = 25`.
</details>

## Misconception Alerts

> [!WARNING] Mistake 1: Using the point as the center
>
> The center determines the binomials. The point on the circle only helps you find the radius.

> [!WARNING] Mistake 2: Writing the radius instead of radius squared
>
> If the distance is `5`, the equation ends with `25`, not `5`.

> [!WARNING] Mistake 3: Losing signs in the center
>
> For center `(-2, 1)`, the x-part is `(x + 2)^2`, not `(x - 2)^2`.

## Error Analysis

Incorrect solution:

**Problem:** Center `(2, -1)`, point `(5, 3)`

Student answer:

`(x - 5)^2 + (y - 3)^2 = 7`

What went wrong?

<details>
<summary>Reveal mistake explanation</summary>

The student used the point `(5, 3)` as the center. The center should be `(2, -1)`. The student also added the distances `3 + 4 = 7` instead of computing the squared radius.
</details>

<details>
<summary>Reveal corrected solution</summary>

Use center `(2, -1)`: `(x - 2)^2 + (y + 1)^2`.

Find `r^2`:

`(5 - 2)^2 + (3 - (-1))^2 = 3^2 + 4^2 = 25`

Correct equation:

`(x - 2)^2 + (y + 1)^2 = 25`
</details>

## Self-Explanation Prompts

Write or say a short response for each prompt.

1. Why does a point on the circle tell you the radius?
2. Why is it often better to compute `r^2` directly?
3. How do you decide which coordinates belong in the binomials?
4. How can substitution check whether your equation is correct?

<details>
<summary>Reveal sample responses</summary>

1. A point on the circle is one radius away from the center by definition.
2. The circle equation uses `r^2`, so the squared distance can go directly on the right side.
3. The center coordinates become `h` and `k`; the point-on-circle coordinates are only used to find `r^2`.
4. Substitute the point's coordinates into the equation. If the left side equals the right side, the point satisfies the circle.
</details>

## Extension Challenge

A circle has center `(a, 2)` and passes through `(1, 6)`. Its radius squared is `25`. Find possible values of `a`.

<details>
<summary>Hint</summary>

Use `25 = (1 - a)^2 + (6 - 2)^2`.
</details>

<details>
<summary>Reveal full solution</summary>

`25 = (1 - a)^2 + 16`

`9 = (1 - a)^2`

So `1 - a = 3` or `1 - a = -3`.

If `1 - a = 3`, then `a = -2`.

If `1 - a = -3`, then `a = 4`.

Possible values: `a = -2` or `a = 4`.
</details>

## Mastery Checklist

Check the statements that feel true now.

- I can identify the center from given information.
- I can use a point on the circle to determine the radius.
- I can compute `r^2` with the distance formula.
- I can write center-radius form with correct signs.
- I can avoid writing `r` when the equation needs `r^2`.
- I can check a circle equation by substituting a point.

<details>
<summary>Check my readiness</summary>

If at least five statements feel solid, move to the practice quiz. If fewer than five feel solid, redo the worked example and the guided practice before taking the assessment.
</details>

> [!PRACTICE] Next Step
>
> Use the practice quiz for low-stakes checking. Use the assessment when you can write the equation without looking at the worked example.
