const questions = [
    "Oque eu aprendi hoje?",
    "Oque me deixou triste? e como eu posso fazer para melhorar?",
    "Oque me deixou feliz?",
    "Quantas pessoas eu ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []

process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})