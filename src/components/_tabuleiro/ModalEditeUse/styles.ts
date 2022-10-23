import styled from 'styled-components'

export const Container = styled.div`
  width: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors['base-background']};
`
export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px 0;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  background-color: ${props => props.theme.colors.header};

  .form {
    width: 100%;
    display: flex;
    margin: 0 0;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1rem;

    .containerAreaForm {
      margin: 1rem 2rem;
      display: flex;
      flex: 3;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      .areaForm {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 1.4rem;

        label span {
          padding: 8px;
          transition: 0.4s ease;
          font-weight: 700;
          border-radius: 8px;
        }
      }
    }

    .imageContainer {
      position: relative;

      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 130px;
        height: 130px;
        margin: 14px 0;
        object-fit: cover;
        margin-left: 16px;
        border-radius: 100%;
      }
    }
  }

  .btnCreateUse {
    font-weight: 500;
    padding: 12px 24px;
    margin: 26px 0;
    color: #fff;
    background-color: ${props => props.theme.colors['brand-primary']};
    border-radius: 6px;
    border: none;

    :active {
      background: ${props => props.theme.colors['brand-secundary']};
    }
  }
`
export const InputContainer = styled.div`
  width: 100%;
  color: ${props => props.theme.colors['base-title']};
  display: flex;
  flex-direction: column;
  margin: 20px 6px;

  border-bottom: 1px solid ${props => props.theme.colors['base-title']};

  select {
    width: 100%;

    border-radius: 2px;
    border: none;
    border-bottom: 0.1rem solid #ddd;
    font-size: 1rem;
    margin: 0;
    outline: 0;
    color: #fff;
    background-color: transparent;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
    margin-top: 0.6rem;

    option {
      width: 100%;
      height: 2rem;
      background-color: #111;
      border-radius: 2px;
      border: none;
      border-bottom: 0.1rem solid #fff;
      font-size: 1rem;
      margin: 0;
      outline: 0;
      color: #111;
      background-color: transparent;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
      margin-top: 0.6rem;
    }
  }

  input {
    width: 100%;
    color: ${props => props.theme.colors['base-text']};
    outline: none;
    padding: 6px 6px 6px 2px;
    background-color: transparent;
    border: none;
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  button {
    background: transparent;
    border: none;
  }
`
