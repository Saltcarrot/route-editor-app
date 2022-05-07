import styled from 'styled-components'

const RoutePointWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;

  border-radius: 10px;
  border: 1px solid var(--blue);

  background-color: ${({ isDragging }) =>
    isDragging ? 'var(--mint)' : '#fff'};

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`

export default RoutePointWrapper
