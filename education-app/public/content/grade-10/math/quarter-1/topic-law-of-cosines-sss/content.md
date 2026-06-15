# Trigonometry - Lesson 6: Law of Cosines for SSS

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to find unknown angles from three known side lengths, choose the largest angle first, and check that your angle measures make sense.

## Study Snapshot

| Item | Details |
|---|---|
| Time | About 40 minutes |
| Main skill | Apply the Law of Cosines to find angles from SSS data |
| Materials | Calculator, practice sheet, paper for showing work |
| Calculator setting | Degree mode |

## Opening: Three Sides, No Angles

A triangle is measured with side lengths 8 cm, 11 cm, and 13 cm. No angle measures are given.

![Triangle with side lengths 8 cm, 11 cm, and 13 cm but no angle measures](/content/grade-10/math/quarter-1/topic-law-of-cosines-sss/images/sss-triangle-no-angles.svg)

Ask yourself:

- Which side is the longest?
- Which angle should be the largest?
- What formula connects all three sides with one angle?

<details>
<summary>Reveal the starting idea</summary>

This is an SSS triangle. Since all three side lengths are known, the Law of Cosines can be rearranged to find an angle.
</details>

## Readiness Check

Try these before studying the formula.

1. In △ABC, which side is opposite ∠A?
2. If sides are 6, 8, and 11, which angle should be largest?
3. What calculator key helps you find an angle when you know its cosine?
4. What should the three angles of any triangle add to?

<details>
<summary>Reveal answers</summary>

1. Side \(BC\), usually named \(a\).
2. The angle opposite side 11.
3. \(cos^{-1}\), also called inverse cosine or arccos.
4. \(180°\).
</details>

## Core Idea

The Law of Cosines can be written as:

\[
a^2 = b^2 + c^2 - 2bc\cos A
\]

This version connects side \(a\) with angle \(A\), where side \(a\) is opposite ∠A.

To solve for the angle, isolate \(\cos A\):

\[
2bc\cos A = b^2 + c^2 - a^2
\]

\[
\cos A = \frac{b^2+c^2-a^2}{2bc}
\]

\[
A = \cos^{-1}\left(\frac{b^2+c^2-a^2}{2bc}\right)
\]

![Rearranged Law of Cosines formula for finding angle A](/content/grade-10/math/quarter-1/topic-law-of-cosines-sss/images/angle-formula-rearranged.svg)

> [!IMPORTANT] Formula Pattern
>
> The side opposite the angle you want is the side whose square is subtracted.
>
> \[
> A=\cos^{-1}\left(\frac{b^2+c^2-a^2}{2bc}\right)
> \]

## Choose the Formula

| Angle to find | Use this formula |
|---|---|
| \(A\) | \(A=\cos^{-1}\left(\frac{b^2+c^2-a^2}{2bc}\right)\) |
| \(B\) | \(B=\cos^{-1}\left(\frac{a^2+c^2-b^2}{2ac}\right)\) |
| \(C\) | \(C=\cos^{-1}\left(\frac{a^2+b^2-c^2}{2ab}\right)\) |

> [!TIP] Work Efficiently
>
> Find the largest angle first. It is opposite the longest side, so it is the easiest angle to predict and check.

![Longest side 13 cm is opposite the largest angle](/content/grade-10/math/quarter-1/topic-law-of-cosines-sss/images/largest-angle-first.svg)

## Worked Example 1: Find the Largest Angle First

**Problem:** A triangle has sides \(a=8\), \(b=11\), and \(c=13\). Find the largest angle to the nearest degree.

**Step 1: Identify the largest side.**

The largest side is \(c=13\), so the largest angle is \(C\).

**Step 2: Substitute into the angle formula.**

\[
C=\cos^{-1}\left(\frac{a^2+b^2-c^2}{2ab}\right)
\]

\[
C=\cos^{-1}\left(\frac{8^2+11^2-13^2}{2(8)(11)}\right)
\]

\[
C=\cos^{-1}\left(\frac{64+121-169}{176}\right)
=\cos^{-1}\left(\frac{16}{176}\right)
\]

\[
C\approx \cos^{-1}(0.0909)\approx 85°
\]

**Answer:** The largest angle is \(C\approx85°\).

**Check:** The largest side is 13, and the angle opposite it is the largest angle. A value near 85° is reasonable.

## Worked Example 2: Solve All Angles

**Problem:** In △ABC, \(a=7\), \(b=10\), and \(c=12\). Find all three angles to the nearest degree.

**Step 1: Find the largest angle first.**

The largest side is \(c=12\), so find \(C\).

\[
C=\cos^{-1}\left(\frac{7^2+10^2-12^2}{2(7)(10)}\right)
=\cos^{-1}\left(\frac{5}{140}\right)
\approx88°
\]

**Step 2: Find one more angle.**

\[
B=\cos^{-1}\left(\frac{7^2+12^2-10^2}{2(7)(12)}\right)
=\cos^{-1}\left(\frac{93}{168}\right)
\approx56°
\]

**Step 3: Use the angle sum for the last angle.**

\[
A=180°-88°-56°=36°
\]

**Answer:** \(A\approx36°\), \(B\approx56°\), and \(C\approx88°\).

![Angle sum check showing 36 degrees, 56 degrees, and 88 degrees adding to 180 degrees](/content/grade-10/math/quarter-1/topic-law-of-cosines-sss/images/angle-sum-check.svg)

> [!CHECK] Reasonableness Check
>
> Side lengths: \(7<10<12\)
>
> Angle measures: \(36°<56°<88°\)
>
> The order matches, and \(36°+56°+88°=180°\).

## Common Mistakes to Avoid

| Mistake | Fix |
|---|---|
| Subtracting the wrong squared side | Subtract the side opposite the angle you want |
| Forgetting inverse cosine | After finding \(\cos A\), use \(cos^{-1}\) to get the angle |
| Calculator in radian mode | Use degree mode for degree answers |
| Finding all three angles with heavy formulas | Find two angles, then use \(180°\) for the third |
| Ignoring side-angle order | Longest side must face the largest angle |

## Guided Practice

### Try 1

In △ABC, \(a=6\), \(b=8\), and \(c=11\). Which angle should you find first?

<details>
<summary>Reveal answer</summary>

Find \(C\) first because \(c=11\) is the longest side.
</details>

### Try 2

For the same triangle, calculate \(C\) to the nearest degree.

<details>
<summary>Reveal solution</summary>

\[
C=\cos^{-1}\left(\frac{6^2+8^2-11^2}{2(6)(8)}\right)
=\cos^{-1}\left(\frac{-21}{96}\right)
\approx103°
\]

So \(C\approx103°\).
</details>

### Try 3

If two angles of a triangle are \(42°\) and \(68°\), what is the third angle?

<details>
<summary>Reveal answer</summary>

\[
180°-42°-68°=70°
\]
</details>

## Final Checklist

Before moving to the practice questions, make sure you can:

- Spot an SSS triangle.
- Match each angle with its opposite side.
- Use the rearranged Law of Cosines.
- Find the largest angle first.
- Check that angles add to about \(180°\).

> [!PRACTICE] Next Step
>
> Use the practice set for quick skill checks. Then use the assessment to solve one SSS triangle completely and prove that the angle results are consistent.
