# Statistics - Lesson 3: Interquartile Range

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to **calculate and interpret interquartile range as the spread of the middle 50 percent of data.**

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 45 minutes |
| Difficulty | Intermediate |
| Main skill | Finding \(Q_1\), \(Q_3\), and \(IQR = Q_3 - Q_1\) |
| Tools | Paper, pencil, calculator when values are large |

<!-- visual-assets:start -->

## Visual Study Set

Use these diagrams as anchors while you study. They show how the IQR focuses on the middle half of an ordered data set.

![Interquartile range overview](/content/grade-10/math/quarter-2/topic-statistics-lesson-3-interquartile-range/images/lesson-visual.svg)

![Ordered data with quartiles marked](/content/grade-10/math/quarter-2/topic-statistics-lesson-3-interquartile-range/images/quartile-split.svg)

![Number line showing Q1, median, Q3, and IQR](/content/grade-10/math/quarter-2/topic-statistics-lesson-3-interquartile-range/images/iqr-number-line.svg)

![Box plot highlighting the middle 50 percent](/content/grade-10/math/quarter-2/topic-statistics-lesson-3-interquartile-range/images/middle-50-box.svg)

![Two data sets compared by IQR](/content/grade-10/math/quarter-2/topic-statistics-lesson-3-interquartile-range/images/compare-spread.svg)

![IQR fences showing possible outliers](/content/grade-10/math/quarter-2/topic-statistics-lesson-3-interquartile-range/images/fence-outlier-preview.svg)

<!-- visual-assets:end -->

## What You Should Already Know

Before studying interquartile range, make sure these ideas feel familiar:

- Data values should be arranged from least to greatest before finding quartiles.
- The median is the middle value of an ordered data set.
- \(Q_1\) is the median of the lower half of the data.
- \(Q_3\) is the median of the upper half of the data.
- A spread tells how far apart values are.

> [!CHECK] Pre-Check
>
> Try these first. Then reveal the answers.

1. Order the values: \(18, 10, 14, 22, 12\).
2. What is the median of \(4, 6, 8, 10, 12\)?
3. What is \(19 - 7\)?
4. In the ordered set \(2, 5, 7, 9, 11\), which values are below the median?

<details>
<summary>Reveal pre-check answers</summary>

1. \(10, 12, 14, 18, 22\).
2. The median is \(8\).
3. \(19 - 7 = 12\).
4. The values below the median are \(2\) and \(5\). The median \(7\) is not included in either half when there is an odd number of values.

If you missed more than one item, briefly review ordering data and finding medians before continuing.
</details>

## Key Vocabulary

| Term | Meaning |
|---|---|
| Quartile | A point that divides ordered data into four roughly equal parts |
| First quartile, \(Q_1\) | The median of the lower half of an ordered data set |
| Third quartile, \(Q_3\) | The median of the upper half of an ordered data set |
| Interquartile range, IQR | The distance between \(Q_1\) and \(Q_3\): \(IQR = Q_3 - Q_1\) |
| Middle 50 percent | The data values between \(Q_1\) and \(Q_3\) |
| Spread | How much the data values vary or stretch out |
| Outlier | A value much lower or higher than most of the data |

> [!IMPORTANT] Core Idea
>
> The interquartile range measures the spread of the middle 50 percent of a data set. It ignores the lowest quarter and highest quarter, so it is useful when extreme values might distort the range.

## Try Before You Read

A teacher records the number of minutes students spent on a review task:

\[
8,\ 10,\ 12,\ 14,\ 16,\ 18,\ 20,\ 45
\]

The largest value, 45, is much higher than the rest. Would the full range or the IQR better describe the spread of the typical middle group?

<details>
<summary>Reveal thinking guide</summary>

The full range uses the minimum and maximum, so it is strongly affected by 45. The IQR uses \(Q_1\) and \(Q_3\), so it focuses on the middle half.
</details>

<details>
<summary>Reveal answer</summary>

The IQR better describes the spread of the typical middle group because it is less affected by the unusually high value 45.
</details>

## Visual Introduction

The IQR starts with ordered data. Once the data are in order, split them around the median and find the median of each half.

![Ordered data with quartiles marked](/content/grade-10/math/quarter-2/topic-statistics-lesson-3-interquartile-range/images/quartile-split.svg)

After \(Q_1\) and \(Q_3\) are known, subtract:

\[
IQR = Q_3 - Q_1
\]

The number line below shows the idea as a distance from \(Q_1\) to \(Q_3\).

![Number line showing Q1, median, Q3, and IQR](/content/grade-10/math/quarter-2/topic-statistics-lesson-3-interquartile-range/images/iqr-number-line.svg)

## Main Concept Explanation

### 1. Order the Data

Quartiles describe positions, so the order matters. If the values are not sorted first, the quartiles may be wrong.

For example:

\[
18,\ 11,\ 15,\ 22,\ 13,\ 20,\ 17
\]

becomes

\[
11,\ 13,\ 15,\ 17,\ 18,\ 20,\ 22
\]

### 2. Find the Median and the Two Halves

The median splits the data into a lower half and an upper half.

For an odd number of data values, leave the median out of both halves.

For an even number of data values, split the data into two equal halves.

### 3. Find \(Q_1\), \(Q_3\), and IQR

- \(Q_1\) is the median of the lower half.
- \(Q_3\) is the median of the upper half.
- \(IQR = Q_3 - Q_1\).

> [!TARGET] IQR Formula
>
> \[
> IQR = Q_3 - Q_1
> \]
>
> A small IQR means the middle half is clustered close together. A large IQR means the middle half is more spread out.

### 4. Interpret the IQR

A final answer should not be only a number. Say what the number measures.

Strong interpretation:

> The IQR is 9 minutes, so the middle 50 percent of students' review times vary by 9 minutes.

Weak interpretation:

> The answer is 9.

## Worked Example

### Example: Find and Interpret the IQR

**Problem:** Find the interquartile range of the data set below. The values represent minutes spent on a daily math review.

\[
10,\ 12,\ 12,\ 15,\ 18,\ 20,\ 22,\ 25,\ 28
\]

**Step 1: Check the order.**  
The data are already ordered from least to greatest.

**Step 2: Find the median.**  
There are 9 values, so the 5th value is the median.

\[
10,\ 12,\ 12,\ 15,\ \boxed{18},\ 20,\ 22,\ 25,\ 28
\]

**Step 3: Split the lower and upper halves.**  
Because there are 9 values, do not include the median in either half.

| Lower half | Median | Upper half |
|---|---|---|
| \(10, 12, 12, 15\) | \(18\) | \(20, 22, 25, 28\) |

**Step 4: Find \(Q_1\) and \(Q_3\).**

The lower half has two middle values, 12 and 12, so:

\[
Q_1 = 12
\]

The upper half has two middle values, 22 and 25, so:

\[
Q_3 = \frac{22 + 25}{2} = 23.5
\]

**Step 5: Subtract.**

\[
IQR = Q_3 - Q_1 = 23.5 - 12 = 11.5
\]

> [!EXAMPLE] Complete Answer
>
> The interquartile range is \(11.5\) minutes. This means the middle 50 percent of review times vary by \(11.5\) minutes.

## Why IQR Helps

The box in a box plot represents the IQR. It shows the middle half of the data at a glance.

![Box plot highlighting the middle 50 percent](/content/grade-10/math/quarter-2/topic-statistics-lesson-3-interquartile-range/images/middle-50-box.svg)

When comparing two groups, the group with the smaller IQR has a more consistent middle half.

![Two data sets compared by IQR](/content/grade-10/math/quarter-2/topic-statistics-lesson-3-interquartile-range/images/compare-spread.svg)

> [!TIP] Phrase To Remember
>
> The IQR is about the middle half, not the whole data set.

## Guided Practice with Revealable Hints

### Guided Problem 1

Find the IQR of:

\[
4,\ 6,\ 8,\ 10,\ 12,\ 14,\ 16
\]

<details>
<summary>Hint 1</summary>

There are 7 values, so the median is the 4th value.
</details>

<details>
<summary>Hint 2</summary>

Leave the median out. The lower half is \(4, 6, 8\), and the upper half is \(12, 14, 16\).
</details>

<details>
<summary>Show solution</summary>

The median is \(10\). The lower-half median is \(Q_1 = 6\). The upper-half median is \(Q_3 = 14\). So \(IQR = 14 - 6 = 8\).
</details>

### Guided Problem 2

Find the IQR of:

\[
9,\ 11,\ 13,\ 15,\ 17,\ 19,\ 21,\ 23
\]

<details>
<summary>Hint 1</summary>

There are 8 values, so split them into two equal halves of 4 values each.
</details>

<details>
<summary>Hint 2</summary>

Lower half: \(9, 11, 13, 15\). Upper half: \(17, 19, 21, 23\).
</details>

<details>
<summary>Show solution</summary>

\[
Q_1 = \frac{11 + 13}{2} = 12
\]

\[
Q_3 = \frac{19 + 21}{2} = 20
\]

\[
IQR = 20 - 12 = 8
\]

The middle 50 percent spans 8 units.
</details>

### Guided Problem 3

Two study groups have these five-number summaries:

| Group | Minimum | \(Q_1\) | Median | \(Q_3\) | Maximum |
|---|---:|---:|---:|---:|---:|
| A | 5 | 9 | 12 | 15 | 28 |
| B | 6 | 8 | 13 | 20 | 24 |

Which group has the more consistent middle 50 percent?

<details>
<summary>Hint 1</summary>

Find each IQR using \(Q_3 - Q_1\).
</details>

<details>
<summary>Hint 2</summary>

The smaller IQR means less spread in the middle 50 percent.
</details>

<details>
<summary>Show solution</summary>

Group A: \(15 - 9 = 6\). Group B: \(20 - 8 = 12\). Group A has the more consistent middle 50 percent because its IQR is smaller.
</details>

## Mini-Quiz

Try these without looking back.

1. What formula is used to find the IQR?
2. Find the IQR when \(Q_1 = 14\) and \(Q_3 = 31\).
3. True or false: The IQR measures the spread of the middle 50 percent of data.
4. For \(3, 5, 7, 9, 11\), what value is left out of the halves when finding quartiles?
5. If Data Set X has IQR 4 and Data Set Y has IQR 11, which middle half is more spread out?

<details>
<summary>Reveal mini-quiz answers</summary>

1. \(IQR = Q_3 - Q_1\).
2. \(31 - 14 = 17\).
3. True.
4. The median, \(7\), is left out.
5. Data Set Y is more spread out because its IQR is larger.
</details>

## Independent Practice

Solve these on paper.

1. Find the IQR of \(2, 4, 6, 8, 10, 12, 14\).
2. Find the IQR of \(5, 7, 9, 11, 13, 15, 17, 19\).
3. Find the IQR of \(18, 12, 30, 24, 16, 21, 27\). Order first.
4. A data set has \(Q_1 = 20\) and \(Q_3 = 35\). Find the IQR.
5. A group has IQR 6 minutes. What does this say about the middle 50 percent?
6. Data Set A has IQR 5. Data Set B has IQR 13. Which set has the more consistent middle 50 percent?
7. Explain why the IQR is less affected by an extreme maximum than the full range is.
8. A student says the IQR of \(4, 8, 10, 12, 20\) is \(20 - 4 = 16\). What mistake did the student make?

## Answer Key with Explanations

<details>
<summary>Reveal independent practice answers</summary>

1. Median \(8\); lower half \(2, 4, 6\), so \(Q_1 = 4\); upper half \(10, 12, 14\), so \(Q_3 = 12\). \(IQR = 12 - 4 = 8\).
2. Lower half \(5, 7, 9, 11\), so \(Q_1 = 8\). Upper half \(13, 15, 17, 19\), so \(Q_3 = 16\). \(IQR = 16 - 8 = 8\).
3. Ordered data: \(12, 16, 18, 21, 24, 27, 30\). Median \(21\); \(Q_1 = 16\); \(Q_3 = 27\). \(IQR = 11\).
4. \(IQR = 35 - 20 = 15\).
5. The middle 50 percent of values vary by 6 minutes.
6. Data Set A is more consistent because its IQR is smaller.
7. The IQR uses \(Q_1\) and \(Q_3\), not the minimum and maximum, so a very high maximum does not directly enter the calculation.
8. The student found the range, not the IQR. The IQR uses \(Q_3 - Q_1\), not maximum minus minimum.
</details>

## Misconception Alerts

> [!WARNING] Misconception 1: "IQR is maximum minus minimum."
>
> Maximum minus minimum is the range. IQR is \(Q_3 - Q_1\), the spread of the middle 50 percent.

> [!WARNING] Misconception 2: "The median always belongs in both halves."
>
> When there is an odd number of values, leave the median out before finding \(Q_1\) and \(Q_3\). This lesson uses that common school convention.

> [!WARNING] Misconception 3: "A bigger IQR means better data."
>
> A bigger IQR only means the middle half is more spread out. Whether that is good depends on the context.

## Error Analysis

A student works with the ordered data set:

\[
6,\ 9,\ 10,\ 11,\ 14,\ 18,\ 30
\]

The student writes:

> \(Q_1 = 9\), \(Q_3 = 18\), so \(IQR = 30 - 6 = 24\).

Find the mistake.

<details>
<summary>Reveal mistake explanation</summary>

The quartiles are reasonable, but the final subtraction is wrong. The student used maximum minus minimum, which is the range. The IQR should be \(Q_3 - Q_1 = 18 - 9 = 9\).
</details>

## IQR and Possible Outliers

In later lessons, IQR can help identify possible outliers. A common rule uses fences:

\[
\text{Lower fence} = Q_1 - 1.5(IQR)
\]

\[
\text{Upper fence} = Q_3 + 1.5(IQR)
\]

Values outside the fences may be outliers.

![IQR fences showing possible outliers](/content/grade-10/math/quarter-2/topic-statistics-lesson-3-interquartile-range/images/fence-outlier-preview.svg)

You do not need to master outlier fences yet. For this lesson, notice that the fences are built from the IQR, so the IQR becomes a tool for judging unusual values.

## Self-Explanation Prompts

Use these prompts to check whether the idea is becoming clear:

1. Why must data be ordered before finding IQR?
2. How do you decide which values belong in the lower half and upper half?
3. What does the IQR measure that the full range does not?
4. Why should an IQR answer include context?

<details>
<summary>Reveal sample responses</summary>

1. Quartiles depend on position, so the data must be ordered.
2. I split the data around the median. If the number of values is odd, I leave the median out of both halves.
3. The IQR measures the spread of the middle 50 percent, while the range measures the spread from the minimum to the maximum.
4. Context tells what the spread describes, such as minutes, scores, costs, or measurements.
</details>

## Extension Challenge

Two teams record completion times, in minutes:

| Team | Ordered times |
|---|---|
| Team Red | \(8, 9, 10, 12, 13, 15, 30\) |
| Team Blue | \(7, 10, 12, 13, 15, 16, 18\) |

Find each IQR and write one sentence comparing the consistency of the middle 50 percent.

<details>
<summary>Reveal solution</summary>

Team Red: median \(12\), lower half \(8, 9, 10\), upper half \(13, 15, 30\), so \(Q_1 = 9\), \(Q_3 = 15\), and \(IQR = 6\).

Team Blue: median \(13\), lower half \(7, 10, 12\), upper half \(15, 16, 18\), so \(Q_1 = 10\), \(Q_3 = 16\), and \(IQR = 6\).

Both teams have the same IQR, so their middle 50 percent has the same spread, even though Team Red has a much higher maximum.
</details>

## Mastery Checklist

Check each statement you can do confidently:

- I can order a data set before finding quartiles.
- I can identify the median and split the data into lower and upper halves.
- I can find \(Q_1\) and \(Q_3\).
- I can calculate \(IQR = Q_3 - Q_1\).
- I can explain the IQR as the spread of the middle 50 percent.
- I can compare two data sets using their IQRs.
- I can avoid confusing IQR with range.

> [!PRACTICE] Practice Plan
>
> Use the practice set for quick IQR calculations and vocabulary checks. Use the assessment when you can find quartiles without looking back and can explain what the IQR means in context.

## Final Summary

The interquartile range is \(Q_3 - Q_1\). It measures how spread out the middle 50 percent of a data set is. Because it uses quartiles instead of the minimum and maximum, it is often a better summary of typical spread when a data set has unusually low or high values.
