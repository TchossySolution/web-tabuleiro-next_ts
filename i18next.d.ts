// import the original type declarations
import 'i18next'
// import all namespaces (for the default language, only)
import ILanguage from './src/interfaces/ILang'

import ptJson from './src/i18n/translations/pt.json'
import enJson from './src/i18n/translations/en.json'
import frJson from './src/i18n/translations/fr.json'

declare module 'i18next' {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: 'pt'
    // custom resources type
    resources: {
      pt: typeof ptJson
      en: typeof enJson
      fr: typeof frJson
    }
    // other
  }
}
