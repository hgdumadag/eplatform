# Geometry - Lesson 7: Equation from Diameter Endpoints

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to write the equation of a circle when the endpoints of a diameter are given.

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 40 minutes |
| Difficulty | Intermediate |
| Main skill | Building a circle equation from two endpoint coordinates |
| Tools | Graph paper, ruler, calculator when needed |

<!-- visual-assets:start -->

## Visual Study Set

Use these images as anchors. They show how diameter endpoints lead to the center, radius, and final equation.

![Diameter endpoints with midpoint center](/content/grade-10/math/quarter-3/topic-equation-from-diameter-endpoints/images/diameter-midpoint-center.svg)

![Distance from endpoint to center gives radius](/content/grade-10/math/quarter-3/topic-equation-from-diameter-endpoints/images/distance-to-radius.svg)

![Workflow from diameter endpoints to circle equation](/content/grade-10/math/quarter-3/topic-equation-from-diameter-endpoints/images/diameter-equation-workflow.svg)

<!-- visual-assets:end -->

## What You Should Already Know

Before starting, make sure these skills feel familiar:

- Ordered pairs are written as `(x, y)`.
- The midpoint of a segment is the average of the x-coordinates and the average of the y-coordinates.
- The distance formula finds the length between two points.
- A circle with center `(h, k)` and radius `r` has equation `(x - h)^2 + (y - k)^2 = r^2`.

### Pre-check / Readiness Quiz

Try these first. Then reveal the answers.

1. What is the midpoint of `(2, 4)` and `(8, 4)`?
2. What is the distance from `(0, 0)` to `(3, 4)`?
3. In `(x - 5)^2 + (y + 1)^2 = 16`, what is the center?
4. If the diameter of a circle is `10`, what is the radius?

<details>
<summary>Reveal pre-check answers</summary>

1. `(5, 4)`
2. `5`
3. `(5, -1)`
4. `5`

If more than one item felt uncertain, review midpoint, distance, and center-radius form before continuing.
</details>

## Key Vocabulary

| Term | Meaning |
|---|---|
| Circle | The set of all points the same distance from one fixed point |
| Diameter | A segment that passes through the center and has endpoints on the circle |
| Radius | Half the diameter; the distance from the center to any point on the circle |
| Center | The midpoint of any diameter |
| Midpoint formula | `((x1 + x2)/2, (y1 + y2)/2)` |
| Distance formula | `sqrt((x2 - x1)^2 + (y2 - y1)^2)` |
| Center-radius form | `(x - h)^2 + (y - k)^2 = r^2` |

## Visual Prompt

A circular fountain has two opposite edge markers on a coordinate map. The markers are endpoints of a diameter.

What can you find from only those two points?

<details>
<summary>Reveal thinking guide</summary>

The midpoint of the two endpoints is the center of the circle. The distance from the center to either endpoint is the radius.
</details>

<details>
<summary>Reveal answer</summary>

You can write the complete circle equation by finding the midpoint for the center and the radius from the center to an endpoint.
</details>

## Main Concept Explanation

### 1. A Diameter Hides the Center

The center of a circle is exactly halfway between the endpoints of any diameter.

![Diameter endpoints with midpoint center](/content/grade-10/math/quarter-3/topic-equation-from-diameter-endpoints/images/diameter-midpoint-center.svg)

If the diameter endpoints are `A(x1, y1)` and `B(x2, y2)`, then:

$$\text{center} = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$$

### 2. The Radius Is Half the Diameter

Once you know the center, the radius is the distance from the center to either endpoint.

![Distance from endpoint to center gives radius](/content/grade-10/math/quarter-3/topic-equation-from-diameter-endpoints/images/distance-to-radius.svg)

You can also find the full distance from endpoint to endpoint and divide by `2`.

> [!TIP] Efficient Move
>
> If the endpoint-to-endpoint distance is easy, divide it by 2. If the center is already known, use center-to-endpoint distance.

### 3. Write the Equation

After finding the center `(h, k)` and radius `r`, use:

$$ (x - h)^2 + (y - k)^2 = r^2 $$

![Workflow from diameter endpoints to circle equation](/content/grade-10/math/quarter-3/topic-equation-from-diameter-endpoints/images/diameter-equation-workflow.svg)

## Rule Box / Formula Box

| Step | What to do |
|---|---|
| 1 | Label the diameter endpoints as `(x1, y1)` and `(x2, y2)` |
| 2 | Find the midpoint; this is the center `(h, k)` |
| 3 | Find the radius using distance from center to one endpoint |
| 4 | Square the radius |
| 5 | Substitute into `(x - h)^2 + (y - k)^2 = r^2` |

## Worked Example

### Example: Find the Equation from Diameter Endpoints

**Problem:** The endpoints of a diameter are `A(2, 1)` and `B(8, 9)`. Write the equation of the circle.

**Step 1: Find the center using the midpoint formula.**

$$\left(\frac{2 + 8}{2}, \frac{1 + 9}{2}\right) = (5, 5)$$

So the center is `(5, 5)`.

**Step 2: Find the radius.**

Use the distance from center `(5, 5)` to endpoint `(2, 1)`.

$$r = \sqrt{(2 - 5)^2 + (1 - 5)^2}$$

$$r = \sqrt{(-3)^2 + (-4)^2} = \sqrt{9 + 16} = 5$$

**Step 3: Write the equation.**

Since `r = 5`, `r^2 = 25`.

$$ (x - 5)^2 + (y - 5)^2 = 25 $$

**Answer:** `(x - 5)^2 + (y - 5)^2 = 25`

## Guided Practice with Revealable Hints

### Guided Problem 1

The endpoints of a diameter are `(0, 0)` and `(6, 8)`. Write the circle equation.

<details>
<summary>Hint 1</summary>

Find the midpoint first.
</details>

<details>
<summary>Hint 2</summary>

The midpoint is `(3, 4)`. The distance from `(3, 4)` to `(0, 0)` is `5`.
</details>

<details>
<summary>Show solution</summary>

Center: `(3, 4)`. Radius: `5`. Equation: `(x - 3)^2 + (y - 4)^2 = 25`.
</details>

### Guided Problem 2

The endpoints of a diameter are `(-4, 2)` and `(2, 2)`. Write the circle equation.

<details>
<summary>Hint 1</summary>

The y-coordinates are the same, so the diameter is horizontal.
</details>

<details>
<summary>Hint 2</summary>

The midpoint is `(-1, 2)`. The radius is `3`.
</details>

<details>
<summary>Show solution</summary>

Center: `(-1, 2)`. Radius: `3`. Equation: `(x + 1)^2 + (y - 2)^2 = 9`.
</details>

### Guided Problem 3

The endpoints of a diameter are `(1, -3)` and `(7, 5)`. Write the circle equation.

<details>
<summary>Hint 1</summary>

Use the midpoint formula: average the x-values and average the y-values.
</details>

<details>
<summary>Hint 2</summary>

The center is `(4, 1)`. From `(4, 1)` to `(1, -3)`, the changes are `-3` and `-4`.
</details>

<details>
<summary>Show solution</summary>

Radius is `5`, so `r^2 = 25`. Equation: `(x - 4)^2 + (y - 1)^2 = 25`.
</details>

## Mini-Quiz

Answer these before opening the solutions.

1. Find the center if the diameter endpoints are `(2, 6)` and `(10, 6)`.
2. Find the radius if the diameter endpoints are `(-3, 0)` and `(5, 0)`.
3. Write the equation if the diameter endpoints are `(0, -2)` and `(0, 4)`.
4. Which point should be used as the center: an endpoint, the midpoint, or any point on the circle?

<details>
<summary>Reveal mini-quiz answers</summary>

1. `(6, 6)`
2. `4`
3. Center `(0, 1)`, radius `3`, so `x^2 + (y - 1)^2 = 9`
4. The midpoint
</details>

## Independent Practice

Try these without opening the answer key first.

1. Endpoints: `(4, 0)` and `(10, 0)`
2. Endpoints: `(-2, -2)` and `(4, 6)`
3. Endpoints: `(3, 1)` and `(3, 9)`
4. Endpoints: `(-5, 4)` and `(1, -4)`
5. Endpoints: `(-6, -1)` and `(2, -1)`
6. Endpoints: `(0, 0)` and `(10, 0)`
7. Endpoints: `(-1, 3)` and `(7, 9)`
8. Endpoints: `(-4, -6)` and `(2, 2)`

## Answer Key with Explanations

<details>
<summary>Reveal independent practice answers</summary>

1. Center `(7, 0)`, radius `3`: `(x - 7)^2 + y^2 = 9`
2. Center `(1, 2)`, radius `5`: `(x - 1)^2 + (y - 2)^2 = 25`
3. Center `(3, 5)`, radius `4`: `(x - 3)^2 + (y - 5)^2 = 16`
4. Center `(-2, 0)`, radius `5`: `(x + 2)^2 + y^2 = 25`
5. Center `(-2, -1)`, radius `4`: `(x + 2)^2 + (y + 1)^2 = 16`
6. Center `(5, 0)`, radius `5`: `(x - 5)^2 + y^2 = 25`
7. Center `(3, 6)`, radius `5`: `(x - 3)^2 + (y - 6)^2 = 25`
8. Center `(-1, -2)`, radius `5`: `(x + 1)^2 + (y + 2)^2 = 25`
</details>

## Misconception Alerts

> [!WARNING] Common Mistakes
>
> - Using one endpoint as the center.
> - Finding the full diameter but forgetting to divide by `2`.
> - Writing `r` on the right side instead of `r^2`.
> - Losing signs when the center has a negative coordinate.

## Error Analysis

A learner says:

> The diameter endpoints are `(2, 1)` and `(8, 9)`. The center is `(2, 1)`, the radius is `10`, so the equation is `(x - 2)^2 + (y - 1)^2 = 10`.

What is wrong?

<details>
<summary>Reveal mistake explanation</summary>

The endpoint `(2, 1)` was used as the center. The center should be the midpoint: `(5, 5)`. The radius is the distance from `(5, 5)` to either endpoint, which is `5`. The right side should be `r^2 = 25`.
</details>

<details>
<summary>Reveal corrected solution</summary>

Correct equation: `(x - 5)^2 + (y - 5)^2 = 25`
</details>

## Self-Explanation Prompts

Use these prompts to check your reasoning.

1. Why is the center the midpoint of the diameter endpoints?
2. Why does the right side of the equation use `r^2` instead of `r`?
3. How can you check that both endpoints lie on your circle?
4. What sign changes happen when the center has negative coordinates?

<details>
<summary>Sample responses</summary>

1. A diameter passes through the center, so the center is halfway between its endpoints.
2. The center-radius equation comes from squared distance, so the radius is squared.
3. Substitute each endpoint into the equation. Both should make the equation true.
4. If `h` or `k` is negative, subtracting that value creates a plus sign.
</details>

## Extension Challenge

The endpoints of a diameter are `A(-3, 4)` and `B(9, -2)`.

Write the equation of the circle, then verify that both endpoints satisfy the equation.

<details>
<summary>Hint</summary>

The midpoint is `(3, 1)`. The distance from `(3, 1)` to `(-3, 4)` has horizontal change `-6` and vertical change `3`.
</details>

<details>
<summary>Full solution</summary>

Center: `(3, 1)`.

Radius squared:

$$r^2 = (-6)^2 + 3^2 = 36 + 9 = 45$$

Equation:

$$ (x - 3)^2 + (y - 1)^2 = 45 $$

Checking `(-3, 4)`:

$$(-3 - 3)^2 + (4 - 1)^2 = (-6)^2 + 3^2 = 45$$

Checking `(9, -2)`:

$$(9 - 3)^2 + (-2 - 1)^2 = 6^2 + (-3)^2 = 45$$
</details>

## Mastery Checklist

Check each statement when you can do it confidently.

- [ ] I can identify diameter endpoints on a coordinate plane.
- [ ] I can find the midpoint of two points.
- [ ] I can explain why the midpoint is the circle center.
- [ ] I can find the radius from the center to an endpoint.
- [ ] I can square the radius correctly.
- [ ] I can write the equation in center-radius form.
- [ ] I can check my equation by substituting endpoint coordinates.

> [!PRACTICE] Next Step
>
> Use the practice exam for quick skill checks. Use the assessment when you can complete the guided and independent practice without looking at the solutions.
