import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import store from './redux/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'arial',
  },
  shapes: {
    borderRadius: 2,
  },
  values: {
    xAxisNumber: 18,
  },
  palette: {
    type: 'light',
    background: { default: '#fff', contrastText: '#000', paper: '#fff' },
    primary: {
      light: '#90ee90',
      main: '#74cc7c',
      contrastText: '#000',
    },
    secondary: {
      main: 'rgb(232, 232, 232)',
      dark: 'rgb(190, 190, 190)',
      contrastText: '#000',
    },
    error: {
      main: '#ba261a',
      contrastText: '#fff',
    },
    boxShadow: {
      main: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
      primary: 'rgba(255, 255, 255, 0.2)',
      secondary: 'rgba(255, 255, 255, 0.14)',
      tertiary: 'rgba(255, 255, 255, 0.12)',
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
