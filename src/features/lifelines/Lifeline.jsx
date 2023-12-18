import { AUDIO_CONFIG } from '../../constants/audios'
import { useLifeline, selectLifeline, applyLifeline } from '../../contexts/LifelineContext'
import { usePlayer } from '../../contexts/PlayerContext'
import { useQuiz } from '../../contexts/QuizContext'
import lifelineSound from '../../assets/sounds/50-50.mp3'

const Lifeline = () => {
  const { canUseLifeline, dispatch } = useLifeline()
  const { currentQuestion } = useQuiz()
  const { loadAudio } = usePlayer()

  function handleClick () {
    dispatch(selectLifeline())

    setTimeout(() => {
      loadAudio(lifelineSound, AUDIO_CONFIG)
      dispatch(applyLifeline(currentQuestion.correct))
    }, 3000)
  }

  return (
    <div>
      <button
        className='border-[3px] border-blue-800
                   rounded-[50%]
                   py-1 px-2
                   text-xl disabled:text-slate-600
                   cursor-pointer disabled:hover:cursor-not-allowed
                   bg-black
                   hover:scale-125 disabled:hover:scale-100'
        disabled={!canUseLifeline}
        onClick={handleClick}
      >50:50
      </button>
    </div>
  )
}

export default Lifeline
