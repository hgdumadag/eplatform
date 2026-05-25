# Ambiguous SSA Case

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to decide whether SSA information produces zero, one, or two possible triangles, and explain your decision using angle and side evidence.

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 40 minutes |
| Difficulty | Intermediate |
| Main skill | Deciding the number of possible triangles in SSA cases |
| Tools | Calculator, ruler, graph paper, and a careful sketch |

## What You Should Already Know

Before studying the ambiguous SSA case, make sure these ideas feel familiar:

- A triangle's angle measures add to 180°.
- In a triangle, the larger side is opposite the larger angle.
- The sine ratio connects an angle to the ratio of opposite side over hypotenuse in a right triangle.
- The Law of Sines compares matching side-angle pairs:  
  $$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}$$
- SSA means two sides and a non-included angle are known.

### Pre-check / Readiness Quiz

Try these first. Then reveal the answers.

1. In △ABC, side `a` is opposite ∠A. If ∠A = 40° and `a = 8`, which side is matched with ∠A?
2. What is the missing angle if two angles are 35° and 80°?
3. Which side should be longer: the side opposite 100° or the side opposite 45°?
4. Is SSA the same as SAS?

<details>
<summary>Reveal pre-check answers</summary>

1. Side `a` is matched with ∠A.
2. 65°, because 180° - 35° - 80° = 65°.
3. The side opposite 100° should be longer.
4. No. In SAS, the known angle is between the two known sides. In SSA, the known angle is not between the two known sides.

If you missed more than one item, review triangle angle sum, opposite side-angle pairs, and the difference between SAS and SSA before continuing.
</details>

## Key Vocabulary

| Term | Meaning |
|---|---|
| SSA | A given case with two sides and a non-included angle |
| Ambiguous case | A situation where the same SSA information may form zero, one, or two triangles |
| Known angle | The angle provided in the problem, often called ∠A in examples |
| Opposite side | The side across from a given angle |
| Adjacent given side | The known side that touches the known angle but is not opposite it |
| Height | The perpendicular distance from a vertex to the opposite side or its extension |
| Supplementary angles | Two angles whose measures add to 180° |

> [!IMPORTANT] Core Idea
>
> SSA can be ambiguous because a swinging side may reach the base in two places, exactly one place, or no place at all.

## Try Before You Read

A rescue boat starts at point A. A signal tower is at point C, and the direction from A makes a 35° angle with the shoreline. The boat's distance from A and the tower's distance from the boat are known, but the angle is not between those two known sides.

What geometric issue could happen?

<details>
<summary>Reveal thinking guide</summary>

Imagine one side fixed from A to C. The other known side can swing from C like a compass. It might hit the ray from A twice, once, or not at all.
</details>

<details>
<summary>Reveal answer</summary>

This is an SSA situation. The same measurements may describe two different triangles, one triangle, or no triangle, so you must check the ambiguous case before solving fully.
</details>

## Visual Introduction

In the diagrams below, ∠A and sides `a` and `b` are given. Side `a` is opposite ∠A. Side `b` touches ∠A.

<svg viewBox="0 0 760 260" role="img" aria-labelledby="ssa-swing-title ssa-swing-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="ssa-swing-title">Swinging side in the SSA case</title>
  <desc id="ssa-swing-desc">A fixed angle at A and adjacent side b create a point C. Side a can swing from C and may intersect the base ray twice, once, or not at all.</desc>
  <line x1="70" y1="205" x2="690" y2="205" stroke="#cbd5e1" stroke-width="2"/>
  <line x1="105" y1="205" x2="260" y2="95" stroke="#1f2937" stroke-width="4"/>
  <path d="M133 205 A30 30 0 0 1 129 188" fill="none" stroke="#ea580c" stroke-width="3"/>
  <text x="138" y="190" font-size="17" fill="#ea580c">A</text>
  <text x="168" y="139" font-size="17" fill="#2563eb">b</text>
  <text x="96" y="228" font-size="17" fill="#111827">A</text>
  <text x="263" y="90" font-size="17" fill="#111827">C</text>
  <circle cx="260" cy="95" r="102" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 6"/>
  <line x1="260" y1="95" x2="174" y2="205" stroke="#16a34a" stroke-width="3"/>
  <line x1="260" y1="95" x2="351" y2="205" stroke="#16a34a" stroke-width="3"/>
  <circle cx="174" cy="205" r="5" fill="#16a34a"/>
  <circle cx="351" cy="205" r="5" fill="#16a34a"/>
  <text x="197" y="165" font-size="17" fill="#16a34a">a</text>
  <text x="306" y="165" font-size="17" fill="#16a34a">a</text>
  <text x="154" y="230" font-size="16" fill="#111827">B₁</text>
  <text x="346" y="230" font-size="16" fill="#111827">B₂</text>
  <text x="430" y="95" font-size="18" fill="#111827">Two possible triangles can happen</text>
  <text x="430" y="125" font-size="16" fill="#475569">when the swinging side reaches the base ray twice.</text>
</svg>

The ambiguity is not caused by bad drawing. It is built into the information pattern.

## Main Concept Explanation

### 1. Recognize the SSA Setup

SSA means:

- one known angle, such as ∠A
- its opposite side, such as `a`
- another side, such as `b`
- the known angle is **not** between the two known sides

That non-included angle is why the triangle may not be fixed yet.

### 2. Use the Height Test

For the common case where ∠A is acute, use this height:

$$h=b\sin A$$

Here, `b` is the known side touching ∠A, and `h` is the shortest distance from point C to the base ray from A.

<svg viewBox="0 0 640 300" role="img" aria-labelledby="height-test-title height-test-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="height-test-title">Height test for SSA</title>
  <desc id="height-test-desc">The height h equals b times sine A, drawn as the perpendicular from C to the base ray.</desc>
  <line x1="75" y1="230" x2="565" y2="230" stroke="#1f2937" stroke-width="3"/>
  <line x1="95" y1="230" x2="300" y2="82" stroke="#1d4ed8" stroke-width="4"/>
  <line x1="300" y1="82" x2="300" y2="230" stroke="#dc2626" stroke-width="3" stroke-dasharray="7 5"/>
  <path d="M300 207 L323 207 L323 230" fill="none" stroke="#dc2626" stroke-width="2"/>
  <path d="M132 230 A45 45 0 0 1 131 204" fill="none" stroke="#ea580c" stroke-width="3"/>
  <text x="140" y="204" font-size="18" fill="#ea580c">A</text>
  <text x="188" y="142" font-size="18" fill="#1d4ed8">b</text>
  <text x="309" y="158" font-size="18" fill="#dc2626">h = b sin A</text>
  <text x="88" y="255" font-size="17" fill="#111827">A</text>
  <text x="304" y="78" font-size="17" fill="#111827">C</text>
  <text x="292" y="255" font-size="17" fill="#111827">D</text>
</svg>

Compare side `a` with the height `h` and side `b`.

### 3. Decision Rules for Acute ∠A

When ∠A is acute:

| Comparison | Number of Triangles | Why |
|---|---:|---|
| `a < h` | 0 | Side `a` is too short to reach the base ray |
| `a = h` | 1 | Side `a` reaches exactly at the perpendicular foot |
| `h < a < b` | 2 | Side `a` reaches the base ray in two places |
| `a ≥ b` | 1 | Side `a` reaches only one valid point on the ray |

<svg viewBox="0 0 760 420" role="img" aria-labelledby="ssa-cases-title ssa-cases-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="ssa-cases-title">Zero, one, and two SSA triangle cases</title>
  <desc id="ssa-cases-desc">Four panels show no triangle when a is shorter than h, one right-position triangle when a equals h, two triangles when a is between h and b, and one triangle when a is at least b.</desc>
  <text x="70" y="35" font-size="18" fill="#111827">a &lt; h: 0 triangles</text>
  <line x1="70" y1="160" x2="255" y2="160" stroke="#94a3b8" stroke-width="2"/>
  <line x1="88" y1="160" x2="168" y2="65" stroke="#1d4ed8" stroke-width="3"/>
  <line x1="168" y1="65" x2="168" y2="160" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 4"/>
  <circle cx="168" cy="65" r="65" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 4"/>
  <text x="185" y="103" font-size="15" fill="#dc2626">h</text>
  <text x="204" y="78" font-size="15" fill="#475569">a too short</text>

  <text x="440" y="35" font-size="18" fill="#111827">a = h: 1 triangle</text>
  <line x1="440" y1="160" x2="625" y2="160" stroke="#94a3b8" stroke-width="2"/>
  <line x1="458" y1="160" x2="538" y2="65" stroke="#1d4ed8" stroke-width="3"/>
  <line x1="538" y1="65" x2="538" y2="160" stroke="#16a34a" stroke-width="3"/>
  <path d="M538 139 L559 139 L559 160" fill="none" stroke="#16a34a" stroke-width="2"/>
  <text x="548" y="112" font-size="15" fill="#16a34a">a = h</text>

  <text x="70" y="235" font-size="18" fill="#111827">h &lt; a &lt; b: 2 triangles</text>
  <line x1="70" y1="365" x2="255" y2="365" stroke="#94a3b8" stroke-width="2"/>
  <line x1="88" y1="365" x2="168" y2="270" stroke="#1d4ed8" stroke-width="3"/>
  <circle cx="168" cy="270" r="105" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="168" y1="270" x2="103" y2="365" stroke="#16a34a" stroke-width="3"/>
  <line x1="168" y1="270" x2="233" y2="365" stroke="#16a34a" stroke-width="3"/>
  <text x="96" y="390" font-size="15" fill="#111827">B₁</text>
  <text x="228" y="390" font-size="15" fill="#111827">B₂</text>

  <text x="440" y="235" font-size="18" fill="#111827">a ≥ b: 1 triangle</text>
  <line x1="440" y1="365" x2="650" y2="365" stroke="#94a3b8" stroke-width="2"/>
  <line x1="458" y1="365" x2="538" y2="270" stroke="#1d4ed8" stroke-width="3"/>
  <circle cx="538" cy="270" r="128" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 4"/>
  <line x1="538" y1="270" x2="636" y2="365" stroke="#16a34a" stroke-width="3"/>
  <text x="632" y="390" font-size="15" fill="#111827">B</text>
</svg>

> [!WARNING] Common Trap
>
> Do not decide from the drawing alone. Use the numerical comparison with `h`, `a`, and `b`.

### 4. What If ∠A Is Obtuse?

If ∠A is obtuse, there can be at most one triangle.

- If `a > b`, one triangle is possible.
- If `a ≤ b`, no triangle is possible.

Why? The side opposite an obtuse angle must be the longest side. If `a` is opposite the obtuse angle, `a` must be longer than `b`.

## Rule Box / Formula Box

For SSA with known ∠A, opposite side `a`, and adjacent side `b`:

$$h=b\sin A$$

| Known Angle | Condition | Result |
|---|---|---:|
| ∠A acute | `a < h` | 0 triangles |
| ∠A acute | `a = h` | 1 triangle |
| ∠A acute | `h < a < b` | 2 triangles |
| ∠A acute | `a ≥ b` | 1 triangle |
| ∠A obtuse | `a > b` | 1 triangle |
| ∠A obtuse | `a ≤ b` | 0 triangles |

## Worked Examples

### Example 1: Two Triangles

**Problem:** In △ABC, ∠A = 40°, `a = 8`, and `b = 10`. How many triangles are possible?

**Solution:**

Find the height:

$$h=b\sin A=10\sin40°\approx6.43$$

Compare:

$$h < a < b \quad \text{because} \quad 6.43 < 8 < 10$$

**Answer:** Two triangles are possible.

### Example 2: No Triangle

**Problem:** In △ABC, ∠A = 35°, `a = 4`, and `b = 9`. How many triangles are possible?

**Solution:**

$$h=9\sin35°\approx5.16$$

Since `a < h`, the swinging side is too short to reach the base ray.

**Answer:** No triangle is possible.

### Example 3: One Triangle With an Obtuse Angle

**Problem:** In △ABC, ∠A = 110°, `a = 15`, and `b = 9`. How many triangles are possible?

<svg viewBox="0 0 560 250" role="img" aria-labelledby="obtuse-ssa-title obtuse-ssa-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="obtuse-ssa-title">Obtuse SSA side comparison</title>
  <desc id="obtuse-ssa-desc">Angle A is obtuse, so opposite side a must be longer than adjacent side b.</desc>
  <line x1="95" y1="185" x2="420" y2="185" stroke="#94a3b8" stroke-width="2"/>
  <line x1="120" y1="185" x2="205" y2="85" stroke="#1d4ed8" stroke-width="4"/>
  <line x1="205" y1="85" x2="500" y2="185" stroke="#16a34a" stroke-width="4"/>
  <path d="M165 185 A45 45 0 0 1 149 145" fill="none" stroke="#ea580c" stroke-width="3"/>
  <text x="164" y="150" font-size="17" fill="#ea580c">110°</text>
  <text x="150" y="121" font-size="17" fill="#1d4ed8">b = 9</text>
  <text x="340" y="124" font-size="17" fill="#16a34a">a = 15</text>
  <text x="110" y="210" font-size="17" fill="#111827">A</text>
  <text x="504" y="190" font-size="17" fill="#111827">B</text>
  <text x="207" y="79" font-size="17" fill="#111827">C</text>
</svg>

Since ∠A is obtuse, side `a` must be longer than side `b`. Here, `15 > 9`.

**Answer:** One triangle is possible.

## Guided Practice with Revealable Hints

### Guided Problem 1

In △ABC, ∠A = 30°, `a = 5`, and `b = 12`. How many triangles are possible?

<details>
<summary>Hint 1</summary>

The known angle is acute, so find the height with `h = b sin A`.
</details>

<details>
<summary>Hint 2</summary>

`h = 12 sin 30° = 6`. Compare `a = 5` with `h = 6`.
</details>

<details>
<summary>Show solution</summary>

Since `a < h`, the side opposite ∠A is too short to reach the base ray. **Zero triangles** are possible.
</details>

### Guided Problem 2

In △ABC, ∠A = 45°, `a = 7`, and `b = 7`. How many triangles are possible?

<details>
<summary>Hint 1</summary>

For an acute known angle, compare `a` with `h` and `b`.
</details>

<details>
<summary>Hint 2</summary>

Since `a ≥ b`, the result is one triangle.
</details>

<details>
<summary>Show solution</summary>

Here `a = b`, so `a ≥ b`. **One triangle** is possible.
</details>

### Guided Problem 3

In △ABC, ∠A = 52°, `a = 9`, and `b = 11`. How many triangles are possible?

<details>
<summary>Hint 1</summary>

Find `h = 11 sin 52°`.
</details>

<details>
<summary>Hint 2</summary>

`h ≈ 8.67`. Now compare `8.67`, `9`, and `11`.
</details>

<details>
<summary>Show solution</summary>

Since `h < a < b`, or `8.67 < 9 < 11`, **two triangles** are possible.
</details>

## Mini-Quiz

Try these without looking back. Then reveal the answer key.

1. ∠A = 40°, `a = 6`, `b = 10`. Use `h ≈ 6.43`. How many triangles?
2. ∠A = 40°, `a = 6.43`, `b = 10`. How many triangles?
3. ∠A = 100°, `a = 12`, `b = 15`. How many triangles?
4. True or false: Every SSA case has two possible triangles.

<details>
<summary>Reveal mini-quiz answers</summary>

1. 0 triangles, because `a < h`.
2. 1 triangle, because `a = h`.
3. 0 triangles, because ∠A is obtuse and `a` is not greater than `b`.
4. False. SSA may produce zero, one, or two triangles.
</details>

## Independent Practice

Decide whether each SSA situation produces zero, one, or two triangles.

1. ∠A = 25°, `a = 8`, `b = 14`
2. ∠A = 30°, `a = 4`, `b = 10`
3. ∠A = 60°, `a = 10`, `b = 10`
4. ∠A = 70°, `a = 8`, `b = 12`
5. ∠A = 115°, `a = 16`, `b = 9`
6. ∠A = 115°, `a = 7`, `b = 9`
7. A map problem gives a 38° angle from a starting point, an adjacent distance of 18 km, and an opposite distance of 13 km. Decide the number of possible routes.

## Answer Key with Explanations

<details>
<summary>Reveal independent practice answers</summary>

1. `h = 14 sin25° ≈ 5.92`. Since `h < a < b`, two triangles.
2. `h = 10 sin30° = 5`. Since `a < h`, zero triangles.
3. Since `a = b`, one triangle.
4. `h = 12 sin70° ≈ 11.28`. Since `a < h`, zero triangles.
5. ∠A is obtuse and `a > b`, so one triangle.
6. ∠A is obtuse and `a ≤ b`, so zero triangles.
7. `h = 18 sin38° ≈ 11.08`. Since `h < 13 < 18`, two possible routes.
</details>

## Misconception Alerts

> [!WARNING] Misconception 1: "SSA always makes two triangles."
>
> SSA is only potentially ambiguous. It can create zero, one, or two triangles depending on the measurements.

> [!WARNING] Misconception 2: "A calculator answer from Law of Sines always proves a triangle exists."
>
> A sine value may suggest an angle, but the full angle sum and the possible supplementary angle must still be checked.

> [!WARNING] Misconception 3: "The longest drawn side is always the longest actual side."
>
> Sketches are not proof. Use the given lengths and angle relationships.

## Error Analysis

A student solves this problem:

**Problem:** ∠A = 40°, `a = 8`, and `b = 10`.

**Student's incorrect solution:**  
"Because this is SSA, there are always two triangles."

What is wrong?

<details>
<summary>Reveal mistake explanation</summary>

The student used a memorized phrase instead of checking the measurements. SSA is not always two triangles.
</details>

<details>
<summary>Reveal corrected solution</summary>

Find the height:

$$h=10\sin40°\approx6.43$$

Compare:

$$6.43 < 8 < 10$$

Because `h < a < b`, this specific SSA case has **two possible triangles**. The answer happens to be two, but the student's reason was incomplete.
</details>

## Self-Explanation Prompts

Answer these in your own words.

1. Why does the height `h = b sin A` help decide whether a triangle exists?
2. Why can `h < a < b` create two triangles?
3. Why can an obtuse known angle have at most one triangle?
4. How would you explain the difference between SSA and SAS to someone else?

<details>
<summary>Reveal sample responses</summary>

1. The height is the shortest distance from point C to the base ray. If side `a` is shorter than that, it cannot reach the base.
2. The swinging side is long enough to reach the base, but shorter than the adjacent side, so it can hit the base ray on two different sides of the perpendicular foot.
3. If the known angle is obtuse, the opposite side must be the longest side. That leaves either one possible triangle or none.
4. SSA gives two sides and a non-included angle. SAS gives two sides and the angle between them, so SAS fixes the triangle more directly.
</details>

## Extension Challenge

In △ABC, ∠A = 32°, `a = 9`, and `b = 15`.

1. Decide how many triangles are possible.
2. Use the Law of Sines to estimate possible values of ∠B.

<details>
<summary>Hint</summary>

First calculate `h = 15 sin32°`. Then use `sin B / b = sin A / a`.
</details>

<details>
<summary>Reveal full solution</summary>

Height test:

$$h=15\sin32°\approx7.95$$

Since `7.95 < 9 < 15`, two triangles are possible.

Law of Sines:

$$\frac{\sin B}{15}=\frac{\sin32°}{9}$$

$$\sin B=\frac{15\sin32°}{9}\approx0.883$$

So one angle is:

$$B\approx62°$$

The second possible angle is supplementary:

$$180°-62°=118°$$

Both work because:

$$32°+62°<180°$$

and

$$32°+118°<180°$$

So the two possible values are about **62°** and **118°**.
</details>

## Mastery Checklist

Check each statement when it feels true.

- I can recognize an SSA setup.
- I can identify the known angle, opposite side `a`, and adjacent side `b`.
- I can calculate the height using `h = b sin A`.
- I can compare `a`, `h`, and `b` for an acute known angle.
- I can decide zero, one, or two triangles.
- I can handle an obtuse known angle by comparing `a` and `b`.
- I can explain my decision using angle and side evidence.

> [!PRACTICE] What To Do Next
>
> Use the practice exam for quick decision drills. Use the assessment when you can explain not only the number of triangles, but also the evidence that proves your decision.

## Final Summary

The SSA case is called ambiguous because the same kind of given information can lead to different outcomes. The safest method is to identify the known angle, opposite side, and adjacent side, then compare the opposite side to the height and the adjacent side. A clear decision always comes from the measurements, not from the sketch alone.
