import OptionList from './OptionList'
import QuestionStatement from './QuestionStatement'

const Question = () => {
  return (
    <div className='question'>
      <QuestionStatement />
      <OptionList />
    </div>
  )
}

export default Question
