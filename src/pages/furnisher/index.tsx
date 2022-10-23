import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BaseButton from '../../components/BaseButton'

import InputForm from '../../components/InputForm'
import { routsNameFurnisher, routsNameTabuleiro } from '../../data/routsName'
import RootLayout from '../../Layout/RootLayout'
import { TabuleiroLoginContainer } from '../../styles/pages/_tabuleiro'

function tabuleiroLogin() {
  const router = useRouter()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loadingBtn, setLoadingBtn] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  async function login() {
    router.push(routsNameFurnisher.home)
  }

  return (
    <TabuleiroLoginContainer>
      <div className="containerLogin">
        <div className="containerLogo">
          <img src="/logo.png" alt="" />
          <h1>Tabuleiro</h1>
        </div>

        <div className="containerInfo">
          <h1>Entrar no Painel</h1>
          <p>Digite o seu email e senha a baixo!</p>
        </div>

        <div className="containerInput">
          <InputForm
            name="E-mail"
            typeInput="email"
            placeholder="Endereço de email"
            inputValueChange={(e: any) => setEmail(e.target.value)}
          />
          <InputForm
            name="Palavra-Pass"
            typeInput="password"
            placeholder="Palavra-pass"
            inputValueChange={(e: any) => setPassword(e.target.value)}
          />
        </div>

        <BaseButton name="Entrar" onClickButton={login} disabled={loadingBtn} />
      </div>
    </TabuleiroLoginContainer>
  )
}

tabuleiroLogin.layout = RootLayout

export default tabuleiroLogin
