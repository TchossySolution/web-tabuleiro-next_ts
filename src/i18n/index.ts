import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'

import ptJson from './translations/pt.json'
import enJson from './translations/en.json'
import frJson from './translations/fr.json'

i18n.use(initReactI18next).init({
  fallbackLng: 'pt',
  lng: 'pt',

  interpolation: {
    escapeValue: false
  },

  resources: {
    pt: ptJson,
    en: enJson,
    fr: frJson
  }
})

export default i18n
