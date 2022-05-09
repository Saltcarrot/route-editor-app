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

    const firstChildTitle = screen.getAllByTestId('route-point-title')[0]
    expect(firstChildTitle.innerHTML).toEqual(initialPoints[2].title)
    const lastChild = screen.getAllByTestId('route-point-title')[0]
    expect(lastChild.innerHTML).toEqual(initialPoints[1].title)
  })
})
