# Trigonometry - Lesson 10: Oblique Triangle Navigation Task

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to solve a two-leg route-planning challenge by drawing a bearing diagram, choosing the correct trigonometric law, computing missing measurements, and explaining what the answer means for navigation.

## Estimated Time and Materials

| Item | Details |
|---|---|
| Time | About 45 minutes |
| Difficulty | Intermediate |
| Main skill | Applying Laws of Sines and Cosines in a multi-step bearings task |
| Materials | Calculator, protractor, route map template or graph paper, ruler |

## Visual Study Set

Use these four diagrams while you work. They show the same habits your final solution should show: clear landmarks, local north lines, law choice, and interpretation.

![Route-planning challenge with ranger station, beacon, and cove](/content/grade-10/math/quarter-1/topic-oblique-triangle-navigation-task/images/route-planning-challenge.svg)

![Back bearing creates the included angle at the turn point](/content/grade-10/math/quarter-1/topic-oblique-triangle-navigation-task/images/back-bearing-included-angle.svg)

![Law choice map for route-planning trigonometry](/content/grade-10/math/quarter-1/topic-oblique-triangle-navigation-task/images/law-choice-map.svg)

![Navigation task rubric summary](/content/grade-10/math/quarter-1/topic-oblique-triangle-navigation-task/images/rubric-navigation-solution.svg)

## Opening Challenge

A coastal patrol team starts at **Ranger Station A**.

- It travels **6 km** on a bearing of **040°** to **Beacon B**.
- From Beacon B, it travels **9 km** on a bearing of **115°** to **Cove C**.
- The team wants to know whether a direct route from A to C is shorter and what bearing that direct route should use.

Your job is to prepare a route recommendation:

1. Draw the navigation triangle.
2. Find the direct distance \(AC\).
3. Find the approximate bearing from A to C.
4. Explain why your method is appropriate.

> [!TARGET] Performance Target
>
> A strong solution is not just a final number. It includes an accurate diagram, a justified law choice, organized computations, sensible rounding, and a short interpretation in the context of the route.

## Warm-Up Recall

Answer these before reading the worked solution.

1. What direction is bearing 090°?
2. If the bearing from A to B is 040°, what is the back bearing from B to A?
3. Which law usually finds a missing side when two sides and the included angle are known?
4. Which law can connect a known side-angle opposite pair to another side or angle?

<details>
<summary>Reveal answers</summary>

1. East.
2. 220°, because \(040° + 180° = 220°\).
3. Law of Cosines.
4. Law of Sines.

</details>

## Rubric Expectations

Use this checklist while solving. It turns the task into four smaller jobs.

| Rubric Area | What Your Work Should Show |
|---|---|
| Diagram accuracy | Landmarks labeled A, B, and C; route legs labeled; local north lines drawn; bearings placed from north |
| Law choice | A reason for using Law of Cosines or Law of Sines, based on the known sides and angles |
| Computations | Substitution into formulas, calculator work, units, and rounding |
| Interpretation | A final sentence that explains the direct distance and bearing as a route recommendation |

> [!IMPORTANT] Diagram First
>
> In a bearings task, do not start with a formula. Start with a map. The diagram tells you which angle is inside the triangle and which trigonometric law fits.

## Step 1: Draw the Route

At A, draw a north line. Measure 040° clockwise from north and draw \(AB = 6\) km.

At B, draw a new north line. Measure 115° clockwise from north and draw \(BC = 9\) km.

Then draw the direct segment \(AC\). The triangle \(ABC\) is the oblique triangle you will solve.

## Step 2: Find the Included Angle at B

The Law of Cosines needs the angle between the two known sides. At B, one side points from B to A and the other points from B to C.

The bearing from A to B is 040°, so the back bearing from B to A is:

$$040° + 180° = 220°$$

The bearing from B to C is 115°. The included angle at B is:

$$220° - 115° = 105°$$

So the known information is:

- \(AB = 6\) km
- \(BC = 9\) km
- \(\angle B = 105°\)

This is an SAS case.

## Step 3: Choose and Use the Law of Cosines

Because two sides and the included angle are known, use the Law of Cosines to find \(AC\):

$$AC^2 = AB^2 + BC^2 - 2(AB)(BC)\cos B$$

Substitute:

$$AC^2 = 6^2 + 9^2 - 2(6)(9)\cos(105°)$$

$$AC^2 \approx 36 + 81 - 108(-0.2588)$$

$$AC^2 \approx 144.95$$

$$AC \approx 12.0$$

The direct distance from A to C is about **12.0 km**.

> [!CHECK] Reasonableness Check
>
> The direct distance should be less than the traveled route \(6 + 9 = 15\) km. Since \(12.0\) km is less than \(15\) km, the result is reasonable.

## Step 4: Use the Law of Sines to Find the Direct Bearing

The route recommendation also needs direction. At A, the known bearing \(AB\) is 040°. If you find \(\angle A\), you can rotate from \(AB\) toward \(AC\).

Now that \(AC\) is known, you have an opposite side-angle pair: \(AC\) is opposite \(\angle B = 105°\). Use the Law of Sines:

$$\frac{\sin A}{BC} = \frac{\sin B}{AC}$$

Substitute \(BC = 9\), \(B = 105°\), and \(AC \approx 12.0\):

$$\frac{\sin A}{9} \approx \frac{\sin 105°}{12.0}$$

$$\sin A \approx \frac{9\sin 105°}{12.0}$$

$$A \approx 46°$$

From the diagram, \(AC\) is clockwise from \(AB\), so add:

$$040° + 46° = 086°$$

The direct bearing from A to C is about **086°**.

## Finished Route Recommendation

A direct route from Ranger Station A to Cove C is about **12.0 km** on a bearing of about **086°**. This is shorter than following the two-leg route of \(6 + 9 = 15\) km, so the direct route saves about **3.0 km**, if travel conditions allow a straight path.

## Strategy Comparison Prompts

Use these prompts as a self-study version of small-group strategy comparison.

1. Compare two starting strategies: drawing first versus writing formulas first. Which one prevents bearing mistakes better?
2. A classmate uses \(115° - 040° = 75°\) as the included angle at B. What did they forget?
3. Another classmate finds \(AC\) correctly but gives no bearing. Is the navigation recommendation complete?
4. Which law did you use first, and why was that law the better fit?
5. Where did rounding happen in your work? Could early rounding change the final bearing?

> [!TIP] Working Habit
>
> Keep extra decimal places in calculator work. Round the final distance and bearing only after the needed computations are complete.

## Independent Route Template

When you solve a new navigation task, copy this structure.

| Step | Write This |
|---|---|
| 1 | Draw and label the route with local north lines |
| 2 | Convert forward bearings to back bearings when needed |
| 3 | Identify the triangle case: SAS, SSS, ASA, AAS, or SSA |
| 4 | Choose Law of Cosines or Law of Sines |
| 5 | Compute carefully with units |
| 6 | Interpret distance and direction in a final sentence |

## Final Self-Check

Before taking the practice quiz, make sure you can say yes to each item.

- I can draw bearings clockwise from north.
- I can find a back bearing by adding or subtracting 180°.
- I can explain why the angle at a turn point is not always the difference between the two forward bearings.
- I can choose Law of Cosines for SAS or SSS information.
- I can choose Law of Sines when I have a side-angle opposite pair.
- I can write a route recommendation with distance, bearing, units, and rounding.

> [!PRACTICE] What To Do Next
>
> Use the practice questions for guided strategy checks. Then use the assessment as a rubric-style checkpoint for diagram accuracy, method choice, precision, and explanation.
