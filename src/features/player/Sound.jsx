import React from 'react'
import { usePlayer } from '../../contexts/PlayerContext'
import SoundOffIcon from '../../ui/SoundOffIcon'
import SoundOnIcon from '../../ui/SoundOnIcon'

const Sound = ({ className }) => {
  const { mute, setMute } = usePlayer()

  return (
    mute
      ? <SoundOffIcon
          className={className + ' cursor-pointer'}
          title='Unmute'
          fill='#f1f5f9'
          onClick={() => setMute(!mute)}
        />
      : <SoundOnIcon
          className={className + ' cursor-pointer'}
          title='Mute'
          fill='#f1f5f9'
          onClick={() => setMute(!mute)}
        />
  )
}

export default Sound
