import Box from '../../ui/Box'

function formatStage (stage) {
  if (stage === 15) return 'Winner'
  if (stage === 0) return '1st'
  if (stage === 1) return '2nd'
  if (stage === 2) return '3rd'

  return (stage + 1) + 'th'
}

const PlayerRanking = () => {
  const ranking = JSON.parse(localStorage.getItem('ranking') || '[]')

  if (!ranking?.length) return <Box className='text-3xl py-5'>No matches registered</Box>

  return (
    <div className='bg-gradient-to-t from-primary/70 to-blue-900/60 p-5 rounded-md'>
      <div className='flex flex-col gap-3
                    text-3xl text-transparent select-none
                    bg-gradient-to-t from-orange to-orange-300
                    bg-clip-text'
      >
        <div className='grid grid-cols-[1fr_1fr] text-slate-100 gap-16'>
          <span className='text-center'>Name</span>
          <span className='text-center'>Stage</span>
        </div>
        {ranking.map(({ name, stage }, index) => {
          const className = `group hover:bg-orange
                          rounded-sm cursor-default
                          transition-all duration-200
                          text-center grid grid-cols-[1fr_1fr] gap-16`

          return (
            <div key={index} className={className}>
              <div className='group-hover:text-slate-100 transition-all duration-200 text-center'>{name}</div>
              <div className='group-hover:text-black transition-all duration-200 text-center'>
                {formatStage(stage)}
              </div>
            </div>
          )
        }
        )}
      </div>
    </div>
  )
}

export default PlayerRanking
