import Link from 'next/link'
import { AiTwotoneHome } from 'react-icons/ai'
import { GrRestaurant } from 'react-icons/gr'
import { MdRestaurantMenu } from 'react-icons/md'
import { GiBuyCard } from 'react-icons/gi'

import {
  routsNameFurnisher,
  routsNameRestaurant,
  routsNameSubRestaurant,
  routsNameTabuleiro
} from '../data/routsName'
import RootLayout from '../Layout/RootLayout'
import { Container } from '../styles/pages/_intro/styles'
import Head from 'next/head'

function Home() {
  return (
    <Container>
      <Head>
        <title>Tabuleiro</title>
        <meta name="description" content="Painel para restaurantes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="logoContainer">
        <img src="/logoText.png" alt="" />
      </div>

      <h1>Tabuleiro for Restaurants, bar and others</h1>

      <div>
        <Link className="link" href={routsNameTabuleiro.login}>
          <label>
            {' '}
            <AiTwotoneHome size={28} color="#fff" /> Tabuleiro
          </label>
        </Link>

        <Link className="link" href={routsNameRestaurant.login}>
          <label>
            {' '}
            <GrRestaurant size={28} color="#fff" /> Restaurant
          </label>
        </Link>

        <Link className="link" href={routsNameSubRestaurant.login}>
          <label>
            {' '}
            <MdRestaurantMenu size={28} color="#fff" /> Sub-Restaurant
          </label>
        </Link>

        <Link className="link" href={routsNameFurnisher.login}>
          <label>
            {' '}
            <GiBuyCard size={28} color="#fff" /> Fornecedores
          </label>
        </Link>
      </div>
    </Container>
  )
}

Home.layout = RootLayout

export default Home
