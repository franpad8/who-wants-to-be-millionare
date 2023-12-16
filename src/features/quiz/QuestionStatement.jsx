import { useQuiz } from '../../contexts/QuizContext'
import Box from '../../ui/Box'

const QuestionStatement = () => {
  const { currentQuestion } = useQuiz()

  return (
    <Box>
      <p>
        {currentQuestion.question}
      </p>
    </Box>
  )
}

export default QuestionStatement
