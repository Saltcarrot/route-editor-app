import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '../../../redux'

import YandexMap from './YandexMap'

const YandexMapWrapper = () => {
  return (
    <Provider store={store}>
      <YandexMap />
    </Provider>
  )
}

describe('Yandex map component tests', () => {
  it('Yandex map component renders correct', () => {
    render(<YandexMapWrapper />)
    expect(screen.getByTestId('yandex-map')).toBeInTheDocument()
  })
})
