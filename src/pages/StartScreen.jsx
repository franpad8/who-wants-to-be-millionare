import { useNavigate } from 'react-router-dom'
import { useQuiz, start } from '../contexts/QuizContext'

export function StartScreen () {
  const { dispatch } = useQuiz()
  const navigate = useNavigate()

  function handleClick () {
    dispatch(start())
    navigate('/quiz')
  }

  return (
    <div>
      Start
      <button onClick={handleClick}>Start Quiz</button>
    </div>
  )
}
