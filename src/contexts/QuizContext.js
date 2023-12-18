import { createContext, useContext } from 'react'

const QuizContext = createContext()

function initialize () {
  return { type: 'initialize' }
}

function start (questions) {
  return {
    type: 'start',
    payload: questions
  }
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

function finishGame () {
  return { type: 'finishGame' }
}

function useQuiz () {
  const context = useContext(QuizContext)
  if (!context) throw new Error('QuizContext was used outside of its Provider')

  return context
}

export {
  QuizContext,
  useQuiz,
  nextQuestion,
  resolveQuestion,
  selectOption,
  finishGame,
  start,
  initialize
}
