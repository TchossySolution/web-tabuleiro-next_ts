import styled from 'styled-components'

export const InputFormContainer = styled.section`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.6rem;

  .containerInputForm {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 0.3rem;

    padding: 0.6rem;
    background: ${({ theme }) => theme.colors['base-white']};

    border: none;
    border-radius: ${({ theme }) => theme.border['border-f']};

    input {
      width: 100%;
      border: none;
    }
  }

  label {
    color: #fff;
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
  }
`
