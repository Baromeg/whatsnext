// * Redux store setup
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import gamesReducer from './gamesReducer'
import tvReducer from './tvReducer'
import detailReducer from './detailReducer'

const rootReducer = combineReducers({
  games: gamesReducer,
  tv: tvReducer,
  detail: detailReducer
})

const middleware = [thunk]

const store = createStore(
  rootReducer /* preloadedState, */,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
