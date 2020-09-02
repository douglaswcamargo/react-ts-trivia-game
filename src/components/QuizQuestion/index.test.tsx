import React from 'react'
import { render } from '@testing-library/react'
import QuizQuestion from './index'
import { ThemeProvider } from 'styled-components'
import { light } from '../../config/themes'
import GlobalStyles from '../../config/GlobalStyle'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}))

it('renders without crashing', () => {
  render(
    <ThemeProvider theme={light}>
      <>
        <GlobalStyles/>
        <QuizQuestion
          question="Some question text"
          currentQuestion={0}
          totalQuestions={10}
        />
      </>
    </ThemeProvider>
  )
})
