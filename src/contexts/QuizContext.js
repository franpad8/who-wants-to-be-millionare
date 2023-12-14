import { createContext, useContext } from 'react'

const QuizContext = createContext()

function start () {
  return { type: 'start' }
}

function selectOption (optionIndex) {
  return {
    type: 'selectOption',
    payload: optionIndex
  }
}

function resolveQuestion (optionIndex) {
  return {
    type: 'resolveQuestion'
  }
}

function nextQuestion () {
  return { type: 'nextQuestion' }
}

function useQuiz () {
  const context = useContext(QuizContext)
  if (!context) throw new Error('QuizContext was used outside of its Provider')

  return context
}

export { QuizContext, useQuiz, nextQuestion, resolveQuestion, selectOption, start }
