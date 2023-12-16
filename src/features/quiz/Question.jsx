import OptionList from './OptionList'
import QuestionStatement from './QuestionStatement'

const Question = () => {
  return (
    <div className='flex flex-col gap-3'>
      <QuestionStatement />
      <OptionList />
    </div>
  )
}

export default Question
