export const actionTypes = {
  ADD_POINT: 'ADD_ROUTE_POINT',
  REMOVE_POINT: 'REMOVE_ROUTE_POINT',
  SWAP_POINTS: 'SWAP_ROUTE_POINTS',
  UPDATE_COORDINATES: 'UPDATE_ROUTE_COORDINATES',
}

export const actions = {
  add: (title) => addRoutePointAction(title),
  remove: (pointID) => removeRoutePointAction(pointID),
  swapPoints: (sourceIDX, destinationIDX) =>
    swapRoutePointsAction(sourceIDX, destinationIDX),
  updateCoordinates: (pointID, newCoordinates) =>
    updateRoutePointCoordinatesAction(pointID, newCoordinates),
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
