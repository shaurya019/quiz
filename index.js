var quizarray = [
  {
    question: "what is sbxc",
    a: "sdfc",
    b: "ssss",
    c: "xxxx",
    d: "xcxc",
    correct: "a",
  },
  {
    question: "what maths",
    a: "maths",
    b: "mats",
    c: "xxxx",
    d: "xcxc",
    correct: "a",
  },
  {
    question: "what is c++",
    a: "x",
    b: "zzz",
    c: "xxxx",
    d: "xcxxc",
    correct: "a",
  },
  {
    question: "what ia 123",
    a: "234",
    b: "432x",
    c: "xxxx",
    d: "vdw123",
    correct: "a",
  }
];

var quiz = document.getElementById("quiz");
var answer = document.querySelectorAll(".answer");
var question = document.getElementById("question");
var option_a = document.getElementById("a_value");
var option_b = document.getElementById("b_value");
var option_c = document.getElementById("c_value");
var option_d = document.getElementById("d_value");

var submitbtn = document.getElementById("submit");

var curr = 0;
var quizScore = 0;

function loadQuiz() {
  deselect();
  question.innerHTML = quizarray[curr].question;
  option_a.innerText = quizarray[curr].a;
  option_b.innerText = quizarray[curr].b;
  option_c.innerText = quizarray[curr].c;
  option_d.innerText = quizarray[curr].d;
}
function deselect() {
  answer.forEach(answer => answer.checked = false);
}

submitbtn.addEventListener("click", () => {
  var selectedoption;
  answer.forEach((answer) => {
    if (answer.checked) {
      selectedoption = answer;
    }
  });

  if (selectedoption == quizarray[curr].correct) {
    quizScore = quizScore + 1;
  }
  curr = curr + 1;
  if (curr == quizarray.length) {
    document.getElementById(
      "quiz"
    ).innerHTMLc = `<h1> score ${quizScore} out of ${quizarray.length}</h1>`;
  } else {
    loadQuiz();
  }
});
