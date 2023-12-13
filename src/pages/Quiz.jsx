import { useNavigate } from 'react-router-dom'
import { nextQuestion, useQuiz } from '../contexts/QuizContext'

export function Quiz () {
  const { currentQuestionIndex, dispatch } = useQuiz()
  const navigate = useNavigate()

  function handleClick () {
    if (currentQuestionIndex === 14) {
      navigate('/finish')
      return
    }

    dispatch(nextQuestion())
  }

  return (
    <div>
      <span>Question #{currentQuestionIndex + 1}</span>
      <button onClick={handleClick}>Next Question</button>
    </div>
  )
}
