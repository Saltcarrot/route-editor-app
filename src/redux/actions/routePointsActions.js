export const actionTypes = {
  ADD_POINT: 'ADD_ROUTE_POINT',
  REMOVE_POINT: 'REMOVE_ROUTE_POINT',
  SWAP_POINTS: 'SWAP_ROUTE_POINTS',
  UPDATE_COORDINATES: 'UPDATE_ROUTE_COORDINATES',
  UPDATE_ADDRESS: 'UPDATE_ADDRESS',
}

export const actions = {
  add: (title) => addRoutePointAction(title),
  remove: (pointID) => removeRoutePointAction(pointID),
  swapPoints: (sourceIDX, destinationIDX) =>
    swapRoutePointsAction(sourceIDX, destinationIDX),
  updateCoordinates: (pointID, newCoordinates) =>
    updateRoutePointCoordinatesAction(pointID, newCoordinates),
  updateAddress: (pointID, newAddress) =>
    updateRoutePointAddressAction(pointID, newAddress),
}

export const addRoutePointAction = (title) => ({
  type: actionTypes.ADD_POINT,
  payload: title,
})

export const removeRoutePointAction = (pointID) => ({
  type: actionTypes.REMOVE_POINT,
  payload: pointID,
})

export const swapRoutePointsAction = (sourceIDX, destinationIDX) => ({
  type: actionTypes.SWAP_POINTS,
  payload: { sourceIDX, destinationIDX },
})

export const updateRoutePointCoordinatesAction = (pointID, newCoordinates) => ({
  type: actionTypes.UPDATE_COORDINATES,
  payload: { pointID, newCoordinates },
})

export const updateRoutePointAddressAction = (pointID, newAddress) => ({
  type: actionTypes.UPDATE_ADDRESS,
  payload: { pointID, newAddress },
})
