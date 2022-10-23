import Head from 'next/head'
import { LayoutProps } from '../@types/pageWithLayoutsTypes'

const RootRestaurantLayout: LayoutProps = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Tabuleiro - Restaurantes</title>
        <meta name="description" content="Painel para restaurantes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      RootRestaurantLayout:
      {children}
    </div>
  )
}

export default RootRestaurantLayout
