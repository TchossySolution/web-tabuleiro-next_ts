import Link from 'next/link'
import RootTabuleiroLayout from '../Layout/RootTabuleiroLayout'

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
    </ul>
  )
}

Home.layout = RootTabuleiroLayout

export default Home
