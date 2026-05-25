# Quarter Navigation and Transformation Task

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to solve a navigation problem with bearings, map the route on a coordinate plane, and apply transformation rules to create and explain a transformed route.

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 45 minutes |
| Difficulty | Intermediate |
| Main skill | Combining bearings, oblique triangles, coordinates, and transformations |
| Tools | Graph paper, ruler, protractor, calculator when needed |

<!-- visual-assets:start -->

## Visual Study Set

Use these diagrams as anchors while you study. Each image names the parts you should notice before solving.

![Navigation route with bearings](/content/grade-10/math/quarter-1/topic-quarter-navigation-transformation-task/images/navigation-route.svg)

![Route points mapped to coordinates](/content/grade-10/math/quarter-1/topic-quarter-navigation-transformation-task/images/route-to-coordinate-map.svg)

![Transformed route after coordinate rule](/content/grade-10/math/quarter-1/topic-quarter-navigation-transformation-task/images/transformed-route.svg)

<!-- visual-assets:end -->

## What You Should Already Know

Before beginning this culminating task, check that these ideas are familiar:

- A bearing is measured clockwise from north.
- A route can be represented by connected line segments.
- Oblique triangles may require the Law of Sines or Law of Cosines.
- Ordered pairs locate points on the Cartesian plane.
- Coordinate rules can translate, reflect, or rotate a figure.

### Pre-check / Readiness Quiz

Try these first. Then reveal the answers.

1. Which direction does a bearing of 090° point?
2. What transformation is described by \((x, y) \rightarrow (x + 4, y - 2)\)?
3. What is the image of \(A(3, -5)\) after reflection across the y-axis?
4. If a route has two known sides and the included angle, which oblique-triangle strategy is usually useful?
5. What happens to \(P(2, 7)\) after a 90° counterclockwise rotation about the origin?

<details>
<summary>Reveal pre-check answers</summary>

1. East.
2. A translation 4 units right and 2 units down.
3. \((-3, -5)\).
4. Law of Cosines.
5. \((-7, 2)\), using \((x, y) \rightarrow (-y, x)\).

If more than one item felt uncertain, slow down during the worked examples and check each rule before moving on.
</details>

## Key Vocabulary

| Term | Meaning |
|---|---|
| Bearing | A direction angle measured clockwise from north |
| Route diagram | A connected drawing that shows movement from point to point |
| Resultant displacement | The direct distance and direction from the starting point to the ending point |
| Coordinate rule | A rule that changes each point, such as \((x, y) \rightarrow (x + 3, y - 1)\) |
| Preimage | The original figure before a transformation |
| Image | The figure after a transformation |
| Translation | A slide that adds the same horizontal and vertical changes to every point |
| Reflection | A flip across a line such as the x-axis or y-axis |
| Rotation | A turn around a fixed point, often the origin |

> [!IMPORTANT] Big Idea
>
> A navigation task becomes easier when you separate it into two jobs: first build a correct route from bearings, then transform the route using coordinate rules.

## Try Before You Read

A rescue boat travels 6 km on a bearing of 040°, then 8 km on a bearing of 120°. The map must then be shifted 3 units east and 2 units north for a new display grid.

What two kinds of mathematics do you notice?

<details>
<summary>Reveal thinking guide</summary>

Look for direction-and-distance information first. Then look for the rule that changes coordinates.
</details>

<details>
<summary>Reveal answer</summary>

The first part is a bearing and oblique-triangle problem. The second part is a coordinate transformation problem, specifically a translation.
</details>

## Visual Introduction

Bearings are measured from north, not from the positive x-axis.

<svg viewBox="0 0 560 360" role="img" aria-labelledby="bearing-compass-title bearing-compass-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="bearing-compass-title">Bearing measured clockwise from north</title>
  <desc id="bearing-compass-desc">A compass rose shows north upward, east right, south downward, and a 060 degree bearing measured clockwise from north.</desc>
  <line x1="280" y1="45" x2="280" y2="315" stroke="#334155" stroke-width="2"/>
  <line x1="145" y1="180" x2="415" y2="180" stroke="#334155" stroke-width="2"/>
  <text x="270" y="32" font-size="18" fill="#111827">N</text>
  <text x="426" y="186" font-size="18" fill="#111827">E</text>
  <text x="270" y="338" font-size="18" fill="#111827">S</text>
  <text x="123" y="186" font-size="18" fill="#111827">W</text>
  <circle cx="280" cy="180" r="5" fill="#111827"/>
  <line x1="280" y1="180" x2="382" y2="62" stroke="#2563eb" stroke-width="4" marker-end="url(#arrow-bearing)"/>
  <path d="M280 105 A75 75 0 0 1 345 143" fill="none" stroke="#dc2626" stroke-width="3"/>
  <text x="315" y="102" font-size="18" fill="#dc2626">060°</text>
  <text x="355" y="54" font-size="17" fill="#2563eb">bearing</text>
  <defs>
    <marker id="arrow-bearing" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#2563eb"/>
    </marker>
  </defs>
</svg>

On a coordinate plane, north usually means increasing \(y\), east means increasing \(x\), south means decreasing \(y\), and west means decreasing \(x\).

<svg viewBox="0 0 620 360" role="img" aria-labelledby="route-map-title route-map-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="route-map-title">Route plotted on a coordinate grid</title>
  <desc id="route-map-desc">A route starts at A, travels northeast to B, then southeast to C, forming an oblique triangle from A to B to C.</desc>
  <defs>
    <pattern id="grid-route" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M30 0 H0 V30" fill="none" stroke="#e2e8f0" stroke-width="1"/>
    </pattern>
    <marker id="arrow-route" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#0f766e"/>
    </marker>
  </defs>
  <rect x="20" y="20" width="580" height="300" fill="url(#grid-route)"/>
  <line x1="310" y1="320" x2="310" y2="20" stroke="#475569" stroke-width="2"/>
  <line x1="20" y1="170" x2="600" y2="170" stroke="#475569" stroke-width="2"/>
  <polyline points="220,230 340,95 460,210" fill="none" stroke="#0f766e" stroke-width="4" marker-mid="url(#arrow-route)" marker-end="url(#arrow-route)"/>
  <line x1="220" y1="230" x2="460" y2="210" stroke="#f97316" stroke-width="3" stroke-dasharray="8 7"/>
  <circle cx="220" cy="230" r="6" fill="#111827"/>
  <circle cx="340" cy="95" r="6" fill="#111827"/>
  <circle cx="460" cy="210" r="6" fill="#111827"/>
  <text x="198" y="252" font-size="18" fill="#111827">A</text>
  <text x="346" y="88" font-size="18" fill="#111827">B</text>
  <text x="467" y="232" font-size="18" fill="#111827">C</text>
  <text x="248" y="142" font-size="15" fill="#0f766e">leg 1</text>
  <text x="402" y="145" font-size="15" fill="#0f766e">leg 2</text>
  <text x="306" y="238" font-size="15" fill="#f97316">direct route AC</text>
</svg>

The connected route \(A \rightarrow B \rightarrow C\) creates a triangle. The dashed segment \(AC\) is the direct distance from the starting point to the ending point.

## Main Concept Explanation

### 1. Convert Bearings into a Route Diagram

Use this routine:

1. Mark the starting point.
2. Draw a north reference line at each turning point.
3. Measure the bearing clockwise from north.
4. Draw the route segment in that direction.
5. Label the segment length.

> [!WARNING] Common Trap
>
> A bearing of 120° is not the same as a 120° angle from the positive x-axis. Bearings start at north and turn clockwise.

### 2. Identify the Triangle Evidence

When two route legs and the angle between them are known, the route often forms an SAS triangle. Use the Law of Cosines to find the direct distance:

$$c^2 = a^2 + b^2 - 2ab\cos C$$

When two angles and one side are known, use the Law of Sines:

$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

### 3. Map the Route with Coordinates

For coordinate work, choose a scale that makes the route readable. For example, 1 grid unit may represent 1 km.

If a point moves east, the \(x\)-coordinate increases. If it moves north, the \(y\)-coordinate increases.

### 4. Transform the Mapped Route

Apply the same coordinate rule to every route point.

| Transformation | Rule |
|---|---|
| Translate right 3, up 2 | \((x, y) \rightarrow (x + 3, y + 2)\) |
| Reflect across x-axis | \((x, y) \rightarrow (x, -y)\) |
| Reflect across y-axis | \((x, y) \rightarrow (-x, y)\) |
| Rotate 90° counterclockwise about origin | \((x, y) \rightarrow (-y, x)\) |
| Rotate 180° about origin | \((x, y) \rightarrow (-x, -y)\) |

## Rule Box / Formula Box

> [!IMPORTANT] Route-to-Map Strategy
>
> Draw the bearing route first. Solve any missing measurement next. Plot the key points. Then apply the transformation rule to every point.

| Need | Useful Tool |
|---|---|
| Direction from a written bearing | Compass diagram |
| Direct distance across two route legs | Law of Cosines when SAS is known |
| Missing side or angle with ASA, AAS, or SSA evidence | Law of Sines, with ambiguity check for SSA |
| Shift the whole route | Translation rule |
| Flip the route | Reflection rule |
| Turn the route around the origin | Rotation rule |

## Worked Examples

### Example 1: Solve a Navigation Triangle

**Problem:** A drone starts at \(A\), flies 5 km on a bearing of 030° to \(B\), then flies 7 km on a bearing of 110° to \(C\). Find the direct distance \(AC\) to the nearest tenth.

**Solution:**

At \(B\), the back bearing toward \(A\) is \(030° + 180° = 210°\). The bearing from \(B\) to \(C\) is 110°.

The included angle at \(B\) is:

$$210° - 110° = 100°$$

Now use the Law of Cosines:

$$AC^2 = 5^2 + 7^2 - 2(5)(7)\cos(100°)$$

$$AC^2 \approx 25 + 49 - 70(-0.1736)$$

$$AC^2 \approx 86.2$$

$$AC \approx 9.3$$

**Answer:** The direct distance from \(A\) to \(C\) is about **9.3 km**.

<svg viewBox="0 0 560 320" role="img" aria-labelledby="navigation-triangle-title navigation-triangle-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="navigation-triangle-title">Navigation triangle with included angle</title>
  <desc id="navigation-triangle-desc">The route from A to B is 5 kilometers, from B to C is 7 kilometers, and the included angle at B is 100 degrees.</desc>
  <polyline points="120,235 260,80 430,210" fill="none" stroke="#2563eb" stroke-width="4"/>
  <line x1="120" y1="235" x2="430" y2="210" stroke="#ea580c" stroke-width="3" stroke-dasharray="8 7"/>
  <circle cx="120" cy="235" r="6" fill="#111827"/>
  <circle cx="260" cy="80" r="6" fill="#111827"/>
  <circle cx="430" cy="210" r="6" fill="#111827"/>
  <text x="100" y="260" font-size="18" fill="#111827">A</text>
  <text x="258" y="64" font-size="18" fill="#111827">B</text>
  <text x="438" y="218" font-size="18" fill="#111827">C</text>
  <text x="164" y="144" font-size="16" fill="#2563eb">5 km</text>
  <text x="340" y="136" font-size="16" fill="#2563eb">7 km</text>
  <text x="258" y="121" font-size="16" fill="#dc2626">100°</text>
  <path d="M237 106 A38 38 0 0 0 296 108" fill="none" stroke="#dc2626" stroke-width="3"/>
  <text x="255" y="242" font-size="16" fill="#ea580c">AC ≈ 9.3 km</text>
</svg>

### Example 2: Transform a Route

**Problem:** A route has points \(A(0, 0)\), \(B(4, 3)\), and \(C(8, 1)\). Translate the route 2 units left and 5 units up.

**Solution:**

The rule is:

$$(x, y) \rightarrow (x - 2, y + 5)$$

Apply the rule to every point.

| Point | Original | Image |
|---|---:|---:|
| A | \((0, 0)\) | \((-2, 5)\) |
| B | \((4, 3)\) | \((2, 8)\) |
| C | \((8, 1)\) | \((6, 6)\) |

**Answer:** \(A'(-2, 5)\), \(B'(2, 8)\), \(C'(6, 6)\).

<svg viewBox="0 0 620 360" role="img" aria-labelledby="translation-route-title translation-route-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="translation-route-title">Original and translated route</title>
  <desc id="translation-route-desc">The original route A B C is translated left 2 units and up 5 units to A prime B prime C prime.</desc>
  <defs>
    <pattern id="grid-translation" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M30 0 H0 V30" fill="none" stroke="#e2e8f0" stroke-width="1"/>
    </pattern>
  </defs>
  <rect x="20" y="20" width="580" height="300" fill="url(#grid-translation)"/>
  <line x1="170" y1="320" x2="170" y2="20" stroke="#64748b" stroke-width="2"/>
  <line x1="20" y1="230" x2="600" y2="230" stroke="#64748b" stroke-width="2"/>
  <polyline points="170,230 290,140 410,200" fill="none" stroke="#2563eb" stroke-width="4"/>
  <polyline points="110,80 230,0 350,50" fill="none" stroke="#16a34a" stroke-width="4"/>
  <circle cx="170" cy="230" r="5" fill="#2563eb"/>
  <circle cx="290" cy="140" r="5" fill="#2563eb"/>
  <circle cx="410" cy="200" r="5" fill="#2563eb"/>
  <circle cx="110" cy="80" r="5" fill="#16a34a"/>
  <circle cx="230" cy="0" r="5" fill="#16a34a"/>
  <circle cx="350" cy="50" r="5" fill="#16a34a"/>
  <text x="176" y="248" font-size="15" fill="#2563eb">A</text>
  <text x="296" y="136" font-size="15" fill="#2563eb">B</text>
  <text x="416" y="204" font-size="15" fill="#2563eb">C</text>
  <text x="116" y="98" font-size="15" fill="#16a34a">A'</text>
  <text x="236" y="18" font-size="15" fill="#16a34a">B'</text>
  <text x="356" y="68" font-size="15" fill="#16a34a">C'</text>
</svg>

## Guided Practice with Revealable Hints

### Guided Problem 1

A hiker walks 4 km on a bearing of 020°, then 6 km on a bearing of 100°. What is the included angle at the turn, and which law would help find the direct distance?

<details>
<summary>Hint 1</summary>

Find the back bearing of the first leg by adding 180°.
</details>

<details>
<summary>Hint 2</summary>

From the turn, the back bearing is 200°. Compare it with 100°.
</details>

<details>
<summary>Show solution</summary>

The included angle is \(200° - 100° = 100°\). Since two sides and the included angle are known, use the Law of Cosines.
</details>

### Guided Problem 2

The route points are \(A(1, 2)\), \(B(5, 4)\), and \(C(7, 1)\). Apply \((x, y) \rightarrow (x + 3, y - 2)\).

<details>
<summary>Hint 1</summary>

Add 3 to every x-coordinate and subtract 2 from every y-coordinate.
</details>

<details>
<summary>Hint 2</summary>

Do the same rule to A, B, and C.
</details>

<details>
<summary>Show solution</summary>

\(A'(4, 0)\), \(B'(8, 2)\), and \(C'(10, -1)\).
</details>

### Guided Problem 3

The mapped route has \(A(2, 1)\), \(B(4, 5)\), and \(C(6, 2)\). Reflect it across the y-axis.

<details>
<summary>Hint 1</summary>

Reflection across the y-axis changes the sign of x, but keeps y the same.
</details>

<details>
<summary>Hint 2</summary>

Use \((x, y) \rightarrow (-x, y)\).
</details>

<details>
<summary>Show solution</summary>

\(A'(-2, 1)\), \(B'(-4, 5)\), and \(C'(-6, 2)\).
</details>

## Mini-Quiz

Answer these without revealing the solutions first.

1. A bearing of 180° points in which direction?
2. What is the rule for reflecting a point across the x-axis?
3. If a route has sides 9 km and 11 km with included angle 64°, which law helps find the third side?
4. Rotate \(P(6, -2)\) 90° counterclockwise about the origin.

<details>
<summary>Reveal mini-quiz answers</summary>

1. South.
2. \((x, y) \rightarrow (x, -y)\).
3. Law of Cosines.
4. \(P'(2, 6)\).
</details>

## Independent Practice

Try these on your own. Use a diagram for each route question.

1. A boat travels 3 km on a bearing of 045°, then 5 km on a bearing of 135°. Find the included angle at the turn.
2. A drone route uses points \(A(0, 0)\), \(B(3, 4)\), and \(C(6, 2)\). Translate the route 4 units right and 1 unit down.
3. Reflect \(P(-5, 7)\) across the x-axis.
4. Rotate \(Q(-3, 8)\) 180° about the origin.
5. A route has two legs of 8 km and 10 km with included angle 120°. Estimate the direct distance using the Law of Cosines.
6. Describe a coordinate rule that moves every point 6 units west and 3 units north.
7. A mapped route is transformed by \((x, y) \rightarrow (-y, x)\). Name the transformation.

## Answer Key with Explanations

<details>
<summary>Reveal independent practice answers</summary>

1. The back bearing of 045° is 225°. The included angle is \(225° - 135° = 90°\).
2. \(A'(4, -1)\), \(B'(7, 3)\), \(C'(10, 1)\).
3. \(P'(-5, -7)\). Reflection across the x-axis changes \(y\) to \(-y\).
4. \(Q'(3, -8)\). A 180° rotation uses \((x, y) \rightarrow (-x, -y)\).
5. \(d^2 = 8^2 + 10^2 - 2(8)(10)\cos(120°) = 244\), so \(d \approx 15.6\) km.
6. \((x, y) \rightarrow (x - 6, y + 3)\).
7. A 90° counterclockwise rotation about the origin.
</details>

## Misconception Alerts

> [!WARNING] Bearing Angle Mix-up
>
> Bearings are measured clockwise from north. Standard position angles in coordinate geometry are measured counterclockwise from the positive x-axis.

> [!WARNING] One Rule for Every Point
>
> A transformation rule must be applied to every point in the route. Transforming only the endpoint changes the shape of the route.

> [!WARNING] Direction Words Matter
>
> East changes \(x\), north changes \(y\). West decreases \(x\), and south decreases \(y\).

## Error Analysis

A student solves this task:

Route points are \(A(0, 0)\), \(B(4, 3)\), and \(C(7, 1)\). Translate the route 5 units right and 2 units down.

The student writes:

\[
A'(5, 2),\quad B'(9, 5),\quad C'(12, 3)
\]

<details>
<summary>Reveal the mistake</summary>

The student moved the points 5 units right, but moved them 2 units up instead of 2 units down. Down means subtract 2 from each y-coordinate.
</details>

<details>
<summary>Reveal corrected solution</summary>

Use \((x, y) \rightarrow (x + 5, y - 2)\).

\[
A'(5, -2),\quad B'(9, 1),\quad C'(12, -1)
\]
</details>

## Self-Explanation Prompts

Use these prompts to check your reasoning.

1. How do you decide whether a navigation problem needs the Law of Sines or Law of Cosines?
2. Why is it helpful to draw a north reference line at each turn?
3. How do you know whether a coordinate rule is a translation, reflection, or rotation?
4. What evidence should appear in a final route map?

<details>
<summary>Reveal sample responses</summary>

1. I check the known side-angle pattern. SAS or SSS usually points to Law of Cosines; ASA, AAS, or SSA usually points to Law of Sines, with SSA needing an ambiguity check.
2. Bearings are measured from north, so a new north reference line helps me measure the next direction correctly.
3. A translation adds or subtracts constants. A reflection changes signs in a pattern. A rotation swaps and changes signs according to the rotation rule.
4. The final map should show labeled points, route segments, important distances or angles, and the transformation rule used.
</details>

## Extension Challenge

A small aircraft flies 12 km on a bearing of 070°, then 9 km on a bearing of 160°. After mapping the route, the display software rotates the route 90° counterclockwise about the origin. If the original route points are approximated as \(A(0, 0)\), \(B(11.3, 4.1)\), and \(C(14.4, -4.4)\), what are the rotated image points?

<details>
<summary>Reveal hint</summary>

For a 90° counterclockwise rotation, use \((x, y) \rightarrow (-y, x)\).
</details>

<details>
<summary>Reveal solution</summary>

\[
A'(0, 0),\quad B'(-4.1, 11.3),\quad C'(4.4, 14.4)
\]

The \(x\)-coordinate becomes the opposite of the old \(y\)-coordinate, and the \(y\)-coordinate becomes the old \(x\)-coordinate.
</details>

## Mastery Checklist

Check the statements that feel true.

- I can read a three-digit bearing as a direction from north.
- I can draw a route diagram from two bearing instructions.
- I can identify when Law of Cosines is useful for a navigation triangle.
- I can plot route points on a coordinate plane.
- I can apply a translation rule to every route point.
- I can apply reflection and rotation rules to route points.
- I can explain a transformed route using coordinates and a diagram.

> [!PRACTICE] What To Do Next
>
> Use the practice set for quick recall and rule checking. Use the assessment when you are ready to solve a fuller navigation-and-transformation task without step-by-step hints.

