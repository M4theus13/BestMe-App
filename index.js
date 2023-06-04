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

process.on('exit', () => {
    console.log(`
    Que legal!
    
    Oque você aprendeu hoje foi:
    ${answers[0]}

    Oque te deixou triste e você poderia melhorar foi:
    ${answers[1]}

    Oque te deixou feliz hoje foi:
    ${answers[2]}

    Você ajudou ${answers[3]} pessoas hoje
    `)
})