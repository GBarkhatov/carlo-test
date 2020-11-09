import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'DM Sans',
      'Roboto',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})
