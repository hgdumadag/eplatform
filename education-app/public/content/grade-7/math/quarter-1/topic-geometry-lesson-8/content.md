# Geometry - Lesson 8: Number of Sides and Angle Sums

> [!GOAL]
> Investigate the pattern in polygon angle sums. Use that pattern to find missing angle measures and to determine how many sides a polygon has.

## Warm-Up

Draw a quadrilateral. Pick one vertex and draw one diagonal to split it into triangles.

Ask yourself:

- How many triangles did you create?
- What is the angle sum of each triangle?
- How could that help you find the total angle sum of the quadrilateral?

This idea works for every polygon: split the polygon into triangles, then use the fact that each triangle has an angle sum of 180 degrees.

## The Triangle Pattern

From one vertex of a polygon, draw diagonals to all non-neighboring vertices. The polygon breaks into triangles.

| Polygon | Number of sides `n` | Triangles formed | Interior angle sum |
|---|---:|---:|---:|
| Triangle | 3 | 1 | `1 x 180 = 180` |
| Quadrilateral | 4 | 2 | `2 x 180 = 360` |
| Pentagon | 5 | 3 | `3 x 180 = 540` |
| Hexagon | 6 | 4 | `4 x 180 = 720` |
| Octagon | 8 | 6 | `6 x 180 = 1080` |
| Decagon | 10 | 8 | `8 x 180 = 1440` |

The number of triangles is always 2 less than the number of sides.

> [!IMPORTANT]
> For an `n`-sided polygon, the number of triangles is `n - 2`.

## Interior Angle Sum Formula

If a polygon has `n` sides, then:

`Interior angle sum = (n - 2) x 180`

Example 1: Find the interior angle sum of an octagon.

1. An octagon has `n = 8` sides.
2. Substitute into the formula: `(8 - 2) x 180`.
3. Simplify: `6 x 180 = 1080`.

The interior angle sum of an octagon is 1080 degrees.

> [!CHECK]
> A decagon has 10 sides. Its angle sum is `(10 - 2) x 180 = 8 x 180 = 1440` degrees.

## Regular Polygon Interior Angles

A regular polygon has all sides equal and all angles equal. After finding the total angle sum, divide by the number of sides to find one interior angle.

`One interior angle of a regular polygon = ((n - 2) x 180) / n`

Example 2: Find one interior angle of a regular hexagon.

1. A hexagon has `n = 6` sides.
2. Find the total: `(6 - 2) x 180 = 720`.
3. Divide by the number of angles: `720 / 6 = 120`.

Each interior angle of a regular hexagon is 120 degrees.

> [!WARNING]
> Do not divide by `n - 2`. Divide the total angle sum by the number of sides, because a polygon has one interior angle at each vertex.

## Finding the Number of Sides from the Sum

Sometimes you know the interior angle sum and need to find the number of sides.

Use the equation:

`(n - 2) x 180 = angle sum`

Example 3: A polygon has an interior angle sum of 900 degrees. How many sides does it have?

1. Write the equation: `(n - 2) x 180 = 900`.
2. Divide by 180: `n - 2 = 5`.
3. Add 2: `n = 7`.

The polygon has 7 sides. It is a heptagon.

## Worked Example: Missing Angle in a Polygon

A pentagon has four known interior angles: 105 degrees, 130 degrees, 95 degrees, and 110 degrees. Find the fifth angle.

1. A pentagon has `n = 5` sides.
2. Find the total angle sum: `(5 - 2) x 180 = 540`.
3. Add the known angles: `105 + 130 + 95 + 110 = 440`.
4. Subtract from the total: `540 - 440 = 100`.

The missing angle is 100 degrees.

## Guided Practice

Try these before opening the practice exam.

1. Find the interior angle sum of a hexagon.
2. Find the interior angle sum of a decagon.
3. Find one interior angle of a regular pentagon.
4. A polygon has an interior angle sum of 1260 degrees. How many sides does it have?
5. A quadrilateral has angles 80 degrees, 95 degrees, and 110 degrees. Find the missing angle.

Answers:

1. 720 degrees
2. 1440 degrees
3. 108 degrees
4. 9 sides
5. 75 degrees

## Final Checklist

Before taking the practice exam, make sure you can:

- explain why an `n`-sided polygon forms `n - 2` triangles
- use `(n - 2) x 180` to find an interior angle sum
- divide the angle sum by `n` for one angle of a regular polygon
- use an angle sum to solve for a missing angle or number of sides

> [!PRACTICE]
> Use the practice questions for quick pattern checks. Use the assessment when you can choose the correct formula and explain each step without guessing.
