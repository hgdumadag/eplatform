# Statistics - Lesson 4: Outliers

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to identify possible outliers using the \(1.5 \times \text{IQR}\) rule and explain how an outlier can change a statistical conclusion.

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 45 minutes |
| Difficulty | Intermediate |
| Main skill | Finding fences, flagging possible outliers, and interpreting their effect |
| Tools | Pencil, calculator, and scratch paper |

<!-- visual-assets:start -->

## Visual Study Set

Use these diagrams as anchors while you work through the lesson.

![Dot plot of delivery times with one unusually high value](/content/grade-10/math/quarter-2/topic-statistics-lesson-4-outliers/images/lesson-visual.svg)

![Box plot showing quartiles, IQR, and a separated outlier](/content/grade-10/math/quarter-2/topic-statistics-lesson-4-outliers/images/iqr-boxplot.svg)

![Number line showing lower fence and upper fence](/content/grade-10/math/quarter-2/topic-statistics-lesson-4-outliers/images/fence-number-line.svg)

![Comparison of mean and median with and without an outlier](/content/grade-10/math/quarter-2/topic-statistics-lesson-4-outliers/images/mean-median-impact.svg)

![Decision flow for checking whether a data value is a possible outlier](/content/grade-10/math/quarter-2/topic-statistics-lesson-4-outliers/images/outlier-decision-flow.svg)

<!-- visual-assets:end -->

## What You Should Already Know

Before starting, make sure these skills feel familiar:

- Order data from least to greatest.
- Find the median of a data set.
- Split ordered data into lower and upper halves.
- Find \(Q_1\), \(Q_3\), and the interquartile range.
- Explain what a statistic means in a real situation.

> [!CHECK] Pre-Check
>
> Try these before reading the rest of the lesson.

1. Order the values: \(18, 9, 14, 11, 30\).
2. What is the median of \(6, 8, 10, 12, 14\)?
3. If \(Q_1 = 12\) and \(Q_3 = 20\), what is the IQR?
4. Which statistic is usually pulled more strongly by an extreme value: mean or median?

<details>
<summary>Reveal pre-check answers</summary>

1. \(9, 11, 14, 18, 30\)
2. The median is \(10\).
3. \(\text{IQR} = 20 - 12 = 8\).
4. The mean is usually pulled more strongly by an extreme value.

If more than one item felt uncertain, review ordering data, medians, quartiles, and IQR before continuing.
</details>

## Key Vocabulary

| Term | Meaning |
|---|---|
| Outlier | A data value that is unusually far from the rest of the data |
| Possible outlier | A value flagged by a rule, such as the \(1.5 \times \text{IQR}\) rule |
| Quartile 1, \(Q_1\) | The median of the lower half of an ordered data set |
| Quartile 3, \(Q_3\) | The median of the upper half of an ordered data set |
| Interquartile range, IQR | The spread of the middle half of the data: \(Q_3 - Q_1\) |
| Lower fence | \(Q_1 - 1.5(\text{IQR})\) |
| Upper fence | \(Q_3 + 1.5(\text{IQR})\) |
| Resistant statistic | A statistic, such as the median or IQR, that is not strongly affected by extreme values |

> [!TARGET] Target Skill
>
> Use the fences to decide whether a value is unusually low or high. Then explain what that value does to the story told by the data.

## Visual Introduction: One Value Can Change the Story

A school club records delivery times, in minutes, for eight supply runs:

$$
18,\ 20,\ 21,\ 22,\ 24,\ 25,\ 26,\ 55
$$

Most runs took between \(18\) and \(26\) minutes. One run took \(55\) minutes because of heavy traffic.

![Dot plot of delivery times with one unusually high value](/content/grade-10/math/quarter-2/topic-statistics-lesson-4-outliers/images/lesson-visual.svg)

The \(55\)-minute value matters. It is real data, but it may not describe a typical delivery. Outlier work helps you decide when to flag a value and how careful your conclusion should be.

> [!IMPORTANT] Core Idea
>
> An outlier is not automatically an error. It is a signal to investigate. Ask: Is it a recording mistake, a special condition, or an important rare case?

## Main Concept 1: The IQR Measures the Middle Spread

The interquartile range focuses on the middle half of the data.

$$
\text{IQR} = Q_3 - Q_1
$$

In a box plot, the box stretches from \(Q_1\) to \(Q_3\). That box shows the middle \(50\%\) of the data.

![Box plot showing quartiles, IQR, and a separated outlier](/content/grade-10/math/quarter-2/topic-statistics-lesson-4-outliers/images/iqr-boxplot.svg)

Because IQR ignores the lowest and highest quarters when measuring spread, it is useful for detecting values that sit far outside the main cluster.

## Main Concept 2: The \(1.5 \times \text{IQR}\) Rule

Use these formulas:

$$
\text{Lower fence} = Q_1 - 1.5(\text{IQR})
$$

$$
\text{Upper fence} = Q_3 + 1.5(\text{IQR})
$$

Then compare the data values with the fences.

| If a value is... | Then it is... |
|---|---|
| Less than the lower fence | A possible low outlier |
| Between the fences | Not flagged by the rule |
| Greater than the upper fence | A possible high outlier |

![Number line showing lower fence and upper fence](/content/grade-10/math/quarter-2/topic-statistics-lesson-4-outliers/images/fence-number-line.svg)

> [!TIP] Fence Check
>
> The fences are not usually data values. They are cutoffs. Compare each actual data value to the cutoffs.

## Worked Example: Flag a Possible Outlier

**Problem:** Use the \(1.5 \times \text{IQR}\) rule to check for possible outliers.

$$
18,\ 20,\ 21,\ 22,\ 24,\ 25,\ 26,\ 55
$$

**Step 1: Confirm the data are ordered.**

The values are already in order.

**Step 2: Find \(Q_1\) and \(Q_3\).**

There are \(8\) values, so split into two halves:

Lower half: \(18,\ 20,\ 21,\ 22\)

Upper half: \(24,\ 25,\ 26,\ 55\)

$$
Q_1 = \frac{20 + 21}{2} = 20.5
$$

$$
Q_3 = \frac{25 + 26}{2} = 25.5
$$

**Step 3: Find the IQR.**

$$
\text{IQR} = 25.5 - 20.5 = 5
$$

**Step 4: Find the fences.**

$$
\text{Lower fence} = 20.5 - 1.5(5) = 20.5 - 7.5 = 13
$$

$$
\text{Upper fence} = 25.5 + 1.5(5) = 25.5 + 7.5 = 33
$$

**Step 5: Compare the data values with the fences.**

All values except \(55\) are between \(13\) and \(33\). Since \(55 > 33\), \(55\) is a possible high outlier.

> [!EXAMPLE] Complete Answer
>
> The upper fence is \(33\), and \(55\) is greater than \(33\). The \(55\)-minute delivery is a possible outlier, so a claim about a typical delivery should mention that one delivery was unusually long.

## Main Concept 3: How Outliers Affect Conclusions

Outliers often affect the mean more than the median.

For the delivery data:

| Data used | Mean | Median |
|---|---:|---:|
| With \(55\) included | \(26.4\) minutes | \(23\) minutes |
| Without \(55\) | \(22.3\) minutes | \(22\) minutes |

![Comparison of mean and median with and without an outlier](/content/grade-10/math/quarter-2/topic-statistics-lesson-4-outliers/images/mean-median-impact.svg)

The mean jumps by about \(4\) minutes when \(55\) is included. The median changes by only \(1\) minute.

> [!WARNING] Interpretation Trap
>
> Do not delete an outlier just because it is inconvenient. First decide whether it is a mistake, a special case, or a meaningful extreme value. Then report how it affects the conclusion.

## Outlier Decision Flow

Use this quick process each time.

![Decision flow for checking whether a data value is a possible outlier](/content/grade-10/math/quarter-2/topic-statistics-lesson-4-outliers/images/outlier-decision-flow.svg)

1. Order the data.
2. Find \(Q_1\), \(Q_3\), and IQR.
3. Compute the lower and upper fences.
4. Compare every data value with the fences.
5. Interpret what any flagged value means in context.

## Guided Practice

### Guided Problem 1: Find the Fences

Use the data set:

$$
12,\ 14,\ 15,\ 17,\ 18,\ 20,\ 21,\ 40
$$

Find \(Q_1\), \(Q_3\), IQR, and the fences.

<details>
<summary>Hint 1</summary>

Split the ordered data into \(12,14,15,17\) and \(18,20,21,40\).
</details>

<details>
<summary>Hint 2</summary>

\(Q_1\) and \(Q_3\) are the medians of those two halves.
</details>

<details>
<summary>Answer</summary>

\(Q_1 = 14.5\), \(Q_3 = 20.5\), and \(\text{IQR} = 6\). The lower fence is \(14.5 - 9 = 5.5\), and the upper fence is \(20.5 + 9 = 29.5\).
</details>

### Guided Problem 2: Decide Whether a Value Is an Outlier

Using the same data set, is \(40\) a possible outlier?

<details>
<summary>Hint</summary>

Compare \(40\) with the upper fence from Guided Problem 1.
</details>

<details>
<summary>Answer</summary>

Yes. Since \(40 > 29.5\), \(40\) is a possible high outlier.
</details>

### Guided Problem 3: Interpret the Result

A learner says, "The average time is high, so most times were high." What should you add?

<details>
<summary>Hint</summary>

Think about the difference between the mean and the typical cluster.
</details>

<details>
<summary>Answer</summary>

The conclusion should mention that \(40\) is a possible outlier. The mean may be pulled upward, so the median or the main cluster may better describe a typical time.
</details>

## Mini-Quiz

Answer before looking back.

1. What formula gives the IQR?
2. What formula gives the upper fence?
3. If a value is greater than the upper fence, what is it called?
4. Which is usually more resistant to outliers: mean or median?
5. Why should a conclusion mention context?

<details>
<summary>Mini-quiz answers</summary>

1. \(\text{IQR} = Q_3 - Q_1\)
2. \(\text{Upper fence} = Q_3 + 1.5(\text{IQR})\)
3. A possible high outlier
4. Median
5. Context tells what the outlier represents and whether it changes the claim being made.
</details>

## Independent Practice

Complete these before checking the answer key.

Use the data set below for questions 1-6.

$$
6,\ 7,\ 8,\ 8,\ 9,\ 10,\ 11,\ 28
$$

1. Identify the lower half and upper half.
2. Find \(Q_1\) and \(Q_3\).
3. Find the IQR.
4. Find the lower fence and upper fence.
5. Identify any possible outlier.
6. Write one sentence explaining how the possible outlier affects the conclusion.
7. Explain why the median is often better than the mean when a data set has a high outlier.
8. Create a data set of six values with one possible high outlier, then explain why it is unusual.

## Answer Key with Explanations

1. Lower half: \(6,7,8,8\). Upper half: \(9,10,11,28\). Splitting the data helps locate quartiles.
2. \(Q_1 = \frac{7+8}{2} = 7.5\) and \(Q_3 = \frac{10+11}{2} = 10.5\).
3. \(\text{IQR} = 10.5 - 7.5 = 3\).
4. Lower fence: \(7.5 - 1.5(3) = 3\). Upper fence: \(10.5 + 1.5(3) = 15\).
5. \(28\) is a possible high outlier because \(28 > 15\).
6. Sample: The value \(28\) may pull the mean upward, so a typical value is better described by the cluster from \(6\) to \(11\).
7. The median uses position, so one extreme value usually does not move it very much.
8. Sample: \(4,5,5,6,7,20\). The value \(20\) is far from the cluster near \(4\) to \(7\), and the fence rule can be used to check it formally.

## Misconception Alerts

> [!WARNING] Misconception 1: "Any large number is an outlier."
>
> A value is not flagged just because it looks large. Use the fences and compare it with the rest of the data.

> [!WARNING] Misconception 2: "The fences are the quartiles."
>
> \(Q_1\) and \(Q_3\) mark the box. The fences are farther out: \(Q_1 - 1.5(\text{IQR})\) and \(Q_3 + 1.5(\text{IQR})\).

> [!WARNING] Misconception 3: "Outliers should always be removed."
>
> A flagged value should be investigated. It may be an error, but it may also be a real and important part of the situation.

## Error Analysis

A student writes:

> "The IQR is \(25.5 - 20.5 = 5\), so any value greater than \(5\) is an outlier."

**Find the mistake:** The student used the IQR as the cutoff.

**Correct reasoning:** Use the IQR to compute fences. For the delivery data, the fences are \(13\) and \(33\). Only values below \(13\) or above \(33\) are flagged.

## Self-Explanation Prompts

Answer these in your own words.

1. Why do you order the data before finding quartiles?
2. How does the IQR help describe the middle spread?
3. What does it mean when a value is outside a fence?
4. How can an outlier affect the mean, median, or conclusion?
5. What question should you ask before removing a possible outlier?

**Sample Responses**

1. Ordering the data shows the middle and the two halves clearly.
2. The IQR measures the distance from \(Q_1\) to \(Q_3\), which is the spread of the middle half.
3. The rule flags it as unusually low or high compared with the rest of the data.
4. It can pull the mean toward the extreme value and make a conclusion about "typical" values less accurate.
5. I should ask whether the value is a mistake, a special condition, or a real result that needs to be reported.

## Mastery Checklist

Check each statement when you can do it confidently.

- I can order data and split it into lower and upper halves.
- I can find \(Q_1\), \(Q_3\), and IQR.
- I can compute lower and upper fences.
- I can identify possible low and high outliers.
- I can explain how an outlier affects a conclusion.
- I can decide whether mean or median better describes the typical value.

> [!PRACTICE] What To Do Next
>
> Use the practice exam for quick checks on vocabulary, quartiles, fences, and interpretation. Use the assessment when you are ready to solve full outlier problems and justify conclusions from data.

## Final Summary

Outlier analysis is a blend of calculation and judgment. The \(1.5 \times \text{IQR}\) rule gives a consistent way to flag unusual values, but the final conclusion must explain what the value means in context.
