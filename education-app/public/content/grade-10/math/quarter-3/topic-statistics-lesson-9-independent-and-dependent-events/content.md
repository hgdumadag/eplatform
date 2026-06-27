# Statistics - Lesson 9: Independent and Dependent Events

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to **tell whether two events are independent or dependent, choose the correct multiplication rule, and explain the probability in context.**

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 50 minutes |
| Difficulty | Intermediate |
| Main skill | Deciding whether the second probability stays the same or changes |
| Tools | Paper, pencil, calculator for fraction or decimal checks |

## Visual Study Set

Use these diagrams as anchors while you study. Each image shows a different part of identifying and solving compound-event probability.

![Decision map for independent and dependent events](/content/grade-10/math/quarter-3/topic-statistics-lesson-9-independent-and-dependent-events/images/event-decision-map.svg)

![With replacement and without replacement comparison](/content/grade-10/math/quarter-3/topic-statistics-lesson-9-independent-and-dependent-events/images/replacement-comparison.svg)

![Tree diagram for independent events](/content/grade-10/math/quarter-3/topic-statistics-lesson-9-independent-and-dependent-events/images/tree-independent.svg)

![Tree diagram for dependent events](/content/grade-10/math/quarter-3/topic-statistics-lesson-9-independent-and-dependent-events/images/tree-dependent.svg)

![Formula flow for multiplying event probabilities](/content/grade-10/math/quarter-3/topic-statistics-lesson-9-independent-and-dependent-events/images/formula-flow.svg)

## What You Should Already Know

> [!CHECK] Pre-Check
>
> Use these questions to check the skills you will need before reading the explanation.

Before reading, check that you can:

- write probability as favorable outcomes over total outcomes
- multiply fractions
- reduce a fraction or convert it to a decimal or percent
- recognize when a sample space changes after an event happens
- write a final answer with a short context sentence

### Pre-check / Readiness Quiz

Try these before reading the explanation.

1. A bag has 3 blue marbles and 5 red marbles. What is $P(\text{blue})$?
2. What is $\frac{2}{5}\cdot\frac{3}{4}$?
3. If one card is drawn and put back before the next draw, does the total number of cards change?
4. If one card is drawn and kept out before the next draw, does the total number of cards change?

<details>
<summary>Reveal pre-check answers</summary>

1. $\frac{3}{8}$
2. $\frac{6}{20}=\frac{3}{10}$
3. No. The card is replaced, so the same sample space is available again.
4. Yes. One card is removed, so the second probability must be updated.
</details>

## Key Vocabulary

| Term | Meaning |
|---|---|
| Event | An outcome or group of outcomes, such as drawing a red card |
| Independent events | Events where the first event does not change the probability of the second event |
| Dependent events | Events where the first event changes the probability of the second event |
| With replacement | The first item is returned before the next selection, so the total resets |
| Without replacement | The first item is not returned, so the total and sometimes the favorable count change |
| Compound event | Two or more events considered together, often using the word "and" |
| Tree diagram | A branching diagram that shows possible outcomes and their probabilities in order |

> [!IMPORTANT] Core Idea
>
> For "A and B" probability, multiply. The key decision is whether the second fraction stays the same or must be updated after the first event.

## Try Before You Read

A box has 4 green tiles and 6 yellow tiles.

Two tiles are selected.

- Scenario 1: The first tile is put back before the second selection.
- Scenario 2: The first tile is kept out before the second selection.

Which scenario should have the same denominator on both draws?

<details>
<summary>Reveal thinking guide</summary>

Ask whether the box returns to its original state before the second draw.
</details>

<details>
<summary>Reveal answer</summary>

Scenario 1 has the same denominator on both draws because the first tile is replaced. Scenario 2 changes after the first draw.
</details>

## Visual Introduction

Independence is about influence. If event A happens, does it affect the chance of event B?

![Decision map for independent and dependent events](/content/grade-10/math/quarter-3/topic-statistics-lesson-9-independent-and-dependent-events/images/event-decision-map.svg)

Drawing a number from a spinner and then flipping a coin is usually independent. The spinner result does not change the coin. Drawing two objects from the same container without replacement is usually dependent. The first draw changes what remains.

## Main Concept Explanation

### 1. Decide Whether the Events Are Independent or Dependent

Use the question:

> After the first event happens, does the probability of the second event change?

| Situation | Relationship | Reason |
|---|---|---|
| Flip a coin, then roll a die | Independent | The coin result does not change the die |
| Draw a card, replace it, then draw again | Independent | The deck resets |
| Draw a card, keep it out, then draw again | Dependent | The deck has fewer cards |
| Choose a student, then choose another without choosing the same student again | Dependent | The class list changes |

### 2. Use the Correct Multiplication Rule

For independent events:

$$P(A\text{ and }B)=P(A)\cdot P(B)$$

For dependent events:

$$P(A\text{ and }B)=P(A)\cdot P(B\text{ after }A)$$

The notation can look advanced, but the habit is simple: multiply the first probability by the updated second probability.

### 3. Watch Replacement Language

Replacement language is one of the fastest clues.

![With replacement and without replacement comparison](/content/grade-10/math/quarter-3/topic-statistics-lesson-9-independent-and-dependent-events/images/replacement-comparison.svg)

| Phrase in the problem | What it usually means |
|---|---|
| with replacement | independent draws |
| put back | independent draws |
| without replacement | dependent draws |
| kept out | dependent draws |
| selected and not returned | dependent draws |

> [!WARNING] Denominator Alert
>
> In a without-replacement problem, the denominator usually decreases after the first draw. If the first draw removes a favorable item, the numerator decreases too.

### 4. Use a Tree Diagram When the Order Matters

A tree diagram keeps the first event and second event separate.

![Tree diagram for independent events](/content/grade-10/math/quarter-3/topic-statistics-lesson-9-independent-and-dependent-events/images/tree-independent.svg)

In the independent tree, the second branches repeat because the first draw is replaced.

![Tree diagram for dependent events](/content/grade-10/math/quarter-3/topic-statistics-lesson-9-independent-and-dependent-events/images/tree-dependent.svg)

In the dependent tree, the second branches change because one item has been removed.

## Rule Box / Formula Box

![Formula flow for multiplying event probabilities](/content/grade-10/math/quarter-3/topic-statistics-lesson-9-independent-and-dependent-events/images/formula-flow.svg)

| Question Type | Rule | What to Check |
|---|---|---|
| Independent "A and B" | $P(A)\cdot P(B)$ | The first event does not affect the second |
| Dependent "A and B" | $P(A)\cdot P(B\text{ after }A)$ | Update the second probability |
| With replacement | Usually independent | Total resets before the next draw |
| Without replacement | Usually dependent | Total decreases after a draw |

## Worked Example

**Problem:** A bag has 5 red counters and 3 blue counters. Two counters are drawn without replacement. What is the probability of drawing a red counter first and a blue counter second?

**Step 1: Identify the relationship.**

The counters are drawn **without replacement**, so the events are dependent.

**Step 2: Find the first probability.**

There are 5 red counters out of 8 total counters.

$$P(\text{red first})=\frac{5}{8}$$

**Step 3: Update the second probability.**

After one red counter is removed, 7 counters remain. The number of blue counters is still 3.

$$P(\text{blue second after red first})=\frac{3}{7}$$

**Step 4: Multiply.**

$$P(\text{red then blue})=\frac{5}{8}\cdot\frac{3}{7}=\frac{15}{56}$$

> [!EXAMPLE] Complete Answer
>
> The probability of drawing a red counter first and a blue counter second without replacement is $\frac{15}{56}$, because the second draw is made from the 7 counters left after the red counter is removed.

## Guided Practice with Revealable Hints

### Problem 1

A spinner has 4 equal sections: A, B, C, and D. The spinner is spun twice. What is the probability of spinning A, then C?

<details>
<summary>Hint 1</summary>

Does the first spin change the spinner?
</details>

<details>
<summary>Hint 2</summary>

The events are independent, so multiply $\frac{1}{4}$ by $\frac{1}{4}$.
</details>

<details>
<summary>Show solution</summary>

$$\frac{1}{4}\cdot\frac{1}{4}=\frac{1}{16}$$

The probability of spinning A, then C is $\frac{1}{16}$.
</details>

### Problem 2

A jar has 2 black marbles and 4 white marbles. Two marbles are drawn without replacement. What is the probability of drawing two black marbles?

<details>
<summary>Hint 1</summary>

The first black marble is not put back.
</details>

<details>
<summary>Hint 2</summary>

After one black marble is removed, there is 1 black marble left out of 5 total marbles.
</details>

<details>
<summary>Show solution</summary>

$$\frac{2}{6}\cdot\frac{1}{5}=\frac{2}{30}=\frac{1}{15}$$

The probability of drawing two black marbles without replacement is $\frac{1}{15}$.
</details>

### Problem 3

A card is chosen from a set of 10 cards numbered 1 to 10, replaced, and then another card is chosen. What is the probability of choosing an even number both times?

<details>
<summary>Hint 1</summary>

The card is replaced, so the probability resets.
</details>

<details>
<summary>Hint 2</summary>

There are 5 even numbers out of 10 cards.
</details>

<details>
<summary>Show solution</summary>

$$\frac{5}{10}\cdot\frac{5}{10}=\frac{1}{2}\cdot\frac{1}{2}=\frac{1}{4}$$

The probability is $\frac{1}{4}$.
</details>

## Mini-Quiz with Answer Checking

1. True or false: If two events are independent, the first event changes the probability of the second.
2. A bag has 3 red and 2 blue chips. One chip is drawn, replaced, and another chip is drawn. Is this independent or dependent?
3. A bag has 3 red and 2 blue chips. One chip is drawn and kept out. Is the second draw independent or dependent?
4. What is $P(\text{heads then 6})$ when flipping a fair coin and rolling a fair die?
5. Why does the denominator change in a without-replacement draw?

<details>
<summary>Reveal mini-quiz answers</summary>

1. False. Independent means the first event does not change the second probability.
2. Independent, because the chip is replaced.
3. Dependent, because the first chip changes what remains.
4. $\frac{1}{2}\cdot\frac{1}{6}=\frac{1}{12}$
5. One item has been removed, so there are fewer possible items left for the second draw.
</details>

## Independent Practice

Complete these before checking the answer key.

1. Decide whether the events are independent or dependent: roll a die, then flip a coin.
2. Decide whether the events are independent or dependent: draw a name from a class list, do not replace it, then draw another name.
3. A bag has 4 red and 6 blue tiles. With replacement, find $P(\text{red then red})$.
4. The same bag has 4 red and 6 blue tiles. Without replacement, find $P(\text{red then red})$.
5. A fair coin is flipped three times. Find $P(\text{heads, heads, heads})$.
6. A box has 5 green and 7 purple markers. Without replacement, find $P(\text{green then purple})$.
7. Explain why the answers to questions 3 and 4 are different.
8. Write one complete sentence interpreting the result of question 6.

## Answer Key with Explanations

1. Independent. The die does not affect the coin.
2. Dependent. The first name is removed from the class list.
3. $\frac{4}{10}\cdot\frac{4}{10}=\frac{16}{100}=\frac{4}{25}$. Replacement resets the bag.
4. $\frac{4}{10}\cdot\frac{3}{9}=\frac{12}{90}=\frac{2}{15}$. The first red tile is not returned.
5. $\frac{1}{2}\cdot\frac{1}{2}\cdot\frac{1}{2}=\frac{1}{8}$.
6. $\frac{5}{12}\cdot\frac{7}{11}=\frac{35}{132}$.
7. With replacement, there are still 4 red tiles out of 10 on the second draw. Without replacement, only 3 red tiles remain out of 9.
8. Sample: The probability of drawing a green marker first and a purple marker second without replacement is $\frac{35}{132}$.

## Misconception Alerts

> [!WARNING] Misconception 1: "Two events are dependent because they happen one after another."
>
> Order alone does not make events dependent. The first event must change the probability of the second event.

> [!WARNING] Misconception 2: "Without replacement only changes the denominator."
>
> The numerator can change too. If the first draw removes the same type of item you need again, the favorable count decreases.

> [!WARNING] Misconception 3: "For 'and' problems, add the probabilities."
>
> For compound events that both need to happen, multiply the probabilities. Addition is used for many "or" situations, not this lesson's "and" situations.

## Error Analysis

A student solves this problem:

> A bag has 6 red and 4 blue marbles. Two red marbles are drawn without replacement.
>
> Student work: $\frac{6}{10}\cdot\frac{6}{10}=\frac{36}{100}$

**Find the mistake:** The student treated the draws as independent even though the problem says without replacement.

**Correct reasoning:**

After the first red marble is removed, there are 5 red marbles left out of 9 total marbles.

$$\frac{6}{10}\cdot\frac{5}{9}=\frac{30}{90}=\frac{1}{3}$$

## Self-Explanation Prompts

Answer these in your own words.

1. How can you tell whether the second probability should stay the same or change?
2. Why does "with replacement" usually create independent events?
3. When drawing without replacement, what two numbers should you check before writing the second fraction?
4. How would you explain the difference between independent and dependent events to a classmate?

**Sample Responses**

1. I ask whether the first event changes the sample space for the second event.
2. The item is returned, so the original total and category counts are available again.
3. I check the new total and the new number of favorable outcomes.
4. Independent events do not affect each other; dependent events do affect the next probability.

## Extension Challenge

Create your own without-replacement problem using at least two colors or categories. Then:

1. identify whether the events are independent or dependent
2. write the first probability
3. update the second probability
4. multiply and explain the result in one sentence

## Mastery Checklist

Check each statement when you can do it confidently.

- I can define independent and dependent events.
- I can recognize replacement language in a probability problem.
- I can use $P(A\text{ and }B)=P(A)\cdot P(B)$ for independent events.
- I can update the second probability for dependent events.
- I can use a tree diagram or ordered steps to organize compound probability.
- I can explain the final probability in context.

> [!PRACTICE] What To Do Next
>
> Use the practice exam for quick checks on vocabulary, replacement language, and basic multiplication. Then use the assessment when you are ready for mixed independent and dependent event problems with explanations.

## Final Summary

Independent and dependent event problems are not only about multiplying fractions. The real skill is deciding whether the first event changes the second probability. If the situation resets, keep the same probability. If something is removed or the condition changes, update before multiplying.
