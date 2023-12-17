import { useEffect, useState } from 'react'
import { PlayerContext } from './PlayerContext'
import { useGlobalAudioPlayer } from 'react-use-audio-player'

export function PlayerProvider ({ children }) {
  const [player, setPlayer] = useState('')
  const [mute, setMute] = useState(false)
  const { load: loadAudio, mute: muteAudio } = useGlobalAudioPlayer()

  useEffect(() => {
    muteAudio(mute)
  }, [mute, muteAudio])

  const value = { player, setPlayer, mute, setMute, loadAudio }

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  )
}
