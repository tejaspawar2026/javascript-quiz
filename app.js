const questions = [
  {
    'que': 'Which of the following is the markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct' : "a"
  },
  {
    'que': 'What does HTML stand for?',
    'a': 'Hyper Text Markup Language',
    'b': 'High Tech Markup Language',
    'c': 'Hyperlink and Text Markup Language',
    'd': 'Home Tool Markup Language',
    'correct' : "a"
  },
  {
    'que': "What is the purpose of CSS in web development?",
    'a': "To add interactivity to web pages",
    'b': "To structure the content of web pages",
    'c': "To define the layout and presentation of web pages",
    'd': "To manage server-side logic",
    'correct': "c"
  },
  {
    'que': "Which of the following is NOT a valid HTTP status code?",
    'a': "200 OK",
    'b': "404 Not Found",
    'c': "500 Internal Server Error",
    'd': "303 Page Moved Permanently",
    'correct': "d"
  },
  {
    'que': "What is the purpose of JavaScript in web development?",
    'a': "To style web pages",
    'b': "To structure web pages",
    'c': "To add interactivity and dynamic behavior to web pages",
    'd': "To define the layout of web pages",
    'correct': "c"
  },
  {
    'que': "Which of the following is used for responsive web design?",
    'a': "Bootstrap",
    'b': "jQuery",
    'c': "AngularJS",
    'd': "Django",
    'correct': "a"
  },
  {
    'que': "What is the purpose of a \"div\" element in HTML?",
    'a': "To define a hyperlink",
    'b': "To define a division or section in an HTML document",
    'c': "To display an image",
    'd': "To create a form",
    'correct': "b"
  },
  {
    'que': "Which of the following is NOT a valid method to include CSS in an HTML document?",
    'a': "Inline CSS",
    'b': "External CSS file",
    'c': "Internal CSS",
    'd': "JavaScript",
    'correct': "d"
  },
  {
    'que': "Which of the following is a commonly used version control system for managing code in web development projects?",
    'a': "Git",
    'b': "Python",
    'c': "Java",
    'd': "Ruby",
    'correct': "a"
  },
  {
    'que': "What is the purpose of a \"DOCTYPE\" declaration in an HTML document?",
    'a': "To declare the character encoding of the document",
    'b': "To specify the version of HTML being used",
    'c': "To define the document type and version",
    'd': "To link to an external stylesheet",
    'correct': "c"
  },
  {
    'que': "Which programming language is commonly used for server-side scripting in web development?",
    'a': "HTML",
    'b': "CSS",
    'c': "JavaScript",
    'd': "PHP",
    'correct': "d"
  },
  {
    'que': "What is the purpose of the <head> tag in an HTML document?",
    'a': "To define the main content of the page",
    'b': "To specify the title of the page and include metadata",
    'c': "To create a hyperlink",
    'd': "To define a division or section",
    'correct': "b"
  }
]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;

const queBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
  if (index === total) {
    return endQuiz()
  }
  reset();
  const data = questions[index]
  queBox.innerText = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
  const data = questions[index]
  const ans = getAnswer();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
}

const getAnswer = () => {
  let answer;
  optionInputs.forEach(
    (input) => {
      if (input.checked) {
        answer = input.value;
      }
    }
  )
  return answer;
}

const reset = () => {
  optionInputs.forEach(
    (input) => {
      input.checked = false;
    }
  )
}

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
  <div style="text-align: center;">
    <h3>Thank you for playing the quiz</h3>
    <h2>${right} / ${total} are correct</h2>
  </div>
`
}

loadQuestion();