import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux'

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

describe('App component tests', () => {
  it('App component rendered correct', () => {
    render(<AppWrapper />)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getByTestId('yandex-map')).toBeInTheDocument()
  })
})
