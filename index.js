const questions = [
    "Oque eu aprendi hoje?",
    "Oque me deixou triste? e como eu posso fazer para melhorar?",
    "Oque me deixou feliz?",
    "Quantas pessoas eu ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write(questions[index] + "\n")
}

ask()