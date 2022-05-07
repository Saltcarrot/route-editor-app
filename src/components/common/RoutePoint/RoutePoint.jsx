import RoutePointWrapper from './RoutePoint.style'
import UI from '../UI'

const RoutePoint = ({ dnd: { provided, snapshot }, point, deletePoint }) => {
  return (
    <RoutePointWrapper
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      isDragging={snapshot.isDragging}
    >
      <p>{point.title}</p>
      <UI.Button onClick={deletePoint} />
    </RoutePointWrapper>
  )
}

export default RoutePoint
