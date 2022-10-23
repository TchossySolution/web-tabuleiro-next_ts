import styled from 'styled-components'

export const NotFoundContainer = styled.section`
  width: 100%;
  height: 100vh;

  padding: 0.6rem 1rem;
  background-image: url('/BackgroundVinhoOpacity.png');

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ButtonGoBackContainer = styled.button`
  padding: 0.6rem 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors['brand-secundary-dark']};
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
