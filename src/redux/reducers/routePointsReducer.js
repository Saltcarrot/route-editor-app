import { actionTypes } from '../actions/routePointsActions'

export const initialPoints = [
  {
    title: 'Route 111',
    id: Math.random().toString(36).slice(-6),
    coordinates: [55.160128, 61.39572],
    address: 'Россия, Челябинск, проспект Ленина',
    order: 1,
  },
  {
    title: 'Route 222',
    id: Math.random().toString(36).slice(-6),
    coordinates: [55.160447, 61.404217],
    address: 'Россия, Челябинск, проспект Ленина',
    order: 2,
  },
  {
    title: 'Route 333',
    id: Math.random().toString(36).slice(-6),
    coordinates: [55.156995, 61.406663],
    address: 'Россия, Челябинск, улица Цвиллинга',
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
          address: 'Россия, Челябинск, площадь Революции',
          order: state.length + 1,
        },
      ]
    case actionTypes.REMOVE_POINT:
      const newState = state.filter((point) => point.id !== payload)

      return resetOrders(newState)
    case actionTypes.SWAP_POINTS: {
      const newState = Array.from(state)
      const [sourcePoint] = newState.splice(payload.sourceIDX, 1)
      newState.splice(payload.destinationIDX, 0, sourcePoint)

      return resetOrders(newState)
    }
    case actionTypes.UPDATE_COORDINATES:
      return state.map((item) => {
        if (item.id === payload.pointID) {
          return { ...item, coordinates: payload.newCoordinates }
        }
        return item
      })
    case actionTypes.UPDATE_ADDRESS:
      return state.map((item) => {
        if (item.id === payload.pointID) {
          return { ...item, address: payload.newAddress }
        }
        return item
      })
    default:
      return state
  }
}
