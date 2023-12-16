export default function reducer (state, action) {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        currentQuestionIndex: 0,
        status: 'selecting',
        answer: null
      }

    case 'selectOption':
      return {
        ...state,
        status: 'resolving',
        answer: action.payload
      }

    case 'resolveQuestion':
      return {
        ...state,
        status: 'resolved'
      }

    case 'nextQuestion':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        status: 'selecting',
        answer: null
      }

    default:
      return state
  }
}
