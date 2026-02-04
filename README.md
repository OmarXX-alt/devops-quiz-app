# DevOps Quiz Application

A static web application for testing knowledge of DevOps concepts and practices.

## Project Overview

This application is a browser-based quiz that helps users learn and test their understanding of DevOps principles, including:
- DevOps Culture
- Version Control Systems
- Continuous Integration
- Continuous Delivery
- Continuous Deployment
- Infrastructure as Code

## Features

- Interactive quiz interface with topic selection
- 20+ curated DevOps questions across multiple topics
- Immediate feedback on answer selection
- Detailed explanations for each question vbenfvnec
- Clean, responsive user interface
- Progress tracking through questions
- Add example

## Project Structure
```
devops-quiz-app/
├── index.html          # Main HTML structure and UI
├── styles.css          # Styling and layout
├── app.js              # Quiz logic and interaction handling
├── data/
│   └── questions.json  # Question bank with DevOps quiz questions
└── README.md           # Project documentation
```

## Question Format

Each question in `data/questions.json` follows this structure:
```json
{
  "id": "Q1",
  "topic": "Continuous Integration",
  "question": "What is the primary goal of Continuous Integration?",
  "options": [
    "Automatically deploy to production",
    "Frequently integrate code changes into a shared repository",
    "Eliminate the need for testing",
    "Remove the need for branches"
  ],
  "answerIndex": 1,
  "explanation": "Continuous Integration aims to detect integration issues early."
}
```

### Field Descriptions:
- **id**: Unique identifier for the question (e.g., "Q1", "Q2")
- **topic**: The DevOps topic category this question belongs to
- **question**: The question text displayed to the user
- **options**: Array of four possible answer choices
- **answerIndex**: Zero-based index (0-3) indicating the correct answer in the options array
- **explanation**: Educational explanation provided after answering

### Question Bank Guidelines:
- Minimum 20 questions required
- Questions cover at least 4 different DevOps topics
- All questions follow the standardized format above
- Answer indices are 0-based (0 = first option, 1 = second option, etc.)

## How to Run

1. Clone the repository:
```bash
   git clone https://github.com/YOUR-USERNAME/devops-quiz-app.git
```

2. Navigate to the project directory:
```bash
   cd devops-quiz-app
```

3. Open `index.html` in a web browser:
   - Double-click the file, or
   - Use a local server (recommended):
```bash
     python -m http.server 8000
```
     Then visit `http://localhost:8000`

## Development Workflow

This project was developed using Git branching and Pull Request workflow:

### Branches:
- `main` - Production-ready code
- `feature/question-bank` - DevOps question development (Student A)
- `feature/quiz-ui` - UI and quiz logic development (Student B)

### Workflow:
1. Create feature branch from main
2. Develop incrementally with meaningful commits
3. Open Pull Request for code review
4. Address review feedback
5. Merge to main after approval

## Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling and layout
- **JavaScript (ES6+)** - Quiz logic and interactivity
- **JSON** - Data storage for questions

## Team Members

- **Student A** - Question Bank Owner
  - Designed question data structure
  - Created and curated DevOps questions
  - Maintained data consistency and quality

- **Student B** - UI and Quiz Logic Owner
  - Implemented user interface
  - Developed quiz behavior and answer checking
  - Integrated question bank with UI

## License

This project is created for educational purposes as part of a DevOps course assignment.

## Acknowledgments

- Course materials and DevOps documentation
- Git and GitHub documentation
- DevOps community resources