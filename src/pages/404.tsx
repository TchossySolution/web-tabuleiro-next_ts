import Link from 'next/link'
import { useRouter } from 'next/router'
import RootLayout from '../Layout/RootLayout'
import { ButtonGoBackContainer, NotFoundContainer } from '../styles/pages/404'

function FourOhFour() {
  const router = useRouter()

  async function goBack() {
    router.back()
  }

  return (
    <NotFoundContainer>
      <h1>404 - Pagina não encontrada</h1>
      <ButtonGoBackContainer onClick={goBack}>
        <a>Voltar</a>
      </ButtonGoBackContainer>
    </NotFoundContainer>
  )
}

FourOhFour.layout = RootLayout

export default FourOhFour
