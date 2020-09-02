import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import './i18n/'
import Routes from './routes/routes'
import AppThemeProvider from './contexts/AppThemeProvider'

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppThemeProvider>
          <Routes />
        </AppThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
