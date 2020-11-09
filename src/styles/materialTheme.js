import { createMuiTheme } from '@material-ui/core/styles'

const materialTheme = createMuiTheme({
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

export default materialTheme
