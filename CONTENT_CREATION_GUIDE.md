# Education App - Content Creation Guide

## Table of Contents
1. [Overview](#overview)
2. [Folder Structure](#folder-structure)
3. [Required Files](#required-files)
4. [metadata.json Specification](#metadatajson-specification)
5. [content.md Specification](#contentmd-specification)
6. [practice.json Specification](#practicejson-specification)
7. [assessment.json Specification](#assessmentjson-specification)
8. [Adding Images](#adding-images)
9. [Adding Videos](#adding-videos)
10. [Packaging for Upload](#packaging-for-upload)
11. [Validation Checklist](#validation-checklist)
12. [AI Content Generation Prompts](#ai-content-generation-prompts)

---

## Overview

This guide explains how to create educational content for the Education Platform. Content consists of lessons organized by grade, subject, quarter, and topic, with associated practice and assessment exams.

**Key Principles:**
- All content uses Markdown format with LaTeX support for mathematical notation
- Strict folder structure must be followed
- Three files are required: metadata.json, content.md, practice.json
- Assessment.json is optional
- Images and videos are optional but enhance learning

---

## Folder Structure

### Required Structure
```
grade-{X}/{subject}/quarter-{Y}/{topic-name}/
├── metadata.json          (REQUIRED)
├── content.md            (REQUIRED)
├── practice.json         (REQUIRED)
├── assessment.json       (OPTIONAL)
├── images/               (OPTIONAL)
│   ├── image1.png
│   └── image2.jpg
└── videos/               (OPTIONAL - for local videos)
    └── video1.mp4
```

### Naming Conventions

**Grade Folder:** `grade-{X}` where X is the grade number (3-12)
- Examples: `grade-5`, `grade-8`, `grade-11`

**Subject Folder:** Use lowercase, no spaces
- Valid subjects: `math`, `science`, `english`, `history`, `music`, `arts`, `pe`, `computer-science`

**Quarter Folder:** `quarter-{Y}` where Y is 1-4
- Examples: `quarter-1`, `quarter-2`, `quarter-3`, `quarter-4`

**Topic Folder:** Use lowercase with hyphens for spaces
- Examples: `topic-fractions-decimals`, `topic-trigonometry-intro`, `topic-cell-biology`
- Must start with `topic-` prefix

### Example Valid Paths
```
grade-5/math/quarter-1/topic-fractions-decimals/
grade-8/science/quarter-2/topic-cell-biology/
grade-11/english/quarter-1/topic-literary-analysis/
```

---

## Required Files

### 1. metadata.json
Contains lesson metadata and configuration.

### 2. content.md
The main lesson content in Markdown format with LaTeX support.

### 3. practice.json
Practice exam questions (unlimited retakes, shows answers immediately).

### 4. assessment.json (OPTIONAL)
Assessment exam questions (parent-controlled release of results).

---

## metadata.json Specification

### Complete Example
```json
{
  "id": "grade-5-math-q1-fractions-decimals",
  "grade": 5,
  "subject": "math",
  "quarter": 1,
  "topicName": "Fractions & Decimals",
  "description": "Learn about fractions, decimals, and how to convert between them",
  "learningObjectives": [
    "Understand the relationship between fractions and decimals",
    "Convert fractions to decimals and vice versa",
    "Compare and order fractions and decimals",
    "Apply fraction and decimal knowledge to real-world problems"
  ],
  "estimatedDuration": 30,
  "difficulty": "beginner",
  "tags": ["fractions", "decimals", "conversion", "basic-math"],
  "prerequisites": ["Basic arithmetic", "Understanding of division"],
  "lastUpdated": "2025-01-19",
  "version": "1.0",
  "resources": {
    "contentFile": "content.md",
    "practiceExam": "practice.json",
    "assessmentExam": "assessment.json"
  }
}
```

### Field Specifications

| Field | Type | Required | Description | Valid Values |
|-------|------|----------|-------------|--------------|
| `id` | string | YES | Unique identifier | Format: `grade-{X}-{subject}-q{Y}-{topic-slug}` |
| `grade` | number | YES | Grade level | 3-12 |
| `subject` | string | YES | Subject area | math, science, english, history, music, arts, pe, computer-science |
| `quarter` | number | YES | Quarter number | 1-4 |
| `topicName` | string | YES | Display name | Any readable string |
| `description` | string | YES | Brief description | 50-200 characters |
| `learningObjectives` | array | YES | Learning goals | 2-5 bullet points |
| `estimatedDuration` | number | YES | Minutes to complete | 10-90 minutes |
| `difficulty` | string | YES | Difficulty level | "beginner", "intermediate", "advanced" |
| `tags` | array | YES | Search keywords | 2-8 tags |
| `prerequisites` | array | NO | Required knowledge | Array of strings |
| `lastUpdated` | string | YES | Last modified date | ISO date format: "YYYY-MM-DD" |
| `version` | string | YES | Content version | Semantic versioning: "1.0", "1.1", etc. |
| `resources.contentFile` | string | YES | Content filename | Always "content.md" |
| `resources.practiceExam` | string | YES | Practice exam file | Always "practice.json" |
| `resources.assessmentExam` | string | NO | Assessment exam file | "assessment.json" or omit if none |

### ID Format Rules
The `id` field must follow this exact format:
```
grade-{grade}-{subject}-q{quarter}-{topic-slug}
```

**Examples:**
- `grade-5-math-q1-fractions-decimals`
- `grade-11-science-q2-cellular-respiration`
- `grade-8-english-q3-poetry-analysis`

**Important:** The topic slug in the ID must match the folder name (without the `topic-` prefix).

---

## content.md Specification

### Overview
The content.md file contains the main lesson content using Markdown with LaTeX support for mathematical formulas.

### Recommended Structure

```markdown
# [Topic Title]

## Introduction
[Brief introduction to engage the learner - 2-3 paragraphs]

## Main Content

### Section 1: [Concept Name]
[Explanation of first major concept]

### Section 2: [Concept Name]
[Explanation of second major concept]

### Section 3: [Concept Name]
[Additional concepts as needed]

## Formulas
[Key mathematical formulas or scientific equations]

$$
[LaTeX formula here]
$$

## Examples

### Example 1: [Example Title]
[Problem statement]

**Solution:**
[Step-by-step solution]

### Example 2: [Example Title]
[Another example with solution]

## Key Takeaways
- [Important point 1]
- [Important point 2]
- [Important point 3]
- [Important point 4]

## Practice Problems
1. [Practice problem 1]
2. [Practice problem 2]
3. [Practice problem 3]

*Solutions are available after completing the practice exam.*
```

### Markdown Features Supported

#### 1. Headings
```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
```

#### 2. Text Formatting
```markdown
**Bold text**
*Italic text*
***Bold and italic***
~~Strikethrough~~
```

#### 3. Lists
```markdown
Unordered list:
- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2

Ordered list:
1. First item
2. Second item
3. Third item
```

#### 4. Links
```markdown
[Link text](https://example.com)
```

#### 5. Blockquotes
```markdown
> This is a quote
> It can span multiple lines
```

#### 6. Code
```markdown
Inline code: `variable = value`

Code block:
```python
def example():
    return "Hello, World!"
```
```

#### 7. Tables
Tables are fully supported with beautiful styling, including LaTeX formulas within cells.

**Basic Table:**
```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

**Table with LaTeX:**
```markdown
| Fraction | Decimal | Percentage |
|----------|---------|------------|
| $\frac{1}{2}$ | 0.5 | 50% |
| $\frac{1}{4}$ | 0.25 | 25% |
| $\frac{3}{4}$ | 0.75 | 75% |
```

**Alignment:**
```markdown
| Left Align | Center Align | Right Align |
|:-----------|:------------:|------------:|
| Left       | Center       | Right       |
```

**Table Styling:**
- Tables automatically get professional styling with:
  - Blue header background
  - Alternating row colors
  - Hover effects
  - Rounded corners and shadows
  - Responsive width (max 800px)
- LaTeX formulas in tables are automatically centered
- Tables work in both lessons and exams

#### 8. Horizontal Rules
```markdown
---
```

### LaTeX Math Support

#### Inline Math
Use single dollar signs for inline formulas:
```markdown
The area of a circle is $A = \pi r^2$ where $r$ is the radius.
```

#### Display Math (Block)
Use double dollar signs for centered display formulas:
```markdown
$$
E = mc^2
$$

$$
\frac{a}{b} = \frac{c}{d}
$$
```

### Common LaTeX Examples

#### Fractions
```latex
$\frac{1}{2}$
$\frac{numerator}{denominator}$
```

#### Exponents and Subscripts
```latex
$x^2$          (x squared)
$x^{10}$       (x to the 10th power)
$x_1$          (x subscript 1)
$x_{10}$       (x subscript 10)
```

#### Square Roots
```latex
$\sqrt{x}$
$\sqrt[3]{x}$  (cube root)
```

#### Greek Letters
```latex
$\alpha$, $\beta$, $\gamma$, $\delta$
$\pi$, $\theta$, $\omega$, $\Omega$
```

#### Trigonometric Functions
```latex
$\sin(x)$, $\cos(x)$, $\tan(x)$
```

#### Sums and Integrals
```latex
$\sum_{i=1}^{n} x_i$

$$
\int_{a}^{b} f(x) \, dx
$$
```

#### Matrices
```latex
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$
```

#### Chemical Formulas
```latex
$H_2O$ (water)
$CO_2$ (carbon dioxide)
$C_6H_{12}O_6$ (glucose)
```

### LaTeX in Tables

LaTeX formulas work perfectly inside table cells:

```markdown
| Operation | Formula | Result |
|-----------|---------|--------|
| Area of Circle | $A = \pi r^2$ | Depends on $r$ |
| Pythagorean | $a^2 + b^2 = c^2$ | Always true |
| Quadratic | $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$ | Two solutions |
```

**Tips for LaTeX in Tables:**
- Use inline math (`$...$`) not display math (`$$...$$`) in table cells
- Complex formulas are automatically centered
- Keep formulas readable - very long formulas may need breaking

### Escaping Dollar Signs

If you need to display a dollar sign in text (not math), escape it:
```markdown
The price is \$19.99 (correct)
NOT: The price is $19.99 (incorrect - will try to render as math)
```

### Content Best Practices

1. **Length:** Aim for 500-2000 words per lesson
2. **Clarity:** Use simple, grade-appropriate language
3. **Examples:** Include 3-5 worked examples
4. **Visuals:** Reference images when helpful
5. **Engagement:** Use questions, challenges, and real-world applications
6. **Structure:** Break content into digestible sections
7. **Review:** End with key takeaways and practice problems

---

## practice.json Specification

### Overview
Practice exams allow unlimited retakes and show answers/explanations immediately after submission.

### Complete Example
```json
{
  "examId": "grade-5-math-q1-fractions-decimals-practice",
  "examType": "practice",
  "title": "Fractions & Decimals Practice Exam",
  "description": "Test your understanding of fractions and decimals",
  "passingScore": 70,
  "timeLimit": 25,
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "What decimal is equal to $\\frac{1}{4}$?",
      "options": [
        "0.25",
        "0.4",
        "0.5",
        "0.14"
      ],
      "correctAnswer": 0,
      "explanation": "To convert $\\frac{1}{4}$ to a decimal, divide 1 by 4: $1 \\div 4 = 0.25$.",
      "points": 10
    },
    {
      "id": "q2",
      "type": "true-false",
      "question": "The fraction $\\frac{3}{5}$ is larger than $\\frac{1}{2}$.",
      "correctAnswer": "true",
      "explanation": "Converting to decimals: $\\frac{3}{5} = 0.6$ and $\\frac{1}{2} = 0.5$. Since 0.6 > 0.5, the statement is true.",
      "points": 12
    },
    {
      "id": "q3",
      "type": "fill-in",
      "question": "Convert 0.8 to a fraction in simplest form. Write your answer as a fraction (e.g., 3/4).",
      "correctAnswer": "4/5",
      "explanation": "0.8 means 8 tenths: $\\frac{8}{10}$. Simplifying: $\\frac{8}{10} = \\frac{4}{5}$.",
      "points": 15
    },
    {
      "id": "q4",
      "type": "short-answer",
      "question": "In the fraction $\\frac{5}{8}$, what is the bottom number called?",
      "correctAnswer": "denominator",
      "explanation": "The bottom number of a fraction is called the denominator. It tells us how many equal parts make up the whole.",
      "points": 10
    }
  ]
}
```

### Top-Level Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `examId` | string | YES | Unique identifier: `{lesson-id}-practice` |
| `examType` | string | YES | Must be "practice" |
| `title` | string | YES | Exam title displayed to students |
| `description` | string | YES | Brief description of exam content |
| `passingScore` | number | YES | Percentage needed to pass (e.g., 70) |
| `timeLimit` | number | NO | Time limit in minutes (optional) |
| `questions` | array | YES | Array of question objects (5-15 questions) |

### Question Types

#### 1. Multiple Choice

```json
{
  "id": "q1",
  "type": "multiple-choice",
  "question": "Which planet is closest to the Sun?",
  "options": [
    "Venus",
    "Mercury",
    "Earth",
    "Mars"
  ],
  "correctAnswer": 1,
  "explanation": "Mercury is the closest planet to the Sun, orbiting at an average distance of 57.9 million km.",
  "points": 10
}
```

**Fields:**
- `id` (string, required): Unique question identifier (q1, q2, q3, etc.)
- `type` (string, required): "multiple-choice"
- `question` (string, required): Question text (can include LaTeX)
- `options` (array, required): Array of 3-5 answer choices
- `correctAnswer` (number, required): Index of correct answer (0-based)
- `explanation` (string, required): Why the answer is correct
- `points` (number, required): Points awarded (typically 10-15)

**Important:**
- `correctAnswer` is the INDEX (0, 1, 2, 3), not the text
- Example: If "Mercury" is correct and it's the 2nd option, use `"correctAnswer": 1`

#### 2. True/False

```json
{
  "id": "q2",
  "type": "true-false",
  "question": "The Earth is approximately 4.5 billion years old.",
  "correctAnswer": "true",
  "explanation": "Scientific evidence from radiometric dating of rocks shows Earth formed about 4.54 billion years ago.",
  "points": 12
}
```

**Fields:**
- `id` (string, required): Unique question identifier
- `type` (string, required): "true-false"
- `question` (string, required): Statement to evaluate
- `correctAnswer` (string, required): "true" or "false" (lowercase)
- `explanation` (string, required): Explanation of the answer
- `points` (number, required): Points awarded

**Important:** `correctAnswer` must be the STRING "true" or "false", not a boolean.

#### 3. Fill-in-the-Blank

```json
{
  "id": "q3",
  "type": "fill-in",
  "question": "The process by which plants make food using sunlight is called _______.",
  "correctAnswer": "photosynthesis",
  "explanation": "Photosynthesis is the process where plants convert light energy into chemical energy (glucose) using carbon dioxide and water.",
  "points": 15
}
```

**Fields:**
- `id` (string, required): Unique question identifier
- `type` (string, required): "fill-in"
- `question` (string, required): Question with blank indicated by _______ or [blank]
- `correctAnswer` (string, required): Expected answer
- `explanation` (string, required): Explanation
- `points` (number, required): Points awarded

**Answer Matching:**
- Case-insensitive: "Photosynthesis" = "photosynthesis"
- Punctuation ignored: "photosynthesis." = "photosynthesis"
- Fraction equivalence: "2/3" = "6/9"
- Extra whitespace ignored

#### 4. Short Answer

```json
{
  "id": "q4",
  "type": "short-answer",
  "question": "Explain the difference between weather and climate in 1-2 sentences.",
  "correctAnswer": "Weather is the short-term atmospheric conditions in a specific place, while climate is the long-term average of weather patterns in a region over many years.",
  "explanation": "Weather refers to day-to-day changes (today's temperature, rainfall), while climate describes typical patterns over decades (tropical climate, temperate climate).",
  "points": 15
}
```

**Fields:**
- `id` (string, required): Unique question identifier
- `type` (string, required): "short-answer"
- `question` (string, required): Question requiring written response
- `correctAnswer` (string, required): Model answer
- `explanation` (string, required): Detailed explanation
- `points` (number, required): Points awarded

**Answer Matching:**
- Keyword-based: Student must include 60% of key words
- Word order doesn't matter
- Filler words ignored (the, a, an, is, are, was, were, to, of, in, on, at)
- Example: "Weather is short-term, climate is long-term" would match the example above

### Question Guidelines

1. **Total Questions:** 5-15 questions per exam
2. **Total Points:** Should sum to 100 or be easily calculated (e.g., 10 questions × 10 points)
3. **Question Distribution:**
   - Easy: 30-40%
   - Medium: 40-50%
   - Hard: 10-20%
4. **LaTeX in Questions:** Use `\\frac{}{}` for fractions, escape backslashes
5. **Explanations:** Always provide clear explanations for learning
6. **Points:** Harder questions should have more points

### Points Allocation Example
```
5 multiple-choice × 10 points = 50 points
2 true-false × 12 points = 24 points
2 fill-in × 13 points = 26 points
Total = 100 points
```

---

## assessment.json Specification

### Overview
Assessment exams are identical in structure to practice exams, but results are controlled by parents.

### Key Differences from Practice
- `examType` must be "assessment"
- Results not automatically shown to student
- Parent must release results
- Typically used for formal evaluation

### Complete Example
```json
{
  "examId": "grade-5-math-q1-fractions-decimals-assessment",
  "examType": "assessment",
  "title": "Fractions & Decimals Assessment",
  "description": "Comprehensive assessment of fraction and decimal mastery",
  "passingScore": 75,
  "timeLimit": 30,
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Which fraction is equivalent to 0.75?",
      "options": [
        "$\\frac{1}{4}$",
        "$\\frac{1}{2}$",
        "$\\frac{3}{4}$",
        "$\\frac{2}{3}$"
      ],
      "correctAnswer": 2,
      "explanation": "0.75 = 75/100. Simplifying by dividing both by 25: 75÷25 = 3, 100÷25 = 4. So 0.75 = $\\frac{3}{4}$.",
      "points": 12
    }
  ]
}
```

### Guidelines for Assessments
1. **Slightly harder** than practice exams
2. **Different questions** than practice exam (don't reuse)
3. **Higher passing score** (75-80% vs 70%)
4. **Longer time limit** if needed
5. **More comprehensive** coverage of topic
6. **Optional** - not all lessons need assessments

---

## Adding Images

### Image File Guidelines

**Supported Formats:**
- PNG (recommended for diagrams, screenshots)
- JPG/JPEG (recommended for photos)
- GIF (for simple animations)

**File Size:**
- Keep under 500KB per image
- Compress images before adding
- Use appropriate resolution (72-150 DPI for screen)

**Image Dimensions:**
- Maximum width: 1200px
- Recommended: 800px width for most content
- Diagrams: 600-800px width
- Icons/small images: 200-400px

### Folder Structure
```
topic-folder/
├── metadata.json
├── content.md
├── practice.json
└── images/
    ├── diagram1.png
    ├── photo1.jpg
    └── labeled-triangle.png
```

### Referencing Images in content.md

Use **absolute paths** from the content root:

```markdown
![Alt text description](/content/grade-11/math/quarter-1/topic-trigonometry-intro/images/diagram1.png)
```

**Template:**
```markdown
![Alt text](/content/grade-{X}/{subject}/quarter-{Y}/{topic-name}/images/{filename})
```

### Full Example
```markdown
## The Right Triangle

A right triangle has one 90-degree angle. The sides are labeled as follows:

![Labeled Right Triangle](/content/grade-11/math/quarter-1/topic-trigonometry-intro/images/labeled-triangle.png)

The **hypotenuse** is the longest side, opposite the right angle.
```

### Image Best Practices

1. **Always include alt text** describing the image
2. **Use descriptive filenames**: `labeled-triangle.png`, not `image1.png`
3. **URL encode spaces** in filenames: `Label%20Triangle.png` or avoid spaces entirely
4. **Test images** after upload to ensure paths are correct
5. **Add captions** in the text below the image if needed

### Image Sizing in Markdown
The CSS automatically limits images to fit the content area. However, you can add HTML for specific sizing if needed:

```markdown
<img src="/content/grade-5/science/quarter-1/topic-plants/images/flower.jpg" alt="Flower diagram" width="400">
```

---

## Adding Videos

### Video Options

#### Option 1: YouTube Videos (Recommended)
Embedding YouTube videos is the easiest and most reliable option.

**Template:**
```markdown
## Video: [Topic Title]

<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/{VIDEO_ID}"
    title="Video title"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>
```

**Example:**
```markdown
## Video: Introduction to Trigonometry

Watch this video for a visual explanation of trigonometric ratios:

<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/mhd9FXYdf4s"
    title="Introduction to Trigonometry"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>
```

**Finding the Video ID:**
YouTube URL: `https://www.youtube.com/watch?v=mhd9FXYdf4s`
Video ID: `mhd9FXYdf4s` (everything after `v=`)

#### Option 2: Other Video Platforms
- **Vimeo:** `https://player.vimeo.com/video/{VIDEO_ID}`
- **Khan Academy:** Use their embed codes
- **Educational platforms:** Follow their embedding instructions

#### Option 3: Local Video Files (Advanced)
If you have video files to include:

1. **Create videos folder:**
```
topic-folder/
└── videos/
    └── demonstration.mp4
```

2. **Use HTML5 video tag:**
```markdown
<video width="100%" controls>
  <source src="/content/grade-8/science/quarter-2/topic-chemistry/videos/experiment.mp4" type="video/mp4">
  Your browser does not support video playback.
</video>
```

**Supported formats:** MP4, WebM
**File size limit:** Keep under 50MB

### Video Best Practices

1. **Keep videos short:** 3-10 minutes ideal
2. **Provide context:** Explain what the video covers before embedding
3. **Add timestamps:** If video is long, note key moments
4. **Alternative text:** Describe video content for accessibility
5. **Test playback:** Ensure videos play correctly in the platform

---

## Packaging for Upload

### Step-by-Step Packaging Instructions

#### Step 1: Verify Folder Structure
Ensure your content follows this exact structure:
```
grade-5/math/quarter-1/topic-fractions-decimals/
├── metadata.json
├── content.md
├── practice.json
├── assessment.json (optional)
└── images/ (optional)
    ├── image1.png
    └── image2.jpg
```

#### Step 2: Validate All Files
- ✅ metadata.json is valid JSON
- ✅ All required fields present
- ✅ content.md has proper Markdown
- ✅ LaTeX formulas are correctly formatted
- ✅ Image paths are absolute and correct
- ✅ practice.json has valid question structure
- ✅ Points sum correctly

#### Step 3: Create ZIP File

**Using Windows:**
1. Right-click the **grade-X** folder (must include grade folder!)
2. Select "Send to" → "Compressed (zipped) folder"
3. Rename to something descriptive: `grade-5-math-fractions.zip`

**Using macOS:**
1. Right-click the **grade-X** folder
2. Select "Compress"
3. Rename the ZIP file

**Using Command Line:**
```bash
# From the parent directory containing grade-X folder
zip -r grade-5-math-fractions.zip grade-5/
```

#### Step 4: Verify ZIP Contents
Open the ZIP file and verify the structure:
```
grade-5-math-fractions.zip
└── grade-5/
    └── math/
        └── quarter-1/
            └── topic-fractions-decimals/
                ├── metadata.json
                ├── content.md
                ├── practice.json
                └── images/
```

**Critical:** The ZIP must contain the grade-X folder as the root!

#### Step 5: Upload to Platform
1. Open the Education Platform
2. Go to menu → "Upload Content"
3. Click "Choose ZIP File"
4. Select your ZIP file
5. Wait for validation and upload
6. Check for success message

---

## Validation Checklist

Use this checklist before packaging your content:

### Folder Structure ✅
- [ ] Folder follows: `grade-X/subject/quarter-Y/topic-name/`
- [ ] Grade is between 3-12
- [ ] Subject is valid (math, science, english, history, music, arts, pe, computer-science)
- [ ] Quarter is 1-4
- [ ] Topic folder starts with `topic-`

### metadata.json ✅
- [ ] File is valid JSON (no syntax errors)
- [ ] All required fields present
- [ ] `id` matches format: `grade-X-subject-qY-topic-slug`
- [ ] `grade` is a number (3-12)
- [ ] `quarter` is a number (1-4)
- [ ] `estimatedDuration` is realistic (10-90 minutes)
- [ ] `difficulty` is beginner/intermediate/advanced
- [ ] `tags` has 2-8 relevant keywords
- [ ] `resources.contentFile` is "content.md"
- [ ] `resources.practiceExam` is "practice.json"
- [ ] `lastUpdated` is current date in YYYY-MM-DD format

### content.md ✅
- [ ] Markdown syntax is correct
- [ ] Headings use proper hierarchy (H1 → H2 → H3)
- [ ] LaTeX formulas use correct delimiters ($inline$ and $$display$$)
- [ ] Dollar signs in text are escaped (\$19.99)
- [ ] Image paths are absolute from /content/
- [ ] Video embeds use correct HTML structure
- [ ] Content is 500-2000 words
- [ ] Includes Introduction, Main Content, Examples, Key Takeaways
- [ ] Language is grade-appropriate

### practice.json ✅
- [ ] File is valid JSON
- [ ] `examType` is "practice"
- [ ] `passingScore` is between 50-80
- [ ] Has 5-15 questions
- [ ] All questions have unique IDs (q1, q2, q3...)
- [ ] Multiple-choice `correctAnswer` is INDEX (number), not text
- [ ] True-false `correctAnswer` is STRING "true" or "false"
- [ ] Fill-in and short-answer have appropriate answer matching
- [ ] All questions have explanations
- [ ] Points sum to 100 or logical total
- [ ] LaTeX in questions uses double backslashes (\\frac)

### assessment.json (if included) ✅
- [ ] File is valid JSON
- [ ] `examType` is "assessment"
- [ ] Questions are DIFFERENT from practice exam
- [ ] Difficulty is appropriate for assessment
- [ ] All validation points from practice.json apply

### Images (if included) ✅
- [ ] All images are in `images/` subfolder
- [ ] File formats are PNG, JPG, or GIF
- [ ] File sizes are under 500KB each
- [ ] Filenames have no spaces (use hyphens)
- [ ] Image paths in content.md are absolute
- [ ] All referenced images exist

### Final ZIP ✅
- [ ] ZIP contains grade-X folder at root
- [ ] All files are included
- [ ] Folder structure is correct
- [ ] ZIP is under 20MB total
- [ ] ZIP filename is descriptive

---

## AI Content Generation Prompts

### Prompt Template for Complete Lesson

```
Create a complete educational lesson for the Education Platform with the following requirements:

**Topic Details:**
- Grade Level: [5, 8, 11, etc.]
- Subject: [math, science, english, etc.]
- Quarter: [1, 2, 3, 4]
- Topic Name: [e.g., "Fractions & Decimals"]
- Topic Slug: [e.g., "fractions-decimals"]

**Required Output:**
Generate THREE complete files following the Education Platform specification:

1. **metadata.json**
   - Include all required fields
   - Use ID format: grade-{X}-{subject}-q{Y}-{topic-slug}
   - Set appropriate difficulty level
   - Include 3-5 learning objectives
   - Estimated duration: 20-40 minutes
   - Add relevant tags

2. **content.md**
   - Length: 800-1500 words
   - Structure:
     * Introduction (engaging hook)
     * Main Content (3-4 subsections)
     * Formulas (if applicable, with LaTeX)
     * Examples (3-5 worked examples)
     * Key Takeaways (4-6 bullet points)
   - Use Markdown formatting
   - Include LaTeX for all mathematical notation
   - Use grade-appropriate language
   - Add placeholders for 2-3 relevant images

3. **practice.json**
   - 8-10 questions total
   - Question mix:
     * 4-5 multiple-choice
     * 2-3 true-false
     * 1-2 fill-in
     * 1-2 short-answer
   - Total points: 100
   - Passing score: 70%
   - Time limit: 20-30 minutes
   - Include detailed explanations for each answer
   - Use LaTeX in questions where appropriate

**Content Guidelines:**
- Make content engaging and age-appropriate
- Include real-world applications
- Use clear, concise language
- Ensure progressive difficulty
- Connect to prior knowledge
- Provide detailed explanations

**Output Format:**
Provide each file as a complete, ready-to-use JSON or Markdown file that can be directly copied into the folder structure.
```

### Example Specific Prompt

```
Create a complete educational lesson for the Education Platform:

**Topic Details:**
- Grade Level: 8
- Subject: science
- Quarter: 2
- Topic Name: "Cell Biology Basics"
- Topic Slug: "cell-biology-basics"

Generate three complete files (metadata.json, content.md, practice.json) following the Education Platform content creation guide. The lesson should cover:
- Cell structure (plant and animal cells)
- Cell organelles and their functions
- Differences between prokaryotic and eukaryotic cells
- Cell membrane and transport

Include appropriate diagrams (as placeholders), real-world examples, and engaging explanations suitable for 8th graders. Practice exam should test both knowledge and application.
```

### Prompt for Assessment Generation

```
Create an assessment exam (assessment.json) for an existing lesson:

**Lesson Context:**
- Topic: [lesson topic]
- Grade: [X]
- Subject: [subject]
- Learning Objectives: [list objectives from metadata.json]

**Assessment Requirements:**
- 10-12 questions
- Slightly harder than practice exam
- Comprehensive coverage of all learning objectives
- Different questions than practice (no overlap)
- Total points: 100
- Passing score: 75%
- Include detailed explanations
- Mix of question types (MC, T/F, fill-in, short-answer)

Ensure questions test deeper understanding and application, not just memorization.
```

### Prompt for Image Descriptions

```
For the lesson on [topic], suggest 3-5 relevant images with:
1. Description of what the image should show
2. Suggested filename (descriptive, no spaces)
3. Where in content.md to place it
4. Alt text for accessibility

Example format:
**Image 1:**
- Description: Labeled diagram of a plant cell showing nucleus, chloroplasts, cell wall, vacuole
- Filename: labeled-plant-cell.png
- Placement: After "Plant Cell Structure" section
- Alt text: "Diagram of a plant cell with labeled organelles including nucleus, chloroplasts, cell wall, and large central vacuole"
```

---

## Common Mistakes to Avoid

### ❌ Incorrect Folder Structure
```
# WRONG
topic-fractions/metadata.json

# CORRECT
grade-5/math/quarter-1/topic-fractions/metadata.json
```

### ❌ Wrong Multiple Choice Answer Format
```json
# WRONG
"correctAnswer": "Mercury"

# CORRECT
"correctAnswer": 1
```

### ❌ Wrong True/False Answer Format
```json
# WRONG
"correctAnswer": true

# CORRECT
"correctAnswer": "true"
```

### ❌ Relative Image Paths
```markdown
# WRONG
![Triangle](images/triangle.png)

# CORRECT
![Triangle](/content/grade-11/math/quarter-1/topic-trig/images/triangle.png)
```

### ❌ Unescaped Dollar Signs
```markdown
# WRONG
The price is $19.99

# CORRECT
The price is \$19.99
```

### ❌ Invalid LaTeX Delimiters
```markdown
# WRONG (using \( \) or \[ \])
The formula is \( E = mc^2 \)

# CORRECT (using $ or $$)
The formula is $E = mc^2$
```

### ❌ Missing Required Files
```
# WRONG - missing practice.json
grade-5/math/quarter-1/topic-fractions/
├── metadata.json
└── content.md

# CORRECT
grade-5/math/quarter-1/topic-fractions/
├── metadata.json
├── content.md
└── practice.json
```

---

## Testing Your Content

### Before Uploading

1. **Validate JSON files:**
   - Use online JSON validator (jsonlint.com)
   - Check all commas, brackets, quotes

2. **Test LaTeX rendering:**
   - Use online LaTeX editor (latex.codecogs.com)
   - Verify all formulas render correctly

3. **Check Markdown:**
   - Preview in Markdown editor
   - Verify headings, lists, formatting

4. **Review images:**
   - Ensure all paths are correct
   - Test that images open
   - Verify file sizes

5. **Verify question logic:**
   - Check that correct answers are actually correct
   - Ensure explanations make sense
   - Test point calculations

### After Uploading

1. **Navigate to lesson** in the platform
2. **Check content display:**
   - All sections render properly
   - LaTeX formulas display correctly
   - Images load and display at appropriate size
   - Videos play correctly
3. **Take practice exam:**
   - All questions display properly
   - Correct answers are scored correctly
   - Explanations show after submission
4. **Test assessment** (if included):
   - Exam loads properly
   - Results are withheld appropriately

---

## Support and Resources

### Helpful Tools

- **JSON Validator:** https://jsonlint.com
- **Markdown Editor:** https://dillinger.io
- **LaTeX Editor:** https://latex.codecogs.com/eqneditor/editor.php
- **Image Compression:** https://tinypng.com
- **ZIP Creation:** Built into Windows/macOS

### Quick Reference

**Valid Subjects:**
- math
- science
- english
- history
- music
- arts
- pe
- computer-science

**Valid Difficulty Levels:**
- beginner
- intermediate
- advanced

**Valid Question Types:**
- multiple-choice
- true-false
- fill-in
- short-answer

**Valid Exam Types:**
- practice
- assessment

---

## Version History

**Version 1.0** - January 2025
- Initial content creation guide
- Covers all required and optional files
- Includes AI generation prompts
- Complete validation checklist

---

## Contact & Feedback

For questions, issues, or suggestions about content creation, please refer to the platform documentation or contact the platform administrator.

**Happy content creation!** 🎓📚
