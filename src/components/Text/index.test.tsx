import React from 'react'
import { render } from '@testing-library/react'
import Text from './index'
import { ThemeProvider } from 'styled-components'
import { light } from '../../config/themes'
import GlobalStyles from '../GlobalStyle'

it('renders without crashing', () => {
  render(
    <ThemeProvider theme={light}>
      <>
        <GlobalStyles/>
        <Text>
          sample text here
        </Text>
      </>
    </ThemeProvider>
  )
})
