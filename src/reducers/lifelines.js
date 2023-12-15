function getEliminatedOptions (correctOption) {
  const options = [0, 1, 2, 3].filter(i => i !== correctOption)
  const eliminated = options.splice(Math.floor(Math.random() * 3), 1)
    .concat(options.splice(Math.floor(Math.random() * 2), 1))

  return eliminated
}

export default function reducer (state, action) {
  switch (action.type) {
    case 'lifeline/reset':
      return {
        ...state,
        numAvailable: 0,
        eliminatedOptions: [],
        status: 'iddle'
      }

    case 'lifeline/active':
      return {
        ...state,
        numAvailable: state.numAvailable + (action.payload.withIncrement ? 1 : 0),
        eliminatedOptions: [],
        status: 'iddle'
      }

    case 'lifeline/selected':
      if (state.numAvailable < 1) return state

      return {
        ...state,
        numAvailable: state.numAvailable - 1,
        status: 'applying'
      }

    case 'lifeline/applied':
      return {
        ...state,
        status: 'applied',
        eliminatedOptions: getEliminatedOptions(action.payload.correctOption)
      }
    default:
      return state
  }
}
