import React from 'react'
import { render } from '@testing-library/react'
import Switch from './index'
import { light } from '../../config/themes'
import GlobalStyles from '../../config/GlobalStyle'
import { ThemeProvider } from 'styled-components'

it('renders without crashing', () => {
  render(
    <ThemeProvider theme={light}>
      <>
        <GlobalStyles/>
        <Switch
          value={true}
          labelLeft={'left'}
          labelRight={'right'}
          disabled={false}
          switched
          onChange={(value) => null}
        />
      </>
    </ThemeProvider>
  )
})
