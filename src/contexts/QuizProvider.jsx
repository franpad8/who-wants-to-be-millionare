import { useReducer } from 'react'
import reducer from '../reducers/quiz'
import { QuizContext } from './QuizContext'

const initialState = {
  currentQuestionIndex: null,
  status: 'initial'
}

export function QuizProvider ({ children }) {
  const [{ currentQuestionIndex }, dispatch] = useReducer(reducer, initialState)
  const value = {
    currentQuestionIndex,
    dispatch
  }

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  )
}
