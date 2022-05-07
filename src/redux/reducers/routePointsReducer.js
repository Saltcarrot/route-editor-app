import { actionTypes } from '../actions/routePointsActions'

const initialPoints = [
  {
    title: 'Route 111',
    id: Math.random().toString(36).slice(-6),
    coordinates: [55.160128, 61.39572],
    order: 1,
  },
  {
    title: 'Route 222',
    id: Math.random().toString(36).slice(-6),
    coordinates: [55.160447, 61.404217],
    order: 2,
  },
  {
    title: 'Route 333',
    id: Math.random().toString(36).slice(-6),
    coordinates: [55.156995, 61.406663],
    order: 3,
  },
]

const resetOrders = (state) => {
  let count = 1
  return state.map((item) => {
    return { ...item, order: count++ }
  })
}

export const routePointsReducer = (
  state = initialPoints,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.ADD_POINT:
      return [
        ...state,
        {
          title: payload,
          id: Math.random().toString(36).slice(-6),
          coordinates: [55.159902, 61.402554],
          order: state.length + 1,
        },
      ]
    case actionTypes.REMOVE_POINT:
      return state.filter((point) => point.id !== payload)
    case actionTypes.SWAP_POINTS: {
      const newState = Array.from(state)
      const [sourcePoint] = newState.splice(payload.sourceIDX, 1)
      newState.splice(payload.destinationIDX, 0, sourcePoint)

      return resetOrders(newState)
    }
    default:
      return state
  }
}
