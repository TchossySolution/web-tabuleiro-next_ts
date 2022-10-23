import { LayoutProps } from '../@types/pageWithLayoutsTypes'
import SideBarSubRestaurant from '../components/_subRestaurant/SideBar'
import HeaderSubRestaurant from '../components/_subRestaurant/Header'
import {
  RootSubRestaurantContainer,
  SMain
} from '../styles/layouts/rootSubRestaurantLayoutStyle'
import Head from 'next/head'

const RootSubRestaurantLayout: LayoutProps = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tabuleiro - Restaurante</title>
        <meta name="description" content="Painel para restaurantes" />
      </Head>

      <RootSubRestaurantContainer>
        <SideBarSubRestaurant />
        <div className="SBody">
          <HeaderSubRestaurant />
          <SMain>{children}</SMain>
        </div>
      </RootSubRestaurantContainer>
    </>
  )
}

export default RootSubRestaurantLayout
