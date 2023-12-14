import { useQuiz } from '../../contexts/QuizContext'

const QuestionStatement = () => {
  const { currentQuestion } = useQuiz()

  return (
    <div>
      <p>
        {currentQuestion.question}
      </p>
    </div>
  )
}

export default QuestionStatement
