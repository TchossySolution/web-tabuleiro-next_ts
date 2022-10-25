/* eslint-disable */
import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState
} from 'react'

export const LanguageContext = createContext({})

export const MenuOptionLanguageProvider = (
  props: PropsWithChildren<{ children: ReactNode }>
) => {
  const [language, setLanguage] = useState<string>('pt')
  const [activeMenu, setActiveMenu] = useState<string>('active')

  useEffect(() => {
    const languageStore = localStorage.getItem('language')
    if (languageStore) {
      setLanguage(languageStore)
    }
  }, [])

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, activeMenu, setActiveMenu }}
    >
      {props.children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => React.useContext(LanguageContext)
