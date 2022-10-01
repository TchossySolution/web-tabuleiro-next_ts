import Head from 'next/head'
import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { AppLayoutProps } from '../@types/pageWithLayoutsTypes'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../themes/default'

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout =
    Component.layout || ((children: ReactElement) => <>{children}</>)

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
export default MyApp
