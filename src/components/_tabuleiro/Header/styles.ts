import styled from 'styled-components'

export const HeaderContainer = styled.menu`
  position: sticky;
  width: 100%;
  padding: 1.4rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors['base-background-dark']};

  border-bottom: 0.1rem solid
    ${props => props.theme.colors['base-background-dark-black']};

  .roleContainer {
    margin-left: 1rem;
  }

  img {
    width: 10rem;
  }

  .containerRigth {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .containerSwitsh {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .containerSwitsh.switch {
    text-align: center;
  }
  .containerInfUser {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    padding-left: 1.6rem;
    border-left: 0.1rem solid #ddd;

    .circuleContainerIcons {
      padding: 0.5rem;
      border: none;
      border-radius: 0.4rem;

      display: flex;
      align-items: center;
      justify-content: center;

      background: #ddd;
    }

    .optionContainer {
      display: flex;
      flex-direction: row;
      align-items: center;

      .containerBaseInfo {
        display: flex;
        margin: 0 16px;
        flex-direction: column;

        cursor: pointer;

        h4 {
          font-size: 1rem;
          font-weight: 800;
        }
        p {
          font-size: 0.8rem;
          font-weight: 400;
        }
      }
    }
  }
`
