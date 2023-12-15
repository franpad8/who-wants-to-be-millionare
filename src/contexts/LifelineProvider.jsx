import { useReducer } from 'react'
import reducer from '../reducers/lifelines'
import { LifelineContext } from './LifelineContext'
import { useQuiz } from './QuizContext'

const initialState = {
  // iddle, applying, applied
  status: 'iddle',
  numAvailable: 0,
  eliminatedOptions: []
}

export function LifelineProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { status: quizStatus } = useQuiz()

  const canUseLifeline = state.numAvailable > 0 && state.status === 'iddle' && quizStatus === 'selecting'

  const value = { ...state, canUseLifeline, dispatch }

  return (
    <LifelineContext.Provider value={value}>
      {children}
    </LifelineContext.Provider>
  )
}
