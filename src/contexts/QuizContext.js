import { createContext, useContext } from 'react'

const QuizContext = createContext()

function start () {
  return { type: 'start' }
}

function nextQuestion () {
  return { type: 'nextQuestion' }
}

function useQuiz () {
  const context = useContext(QuizContext)
  if (!context) throw new Error('QuizContext was used outside of its Provider')

  return context
}

export { QuizContext, useQuiz, start, nextQuestion }
