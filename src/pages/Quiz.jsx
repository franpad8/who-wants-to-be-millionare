import { useNavigate } from 'react-router-dom'
import { nextQuestion, useQuiz } from '../contexts/QuizContext'
import Question from '../features/quiz/Question'
import Button from '../ui/Button'

export function Quiz () {
  const { currentQuestionIndex, dispatch } = useQuiz()
  const navigate = useNavigate()

  function handleClick () {
    if (currentQuestionIndex === 14) {
      navigate('/finish')
      return
    }

    dispatch(nextQuestion())
  }

  return (
    <div>
      <Question />
      <Button onClick={handleClick}>Next Question</Button>
    </div>
  )
}
