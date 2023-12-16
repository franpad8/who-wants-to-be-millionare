import { useLifeline } from '../../contexts/LifelineContext'
import { useQuiz, resolveQuestion, selectOption } from '../../contexts/QuizContext'
import Box from '../../ui/Box'

const Option = ({ text, index }) => {
  const { dispatch, status, answer, currentQuestion } = useQuiz()
  const { status: lifelineStatus, eliminatedOptions } = useLifeline()

  const isSelected = answer === index
  const isCorrect = status === 'resolved' && index === currentQuestion.correct
  const isIncorrect = status === 'resolved' && isSelected && index !== currentQuestion.correct
  const isEliminated = lifelineStatus === 'applied' && eliminatedOptions.includes(index)

  const indexToLetter = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D'
  }

  function handleClick () {
    dispatch(selectOption(index))

    setTimeout(() => {
      dispatch(resolveQuestion())
    }, 3000)
  }

  function styleClass () {
    if (isCorrect) {
      return 'group correct bg-green hover:!bg-green'
    }
    if (isIncorrect) {
      return 'group incorrect bg-orange hover:bg-orange'
    }
    if (isEliminated) {
      return 'group eliminated text-transparent'
    }
    if (isSelected) {
      return 'group selected animate-blinking'
    }

    return 'group normal hover:bg-orange'
  }

  return (
    <Box
      type='button'
      className={`group ${styleClass()}`}
      onClick={handleClick}
      disabled={status !== 'selecting' || isEliminated}
    >
      <div className='flex items-center gap-2'>
        <span className='group-[.correct]:text-orange
                          group-[.incorrect]:text-slate-100
                          group:text-orange
                          group-[.selected]:text-orange
                          group-[.selected:hover]:text-orange
                          group-[.normal]:text-orange
                          group-[.normal:hover]:text-slate-100
                          transition-all duration-75'
        >{indexToLetter[index]}:
        </span>
        <span className='group-[.correct]:text-black
                         group-[.incorrect]:text-black
                         group-[.selected]:text-slate-100
                         group-[.selected:hover]:text-slate-100
                         group-[.normal:hover]:text-black
                         transition-all duration-75'
        >
          {text}
        </span>
      </div>
    </Box>
  )
}

export default Option
