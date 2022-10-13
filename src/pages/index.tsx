import Link from 'next/link'
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
        <Link href="/tabuleiro">
          <a>Tabuleiro</a>
        </Link>
      </li>
      <li>
        <Link href="/restaurant">
          <a>Restaurant</a>
        </Link>
      </li>
      <li>
        <Link href="/subRestaurant">
          <a>Sub-Restaurant</a>
        </Link>
      </li>
      <li>
        <Link href="/furnisher">
          <a>furnisher</a>
        </Link>
      </li>
    </ul>
  )
}

Home.layout = RootLayout

export default Home
