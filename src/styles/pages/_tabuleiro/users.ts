import styled from 'styled-components'

export const UsersContainerStyle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors['base-background-dark']};
  padding: 1rem;

  .header {
    margin-bottom: 1rem;

    h1 {
      color: ${({ theme }) => theme.colors['base-title']};
    }
  }

  .filterContainer {
    margin-bottom: 1rem;

    .controlFilter {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: row;
      gap: 1.2rem;

      button {
        color: ${({ theme }) => theme.colors['base-white']};
        border: none;
        background: none;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 0.4rem;

        label {
          font-size: 0.9rem;
        }
      }
    }
  }

  .tableContainer {
    width: 100%;
    max-height: 70vh;
    overflow: auto;

    table {
      width: 100%;
      min-width: 60rem;
      font-family: 'Roboto', sans-serif;
      border-collapse: collapse;
      box-shadow: 0px 2px 6px 3px rgba(0, 0, 0, 0.1);

      /* linha */
      tr {
        padding: 8px;
        border-bottom: 1px solid #dddddd;
      }

      /* coluna body */
      td {
        padding: 6px 14px 6px 16px;
      }
      td.tdId {
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 80px;
      }
      td.tdDescription {
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 260px;
      }
      td.tdDuration {
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 260px;
      }

      td.diplaySpace {
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
      td.diplay {
        display: flex;
        align-items: center;
      }
      td p {
        display: inline;
      }
    }

    .footerTable {
      width: 100%;
      padding: 1.2rem;

      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: row;
      gap: 2.4rem;

      .lineForPage {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 0.6rem;

        label {
          font-size: 0.9rem;
        }

        input {
          font-size: 0.9rem;
          padding-left: 0.2rem;
          background: transparent;
          color: ${({ theme }) => theme.colors['base-white']};

          border-width: 0.1rem;
        }
      }

      .controlPage {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 1.2rem;

        button {
          color: ${({ theme }) => theme.colors['base-white']};
          border: none;
          background: none;
        }
      }
    }

    /* width */
    ::-webkit-scrollbar {
      width: 0.4rem;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  img {
    width: 38px;
    height: 38px;
    object-fit: cover;
    margin: 0 12px 0 0;
    border-radius: 100%;
  }

  .modalConteiner {
    width: 1000px;
    height: 400px;
    background-color: red;
  }
`
export const AddUserContainer = styled.div`
  width: 100%;
  padding: 1.4rem 0;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const AddUser = styled.button`
  padding: 10px;
  color: #fff;
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.4rem;

  background: ${props => props.theme.colors['brand-primary']};
  border: none;
  border-radius: 0.4rem;
  transition: 0.3s ease;

  :active {
    background: ${props => props.theme.colors['brand-secundary']};
    transform: scale(-20px);
  }
`
export const ButtonAction = styled.h1`
  transition: 0.4s ease;
  :hover {
    color: ${props => props.color};
  }
`
export const Container1 = styled.div`
  width: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors['base-background']};
`
export const ModalConteiner = styled.div`
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
    align-items: center;
    justify-content: space-around;
  }

  .areaForm {
    max-height: 200px;
  }

  .imageConteiner {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 130px;
    height: 130px;
    margin: 14px 0;
    object-fit: cover;
    margin-left: 16px;
    border-radius: 100%;
  }

  label:hover {
    transition: 0.2s ease;
    color: ${props => props.theme.colors['brand-primary']};
  }

  label span {
    padding: 8px;
    transition: 0.4s ease;
    font-weight: 700;
    border-radius: 8px;
  }
  label span:hover {
    background-color: ${props => props.theme.colors['brand-primary']};
    color: #fff;
  }

  .btnSaveUse {
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
export const InputConteiner = styled.div`
  color: ${props => props.theme.colors['base-title']};
  display: flex;
  flex-direction: column;
  margin: 20px 6px;

  input {
    color: ${props => props.theme.colors['base-text']};
    outline: none;
    padding: 6px 6px 6px 2px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors['base-title']};
  }
`
