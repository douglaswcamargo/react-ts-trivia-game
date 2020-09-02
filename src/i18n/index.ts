import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en_US from './en_US'
import pt_BR from './pt_BR'
import { getLocalStorageItem } from '../helpers'

const resources = {
  en_US: { translation: en_US },
  pt_BR: { translation: pt_BR }
}

const initialLanguage = getLocalStorageItem('quizLanguage') ?? 'en_US'

i18n
  .use(initReactI18next)
  .init({
    resources,
    interpolation: {
      escapeValue: false
    },
    lng: initialLanguage
  })

export default i18n
