import React from 'react'
import { render } from '@testing-library/react'
import Button from '../Button'
import ButtonGroup from './index'
import { ThemeProvider } from 'styled-components'
import { light } from '../../config/themes'
import GlobalStyles from '../../config/GlobalStyle'

it('renders without crashing', () => {
  render(
    <ThemeProvider theme={light}>
      <>
        <GlobalStyles/>
        <ButtonGroup>
          <Button title="Button A" />
          <Button title="Button B" />
        </ButtonGroup>
      </>
    </ThemeProvider>
  )
})
