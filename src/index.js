import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import materialTheme from '../src/styles/materialTheme'

import './styles/index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={materialTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
