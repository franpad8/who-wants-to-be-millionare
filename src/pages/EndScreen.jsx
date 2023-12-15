import { useNavigate } from 'react-router-dom'
import { start, useQuiz } from '../contexts/QuizContext'
import { resetLifeline, useLifeline } from '../contexts/LifelineContext'

export function EndScreen () {
  const navigate = useNavigate()
  const { dispatch: quizDispatch } = useQuiz()
  const { dispatch: lifelineDispatch } = useLifeline()

  function handleClick () {
    quizDispatch(start())
    lifelineDispatch(resetLifeline())
    navigate('/')
  }

  return (
    <div>
      Finish
      <button onClick={handleClick}>Play again</button>
    </div>
  )
}
