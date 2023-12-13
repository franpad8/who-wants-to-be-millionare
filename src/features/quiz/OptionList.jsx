import Option from './Option'

const optionList = [
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4'
]

const OptionList = () => {
  return (
    <>
      {optionList.map((option, index) => <Option key={index} text={option} />)}
    </>
  )
}

export default OptionList
