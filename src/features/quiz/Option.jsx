import { useQuiz, resolveQuestion, selectOption } from '../../contexts/QuizContext'

const Option = ({ text, index }) => {
  const { dispatch, status, answer, currentQuestion } = useQuiz()

  function handleClick () {
    dispatch(selectOption(index))

    setTimeout(() => {
      dispatch(resolveQuestion())
    }, 5000)
  }

  function styleClass () {
    if (status === 'resolved' && index === currentQuestion.correct) {
      return 'correct'
    }
    if (status === 'resolved' && answer === index && index !== currentQuestion.correct) {
      return 'incorrect'
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
