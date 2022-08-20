function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description)
        switch (question.type) {
            case 'boolean':
                console.log('1.True')
                console.log('2.false')
                break
            
            case 'multiChoice':
                question.options.forEach((option, index) => {
                    console.log(`${index + 1}.${option}`)
                })
                break

            case 'text':
                console.log('Answer: ...............')
                break
        }

        console.log('')
    })
}



const questions = [
    {
        type: 'boolean',
        description: 'this video is useful'
    },

    {
        type: 'multiChoice',
        description: 'What is your favorite language?',
        options: ['CSS', 'HTML', 'Javascript', 'PHP']
    },

    {
        type: 'text',
        description: 'Describe your favorite JS feature'
    }
]

printQuiz(questions)