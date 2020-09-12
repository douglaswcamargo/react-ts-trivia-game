import React from 'react'
import { render } from '@testing-library/react'
import HandheldButtonGroup from './index'
import { ThemeProvider } from 'styled-components'
import { light } from '../../config/themes'
import GlobalStyles from '../../config/GlobalStyle'

it('renders without crashing', () => {
  render(
    <ThemeProvider theme={light}>
      <>
        <GlobalStyles/>
        <HandheldButtonGroup
          theme={'light'}
          language={'en_US'}
          onChangeTheme={() => null}
          onChangeLanguage={() => null}
          onClickA={() => null}
          onClickB={() => null}
        />
      </>
    </ThemeProvider>
  )
})
