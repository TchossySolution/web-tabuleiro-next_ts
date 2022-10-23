import Link from 'next/link'
import {
  routsNameFurnisher,
  routsNameRestaurant,
  routsNameSubRestaurant,
  routsNameTabuleiro
} from '../data/routsName'
import RootLayout from '../Layout/RootLayout'
import { Container } from '../styles/pages/_intro/styles'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href={routsNameTabuleiro.login}>
          <a>Tabuleiro</a>
        </Link>
      </li>
      <li>
        <Link href={routsNameRestaurant.login}>
          <a>Restaurant</a>
        </Link>
      </li>
      <li>
        <Link href={routsNameSubRestaurant.login}>
          <a>Sub-Restaurant</a>
        </Link>
      </li>
      <li>
        <Link href={routsNameFurnisher.login}>
          <a>furnisher</a>
        </Link>
      </li>
    </ul>
  )
}

Home.layout = RootLayout

export default Home
