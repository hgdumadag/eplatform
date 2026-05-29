# Trigonometry - Lesson 3: Law of Sines for SSA

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to use the Law of Sines in SSA cases and check whether the same information forms one possible triangle or two possible triangles.

## Study Map

| Part | What you will do |
|---|---|
| Opening | Compare two triangles that share two sides and a non-included angle |
| Development | Set up the Law of Sines for SSA information |
| Ambiguity check | Test whether the supplementary angle also works |
| Practice | Solve SSA problems and compare possible angle values |
| Materials | Calculator and, if available, a dynamic geometry tool |

## Opening: Same Given Information, Two Triangles

Look at the two triangles below. They share the same known angle at A, the same side `b`, and the same side `a`. The only difference is where point B lands on the base ray.

![Two possible SSA triangles sharing two sides and one non-included angle](/content/grade-10/math/quarter-1/topic-law-of-sines-ssa/images/two-ssa-triangles.svg)

This is why SSA can be tricky. Two sides and a non-included angle may not lock the triangle into one shape.

> [!IMPORTANT] Big Idea
>
> In SSA, inverse sine may give one angle, but the supplementary angle might also make a valid triangle.

## Quick Recall

Answer these before reading the worked examples.

1. In △ABC, which side is opposite ∠A?
2. What is the Law of Sines?
3. If an angle is 42°, what is its supplement?
4. Why must triangle angles add to less than or equal to 180° while you are checking possible angles?

<details>
<summary>Reveal answers</summary>

1. Side `a` is opposite ∠A.
2. $$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}$$
3. 138°, because 180° - 42° = 138°.
4. A triangle's three angles must total exactly 180°, so any pair of angles must leave a positive third angle.

</details>

## Recognizing SSA

SSA means you know:

- two side lengths
- one angle
- the known angle is **not** between the two known sides

In △ABC, a common SSA setup is:

- ∠A is known
- side `a` is known, opposite ∠A
- side `b` is known
- ∠B is unknown

![SSA Law of Sines setup with angle A, side a, and side b labeled](/content/grade-10/math/quarter-1/topic-law-of-sines-ssa/images/ssa-law-of-sines-setup.svg)

The Law of Sines uses the known pair first:

$$\frac{\sin B}{b}=\frac{\sin A}{a}$$

Then solve:

$$\sin B=\frac{b\sin A}{a}$$

## Why More Than One Triangle May Be Possible

The sine of an acute angle and the sine of its obtuse supplement are equal.

For example:

$$\sin 35^\circ=\sin 145^\circ$$

So if your calculator gives:

$$B=35^\circ$$

you must also check:

$$180^\circ-35^\circ=145^\circ$$

![Supplementary angle check showing one sine value matching two possible angles](/content/grade-10/math/quarter-1/topic-law-of-sines-ssa/images/supplementary-angle-check.svg)

The second angle is valid only if it leaves room for the third angle.

> [!WARNING] Common Trap
>
> Do not stop after pressing inverse sine. In an SSA case, always check the supplement of the angle your calculator gives.

## SSA Solving Routine

Use this routine when you are given ∠A, side `a`, and side `b`.

1. Set up the Law of Sines:  
   $$\frac{\sin B}{b}=\frac{\sin A}{a}$$
2. Compute:  
   $$\sin B=\frac{b\sin A}{a}$$
3. If the value is greater than 1, no triangle is possible.
4. Find the calculator angle:  
   $$B_1=\sin^{-1}\left(\frac{b\sin A}{a}\right)$$
5. Check the supplement:  
   $$B_2=180^\circ-B_1$$
6. Keep each possible B angle only if `A + B < 180°`.
7. For each valid triangle, find:  
   $$C=180^\circ-A-B$$

![Decision flow for checking one or two possible SSA Law of Sines solutions](/content/grade-10/math/quarter-1/topic-law-of-sines-ssa/images/ssa-decision-flow.svg)

## Worked Example 1: Two Possible Triangles

**Problem:** In △ABC, ∠A = 40°, `a = 8`, and `b = 10`. Find the possible values of ∠B and decide how many triangles are possible.

**Step 1: Set up the Law of Sines.**

$$\frac{\sin B}{10}=\frac{\sin 40^\circ}{8}$$

**Step 2: Solve for sin B.**

$$\sin B=\frac{10\sin40^\circ}{8}\approx0.8035$$

**Step 3: Find the calculator angle.**

$$B_1\approx\sin^{-1}(0.8035)\approx53.5^\circ$$

**Step 4: Check the supplement.**

$$B_2=180^\circ-53.5^\circ=126.5^\circ$$

Both angle sums work:

| Possible B | Check with A = 40° | Result |
|---:|---:|---|
| 53.5° | 40° + 53.5° = 93.5° | Valid |
| 126.5° | 40° + 126.5° = 166.5° | Valid |

**Answer:** Two triangles are possible. The possible values of ∠B are about 53.5° and 126.5°.

## Worked Example 2: Only One Possible Triangle

**Problem:** In △ABC, ∠A = 42°, `a = 11`, and `b = 8`. Find the possible values of ∠B.

$$\sin B=\frac{8\sin42^\circ}{11}\approx0.4866$$

$$B_1\approx29.1^\circ$$

Check the supplement:

$$B_2=180^\circ-29.1^\circ=150.9^\circ$$

Now test the angle sums:

| Possible B | Check with A = 42° | Result |
|---:|---:|---|
| 29.1° | 42° + 29.1° = 71.1° | Valid |
| 150.9° | 42° + 150.9° = 192.9° | Not valid |

**Answer:** Only one triangle is possible. ∠B is about 29.1°.

## Worked Example 3: No Triangle

**Problem:** In △ABC, ∠A = 35°, `a = 4`, and `b = 9`. Decide whether a triangle is possible.

$$\sin B=\frac{9\sin35^\circ}{4}\approx1.2905$$

A sine value cannot be greater than 1 for a real angle.

**Answer:** No triangle is possible.

## Guided Check

Try each one. Then open the solution.

### Check 1

In △ABC, ∠A = 30°, `a = 6`, and `b = 10`. How many triangles are possible?

<details>
<summary>Show solution</summary>

$$\sin B=\frac{10\sin30^\circ}{6}=\frac{5}{6}\approx0.8333$$

$$B_1\approx56.4^\circ$$

$$B_2=123.6^\circ$$

Both work because 30° + 56.4° < 180° and 30° + 123.6° < 180°. Two triangles are possible.

</details>

### Check 2

In △ABC, ∠A = 52°, `a = 13`, and `b = 9`. How many triangles are possible?

<details>
<summary>Show solution</summary>

$$\sin B=\frac{9\sin52^\circ}{13}\approx0.5455$$

$$B_1\approx33.1^\circ$$

$$B_2=146.9^\circ$$

The supplement is not valid because 52° + 146.9° > 180°. One triangle is possible.

</details>

## How to Use a Dynamic Geometry Tool

If you have a dynamic geometry tool, make a ray from A and fix ∠A. Then draw side `b` from A to C. Use a circle centered at C with radius `a`.

Notice what happens:

- If the circle hits the base ray twice, there are two triangles.
- If it hits once, there is one triangle.
- If it does not hit the ray, there is no triangle.

## Final Checklist

Before taking the practice quiz, make sure you can:

- identify the known opposite pair
- write the Law of Sines ratio correctly
- solve for the sine of the unknown angle
- reject impossible sine values greater than 1
- check the supplementary angle
- explain why one or two triangles are possible

> [!PRACTICE] Practice and Assessment
>
> Use the practice set to build the routine. Use the assessment when you can decide whether an SSA case has one or two possible solutions without relying on the drawing alone.
