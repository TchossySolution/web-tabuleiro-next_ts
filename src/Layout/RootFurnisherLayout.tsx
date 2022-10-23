import Head from 'next/head'
import { LayoutProps } from '../@types/pageWithLayoutsTypes'

const RootFurnisherLayout: LayoutProps = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Tabuleiro - Fornecedores</title>
        <meta name="description" content="Painel para restaurantes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      RootFurnisherLayout:
      {children}
    </div>
  )
}

export default RootFurnisherLayout
