import * as actions from './routePointsActions'

describe('Route point actions tests', () => {
  it('addRoutePointAction returned object', () => {
    const payload = 'Title'
    const result = {
      type: actions.actionTypes.ADD_POINT,
      payload: payload,
    }

    expect(actions.addRoutePointAction(payload)).toEqual(result)
    expect(actions.actions.add(payload)).toEqual(result)
  })
  it('removeRoutePointAction returned object', () => {
    const payload = 1
    const result = {
      type: actions.actionTypes.REMOVE_POINT,
      payload: payload,
    }

    expect(actions.removeRoutePointAction(payload)).toEqual(result)
    expect(actions.actions.remove(payload)).toEqual(result)
  })
  it('swapRoutePointsAction returned object', () => {
    const sourceIDX = 1
    const destinationIDX = 2
    const result = {
      type: actions.actionTypes.SWAP_POINTS,
      payload: { sourceIDX, destinationIDX },
    }

    expect(actions.swapRoutePointsAction(sourceIDX, destinationIDX)).toEqual(
      result
    )
    expect(actions.actions.swapPoints(sourceIDX, destinationIDX)).toEqual(
      result
    )
  })
  it('updateRoutePointCoordinatesAction returned object', () => {
    const pointID = 1
    const newCoordinates = [11, 22]
    const result = {
      type: actions.actionTypes.UPDATE_COORDINATES,
      payload: { pointID, newCoordinates },
    }

    expect(
      actions.updateRoutePointCoordinatesAction(pointID, newCoordinates)
    ).toEqual(result)
    expect(actions.actions.updateCoordinates(pointID, newCoordinates)).toEqual(
      result
    )
  })
  it('updateRoutePointAddressAction returned object', () => {
    const pointID = 1
    const newAddress = 'Moscow'
    const result = {
      type: actions.actionTypes.UPDATE_ADDRESS,
      payload: { pointID, newAddress },
    }

    expect(actions.updateRoutePointAddressAction(pointID, newAddress)).toEqual(
      result
    )
    expect(actions.actions.updateAddress(pointID, newAddress)).toEqual(result)
  })
})
