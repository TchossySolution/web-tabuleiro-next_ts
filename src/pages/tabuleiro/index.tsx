import Link from 'next/link'
import RootLayout from '../../Layout/RootLayout'
import { TabuleiroLoginContainer } from '../../styles/pages/_tabuleiro'

function tabuleiroLogin() {
  return (
    <TabuleiroLoginContainer>
      <h1>Login Tabuleiro</h1>
      <ul>
        <li>
          <Link href="/tabuleiro/home">
            <a>Logar</a>
          </Link>
        </li>
      </ul>
    </TabuleiroLoginContainer>
  )
}

tabuleiroLogin.layout = RootLayout

export default tabuleiroLogin
