# Geometry - Lesson 5: Law of Cosines for Angles

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to find unknown angles of an oblique triangle when the three side lengths are known, then check whether your angle answers make sense.

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 40 minutes |
| Difficulty | Intermediate |
| Main skill | Using the Law of Cosines to find angles from SSS information |
| Tools | Calculator with cos^-1 or arccos, paper, ruler, graph paper when useful |

<!-- visual-assets:start -->

## Visual Study Set

Use these diagrams as anchors while you study. Each image names the parts you should notice before solving.

![SSS find angle setup](/content/grade-10/math/quarter-1/topic-law-of-cosines-for-angles/images/sss-find-angle.svg)

![Law of Cosines angle formula](/content/grade-10/math/quarter-1/topic-law-of-cosines-for-angles/images/cosines-angle-formula.svg)

![Largest side opposite largest angle](/content/grade-10/math/quarter-1/topic-law-of-cosines-for-angles/images/largest-side-largest-angle.svg)

<!-- visual-assets:end -->

## What You Should Already Know

Before using the Law of Cosines for angles, make sure these ideas feel familiar:

- The angles of a triangle add to 180°.
- The side opposite an angle is across from that angle.
- In a triangle, the largest side is opposite the largest angle.
- Squaring a number means multiplying it by itself.
- `cos^-1` or `arccos` is used to find an angle when you know its cosine value.

### Pre-check / Readiness Quiz

Try these first. Then reveal the answers.

1. In △ABC, which side is opposite ∠A?
2. If a triangle has sides 6, 8, and 11, which angle should be the largest?
3. What is \(7^2\)?
4. If two angles are 46° and 71°, what is the third angle?

<details>
<summary>Reveal pre-check answers</summary>

1. Side BC, usually named \(a\).
2. The angle opposite side 11 should be the largest.
3. \(7^2 = 49\).
4. \(180° - 46° - 71° = 63°\).

If these felt difficult, review triangle notation, angle sum, and calculator inverse cosine before continuing.
</details>

## Key Vocabulary

| Term | Meaning |
|---|---|
| SSS | A given case where all three side lengths are known |
| Opposite side | The side across from a chosen angle |
| Included angle | The angle between two sides |
| Law of Cosines | A formula connecting the three side lengths and one angle of any triangle |
| Inverse cosine | A calculator operation, written \(cos^{-1}\) or \(arccos\), used to find an angle from a cosine value |
| Reasonableness check | A quick test that confirms the answer fits triangle facts |

> [!IMPORTANT] Core Idea
>
> When all three side lengths of an oblique triangle are known, use the **angle form** of the Law of Cosines to find an unknown angle.

## Try Before You Read

A surveyor measures a triangular lot and records the side lengths as 9 m, 12 m, and 15 m. No angle was measured directly.

What geometric idea do you notice?

<details>
<summary>Reveal thinking guide</summary>

All three side lengths are known. That is the SSS case. Since no angle is directly given, you need a relationship that can turn three side lengths into an angle.
</details>

<details>
<summary>Reveal answer</summary>

This is a Law of Cosines situation. The Law of Cosines can find an angle when the three sides are known.
</details>

## Visual Introduction

In standard triangle notation, angle \(A\) is opposite side \(a\), angle \(B\) is opposite side \(b\), and angle \(C\) is opposite side \(c\).

![Triangle notation with opposite sides](/content/grade-10/math/quarter-1/topic-law-of-cosines-for-angles/images/inline-01-triangle-notation-with-opposite-sides.svg)

The side and angle with the same letter always face each other.

## Main Concept Explanation

### 1. Start from the Law of Cosines

For any triangle:

\[
a^2 = b^2 + c^2 - 2bc\cos A
\]

This version finds side \(a\) when angle \(A\) is known. To find angle \(A\), solve for \(\cos A\):

\[
\cos A = \frac{b^2 + c^2 - a^2}{2bc}
\]

Then use inverse cosine:

\[
A = \cos^{-1}\left(\frac{b^2 + c^2 - a^2}{2bc}\right)
\]

### 2. Choose the Correct Angle Formula

Use the side opposite the angle you want.

| Angle to find | Use this formula |
|---|---|
| \(A\) | \(A = \cos^{-1}\left(\frac{b^2+c^2-a^2}{2bc}\right)\) |
| \(B\) | \(B = \cos^{-1}\left(\frac{a^2+c^2-b^2}{2ac}\right)\) |
| \(C\) | \(C = \cos^{-1}\left(\frac{a^2+b^2-c^2}{2ab}\right)\) |

![Finding angle A with the Law of Cosines](/content/grade-10/math/quarter-1/topic-law-of-cosines-for-angles/images/inline-02-finding-angle-a-with-the-law-of-cosines.svg)

### 3. Check the Answer

After finding an angle, use these quick checks:

- The biggest side should face the biggest angle.
- The smallest side should face the smallest angle.
- All three angles should add to about 180°.
- A cosine input should be between -1 and 1. If it is outside that range, recheck the side lengths and arithmetic.

## Rule Box / Formula Box

> [!IMPORTANT] Law of Cosines for Angles
>
> If sides \(a\), \(b\), and \(c\) are known, then:
>
> \[
> A = \cos^{-1}\left(\frac{b^2+c^2-a^2}{2bc}\right)
> \]
>
> Use the matching formulas for \(B\) and \(C\) by placing the side opposite the target angle in the subtraction position.

> [!TIP] Calculator Reminder
>
> Make sure your calculator is in **degree mode** when the answer should be in degrees.

## Worked Examples

### Example 1: Find One Angle from Three Sides

**Problem:** In △ABC, \(a = 10\), \(b = 8\), and \(c = 7\). Find \(A\) to the nearest degree.

**Solution:**

\[
A = \cos^{-1}\left(\frac{8^2+7^2-10^2}{2(8)(7)}\right)
\]

\[
A = \cos^{-1}\left(\frac{64+49-100}{112}\right)
\]

\[
A = \cos^{-1}\left(\frac{13}{112}\right)
\]

\[
A \approx \cos^{-1}(0.1161) \approx 83°
\]

**Answer:** \(A \approx 83°\)

**Check:** Side \(a = 10\) is the largest side, so \(A\) should be the largest angle. An angle near 83° is reasonable.

### Example 2: Find the Largest Angle First

**Problem:** A triangle has sides \(a = 6\), \(b = 9\), and \(c = 11\). Find \(C\) to the nearest degree.

![Largest side opposite largest angle](/content/grade-10/math/quarter-1/topic-law-of-cosines-for-angles/images/inline-03-largest-side-opposite-largest-angle.svg)

**Solution:**

\[
C = \cos^{-1}\left(\frac{a^2+b^2-c^2}{2ab}\right)
\]

\[
C = \cos^{-1}\left(\frac{6^2+9^2-11^2}{2(6)(9)}\right)
\]

\[
C = \cos^{-1}\left(\frac{36+81-121}{108}\right)
= \cos^{-1}\left(\frac{-4}{108}\right)
\]

\[
C \approx \cos^{-1}(-0.0370) \approx 92°
\]

**Answer:** \(C \approx 92°\)

**Check:** Side \(c = 11\) is the largest side, and \(C\) is the largest angle. Since \(C\) is slightly obtuse, this fits.

## Guided Practice with Revealable Hints

### Guided Problem 1

In △ABC, \(a = 13\), \(b = 14\), and \(c = 15\). Find \(A\) to the nearest degree.

<details>
<summary>Hint 1</summary>

Use \(A = \cos^{-1}\left(\frac{b^2+c^2-a^2}{2bc}\right)\).
</details>

<details>
<summary>Hint 2</summary>

Substitute: \(A = \cos^{-1}\left(\frac{14^2+15^2-13^2}{2(14)(15)}\right)\).
</details>

<details>
<summary>Show solution</summary>

\[
A = \cos^{-1}\left(\frac{196+225-169}{420}\right)
= \cos^{-1}(0.6)
\approx 53°
\]

So \(A \approx 53°\).
</details>

### Guided Problem 2

A triangle has sides \(a = 5\), \(b = 7\), and \(c = 8\). Find \(C\) to the nearest degree.

<details>
<summary>Hint 1</summary>

For angle \(C\), subtract \(c^2\) in the numerator.
</details>

<details>
<summary>Hint 2</summary>

\[
C = \cos^{-1}\left(\frac{5^2+7^2-8^2}{2(5)(7)}\right)
\]
</details>

<details>
<summary>Show solution</summary>

\[
C = \cos^{-1}\left(\frac{25+49-64}{70}\right)
= \cos^{-1}\left(\frac{10}{70}\right)
\approx 82°
\]

So \(C \approx 82°\).
</details>

### Guided Problem 3

The sides of a triangle are 4, 6, and 7. Which angle should you find first if you want to locate the largest angle?

<details>
<summary>Hint 1</summary>

The largest angle is opposite the largest side.
</details>

<details>
<summary>Hint 2</summary>

If the largest side is named \(c = 7\), then the largest angle is \(C\).
</details>

<details>
<summary>Show solution</summary>

Find the angle opposite side 7 first. If that side is \(c\), find \(C\).
</details>

## Mini-Quiz

Answer these before opening the solution.

1. Which formula finds \(B\) from sides \(a\), \(b\), and \(c\)?
2. In △ABC, \(a = 9\), \(b = 10\), and \(c = 12\). Which angle should be largest?
3. Find \(A\) to the nearest degree if \(a = 8\), \(b = 6\), and \(c = 7\).
4. What calculator mode should you use when angle answers are requested in degrees?

<details>
<summary>Reveal mini-quiz answers</summary>

1. \(B = \cos^{-1}\left(\frac{a^2+c^2-b^2}{2ac}\right)\).
2. \(C\), because side \(c = 12\) is the largest side.
3. \(A = \cos^{-1}\left(\frac{6^2+7^2-8^2}{2(6)(7)}\right) = \cos^{-1}\left(\frac{21}{84}\right) \approx 76°\).
4. Degree mode.
</details>

## Independent Practice

Try these on your own. Round angle measures to the nearest degree.

1. In △ABC, \(a = 9\), \(b = 7\), and \(c = 6\). Find \(A\).
2. In △ABC, \(a = 8\), \(b = 11\), and \(c = 13\). Find \(C\).
3. A triangle has sides 10, 10, and 12. Find the angle opposite the side of length 12.
4. A triangle has sides 5, 6, and 7. Which angle is largest?
5. In △ABC, \(a = 12\), \(b = 13\), and \(c = 14\). Find \(B\).
6. A student gets a cosine value of 1.4 while finding an angle. What should the student do?
7. Find the missing third angle if two angles found by the Law of Cosines are 48° and 73°.

## Answer Key with Explanations

<details>
<summary>Reveal answer key</summary>

1. \(A = \cos^{-1}\left(\frac{7^2+6^2-9^2}{2(7)(6)}\right) = \cos^{-1}\left(\frac{4}{84}\right) \approx 87°\).
2. \(C = \cos^{-1}\left(\frac{8^2+11^2-13^2}{2(8)(11)}\right) = \cos^{-1}\left(\frac{16}{176}\right) \approx 85°\).
3. \(A = \cos^{-1}\left(\frac{10^2+10^2-12^2}{2(10)(10)}\right) = \cos^{-1}(0.28) \approx 74°\). The angle opposite 12 is about 74°.
4. The angle opposite side 7 is largest.
5. \(B = \cos^{-1}\left(\frac{12^2+14^2-13^2}{2(12)(14)}\right) = \cos^{-1}\left(\frac{171}{336}\right) \approx 59°\).
6. Recheck the side labels, substitution, and arithmetic. A valid cosine value must be between -1 and 1.
7. \(180° - 48° - 73° = 59°\).
</details>

## Misconception Alerts

> [!WARNING] Misconception 1
>
> Do not subtract the wrong side square. For angle \(A\), the numerator is \(b^2 + c^2 - a^2\). The side opposite the target angle is the one being subtracted.

> [!WARNING] Misconception 2
>
> \(cos^{-1}\) does not mean \(1 \div cos\). It means inverse cosine, the calculator operation that returns an angle.

> [!WARNING] Misconception 3
>
> A calculated angle should match the side lengths. The largest side cannot be opposite the smallest angle.

## Error Analysis

A student tries to find \(A\) when \(a = 10\), \(b = 8\), and \(c = 7\):

\[
A = \cos^{-1}\left(\frac{10^2+7^2-8^2}{2(10)(7)}\right)
\]

What is the mistake?

<details>
<summary>Reveal mistake explanation and correction</summary>

The student used the formula for angle \(B\), not angle \(A\). To find \(A\), subtract \(a^2\), and multiply the two sides adjacent to \(A\), which are \(b\) and \(c\).

Correct setup:

\[
A = \cos^{-1}\left(\frac{8^2+7^2-10^2}{2(8)(7)}\right)
\]
</details>

## Self-Explanation Prompts

Use these to check your reasoning.

1. How do you decide which side square is subtracted in the Law of Cosines angle formula?
2. Why is inverse cosine needed when finding an angle?
3. How can the largest side help you check your answer?
4. Why should three calculated angles add to about 180° instead of exactly 180° after rounding?

<details>
<summary>Reveal sample responses</summary>

1. I subtract the square of the side opposite the angle I am finding.
2. The formula gives a cosine value first, so inverse cosine changes that value into an angle measure.
3. The largest side should be across from the largest angle, so I compare the sizes.
4. Rounding each angle can create a small total difference, such as 179° or 181°.
</details>

## Extension Challenge

A triangular garden has side lengths 14 m, 15 m, and 20 m. Find the angle opposite the 20 m side to the nearest degree.

![Triangular garden with three side lengths](/content/grade-10/math/quarter-1/topic-law-of-cosines-for-angles/images/inline-04-triangular-garden-with-three-side-lengths.svg)

<details>
<summary>Reveal hint</summary>

Let \(c = 20\). Then the angle opposite the 20 m side is \(C\).
</details>

<details>
<summary>Reveal solution</summary>

\[
C = \cos^{-1}\left(\frac{14^2+15^2-20^2}{2(14)(15)}\right)
\]

\[
C = \cos^{-1}\left(\frac{196+225-400}{420}\right)
= \cos^{-1}(0.05)
\approx 87°
\]

The angle opposite the 20 m side is about \(87°\).
</details>

## Mastery Checklist

Check whether each statement feels true for you.

- I can identify SSS information in a triangle.
- I can name the side opposite a chosen angle.
- I can choose the correct Law of Cosines angle formula.
- I can substitute side lengths carefully.
- I can use inverse cosine to find an angle in degrees.
- I can round an angle measure reasonably.
- I can check that the largest side is opposite the largest angle.
- I can check that triangle angles add to about 180°.

> [!PRACTICE] Next Step
>
> Use the practice exam for formula selection and single-angle calculations. Use the assessment when you are ready to solve new SSS triangle angle questions and explain your checks.

## Final Summary

The Law of Cosines can find an angle when all three side lengths are known. To find a specific angle, subtract the square of the side opposite that angle, then use inverse cosine.

After calculating, check the result. The largest side should be opposite the largest angle, and all three angles of the triangle should total about 180° after rounding.
