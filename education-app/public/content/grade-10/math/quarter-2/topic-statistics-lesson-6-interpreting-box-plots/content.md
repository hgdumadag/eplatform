# Statistics - Lesson 6: Interpreting Box Plots

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to **interpret box plots by comparing medians, interquartile ranges, ranges, whiskers, possible outliers, and distribution shape in context.**

**Content domain:** Statistics and Probability  
**Estimated time:** 45 minutes  
**Difficulty:** Intermediate  
**Target competency:** Interpret box-and-whisker plots and compare center, spread, and possible skew.

---

## What You Should Already Know

Before studying box plot interpretation, check that you can:

- order data values from least to greatest
- identify the minimum, first quartile, median, third quartile, and maximum
- compute interquartile range using $IQR = Q_3 - Q_1$
- describe what a median says about a typical value
- compare two numbers in context

> [!CHECK] Pre-Check
>
> Try these first.
>
> 1. In the five-number summary $8, 12, 15, 21, 30$, which value is the median?
> 2. What is the IQR if $Q_1 = 18$ and $Q_3 = 29$?
> 3. If one class has a median score of 82 and another has a median score of 76, which class has the higher typical score?
>
> **Answers:** 1. 15. 2. $29 - 18 = 11$. 3. The class with median 82 has the higher typical score.

## Try Before You Read

Two Grade 10 sections took the same 20-point statistics check. Their scores are shown with side-by-side box plots.

![Side-by-side box plots comparing Section A and Section B quiz scores](/content/grade-10/math/quarter-2/topic-statistics-lesson-6-interpreting-box-plots/images/lesson-visual.svg)

Without calculating anything, answer:

1. Which section has the higher typical score?
2. Which section has more spread in the middle 50% of scores?
3. Which section looks more consistent?

> [!TIP] First Reading Move
>
> In a box plot, the **median** compares typical values. The **box width** compares the spread of the middle 50%. The **whole whisker-to-whisker length** compares overall range.

---

## Key Vocabulary

| Term | Meaning | How to see it on a box plot |
| --- | --- | --- |
| Five-number summary | Minimum, $Q_1$, median, $Q_3$, maximum | The five marked positions on the plot |
| Median | The middle value of the data set | The vertical line inside the box |
| Quartiles | Values that divide ordered data into four parts | $Q_1$ and $Q_3$ form the left and right edges of the box |
| Interquartile range | Spread of the middle 50% of data | Width of the box, $Q_3 - Q_1$ |
| Range | Overall spread of the data | Maximum minus minimum |
| Whiskers | Lines from the box to the minimum and maximum, or to non-outlier extremes | Show spread outside the middle 50% |
| Skew | A longer tail on one side of a distribution | One whisker or half of the box stretches farther |
| Outlier | A value far from most of the data | Often shown as a separate point |

## Visual Introduction

A box plot is a compressed story of a data set. It does not show every value, but it does show the landmarks you need for comparison.

![Five-number summary labeled on a box plot](/content/grade-10/math/quarter-2/topic-statistics-lesson-6-interpreting-box-plots/images/five-number-summary-map.svg)

Read it in this order:

1. **Center:** Where is the median?
2. **Middle spread:** How wide is the box?
3. **Overall spread:** How long is the full plot from minimum to maximum?
4. **Shape:** Is one side stretched longer than the other?
5. **Context:** What do these differences mean for the situation?

> [!IMPORTANT] Core Idea
>
> A higher median means a higher typical value. A wider box means more variability in the middle 50%. A longer whisker suggests more spread on that side of the data.

---

## Main Concept Explanation

### 1. Compare Medians to Compare Typical Values

The median is the line inside the box. If two box plots use the same scale, the plot with the median farther to the right has the higher typical value.

For example, if Section A has median 15 and Section B has median 13, Section A's typical score is higher.

> [!WARNING] Misread Median Alert
>
> The median is **not always in the center of the box**. It is the line inside the box, even if it sits closer to one side.

### 2. Compare IQRs to Compare Consistency

The box represents the middle 50% of the data. Its width is the interquartile range.

$$
IQR = Q_3 - Q_1
$$

![Narrow and wide boxes showing different interquartile ranges](/content/grade-10/math/quarter-2/topic-statistics-lesson-6-interpreting-box-plots/images/spread-comparison.svg)

| If the box is... | Then the middle 50% is... | Interpretation |
| --- | --- | --- |
| Narrow | Close together | More consistent |
| Wide | Spread out | More variable |

### 3. Compare Ranges for Overall Spread

The range uses the minimum and maximum.

$$
Range = maximum - minimum
$$

A group can have a small IQR but a large range if most values are close together but one or two values are far away.

### 4. Use Whiskers and Median Position to Describe Shape

Box plots can suggest skew.

![Box plots showing left skew, roughly symmetric shape, and right skew](/content/grade-10/math/quarter-2/topic-statistics-lesson-6-interpreting-box-plots/images/skewed-box-plots.svg)

| Appearance | Possible shape | Plain-language reading |
| --- | --- | --- |
| Longer right whisker | Right-skewed | A few higher values stretch the data upward |
| Longer left whisker | Left-skewed | A few lower values stretch the data downward |
| Balanced whiskers and centered median | Roughly symmetric | Spread is similar on both sides |

Use "suggests" or "appears" when describing shape from a box plot. A box plot summarizes data, so it gives evidence but not every detail.

### 5. Check Outliers Before Making a Claim

Some box plots mark outliers as separate points. An outlier can affect the range and the story, even when the middle 50% is stable.

![Box plot with a possible high outlier marked separately](/content/grade-10/math/quarter-2/topic-statistics-lesson-6-interpreting-box-plots/images/outlier-context-check.svg)

> [!TIP] Interpretation Sentence Frame
>
> "The median is ___, so a typical ___ is about ___. The IQR is ___, so the middle half of the data varies by about ___."

## Rule Box / Interpretation Guide

![Decision guide for interpreting a box plot](/content/grade-10/math/quarter-2/topic-statistics-lesson-6-interpreting-box-plots/images/decision-flow.svg)

| Question | Look at | What it tells you |
| --- | --- | --- |
| Which group is typically higher? | Median | Center |
| Which group is more consistent? | IQR / box width | Middle spread |
| Which group has more overall variation? | Range | Full spread |
| Is the data stretched to one side? | Whiskers and median position | Possible skew |
| Is there a far-away value? | Separate point or long extreme | Possible outlier |

---

## Worked Example

**Problem:** Two barangay youth teams recorded the number of minutes members practiced each day.

| Team | Minimum | $Q_1$ | Median | $Q_3$ | Maximum |
| --- | ---: | ---: | ---: | ---: | ---: |
| Team Alpha | 20 | 30 | 40 | 50 | 60 |
| Team Beta | 15 | 25 | 35 | 55 | 75 |

Compare the two teams' typical practice time and variability.

**Step 1: Compare medians.**  
Team Alpha has median 40 minutes. Team Beta has median 35 minutes.

So Team Alpha has the higher typical practice time.

**Step 2: Compare IQRs.**  
Team Alpha: $IQR = 50 - 30 = 20$ minutes.  
Team Beta: $IQR = 55 - 25 = 30$ minutes.

Team Beta has the wider middle 50%, so its practice times are less consistent.

**Step 3: Compare ranges.**  
Team Alpha: $60 - 20 = 40$ minutes.  
Team Beta: $75 - 15 = 60$ minutes.

Team Beta also has greater overall spread.

> [!EXAMPLE] Complete Answer
>
> Team Alpha has the higher typical practice time because its median is 40 minutes compared with Team Beta's 35 minutes. Team Beta is more variable because its IQR is 30 minutes and its range is 60 minutes, both larger than Team Alpha's. This means Team Beta's practice times are more spread out, even though its typical time is lower.

---

## Guided Practice

Try each item before reading the answer.

### Problem 1: Read the Five-Number Summary

A box plot has minimum 10, $Q_1 = 14$, median 18, $Q_3 = 24$, and maximum 31.

1. What is the IQR?
2. What is the range?

**Hint 1:** IQR uses the edges of the box.  
**Hint 2:** Range uses the endpoints of the whiskers.  
**Answer:** $IQR = 24 - 14 = 10$. Range $= 31 - 10 = 21$.

### Problem 2: Compare Center

Class Mango has median score 82. Class Narra has median score 78.

Which class has the higher typical score?

**Answer:** Class Mango, because 82 is greater than 78.

### Problem 3: Compare Consistency

Class Mango has $Q_1 = 76$ and $Q_3 = 88$. Class Narra has $Q_1 = 70$ and $Q_3 = 91$.

Which class is more consistent in the middle 50%?

**Hint:** Smaller IQR means the middle 50% is less spread out.  
**Answer:** Mango. Its IQR is $88 - 76 = 12$, while Narra's IQR is $91 - 70 = 21$.

### Problem 4: Describe Shape Carefully

A box plot has a short left whisker and a long right whisker.

What does this suggest?

**Answer:** The distribution may be right-skewed. A few higher values may be stretching the data to the right.

---

## Mini-Quiz

1. What part of a box plot shows the median?
2. Which is larger: an IQR from 12 to 20 or an IQR from 15 to 24?
3. True or false: A wider box means the middle 50% of values are more spread out.
4. If a box plot's right whisker is much longer than its left whisker, what shape might it suggest?
5. Why should a final interpretation mention the context?

<details>
<summary>Reveal mini-quiz answers</summary>

1. The line inside the box.
2. The IQR from 15 to 24 is larger because $24 - 15 = 9$, while $20 - 12 = 8$.
3. True.
4. It may suggest right skew.
5. Context explains what the median, spread, or shape means in the real situation.

</details>

---

## Independent Practice

Use the two box plot summaries below.

| Group | Minimum | $Q_1$ | Median | $Q_3$ | Maximum |
| --- | ---: | ---: | ---: | ---: | ---: |
| Group A | 42 | 50 | 58 | 64 | 70 |
| Group B | 38 | 45 | 60 | 72 | 90 |

Answer in complete sentences when interpretation is requested.

1. Which group has the higher median?
2. Find the IQR of Group A.
3. Find the IQR of Group B.
4. Which group is more consistent in the middle 50%?
5. Find the range of Group A.
6. Find the range of Group B.
7. Which group has greater overall spread?
8. Write a two-sentence comparison of the two groups using center and spread.

## Answer Key with Explanations

1. Group B has the higher median because 60 is greater than 58.
2. Group A's IQR is $64 - 50 = 14$.
3. Group B's IQR is $72 - 45 = 27$.
4. Group A is more consistent in the middle 50% because its IQR is smaller.
5. Group A's range is $70 - 42 = 28$.
6. Group B's range is $90 - 38 = 52$.
7. Group B has greater overall spread because 52 is greater than 28.
8. Sample: Group B has a slightly higher typical value because its median is 60 compared with Group A's 58. However, Group A is more consistent because both its IQR and range are smaller.

---

## Misconception Alerts

> [!WARNING] Misconception 1: "The bigger box plot always represents more data."
>
> Box width shows spread, not sample size. A wider box means the middle 50% is more spread out.

> [!WARNING] Misconception 2: "The median is the average."
>
> The median is the middle value of ordered data. A box plot does not directly show the mean.

> [!WARNING] Misconception 3: "A longer whisker means more values are on that side."
>
> A longer whisker means the values on that side are more spread out. It does not prove there are more data values there.

> [!WARNING] Misconception 4: "Higher maximum means better overall performance."
>
> A high maximum may come from one strong value. Compare medians and IQRs before making a broad claim.

## Error Analysis

A student says:

> "Group B is definitely better because its maximum is 90, and Group A's maximum is only 70."

**Find the mistake:** The student used only the maximum and ignored the median and spread.

**Correct reasoning:** Group B has the higher median, but it also has much more spread. A stronger conclusion would say that Group B has a slightly higher typical value but less consistency.

## Self-Explanation Prompts

Answer these in your own words.

1. Why is the median better than the maximum for comparing typical values?
2. What does the width of the box tell you that the median does not?
3. How can two box plots have similar medians but different stories?
4. What words should you use when a box plot only suggests, but does not prove, skew?

**Sample Responses**

1. The median uses the middle of the data, while the maximum may be only one unusual value.
2. The box width shows how spread out the middle 50% of values are.
3. They may have similar typical values, but one group may be much more consistent or have a wider range.
4. Use careful words such as "appears," "suggests," or "may be."

## Mastery Checklist

Check each statement when you can do it confidently.

- [ ] I can identify the median, quartiles, minimum, and maximum on a box plot.
- [ ] I can compute and interpret IQR from a five-number summary.
- [ ] I can compare medians to describe typical values.
- [ ] I can compare IQRs and ranges to describe spread.
- [ ] I can use whiskers and median position to describe possible skew.
- [ ] I can avoid using only the maximum or minimum to make a conclusion.
- [ ] I can write a complete interpretation in context.

> [!PRACTICE] What To Do Next
>
> Use the practice exam for quick checks on reading medians, IQRs, ranges, and skew clues. Then use the assessment when you are ready to compare two box plots and write evidence-based conclusions.

## Final Summary

Interpreting box plots is about reading a data story from five landmarks. Compare medians for typical values, IQRs for middle spread, ranges for overall spread, and whiskers for possible shape. The strongest answers connect those comparisons back to the situation.
