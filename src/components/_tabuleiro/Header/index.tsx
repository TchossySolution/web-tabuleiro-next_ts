import React, { useContext, useState } from 'react'
import { HeaderContainer } from './styles'

import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Badge from '@mui/material/Badge'

import { BsChatText } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5'
import { RiFullscreenLine } from 'react-icons/ri'
import { Divider, ListItemIcon } from '@mui/material'
import InputForm from '../../InputForm'
import { BiSearchAlt } from 'react-icons/bi'

interface ISettings {
  name: string
  type: string
  to?: string
  icon?: any
}
interface ILang {
  name: string
  langImage: string
  langSelected: string
}

function HeaderTabuleiro() {
  const [slideIsOpen, setSlideIsOpen] = useState<boolean>(true)
  const [search, setSearch] = useState<string>('')
  const [lang, setLang] = useState({
    name: 'Português',
    langImage: '/lang/portugal.png',
    langSelected: 'pt-br'
  })
  const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(
    null
  )
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )

  const user = {
    first_name: 'Rafael',
    last_name: 'Pilartes',
    email: 'rafaelPilartes.rlps@gmail.com',
    role: 'Adm'
  }

  const successChangeLang = (langSelected: ILang) =>
    toast.success(`O idioma foi mudado para ${langSelected.name}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })

  function handleChangeLang(langSelected: ILang) {
    setLang(langSelected)
    setAnchorElUser(null)
    successChangeLang(langSelected)
  }

  function myAccount() {
    setAnchorElUser(null)
    window.alert('myAccount')
  }
  function settings() {
    setAnchorElUser(null)
    window.alert('settings')
  }
  function logout() {
    setAnchorElUser(null)
    window.alert('logout')
  }

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }

  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget)
  }
  const handleCloseLangMenu = (setting: ISettings) => {
    if (setting.type == 'function') {
      alert('sair')
      setAnchorElLang(null)
    } else if (setting.type == 'navigate') {
      alert(setting.to)
      setAnchorElLang(null)
    }
    setAnchorElLang(null)
  }

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = (setting: ISettings) => {
    if (setting.type == 'function') {
      alert('sair')
      setAnchorElUser(null)
    } else if (setting.type == 'navigate') {
      alert(setting.to)
      setAnchorElUser(null)
    }
    setAnchorElUser(null)
  }

  return (
    <>
      <ToastContainer />

      <HeaderContainer>
        <div className="roleContainer">
          <h2>{user.role}</h2>
        </div>

        <div className="containerRigth">
          <div className="containerOptions">
            <button className="circuleContainerIcons">
              <Tooltip title="Pesquisar">
                <BiSearchAlt color="#fff" size={'1.5rem'} />
              </Tooltip>
            </button>

            <div className="">
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Linguagem">
                  <IconButton onClick={handleOpenLangMenu} size="small">
                    <Avatar
                      sx={{ width: 38, height: 38 }}
                      alt="Remy Sharp"
                      src={lang.langImage}
                    />
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorElLang}
                id="account-menu"
                open={Boolean(anchorElLang)}
                onClose={handleCloseLangMenu}
              >
                <MenuItem
                  onClick={() =>
                    handleChangeLang({
                      name: 'Português',
                      langImage: '/lang/portugal.png',
                      langSelected: 'pt-br'
                    })
                  }
                >
                  <Avatar src="/lang/portugal.png" />
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    handleChangeLang({
                      name: 'Francês',
                      langImage: '/lang/france.png',
                      langSelected: 'fr-se'
                    })
                  }
                >
                  <Avatar src="/lang/france.png" />
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    handleChangeLang({
                      name: 'English',
                      langImage: '/lang/united-states.png',
                      langSelected: 'en-us'
                    })
                  }
                >
                  <Avatar src="/lang/united-states.png" />
                </MenuItem>
              </Menu>
            </div>
          </div>

          <div className="containerInfUser">
            <Tooltip title="Tela inteira">
              <button
                onClick={toggleFullScreen}
                className="circuleContainerIcons"
              >
                <RiFullscreenLine color={'#fff'} size={'1.5rem'} />
              </button>
            </Tooltip>

            <button className="circuleContainerIcons">
              <Tooltip title="Mensagens">
                <Badge badgeContent={2} color="error">
                  <BsChatText color={'#fff'} size={'1.3rem'} />
                </Badge>
              </Tooltip>
            </button>

            <button className="circuleContainerIcons">
              <Tooltip title="Notificações">
                <Badge badgeContent={3} color="error">
                  <IoNotificationsOutline color={'#fff'} size={'1.5rem'} />
                </Badge>
              </Tooltip>
            </button>

            <div className="optionContainer">
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={
                      Boolean(anchorElUser) ? 'account-menu' : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={Boolean(anchorElUser) ? 'true' : undefined}
                  >
                    <Avatar
                      sx={{ width: 38, height: 38 }}
                      alt="Remy Sharp"
                      src="https://i.pinimg.com/originals/80/d5/67/80d567a12cf5063f1e445c1efee11940.jpg"
                    />
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorElUser}
                id="account-menu"
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0
                    }
                  }
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={myAccount}>
                  <Avatar src="https://i.pinimg.com/originals/80/d5/67/80d567a12cf5063f1e445c1efee11940.jpg" />{' '}
                  Minha conta
                </MenuItem>
                <Divider />
                <MenuItem onClick={settings}>
                  <ListItemIcon>
                    <IoSettingsOutline size={20} />
                  </ListItemIcon>
                  Configurações
                </MenuItem>
                <MenuItem onClick={logout}>
                  <ListItemIcon>
                    <FiLogOut size={20} />
                  </ListItemIcon>
                  Sair
                </MenuItem>
              </Menu>

              <div className="containerBaseInfo">
                <h4>{` ${user.first_name}  ${user.last_name} `}</h4>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </HeaderContainer>
    </>
  )
}

export default HeaderTabuleiro
