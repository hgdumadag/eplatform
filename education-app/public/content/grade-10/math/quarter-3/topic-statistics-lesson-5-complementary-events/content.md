# Statistics - Lesson 5: Complementary Events

> [!GOAL] Learning Goal
>
> By the end of this lesson, you should be able to identify complementary events, use \(P(A) + P(\text{not }A) = 1\), and explain complement probabilities in context.

## Estimated Time and Difficulty

| Item | Details |
|---|---|
| Time | About 50 minutes |
| Difficulty | Intermediate |
| Main skill | Finding the probability that an event does not happen |
| Tools | Pencil, calculator, scratch paper, and fraction/percent skills |

<!-- visual-assets:start -->

## Visual Study Set

Use these diagrams as anchors while you learn the complement rule.

![Probability bar split into event A and not A](/content/grade-10/math/quarter-3/topic-statistics-lesson-5-complementary-events/images/complement-bar-model.svg)

![Spinner with blue sections for A and gray sections for not A](/content/grade-10/math/quarter-3/topic-statistics-lesson-5-complementary-events/images/spinner-complement.svg)

![Two-column table showing pass and not pass outcomes](/content/grade-10/math/quarter-3/topic-statistics-lesson-5-complementary-events/images/pass-not-pass-table.svg)

![Decision flow for using the complement rule](/content/grade-10/math/quarter-3/topic-statistics-lesson-5-complementary-events/images/complement-decision-flow.svg)

![Common trap diagram comparing overlap with complements](/content/grade-10/math/quarter-3/topic-statistics-lesson-5-complementary-events/images/complement-vs-overlap.svg)

<!-- visual-assets:end -->

## What You Should Already Know

> [!CHECK] Pre-Check
>
> Use these questions to check the skills you will need before reading the lesson.

Before starting, make sure these facts feel familiar:

- A probability is a number from \(0\) to \(1\), or from \(0\%\) to \(100\%\).
- A probability can be written as a fraction, decimal, or percent.
- The denominator usually represents the total possible outcomes or the total group.
- Opposite everyday words such as "pass" and "not pass" often signal complements.

### Pre-Check / Readiness Quiz

Try these before reading the rest of the lesson.

1. What decimal is equal to \(75\%\)?
2. If 18 out of 30 students ride a jeepney to school, how many do not?
3. What is \(1 - 0.64\)?
4. Can a probability be greater than \(1\)?

<details>
<summary>Reveal pre-check answers</summary>

1. \(75\% = 0.75\).
2. \(30 - 18 = 12\) students do not ride a jeepney.
3. \(1 - 0.64 = 0.36\).
4. No. A probability cannot be greater than \(1\).

If more than one item felt uncertain, review decimal-percent conversion and whole-part reasoning before continuing.
</details>

## Key Vocabulary

| Term | Meaning |
|---|---|
| Event | An outcome or group of outcomes being counted, such as choosing a blue marble |
| Complement | Everything in the sample space that is not in the event |
| \(A\) | A symbol used to name an event |
| \(\text{not }A\) or \(A'\) | The complement of event \(A\) |
| Certain event | An event with probability \(1\), or \(100\%\) |
| Impossible event | An event with probability \(0\), or \(0\%\) |
| Sample space | The full set of possible outcomes |

> [!TARGET] Target Skill
>
> Read the event carefully. Then decide whether it is faster to count the event directly or subtract its complement from \(1\).

## Visual Introduction: One Whole Probability

Complementary events split the entire sample space into two non-overlapping parts:

- the event \(A\)
- everything that is **not** \(A\)

Together, they make the whole probability.

![Probability bar split into event A and not A](/content/grade-10/math/quarter-3/topic-statistics-lesson-5-complementary-events/images/complement-bar-model.svg)

That means:

$$
P(A) + P(\text{not }A) = 1
$$

So either part can be found by subtraction:

$$
P(\text{not }A) = 1 - P(A)
$$

$$
P(A) = 1 - P(\text{not }A)
$$

> [!IMPORTANT] Core Idea
>
> A complement is not just "a different event." It is the exact leftover part of the sample space after event \(A\) is removed.

## Main Concept 1: Naming Complements

The complement must include every outcome that is not in the event.

| Event \(A\) | Complement \(\text{not }A\) |
|---|---|
| The selected student is present | The selected student is absent |
| The spinner lands on blue | The spinner does not land on blue |
| A score is at least 80 | A score is less than 80 |
| It rains today | It does not rain today |

Notice the third row. The complement of "at least 80" is **less than 80**, not "at most 80." The boundary matters.

![Spinner with blue sections for A and gray sections for not A](/content/grade-10/math/quarter-3/topic-statistics-lesson-5-complementary-events/images/spinner-complement.svg)

> [!TIP] Fast Language Check
>
> Say the event out loud, then add "does not." If the sentence covers every other possible outcome without overlap, you probably have the complement.

## Main Concept 2: The Complement Rule

Use the complement rule when one probability is easier to find than the other.

For any event \(A\):

$$
P(\text{not }A) = 1 - P(A)
$$

If probabilities are written as percents:

$$
P(\text{not }A) = 100\% - P(A)
$$

If probabilities are written as counts:

$$
\text{number not in }A = \text{total} - \text{number in }A
$$

![Two-column table showing pass and not pass outcomes](/content/grade-10/math/quarter-3/topic-statistics-lesson-5-complementary-events/images/pass-not-pass-table.svg)

## Worked Example

**Problem:** In a school screening, the probability that a student passes the first check is \(0.72\). What is the probability that a student does **not** pass the first check?

**Step 1: Name the event.**

Let \(A\) be "the student passes the first check."

$$
P(A) = 0.72
$$

**Step 2: Name the complement.**

\(\text{not }A\) means "the student does not pass the first check."

**Step 3: Use the complement rule.**

$$
P(\text{not }A) = 1 - P(A)
$$

$$
P(\text{not }A) = 1 - 0.72 = 0.28
$$

**Step 4: Interpret the result.**

The probability that a student does not pass the first check is \(0.28\), or \(28\%\).

> [!EXAMPLE] Complete Answer
>
> Since passing and not passing are complementary events, the probabilities must add to \(1\). If \(P(\text{pass}) = 0.72\), then \(P(\text{not pass}) = 0.28\). This means about 28 out of every 100 similar students would not pass the first check.

## Main Concept 3: When Complements Are Faster

Sometimes a problem asks for "at least one" or "not all." These are often easier with complements.

| Question asks for | Easier complement |
|---|---|
| At least one defective item | No defective items |
| At least one absent student | No absent students |
| Not all answers are correct | All answers are correct |
| Score is less than 90 | Score is at least 90 |

![Decision flow for using the complement rule](/content/grade-10/math/quarter-3/topic-statistics-lesson-5-complementary-events/images/complement-decision-flow.svg)

### Short Worked Example: At Least One

**Problem:** The probability that no students are absent in a small group is \(0.41\). What is the probability that at least one student is absent?

"At least one absent" is the complement of "no students absent."

$$
P(\text{at least one absent}) = 1 - P(\text{none absent})
$$

$$
P(\text{at least one absent}) = 1 - 0.41 = 0.59
$$

So the probability is \(0.59\), or \(59\%\).

## Guided Practice

### Guided Problem 1: Name the Complement

Event \(A\): A randomly selected learner owns a scientific calculator.

What is \(\text{not }A\)?

<details>
<summary>Hint 1</summary>

Start with "The learner does not..."
</details>

<details>
<summary>Hint 2</summary>

The complement must include everyone outside the original event.
</details>

<details>
<summary>Answer</summary>

\(\text{not }A\): The randomly selected learner does not own a scientific calculator.
</details>

### Guided Problem 2: Decimal Probability

If \(P(A) = 0.37\), find \(P(\text{not }A)\).

<details>
<summary>Hint 1</summary>

Use \(P(\text{not }A) = 1 - P(A)\).
</details>

<details>
<summary>Hint 2</summary>

Compute \(1 - 0.37\).
</details>

<details>
<summary>Answer</summary>

\(P(\text{not }A) = 1 - 0.37 = 0.63\).
</details>

### Guided Problem 3: Count-Based Complement

In a class of 45 students, 32 submitted the project on time. How many did not submit on time?

<details>
<summary>Hint 1</summary>

Use total minus the number in the event.
</details>

<details>
<summary>Hint 2</summary>

Compute \(45 - 32\).
</details>

<details>
<summary>Answer</summary>

\(45 - 32 = 13\). Thirteen students did not submit the project on time.
</details>

## Mini-Quiz

Answer these before checking the explanations.

1. What formula connects \(P(A)\) and \(P(\text{not }A)\)?
2. If \(P(\text{rain}) = 0.18\), what is \(P(\text{no rain})\)?
3. True or false: The complement of "score is at least 75" is "score is at most 75."
4. If 9 of 40 tickets are winning tickets, how many are not winning tickets?
5. Why must complementary events have no overlap?

<details>
<summary>Reveal mini-quiz answers</summary>

1. \(P(A) + P(\text{not }A) = 1\).
2. \(1 - 0.18 = 0.82\).
3. False. The complement is "score is less than 75."
4. \(40 - 9 = 31\) tickets are not winning tickets.
5. If the events overlap, adding them would count some outcomes twice, so they would not split the whole sample space cleanly.
</details>

## Independent Practice

Complete these before checking the answer key.

1. Write the complement of: "The selected card is red."
2. Write the complement of: "The student score is greater than 85."
3. If \(P(A) = 0.64\), find \(P(\text{not }A)\).
4. If \(P(\text{not }B) = 0.21\), find \(P(B)\).
5. If \(P(C) = 35\%\), find \(P(\text{not }C)\).
6. A survey has 120 responses. If 78 respondents prefer online review, how many do not prefer online review?
7. The probability that a device works is \(\frac{17}{20}\). What is the probability that it does not work?
8. Explain why "likes basketball" and "likes volleyball" are not automatically complementary events.

## Answer Key with Explanations

1. The selected card is not red. This includes every card outside the red-card event.
2. The student score is less than or equal to 85. The boundary changes because the original event is greater than 85.
3. \(P(\text{not }A) = 1 - 0.64 = 0.36\).
4. \(P(B) = 1 - 0.21 = 0.79\).
5. \(P(\text{not }C) = 100\% - 35\% = 65\%\).
6. \(120 - 78 = 42\). Forty-two respondents do not prefer online review.
7. \(1 - \frac{17}{20} = \frac{3}{20}\).
8. A student could like both, neither, or only one. Complements must cover all outcomes with no overlap.

## Misconception Alerts

> [!WARNING] Misconception 1: "A complement means the opposite category I notice first."
>
> The complement is the entire leftover set. If \(A\) is "likes math," the complement is "does not like math," not "likes science."

> [!WARNING] Misconception 2: "Complementary events can overlap."
>
> Complements cannot happen at the same time. An outcome is either in \(A\) or in \(\text{not }A\), never both.

> [!WARNING] Misconception 3: "Less than" and "less than or equal to" are interchangeable.
>
> Boundary words matter. The complement of "at least 10" is "less than 10," not "at most 10."

![Common trap diagram comparing overlap with complements](/content/grade-10/math/quarter-3/topic-statistics-lesson-5-complementary-events/images/complement-vs-overlap.svg)

## Error Analysis

A student writes:

> "The probability of choosing a blue marble is \(0.30\), so the probability of choosing a red marble is \(0.70\)."

**Find the mistake:** The student assumed red is the only non-blue color.

**Correct reasoning:** The complement of blue is "not blue." If the bag has red, green, and yellow marbles, then \(0.70\) includes all non-blue marbles, not only red marbles.

## Self-Explanation Prompts

Answer these in your own words.

1. How can you tell when two events are complements?
2. Why does the complement rule subtract from \(1\)?
3. What boundary word in a problem requires extra care?
4. When is using the complement easier than counting directly?

**Sample Responses**

1. They cover the whole sample space, do not overlap, and one event means the other does not happen.
2. \(1\) represents the whole probability, so subtracting \(P(A)\) leaves the probability outside \(A\).
3. Words such as at least, more than, less than, greater than, at most, and equal to require care.
4. Complements are useful when the desired event has many cases but the opposite event is simple, such as "at least one."

## Mastery Checklist

Before moving to the exams, you should be able to:

- Name an event and its complement in words.
- Use \(P(A) + P(\text{not }A) = 1\).
- Convert complement answers among fractions, decimals, and percents.
- Find complement counts using total minus event count.
- Check boundary words such as "at least" and "greater than."
- Explain why two related events are not always complements.
- Write a final probability answer in context.

> [!PRACTICE] Exam Plan
>
> Use the practice exam for quick recognition and computation. Use the assessment when you can explain complements in context, handle boundary wording, and decide when subtraction from \(1\) is the efficient method.
