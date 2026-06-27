# Statistics - Lesson 7: Intersection of Events

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to **solve probability problems involving intersections and overlaps of events.**

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Content domain | Data and Probability |
| Time | About 50 minutes |
| Difficulty | Intermediate |
| Main skill | Finding and interpreting \(P(A \cap B)\), the probability that two events both happen |
| Tools | Pencil, scratch paper, calculator if allowed |

<!-- visual-assets:start -->

## Visual Study Set

Use these diagrams as anchors while you learn the idea of "both."

![Venn diagram showing the overlap for studied and passed](/content/grade-10/math/quarter-3/topic-statistics-lesson-7-intersection-of-events/images/lesson-visual.svg)

![Two-way table highlighting the studied-and-passed cell](/content/grade-10/math/quarter-3/topic-statistics-lesson-7-intersection-of-events/images/two-way-table-intersection.svg)

![Card deck example for red and face card overlap](/content/grade-10/math/quarter-3/topic-statistics-lesson-7-intersection-of-events/images/card-deck-intersection.svg)

![Formula map for finding an intersection probability](/content/grade-10/math/quarter-3/topic-statistics-lesson-7-intersection-of-events/images/intersection-formula-map.svg)

![Comparison of union and intersection shading](/content/grade-10/math/quarter-3/topic-statistics-lesson-7-intersection-of-events/images/union-vs-intersection.svg)

<!-- visual-assets:end -->

## What You Should Already Know

Before reading, check that you can:

- identify the total number of outcomes in a sample space
- read counts from a table or Venn diagram
- simplify fractions and convert them to decimals or percents
- recognize event language such as **A**, **B**, **A or B**, and **A and B**
- explain what a probability means in context

> [!CHECK] Pre-Check
>
> 1. In a class of 40 learners, 18 joined a club. What is the denominator for the probability that a randomly chosen learner joined a club?
> 2. If 12 learners both studied and passed, what word tells you this is an intersection?
> 3. Why is it risky to answer a probability question with only a number?
>
> Answers: 40; the word **both** or **and**; the number needs context so the reader knows which event and group it describes.

## Key Vocabulary

| Term | Meaning |
|---|---|
| Event | A set of outcomes, such as "studied" or "passed" |
| Intersection | The outcomes that belong to two events at the same time |
| \(A \cap B\) | Symbol for "A and B" or "the intersection of A and B" |
| Overlap | The shared region of two events in a Venn diagram |
| Joint frequency | A table count that belongs to two categories at once |
| Mutually exclusive | Events with no overlap, so \(P(A \cap B)=0\) |

> [!TARGET] Target Skill
>
> When a question asks for **both**, **and**, or **overlap**, find only the outcomes that satisfy both event conditions.

## Visual Introduction

Suppose 40 learners took a quiz. Event \(S\) means the learner studied. Event \(P\) means the learner passed.

![Venn diagram showing the overlap for studied and passed](/content/grade-10/math/quarter-3/topic-statistics-lesson-7-intersection-of-events/images/lesson-visual.svg)

The overlap has 18 learners. That means:

$$
S \cap P = \text{studied and passed}
$$

So the probability that a randomly chosen learner both studied and passed is:

$$
P(S \cap P)=\frac{18}{40}=\frac{9}{20}=0.45
$$

In words: **45% of the learners in this class both studied and passed the quiz.**

> [!IMPORTANT] Core Idea
>
> An intersection is stricter than a single event. The outcome must satisfy condition A and condition B at the same time.

## Main Concept 1: Read "And" as the Overlap

The word **and** usually points to an intersection.

| Question wording | Event relationship |
|---|---|
| studied **and** passed | intersection |
| red **and** face card | intersection |
| plays basketball **and** volleyball | intersection |
| has internet access **and** submitted online | intersection |

In a Venn diagram, the intersection is the shared middle region. In a table, the intersection is the cell where the two categories meet.

![Two-way table highlighting the studied-and-passed cell](/content/grade-10/math/quarter-3/topic-statistics-lesson-7-intersection-of-events/images/two-way-table-intersection.svg)

For the table above, the studied-and-passed count is 18 and the total is 40.

$$
P(\text{studied and passed})=\frac{18}{40}
$$

## Main Concept 2: Use the Correct Denominator

For a basic intersection probability, the denominator is the total number of equally likely outcomes or the total group being sampled.

$$
P(A \cap B)=\frac{\text{number of outcomes in both A and B}}{\text{total number of outcomes}}
$$

![Formula map for finding an intersection probability](/content/grade-10/math/quarter-3/topic-statistics-lesson-7-intersection-of-events/images/intersection-formula-map.svg)

> [!TIP] Phrase To Remember
>
> **Both on top, total on bottom.** Count only the overlap for the numerator, then use the whole sample space for the denominator.

## Worked Example

**Problem:** A class survey records whether learners studied for a quiz and whether they passed.

| | Passed | Did not pass | Total |
|---|---:|---:|---:|
| Studied | 18 | 6 | 24 |
| Did not study | 7 | 9 | 16 |
| Total | 25 | 15 | 40 |

Find \(P(\text{studied and passed})\).

**Step 1: Identify the two events.**  
Let \(S\) mean studied. Let \(P\) mean passed.

**Step 2: Find the intersection count.**  
The cell that is both studied and passed is 18.

**Step 3: Use the total group as the denominator.**  
There are 40 learners in the survey.

$$
P(S \cap P)=\frac{18}{40}
$$

**Step 4: Simplify and interpret.**

$$
\frac{18}{40}=\frac{9}{20}=0.45
$$

> [!EXAMPLE] Complete Answer
>
> \(P(S \cap P)=\frac{9}{20}=45\%\). In this class, 45% of the learners both studied and passed the quiz.

## Main Concept 3: Intersection in a Sample Space

Intersections also appear outside surveys. In a standard deck of 52 cards, let:

- \(R\) = the card is red
- \(F\) = the card is a face card

The red face cards are jack, queen, and king of hearts and diamonds. There are 6.

![Card deck example for red and face card overlap](/content/grade-10/math/quarter-3/topic-statistics-lesson-7-intersection-of-events/images/card-deck-intersection.svg)

$$
P(R \cap F)=\frac{6}{52}=\frac{3}{26}
$$

The numerator is not all red cards and not all face cards. It is only the cards that are both red and face cards.

## Union vs. Intersection

This lesson focuses on intersection, but it helps to compare it with union.

![Comparison of union and intersection shading](/content/grade-10/math/quarter-3/topic-statistics-lesson-7-intersection-of-events/images/union-vs-intersection.svg)

| Symbol | Meaning | What gets counted |
|---|---|---|
| \(A \cap B\) | A and B | only the overlap |
| \(A \cup B\) | A or B | A only, B only, and the overlap |

> [!WARNING] Common Symbol Trap
>
> \(A \cap B\) is the intersection. It counts the shared middle only. \(A \cup B\) is the union. It counts anything in A or B or both.

## Guided Practice

### Guided Problem 1: Read a Venn Diagram

A Venn diagram for 50 learners shows:

- 14 in sports only
- 11 in music only
- 9 in both sports and music
- 16 in neither

Find \(P(\text{sports and music})\).

<details>
<summary>Hint 1</summary>

The word **and** means use the overlap.
</details>

<details>
<summary>Hint 2</summary>

The overlap count is 9 and the total is 50.
</details>

<details>
<summary>Answer</summary>

\(P(\text{sports and music})=\frac{9}{50}=0.18\). So 18% of the learners are in both sports and music.
</details>

### Guided Problem 2: Read a Table

A survey of 80 learners records whether they use an online reviewer and whether they passed a test.

| | Passed | Did not pass | Total |
|---|---:|---:|---:|
| Used reviewer | 30 | 10 | 40 |
| Did not use reviewer | 22 | 18 | 40 |
| Total | 52 | 28 | 80 |

Find \(P(\text{used reviewer and passed})\).

<details>
<summary>Hint 1</summary>

Find the cell where "used reviewer" and "passed" meet.
</details>

<details>
<summary>Hint 2</summary>

Use the whole survey total as the denominator.
</details>

<details>
<summary>Answer</summary>

\(P=\frac{30}{80}=\frac{3}{8}=0.375\). In this survey, 37.5% of learners used the reviewer and passed.
</details>

### Guided Problem 3: Mutually Exclusive Events

A number from 1 to 10 is selected at random. Event \(E\) is "even." Event \(O\) is "odd." Find \(P(E \cap O)\).

<details>
<summary>Hint 1</summary>

Can one number be even and odd at the same time?
</details>

<details>
<summary>Answer</summary>

\(P(E \cap O)=0\). Even and odd are mutually exclusive in this sample space.
</details>

## Mini-Quiz

1. What word in a probability question often signals an intersection?
2. In \(P(A \cap B)\), what does the symbol \(\cap\) mean?
3. A survey has 60 learners. If 15 both joined a club and attended practice, what is \(P(\text{joined and attended})\)?
4. True or false: If two events are mutually exclusive, their intersection probability is 0.
5. Why is the denominator 40 in the worked example?

**Mini-Quiz Answers**

1. **And**, **both**, or **overlap**.
2. Intersection, or outcomes in both A and B.
3. \(\frac{15}{60}=\frac{1}{4}=25\%\).
4. True.
5. The class survey included 40 learners in all.

## Independent Practice

Complete these before checking the answer key.

1. A Venn diagram for 36 learners shows 8 in the overlap of drama and dance. Find \(P(\text{drama and dance})\).
2. A table shows 12 learners both brought lunch and bought a drink out of 48 learners. Find the probability.
3. In a deck of 52 cards, how many cards are both black and kings?
4. In a spinner numbered 1 to 8, find \(P(\text{even and greater than 5})\).
5. Explain why \(P(A \cap B)\) cannot be larger than \(P(A)\).
6. A learner uses the total of event A as the denominator for a basic intersection probability. What might be wrong?
7. Write a one-sentence interpretation for \(P(\text{reviewed and passed})=\frac{21}{70}\).
8. Create your own school example where the intersection count is 10 and the total is 50.

## Answer Key with Explanations

1. \(\frac{8}{36}=\frac{2}{9}\). The overlap count is 8 and the total group is 36.
2. \(\frac{12}{48}=\frac{1}{4}=25\%\). The word both points to the intersection.
3. 2 cards. The black kings are the king of clubs and the king of spades.
4. \(\frac{2}{8}=\frac{1}{4}\). The numbers that are even and greater than 5 are 6 and 8.
5. The intersection is only the part of A that also belongs to B, so it cannot include more outcomes than all of A.
6. For a basic intersection probability, the denominator should usually be the total sample space. Using only event A would answer a conditional probability instead.
7. Sample: In this group, 21 out of 70 learners, or 30%, both reviewed and passed.
8. Sample: In a group of 50 learners, 10 both submitted the project early and earned full credit, so the probability is \(\frac{10}{50}=\frac{1}{5}\).

## Misconception Alerts

> [!WARNING] Misconception 1: "And means add."
>
> In probability language, **and** usually means intersection. Count outcomes that satisfy both conditions, not the total from two separate groups.

> [!WARNING] Misconception 2: "The overlap is counted twice."
>
> Double-counting is a union issue. For an intersection, the overlap itself is exactly what you want.

> [!WARNING] Misconception 3: "Every table total can be used as the denominator."
>
> Use the denominator that matches the question. In this lesson's basic intersection problems, that is the total group or sample space.

## Error Analysis

A student writes:

> "18 learners studied and 25 learners passed, so \(P(S \cap P)=\frac{43}{40}\)."

**Find the mistake:** The student added the totals for the two events. That counts too many learners and even creates a probability greater than 1.

**Correct reasoning:** The intersection is the studied-and-passed cell only.

$$
P(S \cap P)=\frac{18}{40}=\frac{9}{20}
$$

## Self-Explanation Prompts

Answer these in your own words.

1. How can you tell that a question is asking for an intersection?
2. Why is the overlap the numerator in \(P(A \cap B)\)?
3. How is intersection different from union?
4. What should your final sentence include besides the fraction or percent?

**Sample Responses**

1. I look for words such as **and**, **both**, or **overlap**.
2. The overlap contains the outcomes that satisfy both event conditions.
3. Intersection counts only both events. Union counts A only, B only, and both.
4. It should name the group, the two events, and what the probability means.

## Mastery Checklist

Check each statement when you can do it confidently.

- I can identify event \(A\), event \(B\), and the total group.
- I can locate the overlap in a Venn diagram.
- I can find a joint frequency in a two-way table.
- I can compute \(P(A \cap B)\) using the overlap count over the total.
- I can explain why mutually exclusive events have intersection probability 0.
- I can distinguish intersection from union.
- I can write a final answer with context.

> [!PRACTICE] What To Do Next
>
> Use the practice exam for quick checks on vocabulary, overlap counts, and basic computations. Use the assessment when you can read both Venn diagrams and tables, choose the correct denominator, and explain the result in context.

## Final Summary

An intersection describes the outcomes that belong to two events at the same time. To solve these problems, look for **and**, **both**, or **overlap**, count the shared outcomes, divide by the total sample space, and write what the probability means in the situation.
