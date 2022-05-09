import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import { useState } from 'react'

import Input from './Input'

const onKeyDownHandler = jest.fn()

const InputWrapper = ({ onKeyDown }) => {
  const [value, setValue] = useState('123')

  return <Input value={value} setValue={setValue} onKeyDown={onKeyDown} />
}

describe('Input tests', () => {
  it('Input rendered', () => {
    render(<Input />)
    expect(screen.getByTestId('title-input')).toBeInTheDocument()
  })
  it('Input value changed correct', () => {
    render(<InputWrapper />)
    fireEvent.change(screen.getByTestId('title-input'), {
      target: {
        value: '456',
      },
    })
    expect(screen.getByTestId('title-input').value).toEqual('456')
  })
  it('Input onKeyDown function worked correct', () => {
    render(<Input onKeyDown={onKeyDownHandler} />)
    fireEvent.keyDown(screen.getByTestId('title-input'))
    expect(onKeyDownHandler).toBeCalled()
  })
})
