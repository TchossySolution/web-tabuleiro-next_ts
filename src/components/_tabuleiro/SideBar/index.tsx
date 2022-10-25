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
import { AiFillSetting, AiOutlineMessage } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { IoDocumentsOutline } from 'react-icons/io5'
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosConstruct
} from 'react-icons/io'
import { routsNameTabuleiro } from '../../../data/routsName'
import { FaUserFriends } from 'react-icons/fa'
import { RiUserSettingsFill } from 'react-icons/ri'
import { useTranslation } from 'react-i18next'

const SideBarTabuleiro = () => {
  const [slideIsOpen, setSlideIsOpen] = useState<boolean>(true)

  const { t } = useTranslation()

  function ToggleModal() {
    setSlideIsOpen(!slideIsOpen)
  }

  const dash = [
    {
      label: `${t(`slide.dash.dashboard`) as string}`,
      icon: <MdOutlineDashboard size={18} />,
      to: routsNameTabuleiro.home,
      notification: 0
    },
    {
      label: `${t(`slide.dash.statistic`) as string}`,
      icon: <IoAnalyticsSharp size={18} />,
      to: routsNameTabuleiro.statistic,
      notification: 0
    }
  ]
  const menu = [
    {
      label: `${t(`slide.menu.users`) as string}`,
      to: routsNameTabuleiro.users,
      icon: <FaUserFriends size={18} />,
      notification: 0
    },
    {
      label: `${t(`slide.menu.employees`) as string}`,
      to: routsNameTabuleiro.employees,
      icon: <RiUserSettingsFill size={18} />,
      notification: 0
    },
    {
      label: `${t(`slide.menu.restaurants`) as string}`,
      to: routsNameTabuleiro.restaurants,
      icon: <IoRestaurantSharp size={18} />,
      notification: 0
    },
    {
      label: `${t(`slide.menu.providers`) as string}`,
      to: routsNameTabuleiro.providers,
      icon: <MdVerifiedUser size={18} />,
      notification: 0
    },
    {
      label: `${t(`slide.menu.deliveries`) as string}`,
      to: routsNameTabuleiro.deliveries,
      icon: <MdDeliveryDining size={20} />,
      notification: 0
    }
  ]
  const notifications = [
    {
      label: `${t(`slide.notifications.messages`) as string}`,
      to: routsNameTabuleiro.messages,
      icon: <AiOutlineMessage size={18} />,
      notification: 0
    }
  ]
  const secondaryArray = [
    {
      label: 'Configurações',
      icon: <AiFillSetting size={18} />,
      to: '/config'
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

  // const mapSecondaryArray = secondaryArray.map((item, index) => (
  //   <SLink href={item.to} key={index}>
  //     <SIcon>{item.icon}</SIcon>
  //     {slideIsOpen ? <SLinkLabel> {item.label} </SLinkLabel> : <></>}
  //   </SLink>
  // ))

  return (
    <SideBarContainer style={slideIsOpen ? {} : { width: 'auto' }}>
      <div
        className="containerMenu"
        style={slideIsOpen ? {} : { left: 88, width: 36, height: 36 }}
        onClick={ToggleModal}
      >
        {slideIsOpen ? (
          <IoIosArrowBack className="iconHeader" size={24} />
        ) : (
          <IoIosArrowForward className="iconHeader" size={24} />
        )}
      </div>

      <SLogo>
        <img
          style={slideIsOpen ? {} : { width: '3.6rem' }}
          src="/logoText.png"
          alt=""
        />
      </SLogo>

      <SLinkContainer>
        <h5>{`${t(`slide.dash.dashboard`) as string}`}</h5>
        {mapLinks}
      </SLinkContainer>

      <SLinkContainer>
        <h5>{`${t(`slide.menu.menu`) as string}`}</h5>
        {mapMenu}
      </SLinkContainer>

      <SLinkContainer>
        <h5>{`${t(`slide.notifications.notifications`) as string}`}</h5>
        {mapNotifications}
      </SLinkContainer>

      {/* <SLinkContainer>{mapSecondaryArray}</SLinkContainer> */}
    </SideBarContainer>
  )
}

export default SideBarTabuleiro
