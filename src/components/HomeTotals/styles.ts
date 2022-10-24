import styled from 'styled-components'

export const HomeTotalsContainer = styled.menu`
  flex: 1;
  display: flex;

  padding: 1rem;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  border-left: 6px solid ${props => props.color};
  background-color: ${props => props.theme.colors['base-background-dark']};
  transition: ease 0.3s;

  :hover {
    cursor: pointer;
    transform: translateY(-6px);
    box-shadow: 0px 2px 6px 3px rgba(0, 0, 0, 0.1);
  }

  .lightConteiner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .infoConteiner {
    margin: 0 0 0 26px;
  }

  .iconConteiner {
    width: 56px;
    height: 56px;
    display: flex;
    margin: 8px 0;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors['brand-secundary']};
    border-radius: 100%;
  }

  .nameTotal {
    color: ${props => props.theme.colors['base-text']};
    margin: 4px 0;
    font-weight: 300;
  }

  .numberTotal {
    color: ${props => props.theme.colors['base-text']};
    margin: 4px 0;
    font-size: 2rem;
  }

  .percent {
    font-size: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors['base-text']};
  }
  .percent span {
    margin-right: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`
