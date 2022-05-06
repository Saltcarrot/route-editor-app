import * as types from '../../utils/helpers/routeActionTypes'

const initialState = [
  { title: 'Route 111', id: 1, order: 1 },
  { title: 'Route 222', id: 2, order: 2 },
  { title: 'Route 333', id: 3, order: 3 },
]

export const routeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_ROUTE_POINT:
      return [
        ...state,
        {
          id: Math.random().toString(36).slice(-6),
          title: payload,
          order: state.length + 1,
        },
      ]
    case types.REMOVE_ROUTE_POINT:
      return state.filter((point) => point.id !== payload.id)
    case types.SWAP_ROUTE_POINTS:
      return state.map((item) => {
        if (item.id === payload.sourcePoint.id) {
          return { ...item, order: payload.targetPoint.order }
        }
        if (item.id === payload.targetPoint.id) {
          return { ...item, order: payload.sourcePoint.order }
        }
        return item
      })
    default:
      return state
  }
}
