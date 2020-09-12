import React from 'react'
import { render } from '@testing-library/react'
import { HandheldScreen } from './index'
import { ThemeProvider } from 'styled-components'
import { light } from '../../config/themes'
import GlobalStyles from '../../config/GlobalStyle'

it('renders without crashing', () => {
  render(
    <ThemeProvider theme={light}>
      <>
        <GlobalStyles/>
        <HandheldScreen>
                    sample text here
        </HandheldScreen>
      </>
    </ThemeProvider>
  )
})
