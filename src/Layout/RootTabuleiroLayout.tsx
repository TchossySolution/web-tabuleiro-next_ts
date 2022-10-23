import Head from 'next/head'
import { LayoutProps } from '../@types/pageWithLayoutsTypes'
import HeaderTabuleiro from '../components/_tabuleiro/Header'
import SideBarTabuleiro from '../components/_tabuleiro/SideBar'
import {
  RootTabuleiroContainer,
  SMain
} from '../styles/layouts/rootTabuleiroLayoutStyle'

const RootTabuleiroLayout: LayoutProps = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tabuleiro - Painel</title>
        <meta name="description" content="Painel para restaurantes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RootTabuleiroContainer>
        <SideBarTabuleiro />
        <div className="SBody">
          <HeaderTabuleiro />
          <SMain>{children}</SMain>
        </div>
      </RootTabuleiroContainer>
    </>
  )
}

export default RootTabuleiroLayout
