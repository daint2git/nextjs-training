const initializeState = () => ({
  count: 0,
})

const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
}

// actions
export const incrementCount = () => ({
  type: ActionTypes.INCREMENT,
})

export const decrementCount = () => ({
  type: ActionTypes.DECREMENT,
})

export const resetCount = () => ({
  type: ActionTypes.RESET,
})

// reducer
const counter = (state = initializeState(), action) => {
  const { type } = action
  switch (type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    case ActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }
    case ActionTypes.RESET:
      return {
        ...state,
        count: initializeState().count,
      }
    default:
      return state
  }
}

export default counter
