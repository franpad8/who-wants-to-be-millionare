import React, { useEffect } from 'react'
import PlayerRanking from '../features/player/PlayerRanking'
import Button from '../ui/Button'

const Best = () => {
  useEffect(() => {
    console.log('hola')
  }, [])

  return (
    <div className='flex flex-col items-center gap-8'>
      <PlayerRanking />
      <Button to='/'>Back</Button>
    </div>
  )
}

export default Best
