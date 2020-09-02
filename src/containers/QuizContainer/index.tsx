import React, { useContext } from 'react'
import QuizOptions from '../../components/QuizOptions'
import { QuizContainerProps } from './types'
import { AppThemeContext } from '../../contexts/AppThemeProvider'
import { getLocalStorageItem } from '../../helpers'
import QuizWrapper from '../../components/Card'
import useToggleLanguage from '../../hooks/useToggleLanguage'

const initialLanguage = getLocalStorageItem('quizLanguage') ?? 'en_US'

export default function QuizContainer ({ children }: QuizContainerProps) {
  const [language, toggleLanguage] = useToggleLanguage(initialLanguage)
  const { selectedTheme, setSelectedTheme } = useContext(AppThemeContext)

  return (
    <>
      <QuizOptions
        theme={selectedTheme}
        language={language}
        onChangeTheme={setSelectedTheme}
        onChangeLanguage={toggleLanguage}
      />
      <QuizWrapper>
        {children}
      </QuizWrapper>
    </>
  )
}
