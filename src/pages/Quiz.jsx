import { useNavigate } from 'react-router-dom'
import { nextQuestion, useQuiz } from '../contexts/QuizContext'
import Question from '../features/quiz/Question'
import Button from '../ui/Button'
import Lifeline from '../features/lifelines/Lifeline'
import { useLifeline, activateLifeline } from '../contexts/LifelineContext'

export function Quiz () {
  const { currentQuestionIndex, status, dispatch: quizDispatch, answer, currentQuestion } = useQuiz()
  const { dispatch: lifelineDispatch } = useLifeline()

  const navigate = useNavigate()

  const isGameOver = status === 'resolved' &&
    (currentQuestionIndex === 14 || answer !== currentQuestion.correct)

  function handleClick () {
    if (isGameOver) {
      navigate('/finish')
      return
    }

    const incrementLifeline = [4, 8, 12].includes(currentQuestionIndex)
    lifelineDispatch(activateLifeline(incrementLifeline))
    quizDispatch(nextQuestion())
  }

  return (
    <div>
      <Lifeline />
      <Question />
      <Button onClick={handleClick} hidden={status !== 'resolved'}>
        {isGameOver ? 'Next' : 'Next Question'}
      </Button>
    </div>
  )
}
