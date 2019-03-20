const initializeState = () => ({
  lastUpdate: Date.now(),
  light: false,
})

const ActionTypes = {
  TICK: 'TICK',
}

// actions
export const serverRenderClock = isServer => ({
  type: ActionTypes.TICK,
  payload: {
    light: !isServer,
    lastUpdate: Date.now(),
  },
})

export const startClock = ({ light }) => ({
  type: ActionTypes.TICK,
  payload: {
    light,
    lastUpdate: Date.now(),
  },
})

// reducer
export const clock = (state = initializeState(), action) => {
  const { type, payload } = action
  switch (type) {
    case ActionTypes.TICK:
      return {
        ...state,
        lastUpdate: payload.lastUpdate,
        light: !!payload.light,
      }
    default:
      return state
  }
}

export default clock
