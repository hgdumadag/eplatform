# Oblique Triangles

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to distinguish right and oblique triangles, identify what information is given, and choose a reasonable strategy before solving.

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 35 minutes |
| Difficulty | Intermediate |
| Main skill | Classifying triangles and identifying given cases |
| Tools | Ruler, graph paper, calculator when needed |

<!-- visual-assets:start -->

## Visual Study Set

Use these diagrams as anchors while you study. Each image names the parts you should notice before solving.

![Right triangle and oblique triangle comparison](/content/grade-10/math/quarter-1/topic-oblique-triangles/images/right-vs-oblique.svg)

![Acute and obtuse oblique triangle comparison](/content/grade-10/math/quarter-1/topic-oblique-triangles/images/acute-obtuse-oblique.svg)

![SSS SAS ASA AAS and SSA given cases](/content/grade-10/math/quarter-1/topic-oblique-triangles/images/given-cases-map.svg)

<!-- visual-assets:end -->

## What You Should Already Know

Before studying oblique triangles, make sure these ideas feel familiar:

- A triangle has three sides and three angles.
- The angle sum of every triangle is 180°.
- A right angle measures 90°.
- Acute angles are less than 90°.
- Obtuse angles are greater than 90° but less than 180°.

### Pre-check / Readiness Quiz

Try these first. Then reveal the answers.

1. A triangle has angles 40°, 50°, and 90°. Is it right or oblique?
2. A triangle has angles 70°, 60°, and 50°. Is it right or oblique?
3. A triangle has angles 105°, 35°, and 40°. Is it acute, right, or obtuse?
4. If two angles of a triangle are 48° and 67°, what is the third angle?

<details>
<summary>Reveal pre-check answers</summary>

1. Right triangle, because one angle is 90°.
2. Oblique triangle. More specifically, it is an acute oblique triangle because all angles are less than 90°.
3. Obtuse oblique triangle, because one angle is greater than 90°.
4. 65°, because 180° - 48° - 67° = 65°.

If you missed more than one item, review angle types and the triangle angle sum before continuing.
</details>

## Key Vocabulary

| Term | Meaning |
|---|---|
| Right triangle | A triangle with one 90° angle |
| Oblique triangle | A triangle with no 90° angle |
| Acute triangle | A triangle with three acute angles |
| Obtuse triangle | A triangle with one obtuse angle |
| Included angle | The angle between two given sides |
| Included side | The side between two given angles |
| Given case | The pattern of known sides and angles, such as SSS or ASA |

> [!IMPORTANT] Core Distinction
>
> A triangle is **oblique** if it does not contain a right angle. Oblique triangles can be acute or obtuse.

## Try Before You Read

A construction worker measures a triangular plot of land. The triangle has angles 42°, 71°, and 67°.

What geometric idea do you notice?

<details>
<summary>Reveal thinking guide</summary>

Check whether any angle is 90°. If none of the angles is 90°, the triangle is not a right triangle.
</details>

<details>
<summary>Reveal answer</summary>

The triangle is an **oblique triangle**. Since all three angles are less than 90°, it is an **acute oblique triangle**.
</details>

## Visual Introduction

Compare these two triangles.

<svg viewBox="0 0 640 220" role="img" aria-labelledby="right-vs-oblique-title right-vs-oblique-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="right-vs-oblique-title">Right triangle compared with oblique triangle</title>
  <desc id="right-vs-oblique-desc">The left triangle has a 90 degree angle. The right triangle has no 90 degree angle.</desc>
  <line x1="70" y1="170" x2="230" y2="170" stroke="#1f2937" stroke-width="3"/>
  <line x1="70" y1="170" x2="70" y2="50" stroke="#1f2937" stroke-width="3"/>
  <line x1="70" y1="50" x2="230" y2="170" stroke="#1f2937" stroke-width="3"/>
  <path d="M70 145 L95 145 L95 170" fill="none" stroke="#dc2626" stroke-width="3"/>
  <text x="108" y="153" font-size="18" fill="#dc2626">90°</text>
  <text x="88" y="205" font-size="18" fill="#111827">Right triangle</text>
  <line x1="385" y1="170" x2="570" y2="170" stroke="#1f2937" stroke-width="3"/>
  <line x1="385" y1="170" x2="455" y2="45" stroke="#1f2937" stroke-width="3"/>
  <line x1="455" y1="45" x2="570" y2="170" stroke="#1f2937" stroke-width="3"/>
  <text x="392" y="156" font-size="16" fill="#2563eb">62°</text>
  <text x="520" y="156" font-size="16" fill="#2563eb">51°</text>
  <text x="450" y="70" font-size="16" fill="#2563eb">67°</text>
  <text x="402" y="205" font-size="18" fill="#111827">Oblique triangle</text>
</svg>

The right triangle has a special 90° angle. The oblique triangle does not. That single difference changes the tools you usually choose.

## Main Concept Explanation

### 1. Right or Oblique?

Ask one first question:

> Does the triangle have a 90° angle?

If yes, it is a **right triangle**. You can often use the Pythagorean Theorem and right-triangle trigonometry.

If no, it is an **oblique triangle**. You will usually think about general triangle relationships, especially the Law of Sines or Law of Cosines in later solving lessons.

### 2. Acute or Obtuse Oblique?

Oblique triangles come in two common forms.

<svg viewBox="0 0 640 240" role="img" aria-labelledby="acute-obtuse-title acute-obtuse-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="acute-obtuse-title">Acute and obtuse oblique triangles</title>
  <desc id="acute-obtuse-desc">An acute oblique triangle has all angles less than 90 degrees. An obtuse oblique triangle has one angle greater than 90 degrees.</desc>
  <polygon points="95,175 235,175 155,55" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"/>
  <text x="98" y="160" font-size="15" fill="#1d4ed8">58°</text>
  <text x="200" y="160" font-size="15" fill="#1d4ed8">48°</text>
  <text x="148" y="78" font-size="15" fill="#1d4ed8">74°</text>
  <text x="84" y="210" font-size="18" fill="#111827">Acute oblique</text>
  <polygon points="370,175 580,175 435,70" fill="#fee2e2" stroke="#b91c1c" stroke-width="3"/>
  <text x="390" y="158" font-size="15" fill="#b91c1c">112°</text>
  <text x="540" y="158" font-size="15" fill="#b91c1c">29°</text>
  <text x="435" y="94" font-size="15" fill="#b91c1c">39°</text>
  <text x="400" y="210" font-size="18" fill="#111827">Obtuse oblique</text>
</svg>

- **Acute oblique:** all three angles are less than 90°.
- **Obtuse oblique:** one angle is greater than 90°.

> [!WARNING] Common Trap
>
> "Oblique" does not mean "obtuse." An acute triangle is also oblique if it has no right angle.

## Rule Box / Formula Box

Use these rules for this lesson.

| Situation | Classification |
|---|---|
| One angle is exactly 90° | Right triangle |
| No angle is 90° | Oblique triangle |
| All angles are less than 90° | Acute triangle |
| One angle is greater than 90° | Obtuse triangle |
| Any two angles are known | Third angle = 180° - first angle - second angle |

For strategy planning:

| Given case | What is known? | Usual strategy later |
|---|---|---|
| SSS | 3 sides | Law of Cosines |
| SAS | 2 sides and their included angle | Law of Cosines |
| ASA | 2 angles and the included side | Law of Sines |
| AAS | 2 angles and a non-included side | Law of Sines |
| SSA | 2 sides and a non-included angle | Law of Sines, but check ambiguity |

## Worked Examples

### Example 1: Classifying by Angles

**Problem:** A triangle has angles 35°, 65°, and 80°. Classify it.

**Solution:**

None of the angles is 90°, so the triangle is oblique.

All three angles are less than 90°, so it is acute.

**Answer:** acute oblique triangle

### Example 2: Finding a Missing Angle First

**Problem:** A triangle has two angles measuring 44° and 86°. Is it right or oblique?

**Solution:**

Find the missing angle:

$$180° - 44° - 86° = 50°$$

The angles are 44°, 86°, and 50°. None is 90°.

**Answer:** oblique triangle

### Example 3: Identifying the Given Case

**Problem:** In △ABC, you know AB = 9 cm, AC = 12 cm, and ∠A = 47°. What given case is this?

<svg viewBox="0 0 520 250" role="img" aria-labelledby="sas-title sas-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="sas-title">SAS triangle case</title>
  <desc id="sas-desc">Two sides from point A are known, and the angle between them is known.</desc>
  <polygon points="95,185 390,185 180,55" fill="#ecfeff" stroke="#0f766e" stroke-width="3"/>
  <text x="88" y="207" font-size="17" fill="#111827">A</text>
  <text x="395" y="190" font-size="17" fill="#111827">B</text>
  <text x="176" y="48" font-size="17" fill="#111827">C</text>
  <text x="230" y="205" font-size="16" fill="#0f766e">AB = 9 cm</text>
  <text x="105" y="112" font-size="16" fill="#0f766e">AC = 12 cm</text>
  <path d="M125 184 A35 35 0 0 1 113 154" fill="none" stroke="#ea580c" stroke-width="3"/>
  <text x="128" y="160" font-size="16" fill="#ea580c">47°</text>
</svg>

**Solution:**

Two sides are known: AB and AC. The known angle ∠A is between those two sides.

**Answer:** SAS, because the included angle is given.

## Guided Practice with Revealable Hints

### Guided Problem 1

A triangle has angles 90°, 36°, and 54°. Classify it.

<details>
<summary>Hint 1</summary>

Look for a 90° angle first.
</details>

<details>
<summary>Hint 2</summary>

If a triangle has a 90° angle, it is not oblique.
</details>

<details>
<summary>Show solution</summary>

The triangle has a 90° angle, so it is a **right triangle**.
</details>

### Guided Problem 2

A triangle has angles 102°, 41°, and 37°. Classify it.

<details>
<summary>Hint 1</summary>

Check whether any angle is exactly 90°.
</details>

<details>
<summary>Hint 2</summary>

An angle greater than 90° makes the triangle obtuse.
</details>

<details>
<summary>Show solution</summary>

There is no 90° angle, so the triangle is oblique. Since 102° is greater than 90°, it is an **obtuse oblique triangle**.
</details>

### Guided Problem 3

You know two sides of a triangle and the angle between them. What given case is this?

<details>
<summary>Hint 1</summary>

"Between them" means included angle.
</details>

<details>
<summary>Hint 2</summary>

Name the pattern as Side-Angle-Side.
</details>

<details>
<summary>Show solution</summary>

The given case is **SAS**.
</details>

## Mini-Quiz

Answer these before opening the solution.

1. A triangle has angles 88°, 47°, and 45°. Is it right or oblique?
2. A triangle has angles 25° and 65°. What is the third angle, and what type of triangle is it?
3. You know two angles and the side between them. What given case is this?
4. You know all three side lengths. What given case is this?

<details>
<summary>Reveal mini-quiz answers</summary>

1. Oblique. None of the angles is 90°.
2. The third angle is 90°, so it is a right triangle.
3. ASA.
4. SSS.
</details>

## Independent Practice

Try these on your own.

1. Classify a triangle with angles 61°, 59°, and 60°.
2. Classify a triangle with angles 28°, 90°, and 62°.
3. Classify a triangle with angles 116°, 32°, and 32°.
4. Find the third angle if two angles are 73° and 49°. Then classify the triangle.
5. Identify the given case: two sides and a non-included angle.
6. Identify the given case: two angles and a non-included side.
7. A surveyor knows three side lengths of a triangular lot. Which given case is this?
8. A student says every oblique triangle is obtuse. Is the student correct?

## Answer Key with Explanations

<details>
<summary>Reveal answer key</summary>

1. Acute oblique triangle. All angles are less than 90°.
2. Right triangle. One angle is 90°.
3. Obtuse oblique triangle. No angle is 90°, and one angle is greater than 90°.
4. Third angle = 180° - 73° - 49° = 58°. The triangle is acute oblique.
5. SSA.
6. AAS.
7. SSS.
8. No. An oblique triangle has no right angle; it can be acute or obtuse.
</details>

## Misconception Alerts

> [!WARNING] Misconception 1
>
> "Oblique" means "slanted," so some students assume it must mean obtuse. In triangle classification, oblique simply means **not right**.

> [!WARNING] Misconception 2
>
> SSA and SAS are not the same. SAS gives the included angle. SSA gives a non-included angle and can sometimes create an ambiguous case.

> [!WARNING] Misconception 3
>
> A triangle cannot have two obtuse angles. Two angles greater than 90° would already add to more than 180°.

## Error Analysis

A student wrote:

> The triangle has angles 40°, 50°, and 90°. It is oblique because two angles are not right angles.

What is the mistake?

<details>
<summary>Reveal mistake explanation and correction</summary>

The mistake is checking only two angles. A triangle is a right triangle if **any one** angle is 90°.

Correct classification: **right triangle**.
</details>

## Self-Explanation Prompts

Use these to check your reasoning.

1. How can you tell quickly whether a triangle is oblique?
2. Why is an acute triangle also an oblique triangle?
3. What does "included angle" mean?
4. Why should you identify the given case before choosing a strategy?

<details>
<summary>Reveal sample responses</summary>

1. I check whether any angle is 90°. If no angle is 90°, the triangle is oblique.
2. An acute triangle has all angles less than 90°, so it has no right angle.
3. The included angle is the angle formed between two given sides.
4. The given case tells me which triangle relationship or formula is likely useful.
</details>

## Extension Challenge

You know that △DEF has DE = 8 cm, EF = 11 cm, and ∠E = 124°.

1. Is this triangle right or oblique?
2. Is it acute or obtuse?
3. What given case is shown?
4. Which general strategy would probably be useful later?

<details>
<summary>Reveal hint</summary>

The angle ∠E is between sides DE and EF.
</details>

<details>
<summary>Reveal solution</summary>

1. It is oblique because there is no 90° angle.
2. It is obtuse because 124° is greater than 90°.
3. The given case is SAS.
4. For SAS in an oblique triangle, the Law of Cosines is usually useful later.
</details>

## Mastery Checklist

Check whether each statement feels true for you.

- I can identify a right triangle from angle information.
- I can explain what makes a triangle oblique.
- I can tell the difference between acute oblique and obtuse oblique triangles.
- I can find a missing angle using 180°.
- I can identify SSS, SAS, ASA, AAS, and SSA given cases.
- I can explain why SAS and SSA are different.
- I can choose a likely strategy from the given case.

> [!PRACTICE] Next Step
>
> Use the practice exam for quick recall and classification. Then use the assessment when you are ready to choose strategies from new triangle descriptions.

## Final Summary

A **right triangle** has one 90° angle. An **oblique triangle** has no 90° angle. Oblique triangles can be acute or obtuse.

When a problem gives side and angle information, identify the **given case** before solving. SSS, SAS, ASA, AAS, and SSA describe what is known and help you choose the next mathematical tool.
