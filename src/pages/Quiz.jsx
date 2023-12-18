import { finishGame, nextQuestion, useQuiz } from '../contexts/QuizContext'
import Question from '../features/quiz/Question'
import Button from '../ui/Button'
import Lifeline from '../features/lifelines/Lifeline'
import { useLifeline, activateLifeline } from '../contexts/LifelineContext'
import Logo from '../ui/Logo'
import PrizeTable from '../features/quiz/PrizeTable'
import { usePlayer } from '../contexts/PlayerContext'
import Sound from '../features/player/Sound'
import nextAudio from '../assets/sounds/next.mp3'
import wonAudio from '../assets/sounds/won.mp3'
import selectingEasyAudio from '../assets/sounds/selecting-easy.mp3'
import selectingHardAudio from '../assets/sounds/selecting-hard.mp3'

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
  const { player: playerName, loadAudio } = usePlayer()

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
      if (hasWon) loadAudio(wonAudio, { format: 'mp3', initialVolume: 0.25, autoplay: true })
      updateRanking()
      quizDispatch(finishGame())
      return
    }

    loadAudio(nextAudio, {
      format: 'mp3',
      initialVolume: 0.25,
      autoplay: true,
      onend: function () {
        const onQuestionAudio = currentQuestionIndex < 4 ? selectingEasyAudio : selectingHardAudio
        loadAudio(onQuestionAudio, { format: 'mp3', initialVolume: 0.25, autoplay: true, loop: true })
      }
    })
    const incrementLifeline = [4, 8, 12].includes(currentQuestionIndex)
    lifelineDispatch(activateLifeline(incrementLifeline))
    quizDispatch(nextQuestion())
  }

  return (
    <>
      <Sound className='absolute top-0 left-0' />
      <div className='space-y-10'>
        <div className='grid grid-cols-[1fr_auto] justify-items-center items-center md:gap-4'>

          <Logo size='lg' />

          <div className='border-[3px] rounded-md border-blue-800
                        bg-black
                        justify-self-stretch p-2
                        md:flex md:flex-col gap-2 hidden'
          >
            <Lifeline className='self-center' />
            <PrizeTable />
          </div>
        </div>
        <div className='flex flex-col justify-center gap-8'>
          <Lifeline className='self-end md:hidden' />
          <Question />
          <Button className='self-center' onClick={handleClick} disabled={status !== 'resolved'}>
            {isGameOver ? 'Next' : 'Next Question'}
          </Button>
        </div>
      </div>
    </>
  )
}
