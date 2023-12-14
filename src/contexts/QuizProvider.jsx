import { useMemo, useReducer } from 'react'
import reducer from '../reducers/quiz'
import { QuizContext } from './QuizContext'
import questions from '../data/questions.json'

const initialState = {
  currentQuestionIndex: null,
  // initial, selecting, resolving, resolved, finished
  status: 'initial',
  answer: null
}

export function QuizProvider ({ children }) {
  const [{ answer, currentQuestionIndex, status }, dispatch] = useReducer(reducer, initialState)

  const currentQuestion = useMemo(() => questions[currentQuestionIndex],
    [currentQuestionIndex])

  const value = {
    answer,
    currentQuestion,
    currentQuestionIndex,
    dispatch,
    status
  }

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  )
}
