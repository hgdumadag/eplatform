# Statistics - Lesson 7: Deciles and Percentiles

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to calculate deciles and percentiles from ungrouped data, use locator positions correctly, and interpret what each position measure says about a data set.

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 45 minutes |
| Difficulty | Intermediate |
| Main skill | Finding and interpreting deciles and percentiles in ordered data |
| Tools | Pencil, calculator, scratch paper, and a ruler or number line if helpful |

<!-- visual-assets:start -->

## Visual Study Set

Use these diagrams as anchors while you work through the lesson.

![Ordered data ladder with ten student scores marked from lowest to highest](/content/grade-10/math/quarter-2/topic-statistics-lesson-7-deciles-and-percentiles/images/ordered-data-ladder.svg)

![Decile strip dividing a data set into ten equal position regions](/content/grade-10/math/quarter-2/topic-statistics-lesson-7-deciles-and-percentiles/images/decile-strip.svg)

![Percentile ruler from P10 to P90 showing relative position](/content/grade-10/math/quarter-2/topic-statistics-lesson-7-deciles-and-percentiles/images/percentile-ruler.svg)

![Locator method showing a percentile position between two ordered values](/content/grade-10/math/quarter-2/topic-statistics-lesson-7-deciles-and-percentiles/images/locator-interpolation.svg)

![Context interpretation card connecting a percentile value to a student score report](/content/grade-10/math/quarter-2/topic-statistics-lesson-7-deciles-and-percentiles/images/interpretation-card.svg)

<!-- visual-assets:end -->

## What You Should Already Know

Before starting, make sure these skills feel familiar:

- Arrange numerical data from least to greatest.
- Count the number of data values in a set.
- Read ordinal positions such as 1st, 2nd, and 3rd.
- Convert fractions to decimals when needed.
- Write a short sentence explaining what a computed value means.

### Pre-check / Readiness Quiz

Try these before reading the rest of the lesson.

1. Order the data: \(18, 12, 21, 15, 30\).
2. In the ordered list \(4, 7, 9, 12, 18\), what is the 4th value?
3. If a locator is \(3.5\), between which two positions does it fall?
4. Why is the sentence "The answer is 72" incomplete in statistics?

<details>
<summary>Reveal pre-check answers</summary>

1. \(12, 15, 18, 21, 30\)
2. The 4th value is \(12\).
3. It falls between the 3rd and 4th positions.
4. A number needs context. The answer should explain what \(72\) measures or represents.

If more than one item felt uncertain, review ordering data and reading positions before continuing.
</details>

## Key Vocabulary

| Term | Meaning |
|---|---|
| Ordered data | Data arranged from least to greatest |
| Measure of position | A statistic that describes where a value falls within an ordered data set |
| Decile | One of nine cut points that divide ordered data into ten equal position regions |
| Percentile | A position measure that divides ordered data into one hundred equal position regions |
| Locator | The computed position used to find a decile or percentile in an ordered list |
| Interpolation | Estimating between two ordered data values when the locator is not a whole number |

> [!TARGET] Target Skill
>
> Always order the data first. Then compute the locator, read the correct position, and interpret the value in context.

## Visual Introduction: Position Is the Main Idea

Suppose these are quiz scores from 10 students:

$$
42,\ 55,\ 61,\ 66,\ 70,\ 74,\ 79,\ 85,\ 91,\ 96
$$

The data are already ordered. A percentile or decile does not simply ask, "What is the average?" It asks, "Where is a cut point in the ordered group?"

![Ordered data ladder with ten student scores marked from lowest to highest](/content/grade-10/math/quarter-2/topic-statistics-lesson-7-deciles-and-percentiles/images/ordered-data-ladder.svg)

For example, a value near \(P_{70}\) is higher than about 70% of the ordered positions. That does not automatically mean exactly 70% of the class scored below it, because different textbooks use slightly different locator rules. In this lesson, use the locator rule shown below.

> [!IMPORTANT] Lesson Convention
>
> For ungrouped data in this lesson, use \(L = \frac{k(n+1)}{100}\) for percentile \(P_k\). Since decile \(D_k\) is the same as percentile \(P_{10k}\), use \(L = \frac{k(n+1)}{10}\) for decile \(D_k\).

## Main Concept 1: Deciles

Deciles divide ordered data into ten position regions.

| Decile | Equivalent percentile | Meaning |
|---|---:|---|
| \(D_1\) | \(P_{10}\) | near the 10th percentile |
| \(D_2\) | \(P_{20}\) | near the 20th percentile |
| \(D_5\) | \(P_{50}\) | the median position |
| \(D_9\) | \(P_{90}\) | near the 90th percentile |

![Decile strip dividing a data set into ten equal position regions](/content/grade-10/math/quarter-2/topic-statistics-lesson-7-deciles-and-percentiles/images/decile-strip.svg)

For \(n\) data values:

$$
L = \frac{k(n+1)}{10}
$$

where \(k\) is the decile number.

If \(L\) is a whole number, use that ordered position. If \(L\) is not a whole number, interpolate between the two nearest positions.

## Main Concept 2: Percentiles

Percentiles divide ordered data into one hundred position regions.

![Percentile ruler from P10 to P90 showing relative position](/content/grade-10/math/quarter-2/topic-statistics-lesson-7-deciles-and-percentiles/images/percentile-ruler.svg)

For \(P_k\):

$$
L = \frac{k(n+1)}{100}
$$

where:

- \(k\) is the percentile number, such as \(25\), \(60\), or \(90\)
- \(n\) is the number of data values
- \(L\) is the locator position in the ordered list

> [!TIP] Decile-Percentile Shortcut
>
> Deciles are percentiles counted by tens. \(D_3 = P_{30}\), \(D_6 = P_{60}\), and \(D_9 = P_{90}\).

## Worked Example: Find \(D_7\)

**Problem:** The ordered scores below show the number of points earned by 9 students on a statistics task.

$$
48,\ 52,\ 56,\ 63,\ 68,\ 71,\ 75,\ 82,\ 90
$$

Find \(D_7\), then interpret the result.

**Step 1: Identify the decile and number of values.**

The problem asks for \(D_7\), so \(k = 7\). There are \(n = 9\) data values.

**Step 2: Compute the locator.**

$$
L = \frac{k(n+1)}{10}
$$

$$
L = \frac{7(9+1)}{10} = \frac{70}{10} = 7
$$

**Step 3: Read the ordered position.**

The 7th value is \(75\).

**Step 4: Interpret.**

> [!EXAMPLE] Complete Answer
>
> \(D_7 = 75\). This means the seventh decile score is 75 points, so about 70% of the ordered score positions are at or below this cut point.

## Worked Example: Find \(P_{65}\) with Interpolation

**Problem:** Use the same ordered scores.

$$
48,\ 52,\ 56,\ 63,\ 68,\ 71,\ 75,\ 82,\ 90
$$

Find \(P_{65}\).

**Step 1: Compute the locator.**

$$
L = \frac{65(9+1)}{100} = \frac{650}{100} = 6.5
$$

**Step 2: Locate the two surrounding positions.**

Position \(6.5\) lies halfway between the 6th and 7th values.

- 6th value: \(71\)
- 7th value: \(75\)

![Locator method showing a percentile position between two ordered values](/content/grade-10/math/quarter-2/topic-statistics-lesson-7-deciles-and-percentiles/images/locator-interpolation.svg)

**Step 3: Interpolate.**

Halfway from \(71\) to \(75\) is:

$$
71 + 0.5(75-71) = 71 + 2 = 73
$$

So \(P_{65} = 73\).

> [!CHECK] Meaning Check
>
> \(P_{65}=73\) is not one student's exact score in the list. It is a position cut point estimated between the 6th and 7th ordered values.

## Interpretation: Say What the Number Means

A decile or percentile answer is incomplete if it stops at the calculation.

![Context interpretation card connecting a percentile value to a student score report](/content/grade-10/math/quarter-2/topic-statistics-lesson-7-deciles-and-percentiles/images/interpretation-card.svg)

Use this sentence frame:

> In this data set, \(P_k = \_\_\_\), so about \(k\)% of the ordered positions are at or below \_\_\_\.

For deciles, translate the decile into a percentile first:

> \(D_8 = P_{80}\), so the eighth decile is the cut point near the 80th percentile.

## Guided Practice

Use this ordered data set for all three guided problems:

$$
35,\ 40,\ 44,\ 50,\ 58,\ 62,\ 69,\ 73,\ 81,\ 88,\ 94
$$

### Guided Problem 1: Find \(D_4\)

<details>
<summary>Hint 1</summary>

For a decile, use \(L = \frac{k(n+1)}{10}\).
</details>

<details>
<summary>Hint 2</summary>

Here, \(k=4\) and \(n=11\), so \(L = \frac{4(12)}{10}=4.8\).
</details>

<details>
<summary>Answer</summary>

Position \(4.8\) is between the 4th value \(50\) and 5th value \(58\). Move \(0.8\) of the way from \(50\) to \(58\):

$$
50 + 0.8(58-50)=56.4
$$

So \(D_4 = 56.4\). This is the cut point near the 40th percentile.
</details>

### Guided Problem 2: Find \(P_{25}\)

<details>
<summary>Hint 1</summary>

Use \(L = \frac{k(n+1)}{100}\).
</details>

<details>
<summary>Hint 2</summary>

\(L = \frac{25(12)}{100}=3\).
</details>

<details>
<summary>Answer</summary>

The locator is exactly \(3\), so \(P_{25}\) is the 3rd value. Therefore, \(P_{25}=44\).
</details>

### Guided Problem 3: Interpret \(P_{75}=78\)

<details>
<summary>Hint 1</summary>

Percentile \(75\) means about 75% of ordered positions are at or below the cut point.
</details>

<details>
<summary>Answer</summary>

In this data set, \(P_{75}=78\), so about 75% of the ordered score positions are at or below 78.
</details>

## Mini-Quiz

Answer before checking the key.

1. What must you do before finding any decile or percentile?
2. Which percentile is the same as \(D_6\)?
3. For \(n=14\), what is the locator for \(P_{40}\)?
4. If \(L=5.25\), between which two positions does the percentile fall?
5. True or false: A percentile value must always be one of the original data values.

<details>
<summary>Reveal mini-quiz answers</summary>

1. Order the data from least to greatest.
2. \(D_6 = P_{60}\).
3. \(L = \frac{40(15)}{100}=6\).
4. It falls between the 5th and 6th positions.
5. False. Interpolation can produce a value between two data values.
</details>

## Independent Practice

Use this data set:

$$
22,\ 27,\ 30,\ 34,\ 39,\ 45,\ 50,\ 56,\ 61,\ 70
$$

1. Find \(D_3\).
2. Find \(D_8\).
3. Find \(P_{20}\).
4. Find \(P_{50}\).
5. Find \(P_{90}\).
6. Explain why \(D_5\) and \(P_{50}\) name the same position.
7. A student says \(P_{60}=45\) because 45 is the 6th value. Explain the mistake.
8. Write a complete interpretation for \(P_{80}=60\) in the context of test scores.

## Answer Key with Explanations

1. \(D_3\): \(L=\frac{3(11)}{10}=3.3\). Between the 3rd value \(30\) and 4th value \(34\): \(30+0.3(4)=31.2\).
2. \(D_8\): \(L=\frac{8(11)}{10}=8.8\). Between the 8th value \(56\) and 9th value \(61\): \(56+0.8(5)=60\).
3. \(P_{20}\): \(L=\frac{20(11)}{100}=2.2\). Between \(27\) and \(30\): \(27+0.2(3)=27.6\).
4. \(P_{50}\): \(L=\frac{50(11)}{100}=5.5\). Halfway between \(39\) and \(45\): \(42\).
5. \(P_{90}\): \(L=\frac{90(11)}{100}=9.9\). Between \(61\) and \(70\): \(61+0.9(9)=69.1\).
6. \(D_5\) is the fifth decile, which equals \(P_{50}\), the 50th percentile.
7. The student treated the percentile number as a direct position. The locator is \(L=\frac{60(11)}{100}=6.6\), so \(P_{60}\) lies between the 6th and 7th values.
8. Sample: In this group of test scores, \(P_{80}=60\), so about 80% of the ordered score positions are at or below 60.

## Misconception Alerts

> [!WARNING] Misconception 1: "The percentile number is the position number."
>
> \(P_{60}\) does not automatically mean the 60th value. You must calculate the locator using \(L=\frac{k(n+1)}{100}\).

> [!WARNING] Misconception 2: "The data do not need to be ordered."
>
> Deciles and percentiles are position measures. If the data are not ordered, the positions will be wrong.

> [!WARNING] Misconception 3: "The final answer is only a number."
>
> A strong statistics answer includes the value and its meaning in the context of the data.

> [!WARNING] Misconception 4: "Interpolation is guessing."
>
> Interpolation is a controlled estimate between two ordered values. The decimal part of the locator tells how far to move.

## Error Analysis

A student works with this ordered data set:

$$
10,\ 14,\ 18,\ 24,\ 30,\ 36,\ 40,\ 46,\ 52
$$

The student writes:

> "For \(P_{70}\), I used the 7th value, so \(P_{70}=40\)."

**Find the mistake:** The student did not compute the locator. With \(n=9\),

$$
L=\frac{70(10)}{100}=7
$$

In this specific case the locator happens to be exactly 7, so the value is correct, but the reasoning is incomplete. It would fail for many other percentiles, such as \(P_{65}\), where \(L=6.5\).

**Correct reasoning:** Compute the locator first, then use the ordered position. For \(P_{70}\), \(L=7\), so \(P_{70}=40\).

## Self-Explanation Prompts

Answer these in your own words.

1. Why does ordering the data come before using the formula?
2. How can you tell whether a locator needs interpolation?
3. Why is \(D_4\) the same position as \(P_{40}\)?
4. What should your interpretation sentence include besides the value?

## Mastery Checklist

Check each statement when you can do it confidently.

- I can order a data set before finding position measures.
- I can use \(L=\frac{k(n+1)}{10}\) to find a decile locator.
- I can use \(L=\frac{k(n+1)}{100}\) to find a percentile locator.
- I can interpolate when a locator is not a whole number.
- I can explain the relationship between deciles and percentiles.
- I can write a context-based interpretation of a decile or percentile.

> [!PRACTICE] Practice Plan
>
> Use the practice exam for quick skill checks on locators, interpolation, and interpretation. Then use the assessment when you can solve mixed decile and percentile questions without looking back at the formula box.
