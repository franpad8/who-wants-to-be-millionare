import { QUESTIONS_API_URL } from '../constants/questions'

export async function getQuestions () {
  try {
    const response = await fetch(QUESTIONS_API_URL)
    const data = await response.json()
    if (!data) throw new Error('Error retrieving questions data')
    const sortedData = orderQuestionDataByDifficulty(data)
    const questions = mapDataToQuestions(sortedData)
    return questions
  } catch (err) {
    throw new Error('Error ocurred when connecting to Questions API: ' + err.message)
  }
}

function mapDataToQuestions (data) {
  return data.map(questionData => {
    const question = []
    question.question = questionData.question.text
    question.content = [...questionData.incorrectAnswers]
    question.content.unshift(questionData.correctAnswer)
    question.content.sort(() => Math.random() - 0.5)
    question.correct = question.content.findIndex(option => option === questionData.correctAnswer)

    return question
  })
}

function orderQuestionDataByDifficulty (questionsData) {
  const difficulty = { easy: 1, medium: 2, hard: 3 }
  const sortedData = [...questionsData].sort((qa, qb) => {
    return difficulty[qa.difficulty] - difficulty[qb.difficulty]
  })

  return sortedData
}
