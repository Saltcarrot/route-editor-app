import { initialPoints, routePointsReducer } from './routePointsReducer'
import * as actions from '../actions/routePointsActions'

describe('Route points reducer tests', () => {
  it('Initial state worked correct', () => {
    expect(routePointsReducer({}, {})).toEqual({})
    expect(routePointsReducer(initialPoints, {})).toEqual(initialPoints)
  })
  it('Add point action worked correct', () => {
    const payload = 'Title'

    expect(
      routePointsReducer(initialPoints, actions.actions.add(payload))
    ).toHaveLength(4)
    expect(
      routePointsReducer(initialPoints, actions.actions.add(payload))[3].title
    ).toEqual(payload)
  })
  it('Remove point action worked correct', () => {
    const payload = initialPoints[0].id

    expect(
      routePointsReducer(initialPoints, actions.actions.remove(payload))
    ).toHaveLength(2)
    expect(
      routePointsReducer(initialPoints, actions.actions.remove(payload))[0].id
    ).toEqual(initialPoints[1].id)
  })
  it('Swap points action worked correct', () => {
    const sourceIDX = 0
    const destinationIDX = 1

    expect(
      routePointsReducer(
        initialPoints,
        actions.actions.swapPoints(sourceIDX, destinationIDX)
      )[sourceIDX].title
    ).toEqual(initialPoints[destinationIDX].title)
  })
  it('Update point coordinates action worked correct', () => {
    const pointID = initialPoints[0].id
    const newCoordinates = [1, 2]

    expect(
      routePointsReducer(
        initialPoints,
        actions.actions.updateCoordinates(pointID, newCoordinates)
      )[0].coordinates
    ).toEqual(newCoordinates)
  })
  it('Update point address action worked correct', () => {
    const pointID = initialPoints[0].id
    const newAddress = 'Moscow'

    expect(
      routePointsReducer(
        initialPoints,
        actions.actions.updateAddress(pointID, newAddress)
      )[0].address
    ).toEqual(newAddress)
  })
})
