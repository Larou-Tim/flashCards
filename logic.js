var inquirer = require("inquirer");

function BasicCard(front, back) {
    this.cardFront = front;
    this.cardBack = back;
    this.askQuestion = function () {
        var correctAnswer = this.cardBack;
        inquirer.prompt([
            {
                type: "input",
                message: this.cardFront,
                name: "question"
            }
        ]).then(function (user) {

            // var givenAnswer = ;

            if (user.question.toLowerCase() == correctAnswer.toLowerCase()) {
                console.log("Correct!");
            }
            else {
                console.log("I'm sorry, the correct answer was", correctAnswer);
            }
        });
    };
}

function ClozeCard(text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial = this.fullText.replace(this.cloze, "...");
}

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington"
);

// firstPresident.askQuestion();

// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "George Washington");

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");


console.log(firstPresidentCloze.partial);

