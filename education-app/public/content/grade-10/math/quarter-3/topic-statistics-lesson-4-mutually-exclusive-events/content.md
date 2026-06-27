# Statistics - Lesson 4: Mutually Exclusive Events

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to **illustrate mutually exclusive and non-mutually exclusive events** and use the correct probability rule for each situation.

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 50 minutes |
| Difficulty | Intermediate |
| Main skill | Deciding whether two events can happen together |
| Tools | Pencil, scratch paper, and calculator if needed |

<!-- visual-assets:start -->

## Visual Study Set

Use these diagrams as anchors while you work through the lesson.

![Single-card draw showing red and black as mutually exclusive events](/content/grade-10/math/quarter-3/topic-statistics-lesson-4-mutually-exclusive-events/images/lesson-visual.svg)

![Venn diagram with two separate event circles](/content/grade-10/math/quarter-3/topic-statistics-lesson-4-mutually-exclusive-events/images/venn-mutually-exclusive.svg)

![Venn diagram with overlapping event circles](/content/grade-10/math/quarter-3/topic-statistics-lesson-4-mutually-exclusive-events/images/venn-overlap-events.svg)

![Spinner showing color and number events that can overlap](/content/grade-10/math/quarter-3/topic-statistics-lesson-4-mutually-exclusive-events/images/spinner-overlap-model.svg)

![Flowchart for choosing the probability rule for A or B](/content/grade-10/math/quarter-3/topic-statistics-lesson-4-mutually-exclusive-events/images/addition-rule-flow.svg)

<!-- visual-assets:end -->

## What You Should Already Know

> [!CHECK] Pre-Check
>
> Use these questions to check the skills you will need before reading the lesson.

Before starting, make sure these skills feel familiar:

- Identify the sample space in a simple experiment.
- Count favorable outcomes and total outcomes.
- Write probability as a fraction, decimal, or percent.
- Use the word **or** to mean "one event, the other event, or both" unless the problem says otherwise.
- Explain why a probability answer must match the situation.

### Pre-check / Readiness Quiz

Try these before reading the rest of the lesson.

1. A fair number cube is rolled. How many outcomes are in the sample space?
2. In one coin toss, can the result be both heads and tails?
3. In one card draw, can a card be both red and a heart?
4. If \(P(A)=0.30\), \(P(B)=0.20\), and \(A\) and \(B\) cannot happen together, what is \(P(A \text{ or } B)\)?

<details>
<summary>Reveal pre-check answers</summary>

1. There are \(6\) outcomes.
2. No. One coin toss has only one face showing.
3. Yes. Every heart is red, so "red" and "heart" can overlap.
4. \(0.30 + 0.20 = 0.50\).

If more than one item felt uncertain, review sample spaces and basic probability before continuing.
</details>

## Key Vocabulary

| Term | Meaning |
|---|---|
| Outcome | One possible result of a chance experiment |
| Sample space | The set of all possible outcomes |
| Event | A set of outcomes from the sample space |
| Mutually exclusive events | Events that cannot happen at the same time in one trial |
| Non-mutually exclusive events | Events that can happen at the same time in one trial |
| Intersection, \(A \cap B\) | Outcomes that are in both event \(A\) and event \(B\) |
| Union, \(A \cup B\) | Outcomes that are in event \(A\), event \(B\), or both |
| Overlap | The shared outcomes in two events |

> [!TARGET] Target Skill
>
> Ask: "Can the same outcome belong to both events?" If the answer is no, the events are mutually exclusive. If the answer is yes, they are non-mutually exclusive.

## Visual Introduction: One Outcome, Two Labels?

Imagine drawing one card from a standard deck.

![Single-card draw showing red and black as mutually exclusive events](/content/grade-10/math/quarter-3/topic-statistics-lesson-4-mutually-exclusive-events/images/lesson-visual.svg)

The event "red card" and the event "black card" cannot both happen on one draw. A single card has one color.

Now compare that with the event "red card" and the event "heart." These can happen together because every heart is a red card.

> [!IMPORTANT] Core Idea
>
> Mutually exclusive is about **whether events can overlap in the same trial**, not whether both events are possible separately.

## Main Concept 1: Mutually Exclusive Events Have No Overlap

Two events are mutually exclusive when they share no outcomes.

In symbols:

$$
P(A \cap B)=0
$$

For example, when one number cube is rolled:

- \(A=\) roll an even number: \(\{2,4,6\}\)
- \(B=\) roll an odd number: \(\{1,3,5\}\)

No outcome is in both lists. The events are mutually exclusive.

![Venn diagram with two separate event circles](/content/grade-10/math/quarter-3/topic-statistics-lesson-4-mutually-exclusive-events/images/venn-mutually-exclusive.svg)

### Addition Rule for Mutually Exclusive Events

If \(A\) and \(B\) are mutually exclusive, then:

$$
P(A \text{ or } B)=P(A)+P(B)
$$

Because there is no overlap, nothing is counted twice.

> [!TIP] Quick Test
>
> Say both event names after the phrase "in one trial." If the combined sentence is impossible, the events are mutually exclusive.

## Main Concept 2: Non-Mutually Exclusive Events Can Overlap

Two events are non-mutually exclusive when at least one outcome belongs to both events.

For example, in a class survey:

- \(A=\) students who joined the math club
- \(B=\) students who joined the science club

A student can join both clubs, so the events can overlap.

![Venn diagram with overlapping event circles](/content/grade-10/math/quarter-3/topic-statistics-lesson-4-mutually-exclusive-events/images/venn-overlap-events.svg)

For non-mutually exclusive events:

$$
P(A \cap B)>0
$$

### General Addition Rule

When events can overlap, subtract the overlap once:

$$
P(A \text{ or } B)=P(A)+P(B)-P(A \cap B)
$$

This prevents double-counting outcomes that belong to both events.

## Main Concept 3: Read the Experiment Carefully

The same event words can change meaning depending on the experiment.

| Situation | Events | Mutually exclusive? | Why |
|---|---|---|---|
| One card is drawn | Heart and spade | Yes | One card has only one suit |
| One card is drawn | Red and heart | No | A heart is red |
| One number cube is rolled | Even and greater than 4 | No | The outcome 6 is both |
| One student is selected | Plays volleyball and plays chess | No | A student can do both |
| One student is selected for one classroom role | President and treasurer, if roles cannot be shared | Yes | One student cannot hold both roles in that setup |

The spinner below shows why overlap matters. The event "blue" and the event "number greater than 4" overlap at the blue 6 section.

![Spinner showing color and number events that can overlap](/content/grade-10/math/quarter-3/topic-statistics-lesson-4-mutually-exclusive-events/images/spinner-overlap-model.svg)

> [!WARNING] Language Trap
>
> In probability, "A or B" usually includes the overlap. It means \(A\), \(B\), or both, unless the problem clearly says "but not both."

## Worked Example: Choose the Correct Rule

**Problem:** A school club surveys \(40\) learners about activities. \(18\) learners joined art club, \(15\) joined music club, and \(6\) joined both. If one surveyed learner is selected at random, what is the probability the learner joined art club or music club?

**Step 1: Name the events.**

Let \(A=\) joined art club.

Let \(B=\) joined music club.

**Step 2: Decide whether the events overlap.**

The problem says \(6\) learners joined both, so the events are non-mutually exclusive.

**Step 3: Use the general addition rule.**

$$
P(A \text{ or } B)=P(A)+P(B)-P(A \cap B)
$$

Count first:

$$
18+15-6=27
$$

So:

$$
P(A \text{ or } B)=\frac{27}{40}=0.675=67.5\%
$$

**Step 4: Interpret the answer.**

Out of the \(40\) surveyed learners, \(27\) joined art club or music club, including those who joined both.

> [!EXAMPLE] Complete Answer
>
> The probability is \(\frac{27}{40}\), or \(67.5\%\). The subtraction is needed because the \(6\) learners in both clubs were counted in the art total and the music total.

## Rule Choice Flow

Use this process before calculating:

![Flowchart for choosing the probability rule for A or B](/content/grade-10/math/quarter-3/topic-statistics-lesson-4-mutually-exclusive-events/images/addition-rule-flow.svg)

1. Identify the experiment and sample space.
2. List or describe event \(A\) and event \(B\).
3. Ask whether any outcome can be in both events.
4. If there is no overlap, add \(P(A)+P(B)\).
5. If there is overlap, add and subtract \(P(A \cap B)\).

## Guided Practice

### Guided Problem 1: One Number Cube

A number cube is rolled once.

Let \(A=\) rolling a \(1\), and let \(B=\) rolling an even number. Are \(A\) and \(B\) mutually exclusive?

<details>
<summary>Hint 1</summary>

List the outcomes: \(A=\{1\}\), and \(B=\{2,4,6\}\).
</details>

<details>
<summary>Hint 2</summary>

Check whether any number appears in both lists.
</details>

<details>
<summary>Answer</summary>

Yes. The events are mutually exclusive because no outcome is both \(1\) and even.
</details>

### Guided Problem 2: One Number Cube Again

A number cube is rolled once.

Let \(A=\) rolling an even number, and let \(B=\) rolling a number greater than \(4\). Are the events mutually exclusive?

<details>
<summary>Hint 1</summary>

\(A=\{2,4,6\}\), and \(B=\{5,6\}\).
</details>

<details>
<summary>Hint 2</summary>

Look for a shared outcome.
</details>

<details>
<summary>Answer</summary>

No. The events are non-mutually exclusive because \(6\) belongs to both events.
</details>

### Guided Problem 3: Use the Addition Rule

In one card draw, what is the probability of drawing a heart or a spade?

<details>
<summary>Hint 1</summary>

A single card cannot be both a heart and a spade.
</details>

<details>
<summary>Hint 2</summary>

There are \(13\) hearts and \(13\) spades in \(52\) cards.
</details>

<details>
<summary>Answer</summary>

The events are mutually exclusive, so:

$$
P(\text{heart or spade})=\frac{13}{52}+\frac{13}{52}=\frac{26}{52}=\frac{1}{2}
$$
</details>

## Mini-Quiz

Answer without scrolling back.

1. What does it mean for two events to be mutually exclusive?
2. What is \(P(A \cap B)\) when \(A\) and \(B\) are mutually exclusive?
3. Why do we subtract \(P(A \cap B)\) in the general addition rule?
4. A card is drawn once. Are "queen" and "diamond" mutually exclusive?
5. A number cube is rolled once. Are "odd" and "even" mutually exclusive?

<details>
<summary>Reveal mini-quiz answers</summary>

1. They cannot happen at the same time in one trial.
2. \(P(A \cap B)=0\).
3. To remove double-counting of outcomes that are in both events.
4. No. The queen of diamonds is both a queen and a diamond.
5. Yes. One roll cannot be odd and even.
</details>

## Independent Practice

Complete these before checking the answer key.

1. A coin is tossed once. Are "heads" and "tails" mutually exclusive?
2. A number cube is rolled once. Are "less than 3" and "even" mutually exclusive?
3. A card is drawn once. Are "club" and "black" mutually exclusive?
4. A card is drawn once. Are "heart" and "spade" mutually exclusive?
5. A spinner has \(8\) equal sections: \(3\) red, \(2\) blue, and \(3\) green. What is \(P(\text{red or blue})\)?
6. In a class of \(30\), \(14\) learners play basketball, \(11\) play badminton, and \(5\) play both. How many play basketball or badminton?
7. Explain why "or" can be risky if you do not check for overlap.
8. Create your own pair of non-mutually exclusive events from a school or community situation.

## Answer Key with Explanations

1. Yes. One coin toss cannot land both heads and tails.
2. No. "Less than 3" is \(\{1,2\}\), and "even" is \(\{2,4,6\}\), so the outcome \(2\) overlaps.
3. No. Every club is black, so the events overlap.
4. Yes. One card cannot have two suits.
5. \(\frac{3}{8}+\frac{2}{8}=\frac{5}{8}\). The color events do not overlap because one spinner section has one color.
6. \(14+11-5=20\). The \(5\) learners in both sports would be counted twice without subtraction.
7. In probability, "or" often includes both events, so adding without checking overlap can double-count.
8. Sample: A learner can be in the school choir and the math club, so those events can overlap.

## Misconception Alerts

> [!WARNING] Misconception 1: "Mutually exclusive means both events are unlikely."
>
> Mutually exclusive is not about how likely events are. It is about whether they can happen together.

> [!WARNING] Misconception 2: "If two events are different, they are mutually exclusive."
>
> Different event names can still overlap. "Red card" and "heart" are different labels, but they share outcomes.

> [!WARNING] Misconception 3: "Always add probabilities for A or B."
>
> Add directly only when the events are mutually exclusive. If there is overlap, subtract the intersection.

## Error Analysis

A student writes:

> "In a class of \(40\), \(18\) learners joined art club and \(15\) joined music club. Since \(18+15=33\), the probability of art or music is \(\frac{33}{40}\)."

**Find the mistake:** The student did not check whether any learners joined both clubs.

**Correct reasoning:** If the clubs overlap, subtract the number who joined both. If \(6\) joined both, the count is \(18+15-6=27\), not \(33\).

## Self-Explanation Prompts

Answer these in your own words.

1. How can a Venn diagram show whether events are mutually exclusive?
2. Why is \(P(A \cap B)=0\) for mutually exclusive events?
3. When should you use \(P(A \text{ or } B)=P(A)+P(B)-P(A \cap B)\)?
4. What is one real-life pair of events that can overlap?
5. What question should you ask before adding two probabilities?

**Sample Responses**

1. Mutually exclusive events have separate circles; overlapping events have a shared region.
2. No outcome can be in both events, so the probability of the intersection is zero.
3. Use it when events can happen together or when the problem gives a "both" count.
4. Sample: A student can ride a bicycle to school and join the science club.
5. Ask whether one outcome or person can belong to both events.

## Mastery Checklist

Check each statement when you can do it confidently.

- I can identify the experiment and sample space.
- I can list or describe the outcomes in event \(A\) and event \(B\).
- I can decide whether two events are mutually exclusive.
- I can explain what an overlap means in context.
- I can choose the correct addition rule for \(A \text{ or } B\).
- I can avoid double-counting when events overlap.

> [!PRACTICE] What To Do Next
>
> Use the practice exam for quick checks on vocabulary, Venn diagrams, and simple addition-rule decisions. Use the assessment when you are ready for mixed situations where you must decide first, compute second, and explain your reasoning.

## Final Summary

Mutually exclusive events cannot happen at the same time in one trial, so their intersection has probability \(0\). Non-mutually exclusive events can overlap, so the overlap must be subtracted when finding \(P(A \text{ or } B)\). The strongest habit is to ask whether the same outcome can belong to both events before choosing a formula.
