import { SyntheticEvent } from 'react'

export interface QuizOptionsProps {
  theme: string | (() => void)
  language: string
  onChangeTheme: (value: boolean) => void
  onChangeLanguage: (value: boolean) => void
  onClickA?: (e: SyntheticEvent) => void
  onClickB?: (e: SyntheticEvent) => void
}
