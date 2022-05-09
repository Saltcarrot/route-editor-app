import { Draggable } from 'react-beautiful-dnd'

import UI from '../UI'

import RoutePointWrapper from './RoutePoint.style'

const RoutePoint = ({ index, point, deletePoint }) => {
  return (
    <Draggable draggableId={point.id} index={index}>
      {(provided, snapshot) => (
        <RoutePointWrapper
          data-testid='route-point'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          <p data-testid='route-point-title'>{point.title}</p>
          <UI.Button onClick={deletePoint} />
        </RoutePointWrapper>
      )}
    </Draggable>
  )
}

export default RoutePoint
