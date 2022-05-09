import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Wrapper from './Wrapper'

describe('Wrapper tests', () => {
  it('Wrapper renders without children correct', () => {
    render(<Wrapper />)
    expect(screen.getByTestId('wrapper')).toBeInTheDocument()
  })
  it('Wrapper renders with children correct', () => {
    render(<Wrapper>Hello</Wrapper>)
    expect(screen.getByText(/hello/i)).toBeInTheDocument()
  })
})
