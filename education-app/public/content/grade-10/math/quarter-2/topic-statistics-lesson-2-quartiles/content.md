# Statistics - Lesson 2: Quartiles

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to **calculate Q1, Q2, and Q3 from ungrouped data and explain what each quartile tells you about the data set.**

**Content domain:** Data and Probability  
**Estimated time:** 45 minutes  
**Difficulty:** Intermediate  
**Target competency:** Calculate Q1, Q2, and Q3 from ungrouped data and interpret what each quartile means.

---

## What You Should Already Know

Before working with quartiles, check that you can:

- arrange numbers from least to greatest
- find the median of a set with an odd or even number of values
- average two middle values when needed
- explain a statistic using the situation it came from

> [!CHECK] Pre-Check
>
> Use the data set $8, 12, 15, 19, 24$.
>
> 1. Is the data already ordered?
> 2. What is the median?
> 3. What percent of the data is below the median?
>
> Answers: yes; $15$; about $50\%$.

## Key Vocabulary

| Term | Meaning |
| --- | --- |
| Quartiles | Three cut points that divide ordered data into four parts with about the same number of values. |
| Q1, first quartile | The median of the lower half of the data. About 25% of the data are at or below Q1. |
| Q2, second quartile | The median of the whole data set. About 50% of the data are at or below Q2. |
| Q3, third quartile | The median of the upper half of the data. About 75% of the data are at or below Q3. |
| Lower half | The values below Q2. When the total number of values is odd, do not include Q2 in either half. |
| Upper half | The values above Q2. When the total number of values is odd, do not include Q2 in either half. |
| Five-number summary | Minimum, Q1, Q2, Q3, and maximum. |

## Visual Introduction

Quartiles help you see where the lower quarter, middle, and upper quarter of a data set are located. They are useful when a single average hides how the data are spread out.

![Ordered scores divided into quartile regions](/content/grade-10/math/quarter-2/topic-statistics-lesson-2-quartiles/images/lesson-visual.svg)

In the visual, the data are already ordered. Q2 marks the middle of the whole set. Q1 marks the middle of the lower half, and Q3 marks the middle of the upper half.

> [!TARGET] Session Target
>
> Given an ungrouped data set, you will order it, split it correctly, compute Q1, Q2, and Q3, then write one sentence interpreting the quartiles.

## Core Idea

Quartiles are position measures. That means the order of the data matters.

| Step | What to do | Why it matters |
| --- | --- | --- |
| 1 | Order the data from least to greatest. | Quartiles describe positions, not the order values were collected. |
| 2 | Find Q2, the median of all values. | Q2 splits the data into a lower half and an upper half. |
| 3 | Find Q1 from the lower half. | Q1 describes the lower 25% boundary. |
| 4 | Find Q3 from the upper half. | Q3 describes the upper 75% boundary. |
| 5 | Interpret in context. | A quartile value should say something about the real data. |

![Five-number summary line with Q1, Q2, and Q3 labeled](/content/grade-10/math/quarter-2/topic-statistics-lesson-2-quartiles/images/five-number-summary.svg)

> [!IMPORTANT] Median-Splitting Convention
>
> This lesson uses the common Grade 10 convention: when the data set has an odd number of values, **exclude the median** before finding Q1 and Q3. If your teacher or textbook uses a different convention, follow the assigned convention and state it clearly.

## Worked Example

**Problem:** A group of learners recorded the number of minutes they spent reviewing for a quiz:

$$
28,\ 12,\ 35,\ 20,\ 18,\ 45,\ 30,\ 16,\ 24
$$

Find Q1, Q2, and Q3. Then interpret the results.

![Step-by-step quartile split for nine review times](/content/grade-10/math/quarter-2/topic-statistics-lesson-2-quartiles/images/worked-example-split.svg)

**Step 1: Order the data.**

$$
12,\ 16,\ 18,\ 20,\ 24,\ 28,\ 30,\ 35,\ 45
$$

**Step 2: Find Q2.**  
There are 9 values, so Q2 is the 5th value.

$$
Q2 = 24
$$

**Step 3: Split the data.**  
Because there are 9 values, exclude the median $24$ from the halves.

Lower half: $12,\ 16,\ 18,\ 20$  
Upper half: $28,\ 30,\ 35,\ 45$

**Step 4: Find Q1 and Q3.**

For the lower half, average the two middle values:

$$
Q1 = \frac{16 + 18}{2} = 17
$$

For the upper half, average the two middle values:

$$
Q3 = \frac{30 + 35}{2} = 32.5
$$

> [!EXAMPLE] Complete Answer
>
> $Q1 = 17$, $Q2 = 24$, and $Q3 = 32.5$. In this group, about one-fourth of the learners reviewed for 17 minutes or less, about half reviewed for 24 minutes or less, and about three-fourths reviewed for 32.5 minutes or less.

## Even Number of Values

When the data set has an even number of values, Q2 is the average of the two middle values. Then the lower and upper halves already have the same number of values.

![Even data set showing Q2 between two middle values and Q1/Q3 in each half](/content/grade-10/math/quarter-2/topic-statistics-lesson-2-quartiles/images/even-data-quartiles.svg)

Use the data:

$$
10,\ 14,\ 15,\ 18,\ 21,\ 25,\ 27,\ 32
$$

Q2 is the average of $18$ and $21$:

$$
Q2 = \frac{18 + 21}{2} = 19.5
$$

Lower half: $10,\ 14,\ 15,\ 18$, so

$$
Q1 = \frac{14 + 15}{2} = 14.5
$$

Upper half: $21,\ 25,\ 27,\ 32$, so

$$
Q3 = \frac{25 + 27}{2} = 26
$$

## Guided Practice

### Problem 1

Find the quartiles for:

$$
7,\ 9,\ 12,\ 13,\ 18,\ 20,\ 22
$$

**Try it:** The data are already ordered. Circle the middle value first.

**Answer:** $Q2 = 13$. Lower half: $7,\ 9,\ 12$, so $Q1 = 9$. Upper half: $18,\ 20,\ 22$, so $Q3 = 20$.

### Problem 2

Find the quartiles for:

$$
31,\ 18,\ 25,\ 42,\ 29,\ 33,\ 40,\ 22
$$

**Hint:** Order the data before finding the median.

**Answer:** Ordered data: $18,\ 22,\ 25,\ 29,\ 31,\ 33,\ 40,\ 42$.  
$Q2 = 30$, $Q1 = 23.5$, and $Q3 = 36.5$.

### Problem 3

A student says, "Q3 is 36.5, so most of the class scored exactly 36.5."

**What is wrong?**

**Answer:** Q3 is a position marker, not a statement that most values equal 36.5. It means about 75% of the data are at or below 36.5.

## Mini-Quiz

1. What must you do before finding quartiles?
2. What is Q2 also called?
3. For an odd number of values, do you include Q2 in the lower and upper halves in this lesson?
4. If Q1 = 11, what does that suggest about the lower quarter of the data?
5. True or false: Q3 is always the largest value.

**Mini-Quiz Answers**

1. Order the data from least to greatest.
2. The median.
3. No. Exclude Q2 before finding Q1 and Q3.
4. About 25% of the data are at or below 11.
5. False. The maximum is the largest value; Q3 is the third quartile.

## Independent Practice

Complete these before checking the answer key.

1. Order the data: $14,\ 9,\ 21,\ 17,\ 12$.
2. Find Q2 for $14,\ 9,\ 21,\ 17,\ 12$.
3. Find Q1 and Q3 for $9,\ 12,\ 14,\ 17,\ 21$.
4. Find Q1, Q2, and Q3 for $6,\ 8,\ 11,\ 15,\ 19,\ 23$.
5. A data set has $Q1 = 40$, $Q2 = 55$, and $Q3 = 70$. Interpret Q2.
6. A data set has $Q3 = 88$. Write a sentence explaining Q3 in context of test scores.
7. Explain why the data must be ordered before finding quartiles.
8. A student includes the median in both halves for $3,\ 5,\ 8,\ 9,\ 12$. Explain why that does not match this lesson's method.

![Common median-inclusion mistake compared with the lesson method](/content/grade-10/math/quarter-2/topic-statistics-lesson-2-quartiles/images/common-mistake-median.svg)

## Answer Key with Explanations

1. $9,\ 12,\ 14,\ 17,\ 21$. Quartiles use ordered positions.
2. $Q2 = 14$. It is the middle value of the ordered list.
3. Lower half: $9,\ 12$, so $Q1 = 10.5$. Upper half: $17,\ 21$, so $Q3 = 19$.
4. $Q2 = 13$, $Q1 = 8$, and $Q3 = 19$. For six values, Q2 is the average of $11$ and $15$.
5. About half of the data values are at or below 55.
6. Sample: In these test scores, about 75% of the scores are at or below 88.
7. Quartiles describe positions in a sorted data set. Without ordering, the "middle" and "halves" may be wrong.
8. With an odd number of values, this lesson excludes the median before finding Q1 and Q3. Including it changes the halves and can change the quartiles.

## Misconception Alerts

> [!WARNING] Misconception 1: "Q1 is the first number in the list."
>
> Q1 is the median of the lower half. It is not usually the minimum.

> [!WARNING] Misconception 2: "Q3 is the maximum."
>
> Q3 marks about the 75% position. The maximum is the largest data value.

> [!WARNING] Misconception 3: "The data do not need to be ordered."
>
> Quartiles are based on position. If the data are not ordered, the split can be incorrect.

> [!WARNING] Misconception 4: "Quartiles tell exact counts for every data set."
>
> Quartiles divide ordered data into about four equal parts. With small data sets or repeated values, the interpretation is approximate.

## Self-Explanation Prompts

Answer these in your own words.

1. Why is Q2 found before Q1 and Q3?
2. How do you know which values belong in the lower half?
3. What does Q1 tell you that the median alone does not?
4. How would you explain Q3 to someone who has never seen quartiles before?
5. What mistake are you most likely to make, and how will you check for it?

## Mastery Checklist

Check each statement when you can do it confidently.

- I can order ungrouped data from least to greatest.
- I can find the median for odd and even data sets.
- I can split data into lower and upper halves using the lesson convention.
- I can calculate Q1, Q2, and Q3.
- I can interpret Q1, Q2, and Q3 using the context of the data.
- I can explain why Q1 is not the minimum and Q3 is not the maximum.

> [!PRACTICE] What To Do Next
>
> Use the practice exam for quick quartile calculations and vocabulary checks. Then use the assessment when you are ready to solve mixed odd/even data sets, interpret quartiles in context, and catch common errors.

## Final Summary

Quartiles divide ordered data into four parts. Q2 is the median, Q1 summarizes the lower half, and Q3 summarizes the upper half. A polished answer includes both the calculated quartile values and a sentence explaining what those values mean in the situation.
