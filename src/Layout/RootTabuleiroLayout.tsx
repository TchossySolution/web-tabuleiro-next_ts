import { LayoutProps } from '../@types/pageWithLayoutsTypes'
import HeaderTabuleiro from '../components/_tabuleiro/Header'
import SideBarTabuleiro from '../components/_tabuleiro/SideBar'
import {
  RootTabuleiroContainer,
  SMain
} from '../styles/layouts/rootTabuleiroLayoutStyle'
import { Container } from '../styles/pages/_intro/styles'

const RootTabuleiroLayout: LayoutProps = ({ children }) => {
  return (
    <RootTabuleiroContainer>
      <SideBarTabuleiro />
      <div className="SBody">
        <HeaderTabuleiro />
        <SMain>{children}</SMain>
      </div>
    </RootTabuleiroContainer>
  )
}

export default RootTabuleiroLayout
