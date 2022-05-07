import Button from '../Button/Button'

import RoutePointWrapper from './RoutePoint.style'

const RoutePoint = ({ dnd: { provided, snapshot }, point, deletePoint }) => {
  return (
    <RoutePointWrapper
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      isDragging={snapshot.isDragging}
    >
      <p>{point.title}</p>
      <Button onClick={deletePoint} />
    </RoutePointWrapper>
  )
}

export default RoutePoint
