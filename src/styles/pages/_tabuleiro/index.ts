import styled from 'styled-components'

export const TabuleiroLoginContainer = styled.section`
  width: 100%;
  height: 100vh;

  padding: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-image: url('/BackgroundVinhoOpacity.png');

  .containerLogin {
    width: 100%;
    max-width: 42em;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2.6rem;
    border-radius: 0.6rem;

    margin: 2rem;
    padding: 2rem 2rem 6rem 2rem;
    background: ${({ theme }) => theme.colors['base-background-dark']};

    .containerLogo {
      width: 100%;
      height: 6rem;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      cursor: pointer;
      margin-bottom: 6px;

      img {
        max-width: 7rem;
      }

      h1 {
        font-size: 2.4rem;
        font-weight: 300;
      }
    }

    .containerInfo {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0.6rem;

      h1 {
        font-size: 1.6rem;
        font-weight: 500;
      }

      p {
        color: ${({ theme }) => theme.colors['base-gray']};
        font-size: 1.1rem;
        font-weight: 400;
      }
    }

    .containerInput {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1.6rem;
    }
  }
`
