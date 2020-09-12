import React from 'react'
import * as S from './style'
import { HandheldButtonGroupProps } from './types'
import QuizOptions from '../QuizOptions'
import Button from '../Button'

const HandheldButtonGroup: React.FC<HandheldButtonGroupProps> = (props: HandheldButtonGroupProps) => {
  const {
    theme,
    language,
    onChangeTheme,
    onChangeLanguage,
    onClickA,
    onClickB
  } = props

  return (
    <S.ButtonContainer>
      <S.ButtonOptionsWrapper>
        <QuizOptions
          theme={theme}
          language={language}
          onChangeTheme={onChangeTheme}
          onChangeLanguage={onChangeLanguage}
          onClickA={() => onClickA}
          onClickB={() => onClickB}
        />
      </S.ButtonOptionsWrapper>
      <S.ButtonActionsWrapper>
        <Button title="A" onClick={onClickA} />
        <Button title="B" onClick={onClickB} />
      </S.ButtonActionsWrapper>
    </S.ButtonContainer>

  )
}

export default HandheldButtonGroup
