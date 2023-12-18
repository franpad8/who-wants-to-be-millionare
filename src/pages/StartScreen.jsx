import { useQuiz, start } from '../contexts/QuizContext'
import EnterPlayerName from '../features/player/EnterPlayerName'
import Button from '../ui/Button'
import Logo from '../ui/Logo'
import { usePlayer } from '../contexts/PlayerContext'
import { NEXT_QUESTION_AUDIO, ON_QUESTION_EASY_AUDIO, AUDIO_CONFIG } from '../constants/audios'
import Sound from '../features/player/Sound'
import { getQuestions } from '../services/questionsApi'

export function StartScreen () {
  const { dispatch } = useQuiz()
  const { player } = usePlayer()
  const { loadAudio } = usePlayer()

  async function handleClick () {
    loadAudio(NEXT_QUESTION_AUDIO, {
      ...AUDIO_CONFIG,
      onend: () => {
        loadAudio(ON_QUESTION_EASY_AUDIO, { ...AUDIO_CONFIG, loop: true })
      }
    })

    const questions = await getQuestions()
    dispatch(start(questions))
  }

  return (
    <>
      <Sound className='absolute top-0 left-0' />
      <div className='flex flex-col gap-10 justify-center items-center'>
        <div className='self-center'>
          <Logo />
        </div>
        <EnterPlayerName />
        <div className='flex flex-col gap-3 w-[100%] sm:w-[50%]'>
          <Button type='lg' onClick={handleClick} disabled={player.length < 3}>Play</Button>
          <Button type='lg' to='/best'>Best Players</Button>
        </div>
      </div>
    </>
  )
}
