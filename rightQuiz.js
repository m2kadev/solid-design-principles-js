class BooleanQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoice() {
        console.log("1.True")
        console.log("0.False")
    }
}

class MultiChoiceQuestion {
    constructor(description, options) {
        this.description = description
        this.options = options
    }

    printQuestionChoice() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}.${option}`)
        })
    }
}

function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description)
        question.printQuestionChoice()
        console.log('')
    })
}
const questions = [
    new BooleanQuestion("This video is useful."),
    new MultiChoiceQuestion(
        "Choose your favorite languages", 
        ['HTML', 'CSS', 'Javascript', 'PHP']
        ),
]

printQuiz(questions)