import React from 'react'
import { render } from '@testing-library/react'
import Card from '../Card'
import { ThemeProvider } from 'styled-components'
import { light } from '../../config/themes'
import GlobalStyles from '../../config/GlobalStyle'

it('renders without crashing', () => {
  render(
    <ThemeProvider theme={light}>
      <>
        <GlobalStyles/>
        <Card>
          <p> Some content</p>
        </Card>
      </>
    </ThemeProvider>
  )
})
