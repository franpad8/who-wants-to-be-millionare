import { useQuiz } from '../../contexts/QuizContext'

const prizes = [
  10000000, 5000000, 2500000,
  1000000, 500000, 100000,
  50000, 30000, 20000,
  10000, 5000, 4000,
  3000, 2000, 1000
]

const PrizeTable = () => {
  const { currentQuestionIndex } = useQuiz()

  return (
    <table className='table-auto
                      text-left text-2xl text-transparent
                      select-none
                      bg-gradient-to-t from-orange to-orange-200
                      bg-clip-text'
    >
      <tbody>
        {prizes.map((amount, index) => {
          const className = 'group hover:bg-orange rounded-sm cursor-default transition-all duration-200'

          if (currentQuestionIndex === 14 - index) {
            return (
              <tr key={15 - index} className={className + ' bg-orange'}>
                <td className='text-slate-100 pr-5 text-right'>{15 - index}</td>
                <td className='text-black'>${amount}</td>
              </tr>
            )
          }
          return (
            <tr key={15 - index} className={className}>
              <td className='group-hover:text-slate-100 pr-5 text-right transition-all duration-200'>{15 - index}</td>
              <td className='group-hover:text-black transition-all duration-200'>${amount}</td>
            </tr>
          )
        }
        )}
      </tbody>
    </table>
  )
}

export default PrizeTable
