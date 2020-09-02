import React, { createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../config/GlobalStyle'
import { dark, light } from '../config/themes'
import { getLocalStorageItem } from '../helpers'
import { AppThemeContextType, AppThemeProviderProps, Themes } from './types'
import useToggleTheme from '../hooks/useToggleTheme'

export const AppThemeContext = createContext({} as AppThemeContextType)

const initialTheme = getLocalStorageItem('quizTheme') ?? 'light'

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const [selectedTheme, setSelectedTheme] = useToggleTheme(initialTheme)
  const themes: Themes = { dark, light }

  return (
    <AppThemeContext.Provider value={{ selectedTheme, setSelectedTheme }}>
      <ThemeProvider theme={themes[selectedTheme as keyof Themes]}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}

export default AppThemeProvider
