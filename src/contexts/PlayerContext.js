import { useContext, createContext } from 'react'

export const PlayerContext = createContext()

export function usePlayer () {
  const context = useContext(PlayerContext)

  if (!context) throw new Error('PlayerContext was used outside its Provider')

  return context
}
