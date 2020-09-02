import { useEffect, useState } from 'react'
import { setLocalStorageItem } from '../helpers'

export default function useToggleTheme (initialTheme: string) {
  const [selectedTheme, setSelectedTheme] = useState(initialTheme)
  const toggleTheme = () => setSelectedTheme(selectedTheme === 'light' ? 'dark' : 'light')

  useEffect(() => {
    setLocalStorageItem('quizTheme', selectedTheme)
  }, [selectedTheme])

  return [selectedTheme, toggleTheme] as const
}
