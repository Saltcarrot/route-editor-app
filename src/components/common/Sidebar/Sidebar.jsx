import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const Sidebar = ({ points, setPoints }) => {
  const onDragEndHandler = (result) => {
    if (!result.destination) return

    console.log(result)

    const newPoints = Array.from(points)
    const [sourcePoint] = newPoints.splice(result.source.index, 1)
    newPoints.splice(result.destination.index, 0, sourcePoint)
    setPoints(newPoints)
  }

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <aside className='sidebar'>
        <Droppable droppableId='points-list'>
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {points.map((point, index) => {
                return (
                  <Draggable
                    key={point.id}
                    draggableId={point.id}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {point.title}
                      </li>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </aside>
    </DragDropContext>
  )
}

export default Sidebar
