import React from 'react'
import Switch from '../Switch'
import { QuizOptionsProps } from './types'
import { FaSun, FaMoon } from 'react-icons/fa'
import Group from '../Group'
import * as S from './style'

const QuizOptions: React.FC<QuizOptionsProps> = (props: QuizOptionsProps) => {
  const {
    theme,
    language,
    onChangeTheme,
    onChangeLanguage
  } = props

  return (
    <S.Container>
      <Group vertical alignItems="center">
        <Switch
          value={language === 'pt_BR'}
          labelLeft={'EN'}
          labelRight={'PT'}
          disabled={false}
          onChange={(value) => onChangeLanguage(value)}
        />
        <Switch
          value={theme === 'dark'}
          labelLeft={<FaSun />}
          labelRight={<FaMoon />}
          disabled={false}
          onChange={(value) => onChangeTheme(value)}
        />
      </Group>
    </S.Container>
  )
}

export default QuizOptions
