import styled from 'styled-components'

export const ResentsUpdatesContainer = styled.menu`
  width: auto;
  margin: 14px 0 14px 14px;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 12px;
  }

  /* @media (max-width: 1290px) {
    margin: 14px 0 14px 14px;
  } */

  .conteinerUpdates {
    min-width: 280px;
    max-width: 305px;
    background-color: ${props => props.theme.colors.header};
    border-radius: 8px;
  }
  .conteinerInf {
    margin: 8px 0;
    padding: 16px;
    display: flex;
    flex-direction: row;
  }
  .imageProfil {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-right: 8px;
  }
  .outer {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .description {
    color: ${props => props.theme.colors.title};
  }
  .description span {
    font-size: 12px;
    font-weight: 400;
  }
  .date {
    font-size: 12px;
    font-weight: 600;
    margin-top: 8px;
  }
`
