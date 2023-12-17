import Confetti from 'react-confetti'
import { initialize, useQuiz } from '../contexts/QuizContext'
import { resetLifeline, useLifeline } from '../contexts/LifelineContext'
import Button from '../ui/Button'
import Box from '../ui/Box'

function message (questionIndex, hasWon) {
  if (hasWon) return 'Congratulations! You won the game! 🎉🎊'

  if (questionIndex < 5) return 'You Lost! 🤦🏻‍♂️'
  if (questionIndex < 10) return 'Good Luck Next Time! 🙃'
  if (questionIndex < 12) return 'Great job! 👏🏻'
  if (questionIndex <= 14) return 'That was close! 😮'

  throw new Error(`Illegal value for currentQuestionIndex = ${questionIndex} (should be between 0 and 14)`)
}

export function EndScreen () {
  const { dispatch: quizDispatch, currentQuestionIndex, hasWon } = useQuiz()
  const { dispatch: lifelineDispatch } = useLifeline()

  function handleClick () {
    lifelineDispatch(resetLifeline())
    quizDispatch(initialize())
  }

  return (
    <div className='flex flex-col gap-8 items-center'>
      {hasWon ? <Confetti /> : null}
      <Box className='text-orange text-7xl font-serif py-5'>{message(currentQuestionIndex, hasWon)}</Box>
      <Button onClick={handleClick}>Play again</Button>
    </div>
  )
}
