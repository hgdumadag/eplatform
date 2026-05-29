# Trigonometry: Law of Cosines for SAS

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to find an unknown side of a triangle when you know two sides and the included angle.

## Study Snapshot

| Item | Details |
|---|---|
| Main skill | Use the Law of Cosines for SAS missing-side problems |
| Time | About 40 minutes |
| Materials | Calculator, formula reference, paper for organizing work |
| Final check | Explain why the Law of Cosines is the correct tool |

## Opening Question

Think about the Law of Sines:

$$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}$$

What information is missing when the Law of Sines cannot start a problem?

If you only know two sides and the angle between them, you do not yet have a complete opposite side-angle pair. That is why a SAS problem usually needs the Law of Cosines first.

![A SAS triangle showing two known sides, an included angle, and no complete opposite side-angle pair](/content/grade-10/math/quarter-1/topic-law-of-cosines-sas/images/sas-missing-information.svg)

> [!TARGET] Lesson Target
>
> Apply the Law of Cosines to find an unknown side from two sides and the included angle.

## Warm-Up: Spot the Included Angle

For each case, decide whether the given angle is included between the two sides.

| Given information | Included angle? |
|---|---|
| AB = 8, AC = 11, angle A = 60 degrees | Yes |
| AB = 8, AC = 11, angle B = 60 degrees | No |
| DE = 5, DF = 9, angle D = 42 degrees | Yes |

The included angle touches both known sides. In SAS, the missing side is opposite that included angle.

## Core Formula

When sides \(a\) and \(b\) include angle \(C\), the side across from angle \(C\) is \(c\).

$$c^2=a^2+b^2-2ab\cos C$$

Then take the positive square root:

$$c=\sqrt{a^2+b^2-2ab\cos C}$$

![Triangle labels showing sides a and b forming angle C, with missing side c opposite angle C](/content/grade-10/math/quarter-1/topic-law-of-cosines-sas/images/law-of-cosines-labels.svg)

> [!IMPORTANT] Match the Letters
>
> The angle in the cosine must be opposite the side you are finding. If you are finding \(c\), use \(\cos C\). If you are finding \(x\), use the included angle across from \(x\).

## Why This Works for SAS

SAS gives exactly the inputs in the side form of the Law of Cosines:

- one known side: \(a\)
- another known side: \(b\)
- the included angle: \(C\)
- the unknown side opposite that angle: \(c\)

The cosine term adjusts the Pythagorean relationship for triangles that are not right triangles. If \(C=90^\circ\), then \(\cos 90^\circ=0\), so the formula becomes \(c^2=a^2+b^2\).

## Worked Example 1: Direct SAS Setup

**Problem:** Two sides of a triangle are 8 cm and 11 cm. The included angle is 60 degrees. Find the side opposite the included angle to the nearest tenth.

**Step 1: Choose the formula.**

$$c^2=a^2+b^2-2ab\cos C$$

**Step 2: Substitute.**

$$c^2=8^2+11^2-2(8)(11)\cos 60^\circ$$

**Step 3: Evaluate.**

$$c^2=64+121-176(0.5)$$

$$c^2=97$$

$$c=\sqrt{97}\approx 9.8$$

**Answer:** The missing side is about 9.8 cm.

![Worked substitution for sides 8 and 11 with included angle 60 degrees](/content/grade-10/math/quarter-1/topic-law-of-cosines-sas/images/worked-sas-substitution.svg)

## Worked Example 2: When the Included Angle Is Obtuse

**Problem:** A triangle has sides 6 m and 10 m with included angle 120 degrees. Find the side opposite the included angle.

$$x^2=6^2+10^2-2(6)(10)\cos 120^\circ$$

Since \(\cos 120^\circ=-0.5\):

$$x^2=36+100-120(-0.5)$$

$$x^2=196$$

$$x=14$$

**Answer:** The missing side is 14 m.

> [!TIP] Reasonableness Check
>
> A larger included angle opens the triangle wider, so the opposite side should be longer. It still must be less than the sum of the two known sides.

![Comparison of small and large included angles and their opposite sides](/content/grade-10/math/quarter-1/topic-law-of-cosines-sas/images/angle-size-comparison.svg)

## Calculator Notes

Use degree mode unless the problem clearly says radians. A calculator in radian mode will give the wrong cosine values for degree measures such as 60 degrees or 120 degrees.

| Angle | Useful cosine value |
|---|---|
| \(60^\circ\) | 0.5 |
| \(90^\circ\) | 0 |
| \(120^\circ\) | -0.5 |

## Guided Practice

Try each problem before opening the solution.

### Guided Problem 1

Two sides are 9 and 14. The included angle is 42 degrees. Find the missing opposite side to the nearest tenth.

<details>
<summary>Show solution</summary>

\(x^2=9^2+14^2-2(9)(14)\cos 42^\circ\)

\(x^2\approx 81+196-252(0.7431)\)

\(x^2\approx 89.8\), so \(x\approx 9.5\).

</details>

### Guided Problem 2

Two sides are 5 and 7. The included angle is 35 degrees. Find the missing opposite side to the nearest tenth.

<details>
<summary>Show solution</summary>

\(x^2=5^2+7^2-2(5)(7)\cos 35^\circ\)

\(x^2\approx 25+49-70(0.8192)\)

\(x^2\approx 16.7\), so \(x\approx 4.1\).

</details>

### Guided Problem 3

Two sides are 12 and 16. The included angle is 75 degrees. Before calculating, should the opposite side be short, medium, or long?

<details>
<summary>Show thinking</summary>

The angle is larger than 60 degrees but less than 90 degrees, so the opposite side should be fairly long, but not as long as it would be across an obtuse angle. A calculation gives about 17.3.

</details>

## Common Mistakes to Avoid

| Mistake | How to fix it |
|---|---|
| Using the Law of Sines first without an opposite pair | Check whether you have a known side and its opposite angle |
| Using a non-included angle as \(C\) | Confirm that the angle touches both known sides |
| Forgetting the minus sign | Write the full formula before substituting |
| Stopping at \(c^2\) | Take the positive square root to get the side length |
| Rounding too early | Keep calculator values until the final answer |

## Self-Check

You are ready for practice when you can answer yes to these:

- Can I identify the included angle?
- Can I name the side opposite the included angle?
- Can I substitute into \(c^2=a^2+b^2-2ab\cos C\)?
- Can I explain why Law of Cosines is appropriate for SAS?
- Can I check whether my answer is reasonable?

> [!PRACTICE] What To Do Next
>
> Use the practice set to build speed with SAS missing-side problems. Then use the assessment to show that you can choose the Law of Cosines and explain why it fits the problem.
