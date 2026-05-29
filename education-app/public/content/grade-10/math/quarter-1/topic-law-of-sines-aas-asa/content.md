# Trigonometry - Lesson 2: Law of Sines for AAS and ASA

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to solve oblique triangles with two known angles using the Law of Sines.

## Study Snapshot

| Item | Details |
|---|---|
| Time | About 40 minutes |
| Main idea | Match each side with the sine of its opposite angle |
| Given cases | AAS and ASA |
| Materials | Calculator, practice sheet |
| Rounding | Usually to the nearest tenth unless a problem says otherwise |

## Opening Question

Right-triangle ratios such as sine, cosine, and tangent are powerful, but they are built around a right angle. What happens when a triangle has no right angle at all?

![An oblique triangle compared with a right triangle](/content/grade-10/math/quarter-1/topic-law-of-sines-aas-asa/images/oblique-vs-right-triangle.svg)

In an oblique triangle, there is no hypotenuse. Ordinary right-triangle ratios do not directly tell you the side lengths. The Law of Sines gives a new way to connect every angle to the side across from it.

## Quick Recall

Answer these before reading further.

1. What is the sum of the three angles in any triangle?
2. In △ABC, which side is opposite ∠B?
3. If ∠A = 48° and ∠B = 72°, what is ∠C?
4. In ASA, is the known side between the two known angles?

<details>
<summary>Check your recall</summary>

1. The angle sum is 180°.
2. Side `b` is opposite ∠B.
3. ∠C = 180° - 48° - 72° = 60°.
4. Yes. ASA means two angles and the included side are known.

</details>

## The Law of Sines

For △ABC, sides `a`, `b`, and `c` are opposite angles `A`, `B`, and `C`.

![Opposite pairs used in the Law of Sines](/content/grade-10/math/quarter-1/topic-law-of-sines-aas-asa/images/opposite-pairs-law-of-sines.svg)

The Law of Sines says:

$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

You may also see the equivalent form:

$$\frac{\sin A}{a} = \frac{\sin B}{b} = \frac{\sin C}{c}$$

> [!IMPORTANT] The Matching Rule
>
> Always pair an angle with the side opposite it. Side `a` goes with `sin A`, side `b` goes with `sin B`, and side `c` goes with `sin C`.

## When Two Angles Are Known

AAS and ASA are friendly Law of Sines cases because two angles are already known. That means the third angle can be found immediately.

| Case | What is known | First move |
|---|---|---|
| AAS | Two angles and a non-included side | Find the third angle if needed |
| ASA | Two angles and the included side | Find the third angle opposite the known side |

After that, use the complete angle-side pair to find missing sides.

## Solving Strategy

> [!TARGET] AAS/ASA Law of Sines Steps
>
> 1. Draw or label the triangle.
> 2. Find the third angle using `180° - known angle - known angle`.
> 3. Locate one complete opposite pair, such as `A` and `a`.
> 4. Write a Law of Sines proportion with the unknown side.
> 5. Solve and round at the end.
> 6. Check that the largest side is opposite the largest angle.

## Example 1: ASA Triangle

**Problem:** In △ABC, ∠A = 48°, ∠B = 72°, and the included side `c = 15` cm. Find `a` and `b` to the nearest tenth.

![ASA example triangle with two angles and included side](/content/grade-10/math/quarter-1/topic-law-of-sines-aas-asa/images/asa-example-triangle.svg)

First find the third angle.

$$C = 180° - 48° - 72° = 60°$$

The complete pair is `C = 60°` and `c = 15`.

For side `a`:

$$\frac{a}{\sin 48°} = \frac{15}{\sin 60°}$$

$$a = \frac{15\sin 48°}{\sin 60°} \approx 12.9$$

For side `b`:

$$\frac{b}{\sin 72°} = \frac{15}{\sin 60°}$$

$$b = \frac{15\sin 72°}{\sin 60°} \approx 16.5$$

**Answer:** `a ≈ 12.9 cm` and `b ≈ 16.5 cm`.

**Check:** The largest angle is 72°, so the largest side should be `b`. Since `16.5` is the largest side, the answer is reasonable.

## Example 2: AAS Triangle

**Problem:** In △ABC, ∠A = 41°, ∠B = 77°, and `a = 18` m. Find `b` and `c` to the nearest tenth.

![AAS example triangle with two angles and a non-included side](/content/grade-10/math/quarter-1/topic-law-of-sines-aas-asa/images/aas-example-triangle.svg)

Find the missing angle.

$$C = 180° - 41° - 77° = 62°$$

The complete pair is `A = 41°` and `a = 18`.

For side `b`:

$$\frac{b}{\sin 77°} = \frac{18}{\sin 41°}$$

$$b = \frac{18\sin 77°}{\sin 41°} \approx 26.7$$

For side `c`:

$$\frac{c}{\sin 62°} = \frac{18}{\sin 41°}$$

$$c = \frac{18\sin 62°}{\sin 41°} \approx 24.2$$

**Answer:** `b ≈ 26.7 m` and `c ≈ 24.2 m`.

## Common Mistakes

> [!WARNING] Watch These Traps
>
> - Do not use `sin A / b`. Angle `A` belongs with side `a`.
> - Do not forget to find the third angle before solving for the side across from it.
> - Do not round too early. Keep extra decimal places until the final answer.
> - Do not use right-triangle SOH-CAH-TOA unless the triangle actually has a right angle.

## Guided Practice

### Try 1

In △ABC, ∠A = 42°, ∠B = 55°, and `a = 12`. Find `c` to the nearest tenth.

<details>
<summary>Hint</summary>

First find ∠C: `180° - 42° - 55° = 83°`.

</details>

<details>
<summary>Solution</summary>

Use the complete pair `A = 42°` and `a = 12`.

$$\frac{c}{\sin 83°} = \frac{12}{\sin 42°}$$

$$c = \frac{12\sin 83°}{\sin 42°} \approx 17.8$$

So `c ≈ 17.8`.

</details>

### Try 2

In △ABC, ∠B = 88°, ∠C = 56°, and `b = 22`. Find `a` to the nearest tenth.

<details>
<summary>Hint</summary>

Find ∠A first: `180° - 88° - 56° = 36°`.

</details>

<details>
<summary>Solution</summary>

Use the complete pair `B = 88°` and `b = 22`.

$$\frac{a}{\sin 36°} = \frac{22}{\sin 88°}$$

$$a = \frac{22\sin 36°}{\sin 88°} \approx 12.9$$

So `a ≈ 12.9`.

</details>

## End-of-Lesson Checklist

You are ready for practice when you can:

- explain why an oblique triangle needs a tool beyond right-triangle ratios;
- write `a/sin A = b/sin B = c/sin C`;
- find a missing third angle from two known angles;
- match each side with its opposite angle;
- solve for missing sides in AAS and ASA triangles;
- check whether the side lengths make sense compared with the angle sizes.

> [!PRACTICE] What To Do Next
>
> Use the practice set for quick skill checks. Then use the assessment to show a complete Law of Sines solution with an angle sum check.
