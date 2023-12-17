import { useNavigate } from 'react-router-dom'
import { nextQuestion, useQuiz } from '../contexts/QuizContext'
import Question from '../features/quiz/Question'
import Button from '../ui/Button'
import Lifeline from '../features/lifelines/Lifeline'
import { useLifeline, activateLifeline } from '../contexts/LifelineContext'
import Logo from '../ui/Logo'
import PrizeTable from '../features/quiz/PrizeTable'
import { usePlayer } from '../contexts/PlayerContext'

export function Quiz () {
  const {
    currentQuestionIndex,
    status,
    dispatch: quizDispatch,
    answer,
    currentQuestion,
    hasWon
  } = useQuiz()
  const { dispatch: lifelineDispatch } = useLifeline()
  const { player: playerName } = usePlayer()

  const navigate = useNavigate()

  const isGameOver = status === 'resolved' &&
    (currentQuestionIndex === 14 || answer !== currentQuestion.correct)

  function updateRanking () {
    const ranking = JSON.parse(localStorage.getItem('ranking') || '[]')
    const newRanking = [
      ...ranking,
      { name: playerName, stage: hasWon ? 15 : currentQuestionIndex }
    ]
    newRanking.sort((a, b) => b.stage - a.stage)
    localStorage.setItem('ranking', JSON.stringify(newRanking.slice(0, 10)))
  }

  function handleClick () {
    if (isGameOver) {
      updateRanking()
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
        <div className='border-[3px] rounded-md border-blue-800
                      bg-primary
                        justify-self-stretch p-2
                        flex flex-col gap-2'
        >
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
