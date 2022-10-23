import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  background-image: url('BackgroundVinho.png');

  .logoContainer {
    width: 100%;
    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    img {
      max-width: 10rem;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    label {
      width: 10rem;
      height: 10rem;
      border: 0.1rem solid #ddd;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      transition: 0.2s ease;

      :hover {
        background-color: ${({ theme }) => theme.colors['brand-primary']};
      }
    }
  }
`
