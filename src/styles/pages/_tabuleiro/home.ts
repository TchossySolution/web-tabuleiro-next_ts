import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .Totals {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .topBodyDashboard {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .graphicConteiner {
    width: 100%;
    margin: 16px 0;
    display: flex;
  }

  @media only screen and (max-width: 1082px) {
    .graphicConteiner {
      flex-direction: column;
    }
  }
`
export const Title = styled.h1`
  color: ${props => props.theme.colors['base-text']};
`
