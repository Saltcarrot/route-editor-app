import * as types from '../../utils/helpers/routeActionTypes'

export const addRoutePointAction = (title) => ({
  type: types.ADD_ROUTE_POINT,
  payload: title,
})

export const removeRoutePointAction = (id) => ({
  type: types.REMOVE_ROUTE_POINT,
  payload: id,
})

export const swapRoutePointsAction = (sourcePoint, targetPoint) => ({
  type: types.SWAP_ROUTE_POINTS,
  payload: { sourcePoint, targetPoint },
})
