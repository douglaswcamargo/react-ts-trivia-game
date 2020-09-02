import React from 'react'
import { render } from '@testing-library/react'
import QuizOptions from './index'
import { ThemeProvider } from 'styled-components'
import { light } from '../../config/themes'
import GlobalStyles from '../../config/GlobalStyle'

it('renders without crashing', () => {
  render(
    <ThemeProvider theme={light}>
      <>
        <GlobalStyles/>
        <QuizOptions
          language="en_US"
          onChangeLanguage={() => null}
          onChangeTheme={() => null}
          theme="dark" />
      </>
    </ThemeProvider>
  )
})
