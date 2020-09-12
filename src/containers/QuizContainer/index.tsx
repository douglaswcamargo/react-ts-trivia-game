import React, { useContext } from 'react'
import { QuizContainerProps } from './types'
import { AppThemeContext } from '../../contexts/AppThemeProvider'
import { getLocalStorageItem } from '../../helpers'
import QuizWrapper from '../../components/Card'
import useToggleLanguage from '../../hooks/useToggleLanguage'
import HandheldButtonGroup from '../../components/HandheldButtonGroup'
import { HandheldScreen } from '../../components/HandheldScreen'

const initialLanguage = getLocalStorageItem('quizLanguage') ?? 'en_US'

export default function QuizContainer ({ children, onClickA, onClickB }: QuizContainerProps) {
  const [language, toggleLanguage] = useToggleLanguage(initialLanguage)
  const { selectedTheme, setSelectedTheme } = useContext(AppThemeContext)

  return (
    <QuizWrapper>
      <HandheldScreen>
        {children}
      </HandheldScreen>
      <HandheldButtonGroup
        theme={selectedTheme}
        language={language}
        onChangeTheme={setSelectedTheme}
        onChangeLanguage={toggleLanguage}
        onClickA={onClickA}
        onClickB={onClickB}
      />
    </QuizWrapper>
  )
}
