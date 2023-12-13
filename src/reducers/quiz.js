export default function reducer (state, action) {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        currentQuestionIndex: 0,
        status: 'inGame'
      }

    case 'nextQuestion':
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 }

    default:
      return state
  }
}
