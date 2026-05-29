# Trigonometry: Solving Bearing Problems

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to solve map-style bearing problems by drawing a triangle, choosing the Law of Sines or Law of Cosines, computing carefully, and interpreting the final distance or direction.

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 45 minutes |
| Difficulty | Intermediate |
| Main skill | Solving navigation triangles from bearings |
| Materials | Calculator, map-style problem sheet, ruler or straightedge |

## Visual Study Set

Use these diagrams while you study. Each one highlights a move that matters in bearing problems.

![Compass bearing measured clockwise from north](/content/grade-10/math/quarter-1/topic-solving-bearing-problems/images/bearing-compass.svg)

![Two-leg rescue route forming an oblique triangle](/content/grade-10/math/quarter-1/topic-solving-bearing-problems/images/two-leg-rescue-route.svg)

![Choosing between Law of Sines and Law of Cosines in a bearing triangle](/content/grade-10/math/quarter-1/topic-solving-bearing-problems/images/law-selection-map.svg)

![Interpreting a final bearing from a solved triangle](/content/grade-10/math/quarter-1/topic-solving-bearing-problems/images/bearing-interpretation.svg)

## What You Should Already Know

Before solving bearing problems, review these facts:

- A bearing is a direction measured clockwise from north.
- Bearings are usually written with three digits, such as `040 degrees` or `125 degrees`.
- The Law of Cosines is useful for SAS or SSS triangles.
- The Law of Sines is useful when you know an opposite angle-side pair.
- A final answer should include a unit for distance or a three-digit bearing for direction.

### Pre-check / Readiness Quiz

Try these before reading the worked examples.

1. What direction does a bearing of `090 degrees` point?
2. What is the smaller angle between bearings `035 degrees` and `100 degrees`?
3. Which law is usually helpful when two sides and the included angle are known?
4. If a distance answer is about `10.5`, what unit should appear if the problem used kilometers?

<details>
<summary>Reveal pre-check answers</summary>

1. East.
2. `65 degrees`, because `100 - 35 = 65`.
3. The Law of Cosines.
4. Kilometers, usually written as `10.5 km`.
</details>

## Scenario: A Two-Leg Rescue Route

A rescue boat starts at a dock. It travels `8 km` on a bearing of `050 degrees` to reach a buoy. A drone starts at the same dock and travels `11 km` on a bearing of `115 degrees` to scan the shoreline.

How far apart are the buoy and the drone?

This is a bearing problem because the distances and directions create a triangle on a map. The key is to turn the words into a diagram first.

## Core Idea 1: Bearings Become Angles

A bearing is measured clockwise from north.

| Bearing | Direction idea |
|---|---|
| `000 degrees` | North |
| `090 degrees` | East |
| `180 degrees` | South |
| `270 degrees` | West |
| `050 degrees` | 50 degrees clockwise from north |

When two paths start at the same point, the included angle between them is often the difference of their bearings.

For the rescue route:

$$115 degrees - 50 degrees = 65 degrees$$

So the triangle has sides `8 km` and `11 km` with an included angle of `65 degrees`.

> [!TIP] Diagram First
>
> Draw a north arrow at each important point. Bearings are always measured from north at the starting point of that leg, not from the previous side of the triangle.

## Core Idea 2: Choose the Law From the Diagram

Do not choose a formula just because the problem has bearings. Choose the formula from the triangle information.

| Given after drawing | Common case | Useful law |
|---|---|---|
| Two sides and the included angle | SAS | Law of Cosines |
| Two angles and one side | ASA or AAS | Law of Sines |
| Two sides and a non-included angle | SSA | Law of Sines, with a possibility check |
| Three sides | SSS | Law of Cosines |

> [!IMPORTANT] Law of Cosines
>
> If sides `a` and `b` include angle `C`, then the side opposite `C` is:
>
> $$c^2 = a^2 + b^2 - 2ab\cos C$$

> [!IMPORTANT] Law of Sines
>
> For any triangle:
>
> $$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

## Worked Example 1: Find the Direct Distance

**Problem:** A boat travels `8 km` from a dock on a bearing of `050 degrees`. A drone travels `11 km` from the same dock on a bearing of `115 degrees`. How far apart are the boat and drone, to the nearest tenth?

**Step 1: Draw and label.**

The paths begin at the same dock. The included angle is:

$$115 degrees - 50 degrees = 65 degrees$$

**Step 2: Choose the law.**

The triangle has two sides and the included angle, so use the Law of Cosines.

**Step 3: Compute.**

Let `d` be the distance between the boat and the drone.

$$d^2 = 8^2 + 11^2 - 2(8)(11)\cos 65 degrees$$

$$d^2 \approx 110.62$$

$$d \approx 10.5$$

**Answer:** The boat and drone are about `10.5 km` apart.

## Worked Example 2: Find a Direction After the Distance

**Problem:** In the same rescue route, what is the bearing from the boat to the drone, to the nearest degree?

The previous example found that the boat-drone distance is about `10.5 km`. Now use the triangle to find the angle at the boat.

**Step 1: Use the Law of Sines.**

The angle at the dock is `65 degrees`. Its opposite side is the boat-drone distance, about `10.5 km`. The side from the dock to the drone is `11 km`, opposite the angle at the boat.

$$\frac{\sin B}{11} = \frac{\sin 65 degrees}{10.5}$$

$$\sin B \approx \frac{11\sin 65 degrees}{10.5}$$

$$B \approx 71 degrees$$

**Step 2: Convert the triangle angle to a bearing.**

From the boat back to the dock is the reverse of `050 degrees`, so its bearing is:

$$050 degrees + 180 degrees = 230 degrees$$

Turning inside the triangle from the boat-to-dock direction toward the drone gives:

$$230 degrees - 71 degrees = 159 degrees$$

**Answer:** The bearing from the boat to the drone is about `159 degrees`.

> [!WARNING] Common Trap
>
> The angle inside the triangle is not always the final bearing. Bearings must be measured clockwise from north at the point where the new trip begins.

## Worked Example 3: Two Travel Legs in Sequence

**Problem:** A hiker walks `6 km` on a bearing of `040 degrees`, then turns and walks `10 km` on a bearing of `100 degrees`. What is the straight-line distance from the starting point to the final point?

**Step 1: Find the interior angle at the turning point.**

The reverse bearing from the turning point back to the start is:

$$040 degrees + 180 degrees = 220 degrees$$

The second leg is on a bearing of `100 degrees`. The smaller angle between `220 degrees` and `100 degrees` is:

$$220 degrees - 100 degrees = 120 degrees$$

**Step 2: Use the Law of Cosines.**

Let `x` be the straight-line distance from start to finish.

$$x^2 = 6^2 + 10^2 - 2(6)(10)\cos 120 degrees$$

Since `cos 120 degrees = -0.5`:

$$x^2 = 36 + 100 + 60 = 196$$

$$x = 14$$

**Answer:** The hiker is `14 km` from the starting point.

## Guided Practice With Revealable Hints

### Guided Problem 1

A survey drone leaves a launch point and flies `12 km` on a bearing of `025 degrees`. A rescue team leaves the same point and travels `9 km` on a bearing of `080 degrees`. How far apart are they, to the nearest tenth?

<details>
<summary>Hint 1</summary>

The included angle is `80 degrees - 25 degrees = 55 degrees`.
</details>

<details>
<summary>Hint 2</summary>

Use `d^2 = 12^2 + 9^2 - 2(12)(9)cos 55 degrees`.
</details>

<details>
<summary>Show solution</summary>

`d` is about `10.1 km`, so they are about `10.1 km` apart.
</details>

### Guided Problem 2

A boat first travels `7 km` on a bearing of `015 degrees`, then travels `9 km` on a bearing of `095 degrees`. Find the straight-line distance from the start to the final position, to the nearest tenth.

<details>
<summary>Hint 1</summary>

At the turning point, the reverse of `015 degrees` is `195 degrees`.
</details>

<details>
<summary>Hint 2</summary>

The interior angle between `195 degrees` and `095 degrees` is `100 degrees`.
</details>

<details>
<summary>Show solution</summary>

Use the Law of Cosines:

$$x^2 = 7^2 + 9^2 - 2(7)(9)\cos 100 degrees$$

So `x` is about `12.3 km`.
</details>

## Four-Step Solver

Use this checklist every time:

1. Draw north arrows and sketch each travel leg.
2. Convert bearings into triangle angles.
3. Choose the law from the known sides and angles.
4. Compute, round at the end, and write the answer with units or a three-digit bearing.

> [!CHECK] End-of-Lesson Checklist
>
> You are ready for practice when you can:
>
> - explain what a three-digit bearing means;
> - find the included angle between two bearings from the same point;
> - find an interior angle after a two-leg route with a turn;
> - decide when to use the Law of Cosines or Law of Sines;
> - report a final distance or direction in context.

> [!PRACTICE] What To Do Next
>
> Use the practice questions for quick navigation drills. Then use the assessment when you are ready to complete full contextual solutions with diagrams, units, and interpretation.
