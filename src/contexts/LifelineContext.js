import { useContext, createContext } from 'react'

export const LifelineContext = createContext()

function resetLifeline () {
  return {
    type: 'lifeline/reset'
  }
}

function activateLifeline (withIncrement) {
  return {
    type: 'lifeline/active',
    payload: { withIncrement }
  }
}

function selectLifeline () {
  return {
    type: 'lifeline/selected'
  }
}

function applyLifeline (correctOption) {
  return {
    type: 'lifeline/applied',
    payload: { correctOption }
  }
}

function useLifeline () {
  const context = useContext(LifelineContext)
  if (!context) throw new Error('LifelineContext was used outside its Provider')

  return context
}

export { useLifeline, activateLifeline, resetLifeline, selectLifeline, applyLifeline }
