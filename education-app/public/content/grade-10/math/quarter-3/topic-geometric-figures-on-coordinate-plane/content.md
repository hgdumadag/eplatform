# Geometric Figures on the Coordinate Plane

> [!GOAL] Learning Goal
>
> Use circle equations together with points, lines, and polygons to solve coordinate geometry tasks. By the end, you should be able to decide whether a point is on a circle, whether a line or segment touches a circle, and how a polygon can be described using coordinates.

## Quick Map

| You will use | Why it matters |
|---|---|
| Circle equation | Describes all points a fixed distance from the center |
| Distance formula | Checks radius, side lengths, and point positions |
| Midpoint formula | Finds centers, segment bisectors, and diameter centers |
| Slope | Describes line direction and side relationships |
| Substitution | Tests whether a point or line matches an equation |

## Pre-Check

Try these before reading the main explanation.

1. What is the center of `(x - 2)^2 + (y + 1)^2 = 25`?
2. What is the radius of `x^2 + y^2 = 49`?
3. Find the distance from `(0, 0)` to `(3, 4)`.
4. What is the slope of the line through `(1, 2)` and `(4, 2)`?

> [!CHECK] Suggested Answers
>
> 1. `(2, -1)`  
> 2. `7`  
> 3. `5`  
> 4. `0`, because the line is horizontal

## Vocabulary

| Term | Meaning |
|---|---|
| Circle | The set of all points the same distance from a center |
| Radius | Distance from the center to any point on the circle |
| Center-radius form | `(x - h)^2 + (y - k)^2 = r^2` |
| Secant line | A line that crosses a circle at two points |
| Tangent line | A line that touches a circle at exactly one point |
| Chord | A segment whose endpoints are on the circle |
| Inscribed polygon | A polygon whose vertices lie on a circle |

## Visual Prompt

Imagine a park map on a coordinate grid. A circular fountain is centered at the plaza. A straight path cuts across the fountain area, and a triangular garden uses points around the fountain as vertices.

![Circle, line, and point relationship](/content/grade-10/math/quarter-3/topic-geometric-figures-on-coordinate-plane/images/circle-line-point-map.svg)

Ask yourself: which parts can be checked by distance, and which parts can be checked by substitution?

## Core Idea

A circle equation is not isolated from the rest of coordinate geometry. It can work with:

- points, by checking whether a coordinate pair satisfies the equation;
- lines, by checking whether the line crosses, touches, or misses the circle;
- segments and polygons, by checking side lengths, slopes, midpoints, and vertex positions.

For a circle centered at `(h, k)`, the expression

`(x - h)^2 + (y - k)^2`

is the squared distance from `(x, y)` to the center. Compare it with `r^2`.

| Result | Meaning |
|---|---|
| `(x - h)^2 + (y - k)^2 = r^2` | Point is on the circle |
| `(x - h)^2 + (y - k)^2 < r^2` | Point is inside the circle |
| `(x - h)^2 + (y - k)^2 > r^2` | Point is outside the circle |

![Polygon vertices compared with a circle](/content/grade-10/math/quarter-3/topic-geometric-figures-on-coordinate-plane/images/polygon-vertices-circle.svg)

## Worked Example

Circle `C` has equation `(x - 1)^2 + (y - 2)^2 = 25`. Determine whether points `A(4, 6)`, `B(1, 2)`, and `D(7, 2)` are inside, on, or outside the circle.

### Step 1: Identify center and squared radius

The center is `(1, 2)` and `r^2 = 25`.

### Step 2: Substitute each point

For `A(4, 6)`:

`(4 - 1)^2 + (6 - 2)^2 = 3^2 + 4^2 = 9 + 16 = 25`

So `A` is on the circle.

For `B(1, 2)`:

`(1 - 1)^2 + (2 - 2)^2 = 0`

Since `0 < 25`, `B` is inside the circle. In fact, it is the center.

For `D(7, 2)`:

`(7 - 1)^2 + (2 - 2)^2 = 36`

Since `36 > 25`, `D` is outside the circle.

> [!TIP] Fast Check
>
> You do not always need the actual distance. For inside, on, or outside comparisons, compare squared distances with `r^2`.

## Lines and Circles

When a line and a circle appear together, look for a shared condition. Points on the line must satisfy the line equation. Points on the circle must satisfy the circle equation.

![Strategy for circle and line intersections](/content/grade-10/math/quarter-3/topic-geometric-figures-on-coordinate-plane/images/intersection-strategy.svg)

Example: On the circle `x^2 + y^2 = 25`, the horizontal line `y = 3` gives:

`x^2 + 3^2 = 25`

`x^2 + 9 = 25`

`x^2 = 16`

So `x = -4` or `x = 4`. The intersection points are `(-4, 3)` and `(4, 3)`.

## Guided Practice

### Problem 1

For the circle `x^2 + y^2 = 36`, classify `P(0, 6)`, `Q(3, 3)`, and `R(7, 0)` as inside, on, or outside.

> [!TIP] Hint
>
> Compare `x^2 + y^2` with `36`.

> [!CHECK] Solution
>
> `P`: `0^2 + 6^2 = 36`, so it is on the circle.  
> `Q`: `3^2 + 3^2 = 18`, so it is inside.  
> `R`: `7^2 + 0^2 = 49`, so it is outside.

### Problem 2

Find the points where `y = 4` intersects the circle `x^2 + y^2 = 25`.

> [!TIP] Hint
>
> Substitute `y = 4` into the circle equation.

> [!CHECK] Solution
>
> `x^2 + 4^2 = 25`, so `x^2 + 16 = 25`, then `x^2 = 9`. Thus `x = -3` or `x = 3`. The points are `(-3, 4)` and `(3, 4)`.

### Problem 3

Triangle `ABC` has vertices `A(5, 0)`, `B(0, 5)`, and `C(-5, 0)`. Are all three vertices on the circle `x^2 + y^2 = 25`?

> [!TIP] Hint
>
> Substitute each vertex into `x^2 + y^2`.

> [!CHECK] Solution
>
> `A`: `25 + 0 = 25`; `B`: `0 + 25 = 25`; `C`: `25 + 0 = 25`. All three vertices are on the circle.

## Common Misconceptions

> [!WARNING] Trap 1: Comparing to the radius instead of radius squared
>
> In `x^2 + y^2 = 25`, compare squared distances with `25`, not with `5`.

> [!WARNING] Trap 2: Thinking every polygon point must be on the circle
>
> A polygon can be inside, outside, intersecting, or inscribed in a circle. Check the actual vertices or sides.

> [!WARNING] Trap 3: Forgetting that a line condition must also be true
>
> A point of intersection must satisfy both equations, not just one.

## Error Analysis

A student checks whether `(2, 4)` is on `(x - 1)^2 + (y - 2)^2 = 5`.

They write:

`(2 - 1)^2 + (4 - 2)^2 = 1 + 4 = 5`, so the radius is `5`.

The conclusion that the point is on the circle is correct, but the radius statement is wrong.

> [!CHECK] Correct Reasoning
>
> The equation has `r^2 = 5`, so the radius is `sqrt(5)`. The point `(2, 4)` is on the circle because its squared distance from the center equals `5`.

## Self-Explanation Prompts

Answer these in your own words.

1. Why can you compare squared distance with `r^2` instead of finding the distance first?
2. What must be true for a point to be an intersection of a line and a circle?
3. How can a circle equation help you check whether a polygon is inscribed?

> [!TIP] Sample Responses
>
> 1. Squared distance avoids taking square roots, and the circle equation already uses squared distances.  
> 2. The point must satisfy both the line equation and the circle equation.  
> 3. Substitute each vertex into the circle equation. If every vertex satisfies it, the polygon is inscribed in that circle.

## Extension Challenge

The circle `x^2 + y^2 = 50` passes through two points on the line `y = x`. Find those points.

> [!TIP] Hint
>
> Substitute `y = x` into the circle equation.

> [!CHECK] Solution
>
> `x^2 + x^2 = 50`, so `2x^2 = 50`, then `x^2 = 25`. Thus `x = 5` or `x = -5`. Since `y = x`, the points are `(5, 5)` and `(-5, -5)`.

## Mastery Checklist

Check yourself before taking the assessment.

- [ ] I can identify the center and radius of a circle from its equation.
- [ ] I can classify points as inside, on, or outside a circle.
- [ ] I can substitute a line equation into a circle equation.
- [ ] I can find simple line-circle intersection points.
- [ ] I can check whether polygon vertices lie on a circle.
- [ ] I can explain why squared radius matters.
- [ ] I can combine distance, slope, midpoint, and circle equations in one task.

> [!PRACTICE] Next Step
>
> Use the practice exam for quick skill checks. Use the assessment when you can explain your steps without looking back at the worked examples.
