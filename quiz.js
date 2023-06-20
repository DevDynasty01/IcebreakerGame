const readline = require('readline');

class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.currentQuestion = 0;
    this.score = 0;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  start = () => {
    this.displayQuestion();
  }

  displayQuestion = () => {
    const question = this.questions[this.currentQuestion];
    console.log(`Question ${this.currentQuestion + 1}: ${question.text}`);
    console.log("Options:");
    question.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
    this.rl.question("Enter your answer: ", this.answerQuestion);
  }

  answerQuestion = (answer) => {
    const question = this.questions[this.currentQuestion];
    if (parseInt(answer) === question.correctIndex + 1) {
      console.log('\x1b[32m%s\x1b[0m', "Correct answer!"); // Print correct answer message in green
      this.score++;
    } else {
      console.log('\x1b[31m%s\x1b[0m', "Wrong answer!"); // Print wrong answer message in red
      console.log('\x1b[32m%s\x1b[0m', `The correct answer is: ${question.options[question.correctIndex]}`); // Print correct answer in green
    }
    this.currentQuestion++;
    if (this.currentQuestion < this.questions.length) {
      this.displayQuestion();
    } else {
      this.showScore();
      this.rl.close();
    }
  }

  showScore = () => {
    console.log(`Quiz ended! Your score: ${this.score}/${this.questions.length}`);
  }
}

// Quiz questions
const questions = [
  {
    text: "What is the correct way to declare a variable in Python?",
    options: ["var x;", "int x;", "let x;", "x = 1;"],
    correctIndex: 3
  },
  {
    text: "Which of the following is a valid Python comment?",
    options: ["/* This is a comment */", "// This is a comment", "# This is a comment", "<!-- This is a comment -->"],
    correctIndex: 2
  },
  {
    text: "What is the output of the following Python code?\n\nprint(3 + 2 * 4)",
    options: ["11", "14", "20", "Error"],
    correctIndex: 0
  },
  {
    text: "Which operator is used for exponentiation in Python?",
    options: ["**", "//", "++", "^"],
    correctIndex: 0
  },
  {
    text: "What is the result of the following Python expression?\n\n'Hello' + 'World'",
    options: ["HelloWorld", "Hello World", "'Hello' + 'World'", "Error"],
    correctIndex: 0
  },
  {
    text: "How do you define a function in Python?",
    options: ["define my_function():", "function my_function():", "def my_function():", "my_function():"],
    correctIndex: 2
  },
  {
    text: "What is the output of the following Python code?\n\nx = ['apple', 'banana', 'cherry']\nprint(len(x))",
    options: ["2", "3", "4", "Error"],
    correctIndex: 1
  },
  {
    text: "Which function is used to get user input in Python?",
    options: ["input()", "get_input()", "user_input()", "readline()"],
    correctIndex: 0
  },
  {
    text: "What is the correct way to write a conditional statement in Python?",
    options: ["if x == 5 {", "if (x == 5)", "if x == 5:", "if {x == 5}"],
    correctIndex: 2
  },
  {
    text: "What is the output of the following Python code?\n\nx = [1, 2, 3]\nprint(x[1])",
    options: ["1", "2", "3", "Error"],
    correctIndex: 1
  },
  {
    text: "How do you access the last element of a list in Python?",
    options: ["list[-1]", "list[last]", "list[last_element]", "list.last()"],
    correctIndex: 0
  },
  
  {
    text: "What is the correct way to write a for loop in Python?",
    options: ["for (i = 0; i < 5; i++)", "for i in range(5):", "for i = 0; i < 5; i++:", "for (i in range(5))"],
    correctIndex: 1
  },
  
  {
    text: "How do you convert a string to an integer in Python?",
    options: ["str()", "int()", "float()", "convert()"],
    correctIndex: 1
  },
  
  {
    text: "Which function is used to print text in Python?",
    options: ["print()", "echo()", "console.log()", "println()"],
    correctIndex: 0
  },
  {
    text: "What is the correct way to check if a value exists in a list in Python?",
    options: ["value in list", "list.contains(value)", "list.index(value)", "list.exists(value)"],
    correctIndex: 0
  },
  {
    text: "What is the output of the following Python code?\n\nx = [1, 2, 3]\nprint(x[-1])",
    options: ["1", "2", "3", "Error"],
    correctIndex: 2
  },
  {
    text: "How do you remove an element from a list in Python?",
    options: ["list.remove(element)", "list.pop()", "list.delete(element)", "list.clear()"],
    correctIndex: 1
  }
];

const quiz = new Quiz(questions);
quiz.start();
