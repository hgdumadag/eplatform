# Geometry - Lesson 9: Shaded Region Problems

> [!GOAL] Learning Goal
>
> Combine circle area, sector area, and polygon area to solve shaded region problems. By the end, you should be able to organize a multi-step solution instead of guessing which formula to use first.

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 45 minutes |
| Difficulty | Intermediate |
| Main skill | Break a shaded region into familiar areas |
| Tools | Pencil, calculator when approximating, scratch paper |

<!-- visual-assets:start -->

## Visual Study Set

Use these diagrams as anchors for the three most common moves: subtract, combine, and organize.

![Sector with a triangle removed](/content/grade-10/math/quarter-4/topic-shaded-region-problems/images/sector-minus-triangle.svg)

![Square with quarter circles leaving a central shaded region](/content/grade-10/math/quarter-4/topic-shaded-region-problems/images/square-with-quarter-circles.svg)

![Organizer for shaded region solutions](/content/grade-10/math/quarter-4/topic-shaded-region-problems/images/solution-organizer.svg)

<!-- visual-assets:end -->

## What You Should Already Know

Before starting, make sure these area facts feel familiar.

| Figure | Area |
|---|---|
| Circle | `A = pi r^2` |
| Sector | `A = (theta/360)pi r^2` |
| Triangle | `A = (1/2)bh` |
| Rectangle or square | `A = lw` or `A = s^2` |
| Trapezoid | `A = (1/2)(b_1 + b_2)h` |

### Pre-Check

Try these first.

1. What is the area of a circle with radius `6`?
2. What fraction of a circle is a `90°` sector?
3. What is the area of a triangle with base `10` and height `6`?
4. If a shaded part is "inside a square but outside a circle," should you add or subtract?

<details>
<summary>Reveal pre-check answers</summary>

1. `36pi`
2. `1/4`
3. `30`
4. Subtract: square area minus circle area.
</details>

> [!TARGET] Target Skill
>
> Write a clean area plan before calculating: **large region - removed region = shaded region** or **part 1 + part 2 = shaded region**.

## Core Idea: Name the Whole and the Pieces

A shaded region problem is usually not a new formula. It is a bookkeeping problem.

Ask three questions:

1. What larger shape contains the shaded region?
2. What smaller shape or shapes must be removed?
3. Are any parts sectors, semicircles, or quarter circles?

Then write an equation with labels.

`shaded area = area wanted as a whole - area not shaded`

or

`shaded area = shaded piece 1 + shaded piece 2 + ...`

> [!TIP] Exact vs Approximate Answers
>
> If the problem says "in terms of pi," leave `pi` in the answer. If it asks for a decimal, use a stated approximation such as `pi approx 3.14`.

## Worked Example 1: Sector Minus Triangle

**Problem:** A `90°` sector has radius `8 cm`. The two radii form a right triangle inside the sector. Find the shaded area between the arc and the triangle.

![Sector with a triangle removed](/content/grade-10/math/quarter-4/topic-shaded-region-problems/images/sector-minus-triangle.svg)

### Step 1: Identify the whole region

The curved wedge is a `90°` sector.

`A_sector = (90/360)pi(8^2) = (1/4)pi(64) = 16pi`

### Step 2: Identify the removed region

The triangle has legs `8 cm` and `8 cm`.

`A_triangle = (1/2)(8)(8) = 32`

### Step 3: Subtract and label

`A_shaded = 16pi - 32`

The shaded area is `16pi - 32 cm^2`.

> [!CHECK] Reasonableness Check
>
> Since `16pi` is about `50.24`, the shaded region is about `18.24 cm^2`. That is positive and smaller than the sector, so it is reasonable.

## Worked Example 2: Square With Quarter Circles

**Problem:** A square has side length `10 cm`. Four quarter circles of radius `5 cm` are drawn from the corners. Find the central shaded area.

![Square with quarter circles leaving a central shaded region](/content/grade-10/math/quarter-4/topic-shaded-region-problems/images/square-with-quarter-circles.svg)

### Step 1: Find the square area

`A_square = 10^2 = 100`

### Step 2: Combine the four quarter circles

Four quarter circles make one full circle of radius `5`.

`A_circle = pi(5^2) = 25pi`

### Step 3: Subtract

`A_shaded = 100 - 25pi`

The shaded area is `100 - 25pi cm^2`.

> [!IMPORTANT] Organizing Move
>
> Do not calculate each quarter circle separately unless it helps you think. Recognizing that four quarters make one full circle keeps the solution shorter.

## Solution Organizer

Use this layout when a problem has several parts.

![Organizer for shaded region solutions](/content/grade-10/math/quarter-4/topic-shaded-region-problems/images/solution-organizer.svg)

| Step | What to write |
|---|---|
| 1. Given | List radius, diameter, side length, angle, base, and height |
| 2. Plan | State whether to add or subtract areas |
| 3. Formula | Write formulas before substituting |
| 4. Compute | Show substitutions and arithmetic |
| 5. Conclude | Give the shaded area with square units |

## Common Problem Types

| Diagram clue | Usually means |
|---|---|
| Shaded part inside a circle but outside a polygon | `circle area - polygon area` |
| Shaded part inside a polygon but outside circles | `polygon area - circle parts` |
| Shaded part between an arc and two radii | `sector area - triangle area` |
| Several matching circular pieces | Combine fractions of circles first |
| Unshaded hole inside a shaded shape | `outer area - hole area` |

## Guided Practice

### Guided Problem 1

A circle has radius `7 cm`. A square inside it has area `50 cm^2`. Find the area inside the circle but outside the square.

<details>
<summary>Hint</summary>

Use `circle area - square area`.
</details>

<details>
<summary>Answer</summary>

`A_circle = 49pi`, so the shaded area is `49pi - 50 cm^2`.
</details>

### Guided Problem 2

A `60°` sector has radius `6 m`. Find its area.

<details>
<summary>Hint</summary>

The sector is `60/360 = 1/6` of the circle.
</details>

<details>
<summary>Answer</summary>

`A = (60/360)pi(6^2) = 6pi m^2`.
</details>

### Guided Problem 3

A rectangle measures `12 cm` by `8 cm`. A semicircle of radius `4 cm` is removed from one side. Find the remaining area.

<details>
<summary>Hint</summary>

Use `rectangle area - semicircle area`.
</details>

<details>
<summary>Answer</summary>

`A_rectangle = 96`. The semicircle area is `(1/2)pi(4^2) = 8pi`. Remaining area: `96 - 8pi cm^2`.
</details>

## Error Analysis

A student solves this problem: "Find the area of a `90°` sector with radius `12` after a triangle with base `12` and height `12` is removed."

They write:

`A_sector = 90pi(12^2) = 12960pi`

`A_triangle = 72`

`A_shaded = 12960pi - 72`

What went wrong?

> [!CHECK] Correct Reasoning
>
> The sector fraction is `90/360`, not `90`. The sector area is `(90/360)pi(12^2) = 36pi`. The triangle area is `72`, so the shaded area is `36pi - 72`.

## Common Misconceptions

> [!WARNING] Trap 1: Using diameter as radius
>
> If the diagram gives diameter `14`, the radius is `7`. Circle area uses radius.

> [!WARNING] Trap 2: Forgetting the sector fraction
>
> A sector is only part of the circle. Always multiply by `theta/360`.

> [!WARNING] Trap 3: Subtracting in the wrong order
>
> Area cannot be negative. Start with the larger containing region, then remove the unshaded part.

> [!WARNING] Trap 4: Dropping square units
>
> Shaded area is still area, so final units are square units: `cm^2`, `m^2`, or `units^2`.

## Self-Explanation Prompts

Answer these in your own words.

1. How do you decide whether to add or subtract areas?
2. Why is a `120°` sector one third of a circle?
3. What makes a multi-step area solution easy to follow?

<details>
<summary>Sample responses</summary>

1. I identify the whole shape and the missing or extra pieces. If the shaded region is left after removing something, I subtract. If it is made of separate shaded parts, I add.
2. Because `120/360 = 1/3`.
3. It labels each area, shows formulas before substitution, and ends with the correct units.
</details>

## Mastery Checklist

Check yourself before taking the assessment.

- [ ] I can identify circle, sector, and polygon pieces in one diagram.
- [ ] I can find sector area using `theta/360`.
- [ ] I can subtract polygon area from circle or sector area.
- [ ] I can subtract circular parts from polygon area.
- [ ] I can keep exact answers in terms of `pi`.
- [ ] I can write a multi-step solution with labels and units.
- [ ] I can check whether my answer is reasonable.

> [!PRACTICE] Next Step
>
> Use the practice exam for quick area setup checks. Use the assessment when you can organize each solution before calculating.
