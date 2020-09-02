import React from 'react'
import { render } from '@testing-library/react'
import Button from './index'
import { ThemeProvider } from 'styled-components'
import { light } from '../../config/themes'
import GlobalStyles from '../../config/GlobalStyle'

it('renders without crashing', () => {
  render(
    <ThemeProvider theme={light}>
      <>
        <GlobalStyles/>
        <Button title="Button"></Button>
      </>
    </ThemeProvider>
  )
})
