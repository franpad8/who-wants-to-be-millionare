import { useQuiz } from '../../contexts/QuizContext'

const QuestionStatement = () => {
  const { currentQuestionIndex } = useQuiz()

  return (
    <div>
      <p>
        Question #{currentQuestionIndex + 1}
      </p>
    </div>
  )
}

export default QuestionStatement
