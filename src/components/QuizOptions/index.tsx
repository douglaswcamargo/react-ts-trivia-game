import React from 'react'
import Switch from '../../components/Switch'
import * as S from './style'
import { QuizOptionsProps } from './types'

export default function QuizOptions (props: QuizOptionsProps) {
  const {
    theme,
    language,
    onChangeTheme,
    onChangeLanguage
  } = props

  return (
    <S.Container>
      <Switch
        value={language === 'pt_BR'}
        labelLeft={'EN'}
        labelRight={'PT'}
        disabled={false}
        onChange={(value) => onChangeLanguage(value)}
      />
      <Switch
        value={theme === 'dark'}
        labelLeft={'Light'}
        labelRight={'Dark'}
        disabled={false}
        onChange={(value) => onChangeTheme(value)}
      />
    </S.Container>
  )
}
