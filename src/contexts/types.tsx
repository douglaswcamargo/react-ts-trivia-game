import { ReactChild, ReactChildren } from 'react'

export interface Themes {
  dark: object
  light: object
}

export interface AppThemeProviderProps {
  children: ReactChild | ReactChild[] | ReactChildren
}

export interface AppThemeContextType {
  selectedTheme: string | (() => void)
  setSelectedTheme: (value: boolean) => void
}
