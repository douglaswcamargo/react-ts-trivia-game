import React from 'react'
import { render } from '@testing-library/react'
import Hint from './index'
import { ThemeProvider } from 'styled-components'
import { light } from '../../config/themes'
import GlobalStyles from '../../config/GlobalStyle'

it('renders without crashing', () => {
  render(
    <ThemeProvider theme={light}>
      <>
        <GlobalStyles/>
        <Hint>
                    sample text here
        </Hint>
      </>
    </ThemeProvider>
  )
})
