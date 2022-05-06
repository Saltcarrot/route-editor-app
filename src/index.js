import React from 'react'
import ReactDOM from 'react-dom/client'

import Main from './components/pages/Main/Main'

import './assets/scss/global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  //<React.StrictMode>
  <Main />
  //</React.StrictMode>
)
