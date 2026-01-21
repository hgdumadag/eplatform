# Content Structure Specification

## Overview

This document defines the detailed file formats, schemas, and structure for all content in the educational platform. All content follows a hierarchical organization: **Grade → Subject → Quarter → Topic → Files**.

## Directory Structure

```
/content/
├── grade-1/
│   ├── math/
│   │   ├── quarter-1/
│   │   │   ├── topic-addition-basics/
│   │   │   │   ├── metadata.json
│   │   │   │   ├── content.md
│   │   │   │   ├── practice.json
│   │   │   │   ├── assessment.json
│   │   │   │   ├── images/
│   │   │   │   │   ├── diagram1.png
│   │   │   │   │   └── example.jpg
│   │   │   │   └── audio/ (for music lessons)
│   │   │   │       └── sample.mp3
│   │   │   ├── topic-subtraction-basics/
│   │   │   │   └── ...
│   │   │   └── ...
│   │   ├── quarter-2/
│   │   ├── quarter-3/
│   │   └── quarter-4/
│   ├── science/
│   │   └── ...
│   ├── english/
│   │   └── ...
│   ├── music/
│   │   └── ...
│   └── coding/
│       └── ...
├── grade-2/
│   └── ...
└── ...
```

### Naming Conventions

- **Grades**: `grade-1`, `grade-2`, etc.
- **Subjects**: `math`, `science`, `english`, `music`, `coding` (lowercase, no spaces)
- **Quarters**: `quarter-1`, `quarter-2`, `quarter-3`, `quarter-4`
- **Topics**: `topic-name-with-hyphens` (descriptive, lowercase, hyphenated)

## File Formats

### 1. metadata.json

Contains all metadata and structural information about the topic/lesson.

#### Schema

```json
{
  "id": "string (unique identifier, e.g., 'grade-3-math-q1-fractions')",
  "grade": "number (1-12)",
  "subject": "string (math|science|english|music|coding)",
  "quarter": "number (1-4)",
  "topicName": "string (display name)",
  "description": "string (brief description of the topic)",
  "learningObjectives": [
    "string (specific learning goal 1)",
    "string (specific learning goal 2)",
    "..."
  ],
  "prerequisites": [
    "string (topic ID that should be completed first, optional/suggestions only)"
  ],
  "estimatedDuration": "number (estimated minutes to complete)",
  "difficulty": "string (beginner|intermediate|advanced)",
  "tags": [
    "string (searchable tag 1)",
    "string (searchable tag 2)"
  ],
  "lastUpdated": "string (ISO 8601 date: YYYY-MM-DD)",
  "version": "string (e.g., '1.0')",
  "resources": {
    "contentFile": "string (path: 'content.md')",
    "practiceExam": "string (path: 'practice.json', optional)",
    "assessmentExam": "string (path: 'assessment.json', optional)",
    "images": [
      "string (relative path to image files)"
    ],
    "audio": [
      "string (relative path to audio files, for music lessons)"
    ],
    "externalLinks": [
      {
        "title": "string",
        "url": "string (external URL)",
        "description": "string (optional)"
      }
    ]
  }
}
```

#### Example

```json
{
  "id": "grade-3-math-q1-fractions",
  "grade": 3,
  "subject": "math",
  "quarter": 1,
  "topicName": "Introduction to Fractions",
  "description": "Learn the basics of fractions, including numerators, denominators, and simple fraction operations.",
  "learningObjectives": [
    "Understand what a fraction represents",
    "Identify numerators and denominators",
    "Compare simple fractions",
    "Add fractions with like denominators"
  ],
  "prerequisites": [
    "grade-2-math-q4-division-basics"
  ],
  "estimatedDuration": 45,
  "difficulty": "beginner",
  "tags": ["fractions", "numerator", "denominator", "basic-math"],
  "lastUpdated": "2025-01-15",
  "version": "1.0",
  "resources": {
    "contentFile": "content.md",
    "practiceExam": "practice.json",
    "assessmentExam": "assessment.json",
    "images": [
      "images/fraction-diagram.png",
      "images/pizza-example.jpg"
    ],
    "audio": [],
    "externalLinks": [
      {
        "title": "Khan Academy - Fractions",
        "url": "https://www.khanacademy.org/math/fractions",
        "description": "Additional practice problems"
      }
    ]
  }
}
```

### 2. content.md

Contains the actual lesson content in Markdown format with embedded LaTeX formulas. The structure is **fixed** and consistent across all lessons.

#### Fixed Structure (Required Sections)

1. **# Introduction** - Brief overview of the topic
2. **# Main Content** - Core lesson material
3. **# Formulas** - Mathematical/scientific formulas (if applicable)
4. **# Examples** - Worked examples with solutions
5. **# Key Takeaways** - Summary of important points

#### Markdown Features

- **LaTeX Support**: Use `$...$` for inline formulas and `$$...$$` for block formulas
- **Code Blocks**: Use triple backticks with language specification for syntax highlighting
- **Images**: Reference local images using relative paths: `![Alt text](images/diagram.png)`
- **External Images**: Reference using full URLs: `![Alt text](https://example.com/image.png)`
- **Audio**: For music lessons: `<audio controls src="audio/sample.mp3"></audio>`

#### Example content.md

```markdown
# Introduction

Fractions are a way to represent parts of a whole. When you cut a pizza into 8 slices and eat 3 of them, you've eaten $\frac{3}{8}$ of the pizza.

In this lesson, you'll learn:
- What fractions mean
- The parts of a fraction
- How to compare fractions

# Main Content

## Understanding Fractions

A fraction has two parts:
- **Numerator**: The top number (how many parts you have)
- **Denominator**: The bottom number (how many parts make the whole)

For example, in the fraction $\frac{3}{4}$:
- The numerator is 3
- The denominator is 4

This means we have 3 parts out of 4 equal parts.

## Visualizing Fractions

![Fraction diagram showing quarters](images/fraction-diagram.png)

The diagram above shows how $\frac{3}{4}$ looks when we divide a circle into 4 equal parts and shade 3 of them.

# Formulas

## Basic Fraction Notation

$$\frac{\text{numerator}}{\text{denominator}} = \frac{\text{parts you have}}{\text{total parts}}$$

## Adding Fractions (Like Denominators)

When denominators are the same, add the numerators:

$$\frac{a}{c} + \frac{b}{c} = \frac{a + b}{c}$$

For example:

$$\frac{1}{4} + \frac{2}{4} = \frac{3}{4}$$

# Examples

## Example 1: Identifying Parts of a Fraction

**Problem**: What is the numerator and denominator of $\frac{5}{8}$?

**Solution**:
- Numerator = 5
- Denominator = 8
- This represents 5 parts out of 8 equal parts.

## Example 2: Adding Fractions

**Problem**: Calculate $\frac{2}{5} + \frac{1}{5}$

**Solution**:
Since the denominators are the same (both 5), we add the numerators:

$$\frac{2}{5} + \frac{1}{5} = \frac{2 + 1}{5} = \frac{3}{5}$$

## Example 3: Real-World Application

**Problem**: You ate $\frac{2}{8}$ of a pizza for lunch and $\frac{3}{8}$ for dinner. How much pizza did you eat in total?

**Solution**:

$$\frac{2}{8} + \frac{3}{8} = \frac{5}{8}$$

You ate $\frac{5}{8}$ of the pizza.

# Key Takeaways

- A fraction represents parts of a whole
- The **numerator** (top) shows how many parts you have
- The **denominator** (bottom) shows the total number of equal parts
- To add fractions with the same denominator, add the numerators and keep the denominator
- Fractions help us describe amounts that aren't whole numbers
```

#### Example content.md for Coding Lesson

```markdown
# Introduction

Variables are containers that store data in your programs. Think of them as labeled boxes where you can put different types of information.

# Main Content

## What is a Variable?

A variable has three main parts:
1. **Name**: What you call the variable
2. **Type**: What kind of data it holds
3. **Value**: The actual data stored

Here's a simple example in Python:

```python
age = 10
name = "Alice"
height = 4.5
```

## Variable Naming Rules

- Must start with a letter or underscore
- Can contain letters, numbers, and underscores
- Cannot use Python keywords (like `if`, `for`, `while`)
- Use descriptive names

Good examples:
```python
student_name = "Bob"
test_score = 95
is_passing = True
```

## Variable Types

Python has several basic types:

```python
# Integer (whole numbers)
count = 42

# Float (decimal numbers)
temperature = 98.6

# String (text)
greeting = "Hello, World!"

# Boolean (True/False)
is_student = True
```

# Formulas

## Variable Assignment Syntax

```
variable_name = value
```

## Type Conversion

```python
# Convert string to integer
age = int("25")

# Convert integer to string
age_text = str(25)

# Convert to float
price = float("19.99")
```

# Examples

## Example 1: Creating and Using Variables

**Problem**: Create variables to store information about a student.

**Solution**:

```python
# Create variables
student_name = "Emma"
student_grade = 3
favorite_subject = "Science"
has_homework = True

# Use the variables
print(f"{student_name} is in grade {student_grade}")
print(f"Favorite subject: {favorite_subject}")
print(f"Has homework: {has_homework}")
```

**Output**:
```
Emma is in grade 3
Favorite subject: Science
Has homework: True
```

## Example 2: Doing Math with Variables

**Problem**: Calculate the area of a rectangle using variables.

**Solution**:

```python
# Store the dimensions
length = 10
width = 5

# Calculate area
area = length * width

# Display result
print(f"The area is {area} square units")
```

**Output**:
```
The area is 50 square units
```

## Example 3: Updating Variables

**Problem**: Show how variable values can change.

**Solution**:

```python
score = 0
print(f"Starting score: {score}")

# Update the score
score = score + 10
print(f"After earning points: {score}")

# Use shorthand notation
score += 5
print(f"Final score: {score}")
```

**Output**:
```
Starting score: 0
After earning points: 10
Final score: 15
```

# Key Takeaways

- Variables store data that your program can use and change
- Variable names should be descriptive and follow naming rules
- Python has different data types: integers, floats, strings, booleans
- You can update variable values during program execution
- Use meaningful variable names to make your code easier to understand
```

### 3. practice.json

Contains practice exam questions with answers. Questions can be attempted unlimited times. Answers are included but password-protected in the UI.

#### Schema

```json
{
  "examType": "practice",
  "title": "string",
  "description": "string (optional)",
  "instructions": "string",
  "timeLimit": "number (optional, in minutes, null for untimed)",
  "passingScore": "number (percentage, e.g., 70)",
  "randomizeQuestions": "boolean (true/false)",
  "randomizeOptions": "boolean (true/false, for multiple choice)",
  "showCorrectAnswers": "boolean (show after submission)",
  "allowReview": "boolean (can review before submitting)",
  "questions": [
    {
      "id": "string (unique within exam)",
      "type": "string (multiple-choice|true-false|fill-blank|short-answer|essay|coding|math)",
      "question": "string (question text, supports LaTeX)",
      "points": "number",
      "options": [
        {
          "id": "string (e.g., 'a', 'b', 'c', 'd')",
          "text": "string",
          "isCorrect": "boolean"
        }
      ],
      "correctAnswer": "string|array (depends on question type)",
      "caseSensitive": "boolean (for fill-blank, default false)",
      "acceptableAnswers": ["string (alternative acceptable answers)"],
      "explanation": "string (why the answer is correct)",
      "hint": "string (optional hint for students)",
      "codeLanguage": "string (for coding questions: python|javascript|java|etc)",
      "starterCode": "string (optional starter code for coding questions)"
    }
  ]
}
```

#### Question Type Specifications

##### Multiple Choice

```json
{
  "id": "q1",
  "type": "multiple-choice",
  "question": "What is $2 + 2$?",
  "points": 1,
  "multipleCorrect": false,
  "options": [
    {"id": "a", "text": "3", "isCorrect": false},
    {"id": "b", "text": "4", "isCorrect": true},
    {"id": "c", "text": "5", "isCorrect": false},
    {"id": "d", "text": "6", "isCorrect": false}
  ],
  "correctAnswer": "b",
  "explanation": "2 + 2 equals 4. This is basic addition."
}
```

##### Multiple Choice (Multiple Correct Answers)

```json
{
  "id": "q2",
  "type": "multiple-choice",
  "question": "Which of the following are even numbers? (Select all that apply)",
  "points": 2,
  "multipleCorrect": true,
  "options": [
    {"id": "a", "text": "2", "isCorrect": true},
    {"id": "b", "text": "3", "isCorrect": false},
    {"id": "c", "text": "4", "isCorrect": true},
    {"id": "d", "text": "5", "isCorrect": false}
  ],
  "correctAnswer": ["a", "c"],
  "explanation": "Even numbers are divisible by 2. Both 2 and 4 are even."
}
```

##### True/False

```json
{
  "id": "q3",
  "type": "true-false",
  "question": "The Earth is flat.",
  "points": 1,
  "correctAnswer": false,
  "explanation": "The Earth is approximately spherical, not flat."
}
```

##### Fill in the Blank

```json
{
  "id": "q4",
  "type": "fill-blank",
  "question": "The capital of France is ___.",
  "points": 1,
  "correctAnswer": "Paris",
  "caseSensitive": false,
  "acceptableAnswers": ["paris", "Paris", "PARIS"],
  "explanation": "Paris is the capital city of France."
}
```

##### Short Answer

```json
{
  "id": "q5",
  "type": "short-answer",
  "question": "Explain what a variable is in programming in 2-3 sentences.",
  "points": 3,
  "correctAnswer": "A variable is a named container that stores data in a program. It has a name, a type, and a value that can change during program execution. Variables allow programs to remember and manipulate information.",
  "explanation": "This answer demonstrates understanding of the three key aspects of variables: storage, naming, and mutability."
}
```

##### Essay

```json
{
  "id": "q6",
  "type": "essay",
  "question": "Write a paragraph describing the water cycle and its importance to life on Earth.",
  "points": 5,
  "correctAnswer": "The water cycle is a continuous process where water evaporates from bodies of water, forms clouds, falls as precipitation, and returns to bodies of water. It is crucial for distributing fresh water across the planet, supporting all forms of life, regulating climate, and maintaining ecosystems.",
  "explanation": "A good answer should cover: evaporation, condensation, precipitation, collection, and the cycle's importance to life and climate."
}
```

##### Coding Question

```json
{
  "id": "q7",
  "type": "coding",
  "question": "Write a function called `add_numbers` that takes two parameters and returns their sum.",
  "points": 5,
  "codeLanguage": "python",
  "starterCode": "def add_numbers(a, b):\n    # Your code here\n    pass",
  "correctAnswer": "def add_numbers(a, b):\n    return a + b",
  "explanation": "The function should use the return statement to give back the sum of the two parameters.",
  "hint": "Remember to use the 'return' keyword to output the result."
}
```

##### Math Problem

```json
{
  "id": "q8",
  "type": "math",
  "question": "Solve for $x$: $2x + 5 = 13$",
  "points": 3,
  "correctAnswer": "4",
  "acceptableAnswers": ["4", "4.0", "x = 4"],
  "explanation": "Subtract 5 from both sides: $2x = 8$. Then divide both sides by 2: $x = 4$.",
  "hint": "Start by isolating the term with x."
}
```

#### Complete Example: practice.json

```json
{
  "examType": "practice",
  "title": "Fractions Practice Quiz",
  "description": "Practice your understanding of basic fractions",
  "instructions": "Answer all questions. You can take this quiz as many times as you want. LaTeX formulas are displayed throughout.",
  "timeLimit": null,
  "passingScore": 70,
  "randomizeQuestions": true,
  "randomizeOptions": true,
  "showCorrectAnswers": true,
  "allowReview": true,
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "In the fraction $\\frac{3}{4}$, what is the numerator?",
      "points": 1,
      "multipleCorrect": false,
      "options": [
        {"id": "a", "text": "3", "isCorrect": true},
        {"id": "b", "text": "4", "isCorrect": false},
        {"id": "c", "text": "7", "isCorrect": false},
        {"id": "d", "text": "12", "isCorrect": false}
      ],
      "correctAnswer": "a",
      "explanation": "The numerator is the top number in a fraction. In $\\frac{3}{4}$, the numerator is 3."
    },
    {
      "id": "q2",
      "type": "true-false",
      "question": "$\\frac{1}{2}$ is larger than $\\frac{1}{4}$",
      "points": 1,
      "correctAnswer": true,
      "explanation": "$\\frac{1}{2}$ means one part out of two (larger pieces), while $\\frac{1}{4}$ means one part out of four (smaller pieces)."
    },
    {
      "id": "q3",
      "type": "math",
      "question": "What is $\\frac{2}{5} + \\frac{1}{5}$?",
      "points": 2,
      "correctAnswer": "3/5",
      "acceptableAnswers": ["3/5", "\\frac{3}{5}", "0.6"],
      "explanation": "When adding fractions with the same denominator, add the numerators: $\\frac{2+1}{5} = \\frac{3}{5}$",
      "hint": "Add the numerators and keep the denominator the same."
    },
    {
      "id": "q4",
      "type": "fill-blank",
      "question": "If you eat 3 slices of a pizza cut into 8 slices, you ate ___ of the pizza.",
      "points": 1,
      "correctAnswer": "3/8",
      "caseSensitive": false,
      "acceptableAnswers": ["3/8", "three eighths", "\\frac{3}{8}"],
      "explanation": "You ate 3 parts out of 8 total parts, which is $\\frac{3}{8}$."
    },
    {
      "id": "q5",
      "type": "short-answer",
      "question": "Explain in your own words what a denominator represents.",
      "points": 2,
      "correctAnswer": "The denominator is the bottom number of a fraction that tells you how many equal parts the whole is divided into.",
      "explanation": "The denominator indicates the total number of equal parts that make up one whole unit."
    }
  ]
}
```

### 4. assessment.json

Contains graded assessment exam questions. Same schema as `practice.json`, but with `examType: "assessment"`. These are meant for formal evaluation.

#### Schema

Same as `practice.json`, with the key difference being:

```json
{
  "examType": "assessment",
  "title": "Fractions Assessment Test",
  "retakeAllowed": true,
  "retakeDelay": 24,
  ...
}
```

#### Additional Fields for Assessments

- **retakeAllowed**: `boolean` - Can students retake this assessment?
- **retakeDelay**: `number` - Hours to wait before retaking (optional)
- **showCorrectAnswers**: Typically `false` for assessments until after grading

#### Example: assessment.json

```json
{
  "examType": "assessment",
  "title": "Fractions Unit Assessment",
  "description": "Final assessment for the fractions unit",
  "instructions": "Answer all questions carefully. You have 30 minutes to complete this assessment. This test will be graded.",
  "timeLimit": 30,
  "passingScore": 80,
  "randomizeQuestions": false,
  "randomizeOptions": true,
  "showCorrectAnswers": false,
  "allowReview": true,
  "retakeAllowed": true,
  "retakeDelay": 24,
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "question": "Which fraction is equivalent to $\\frac{2}{4}$?",
      "points": 2,
      "multipleCorrect": false,
      "options": [
        {"id": "a", "text": "$\\frac{1}{2}$", "isCorrect": true},
        {"id": "b", "text": "$\\frac{3}{4}$", "isCorrect": false},
        {"id": "c", "text": "$\\frac{2}{8}$", "isCorrect": false},
        {"id": "d", "text": "$\\frac{4}{6}$", "isCorrect": false}
      ],
      "correctAnswer": "a",
      "explanation": "$\\frac{2}{4}$ simplifies to $\\frac{1}{2}$ by dividing both numerator and denominator by 2."
    },
    {
      "id": "q2",
      "type": "math",
      "question": "Solve: $\\frac{3}{7} + \\frac{2}{7}$",
      "points": 3,
      "correctAnswer": "5/7",
      "acceptableAnswers": ["5/7", "\\frac{5}{7}"],
      "explanation": "Add the numerators: $\\frac{3+2}{7} = \\frac{5}{7}$"
    },
    {
      "id": "q3",
      "type": "essay",
      "question": "Explain the difference between the numerator and denominator in a fraction. Give an example and explain what each part represents.",
      "points": 5,
      "correctAnswer": "The numerator is the top number and shows how many parts you have. The denominator is the bottom number and shows how many equal parts make up the whole. For example, in 3/4, the numerator 3 means we have 3 parts, and the denominator 4 means the whole is divided into 4 equal parts.",
      "explanation": "A complete answer should: define numerator, define denominator, provide a specific example, and explain what each number represents in the example."
    }
  ]
}
```

## Data Persistence

### Progress Data Structure

Progress data is stored locally as JSON files and managed through export/import functionality.

#### progress.json

```json
{
  "lastUpdated": "ISO 8601 datetime",
  "masterPassword": "string (hashed)",
  "children": [
    {
      "id": "string (unique child ID)",
      "name": "string",
      "avatar": "string (path or URL, optional)",
      "grade": "number",
      "preferences": {
        "theme": "light|dark",
        "favoriteSubjects": ["string"]
      },
      "goals": "string (optional, parent-set goals)",
      "progress": [
        {
          "topicId": "string (matches metadata.json id)",
          "status": "not-started|in-progress|completed",
          "startedAt": "ISO 8601 datetime",
          "completedAt": "ISO 8601 datetime (null if not completed)",
          "timeSpent": "number (minutes)",
          "notes": "string (parent notes)"
        }
      ],
      "examResults": [
        {
          "topicId": "string",
          "examType": "practice|assessment",
          "attemptNumber": "number",
          "score": "number (percentage)",
          "pointsEarned": "number",
          "pointsPossible": "number",
          "completedAt": "ISO 8601 datetime",
          "timeSpent": "number (minutes)",
          "answers": [
            {
              "questionId": "string",
              "studentAnswer": "string|array",
              "isCorrect": "boolean",
              "pointsEarned": "number"
            }
          ]
        }
      ],
      "gamification": {
        "totalPoints": "number",
        "currentStreak": "number (consecutive days)",
        "longestStreak": "number",
        "lastActivityDate": "ISO 8601 date",
        "achievements": [
          {
            "id": "string",
            "name": "string",
            "description": "string",
            "earnedAt": "ISO 8601 datetime",
            "icon": "string (optional)"
          }
        ]
      }
    }
  ]
}
```

## Media Files

### Images

- **Formats**: PNG, JPG, JPEG, GIF, SVG, WEBP
- **Location**: `images/` folder within each topic directory
- **Naming**: Descriptive names with hyphens (e.g., `fraction-diagram.png`)
- **Size**: Recommended max 2MB per image for performance
- **Reference**: Use relative paths in Markdown: `![Alt text](images/filename.png)`

### Audio Files (Music Lessons)

- **Formats**: MP3, WAV, OGG
- **Location**: `audio/` folder within each topic directory
- **Naming**: Descriptive names (e.g., `c-major-scale.mp3`)
- **Reference**: Use HTML5 audio tag in Markdown: `<audio controls src="audio/sample.mp3"></audio>`

### External Resources

External resources can be referenced by full URL:
- Images: `![Alt text](https://example.com/image.png)`
- Videos: `[Watch on YouTube](https://youtube.com/...)`
- External websites: `[Resource Name](https://example.com)`

## Validation Rules

### Required Files

Each topic must have:
- `metadata.json` (required)
- `content.md` (required)
- `practice.json` (optional but recommended)
- `assessment.json` (optional)

### Metadata Validation

- `id` must be unique across all topics
- `grade` must be 1-12
- `quarter` must be 1-4
- `subject` must be one of: math, science, english, music, coding
- All file paths in `resources` must exist or be valid URLs

### Content Validation

- `content.md` must have all five required sections with proper headings
- LaTeX formulas must use correct syntax
- Image paths must be valid
- Code blocks must specify language for syntax highlighting

### Exam Validation

- Each question must have a unique `id` within the exam
- `type` must be valid question type
- Points must be positive numbers
- Multiple choice must have at least 2 options
- At least one correct answer must be specified
- For multiple-choice with `multipleCorrect: true`, `correctAnswer` must be an array

## Best Practices

### Content Writing

1. Keep lessons focused on one specific topic
2. Use clear, age-appropriate language
3. Include visual aids (images, diagrams)
4. Provide multiple examples with varying difficulty
5. End with actionable takeaways

### LaTeX Usage

1. Use inline formulas `$...$` for simple expressions in text
2. Use block formulas `$$...$$` for important equations
3. Keep formulas readable and well-formatted
4. Add text explanations alongside complex formulas

### Exam Design

1. Align questions with learning objectives
2. Include a mix of question types
3. Provide clear, helpful explanations
4. Use hints sparingly for practice exams
5. Ensure answer alternatives are plausible

### File Organization

1. Keep topic folders self-contained
2. Use descriptive file names
3. Organize images by lesson/topic
4. Keep file sizes reasonable for offline use
5. Version control content files

## Versioning

- Each metadata file includes a `version` field
- Use semantic versioning: `major.minor.patch`
- Update `lastUpdated` date when content changes
- Major version change: Significant content restructuring
- Minor version change: Additional content or improvements
- Patch version change: Typo fixes or minor corrections

## Future Extensions

The schema is designed to be extensible for:
- Video content integration
- Interactive simulations
- Collaborative features
- Additional subjects
- Custom question types
- Advanced analytics
- Adaptive difficulty
- Multiple languages

---

*This specification serves as the authoritative guide for creating and maintaining all educational content in the platform.*
