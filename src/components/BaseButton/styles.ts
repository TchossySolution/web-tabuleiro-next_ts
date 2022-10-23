import styled from 'styled-components'

export const BaseButtonContainer = styled.button`
  width: 100%;
  height: 2.6rem;

  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  background: ${({ theme }) => theme.colors['brand-primary']};
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.6rem;

  border: none;
  border-radius: ${({ theme }) => theme.border['border-f']};

  transition: 0.2s ease;

  :hover {
    background: ${({ theme }) => theme.colors['brand-primary-dark']};
  }

  :active {
    background: ${({ theme }) => theme.colors['brand-primary']};
    opacity: 0.8;
  }
`
