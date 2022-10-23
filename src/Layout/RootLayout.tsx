import Head from 'next/head'
import { LayoutProps } from '../@types/pageWithLayoutsTypes'

const RootLayout: LayoutProps = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tabuleiro</title>
        <meta name="description" content="Painel para restaurantes" />
      </Head>

      <div>{children}</div>
    </>
  )
}

export default RootLayout
