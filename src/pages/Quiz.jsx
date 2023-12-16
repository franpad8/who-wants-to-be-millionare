import { useNavigate } from 'react-router-dom'
import { nextQuestion, useQuiz } from '../contexts/QuizContext'
import Question from '../features/quiz/Question'
import Button from '../ui/Button'
import Lifeline from '../features/lifelines/Lifeline'
import { useLifeline, activateLifeline } from '../contexts/LifelineContext'
import Logo from '../ui/Logo'
import PrizeTable from '../features/quiz/PrizeTable'

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
    <div className='space-y-10'>
      <div className='grid grid-cols-[1fr_auto] justify-items-center'>
        <div>
          <Logo size='lg' />
        </div>
        <div className='border-[3px] rounded-sm border-blue-600 justify-self-stretch p-2'>
          <Lifeline />
          <PrizeTable />
        </div>
      </div>
      <div>
        <Question />
        <Button className='mt-8' onClick={handleClick} disabled={status !== 'resolved'}>
          {isGameOver ? 'Next' : 'Next Question'}
        </Button>
      </div>
    </div>
  )
}
