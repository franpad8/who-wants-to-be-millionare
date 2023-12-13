import { useNavigate } from 'react-router-dom'
import { start, useQuiz } from '../contexts/QuizContext'

export function EndScreen () {
  const navigate = useNavigate()
  const { dispatch } = useQuiz()

  function handleClick () {
    dispatch(start)
    navigate('/')
  }

  return (
    <div>
      Finish
      <button onClick={handleClick}>Ok</button>
    </div>
  )
}
