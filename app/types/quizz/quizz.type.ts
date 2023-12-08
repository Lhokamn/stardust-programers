export type QuizzPropsType = {
    questions: QuizzQuestionType[]
}

export type QuizzQuestionType = {
    question: string,
    answers: string[],
    correctAnswer: string,
}