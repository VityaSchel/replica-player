import i18n from 'i18next'
import enTranslation from './en.json'
import ruTranslation from './ru.json'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

export const resources = {
  en: { translation: enTranslation },
  ru: { translation: ruTranslation },
} as const

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources,
  })