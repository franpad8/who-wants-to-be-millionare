import { useState } from 'react'
import { PlayerContext } from './PlayerContext'

export function PlayerProvider ({ children }) {
  const [player, setPlayer] = useState('')
  const value = { player, setPlayer }

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  )
}
