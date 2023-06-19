
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
    text: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correctIndex: 1
  },
  {
    text: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Venus", "Mercury"],
    correctIndex: 0
  },
  {
    text: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctIndex: 3
  },
  {
    text: "Who is the author of the Harry Potter book series?",
    options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Stephen King"],
    correctIndex: 1
  },
  {
    text: "Which country is famous for its tulips and windmills?",
    options: ["Netherlands", "Italy", "Sweden", "Switzerland"],
    correctIndex: 0
  },
  {
    text: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Salvador Dali"],
    correctIndex: 2
  },
  {
    text: "What is the largest continent on Earth?",
    options: ["Asia", "Africa", "Europe", "North America"],
    correctIndex: 0
  },
  {
    text: "Who invented the telephone?",
    options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Albert Einstein"],
    correctIndex: 0
  },
  {
    text: "What is the national flower of Japan?",
    options: ["Cherry blossom", "Rose", "Lotus", "Tulip"],
    correctIndex: 0
  },
  {
    text: "Which famous scientist developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie"],
    correctIndex: 1
  },
  {
    text: "Which animal is known as the 'King of the Jungle'?",
    options: ["Lion", "Tiger", "Elephant", "Giraffe"],
    correctIndex: 0
  },
  {
    text: "Who is the current President of the United States?",
    options: ["Joe Biden", "Donald Trump", "Barack Obama", "George Washington"],
    correctIndex: 0
  },
  {
    text: "Which famous scientist discovered the law of gravity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie"],
    correctIndex: 0
  },
  {
    text: "Which city is known as the 'Eternal City'?",
    options: ["Paris", "Rome", "Athens", "Cairo"],
    correctIndex: 1
  },
  {
    text: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Emily Brontë", "Jane Austen", "Mark Twain"],
    correctIndex: 0
  },
  {
    text: "What is the currency of Japan?",
    options: ["Yuan", "Rupee", "Yen", "Euro"],
    correctIndex: 2
  },
  {
    text: "Which country is famous for the Great Wall?",
    options: ["China", "India", "Brazil", "Russia"],
    correctIndex: 0
  },
  {
    text: "Who painted the 'The Starry Night'?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Salvador Dali"],
    correctIndex: 0
  },
  {
    text: "What is the tallest mountain in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
    correctIndex: 0
  },
  {
    text: "Who is the author of the book 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "F. Scott Fitzgerald", "George Orwell", "Charles Dickens"],
    correctIndex: 0
  },
  {
    text: "What is the largest animal on Earth?",
    options: ["Elephant", "Giraffe", "Blue whale", "Hippopotamus"],
    correctIndex: 2
  },
  {
    text: "Which city is known as the 'Big Apple'?",
    options: ["New York City", "Los Angeles", "Chicago", "San Francisco"],
    correctIndex: 0
  },
  {
    text: "Who invented the light bulb?",
    options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Isaac Newton"],
    correctIndex: 0
  },
  {
    text: "Which famous scientist developed the theory of evolution?",
    options: ["Charles Darwin", "Isaac Newton", "Albert Einstein", "Marie Curie"],
    correctIndex: 0
  },
  {
    text: "What is the largest country in the world by land area?",
    options: ["Russia", "Canada", "China", "United States"],
    correctIndex: 0
  }
];

const quiz = new Quiz(questions);
quiz.start();
