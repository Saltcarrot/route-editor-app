import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'

import Button from './Button'

const onButtonClickHandler = jest.fn()

describe('Button tests', () => {
  it('Button rendered correct', () => {
    render(<Button />)
    expect(screen.getByTestId('delete-point-btn')).toBeInTheDocument()
  })
  it('Button onClick function worked correct', () => {
    render(<Button onClick={onButtonClickHandler} />)
    fireEvent.click(screen.getByTestId('delete-point-btn'))
    expect(onButtonClickHandler).toBeCalled()
  })
})
