import { useEffect, useState } from 'react'
import { setLocalStorageItem } from '../helpers'
import { useTranslation } from 'react-i18next'

export default function useToggleLanguage (initialLanguage: string) {
  const [language, setLanguage] = useState(initialLanguage)
  const { i18n } = useTranslation()

  const toggleLanguage = async (isPt: boolean) => {
    const selectedLang = isPt ? 'pt_BR' : 'en_US'
    await i18n.changeLanguage(selectedLang)
    setLanguage(selectedLang)
  }

  useEffect(() => setLocalStorageItem('quizLanguage', language), [language])

  return [language, toggleLanguage] as const
}
