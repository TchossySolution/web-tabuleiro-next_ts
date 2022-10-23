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

import { MdOutlineDashboard } from 'react-icons/md'
import { MdComment } from 'react-icons/md'
import { IoAnalyticsSharp } from 'react-icons/io5'
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
import { RiCoupon3Line } from 'react-icons/ri'

const SideBarSubRestaurant = () => {
  const [slideIsOpen, setSlideIsOpen] = useState<boolean>(true)
  const dash = [
    {
      label: 'Dashboard',
      icon: <MdOutlineDashboard size={18} />,
      to: '/subRestaurant/home',
      notification: 0
    },
    {
      label: 'Estatistica',
      icon: <IoAnalyticsSharp size={18} />,
      to: '/subRestaurant/statistic',
      notification: 0
    }
  ]
  const menu = [
    {
      label: 'Clientes',
      to: '/subRestaurant/users',
      icon: <AiOutlineUser size={18} />,
      notification: 0
    },
    {
      label: 'Produtos',
      to: '/subRestaurant/products',
      icon: <IoIosConstruct size={18} />,
      notification: 0
    },
    {
      label: 'Categorias',
      to: '/subRestaurant/categories',
      icon: <MdCategory size={18} />,
      notification: 0
    },
    {
      label: 'Marcas',
      to: '/subRestaurant/brands',
      icon: <MdOutlineBookmarks size={18} />,
      notification: 0
    },
    {
      label: 'Pedidos',
      to: '/subRestaurant/requests',
      icon: <IoDocumentsOutline size={18} />,
      notification: 0
    },
    {
      label: 'Compras',
      to: '/subRestaurant/purchases',
      icon: <AiOutlineShopping size={18} />,
      notification: 0
    },
    {
      label: 'Cupões',
      to: '/subRestaurant/coupons',
      icon: <RiCoupon3Line size={18} />,
      notification: 0
    }
  ]
  const notifications = [
    {
      label: 'Mensagem',
      to: '/subRestaurant/messages',
      icon: <AiOutlineMessage size={18} />,
      notification: 0
    },
    {
      label: 'FeedBacks',
      icon: <MdComment size={18} />,
      to: '/subRestaurant/feedback',
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

export default SideBarSubRestaurant
