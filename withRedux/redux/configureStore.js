import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducer/root'

// store
const configureStore = (initialState = {}) => {
  const middlewares = []
  const store = createStore(
    reducers,
    initialState,
    // composeWithDevTools(applyMiddleware(...middlewares)),
  )
  return store
}

export default configureStore
