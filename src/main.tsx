import React from 'react'
import ReactDOM from 'react-dom'
import {GlobalStyle} from './assets/css/globalStyle'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
