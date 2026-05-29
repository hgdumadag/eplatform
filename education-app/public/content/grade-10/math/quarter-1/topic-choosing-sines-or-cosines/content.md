# Trigonometry: Choosing Law of Sines or Law of Cosines

> [!GOAL] Learning Goal
>
> Choose the correct trigonometry law from the information given in an oblique triangle before you start solving.

## Study Snapshot

| Item | Details |
|---|---|
| Time | About 45 minutes |
| Main skill | Select a first method for AAS, ASA, SSA, SAS, and SSS cases |
| Materials | Case cards, calculator, pencil, and decision chart notes |
| Big habit | Annotate first, solve second |

## Opening Sort

Before calculating, sort each triangle case into one of three groups:

- **Law of Sines first**
- **Law of Cosines first**
- **Either after a first step**

![Sorting mat for choosing Law of Sines, Law of Cosines, or either after a first step](/content/grade-10/math/quarter-1/topic-choosing-sines-or-cosines/images/sort-mat.svg)

Try placing these case cards:

| Case card | Known information | First group |
|---|---|---|
| AAS | two angles and a non-included side |  |
| ASA | two angles and the included side |  |
| SSA | two sides and a non-included angle |  |
| SAS | two sides and the included angle |  |
| SSS | three sides |  |

<details>
<summary>Reveal the sort</summary>

| Case | First choice |
|---|---|
| AAS | Law of Sines |
| ASA | Law of Sines |
| SSA | Law of Sines, with ambiguous-case awareness |
| SAS | Law of Cosines |
| SSS | Law of Cosines |

After one missing part is found, many problems can continue with either law. The first choice matters because it gives you a reliable starting move.

</details>

## Why the Choice Matters

The Law of Sines needs a complete opposite pair:

$$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}$$

A complete pair means one side and its opposite angle are both known, such as \(a\) and \(A\).

The Law of Cosines works when you have sides arranged around an angle or all three sides:

$$c^2=a^2+b^2-2ab\cos C$$

It does not require a complete opposite pair at the beginning.

> [!IMPORTANT] Fast Decision Question
>
> Do you already have an opposite angle-side pair? If yes, Law of Sines is probably ready. If no, look for SAS or SSS and use Law of Cosines.

## The Decision Chart

Use this chart before writing any equation.

![Decision chart for AAS, ASA, SSA, SAS, and SSS trigonometry cases](/content/grade-10/math/quarter-1/topic-choosing-sines-or-cosines/images/decision-chart.svg)

| Given case | What you know | First law | First move |
|---|---|---|---|
| AAS | two angles and a non-included side | Law of Sines | Find the third angle if needed, then use a complete pair. |
| ASA | two angles and the included side | Law of Sines | Find the third angle opposite the known side, then use a complete pair. |
| SSA | two sides and a non-included angle | Law of Sines | Check for the ambiguous case, then solve from the known opposite pair. |
| SAS | two sides and the included angle | Law of Cosines | Find the side opposite the included angle first. |
| SSS | three sides | Law of Cosines | Find one angle first, usually opposite the longest side. |

## Recognize the Given Case

The letters tell you the pattern of known parts as you move around the triangle.

### AAS and ASA

AAS and ASA both give two angles. That is helpful because the third angle is one subtraction away:

$$180^\circ - \text{angle 1} - \text{angle 2}$$

Once all angles are known, there will be at least one complete side-angle pair. Use the Law of Sines.

**Example:** \(A=45^\circ\), \(B=70^\circ\), and \(a=12\).

- Case: AAS
- Complete pair: \(A=45^\circ\) with \(a=12\)
- First law: Law of Sines

## SSA Needs a Pause

SSA gives two sides and a non-included angle. It also gives a complete opposite pair if the known angle is opposite one of the known sides.

![Annotated mixed cases showing complete pairs and missing pairs](/content/grade-10/math/quarter-1/topic-choosing-sines-or-cosines/images/annotated-mixed-cases.svg)

Use the Law of Sines, but pause first:

1. Identify the known angle and its opposite known side.
2. Decide whether the ambiguous case could create zero, one, or two triangles.
3. Then set up the Law of Sines.

> [!WARNING] Common Trap
>
> SSA is not automatically two triangles. It only means you must check before solving.

## SAS and SSS Use Law of Cosines First

SAS and SSS do not give a complete opposite side-angle pair at the start.

### SAS

If two sides and the included angle are known, use the Law of Cosines to find the third side.

**Example:** \(a=9\), \(b=13\), and \(C=58^\circ\).

- Case: SAS
- Included angle: \(C\)
- First law: Law of Cosines
- First move: find \(c\)

### SSS

If all three side lengths are known, use the Law of Cosines to find an angle. Finding the largest angle first is often easiest to check.

**Example:** \(a=8\), \(b=11\), and \(c=15\).

- Case: SSS
- First law: Law of Cosines
- First move: find \(C\), because \(c\) is the longest side

## Either After a First Step

The first law opens the problem. After that, you may have a choice.

![Two solved-first-step paths showing when either law can continue](/content/grade-10/math/quarter-1/topic-choosing-sines-or-cosines/images/after-first-step.svg)

For a SAS problem, the Law of Cosines finds the third side. Then the triangle becomes SSS, so you can use Law of Cosines again. But if you now have a complete pair, you can often use Law of Sines for the remaining angles.

For an AAS or ASA problem, the Law of Sines finds missing sides. Once several parts are known, another route might work, but Law of Sines usually remains the most direct.

> [!TIP] Calculator Note
>
> Set your calculator to degree mode. Round only at the final answer unless the problem tells you otherwise.

## Worked Example 1: Annotate Before Solving

**Problem:** In triangle \(ABC\), \(A=38^\circ\), \(B=72^\circ\), and \(a=10\). What law should start the solution?

**Annotation**

| Question | Answer |
|---|---|
| What is given? | two angles and a non-included side |
| Case | AAS |
| Complete pair? | \(A=38^\circ\) and \(a=10\) |
| First law | Law of Sines |
| Reason | A complete opposite pair is already known. |

You may find \(C=70^\circ\), then solve for other sides with Law of Sines.

## Worked Example 2: Law of Cosines First

**Problem:** In triangle \(ABC\), \(a=7\), \(b=12\), and \(C=50^\circ\). What law should start the solution?

**Annotation**

| Question | Answer |
|---|---|
| What is given? | two sides and the included angle |
| Case | SAS |
| Complete pair? | No |
| First law | Law of Cosines |
| Reason | SAS has no known opposite side-angle pair at first. |

Start with:

$$c^2=7^2+12^2-2(7)(12)\cos 50^\circ$$

After finding \(c\), you can continue with either Law of Sines or Law of Cosines, depending on what the next question asks.

## Mixed-Problem Annotation Routine

For every mixed problem, write these four notes before solving:

1. **Given case:** AAS, ASA, SSA, SAS, or SSS.
2. **Complete pair:** name one if it exists.
3. **First law:** Law of Sines or Law of Cosines.
4. **Reason:** one sentence using the decision chart.

This routine prevents the two most common errors: forcing Law of Sines when no complete pair exists, and using Law of Cosines when a faster Law of Sines setup is ready.

## Mini Drill

Annotate each item. Do not solve yet.

| Item | Given information | Case | First law |
|---|---|---|---|
| 1 | \(A=44^\circ\), \(C=61^\circ\), \(b=18\) |  |  |
| 2 | \(a=6\), \(b=10\), \(C=37^\circ\) |  |  |
| 3 | \(A=32^\circ\), \(a=9\), \(b=13\) |  |  |
| 4 | \(a=7\), \(b=8\), \(c=12\) |  |  |

<details>
<summary>Reveal mini drill answers</summary>

1. ASA; Law of Sines after finding \(B\).
2. SAS; Law of Cosines to find \(c\).
3. SSA; Law of Sines with an ambiguous-case check.
4. SSS; Law of Cosines to find an angle.

</details>

## End-of-Lesson Checklist

You are ready for practice when you can:

- classify AAS, ASA, SSA, SAS, and SSS from a problem statement;
- explain why AAS, ASA, and SSA usually start with Law of Sines;
- explain why SAS and SSS start with Law of Cosines;
- mark a complete opposite side-angle pair when one exists;
- write a short decision-chart note before solving.

> [!PRACTICE] What To Do Next
>
> Use the practice set to annotate mixed problems before solving. Use the assessment to show your decision chart notes on two longer problems.
