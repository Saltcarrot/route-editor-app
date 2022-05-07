import { useDispatch, useSelector } from 'react-redux'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

import { actions } from '../../../redux/actions/routePointsActions'

import RoutePoint from '../RoutePoint/RoutePoint'

import SidebarWrapper from './Sidebar.style'

const Sidebar = () => {
  const routePoints = useSelector((state) => state.routePoints)
  const dispatch = useDispatch()

  const onDragEndHandler = (result) => {
    if (!result.destination) return
    dispatch(actions.swapPoints(result.source.index, result.destination.index))
  }

  const onDeleteHandler = (pointID) => {
    console.log(pointID)
    dispatch(actions.remove(pointID))
  }

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <SidebarWrapper>
        <Droppable droppableId='points-list'>
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {routePoints.map((point, index) => {
                return (
                  <Draggable
                    key={point.id}
                    draggableId={point.id}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <RoutePoint
                        dnd={{ provided, snapshot }}
                        point={point}
                        deletePoint={() => onDeleteHandler(point.id)}
                      />
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </SidebarWrapper>
    </DragDropContext>
  )
}

export default Sidebar
