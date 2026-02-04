let allQuestions = [];
let filteredQuestions = [];
let currentIndex = 0;

const topicSelect = document.getElementById("topicSelect");
const quizBox = document.getElementById("quizBox");
const questionText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const feedbackDiv = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

// Load questions
fetch("data/questions.json")
  .then(response => response.json())
  .then(data => {
    allQuestions = data;
    loadTopics();
  })
  .catch(error => console.error("Error loading questions:", error));

function loadTopics() {
  const topics = [...new Set(allQuestions.map(q => q.topic))];

  topics.forEach(topic => {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = topic;
    topicSelect.appendChild(option);
  });
}

topicSelect.addEventListener("change", () => {
  const selectedTopic = topicSelect.value;
  filteredQuestions = allQuestions.filter(q => q.topic === selectedTopic);
  currentIndex = 0;
  quizBox.classList.remove("hidden");
  showQuestion();
});

function showQuestion() {
  const question = filteredQuestions[currentIndex];
  questionText.textContent = question.question;

  optionsDiv.innerHTML = "";
  feedbackDiv.textContent = "";
  nextBtn.classList.add("hidden");

  question.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(index);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selectedIndex) {
  const question = filteredQuestions[currentIndex];
  const buttons = optionsDiv.querySelectorAll("button");

  buttons.forEach(btn => btn.disabled = true);

  if (selectedIndex === question.answerIndex) {
    buttons[selectedIndex].classList.add("correct");
    feedbackDiv.textContent = "Correct! " + question.explanation;
  } else {
    buttons[selectedIndex].classList.add("wrong");
    buttons[question.answerIndex].classList.add("correct");
    feedbackDiv.textContent = "Wrong! " + question.explanation;
  }

  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < filteredQuestions.length) {
    showQuestion();
  } else {
    questionText.textContent = "Quiz Completed!";
    optionsDiv.innerHTML = "";
    nextBtn.classList.add("hidden");
  }
});
