import { useState } from 'react'
import {
  SIcon,
  SideBarContainer,
  SLink,
  SLinkContainer,
  SLinkLabel,
  SLogo,
  SNotification
} from './styles'

import {
  MdDeliveryDining,
  MdOutlineDashboard,
  MdVerifiedUser
} from 'react-icons/md'
import { MdComment } from 'react-icons/md'
import { IoAnalyticsSharp, IoRestaurantSharp } from 'react-icons/io5'
import { AiFillSetting } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import {
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlineMessage
} from 'react-icons/ai'
import { IoDocumentsOutline } from 'react-icons/io5'
import { IoIosConstruct } from 'react-icons/io'
import { MdCategory, MdOutlineBookmarks } from 'react-icons/md'
import { RiCoupon3Line, RiUserSettingsFill } from 'react-icons/ri'
import { routsNameTabuleiro } from '../../../data/routsName'
import { FaUserFriends } from 'react-icons/fa'

const SideBarTabuleiro = () => {
  const [slideIsOpen, setSlideIsOpen] = useState<boolean>(true)
  const dash = [
    {
      label: 'Dashboard',
      icon: <MdOutlineDashboard size={18} />,
      to: routsNameTabuleiro.home,
      notification: 0
    },
    {
      label: 'Estatistica',
      icon: <IoAnalyticsSharp size={18} />,
      to: routsNameTabuleiro.statistic,
      notification: 0
    }
  ]
  const menu = [
    {
      label: 'Clientes',
      to: routsNameTabuleiro.users,
      icon: <FaUserFriends size={18} />,
      notification: 0
    },
    {
      label: 'Funcionários',
      to: routsNameTabuleiro.employees,
      icon: <RiUserSettingsFill size={18} />,
      notification: 0
    },
    {
      label: 'Restaurantes',
      to: routsNameTabuleiro.restaurants,
      icon: <IoRestaurantSharp size={18} />,
      notification: 0
    },
    {
      label: 'Fornecedores',
      to: routsNameTabuleiro.providers,
      icon: <MdVerifiedUser size={18} />,
      notification: 0
    },
    {
      label: 'Entregadores',
      to: routsNameTabuleiro.deliveries,
      icon: <MdDeliveryDining size={20} />,
      notification: 0
    }
  ]
  const notifications = [
    {
      label: 'Mensagem',
      to: routsNameTabuleiro.messages,
      icon: <AiOutlineMessage size={18} />,
      notification: 0
    },
    {
      label: 'FeedBacks',
      icon: <MdComment size={18} />,
      to: routsNameTabuleiro.feedback,
      notification: 0
    }
  ]
  const secondaryArray = [
    {
      label: 'Configurações',
      icon: <AiFillSetting size={18} />,
      to: '/config'
    },
    {
      label: 'Terminar sessão',
      to: '/logout',
      icon: <FiLogOut size={18} />
    }
  ]

  const mapLinks = dash.map((item, index) => (
    <SLink
      key={index}
      // className={({ isActive }) => (isActive ? 'active' : 'inactive')}
      exact
      href={item.to}
      style={!slideIsOpen ? { width: 'fit-content' } : {}}
    >
      <SIcon>{item.icon}</SIcon>
      {slideIsOpen ? (
        <>
          <SLinkLabel> {item.label} </SLinkLabel>
          {!!item.notification && (
            <SNotification> {item.notification} </SNotification>
          )}
        </>
      ) : (
        <></>
      )}
    </SLink>
  ))

  const mapMenu = menu.map((item, index) => (
    <SLink
      key={index}
      // className={({ isActive }) => (isActive ? 'active' : 'inactive')}
      href={item.to}
      style={!slideIsOpen ? { width: 'fit-content' } : {}}
    >
      <SIcon>{item.icon}</SIcon>
      {slideIsOpen ? (
        <>
          <SLinkLabel> {item.label} </SLinkLabel>
          {!!item.notification && (
            <SNotification> {item.notification} </SNotification>
          )}
        </>
      ) : (
        <></>
      )}
    </SLink>
  ))

  const mapNotifications = notifications.map((item, index) => (
    <SLink
      key={index}
      // className={({ isActive }) => (isActive ? 'active' : 'inactive')}
      href={item.to}
      style={!slideIsOpen ? { width: 'fit-content' } : {}}
    >
      <SIcon>{item.icon}</SIcon>
      {slideIsOpen ? (
        <>
          <SLinkLabel> {item.label} </SLinkLabel>
          {!!item.notification && (
            <SNotification> {item.notification} </SNotification>
          )}
        </>
      ) : (
        <></>
      )}
    </SLink>
  ))

  const mapSecondaryArray = secondaryArray.map((item, index) => (
    <SLink href={item.to} key={index}>
      <SIcon>{item.icon}</SIcon>
      {slideIsOpen ? <SLinkLabel> {item.label} </SLinkLabel> : <></>}
    </SLink>
  ))

  return (
    <SideBarContainer>
      <SLogo>
        <img src="/logoText.png" alt="" />
      </SLogo>

      <SLinkContainer>
        <h5>Dashboard</h5>
        {mapLinks}
      </SLinkContainer>

      <SLinkContainer>
        <h5>Menu</h5>
        {mapMenu}
      </SLinkContainer>

      <SLinkContainer>
        <h5>Notificações</h5>
        {mapNotifications}
      </SLinkContainer>

      <SLinkContainer>{mapSecondaryArray}</SLinkContainer>
    </SideBarContainer>
  )
}

export default SideBarTabuleiro
