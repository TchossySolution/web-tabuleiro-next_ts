import styled from 'styled-components'
import { NavLink } from '../../NavLink'

export const SideBarContainer = styled.div`
  width: 14rem;
  height: 100vh;
  top: 0;
  left: 0;
  position: sticky;
  bottom: 0;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors['base-background-dark']};
  z-index: 4;

  border-right: 0.1rem solid
    ${props => props.theme.colors['base-background-dark-black']};

  overflow-y: auto;
  overflow-x: hidden;

  .containerMenu {
    position: fixed;
    top: 1.2rem;
    left: 11rem;
    width: 2.8rem;
    height: 2.8rem;
    border: 0.1rem solid ${props => props.theme.colors['base-white']};
    border-radius: 100%;
    background-color: ${props => props.theme.colors['base-background-dark']};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 22;

    .iconHeader {
      color: ${props => props.theme.colors['base-title']};
    }
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
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
  h5 {
    color: ${props => props.theme.colors['base-text']};
  }

  .title {
    color: ${props => props.theme.colors['base-title']};
  }
`

export const SLogo = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  margin: 1rem 0;

  img {
    max-width: 6rem;
  }
`

export const SLinkContainer = styled.div`
  padding: 12px 0 0 0;
  margin: 0px 0 8px 0;

  :hover {
    background-color: inset 0 0 0 1px #888888;
  }

  .active {
    color: ${props => props.theme.colors['base-text']};
    background-color: ${props => props.theme.colors['brand-secundary-dark']};
    border-left: 6px solid ${props => props.theme.colors['brand-primary']};
  }
`
export const SLink = styled(NavLink)`
  /* background-color: red; */
  margin: 4px 0;
  padding: 4px 0;
  display: flex;
  align-items: center;
  color: inherit;
  font-size: 14px;
  transition: ease 0.4s;

  :hover {
    transform: translateX(8px);
  }
`

export const SIcon = styled.div`
  display: flex;
  padding: 6px 10px;
`

export const SLinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: 0.9rem;
  color: ${props => props.theme.colors['base-text']};
`

export const SNotification = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  /* margin-left: 20px; */
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 0px;
  border-radius: 3px;

  background: ${props => props.theme.colors.sideBar};
  color: ${props => props.theme.colors['base-text']};
`
