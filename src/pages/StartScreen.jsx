import { Link, useNavigate } from 'react-router-dom'
import { useQuiz, start } from '../contexts/QuizContext'
import EnterPlayerName from '../features/player/EnterPlayerName'
import Button from '../ui/Button'

export function StartScreen () {
  const { dispatch } = useQuiz()
  const navigate = useNavigate()

  function handleClick () {
    dispatch(start())
    navigate('/quiz')
  }

  return (
    <div>
      <EnterPlayerName />
      <Button onClick={handleClick}>Start Quiz</Button>
      <Link to='/best'>Best Players</Link>
    </div>
  )
}
