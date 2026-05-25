# Law of Cosines for Sides

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to use the Law of Cosines to find an unknown side of an oblique triangle when two sides and the included angle are known.

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 40 minutes |
| Difficulty | Intermediate |
| Main skill | Solving for a missing side using SAS information |
| Tools | Calculator, graph paper, ruler when drawing diagrams |

## What You Should Already Know

Before using the Law of Cosines, make sure these ideas feel familiar:

- An oblique triangle has no 90° angle.
- SAS means two sides and the included angle are known.
- The included angle is between the two known sides.
- Squaring a number means multiplying it by itself.
- A square root reverses squaring.

### Pre-check / Readiness Quiz

Try these first. Then reveal the answers.

1. In △ABC, sides AB and AC are known, and ∠A is known. Is this SAS or SSA?
2. Compute 7<sup>2</sup> + 9<sup>2</sup>.
3. Is ∠C included between sides AC and BC?
4. If a formula gives c<sup>2</sup> = 121, what is c?

<details>
<summary>Reveal pre-check answers</summary>

1. SAS, because ∠A is between AB and AC.
2. 7<sup>2</sup> + 9<sup>2</sup> = 49 + 81 = 130.
3. Yes. ∠C touches sides AC and BC.
4. c = 11, because the side length is the positive square root of 121.

If these felt difficult, review included angles, squares, and square roots before continuing.
</details>

## Key Vocabulary

| Term | Meaning |
|---|---|
| Law of Cosines | A triangle formula relating three sides and one angle |
| Included angle | The angle between two known sides |
| SAS | A given case with two sides and their included angle |
| SSS | A given case with all three sides known |
| Opposite side | The side across from a given angle |
| Reasonableness check | A quick estimate to see whether an answer makes sense |

> [!IMPORTANT] Core Idea
>
> Use the Law of Cosines for a side when you know **two sides and the included angle**. This is the SAS case.

## Try Before You Read

A surveyor measures two paths from the same point. One path is 8 km, the other is 11 km, and the angle between them is 60°. The surveyor needs the direct distance between the two endpoints.

What geometric idea do you notice?

<details>
<summary>Reveal thinking guide</summary>

The known angle is between the two known sides, so the situation forms SAS. Since the triangle is not necessarily right, the Pythagorean Theorem alone is not enough.
</details>

<details>
<summary>Reveal answer</summary>

This is a Law of Cosines situation. The unknown side is opposite the 60° included angle.
</details>

## Visual Introduction

In SAS problems, the missing side is across from the included angle.

<svg viewBox="0 0 640 260" role="img" aria-labelledby="sas-side-title sas-side-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="sas-side-title">SAS triangle with missing opposite side</title>
  <desc id="sas-side-desc">Two known sides meet at an included angle, and the opposite side is unknown.</desc>
  <polygon points="110,205 500,205 215,55" fill="#ecfeff" stroke="#0f766e" stroke-width="3"/>
  <text x="100" y="228" font-size="18" fill="#111827">A</text>
  <text x="508" y="211" font-size="18" fill="#111827">B</text>
  <text x="208" y="48" font-size="18" fill="#111827">C</text>
  <text x="285" y="226" font-size="18" fill="#0f766e">c = ?</text>
  <text x="126" y="125" font-size="18" fill="#0f766e">b = 8</text>
  <text x="345" y="128" font-size="18" fill="#0f766e">a = 11</text>
  <path d="M197 76 A38 38 0 0 0 245 75" fill="none" stroke="#2563eb" stroke-width="4"/>
  <text x="252" y="85" font-size="17" fill="#2563eb">included angle C</text>
</svg>

The two known sides touch the included angle. The unknown side lies across from that angle.

## Main Concept Explanation

### 1. The Formula for Finding a Side

If side c is opposite angle C, then:

$$c^2 = a^2 + b^2 - 2ab\cos C$$

After computing c<sup>2</sup>, take the positive square root:

$$c = \sqrt{a^2 + b^2 - 2ab\cos C}$$

### 2. How to Label the Triangle

The side and angle labels must match.

<svg viewBox="0 0 620 300" role="img" aria-labelledby="labeling-title labeling-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="labeling-title">Triangle labels for the Law of Cosines</title>
  <desc id="labeling-desc">Angle A is opposite side a, angle B is opposite side b, and angle C is opposite side c.</desc>
  <polygon points="115,230 520,230 250,55" fill="#f0fdf4" stroke="#15803d" stroke-width="3"/>
  <text x="100" y="253" font-size="18" fill="#111827">A</text>
  <text x="528" y="235" font-size="18" fill="#111827">B</text>
  <text x="244" y="48" font-size="18" fill="#111827">C</text>
  <text x="365" y="135" font-size="18" fill="#15803d">a</text>
  <text x="156" y="137" font-size="18" fill="#15803d">b</text>
  <text x="314" y="253" font-size="18" fill="#15803d">c</text>
  <line x1="250" y1="55" x2="520" y2="230" stroke="#15803d" stroke-width="1" stroke-dasharray="5 5"/>
  <text x="380" y="82" font-size="15" fill="#334155">side a is across from angle A</text>
</svg>

Side a is across from ∠A, side b is across from ∠B, and side c is across from ∠C. If the unknown side is AB, it is opposite ∠C.

### 3. Why This Is Different from the Pythagorean Theorem

The Law of Cosines works for oblique triangles. When C = 90°, cos 90° = 0, so the formula becomes:

$$c^2 = a^2 + b^2$$

That is the Pythagorean Theorem. For non-right triangles, the cosine term adjusts the answer.

<svg viewBox="0 0 640 240" role="img" aria-labelledby="cosine-adjust-title cosine-adjust-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="cosine-adjust-title">Cosine adjustment for triangle side lengths</title>
  <desc id="cosine-adjust-desc">A smaller included angle gives a shorter opposite side, while a larger included angle gives a longer opposite side.</desc>
  <polygon points="80,185 270,185 150,105" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
  <text x="120" y="172" font-size="16" fill="#1d4ed8">45°</text>
  <text x="112" y="207" font-size="16" fill="#111827">smaller angle</text>
  <text x="165" y="132" font-size="16" fill="#1d4ed8">opposite side shorter</text>
  <polygon points="370,185 585,185 432,55" fill="#fee2e2" stroke="#b91c1c" stroke-width="3"/>
  <text x="394" y="172" font-size="16" fill="#b91c1c">120°</text>
  <text x="405" y="207" font-size="16" fill="#111827">larger angle</text>
  <text x="448" y="102" font-size="16" fill="#b91c1c">opposite side longer</text>
</svg>

> [!TIP] Reasonableness Check
>
> The side opposite a larger angle should be longer. The unknown side must also be less than the sum of the other two sides.

### 4. Where SSS Fits

SSS means all three side lengths are known. You do not need to find another side, but SSS is still a Law of Cosines case because the same relationship can be rearranged later to find an angle.

| Given case | What you usually do with the Law of Cosines |
|---|---|
| SAS | Find the missing side opposite the included angle |
| SSS | Find a missing angle after all three sides are known |

This lesson focuses on the SAS side-finding use. Keep SSS in mind because it will become important when solving for angles.

## Rule Box / Formula Box

Use the version that matches the angle across from the unknown side:

| Unknown side | Formula |
|---|---|
| a | a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> - 2bc cos A |
| b | b<sup>2</sup> = a<sup>2</sup> + c<sup>2</sup> - 2ac cos B |
| c | c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> - 2ab cos C |

Steps for finding a side:

1. Identify the included angle.
2. Identify the side opposite that angle.
3. Substitute into the Law of Cosines.
4. Evaluate the cosine term carefully.
5. Take the positive square root.
6. Check whether the answer is reasonable.

## Worked Examples

### Example 1: Finding a Side from SAS

**Problem:** In △ABC, a = 10, b = 14, and ∠C = 40°. Find c to the nearest tenth.

**Solution:**

Since c is opposite ∠C, use:

$$c^2 = a^2 + b^2 - 2ab\cos C$$

Substitute:

$$c^2 = 10^2 + 14^2 - 2(10)(14)\cos 40°$$

$$c^2 \approx 100 + 196 - 280(0.7660)$$

$$c^2 \approx 81.5$$

$$c \approx \sqrt{81.5} \approx 9.0$$

**Answer:** c ≈ 9.0 units

### Example 2: A Larger Included Angle

**Problem:** Two sides of a triangle measure 7 cm and 12 cm. The included angle is 115°. Find the side opposite the included angle to the nearest tenth.

<svg viewBox="0 0 560 250" role="img" aria-labelledby="large-angle-title large-angle-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="large-angle-title">Triangle with a 115 degree included angle</title>
  <desc id="large-angle-desc">Two known sides of 7 centimeters and 12 centimeters form a 115 degree angle. The opposite side is unknown.</desc>
  <polygon points="110,185 455,185 165,70" fill="#fff7ed" stroke="#c2410c" stroke-width="3"/>
  <text x="104" y="207" font-size="17" fill="#111827">A</text>
  <text x="462" y="190" font-size="17" fill="#111827">B</text>
  <text x="157" y="63" font-size="17" fill="#111827">C</text>
  <text x="122" y="118" font-size="16" fill="#c2410c">7 cm</text>
  <text x="295" y="206" font-size="16" fill="#c2410c">12 cm</text>
  <text x="287" y="118" font-size="16" fill="#c2410c">x</text>
  <path d="M142 184 A42 42 0 0 1 126 148" fill="none" stroke="#2563eb" stroke-width="4"/>
  <text x="149" y="151" font-size="16" fill="#2563eb">115°</text>
</svg>

**Solution:**

$$x^2 = 7^2 + 12^2 - 2(7)(12)\cos 115°$$

Because cos 115° is negative, the subtraction of the cosine term increases the value:

$$x^2 \approx 49 + 144 - 168(-0.4226)$$

$$x^2 \approx 264.0$$

$$x \approx 16.2$$

**Answer:** x ≈ 16.2 cm

The answer makes sense because the side opposite the large angle should be the longest side.

## Guided Practice with Revealable Hints

### Guided Problem 1

Two sides are 6 and 9, and the included angle is 60°. Find the opposite side to the nearest tenth.

<details>
<summary>Hint 1</summary>

This is SAS. Use x<sup>2</sup> = 6<sup>2</sup> + 9<sup>2</sup> - 2(6)(9)cos 60°.
</details>

<details>
<summary>Hint 2</summary>

cos 60° = 0.5, so the cosine term is 2(6)(9)(0.5) = 54.
</details>

<details>
<summary>Show solution</summary>

x<sup>2</sup> = 36 + 81 - 54 = 63, so x = √63 ≈ 7.9.
</details>

### Guided Problem 2

In △DEF, d = 13, e = 8, and ∠F = 35°. Find f to the nearest tenth.

<details>
<summary>Hint 1</summary>

Side f is opposite ∠F.
</details>

<details>
<summary>Hint 2</summary>

Use f<sup>2</sup> = d<sup>2</sup> + e<sup>2</sup> - 2de cos F.
</details>

<details>
<summary>Show solution</summary>

f<sup>2</sup> = 13<sup>2</sup> + 8<sup>2</sup> - 2(13)(8)cos 35° ≈ 233 - 170.4 = 62.6. So f ≈ 7.9.
</details>

### Guided Problem 3

Two sides are 5 and 11 with included angle 130°. Before calculating exactly, should the opposite side be relatively short or relatively long?

<details>
<summary>Hint 1</summary>

The side opposite a larger angle is longer.
</details>

<details>
<summary>Hint 2</summary>

130° is obtuse, so it opens wide across from the unknown side.
</details>

<details>
<summary>Show solution</summary>

The opposite side should be relatively long. It must still be less than 5 + 11 = 16.
</details>

## Mini-Quiz

Answer these before opening the solution.

1. Which given case usually lets you find a missing side with the Law of Cosines: ASA, AAS, or SAS?
2. What side is opposite ∠C in △ABC?
3. Write the formula for c<sup>2</sup> using a, b, and C.
4. If a = 8, b = 10, and C = 90°, what does the Law of Cosines simplify to?

<details>
<summary>Reveal mini-quiz answers</summary>

1. SAS.
2. Side c, which is side AB.
3. c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> - 2ab cos C.
4. c<sup>2</sup> = 8<sup>2</sup> + 10<sup>2</sup>, because cos 90° = 0.
</details>

## Independent Practice

Try these on your own. Round side lengths to the nearest tenth when needed.

1. Find x if two sides are 6 and 8 with included angle 45°.
2. Find x if two sides are 9 and 13 with included angle 70°.
3. Find x if two sides are 10 and 15 with included angle 120°.
4. In △ABC, a = 12, b = 16, and C = 30°. Find c.
5. In △XYZ, XY = 14, XZ = 9, and ∠X = 102°. Which side is opposite the included angle?
6. Without calculating fully, explain why a side opposite 140° should be longer than either known side if the known sides are 8 and 10.
7. A hiker walks 4 km, turns 75°, and walks 6 km. Find the direct distance from the start to the endpoint.

## Answer Key with Explanations

<details>
<summary>Reveal answer key</summary>

1. x<sup>2</sup> = 6<sup>2</sup> + 8<sup>2</sup> - 2(6)(8)cos 45° ≈ 32.1, so x ≈ 5.7.
2. x<sup>2</sup> = 9<sup>2</sup> + 13<sup>2</sup> - 2(9)(13)cos 70° ≈ 170.0, so x ≈ 13.0.
3. x<sup>2</sup> = 10<sup>2</sup> + 15<sup>2</sup> - 2(10)(15)cos 120° = 475, so x ≈ 21.8.
4. c<sup>2</sup> = 12<sup>2</sup> + 16<sup>2</sup> - 2(12)(16)cos 30° ≈ 67.4, so c ≈ 8.2.
5. Side YZ is opposite ∠X.
6. 140° is a large obtuse angle, so the side across from it opens wide. The answer should be the longest side, but still less than 18.
7. d<sup>2</sup> = 4<sup>2</sup> + 6<sup>2</sup> - 2(4)(6)cos 75° ≈ 39.6, so d ≈ 6.3 km.
</details>

## Misconception Alerts

> [!WARNING] Misconception 1
>
> Do not use the Pythagorean Theorem just because two sides are known. The Pythagorean Theorem requires a right angle.

> [!WARNING] Misconception 2
>
> The angle in the Law of Cosines must match the opposite unknown side. If you solve for c, use angle C.

> [!WARNING] Misconception 3
>
> Remember the minus sign: a<sup>2</sup> + b<sup>2</sup> - 2ab cos C. When C is obtuse, cos C is negative, so the whole term may increase the result.

## Error Analysis

A student wrote:

> Two sides are 8 and 11 with included angle 60°.  
> x<sup>2</sup> = 8<sup>2</sup> + 11<sup>2</sup> + 2(8)(11)cos 60°  
> x<sup>2</sup> = 273, so x ≈ 16.5.

What is the mistake?

<details>
<summary>Reveal mistake explanation and correction</summary>

The mistake is using plus instead of minus before the cosine term.

Correct work:

x<sup>2</sup> = 8<sup>2</sup> + 11<sup>2</sup> - 2(8)(11)cos 60°  
x<sup>2</sup> = 64 + 121 - 88 = 97  
x ≈ 9.8
</details>

## Self-Explanation Prompts

Use these to check your reasoning.

1. How do you know when a triangle problem is SAS?
2. Why does the side opposite a larger angle tend to be longer?
3. What does the cosine term adjust compared with the Pythagorean Theorem?
4. Why do you take the positive square root at the end?

<details>
<summary>Reveal sample responses</summary>

1. I know it is SAS when two sides and the angle between them are known.
2. A larger angle opens wider, so the side across from it has to stretch farther.
3. The cosine term adjusts for the included angle when the triangle is not right.
4. A side length cannot be negative, so I use the positive square root.
</details>

## Extension Challenge

A drone flies 3.5 km east, turns 128° from its first path, and flies 5.2 km. How far is it from its starting point? Round to the nearest tenth.

<details>
<summary>Reveal hint</summary>

Use the Law of Cosines with sides 3.5 and 5.2 and included angle 128°.
</details>

<details>
<summary>Reveal solution</summary>

d<sup>2</sup> = 3.5<sup>2</sup> + 5.2<sup>2</sup> - 2(3.5)(5.2)cos 128°  
d<sup>2</sup> ≈ 12.25 + 27.04 - 36.4(-0.6157)  
d<sup>2</sup> ≈ 61.7  
d ≈ 7.9 km
</details>

## Mastery Checklist

Check whether each statement feels true for you.

- I can recognize SAS information in an oblique triangle.
- I can identify the included angle.
- I can identify the side opposite a given angle.
- I can write the correct Law of Cosines formula for a missing side.
- I can substitute values without losing the minus sign.
- I can round a side length reasonably.
- I can check whether a side length makes sense from the triangle shape.

> [!PRACTICE] Next Step
>
> Use the practice exam for formula setup and basic computations. Use the assessment when you are ready to solve new SAS side problems and explain your reasoning.

## Final Summary

The Law of Cosines helps you find a missing side in an oblique triangle when you know two sides and the included angle.

For side c:

$$c^2 = a^2 + b^2 - 2ab\cos C$$

Label carefully, substitute accurately, take the positive square root, and check whether the answer fits the diagram.
