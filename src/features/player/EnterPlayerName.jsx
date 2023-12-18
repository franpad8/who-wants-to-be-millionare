import { useEffect, useRef } from 'react'
import { usePlayer } from '../../contexts/PlayerContext'

const EnterPlayerName = () => {
  const inputRef = useRef()
  const { player, setPlayer } = usePlayer()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div className='flex flex-col gap-3 items-center'>
      <label className='text-xl' htmlFor='enterPlayerName'>Enter Name:</label>
      <input
        ref={inputRef}
        className='lg:w-[20rem] text-slate-100 font-semibold p-2 text-center
                 bg-black rounded-full focus:outline-none ring-[1px]
                 ring-slate-100 focus:ring-offset-1 transition-all duration-200
                   hover:ring-offset-1 font-sans text-lg tracking-wider'
        id='enterPlayerName'
        autoCorrect='off'
        spellCheck='false'
        type='text'
        value={player}
        onChange={(e) => { setPlayer(e.target.value) }}
      />
    </div>
  )
}

export default EnterPlayerName
