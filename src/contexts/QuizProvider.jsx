import { useMemo, useReducer } from 'react'
import reducer from '../reducers/quiz'
import { QuizContext } from './QuizContext'

const initialState = {
  currentQuestionIndex: null,
  // initial, selecting, resolving, resolved, finished
  status: 'initial',
  answer: null,
  questions: []
}

export function QuizProvider ({ children }) {
  const [{
    answer,
    currentQuestionIndex,
    status,
    questions
  }, dispatch] = useReducer(reducer, initialState)

  const currentQuestion = useMemo(function () { return questions[currentQuestionIndex] },
    [currentQuestionIndex, questions])

  const hasWon = useMemo(function () {
    return (status === 'resolved' || status === 'finished') &&
    currentQuestionIndex === 14 && answer === currentQuestion.correct
  }, [answer, currentQuestionIndex, currentQuestion, status])

  const value = {
    answer,
    currentQuestion,
    currentQuestionIndex,
    hasWon,
    dispatch,
    status
  }

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  )
}
