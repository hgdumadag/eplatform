# Bearings and Oblique Triangles

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to turn a bearing description into a clear triangle diagram, label the known distances and angles, and decide what information the diagram gives you.

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 40 minutes |
| Difficulty | Intermediate |
| Main skill | Translating bearings into oblique-triangle diagrams |
| Tools | Ruler, graph paper, protractor, calculator when needed |

## What You Should Already Know

Before studying bearings, make sure these ideas feel familiar:

- A full turn measures 360°.
- North, east, south, and west can be drawn as perpendicular directions.
- A bearing is usually measured clockwise from north.
- Oblique triangles have no 90° angle.
- If two sides and the included angle are known, the case is SAS.

### Pre-check / Readiness Quiz

Try these first. Then reveal the answers.

1. What direction is a bearing of 090°?
2. What direction is a bearing of 180°?
3. If a path goes 30° east of north, what three-digit bearing is that?
4. If two paths start from the same point and their bearings are 040° and 115°, what is the angle between the paths?

<details>
<summary>Reveal pre-check answers</summary>

1. East.
2. South.
3. 030°.
4. 75°, because 115° - 40° = 75°.

If you missed more than one item, review compass directions and clockwise angle measurement before continuing.
</details>

## Key Vocabulary

| Term | Meaning |
|---|---|
| Bearing | A three-digit direction angle measured clockwise from north |
| North line | A vertical reference line pointing north from a location |
| Course | The direction of travel |
| Leg | One traveled segment of a route |
| Included angle | The angle between two known sides of a triangle |
| Navigation triangle | A triangle formed by travel paths and the direct distance between locations |
| Back bearing | The opposite direction of a bearing, found by adding or subtracting 180° |

> [!IMPORTANT] Core Bearing Rule
>
> A bearing starts at north and turns clockwise. Use three digits: 035°, 090°, 212°, and 305° are all valid bearing formats.

## Try Before You Read

A drone leaves point A and flies 6 km on a bearing of 040°. Another drone leaves the same point and flies 8 km on a bearing of 115°.

What geometric idea do you notice?

<details>
<summary>Reveal thinking guide</summary>

Draw north from point A. Mark both bearings clockwise from north. The two flight paths and the distance between the drones form a triangle.
</details>

<details>
<summary>Reveal answer</summary>

The angle between the two paths is 75°, because 115° - 040° = 75°. With two known distances and the included angle, the diagram shows an SAS oblique triangle.
</details>

## Visual Introduction

A bearing is not measured from the nearest compass direction. It is measured from north.

<svg viewBox="0 0 620 280" role="img" aria-labelledby="bearing-compass-title bearing-compass-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="bearing-compass-title">Bearing measured clockwise from north</title>
  <desc id="bearing-compass-desc">A point has north, east, south, and west reference lines. A ray at bearing 060 degrees is measured clockwise from north.</desc>
  <line x1="170" y1="230" x2="170" y2="35" stroke="#111827" stroke-width="3"/>
  <line x1="55" y1="140" x2="285" y2="140" stroke="#9ca3af" stroke-width="2"/>
  <circle cx="170" cy="140" r="5" fill="#111827"/>
  <text x="162" y="25" font-size="18" fill="#111827">N</text>
  <text x="292" y="146" font-size="18" fill="#111827">E</text>
  <text x="164" y="258" font-size="18" fill="#111827">S</text>
  <text x="36" y="146" font-size="18" fill="#111827">W</text>
  <line x1="170" y1="140" x2="292" y2="70" stroke="#2563eb" stroke-width="4"/>
  <path d="M170 88 A52 52 0 0 1 215 114" fill="none" stroke="#dc2626" stroke-width="3"/>
  <text x="210" y="89" font-size="17" fill="#dc2626">060°</text>
  <text x="325" y="77" font-size="18" fill="#2563eb">bearing 060°</text>
  <text x="345" y="145" font-size="17" fill="#374151">Start at north.</text>
  <text x="345" y="172" font-size="17" fill="#374151">Turn clockwise.</text>
  <text x="345" y="199" font-size="17" fill="#374151">Draw the travel ray.</text>
</svg>

## Main Concept Explanation

### 1. Draw the Local North Line

For each location where a direction is given, draw a short north line first. Then measure the bearing clockwise from that north line.

### 2. Convert the Story Into Segments

A phrase like "travels 12 km on a bearing of 070°" gives two pieces of information:

- the side length: 12 km
- the direction of that side: 070°

### 3. Look for the Triangle

Navigation problems often hide an oblique triangle. The traveled route gives one or two sides. The direct distance between start and end points becomes the third side.

<svg viewBox="0 0 650 310" role="img" aria-labelledby="route-triangle-title route-triangle-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="route-triangle-title">Two travel legs and a direct distance form a triangle</title>
  <desc id="route-triangle-desc">A route from A to B then to C forms two sides of a triangle. The direct distance from A to C is the third side.</desc>
  <line x1="90" y1="250" x2="90" y2="90" stroke="#9ca3af" stroke-width="2"/>
  <text x="82" y="78" font-size="16" fill="#111827">N</text>
  <circle cx="90" cy="250" r="5" fill="#111827"/>
  <text x="72" y="275" font-size="18" fill="#111827">A</text>
  <line x1="90" y1="250" x2="300" y2="120" stroke="#2563eb" stroke-width="4"/>
  <circle cx="300" cy="120" r="5" fill="#111827"/>
  <text x="308" y="119" font-size="18" fill="#111827">B</text>
  <text x="160" y="175" font-size="16" fill="#2563eb">12 km</text>
  <line x1="300" y1="120" x2="300" y2="35" stroke="#9ca3af" stroke-width="2"/>
  <text x="292" y="26" font-size="16" fill="#111827">N</text>
  <line x1="300" y1="120" x2="535" y2="205" stroke="#0f766e" stroke-width="4"/>
  <circle cx="535" cy="205" r="5" fill="#111827"/>
  <text x="544" y="211" font-size="18" fill="#111827">C</text>
  <text x="408" y="151" font-size="16" fill="#0f766e">9 km</text>
  <line x1="90" y1="250" x2="535" y2="205" stroke="#dc2626" stroke-width="3" stroke-dasharray="8 7"/>
  <text x="272" y="250" font-size="16" fill="#dc2626">direct distance AC</text>
  <path d="M90 205 A45 45 0 0 1 128 226" fill="none" stroke="#ea580c" stroke-width="3"/>
  <text x="128" y="213" font-size="15" fill="#ea580c">bearing at A</text>
</svg>

> [!TIP] Diagram Habit
>
> Label the starting point, every turn point, every distance, and every bearing. A clean diagram is often half the solution.

## Rule Box / Formula Box

Use these rules when translating bearing descriptions.

| Situation | Diagram move |
|---|---|
| Bearing 000° or 360° | Draw north |
| Bearing 090° | Draw east |
| Bearing 180° | Draw south |
| Bearing 270° | Draw west |
| Bearing less than 090° | Draw in the northeast quadrant |
| Bearing between 090° and 180° | Draw in the southeast quadrant |
| Bearing between 180° and 270° | Draw in the southwest quadrant |
| Bearing between 270° and 360° | Draw in the northwest quadrant |

Back bearing rule:

$$\text{back bearing} = \text{bearing} + 180° \quad \text{or} \quad \text{bearing} - 180°$$

Choose the result between 000° and 360°.

## Worked Examples

### Example 1: Two Paths From the Same Point

**Problem:** From point A, one marker is 10 km away on a bearing of 030°. Another marker is 14 km away on a bearing of 110°. What angle should be placed between the two known sides?

<svg viewBox="0 0 560 270" role="img" aria-labelledby="same-point-title same-point-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="same-point-title">Two bearings from the same starting point</title>
  <desc id="same-point-desc">Two rays from point A have bearings 030 degrees and 110 degrees. The angle between them is 80 degrees.</desc>
  <line x1="110" y1="225" x2="110" y2="45" stroke="#9ca3af" stroke-width="2"/>
  <text x="101" y="34" font-size="16" fill="#111827">N</text>
  <circle cx="110" cy="225" r="5" fill="#111827"/>
  <text x="92" y="250" font-size="18" fill="#111827">A</text>
  <line x1="110" y1="225" x2="190" y2="65" stroke="#2563eb" stroke-width="4"/>
  <line x1="110" y1="225" x2="340" y2="150" stroke="#0f766e" stroke-width="4"/>
  <text x="160" y="130" font-size="16" fill="#2563eb">10 km</text>
  <text x="225" y="185" font-size="16" fill="#0f766e">14 km</text>
  <path d="M110 165 A60 60 0 0 1 167 205" fill="none" stroke="#dc2626" stroke-width="3"/>
  <text x="175" y="186" font-size="17" fill="#dc2626">80°</text>
  <text x="365" y="85" font-size="17" fill="#374151">110° - 030° = 80°</text>
</svg>

**Solution:**

Both bearings are measured from the same north line at point A.

$$110° - 030° = 80°$$

**Answer:** The included angle is 80°. The triangle information is SAS.

### Example 2: A Two-Leg Route

**Problem:** A boat travels from A to B for 7 km on a bearing of 060°. From B, it travels 5 km on a bearing of 145°. What should the diagram show?

**Solution:**

1. Draw point A and a north line.
2. From A, draw AB on bearing 060° and label it 7 km.
3. At point B, draw a new north line.
4. From B, draw BC on bearing 145° and label it 5 km.
5. Draw AC as the direct distance from the start to the final position.

**Answer:** The route forms triangle ABC, with AB = 7 km, BC = 5 km, and AC as the direct distance.

### Example 3: Using a Back Bearing

**Problem:** From A to B, the bearing is 070°. What is the bearing from B back to A?

<svg viewBox="0 0 600 250" role="img" aria-labelledby="back-bearing-title back-bearing-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="back-bearing-title">Forward bearing and back bearing</title>
  <desc id="back-bearing-desc">The bearing from A to B is 070 degrees. The opposite direction from B to A is 250 degrees.</desc>
  <line x1="105" y1="205" x2="105" y2="50" stroke="#9ca3af" stroke-width="2"/>
  <text x="96" y="39" font-size="16" fill="#111827">N</text>
  <circle cx="105" cy="205" r="5" fill="#111827"/>
  <text x="88" y="230" font-size="18" fill="#111827">A</text>
  <line x1="105" y1="205" x2="385" y2="95" stroke="#2563eb" stroke-width="4"/>
  <circle cx="385" cy="95" r="5" fill="#111827"/>
  <text x="393" y="97" font-size="18" fill="#111827">B</text>
  <line x1="385" y1="95" x2="385" y2="25" stroke="#9ca3af" stroke-width="2"/>
  <text x="376" y="18" font-size="16" fill="#111827">N</text>
  <path d="M105 153 A52 52 0 0 1 154 185" fill="none" stroke="#dc2626" stroke-width="3"/>
  <text x="156" y="165" font-size="16" fill="#dc2626">070°</text>
  <path d="M385 45 A50 50 0 1 1 338 114" fill="none" stroke="#0f766e" stroke-width="3"/>
  <text x="315" y="55" font-size="16" fill="#0f766e">250°</text>
  <text x="425" y="155" font-size="17" fill="#374151">070° + 180° = 250°</text>
</svg>

**Solution:**

Add 180° because the back bearing points in the opposite direction.

$$070° + 180° = 250°$$

**Answer:** The bearing from B back to A is 250°.

## Guided Practice with Revealable Hints

### Guided Problem 1

From point P, one path has a bearing of 025° and another has a bearing of 095°. What is the angle between the paths?

<details>
<summary>Hint 1</summary>

Both directions start from the same point, so compare the two bearing angles.
</details>

<details>
<summary>Hint 2</summary>

Subtract the smaller bearing from the larger bearing.
</details>

<details>
<summary>Show solution</summary>

095° - 025° = 70°. The angle between the paths is **70°**.
</details>

### Guided Problem 2

A plane flies from A to B on a bearing of 135°. What quadrant should the ray from A point toward?

<details>
<summary>Hint 1</summary>

090° is east and 180° is south.
</details>

<details>
<summary>Hint 2</summary>

A bearing between 090° and 180° lies between east and south.
</details>

<details>
<summary>Show solution</summary>

The ray points toward the **southeast** quadrant.
</details>

### Guided Problem 3

From A to B, the bearing is 310°. What is the bearing from B back to A?

<details>
<summary>Hint 1</summary>

Use the opposite direction.
</details>

<details>
<summary>Hint 2</summary>

Since 310° + 180° is greater than 360°, subtract 180° instead.
</details>

<details>
<summary>Show solution</summary>

310° - 180° = 130°. The back bearing is **130°**.
</details>

## Mini-Quiz

Try these without opening the answers first.

1. What compass direction matches bearing 270°?
2. A bearing of 225° lies in which quadrant?
3. From the same point, two paths have bearings 045° and 125°. What is the included angle?
4. From A to B, the bearing is 018°. What is the back bearing from B to A?

<details>
<summary>Reveal mini-quiz answers</summary>

1. West.
2. Southwest.
3. 80°, because 125° - 045° = 80°.
4. 198°, because 018° + 180° = 198°.
</details>

## Independent Practice

Solve these on paper or in your notes. Then compare with the answer key.

1. Draw a north line and sketch a ray with bearing 075°.
2. A hiker walks 4 km on a bearing of 140°. Which quadrant is the path in?
3. From point A, tower B is on a bearing of 020° and tower C is on a bearing of 100°. What is ∠BAC?
4. From point X to point Y, the bearing is 265°. What is the back bearing?
5. A boat travels 9 km from A to B on bearing 050°, then 6 km from B to C on bearing 120°. Name the triangle sides shown by the route and the direct distance.
6. Two landmarks are 12 km and 15 km from a station on bearings 035° and 102°. What triangle case is formed if the distance between the landmarks is unknown?

## Answer Key with Explanations

<details>
<summary>Reveal independent practice answers</summary>

1. The ray should start at the point and turn 75° clockwise from north, landing in the northeast quadrant.
2. Southeast, because 140° is between 090° and 180°.
3. 80°, because 100° - 020° = 80°.
4. 085°, because 265° - 180° = 85°. Written with three digits, that is 085°.
5. The route shows AB = 9 km and BC = 6 km. The direct distance is AC.
6. SAS. The two known distances are sides from the station, and the angle between them is 102° - 035° = 67°.
</details>

## Misconception Alerts

> [!WARNING] Misconception 1
>
> A bearing of 060° does not mean "60° above east." It means 60° clockwise from north.

> [!WARNING] Misconception 2
>
> A new north line is drawn at each turning point. Do not keep measuring from the first north line after the route changes location.

> [!WARNING] Misconception 3
>
> The back bearing is not always made by adding 180° only. If the result is greater than 360°, subtract 180° from the original bearing instead.

## Error Analysis

A student solves this problem:

**Problem:** From point A, one path has bearing 035° and another has bearing 125°. Find the angle between the paths.

**Incorrect solution:** "The angle is 125° because that is the larger bearing."

What is the mistake?

<details>
<summary>Reveal mistake explanation and corrected solution</summary>

The bearing tells how far each ray turns from north. The angle between two rays from the same point is the difference between their bearings.

Correct solution:

$$125° - 035° = 90°$$

The angle between the paths is **90°**.
</details>

## Self-Explanation Prompts

Answer these in your own words.

1. Why should you draw a north line before drawing a bearing?
2. How can two travel legs create a triangle?
3. When do you subtract two bearings?
4. Why is a back bearing 180° away from the original bearing?

<details>
<summary>Reveal sample responses</summary>

1. A north line gives the reference direction for the clockwise bearing angle.
2. The two legs make two sides of a route, and the direct distance from the start to the endpoint makes the third side.
3. I subtract two bearings when both directions start from the same point and I need the angle between them.
4. Going back follows the same line in the opposite direction, which is half of a full 360° turn.
</details>

## Extension Challenge

A ranger station sees camp A on a bearing of 028° at a distance of 10 km. The same station sees camp B on a bearing of 118° at a distance of 16 km.

1. Draw the diagram.
2. Find the included angle at the ranger station.
3. Identify the given case for triangle station-camp A-camp B.

<details>
<summary>Reveal hint</summary>

Both bearings start from the same station. Compare 028° and 118°.
</details>

<details>
<summary>Reveal full solution</summary>

The included angle is:

$$118° - 028° = 90°$$

The two known distances are 10 km and 16 km from the same station, and the included angle is 90°. The given case is **SAS**. The triangle is a navigation triangle formed by the station, camp A, and camp B.
</details>

## Mastery Checklist

Check your readiness before moving on.

- I can explain what a bearing measures.
- I can draw a north line at a starting point.
- I can sketch a ray for a three-digit bearing.
- I can identify the quadrant of a bearing.
- I can find a back bearing.
- I can find the angle between two bearings from the same point.
- I can turn a navigation story into a labeled triangle diagram.
- I can identify whether a diagram gives SAS information.

> [!PRACTICE] Next Step
>
> Use the practice set to check bearing basics and diagram translation. Use the assessment when you can sketch the diagram before choosing an answer.

## Final Summary

Bearings translate directions into geometry. Start with a north line, measure clockwise, label each route segment, and look for the triangle created by the route and direct distance. Once the diagram is clear, oblique-triangle strategies become much easier to choose.
