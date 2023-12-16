import { useQuiz } from '../../contexts/QuizContext'
import Option from './Option'

const OptionList = () => {
  const { currentQuestion } = useQuiz()
  const options = currentQuestion.content

  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-y-3 gap-8'>
      {options.map((option, index) => <Option key={index} index={index} text={option} />)}
    </div>
  )
}

export default OptionList
