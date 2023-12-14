import { useQuiz } from '../../contexts/QuizContext'
import Option from './Option'

const OptionList = () => {
  const { currentQuestion } = useQuiz()
  const options = currentQuestion.content

  return (
    <>
      {options.map((option, index) => <Option key={index} index={index} text={option} />)}
    </>
  )
}

export default OptionList
