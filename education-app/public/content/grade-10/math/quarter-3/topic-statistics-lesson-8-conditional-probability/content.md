# Statistics - Lesson 8: Conditional Probability

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to solve conditional probability using contingency tables and Venn diagrams, then explain why the denominator changes when a condition is given.

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 50 minutes |
| Difficulty | Intermediate |
| Main skill | Finding \(P(A \mid B)\) from tables, diagrams, and context |
| Tools | Pencil, calculator, scratch paper |

<!-- visual-assets:start -->

## Visual Study Set

Use these diagrams as anchors while you practice.

![Conditional probability denominator shift from all students to only the given group](/content/grade-10/math/quarter-3/topic-statistics-lesson-8-conditional-probability/images/lesson-visual.svg)

![Two-way table for review attendance and passing status](/content/grade-10/math/quarter-3/topic-statistics-lesson-8-conditional-probability/images/two-way-table-review-pass.svg)

![Venn diagram showing art club, honor roll, and their overlap](/content/grade-10/math/quarter-3/topic-statistics-lesson-8-conditional-probability/images/venn-conditional-overlap.svg)

![Formula map for conditional probability](/content/grade-10/math/quarter-3/topic-statistics-lesson-8-conditional-probability/images/conditional-formula-map.svg)

![Tree diagram for drawing two marbles without replacement](/content/grade-10/math/quarter-3/topic-statistics-lesson-8-conditional-probability/images/tree-diagram-without-replacement.svg)

<!-- visual-assets:end -->

## What You Should Already Know

> [!CHECK] Pre-Check
>
> Use these questions to check the skills you will need before reading the lesson.

Before starting, make sure these facts feel familiar:

- A probability is a favorable count divided by a total count.
- The word **and** usually points to an overlap or intersection.
- A two-way table sorts the same people or outcomes by two categories.
- A Venn diagram places shared outcomes in the overlapping region.
- Fractions such as \(\frac{12}{30}\) can be simplified or changed to decimals and percents.

### Pre-check / Readiness Quiz

Try these before reading the rest of the lesson.

1. A club has 30 members. If 18 are Grade 10 learners, what fraction of the club is Grade 10?
2. In a table, what does a row total represent?
3. In a Venn diagram, where do you place students who are in both groups?
4. If 9 of 15 students in a selected group passed, what probability describes passing within that group?

<details>
<summary>Reveal pre-check answers</summary>

1. \(\frac{18}{30} = \frac{3}{5}\).
2. A row total is the number of outcomes in that row category.
3. They go in the overlap.
4. \(\frac{9}{15} = \frac{3}{5}\).

If more than one item felt uncertain, review basic probability, row and column totals, and Venn diagram regions before continuing.
</details>

## Key Vocabulary

| Term | Meaning |
|---|---|
| Conditional probability | The probability of one event happening when another event is already known to have happened |
| Given | The condition that restricts the group you are allowed to count from |
| Restricted denominator | The smaller total created by the given condition |
| Intersection | Outcomes that are in both events, often shown by \(A \cap B\) or the word **and** |
| Two-way table | A table that organizes counts by two categories at the same time |
| Venn diagram | A diagram that shows events as circles and places overlaps in shared regions |

> [!TARGET] Target Skill
>
> When a problem says **given**, **among**, **of those**, or **if selected from**, change the denominator to the group named by that condition.

## Visual Introduction: The Denominator Changes

Suppose 30 learners were surveyed. Some attended a review session and some passed a quiz.

![Conditional probability denominator shift from all students to only the given group](/content/grade-10/math/quarter-3/topic-statistics-lesson-8-conditional-probability/images/lesson-visual.svg)

The question below is not asking about all 30 learners:

> Among learners who attended review, what is the probability that a learner passed?

The phrase **among learners who attended review** tells you to use only the review group as the denominator. If 20 learners attended review and 16 of them passed, then:

$$
P(\text{passed} \mid \text{review}) = \frac{16}{20} = \frac{4}{5} = 80\%
$$

> [!IMPORTANT] Core Idea
>
> Conditional probability is ordinary probability after the sample space has been restricted.

## Main Concept 1: Read the Condition First

The vertical bar in \(P(A \mid B)\) is read as "given."

$$
P(A \mid B) = \text{the probability of A given B}
$$

The event after the bar, \(B\), is the condition. It tells you the denominator.

| Symbol | Read it as | Denominator |
|---|---|---|
| \(P(\text{passed} \mid \text{review})\) | probability of passed given review | all learners who attended review |
| \(P(\text{review} \mid \text{passed})\) | probability of review given passed | all learners who passed |
| \(P(A \mid B)\) | probability of \(A\) given \(B\) | all outcomes in \(B\) |

> [!WARNING] Direction Trap
>
> \(P(A \mid B)\) and \(P(B \mid A)\) often have different denominators, so they usually have different values.

## Main Concept 2: Use the Formula

The conditional probability rule is:

$$
P(A \mid B)=\frac{P(A \cap B)}{P(B)}
$$

When you have counts instead of probabilities, use the matching count version:

$$
P(A \mid B)=\frac{\text{number in both A and B}}{\text{number in B}}
$$

![Formula map for conditional probability](/content/grade-10/math/quarter-3/topic-statistics-lesson-8-conditional-probability/images/conditional-formula-map.svg)

The numerator is still the part you want. The denominator is the given group.

## Worked Example 1: Two-Way Table

The table shows 40 learners.

![Two-way table for review attendance and passing status](/content/grade-10/math/quarter-3/topic-statistics-lesson-8-conditional-probability/images/two-way-table-review-pass.svg)

**Problem:** Find \(P(\text{passed} \mid \text{attended review})\).

**Step 1: Identify the given group.**  
The condition is **attended review**, so the denominator is the review row total: 24.

**Step 2: Find the overlap.**  
The learners who both attended review and passed are 18.

**Step 3: Divide and interpret.**

$$
P(\text{passed} \mid \text{attended review})=\frac{18}{24}=\frac{3}{4}=75\%
$$

> [!EXAMPLE] Complete Answer
>
> Among learners who attended review, the probability of passing was \(\frac{3}{4}\), or \(75\%\).

### Same Table, Different Question

Find \(P(\text{attended review} \mid \text{passed})\).

Now the condition is **passed**, so the denominator is the passed column total: 26.

$$
P(\text{attended review} \mid \text{passed})=\frac{18}{26}=\frac{9}{13}
$$

The numerator stayed 18, but the denominator changed. That is why reading the condition first matters.

## Worked Example 2: Venn Diagram

A survey of 50 learners records membership in art club and honor roll.

![Venn diagram showing art club, honor roll, and their overlap](/content/grade-10/math/quarter-3/topic-statistics-lesson-8-conditional-probability/images/venn-conditional-overlap.svg)

**Problem:** Find \(P(\text{honor roll} \mid \text{art club})\).

**Step 1: Use the art club circle as the denominator.**

Art club has \(10 + 8 = 18\) learners.

**Step 2: Use the overlap as the numerator.**

Art club and honor roll has 8 learners.

**Step 3: Divide.**

$$
P(\text{honor roll} \mid \text{art club})=\frac{8}{18}=\frac{4}{9}
$$

So, among learners in art club, the probability that a learner is on honor roll is \(\frac{4}{9}\).

## Worked Example 3: Without Replacement

Conditional probability also appears when the first event changes what is left.

![Tree diagram for drawing two marbles without replacement](/content/grade-10/math/quarter-3/topic-statistics-lesson-8-conditional-probability/images/tree-diagram-without-replacement.svg)

A bag has 3 red marbles and 2 blue marbles. One marble is drawn and not replaced. Then a second marble is drawn.

**Problem:** Find \(P(\text{second red} \mid \text{first red})\).

If the first marble was red, then the bag now has 2 red marbles and 2 blue marbles left. There are 4 marbles total.

$$
P(\text{second red} \mid \text{first red})=\frac{2}{4}=\frac{1}{2}
$$

> [!TIP] Without Replacement
>
> After an item is removed, update both the favorable count and the total count before finding the next probability.

## Guided Practice

### Guided Problem 1: Table Reading

Use the review table from the worked example. Find \(P(\text{did not pass} \mid \text{did not attend review})\).

<details>
<summary>Hint 1</summary>

The condition is **did not attend review**.
</details>

<details>
<summary>Hint 2</summary>

Use the no-review row total as the denominator.
</details>

<details>
<summary>Answer</summary>

\(\frac{8}{16}=\frac{1}{2}\). Among learners who did not attend review, the probability of not passing was \(\frac{1}{2}\).
</details>

### Guided Problem 2: Venn Diagram

Use the art and honor roll diagram. Find \(P(\text{art club} \mid \text{honor roll})\).

<details>
<summary>Hint 1</summary>

The condition is **honor roll**, so count everyone in the honor roll circle.
</details>

<details>
<summary>Hint 2</summary>

Honor roll has \(8 + 12 = 20\) learners.
</details>

<details>
<summary>Answer</summary>

\(\frac{8}{20}=\frac{2}{5}\). Among honor roll learners, the probability that a learner is in art club is \(\frac{2}{5}\).
</details>

### Guided Problem 3: Formula

Suppose \(P(A \cap B)=0.18\) and \(P(B)=0.30\). Find \(P(A \mid B)\).

<details>
<summary>Hint 1</summary>

Use \(P(A \mid B)=\frac{P(A \cap B)}{P(B)}\).
</details>

<details>
<summary>Hint 2</summary>

Divide \(0.18\) by \(0.30\).
</details>

<details>
<summary>Answer</summary>

\(P(A \mid B)=\frac{0.18}{0.30}=0.60\), or \(60\%\).
</details>

## Mini-Quiz

1. In \(P(A \mid B)\), which event gives the denominator?
2. What phrase in a word problem often signals conditional probability?
3. In the review table, why is \(P(\text{passed} \mid \text{review})\) not \(\frac{18}{40}\)?
4. True or false: \(P(A \mid B)\) is always equal to \(P(B \mid A)\).
5. A bag has 5 green and 3 yellow counters. One green is removed. What is the new total number of counters?

**Mini-Quiz Answers**

1. Event \(B\), the event after the vertical bar.
2. Sample answers: given, among, of those, if selected from.
3. Because the condition restricts the denominator to the 24 learners who attended review.
4. False.
5. There are 7 counters left.

## Independent Practice

Complete these before checking the answer key.

1. A class has 18 girls and 12 boys. Of the girls, 9 joined journalism. Find \(P(\text{journalism} \mid \text{girl})\).
2. In a survey, 14 learners play basketball, 9 play volleyball, and 5 play both. Find \(P(\text{volleyball} \mid \text{basketball})\).
3. A table shows 11 students passed and attended tutoring, while 20 students attended tutoring in all. Find \(P(\text{passed} \mid \text{tutoring})\).
4. If \(P(A \cap B)=0.12\) and \(P(B)=0.40\), find \(P(A \mid B)\).
5. A bag has 4 red and 6 blue chips. A red chip is drawn and not replaced. Find \(P(\text{second red} \mid \text{first red})\).
6. Explain why the phrase "among those who passed" changes the denominator.
7. Write a conditional probability question that would use the overlap of two events as its numerator.
8. A student computes \(P(\text{review} \mid \text{passed})\) but uses the review total as the denominator. Explain the mistake.

## Answer Key with Explanations

1. \(\frac{9}{18}=\frac{1}{2}\). The condition is girl, so use the 18 girls as the denominator.
2. \(\frac{5}{14}\). Basketball is the given group, and 5 learners are in both sports.
3. \(\frac{11}{20}\). Tutoring is the condition, so use all 20 tutored students.
4. \(0.30\), or \(30\%\), because \(0.12 \div 0.40 = 0.30\).
5. \(\frac{3}{9}=\frac{1}{3}\). After one red chip is removed, 3 red chips and 9 total chips remain.
6. It restricts the sample space to only the people who passed; everyone else is no longer part of the denominator.
7. Sample: "Among learners in the art club, what is the probability that a learner is on honor roll?"
8. For \(P(\text{review} \mid \text{passed})\), the denominator should be all students who passed. The event after the bar gives the denominator.

## Misconception Alerts

> [!WARNING] Misconception 1: "Use the grand total every time."
>
> The grand total is used for ordinary probability. Conditional probability uses the total from the given group.

> [!WARNING] Misconception 2: "The overlap is always the answer."
>
> The overlap is usually the numerator. You still divide by the restricted denominator.

> [!WARNING] Misconception 3: "The order of the condition does not matter."
>
> The order matters because \(P(A \mid B)\) and \(P(B \mid A)\) answer different questions.

## Error Analysis

A student writes:

> "There are 18 learners who attended review and passed. There are 40 learners total, so \(P(\text{passed} \mid \text{review})=\frac{18}{40}\)."

**Find the mistake:** The student used the grand total even though the condition says to look only at learners who attended review.

**Correct reasoning:** Use the review total as the denominator:

$$
P(\text{passed} \mid \text{review})=\frac{18}{24}=\frac{3}{4}
$$

## Self-Explanation Prompts

Answer these in your own words.

1. How do you decide which number belongs in the denominator?
2. Why is the word "given" important?
3. What is the difference between \(P(A \cap B)\) and \(P(A \mid B)\)?
4. How can a Venn diagram help you avoid using the wrong count?

**Sample Responses**

1. I look at the event after the vertical bar or the phrase after words like among, given, or of those.
2. It tells me the sample space has been restricted.
3. \(P(A \cap B)\) is the probability of both events happening; \(P(A \mid B)\) divides that overlap by the probability of the given event.
4. It shows the overlap and the whole circle for the condition, so I can see the numerator and denominator.

## Mastery Checklist

Check each statement when you can do it confidently.

- I can read \(P(A \mid B)\) as "probability of A given B."
- I can identify the restricted denominator from a word problem.
- I can compute conditional probability from a two-way table.
- I can compute conditional probability from a Venn diagram.
- I can update counts for a without-replacement situation.
- I can explain my answer with the phrase "among..." or "given..."

> [!PRACTICE] What To Do Next
>
> Use the practice exam for quick checks on denominators, tables, and Venn diagrams. Then use the assessment when you are ready for mixed conditional probability questions with explanations.

## Final Summary

Conditional probability asks what is likely inside a restricted group. Read the condition first, use that group as the denominator, place the overlap or desired count in the numerator, and finish with a sentence that names the group your probability describes.
