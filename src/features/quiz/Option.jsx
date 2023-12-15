import { useLifeline } from '../../contexts/LifelineContext'
import { useQuiz, resolveQuestion, selectOption } from '../../contexts/QuizContext'

const Option = ({ text, index }) => {
  const { dispatch, status, answer, currentQuestion } = useQuiz()
  const { status: lifelineStatus, eliminatedOptions } = useLifeline()

  function handleClick () {
    dispatch(selectOption(index))

    setTimeout(() => {
      dispatch(resolveQuestion())
    }, 3000)
  }

  function styleClass () {
    if (status === 'resolved' && index === currentQuestion.correct) {
      return 'correct'
    }
    if (status === 'resolved' && answer === index && index !== currentQuestion.correct) {
      return 'incorrect'
    }
    if (lifelineStatus === 'applied' && eliminatedOptions.includes(index)) {
      return 'eliminated'
    }

    return ''
  }

  return (
    <button className={`option ${styleClass()}`} onClick={handleClick} disabled={status !== 'selecting'}>
      {text}
    </button>
  )
}

export default Option
