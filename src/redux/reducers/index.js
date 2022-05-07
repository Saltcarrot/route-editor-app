import { combineReducers } from 'redux'
import { routePointsReducer } from './routePointsReducer'

export const rootReducer = combineReducers({
  routePoints: routePointsReducer,
})
