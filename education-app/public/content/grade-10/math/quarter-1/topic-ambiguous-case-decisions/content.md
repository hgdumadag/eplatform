# Trigonometry: Ambiguous Case Decisions

> [!GOAL] Learning Goal
>
> Decide whether SSA trigonometry data produces zero, one, or two possible triangles before you start solving for missing parts.

## Study Setup

| Item | Details |
|---|---|
| Time | About 45 minutes |
| Main skill | Classifying SSA triangle cases |
| Materials | Strips of paper or sticks, calculator, ruler, pencil, and diagrams |
| Useful formula | \(h=b\sin A\), when \(A\) is acute |

## Opening Model: A Hinged Stick

Imagine two strips of paper joined at point \(A\). One strip is fixed along a ray from \(A\). Another strip makes a known angle \(A\) with that ray. Now attach a third strip at point \(C\) and let it swing until it touches the base ray.

![Hinged-stick model for SSA data](/content/grade-10/math/quarter-1/topic-ambiguous-case-decisions/images/hinged-stick-model.svg)

The swinging strip might touch the base ray twice, once, or not at all. That is the heart of the ambiguous SSA case.

> [!TARGET] Lesson Target
>
> Given \(A\), side \(a\) opposite \(A\), and side \(b\) adjacent to \(A\), classify the data as zero, one, or two triangles.

## Warm-Up Recall

Answer these before reading the rules.

1. In \(\triangle ABC\), which side is opposite \(\angle A\)?
2. If \(\angle A=40^\circ\), is \(A\) acute, right, or obtuse?
3. Which is larger: \(\sin 30^\circ\) or \(\sin 90^\circ\)?
4. What does SSA mean?

<details>
<summary>Reveal answers</summary>

1. Side \(a\) is opposite \(\angle A\).
2. \(40^\circ\) is acute.
3. \(\sin 90^\circ\) is larger.
4. SSA means two sides and a non-included angle are known.

</details>

## Why Classification Comes First

When a problem gives SSA data, do not rush into the Law of Sines. First ask: How many triangles can these measurements actually make?

Use this naming pattern:

| Symbol | Meaning |
|---|---|
| \(A\) | the known angle |
| \(a\) | the side opposite \(A\) |
| \(b\) | the other known side, touching \(A\) |
| \(h\) | the height from the end of side \(b\) down to the base ray |

## The Acute-Angle Height Test

If \(A\) is acute, build the height from the end of side \(b\):

\[
h=b\sin A
\]

![Height test for an acute SSA case](/content/grade-10/math/quarter-1/topic-ambiguous-case-decisions/images/acute-height-test.svg)

The height \(h\) is the shortest distance the swinging side \(a\) must reach. After finding \(h\), compare \(a\) with \(h\) and \(b\).

## Acute SSA Decision Rules

| Comparison | Triangles | Reason |
|---|---:|---|
| \(a<h\) | 0 | Side \(a\) is too short to reach the base ray. |
| \(a=h\) | 1 | Side \(a\) reaches exactly at the height foot. |
| \(h<a<b\) | 2 | Side \(a\) reaches the base ray in two positions. |
| \(a\ge b\) | 1 | Side \(a\) reaches only one valid position on the ray. |

![Decision map for acute SSA cases](/content/grade-10/math/quarter-1/topic-ambiguous-case-decisions/images/acute-decision-map.svg)

> [!IMPORTANT] Decision Habit
>
> Classify first. Solve second. The Law of Sines may reveal a second possible angle, but the height test tells you whether to expect it.

## Worked Example 1: No Triangle

Given \(A=35^\circ\), \(a=5\), and \(b=10\).

1. \(A\) is acute, so use \(h=b\sin A\).
2. \(h=10\sin 35^\circ\approx 5.74\).
3. Compare: \(a=5\) and \(h\approx 5.74\).
4. Since \(a<h\), there are **zero triangles**.

The swinging side is shorter than the minimum distance needed to reach the base ray.

## Worked Example 2: Two Triangles

Given \(A=40^\circ\), \(a=8\), and \(b=11\).

1. \(h=11\sin 40^\circ\approx 7.07\).
2. Compare: \(h<a<b\), because \(7.07<8<11\).
3. Therefore, there are **two possible triangles**.

This is the classic ambiguous case. The side reaches the base ray in two different positions.

## Worked Example 3: One Triangle

Given \(A=28^\circ\), \(a=14\), and \(b=9\).

Since \(A\) is acute, you could compute \(h\), but the comparison \(a\ge b\) is already enough. Because \(14\ge 9\), there is **one triangle**.

The side opposite \(A\) is long enough that only one forward placement works.

## Right and Obtuse Known Angles

The height test above is for acute \(A\). If \(A\) is right or obtuse, the decision is simpler.

![Right and obtuse SSA constraints](/content/grade-10/math/quarter-1/topic-ambiguous-case-decisions/images/obtuse-right-constraints.svg)

| Known angle \(A\) | Condition | Triangles |
|---|---|---:|
| \(A=90^\circ\) | \(a>b\) | 1 |
| \(A=90^\circ\) | \(a\le b\) | 0 |
| \(A>90^\circ\) | \(a>b\) | 1 |
| \(A>90^\circ\) | \(a\le b\) | 0 |

Why? The side opposite a right or obtuse angle must be the longest side among the two known sides. If \(a\) is not longer than \(b\), the data cannot form a triangle.

> [!WARNING] Common Traps
>
> SSA does not always mean two triangles. Also, if \(A\) is obtuse or right, do not use the acute-case two-triangle rule.

## Classification Checklist

Use this every time.

1. Identify the known angle \(A\), its opposite side \(a\), and the other known side \(b\).
2. Decide whether \(A\) is acute, right, or obtuse.
3. If \(A\) is acute, compute \(h=b\sin A\).
4. Compare \(a\), \(h\), and \(b\).
5. State the number of triangles and give the comparison as your justification.

## Mini Drill

Classify each case before checking the answers.

| Case | Given data | Your classification |
|---|---|---|
| 1 | \(A=30^\circ,\ a=4,\ b=10\) |  |
| 2 | \(A=30^\circ,\ a=6,\ b=10\) |  |
| 3 | \(A=30^\circ,\ a=8,\ b=10\) |  |
| 4 | \(A=115^\circ,\ a=12,\ b=9\) |  |

<details>
<summary>Reveal mini drill answers</summary>

1. \(h=10\sin30^\circ=5\). Since \(a<h\), zero triangles.
2. \(h=5\). Since \(h<a<b\), two triangles.
3. \(h=5\). Since \(h<a<b\), two triangles.
4. \(A\) is obtuse and \(a>b\), so one triangle.

</details>

## End Check

You are ready for practice when you can say:

- I can recognize SSA data.
- I can compute \(h=b\sin A\) for acute SSA cases.
- I can classify zero, one, or two triangles before solving.
- I can explain my decision using \(a<h\), \(a=h\), \(h<a<b\), \(a\ge b\), or \(a>b\) for right and obtuse cases.

> [!PRACTICE] What To Do Next
>
> Use the practice quiz to classify cases quickly. Then use the assessment as a short checkpoint where each answer needs a clear reason.
