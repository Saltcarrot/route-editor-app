import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import { initialPoints } from '../../../redux/reducers/routePointsReducer'

import RoutePoint from './RoutePoint'

const onDeleteButtonClickHandler = jest.fn()

const RoutePointWrapper = () => {
  return (
    <DragDropContext>
      <Droppable droppableId='droppable'>
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            <RoutePoint
              point={initialPoints[0]}
              index={0}
              deletePoint={onDeleteButtonClickHandler}
            />
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}

describe('Route Point component tests', () => {
  it('Route Point component rendered correct', () => {
    render(<RoutePointWrapper />)
    expect(screen.getByTestId('route-point')).toBeInTheDocument()
    expect(screen.getByTestId('route-point-title').innerHTML).toEqual(
      initialPoints[0].title
    )
    expect(screen.getByTestId('delete-point-btn')).toBeInTheDocument()
  })
  it('Delete button worked correct', () => {
    render(<RoutePointWrapper />)
    fireEvent.click(screen.getByTestId('delete-point-btn'))
    expect(onDeleteButtonClickHandler).toBeCalled()
  })
})
