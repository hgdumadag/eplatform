# Law of Sines

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to use the Law of Sines to solve oblique triangles when the given information is ASA, AAS, or SSA.

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 40 minutes |
| Difficulty | Intermediate |
| Main skill | Solving missing sides and angles in oblique triangles |
| Tools | Calculator with sine and inverse sine, ruler, graph paper |

<!-- visual-assets:start -->

## Visual Study Set

Use these diagrams as anchors while you study. Each image names the parts you should notice before solving.

![Opposite side and angle pairs](/content/grade-10/math/quarter-1/topic-law-of-sines/images/opposite-pairs.svg)

![Law of Sines proportion](/content/grade-10/math/quarter-1/topic-law-of-sines/images/law-of-sines-proportion.svg)

![ASA AAS and SSA cases for Law of Sines](/content/grade-10/math/quarter-1/topic-law-of-sines/images/asa-aas-ssa-cases.svg)

<!-- visual-assets:end -->

## What You Should Already Know

Before using the Law of Sines, make sure these ideas feel familiar:

- An oblique triangle has no 90° angle.
- The three angles of any triangle add to 180°.
- A side is named by the lowercase letter opposite its angle: side `a` is opposite angle `A`.
- The sine function connects an angle measure to a ratio.
- Inverse sine, often written `sin⁻¹`, helps find an angle from a sine value.

### Pre-check / Readiness Quiz

Try these first. Then reveal the answers.

1. In △ABC, which side is opposite ∠A?
2. If ∠A = 48° and ∠B = 67°, what is ∠C?
3. Which button or calculator command helps find an angle when you know its sine value?
4. Does ASA mean the known side is between the two known angles?

<details>
<summary>Reveal pre-check answers</summary>

1. Side `a`, also written as side BC.
2. ∠C = 65°, because 180° - 48° - 67° = 65°.
3. Inverse sine, usually `sin⁻¹` or `arcsin`.
4. Yes. ASA means two angles and the included side are known.

If you missed more than one item, review angle sum and opposite side naming before continuing.
</details>

## Key Vocabulary

| Term | Meaning |
|---|---|
| Law of Sines | A proportional relationship between each side of a triangle and the sine of its opposite angle |
| Opposite side | The side across from a named angle |
| ASA | Two angles and the included side are known |
| AAS | Two angles and a non-included side are known |
| SSA | Two sides and a non-included angle are known |
| Ambiguous case | An SSA situation where zero, one, or two triangles may be possible |
| Inverse sine | A function used to find an angle from a sine value |

> [!IMPORTANT] Core Formula
>
> For △ABC, with sides `a`, `b`, and `c` opposite angles `A`, `B`, and `C`:
>
> $$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$
>
> You may also use the flipped form:
>
> $$\frac{\sin A}{a} = \frac{\sin B}{b} = \frac{\sin C}{c}$$

## Try Before You Read

A surveyor marks a triangular lot. One side is 15 m long. The angles at the ends of that side are 42° and 68°.

What geometric idea do you notice?

<details>
<summary>Reveal thinking guide</summary>

The known side sits between two known angles. That means the given case is ASA.
</details>

<details>
<summary>Reveal answer</summary>

Because two angles are known, the third angle can be found first. Then the Law of Sines can match each side with its opposite angle.
</details>

## Visual Introduction

The Law of Sines works by matching each angle with its opposite side.

![Opposite angle and side pairs in a triangle](/content/grade-10/math/quarter-1/topic-law-of-sines/images/inline-01-opposite-angle-and-side-pairs-in-a-triangle.svg)

Notice the matching pattern:

- ∠A pairs with side `a`.
- ∠B pairs with side `b`.
- ∠C pairs with side `c`.

## Main Concept Explanation

### 1. When the Law of Sines Fits

The Law of Sines is especially useful when you have:

| Case | What you know | First move |
|---|---|---|
| ASA | Two angles and the included side | Find the third angle |
| AAS | Two angles and a non-included side | Find the third angle |
| SSA | Two sides and a non-included angle | Set up a sine proportion and check possible angles |

![ASA AAS and SSA cases](/content/grade-10/math/quarter-1/topic-law-of-sines/images/inline-02-asa-aas-and-ssa-cases.svg)

### 2. Solving for a Side

If you know one complete opposite pair, such as `A` and `a`, and another angle such as `B`, solve for side `b`:

$$\frac{a}{\sin A} = \frac{b}{\sin B}$$

Then multiply:

$$b = \frac{a\sin B}{\sin A}$$

### 3. Solving for an Angle

If you know one complete opposite pair and another side, solve for the sine of the missing angle:

$$\frac{\sin B}{b} = \frac{\sin A}{a}$$

Then multiply:

$$\sin B = \frac{b\sin A}{a}$$

Finally, use inverse sine. For SSA, always check if a second angle is possible.

## Rule Box / Formula Box

> [!TARGET] Law of Sines Strategy
>
> 1. Label the triangle with opposite pairs.
> 2. Find the third angle first if two angles are given.
> 3. Choose a complete angle-side pair.
> 4. Set up a proportion with the unknown side or angle.
> 5. Round only at the end unless the problem gives a rounding direction.
> 6. For SSA, check whether another angle also works.

![Law of Sines formula with opposite pairs](/content/grade-10/math/quarter-1/topic-law-of-sines/images/inline-03-law-of-sines-formula-with-opposite-pairs.svg)

## Worked Examples

### Example 1: ASA, Find Two Missing Sides

**Problem:** In △ABC, ∠A = 42°, ∠B = 68°, and side `c = 15` m. Find sides `a` and `b` to the nearest tenth.

**Solution:**

First find the third angle:

$$C = 180° - 42° - 68° = 70°$$

Now use the complete pair `C = 70°` and `c = 15`.

$$\frac{a}{\sin 42°} = \frac{15}{\sin 70°}$$

$$a = \frac{15\sin 42°}{\sin 70°} \approx 10.7$$

For `b`:

$$b = \frac{15\sin 68°}{\sin 70°} \approx 14.8$$

**Answer:** `a ≈ 10.7 m`, `b ≈ 14.8 m`

### Example 2: AAS, Find a Missing Side

**Problem:** In △ABC, ∠A = 35°, ∠C = 82°, and side `a = 12` cm. Find side `c` to the nearest tenth.

**Solution:**

The known complete pair is `A = 35°` and `a = 12`.

$$\frac{c}{\sin 82°} = \frac{12}{\sin 35°}$$

$$c = \frac{12\sin 82°}{\sin 35°} \approx 20.7$$

**Answer:** `c ≈ 20.7 cm`

### Example 3: SSA, Find a Missing Angle Carefully

**Problem:** In △ABC, ∠A = 40°, `a = 12`, and `b = 9`. Find ∠B to the nearest tenth.

![SSA case for the Law of Sines](/content/grade-10/math/quarter-1/topic-law-of-sines/images/inline-04-ssa-case-for-the-law-of-sines.svg)

Use the sine ratio:

$$\frac{\sin B}{9} = \frac{\sin 40°}{12}$$

$$\sin B = \frac{9\sin 40°}{12} \approx 0.4821$$

$$B \approx \sin^{-1}(0.4821) \approx 28.8°$$

Check the possible second angle:

$$180° - 28.8° = 151.2°$$

But `151.2° + 40° > 180°`, so the second angle is impossible.

**Answer:** `∠B ≈ 28.8°`

## Guided Practice with Revealable Hints

### Guided Problem 1

In △ABC, ∠A = 50°, ∠B = 60°, and `a = 14`. Find `b` to the nearest tenth.

<details>
<summary>Hint 1</summary>

Use the complete pair `A = 50°` and `a = 14`.
</details>

<details>
<summary>Hint 2</summary>

Set up `b / sin 60° = 14 / sin 50°`.
</details>

<details>
<summary>Show solution</summary>

$$b = \frac{14\sin 60°}{\sin 50°} \approx 15.8$$

So `b ≈ 15.8`.
</details>

### Guided Problem 2

In △ABC, ∠A = 32°, ∠C = 88°, and `c = 20`. Find `a` to the nearest tenth.

<details>
<summary>Hint 1</summary>

The complete pair is `C = 88°` and `c = 20`.
</details>

<details>
<summary>Hint 2</summary>

Use `a / sin 32° = 20 / sin 88°`.
</details>

<details>
<summary>Show solution</summary>

$$a = \frac{20\sin 32°}{\sin 88°} \approx 10.6$$

So `a ≈ 10.6`.
</details>

### Guided Problem 3

In △ABC, ∠A = 35°, `a = 10`, and `b = 14`. Find the possible values of ∠B to the nearest tenth.

<details>
<summary>Hint 1</summary>

This is SSA, so be alert for two possible angles.
</details>

<details>
<summary>Hint 2</summary>

Compute `sin B = 14 sin 35° / 10`.
</details>

<details>
<summary>Show solution</summary>

$$\sin B = \frac{14\sin 35°}{10} \approx 0.8030$$

One angle is:

$$B \approx \sin^{-1}(0.8030) \approx 53.4°$$

The second possible angle is:

$$180° - 53.4° = 126.6°$$

Both work because `35° + 53.4° < 180°` and `35° + 126.6° < 180°`.

So `∠B ≈ 53.4°` or `126.6°`.
</details>

## Mini-Quiz

Try these without looking back.

1. Which cases commonly use the Law of Sines: ASA, AAS, or SSS?
2. In △ABC, ∠A = 44°, ∠B = 71°. What is ∠C?
3. In △ABC, ∠A = 30°, `a = 8`, and `b = 12`. What expression gives `sin B`?
4. Why must SSA be checked more carefully than ASA or AAS?

<details>
<summary>Reveal mini-quiz answers</summary>

1. ASA and AAS commonly use the Law of Sines. SSA may also use it, but it needs an ambiguity check.
2. ∠C = 65°.
3. `sin B = 12 sin 30° / 8`.
4. SSA can sometimes make zero, one, or two possible triangles.
</details>

## Independent Practice

Solve these on your own. Round side lengths to the nearest tenth and angles to the nearest tenth unless stated otherwise.

1. ∠A = 38°, ∠B = 72°, `a = 9`. Find `b`.
2. ∠A = 46°, ∠C = 80°, `c = 18`. Find `a`.
3. ∠B = 64°, ∠C = 51°, `b = 16`. Find `c`.
4. ∠A = 42°, `a = 11`, `b = 8`. Find ∠B.
5. ∠A = 30°, `a = 6`, `b = 12`. Determine the possible values of ∠B.
6. ∠A = 28°, ∠B = 77°, `c = 25`. Find `a`.
7. ∠A = 55°, `a = 15`, `b = 20`. Decide whether one or two values of ∠B are possible.
8. A triangular support has angles 48° and 57°. The side opposite 48° is 10 cm. Find the side opposite 57°.

## Answer Key with Explanations

<details>
<summary>Reveal independent practice answers</summary>

1. `b = 9 sin 72° / sin 38° ≈ 13.9`.
2. `a = 18 sin 46° / sin 80° ≈ 13.1`.
3. `c = 16 sin 51° / sin 64° ≈ 13.8`.
4. `sin B = 8 sin 42° / 11 ≈ 0.4866`, so `B ≈ 29.1°`. The second angle is impossible because `150.9° + 42° > 180°`.
5. `sin B = 12 sin 30° / 6 = 1`, so `B = 90°`. There is one triangle.
6. First `C = 180° - 28° - 77° = 75°`. Then `a = 25 sin 28° / sin 75° ≈ 12.2`.
7. `sin B = 20 sin 55° / 15 ≈ 1.092`, which is greater than 1. No triangle is possible.
8. `x = 10 sin 57° / sin 48° ≈ 11.3 cm`.
</details>

## Misconception Alerts

> [!WARNING] Trap 1: Matching the Wrong Side and Angle
>
> Always pair each angle with the side across from it. Do not pair an angle with a side that touches the angle.

> [!WARNING] Trap 2: Forgetting the Third Angle
>
> In ASA and AAS, find the third angle before solving for missing sides. You often need the angle opposite the known side.

> [!WARNING] Trap 3: Treating SSA Like It Always Has One Answer
>
> SSA can create zero, one, or two triangles. If you use inverse sine, check the supplement of the angle.

## Error Analysis

A student solves this problem:

**Given:** ∠A = 40°, `a = 12`, and `b = 9`. Find ∠B.

The student writes:

$$\sin B = \frac{12\sin 40°}{9} \approx 0.857$$

$$B \approx 59.0°$$

What went wrong?

<details>
<summary>Reveal mistake and correction</summary>

The student reversed the side lengths. Since `b` is the side opposite ∠B, the correct setup is:

$$\frac{\sin B}{9} = \frac{\sin 40°}{12}$$

So:

$$\sin B = \frac{9\sin 40°}{12} \approx 0.482$$

Therefore:

$$B \approx 28.8°$$
</details>

## Self-Explanation Prompts

Use these prompts to check your reasoning.

1. How do you decide which side and angle form the complete pair?
2. Why do ASA and AAS usually begin by finding the third angle?
3. What does it mean if a computed sine value is greater than 1?
4. Why does inverse sine in SSA sometimes miss a second triangle?

<details>
<summary>Reveal sample responses</summary>

1. I look for a side and the angle directly opposite it.
2. The Law of Sines needs opposite pairs, and the missing third angle may be paired with a known side.
3. No triangle is possible because a sine value cannot be greater than 1.
4. Inverse sine gives the acute angle by default, but an obtuse supplement may also have the same sine.
</details>

## Extension Challenge

In △ABC, ∠A = 42°, `a = 13`, and `b = 16`.

1. Find the possible values of ∠B.
2. For each possible triangle, find ∠C.

<details>
<summary>Reveal hint</summary>

Start with `sin B = 16 sin 42° / 13`. Then check both `B` and `180° - B`.
</details>

<details>
<summary>Reveal full solution</summary>

$$\sin B = \frac{16\sin 42°}{13} \approx 0.8235$$

So:

$$B \approx 55.4°$$

The second possible angle is:

$$180° - 55.4° = 124.6°$$

Both are possible because:

$$42° + 55.4° < 180°$$

and

$$42° + 124.6° < 180°$$

For the first triangle:

$$C = 180° - 42° - 55.4° = 82.6°$$

For the second triangle:

$$C = 180° - 42° - 124.6° = 13.4°$$
</details>

## Mastery Checklist

Before moving on, check each statement that feels true.

- I can identify opposite side-angle pairs.
- I can state the Law of Sines.
- I can recognize ASA, AAS, and SSA cases.
- I can find the third angle before using the Law of Sines.
- I can solve for a missing side using a sine proportion.
- I can solve for a missing angle using inverse sine.
- I can check an SSA case for zero, one, or two triangles.
- I can explain why my answer is reasonable.

> [!PRACTICE] What To Do Next
>
> Use the practice set for quick feedback on setup and computation. Use the assessment when you can solve without hints and can explain why SSA sometimes needs an extra check.

## Final Summary

The Law of Sines connects each side of a triangle with the sine of its opposite angle. It is especially useful for ASA and AAS because two angles let you find the third angle first. It also works for SSA, but SSA needs careful checking because the same sine value can sometimes describe two possible angles.
