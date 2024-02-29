const API_URL = "https://quiz-api-topaz.vercel.app/api/v1/questions"
const getQuiz = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    render(data);
  } catch (error) {
    console.error(error);
  }
};

getQuiz()

const option = document.querySelector(".question-js")

const render = (data) => {
  let arr = []
  for (let i = 0; i < data.length; i++) {
    arr.push(data[0]);
  }

  for (let i = 0; i < arr.length - 3; i++) {

    const getQuestion = document.createElement("div")
    getQuestion.classList.add("options-gap")
    getQuestion.innerHTML = `
  <h1>${arr[i].questions[nextQuestion].question}</h1>
  `;
    option.append(getQuestion)
  }


  for (let i = 0; i < data.length; i++) {
    const getAnswer = document.createElement("div")
    getAnswer.classList.add("prompt")
    const test = document.createElement("h2");
    test.textContent = arr[i].questions[nextQuestion].options[i];
    getAnswer.append(test)
    option.append(getAnswer)
  }
};

const nextQuestionBtn = document.getElementById("submit-answer")
let nextQuestion = 0;
let progressBarLine = document.querySelector(".progress-bar")

nextQuestionBtn.addEventListener("click", () => {
  nextQuestion++;
  localStorage.setItem("counter", nextQuestion);
  document.location.reload();
});

let newCounter = localStorage.getItem("counter");
if (newCounter) {
  nextQuestion = newCounter;
} else {
  nextQuestion = 0;
}

if (newCounter) {
  arrCounter = newCounter;
  switch (newCounter) {
    case "1":
      progressBarLine.setAttribute("value", "20");
      break;
    case "2":
      progressBarLine.setAttribute("value", "30");
      break;
    case "3":
      progressBarLine.setAttribute("value", "40");
      break;
    case "4":
      progressBarLine.setAttribute("value", "50");
      break;
    case "5":
      progressBarLine.setAttribute("value", "60");
      break;
    case "6":
      progressBarLine.setAttribute("value", "70");
      break;
    case "7":
      progressBarLine.setAttribute("value", "80");
      break;
    case "8":
      progressBarLine.setAttribute("value", "90");
      break;
    case "9":
      progressBarLine.setAttribute("value", "100");
      break;
  }
} else {
  arrCounter = 0;
}







