export interface QuizOptionsProps {
  theme: string | (() => void)
  language: string
  onChangeTheme: (value: boolean) => void
  onChangeLanguage: (value: boolean) => void
}
