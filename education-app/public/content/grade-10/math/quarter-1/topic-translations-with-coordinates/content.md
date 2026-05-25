# Translations with Coordinates

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to write and apply coordinate rules for translations, then graph the preimage and image of a figure.

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 35 minutes |
| Difficulty | Intermediate |
| Main skill | Using coordinate rules for translations |
| Tools | Graph paper, ruler, pencil, calculator only when needed |

<!-- visual-assets:start -->

## Visual Study Set

Use these diagrams as anchors while you study. Each image names the parts you should notice before solving.

![Translation vector on a coordinate plane](/content/grade-10/math/quarter-1/topic-translations-with-coordinates/images/translation-vector.svg)

![Coordinate rule for translation](/content/grade-10/math/quarter-1/topic-translations-with-coordinates/images/translation-rule.svg)

![Preimage and translated image](/content/grade-10/math/quarter-1/topic-translations-with-coordinates/images/preimage-image.svg)

<!-- visual-assets:end -->

## What You Should Already Know

Before studying translations, make sure these ideas feel familiar:

- A point on the Cartesian plane is written as an ordered pair `(x, y)`.
- The `x`-coordinate tells left or right position.
- The `y`-coordinate tells up or down position.
- Moving right adds to `x`; moving left subtracts from `x`.
- Moving up adds to `y`; moving down subtracts from `y`.

### Pre-check / Readiness Quiz

Try these first. Then reveal the answers.

1. Plot the point A(2, -1). Which coordinate tells its horizontal position?
2. If a point moves 4 units right, what happens to its x-coordinate?
3. If a point moves 3 units down, what happens to its y-coordinate?
4. What is `-2 + 5`?

<details>
<summary>Reveal pre-check answers</summary>

1. The x-coordinate, `2`, tells the horizontal position.
2. The x-coordinate increases by 4.
3. The y-coordinate decreases by 3.
4. `-2 + 5 = 3`.

If you missed more than one item, review plotting ordered pairs and integer addition before continuing.
</details>

## Key Vocabulary

| Term | Meaning |
|---|---|
| Transformation | A change made to a figure on a plane |
| Translation | A slide of every point the same distance and direction |
| Preimage | The original figure before a transformation |
| Image | The new figure after a transformation |
| Vector | A movement with direction and distance, such as 3 right and 2 down |
| Coordinate rule | A rule that tells how each ordered pair changes |
| Congruent | Same shape and same size |

> [!IMPORTANT] Core Idea
>
> A translation slides every point by the same movement. It does not turn, flip, stretch, or shrink the figure.

## Try Before You Read

A game character at point P(1, 2) moves 5 spaces right and 3 spaces down.

What should the new coordinates be?

<details>
<summary>Reveal thinking guide</summary>

Right changes the x-coordinate. Down changes the y-coordinate. Start with `(1, 2)`, add 5 to x, and subtract 3 from y.
</details>

<details>
<summary>Reveal answer</summary>

The new point is P'(6, -1), because `1 + 5 = 6` and `2 - 3 = -1`.
</details>

## Visual Introduction

In a translation, every point follows the same arrow.

<svg viewBox="0 0 640 360" role="img" aria-labelledby="translation-slide-title translation-slide-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="translation-slide-title">Triangle translated right and up</title>
  <desc id="translation-slide-desc">A triangle with vertices A, B, and C slides 4 units right and 2 units up to image triangle A prime, B prime, C prime.</desc>
  <defs>
    <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
      <path d="M0,0 L0,6 L9,3 z" fill="#2563eb"></path>
    </marker>
  </defs>
  <rect x="40" y="30" width="560" height="280" fill="#f8fafc" stroke="#e2e8f0"></rect>
  <g stroke="#cbd5e1" stroke-width="1">
    <line x1="80" y1="30" x2="80" y2="310"></line><line x1="120" y1="30" x2="120" y2="310"></line><line x1="160" y1="30" x2="160" y2="310"></line><line x1="200" y1="30" x2="200" y2="310"></line><line x1="240" y1="30" x2="240" y2="310"></line><line x1="280" y1="30" x2="280" y2="310"></line><line x1="320" y1="30" x2="320" y2="310"></line><line x1="360" y1="30" x2="360" y2="310"></line><line x1="400" y1="30" x2="400" y2="310"></line><line x1="440" y1="30" x2="440" y2="310"></line><line x1="480" y1="30" x2="480" y2="310"></line><line x1="520" y1="30" x2="520" y2="310"></line><line x1="560" y1="30" x2="560" y2="310"></line>
    <line x1="40" y1="70" x2="600" y2="70"></line><line x1="40" y1="110" x2="600" y2="110"></line><line x1="40" y1="150" x2="600" y2="150"></line><line x1="40" y1="190" x2="600" y2="190"></line><line x1="40" y1="230" x2="600" y2="230"></line><line x1="40" y1="270" x2="600" y2="270"></line>
  </g>
  <polygon points="120,230 200,230 160,150" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"></polygon>
  <polygon points="280,150 360,150 320,70" fill="#dcfce7" stroke="#15803d" stroke-width="3"></polygon>
  <line x1="160" y1="205" x2="320" y2="125" stroke="#2563eb" stroke-width="4" marker-end="url(#arrow-blue)"></line>
  <text x="112" y="250" font-size="17" fill="#1e3a8a">A</text>
  <text x="205" y="240" font-size="17" fill="#1e3a8a">B</text>
  <text x="150" y="140" font-size="17" fill="#1e3a8a">C</text>
  <text x="270" y="170" font-size="17" fill="#166534">A'</text>
  <text x="365" y="160" font-size="17" fill="#166534">B'</text>
  <text x="315" y="60" font-size="17" fill="#166534">C'</text>
  <text x="235" y="222" font-size="18" fill="#1f2937">4 right, 2 up</text>
  <text x="185" y="340" font-size="18" fill="#111827">Same size, same shape, same orientation</text>
</svg>

The image is not a new kind of triangle. It is the same triangle in a new location.

## Main Concept Explanation

### 1. What a Translation Does

A translation moves every point by the same amount horizontally and vertically.

If the movement is `a` units horizontally and `b` units vertically, the coordinate rule is:

$$ (x, y) \rightarrow (x + a, y + b) $$

The values of `a` and `b` can be positive, negative, or zero.

| Movement | Coordinate effect |
|---|---|
| Right `a` units | Add `a` to `x` |
| Left `a` units | Subtract `a` from `x` |
| Up `b` units | Add `b` to `y` |
| Down `b` units | Subtract `b` from `y` |

### 2. Reading a Coordinate Rule

The rule `(x, y) -> (x - 3, y + 4)` means:

- `x - 3`: move 3 units left
- `y + 4`: move 4 units up

<svg viewBox="0 0 620 340" role="img" aria-labelledby="point-rule-title point-rule-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="point-rule-title">Point translated using a coordinate rule</title>
  <desc id="point-rule-desc">Point P at 2 negative 1 moves left 3 and up 4 to point P prime at negative 1, 3.</desc>
  <defs>
    <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
      <path d="M0,0 L0,6 L9,3 z" fill="#dc2626"></path>
    </marker>
  </defs>
  <rect x="60" y="30" width="500" height="260" fill="#f8fafc" stroke="#e2e8f0"></rect>
  <g stroke="#cbd5e1" stroke-width="1">
    <line x1="100" y1="30" x2="100" y2="290"></line><line x1="140" y1="30" x2="140" y2="290"></line><line x1="180" y1="30" x2="180" y2="290"></line><line x1="220" y1="30" x2="220" y2="290"></line><line x1="260" y1="30" x2="260" y2="290"></line><line x1="300" y1="30" x2="300" y2="290"></line><line x1="340" y1="30" x2="340" y2="290"></line><line x1="380" y1="30" x2="380" y2="290"></line><line x1="420" y1="30" x2="420" y2="290"></line><line x1="460" y1="30" x2="460" y2="290"></line><line x1="500" y1="30" x2="500" y2="290"></line>
    <line x1="60" y1="50" x2="560" y2="50"></line><line x1="60" y1="90" x2="560" y2="90"></line><line x1="60" y1="130" x2="560" y2="130"></line><line x1="60" y1="170" x2="560" y2="170"></line><line x1="60" y1="210" x2="560" y2="210"></line><line x1="60" y1="250" x2="560" y2="250"></line>
  </g>
  <line x1="60" y1="170" x2="560" y2="170" stroke="#334155" stroke-width="2"></line>
  <line x1="300" y1="30" x2="300" y2="290" stroke="#334155" stroke-width="2"></line>
  <circle cx="380" cy="210" r="7" fill="#2563eb"></circle>
  <circle cx="260" cy="50" r="7" fill="#dc2626"></circle>
  <line x1="380" y1="210" x2="260" y2="50" stroke="#dc2626" stroke-width="4" marker-end="url(#arrow-red)"></line>
  <text x="390" y="218" font-size="17" fill="#1e3a8a">P(2, -1)</text>
  <text x="155" y="48" font-size="17" fill="#991b1b">P'(-1, 3)</text>
  <text x="170" y="315" font-size="18" fill="#111827">(x, y) -> (x - 3, y + 4)</text>
</svg>

### 3. Writing a Rule from Two Points

To find the translation from P to P', compare the coordinates:

$$ a = x' - x $$

$$ b = y' - y $$

If P(4, -2) moves to P'(1, 5):

- horizontal change: `1 - 4 = -3`
- vertical change: `5 - (-2) = 7`
- rule: `(x, y) -> (x - 3, y + 7)`

## Rule Box / Formula Box

> [!IMPORTANT] Translation Rule
>
> A translation by `a` units horizontally and `b` units vertically is written as:
>
> $$(x, y) \rightarrow (x + a, y + b)$$
>
> Positive `a` means right. Negative `a` means left. Positive `b` means up. Negative `b` means down.

## Worked Examples

### Example 1: Apply a Translation Rule to One Point

**Problem:** Translate A(-2, 5) using `(x, y) -> (x + 6, y - 4)`.

**Solution:**

Add 6 to the x-coordinate:

`-2 + 6 = 4`

Subtract 4 from the y-coordinate:

`5 - 4 = 1`

**Answer:** A'(4, 1)

### Example 2: Translate a Triangle

**Problem:** Triangle DEF has D(-3, 1), E(0, 4), and F(2, 0). Apply the rule `(x, y) -> (x + 2, y - 3)`.

| Preimage point | Rule | Image point |
|---|---|---|
| D(-3, 1) | `(-3 + 2, 1 - 3)` | D'(-1, -2) |
| E(0, 4) | `(0 + 2, 4 - 3)` | E'(2, 1) |
| F(2, 0) | `(2 + 2, 0 - 3)` | F'(4, -3) |

<svg viewBox="0 0 620 360" role="img" aria-labelledby="triangle-grid-title triangle-grid-desc" style="max-width:100%;height:auto;border:1px solid #d9e2ec;border-radius:8px;background:#ffffff">
  <title id="triangle-grid-title">Triangle translated right 2 and down 3</title>
  <desc id="triangle-grid-desc">Triangle DEF with points negative 3 comma 1, 0 comma 4, and 2 comma 0 is translated to D prime negative 1 comma negative 2, E prime 2 comma 1, and F prime 4 comma negative 3.</desc>
  <rect x="70" y="30" width="480" height="280" fill="#f8fafc" stroke="#e2e8f0"></rect>
  <g stroke="#cbd5e1" stroke-width="1">
    <line x1="110" y1="30" x2="110" y2="310"></line><line x1="150" y1="30" x2="150" y2="310"></line><line x1="190" y1="30" x2="190" y2="310"></line><line x1="230" y1="30" x2="230" y2="310"></line><line x1="270" y1="30" x2="270" y2="310"></line><line x1="310" y1="30" x2="310" y2="310"></line><line x1="350" y1="30" x2="350" y2="310"></line><line x1="390" y1="30" x2="390" y2="310"></line><line x1="430" y1="30" x2="430" y2="310"></line><line x1="470" y1="30" x2="470" y2="310"></line><line x1="510" y1="30" x2="510" y2="310"></line>
    <line x1="70" y1="70" x2="550" y2="70"></line><line x1="70" y1="110" x2="550" y2="110"></line><line x1="70" y1="150" x2="550" y2="150"></line><line x1="70" y1="190" x2="550" y2="190"></line><line x1="70" y1="230" x2="550" y2="230"></line><line x1="70" y1="270" x2="550" y2="270"></line>
  </g>
  <line x1="70" y1="190" x2="550" y2="190" stroke="#334155" stroke-width="2"></line>
  <line x1="310" y1="30" x2="310" y2="310" stroke="#334155" stroke-width="2"></line>
  <polygon points="190,150 310,30 390,190" fill="#dbeafe" stroke="#1d4ed8" stroke-width="3"></polygon>
  <polygon points="270,270 390,150 470,310" fill="#fef3c7" stroke="#b45309" stroke-width="3"></polygon>
  <text x="168" y="145" font-size="15" fill="#1e3a8a">D</text>
  <text x="315" y="45" font-size="15" fill="#1e3a8a">E</text>
  <text x="398" y="190" font-size="15" fill="#1e3a8a">F</text>
  <text x="245" y="270" font-size="15" fill="#92400e">D'</text>
  <text x="398" y="150" font-size="15" fill="#92400e">E'</text>
  <text x="475" y="306" font-size="15" fill="#92400e">F'</text>
  <text x="190" y="340" font-size="18" fill="#111827">(x, y) -> (x + 2, y - 3)</text>
</svg>

### Example 3: Find the Rule from a Point and Its Image

**Problem:** B(-5, 3) maps to B'(-1, -2). What is the translation rule?

**Solution:**

Compare `x`: `-1 - (-5) = 4`, so move 4 right.

Compare `y`: `-2 - 3 = -5`, so move 5 down.

**Answer:** `(x, y) -> (x + 4, y - 5)`

## Guided Practice with Revealable Hints

### Guided Problem 1

Translate M(3, -4) using `(x, y) -> (x - 5, y + 6)`.

<details>
<summary>Hint 1</summary>

Apply the x-change and y-change separately.
</details>

<details>
<summary>Hint 2</summary>

Compute `3 - 5` and `-4 + 6`.
</details>

<details>
<summary>Show solution</summary>

`3 - 5 = -2` and `-4 + 6 = 2`, so M'(-2, 2).
</details>

### Guided Problem 2

Point Q(-1, 7) is translated 4 units right and 9 units down. Write the rule and the image point.

<details>
<summary>Hint 1</summary>

Right changes x by `+4`. Down changes y by `-9`.
</details>

<details>
<summary>Hint 2</summary>

Use `(x, y) -> (x + 4, y - 9)`.
</details>

<details>
<summary>Show solution</summary>

The rule is `(x, y) -> (x + 4, y - 9)`. The image is Q'(3, -2).
</details>

### Guided Problem 3

A point R(6, -2) maps to R'(1, 1). What translation rule was used?

<details>
<summary>Hint 1</summary>

Find `x' - x` and `y' - y`.
</details>

<details>
<summary>Hint 2</summary>

`1 - 6 = -5` and `1 - (-2) = 3`.
</details>

<details>
<summary>Show solution</summary>

The rule is `(x, y) -> (x - 5, y + 3)`.
</details>

## Mini-Quiz

Answer these before opening the solution.

1. What movement does `(x, y) -> (x + 8, y)` describe?
2. Translate A(0, -3) using `(x, y) -> (x - 2, y + 5)`.
3. If C(4, 1) maps to C'(4, -6), what changed?
4. Does a translation change the size of a figure?

<details>
<summary>Reveal mini-quiz answers</summary>

1. Move 8 units right.
2. A'(-2, 2).
3. The y-coordinate decreased by 7, so the movement is 7 units down.
4. No. A translation preserves size and shape.
</details>

## Independent Practice

Try these on your own.

1. Translate P(5, 2) using `(x, y) -> (x - 4, y + 1)`.
2. Translate K(-6, -3) using `(x, y) -> (x + 7, y + 5)`.
3. Write the rule for a translation 9 units left and 2 units down.
4. Point T(2, -8) maps to T'(10, -8). Write the rule.
5. Triangle ABC has A(1, 1), B(4, 1), and C(2, 5). Apply `(x, y) -> (x - 3, y - 2)`.
6. A segment has endpoints L(-2, 6) and M(3, 6). Translate it 4 units right and 6 units down.
7. A point maps from H(-4, -1) to H'(-7, 5). What is the translation rule?
8. A student says `(x, y) -> (x + 2, y - 3)` moves left 2 and down 3. Is the student correct?

## Answer Key with Explanations

<details>
<summary>Reveal answer key</summary>

1. P'(1, 3), because `5 - 4 = 1` and `2 + 1 = 3`.
2. K'(1, 2), because `-6 + 7 = 1` and `-3 + 5 = 2`.
3. `(x, y) -> (x - 9, y - 2)`.
4. `(x, y) -> (x + 8, y)`, because only x increases by 8.
5. A'(-2, -1), B'(1, -1), C'(-1, 3).
6. L'(2, 0) and M'(7, 0).
7. `(x, y) -> (x - 3, y + 6)`.
8. No. `x + 2` means right 2, not left 2. The rule moves right 2 and down 3.
</details>

## Misconception Alerts

> [!WARNING] Misconception 1
>
> `x + 4` means move right 4, not left 4. The sign tells the coordinate change.

> [!WARNING] Misconception 2
>
> A translation moves every point by the same rule. Do not use one rule for one vertex and a different rule for another vertex.

> [!WARNING] Misconception 3
>
> A translated figure should keep the same size, shape, and orientation. If the image is flipped, rotated, or stretched, it is not only a translation.

## Error Analysis

A student translated A(-3, 2) using `(x, y) -> (x + 5, y - 4)` and wrote A'(2, 6).

What is the mistake?

<details>
<summary>Reveal mistake explanation and correction</summary>

The x-coordinate is correct: `-3 + 5 = 2`.

The y-coordinate should decrease by 4, not increase by 4. `2 - 4 = -2`.

Correct image: **A'(2, -2)**.
</details>

## Self-Explanation Prompts

Use these to check your reasoning.

1. How can you tell from a rule whether the translation moves left or right?
2. Why does every vertex of a translated polygon use the same coordinate rule?
3. How can you find a translation rule if you know a point and its image?
4. What stays the same after a translation?

<details>
<summary>Reveal sample responses</summary>

1. I look at the change to x. Adding to x moves right, and subtracting from x moves left.
2. A translation is one slide of the whole figure, so all vertices move the same distance and direction.
3. I subtract original coordinates from image coordinates: `x' - x` and `y' - y`.
4. The size, shape, side lengths, angle measures, and orientation stay the same.
</details>

## Extension Challenge

Triangle JKL has J(-2, 1), K(1, 4), and L(3, -1). After a translation, J' is at (4, -3).

1. Write the translation rule.
2. Find K' and L'.
3. Explain how you can check whether your image triangle is reasonable.

<details>
<summary>Reveal hint</summary>

Start with J and J'. Compare `4 - (-2)` and `-3 - 1`.
</details>

<details>
<summary>Reveal solution</summary>

1. From J to J', the movement is 6 right and 4 down, so the rule is `(x, y) -> (x + 6, y - 4)`.
2. K'(7, 0) and L'(9, -5).
3. The image is reasonable if every vertex moved 6 units right and 4 units down and the triangle kept the same shape and orientation.
</details>

## Mastery Checklist

Check whether each statement feels true for you.

- I can describe a translation as a slide.
- I can explain the difference between a preimage and an image.
- I can read a rule like `(x, y) -> (x - 2, y + 5)`.
- I can apply a translation rule to one point.
- I can apply a translation rule to every vertex of a polygon.
- I can write a translation rule from a point and its image.
- I can graph a preimage and image accurately.
- I can explain why translations preserve size, shape, and orientation.

> [!PRACTICE] Next Step
>
> Use the practice exam for quick coordinate-rule fluency. Then use the assessment when you are ready to identify, apply, and explain translations in new situations.

## Final Summary

A **translation** is a slide. It moves every point the same distance and direction.

Use the rule:

$$ (x, y) \rightarrow (x + a, y + b) $$

The `a` value changes the horizontal position. The `b` value changes the vertical position. To translate a polygon, apply the same rule to every vertex, then graph the image points.
