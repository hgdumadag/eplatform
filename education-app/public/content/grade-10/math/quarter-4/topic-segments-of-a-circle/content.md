# Segments of a Circle

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to define circular segments, compare them with sectors, and find segment areas by subtracting a triangle from a sector.

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 40 minutes |
| Difficulty | Intermediate |
| Main skill | Finding segment area from sector area minus triangle area |
| Tools | Paper, pencil, calculator when needed |

<!-- visual-assets:start -->

## Visual Study Set

Use these diagrams as anchors. The key idea is that a segment is not the same region as a sector.

![Circular segment compared with circular sector](/content/grade-10/math/quarter-4/topic-segments-of-a-circle/images/segment-vs-sector.svg)

![Circular segment as sector area minus triangle area](/content/grade-10/math/quarter-4/topic-segments-of-a-circle/images/sector-minus-triangle.svg)

![Worked example finding a segment area from a 90 degree sector](/content/grade-10/math/quarter-4/topic-segments-of-a-circle/images/segment-area-worked-example.svg)

<!-- visual-assets:end -->

## Warm-Up Recall

Try these before reading the lesson.

1. What is the area of a circle with radius 6?
2. What fraction of a full circle is a \(90^\circ\) sector?
3. What is the area of a triangle with base 8 and height 5?
4. What circle part has both endpoints on the circle?

<details>
<summary>Reveal warm-up answers</summary>

1. \(36\pi\)
2. \(\frac{90}{360} = \frac{1}{4}\)
3. \(\frac{1}{2}(8)(5) = 20\)
4. A chord

These are the exact pieces used to compare sectors and segments.
</details>

## Key Vocabulary

| Term | Meaning |
|---|---|
| Sector | A region bounded by two radii and an arc |
| Circular segment | A region bounded by a chord and its intercepted arc |
| Chord | A segment whose endpoints lie on the circle |
| Minor segment | The smaller segment cut off by a chord |
| Major segment | The larger segment cut off by a chord |
| Central angle | An angle whose vertex is at the center of the circle |

> [!IMPORTANT] Core Idea
>
> A sector includes the center and is bounded by two radii. A circular segment is cut off by a chord and an arc. For many problems, segment area = sector area - triangle area.

## 1. Segment vs. Sector

A sector looks like a slice of pizza. Its straight sides are radii, so the center of the circle is part of the sector.

A circular segment looks like a cap cut off by a chord. Its straight side is a chord, not two radii.

![Circular segment compared with circular sector](/content/grade-10/math/quarter-4/topic-segments-of-a-circle/images/segment-vs-sector.svg)

| Feature | Sector | Circular segment |
|---|---|---|
| Straight boundary | Two radii | One chord |
| Curved boundary | One arc | One arc |
| Usually includes center? | Yes, for a minor sector | Not usually, for a minor segment |
| Area strategy | Fraction of circle | Sector area minus triangle area |

> [!WARNING] Common Trap
>
> Do not call every shaded circular region a sector. If the straight boundary is a chord instead of two radii, the region is a segment.

## 2. Why Segment Area Uses Subtraction

When two radii meet a chord, they create a sector and an isosceles triangle inside that sector.

The circular segment is the curved part left after removing the triangle.

![Circular segment as sector area minus triangle area](/content/grade-10/math/quarter-4/topic-segments-of-a-circle/images/sector-minus-triangle.svg)

The formula idea is:

$$
\text{segment area} = \text{sector area} - \text{triangle area}
$$

For a central angle \(\theta\) in degrees:

$$
\text{sector area} = \frac{\theta}{360^\circ}\pi r^2
$$

Then subtract:

$$
\text{triangle area} = \frac{1}{2}bh
$$

> [!TIP] Name the Pieces First
>
> Before calculating, label the sector, the triangle, and the segment. This keeps you from accidentally giving the sector area as the segment area.

## Worked Example 1: A \(90^\circ\) Segment

**Problem:** A circle has radius 8 cm. A \(90^\circ\) central angle forms a sector. The triangle inside the sector has legs 8 cm and 8 cm. Find the area of the minor segment.

![Worked example finding a segment area from a 90 degree sector](/content/grade-10/math/quarter-4/topic-segments-of-a-circle/images/segment-area-worked-example.svg)

**Step 1: Find the sector area.**

$$
\text{sector area} = \frac{90}{360}\pi(8)^2
$$

$$
\text{sector area} = \frac{1}{4}\cdot 64\pi = 16\pi
$$

**Step 2: Find the triangle area.**

The radii are perpendicular, so the triangle has base 8 and height 8.

$$
\text{triangle area} = \frac{1}{2}(8)(8) = 32
$$

**Step 3: Subtract.**

$$
\text{segment area} = 16\pi - 32
$$

**Answer:** \(16\pi - 32\text{ cm}^2\), or about \(18.3\text{ cm}^2\)

## Worked Example 2: Sector and Triangle Already Given

**Problem:** A sector has area \(45\text{ cm}^2\). The triangle formed by the two radii and the chord has area \(27\text{ cm}^2\). What is the segment area?

**Solution:**

$$
\text{segment area} = 45 - 27 = 18
$$

**Answer:** \(18\text{ cm}^2\)

## Guided Practice

### Guided Problem 1

A sector has area \(60\text{ m}^2\). The triangle inside it has area \(42\text{ m}^2\). Find the segment area.

<details>
<summary>Hint</summary>

Use segment area = sector area - triangle area.
</details>

<details>
<summary>Show solution</summary>

\(60 - 42 = 18\), so the segment area is \(18\text{ m}^2\).
</details>

### Guided Problem 2

A circle has radius 10. A \(90^\circ\) sector is formed. The triangle inside the sector has area 50. Find the exact segment area.

<details>
<summary>Hint 1</summary>

First find the sector area: \(\frac{90}{360}\pi(10)^2\).
</details>

<details>
<summary>Hint 2</summary>

The sector area is \(25\pi\). Now subtract the triangle area.
</details>

<details>
<summary>Show solution</summary>

\(\text{segment area} = 25\pi - 50\).
</details>

### Guided Problem 3

True or false: A minor circular segment is bounded by two radii and an arc.

<details>
<summary>Show solution</summary>

False. That describes a sector. A circular segment is bounded by a chord and an arc.
</details>

## Strategy Checklist

Use this process for segment area questions:

1. Identify the chord and arc that bound the segment.
2. Identify the sector that contains the segment.
3. Find the sector area.
4. Find the triangle area formed by the two radii and the chord.
5. Subtract triangle area from sector area.
6. Include square units.

## Mini-Quiz

Try these without looking back.

1. What two boundaries form a circular segment?
2. What two boundaries form a sector?
3. A sector has area 72 and its triangle has area 40. What is the segment area?
4. A \(90^\circ\) sector in a circle of radius 6 has area \(9\pi\). If the triangle area is 18, what is the segment area?

<details>
<summary>Reveal mini-quiz answers</summary>

1. A chord and its intercepted arc
2. Two radii and an arc
3. \(72 - 40 = 32\)
4. \(9\pi - 18\)
</details>

> [!PRACTICE] Practice and Assessment Plan
>
> Use the practice set to check vocabulary and the subtraction setup. Use the assessment when you can reliably decide which region is the sector, which region is the triangle, and which region is the segment.
