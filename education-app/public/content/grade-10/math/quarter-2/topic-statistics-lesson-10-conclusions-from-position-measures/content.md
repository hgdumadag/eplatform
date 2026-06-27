# Statistics - Lesson 10: Conclusions from Position Measures

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to use **quartiles, percentile rank, interquartile range, and statistical displays** to write conclusions that are supported by evidence.

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 45 minutes |
| Difficulty | Intermediate |
| Main skill | Turning position measures into evidence-based conclusions |
| Tools | Pencil, calculator, scratch paper, and a careful reading of the data context |

<!-- visual-assets:start -->

## Visual Study Set

Use these visuals as anchors while you study the lesson.

![Ordered class scores with quartile positions marked](/content/grade-10/math/quarter-2/topic-statistics-lesson-10-conclusions-from-position-measures/images/ordered-scores-quartiles.svg)

![Percentile rank model showing below, equal to, and above groups](/content/grade-10/math/quarter-2/topic-statistics-lesson-10-conclusions-from-position-measures/images/percentile-rank-model.svg)

![Box plot comparing quiz scores for two sections](/content/grade-10/math/quarter-2/topic-statistics-lesson-10-conclusions-from-position-measures/images/box-plot-comparison.svg)

![IQR fence diagram showing a possible outlier](/content/grade-10/math/quarter-2/topic-statistics-lesson-10-conclusions-from-position-measures/images/iqr-outlier-fence.svg)

![Conclusion builder moving from measure to evidence to claim](/content/grade-10/math/quarter-2/topic-statistics-lesson-10-conclusions-from-position-measures/images/conclusion-builder.svg)

<!-- visual-assets:end -->

## What You Should Already Know

Before starting, make sure these skills feel familiar:

- Arrange numbers from least to greatest.
- Find the median of an odd or even number of values.
- Read a scale on a line plot, dot plot, or box plot.
- Explain a statistic using the group and variable it describes.

> [!CHECK] Pre-Check
>
> Try these before reading the rest of the lesson.

1. Order the values: \(18, 12, 30, 21, 16\).
2. What is the median of \(10, 12, 14, 18, 20\)?
3. If 12 students scored below Ana out of 30 students, what comparison group is being used?
4. Why is the sentence "The answer is 72" incomplete in statistics?

<details>
<summary>Reveal pre-check answers</summary>

1. \(12, 16, 18, 21, 30\)
2. The median is \(14\).
3. The comparison group is the 30 students in Ana's group.
4. The number needs context: what 72 measures, who it describes, and what conclusion it supports.

If more than one item felt uncertain, review ordering data and median before continuing.
</details>

## Key Vocabulary

| Term | Meaning |
|---|---|
| Position measure | A statistic that describes where a value or group of values is located in an ordered data set |
| Quartiles | Values that split ordered data into four parts |
| Lower quartile, \(Q_1\) | The median of the lower half of the data; about 25% of the data are at or below this point |
| Median, \(Q_2\) | The middle value of the ordered data |
| Upper quartile, \(Q_3\) | The median of the upper half of the data; about 75% of the data are at or below this point |
| Interquartile range, IQR | The spread of the middle half of the data: \(Q_3 - Q_1\) |
| Percentile rank | The percent of values at or below a given value, depending on the convention used in the problem |
| Evidence-based conclusion | A claim that names the statistic, cites the data, and explains what the statistic means in context |

> [!TARGET] Target Skill
>
> Do not stop at finding \(Q_1\), \(Q_3\), IQR, or a percentile rank. Use the measure to answer the question: **What does this show about the group?**

## Visual Introduction: Position Measures Tell a Story

A list of scores is hard to interpret until it is organized. Once the scores are ordered, position measures show where the middle, lower group, and upper group are.

![Ordered class scores with quartile positions marked](/content/grade-10/math/quarter-2/topic-statistics-lesson-10-conclusions-from-position-measures/images/ordered-scores-quartiles.svg)

For the ordered scores:

$$
42,\ 48,\ 52,\ 55,\ 60,\ 64,\ 68,\ 70,\ 74,\ 78,\ 82
$$

The median is \(64\). The lower quartile is \(52\). The upper quartile is \(78\).

Those values let you write a meaningful conclusion:

> The middle half of the class scored from 52 to 78, so most scores were spread across a 26-point interval rather than clustering tightly around the median.

## Main Concept 1: Quartiles Support Claims About Groups

Quartiles are useful because they describe **parts of the ordered data**, not just one typical value.

Use the same data:

$$
42,\ 48,\ 52,\ 55,\ 60,\ 64,\ 68,\ 70,\ 74,\ 78,\ 82
$$

### Finding the quartiles

1. The median is \(64\).
2. The lower half is \(42, 48, 52, 55, 60\), so \(Q_1 = 52\).
3. The upper half is \(68, 70, 74, 78, 82\), so \(Q_3 = 78\).

The interquartile range is:

$$
\text{IQR} = Q_3 - Q_1 = 78 - 52 = 26
$$

> [!TIP] Conclusion Frame
>
> "Because \(Q_1 = \_\_\) and \(Q_3 = \_\_\), the middle half of the data lies between \_\_\ and \_\__. This suggests \_\_\."

### Strong conclusion

Because \(Q_1 = 52\) and \(Q_3 = 78\), the middle half of the class scored between 52 and 78. This suggests the class has a wide range of middle scores, so one "typical" score alone does not describe the class well.

### Weak conclusion

The IQR is 26.

The weak version is not wrong, but it is unfinished. It gives the computation without explaining what the computation means.

## Main Concept 2: Percentile Rank Shows Relative Standing

Percentile rank compares a value with the rest of the group. If a learner is at the 80th percentile, the learner performed as well as or better than about 80% of the group.

![Percentile rank model showing below, equal to, and above groups](/content/grade-10/math/quarter-2/topic-statistics-lesson-10-conclusions-from-position-measures/images/percentile-rank-model.svg)

One common classroom formula is:

$$
\text{Percentile rank} = \frac{\text{number of values at or below the score}}{\text{total number of values}} \times 100
$$

Suppose Luis scored 74 in the ordered data above.

There are 9 scores at or below 74 out of 11 scores total:

$$
\frac{9}{11}\times 100 \approx 81.8
$$

Luis is at about the 82nd percentile.

> [!WARNING] Percentile Trap
>
> A score of 82 and the 82nd percentile are not the same idea. A **score** is a data value. A **percentile rank** compares that value with the group.

## Main Concept 3: Displays Help Compare Distributions

Box plots summarize the minimum, \(Q_1\), median, \(Q_3\), and maximum. They are especially useful for comparing groups.

![Box plot comparing quiz scores for two sections](/content/grade-10/math/quarter-2/topic-statistics-lesson-10-conclusions-from-position-measures/images/box-plot-comparison.svg)

From the display:

| Section | \(Q_1\) | Median | \(Q_3\) | IQR |
|---|---:|---:|---:|---:|
| Section A | 52 | 64 | 78 | 26 |
| Section B | 60 | 68 | 74 | 14 |

Section A has a larger IQR, so its middle half is more spread out. Section B has a slightly higher median and a smaller IQR, so its middle scores are more consistent and slightly higher.

> [!IMPORTANT] Evidence Before Claim
>
> A comparison must cite a statistic. "Section B did better" is too broad. "Section B had a higher median and smaller IQR" is evidence-based.

## Main Concept 4: IQR Can Flag Unusual Values

The IQR is often used to check for possible outliers.

$$
\text{Lower fence} = Q_1 - 1.5(\text{IQR})
$$

$$
\text{Upper fence} = Q_3 + 1.5(\text{IQR})
$$

![IQR fence diagram showing a possible outlier](/content/grade-10/math/quarter-2/topic-statistics-lesson-10-conclusions-from-position-measures/images/iqr-outlier-fence.svg)

If \(Q_1 = 52\), \(Q_3 = 78\), and \(\text{IQR} = 26\), then:

$$
\text{Lower fence} = 52 - 1.5(26) = 13
$$

$$
\text{Upper fence} = 78 + 1.5(26) = 117
$$

A score of 120 would be beyond the upper fence, so it would be a possible outlier.

## Worked Example: Choosing a Recommendation

**Problem:** A teacher compares the time, in minutes, that two groups spent on a review activity.

| Group | Minimum | \(Q_1\) | Median | \(Q_3\) | Maximum |
|---|---:|---:|---:|---:|---:|
| Group A | 18 | 25 | 32 | 40 | 55 |
| Group B | 20 | 30 | 34 | 38 | 44 |

Which group shows more consistent review time? Write an evidence-based conclusion.

**Step 1: Identify the useful position measure.**  
Consistency is about spread, so compare IQR values.

**Step 2: Compute each IQR.**

$$
\text{IQR}_A = 40 - 25 = 15
$$

$$
\text{IQR}_B = 38 - 30 = 8
$$

**Step 3: Interpret in context.**  
Group B has the smaller IQR, so the middle half of its review times is less spread out.

> [!EXAMPLE] Complete Answer
>
> Group B shows more consistent review time because its IQR is \(8\) minutes, compared with Group A's IQR of \(15\) minutes. The middle half of Group B's times stayed closer together.

The conclusion builder below shows the order of a strong response.

![Conclusion builder moving from measure to evidence to claim](/content/grade-10/math/quarter-2/topic-statistics-lesson-10-conclusions-from-position-measures/images/conclusion-builder.svg)

## Guided Practice

### Guided Problem 1: Quartile Conclusion

The ordered data show the number of minutes students spent reading:

$$
10,\ 12,\ 15,\ 18,\ 20,\ 22,\ 25
$$

Find the median and write a conclusion.

<details>
<summary>Hint 1</summary>

There are 7 values, so the median is the 4th value.
</details>

<details>
<summary>Hint 2</summary>

After finding the value, explain what it means for this group of students.
</details>

<details>
<summary>Answer</summary>

The median is \(18\) minutes. A good conclusion is: In this group, half of the students spent 18 minutes or less reading and half spent 18 minutes or more.
</details>

### Guided Problem 2: IQR Comparison

Class X has \(Q_1 = 58\) and \(Q_3 = 82\). Class Y has \(Q_1 = 64\) and \(Q_3 = 76\). Which class has the more consistent middle half of scores?

<details>
<summary>Hint 1</summary>

Compute each IQR using \(Q_3 - Q_1\).
</details>

<details>
<summary>Hint 2</summary>

Smaller IQR means the middle half is less spread out.
</details>

<details>
<summary>Answer</summary>

Class X has IQR \(82 - 58 = 24\). Class Y has IQR \(76 - 64 = 12\). Class Y has the more consistent middle half of scores.
</details>

### Guided Problem 3: Percentile Rank

Mika scored 88. In her group of 25 learners, 21 learners scored at or below 88. Estimate Mika's percentile rank.

<details>
<summary>Hint 1</summary>

Use \(\frac{\text{number at or below}}{\text{total}}\times 100\).
</details>

<details>
<summary>Hint 2</summary>

\(\frac{21}{25} = 0.84\).
</details>

<details>
<summary>Answer</summary>

Mika is at about the 84th percentile. She scored as well as or better than about 84% of the learners in her group.
</details>

## Mini-Quiz

1. What does IQR measure?
2. If \(Q_1 = 36\) and \(Q_3 = 52\), what is the IQR?
3. What is the difference between a score and a percentile rank?
4. True or false: A smaller IQR means the middle half of the data is more spread out.
5. What should an evidence-based conclusion include?

<details>
<summary>Reveal mini-quiz answers</summary>

1. IQR measures the spread of the middle half of the data.
2. \(52 - 36 = 16\)
3. A score is a data value; a percentile rank tells how that value compares with the group.
4. False. A smaller IQR means the middle half is less spread out.
5. It should include a statistic, evidence from the data, and an interpretation in context.
</details>

## Independent Practice

Complete these before checking the answer key.

Use this ordered data set for items 1-5:

$$
14,\ 18,\ 20,\ 24,\ 25,\ 28,\ 31,\ 34,\ 40
$$

1. Find the median.
2. Find \(Q_1\) and \(Q_3\).
3. Find the IQR.
4. Write one sentence explaining what the IQR means in context if the data represent study minutes.
5. If a student studied 31 minutes, estimate the percentile rank using values at or below the student's time.
6. A box plot for Group A has IQR 18. A box plot for Group B has IQR 9. Which group has the more consistent middle half?
7. A report says, "The program worked because the median increased." What additional evidence would make this conclusion stronger?
8. Write a conclusion sentence that uses the words "middle half" and "evidence."

## Answer Key with Explanations

1. The median is \(25\). It is the 5th value in the ordered list of 9 values.
2. \(Q_1 = 19\) and \(Q_3 = 32.5\). The lower half is \(14,18,20,24\), so its median is \(\frac{18+20}{2}=19\). The upper half is \(28,31,34,40\), so its median is \(\frac{31+34}{2}=32.5\).
3. \(\text{IQR} = 32.5 - 19 = 13.5\).
4. Sample: The middle half of the students studied from 19 to 32.5 minutes, a spread of 13.5 minutes.
5. There are 7 values at or below 31, so \(\frac{7}{9}\times100 \approx 77.8\). The student is at about the 78th percentile.
6. Group B is more consistent because its IQR is smaller.
7. Stronger evidence could include the old and new medians, IQRs, sample size, or whether the same learners were compared.
8. Sample: The middle half of the scores is tightly grouped, and that evidence supports the claim that the class performed consistently.

## Misconception Alerts

> [!WARNING] Misconception 1: "Quartiles are just random values from the list."
>
> Quartiles come from ordered positions. Always order the data first and use a consistent median method.

> [!WARNING] Misconception 2: "A higher maximum means the whole group did better."
>
> A maximum describes only the highest value. To compare groups, look at the median, quartiles, and spread.

> [!WARNING] Misconception 3: "Percentile means percent correct."
>
> Percentile rank describes relative standing in a group. It is not automatically the same as a test score percentage.

> [!WARNING] Misconception 4: "The IQR tells the total range."
>
> IQR describes only the middle half of the data. Total range uses maximum minus minimum.

## Error Analysis

A student writes:

> "Section A is better because its maximum is 95."

**Find the mistake:** The student used only one extreme value to judge the whole section.

**Correct reasoning:** Compare position measures that describe more of the group. For example, if Section B has a higher median and smaller IQR, then Section B's typical and middle scores may be stronger even if Section A has the highest single score.

## Self-Explanation Prompts

Answer these in your own words.

1. Why does ordering data matter before making conclusions from position measures?
2. When would IQR be more useful than the total range?
3. How can a percentile rank help describe a learner's relative standing?
4. What evidence would you cite before claiming one group is more consistent than another?
5. How can a box plot help you avoid relying on only one value?

## Mastery Checklist

Before taking the practice exam, check that you can:

- find \(Q_1\), median, \(Q_3\), and IQR from an ordered data set
- estimate percentile rank using a stated comparison group
- compare two groups using median and IQR
- identify when a maximum, minimum, or unlabeled graph is not enough evidence
- write a conclusion that includes the statistic, the group, and the meaning

> [!PRACTICE] Practice Plan
>
> Use the practice quiz first for quick feedback on quartiles, IQR, percentile rank, and conclusion writing. Then take the assessment when you can explain each answer in a complete sentence without looking back at the lesson.
