import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import materialTheme from '../src/styles/materialTheme'

import './styles/index.css'
import App from './App'

ReactDOM.render(
  <ThemeProvider theme={materialTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
