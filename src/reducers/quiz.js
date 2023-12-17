export default function reducer (state, action) {
  switch (action.type) {
    case 'initialize':
      return {
        currentQuestionIndex: null,
        status: 'initial',
        answer: null
      }

    case 'start':
      return {
        ...state,
        currentQuestionIndex: 0,
        answer: null,
        status: 'selecting'
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

    case 'finishGame': {
      return {
        ...state,
        status: 'finished'
      }
    }

    default:
      return state
  }
}
