import { useLifeline, selectLifeline, applyLifeline } from '../../contexts/LifelineContext'
import { useQuiz } from '../../contexts/QuizContext'

const Lifeline = () => {
  const { canUseLifeline, dispatch } = useLifeline()
  const { currentQuestion } = useQuiz()

  function handleClick () {
    dispatch(selectLifeline())

    setTimeout(() => {
      dispatch(applyLifeline(currentQuestion.correct))
    }, 3000)
  }

  return (
    <div>
      <button disabled={!canUseLifeline} onClick={handleClick}>50/50</button>
    </div>
  )
}

export default Lifeline
