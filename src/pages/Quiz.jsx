import { useNavigate } from 'react-router-dom'
import { nextQuestion, useQuiz } from '../contexts/QuizContext'
import Question from '../features/quiz/Question'
import Button from '../ui/Button'

export function Quiz () {
  const { currentQuestionIndex, status, dispatch, answer, currentQuestion } = useQuiz()
  const navigate = useNavigate()

  const isGameOver = status === 'resolved' &&
    (currentQuestionIndex === 14 || answer !== currentQuestion.correct)

  function handleClick () {
    if (isGameOver) {
      navigate('/finish')
      return
    }

    dispatch(nextQuestion())
  }

  return (
    <div>
      <Question />
      <Button onClick={handleClick} hidden={status !== 'resolved'}>
        {isGameOver ? 'Next' : 'Next Question'}
      </Button>
    </div>
  )
}
