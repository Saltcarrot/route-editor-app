import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

import { actions } from '../../../redux/actions/routePointsActions'

import Input from '../Input/Input'
import RoutePoint from '../RoutePoint/RoutePoint'

import SidebarWrapper from './Sidebar.style'

const Sidebar = () => {
  const routePoints = useSelector((state) => state.routePoints)
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')

  const onDragEndHandler = (result) => {
    if (!result.destination) return
    dispatch(actions.swapPoints(result.source.index, result.destination.index))
  }

  const onBtnClickHandler = (pointID) => {
    console.log(pointID)
    dispatch(actions.remove(pointID))
  }

  const onKeyDownInputHandler = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      dispatch(actions.add(title))
      setTitle('')
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <SidebarWrapper>
        <Input
          value={title}
          setValue={setTitle}
          onKeyDown={onKeyDownInputHandler}
        />
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
                        deletePoint={() => onBtnClickHandler(point.id)}
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
