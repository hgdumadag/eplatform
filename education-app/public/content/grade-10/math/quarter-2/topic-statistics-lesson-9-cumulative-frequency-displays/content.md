# Statistics - Lesson 9: Cumulative Frequency Displays

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to construct cumulative frequency tables and displays, then use them to answer "at most," "at least," percentile, and comparison questions.

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 45 minutes |
| Difficulty | Intermediate |
| Main skill | Building and reading cumulative frequency displays |
| Tools | Pencil, calculator, ruler or graph paper, and scratch paper |

<!-- visual-assets:start -->

## Visual Study Set

Use these diagrams as anchors while you learn how a frequency table becomes a cumulative display.

![Cumulative frequency display overview with table, running totals, and ogive](/content/grade-10/math/quarter-2/topic-statistics-lesson-9-cumulative-frequency-displays/images/lesson-visual.svg)

![Running total table for quiz score intervals](/content/grade-10/math/quarter-2/topic-statistics-lesson-9-cumulative-frequency-displays/images/cumulative-table-flow.svg)

![Ogive plotted from upper class boundaries and cumulative frequencies](/content/grade-10/math/quarter-2/topic-statistics-lesson-9-cumulative-frequency-displays/images/ogive-score-curve.svg)

![Cumulative histogram showing increasing bar heights](/content/grade-10/math/quarter-2/topic-statistics-lesson-9-cumulative-frequency-displays/images/cumulative-histogram.svg)

![Reading an approximate median from an ogive](/content/grade-10/math/quarter-2/topic-statistics-lesson-9-cumulative-frequency-displays/images/median-read-ogive.svg)

![Comparison of frequency, cumulative frequency, and more-than cumulative frequency](/content/grade-10/math/quarter-2/topic-statistics-lesson-9-cumulative-frequency-displays/images/common-error-comparison.svg)

<!-- visual-assets:end -->

## What You Should Already Know

Before starting, make sure these ideas feel familiar:

- A **frequency** counts how many data values are in a class or category.
- A **class interval** groups nearby values, such as `50-59` or `60-69`.
- A graph's title, labels, and scale tell you what the numbers mean.
- A percent can be written as \(\frac{\text{part}}{\text{whole}}\times 100\%\).
- A graph should support a conclusion, not replace the conclusion.

> [!CHECK] Pre-Check
>
> Try these before reading the rest of the lesson.

1. The frequencies are `3, 5, 4`. What is the total frequency?
2. What does "at most 69" mean?
3. In a class interval `60-69`, what is the upper class boundary if scores are whole numbers?
4. If 18 out of 30 learners scored at most 79, what percent is that?

<details>
<summary>Reveal pre-check answers</summary>

1. \(3+5+4=12\).
2. "At most 69" means \(69\) or below.
3. The upper class boundary is \(69.5\), because whole-number scores from \(60\) to \(69\) extend halfway to the next class.
4. \(\frac{18}{30}\times 100\%=60\%\).

If more than one item felt uncertain, review frequency tables, class intervals, and percent before continuing.
</details>

## Key Vocabulary

| Term | Meaning |
|---|---|
| Frequency | The number of data values in one class interval |
| Cumulative frequency | A running total of frequencies up to a class boundary |
| Less-than cumulative frequency | The number of values less than or equal to each upper class boundary |
| More-than cumulative frequency | The number of values greater than or equal to each lower class boundary |
| Ogive | A line graph of cumulative frequency against class boundaries |
| Upper class boundary | The value used on an ogive to mark the end of a class interval |
| Percentile estimate | An approximate position read from cumulative data |

> [!TARGET] Target Skill
>
> Start with ordinary class frequencies. Add them in order to create running totals. Then use the cumulative display to answer questions about values below, above, or near a chosen position.

## Visual Introduction: Why Cumulative Frequency Helps

A regular frequency table answers, "How many are in this one interval?"

A cumulative frequency table answers, "How many are up to this point?"

That second question is useful when you want to know whether a learner is below a benchmark, above a cutoff, or near a percentile.

![Cumulative frequency display overview with table, running totals, and ogive](/content/grade-10/math/quarter-2/topic-statistics-lesson-9-cumulative-frequency-displays/images/lesson-visual.svg)

> [!IMPORTANT] Core Idea
>
> Cumulative frequency is a running total. Each row includes the current class and all earlier classes.

## Example Data Set

A Grade 10 class took a 100-point statistics quiz. Scores were grouped as follows.

| Score interval | Frequency |
|---|---:|
| 40-49 | 2 |
| 50-59 | 4 |
| 60-69 | 6 |
| 70-79 | 10 |
| 80-89 | 6 |
| 90-99 | 2 |

The total number of learners is:

$$
2+4+6+10+6+2=30
$$

## Main Concept 1: Build the Cumulative Frequency Table

To find less-than cumulative frequency, add each new frequency to the previous running total.

| Score interval | Frequency | Less-than cumulative frequency |
|---|---:|---:|
| 40-49 | 2 | 2 |
| 50-59 | 4 | 6 |
| 60-69 | 6 | 12 |
| 70-79 | 10 | 22 |
| 80-89 | 6 | 28 |
| 90-99 | 2 | 30 |

![Running total table for quiz score intervals](/content/grade-10/math/quarter-2/topic-statistics-lesson-9-cumulative-frequency-displays/images/cumulative-table-flow.svg)

Read the table carefully:

- 12 learners scored at most 69.
- 22 learners scored at most 79.
- 30 learners scored at most 99, which matches the total.

For an **at least** question, subtract the cumulative count below the cutoff from the total. For example, "at least 80" means scores from `80-89` and `90-99`.

$$
30-22=8
$$

So 8 learners scored at least 80.

> [!TIP] Quick Check
>
> The last cumulative frequency should equal the total frequency. If it does not, check your running totals.

## Main Concept 2: Draw and Read an Ogive

An ogive uses upper class boundaries on the horizontal axis and cumulative frequencies on the vertical axis.

For whole-number score intervals, the upper class boundaries are:

| Score interval | Upper class boundary | Cumulative frequency |
|---|---:|---:|
| 40-49 | 49.5 | 2 |
| 50-59 | 59.5 | 6 |
| 60-69 | 69.5 | 12 |
| 70-79 | 79.5 | 22 |
| 80-89 | 89.5 | 28 |
| 90-99 | 99.5 | 30 |

Plot these points:

$$
(49.5,2), (59.5,6), (69.5,12), (79.5,22), (89.5,28), (99.5,30)
$$

Then connect the points with line segments.

![Ogive plotted from upper class boundaries and cumulative frequencies](/content/grade-10/math/quarter-2/topic-statistics-lesson-9-cumulative-frequency-displays/images/ogive-score-curve.svg)

The graph rises or stays level as you move right. It should not go down, because running totals cannot decrease.

## Main Concept 3: Cumulative Histogram vs Regular Histogram

A regular histogram shows the frequency in each class. Its bars can go up and down.

A cumulative histogram shows the running total up to each class. Its bars should not decrease.

![Cumulative histogram showing increasing bar heights](/content/grade-10/math/quarter-2/topic-statistics-lesson-9-cumulative-frequency-displays/images/cumulative-histogram.svg)

> [!WARNING] Display Trap
>
> Do not interpret a cumulative bar as "only this interval." A cumulative bar includes that interval plus every interval before it.

## Worked Example: Estimate the Median from an Ogive

**Problem:** The class has 30 learners. Use the cumulative table or ogive to estimate the median score class.

**Step 1: Find the median position.**

For 30 learners, the median is between the 15th and 16th ordered scores.

$$
\frac{30}{2}=15
$$

**Step 2: Find where cumulative frequency first reaches or passes 15.**

The table shows:

- At most 69: 12 learners
- At most 79: 22 learners

The 15th and 16th scores fall after 69 but before or at 79.

**Step 3: State the result in context.**

The median score is in the `70-79` class interval. From the ogive, the median is roughly in the low 70s.

![Reading an approximate median from an ogive](/content/grade-10/math/quarter-2/topic-statistics-lesson-9-cumulative-frequency-displays/images/median-read-ogive.svg)

> [!EXAMPLE] Complete Answer
>
> The median score is in the `70-79` interval because the cumulative frequency rises from 12 to 22 in that class, so the 15th and 16th scores are inside it.

## Guided Practice

Use this grouped data about minutes spent reviewing before a quiz.

| Review time | Frequency |
|---|---:|
| 0-9 min | 3 |
| 10-19 min | 7 |
| 20-29 min | 9 |
| 30-39 min | 6 |
| 40-49 min | 5 |

### Guided Problem 1: Running Totals

Find the less-than cumulative frequency for each interval.

<details>
<summary>Hint 1</summary>

Add the frequencies in order from top to bottom.
</details>

<details>
<summary>Hint 2</summary>

The running totals begin \(3\), then \(3+7=10\).
</details>

<details>
<summary>Answer</summary>

The cumulative frequencies are `3, 10, 19, 25, 30`.
</details>

### Guided Problem 2: At Most Question

How many learners reviewed for at most 29 minutes?

<details>
<summary>Hint 1</summary>

"At most 29 minutes" includes the first three intervals.
</details>

<details>
<summary>Hint 2</summary>

Use the cumulative frequency at the `20-29 min` interval.
</details>

<details>
<summary>Answer</summary>

19 learners reviewed for at most 29 minutes.
</details>

### Guided Problem 3: Percent Interpretation

What percent of learners reviewed for at most 29 minutes?

<details>
<summary>Hint 1</summary>

The part is 19 and the total is 30.
</details>

<details>
<summary>Hint 2</summary>

Use \(\frac{19}{30}\times 100\%\).
</details>

<details>
<summary>Answer</summary>

\(\frac{19}{30}\times 100\%\approx 63.3\%\). About 63% of the learners reviewed for at most 29 minutes.
</details>

## Mini-Quiz

1. What is cumulative frequency?
2. Why should the last less-than cumulative frequency equal the total frequency?
3. Which boundary is used to plot a less-than ogive for a class interval?
4. True or false: A less-than ogive should decrease when a later class has a smaller frequency.
5. In the quiz score data, how many learners scored at most 79?

<details>
<summary>Mini-quiz answers</summary>

1. It is a running total of frequencies.
2. It includes all classes by the final row.
3. The upper class boundary.
4. False. Running totals cannot decrease.
5. 22 learners.
</details>

## Independent Practice

Use the grouped data below. It shows the number of books read by Grade 10 learners during a quarter.

| Books read | Frequency |
|---|---:|
| 0-1 | 4 |
| 2-3 | 9 |
| 4-5 | 11 |
| 6-7 | 5 |
| 8-9 | 1 |

Complete these before checking the answer key.

1. Find the total number of learners.
2. Create the less-than cumulative frequency column.
3. How many learners read at most 3 books?
4. How many learners read at most 5 books?
5. What percent of learners read at most 5 books?
6. Which interval contains the median number of books read?
7. Explain why the cumulative frequency for `6-7` books is not 5.
8. Write one sentence interpreting the final cumulative frequency.

## Answer Key with Explanations

1. \(4+9+11+5+1=30\), so there are 30 learners.
2. The cumulative frequencies are `4, 13, 24, 29, 30`.
3. 13 learners read at most 3 books.
4. 24 learners read at most 5 books.
5. \(\frac{24}{30}\times100\%=80\%\).
6. The median is between the 15th and 16th values. Since cumulative frequency rises from 13 to 24 in the `4-5` interval, the median is in `4-5`.
7. The cumulative frequency for `6-7` books is \(4+9+11+5=29\), not just the frequency in that interval.
8. Sample: In this group, all 30 learners read at most 9 books.

## Misconception Alerts

![Comparison of frequency, cumulative frequency, and more-than cumulative frequency](/content/grade-10/math/quarter-2/topic-statistics-lesson-9-cumulative-frequency-displays/images/common-error-comparison.svg)

> [!WARNING] Misconception 1: "Cumulative frequency is the same as frequency."
>
> Frequency counts one class. Cumulative frequency counts that class and all earlier classes.

> [!WARNING] Misconception 2: "The ogive can go down."
>
> A less-than ogive should rise or stay flat because the running total never decreases.

> [!WARNING] Misconception 3: "At least" and "at most" are interchangeable.
>
> "At most 79" uses values \(79\) or below. "At least 80" uses values \(80\) or above. They usually require different counts.

## Error Analysis

A student uses the quiz score table and writes:

> "The cumulative frequency for `70-79` is 10 because there are 10 learners in that interval."

**Find the mistake:** The student reported the ordinary frequency, not the cumulative frequency.

**Correct reasoning:** Add all frequencies up to and including `70-79`:

$$
2+4+6+10=22
$$

The cumulative frequency for `70-79` is 22 learners.

## Self-Explanation Prompts

Answer these in your own words.

1. How do you know which class frequencies to include in an "at most" question?
2. Why does an ogive use class boundaries instead of only class names?
3. How can you check whether a cumulative table has a running-total error?
4. What sentence would you write after finding that 24 out of 30 learners met a benchmark?

**Sample Responses**

1. I include the class named in the question and all classes below it.
2. Boundaries place each point on a number scale, so the graph can show position between classes.
3. I check that each cumulative value equals the previous cumulative value plus the next frequency, and that the final value equals the total.
4. Sample: In this class, 24 out of 30 learners, or 80%, met the benchmark.

## Extension Challenge

Create a cumulative frequency table for a school-related data set, such as commute time, quiz scores, sleep hours, or daily screen time. Then write two conclusions:

1. one conclusion using "at most"
2. one conclusion estimating a median or percentile class

## Mastery Checklist

Check each statement when you can do it confidently.

- I can add ordinary frequencies to make less-than cumulative frequencies.
- I can explain the difference between frequency and cumulative frequency.
- I can plot or read an ogive using upper class boundaries.
- I can answer "at most" and "at least" questions from grouped data.
- I can estimate a median or percentile class from a cumulative display.
- I can write a context sentence after computing a value.

> [!PRACTICE] What To Do Next
>
> Use the practice exam for quick checks on vocabulary, running totals, and direct readings from tables. Then use the assessment when you are ready to interpret ogives, estimate positions, and justify conclusions from cumulative data.

## Final Summary

Cumulative frequency displays turn separate class counts into running totals. A table helps you compute the totals, a cumulative histogram shows the totals as bars, and an ogive shows the totals as a rising line. The habit to remember is simple: add in order, check the final total, then interpret the count in context.
