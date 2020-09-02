import React from 'react'
import { render } from '@testing-library/react'
import LinkButton from './index'
import { ThemeProvider } from 'styled-components'
import { light } from '../../config/themes'
import GlobalStyles from '../../config/GlobalStyle'
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  render(
    <BrowserRouter>
      <ThemeProvider theme={light}>
        <>
          <GlobalStyles/>
          <LinkButton to="/" title="LinkButton"></LinkButton>
        </>
      </ThemeProvider>
    </BrowserRouter>
  )
})
