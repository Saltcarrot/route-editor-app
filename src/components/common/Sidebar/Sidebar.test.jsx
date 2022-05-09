import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { makeDnd } from 'react-beautiful-dnd-test-utils'

import { store } from '../../../redux'
import { initialPoints } from '../../../redux/reducers/routePointsReducer'

import Sidebar from './Sidebar'

const SidebarWrapper = () => {
  return (
    <Provider store={store}>
      <Sidebar />
    </Provider>
  )
}

describe('Sidebar component tests', () => {
  it('Sidebar rendered correct', () => {
    render(<SidebarWrapper />)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getByTestId('points-list')).toBeInTheDocument()
    const { children } = screen.getByTestId('points-list')
    expect(children).toHaveLength(3)
    const titles = screen.getAllByTestId('route-point-title')
    titles.forEach((item, idx) => {
      expect(item.innerHTML).toEqual(initialPoints[idx].title)
    })
  })
  it('Route point added successfully', () => {
    render(<SidebarWrapper />)

    fireEvent.keyDown(screen.getByTestId('title-input'), {
      target: { value: 'Asgard' },
      key: 'Enter',
    })
    const { children } = screen.getByTestId('points-list')
    expect(children).toHaveLength(4)
  })
  it('Route point removed successfully', () => {
    render(<SidebarWrapper />)

    const [firstChildBtn] = screen.getAllByTestId('delete-point-btn')
    fireEvent.click(firstChildBtn)
    const [firstChildTitle] = screen.getAllByTestId('route-point-title')
    expect(firstChildTitle.innerHTML).not.toEqual(initialPoints[0].title)
    expect(firstChildTitle.innerHTML).toEqual(initialPoints[1].title)
  })
  it('Route point moved successfully', async () => {
    render(<SidebarWrapper />)

    await makeDnd({
      text: 'Some text',
      getDragElement: () => screen.getAllByTestId('route-point')[0],
      direction: 'DOWN',
      positions: 2,
    })

    // Логика такая, что точка маршрута не свапается местами с другой,
    // а смещает предыдущие точки вверх относительно себя (основано на DnD).
    // Т.е. 111 --- 222 --- 333 станет
    //      222 --- 333 --- 111 если мы перетащим 111 вниз,
    // что подтверждается визуально и в списке точек маршрута, и на карте.
    // Один раз тест выполнился успешно, однако дальше считает, что
    // последней точкой маршрута является 222
    const firstChildTitle = screen.getAllByTestId('route-point-title')[0]
    expect(firstChildTitle.innerHTML).toEqual(initialPoints[2].title)
  })
})
