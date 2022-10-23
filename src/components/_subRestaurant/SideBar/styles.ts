import styled from 'styled-components'
import { NavLink } from '../../NavLink'

export const SideBarContainer = styled.div`
  width: 14rem;
  height: 100vh;
  top: 0;
  left: 0;
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors['base-background-dark']};
  margin-right: 1rem;
  padding: 0.9rem;

  overflow-y: auto;
  overflow-x: hidden;

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
  .container {
    width: 95%;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    color: ${props => props.theme.colors['base-title']};
  }
`

export const SLogo = styled.div`
  width: 100%;
  height: 6rem;
  cursor: pointer;
  margin-bottom: 6px;

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
