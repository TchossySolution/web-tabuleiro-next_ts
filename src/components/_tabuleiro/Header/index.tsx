import React, { useContext, useState } from 'react'
import { HeaderContainer } from './styles'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Badge from '@mui/material/Badge'

import { BsChatDots } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'
import { IoMdNotificationsOutline } from 'react-icons/io'

interface ISettings {
  name: string
  type: string
  to?: string
  icon?: any
}

function HeaderTabuleiro() {
  const [slideIsOpen, setSlideIsOpen] = useState(true)

  const user = {
    first_name: 'Rafael',
    last_name: 'Pilartes',
    email: 'rafaelPilartes.rlps@gmail.com',
    role: 'Adm'
  }
  function ToggleModal() {
    setSlideIsOpen(!slideIsOpen)
  }

  const settings: ISettings[] = [
    {
      name: 'Perfil',
      type: 'navigate',
      to: '/',
      icon: <CgProfile color={'#000000'} size={'1.4rem'} />
    },
    {
      name: 'Sair',
      type: 'function',
      icon: <FiLogOut color={'#000000'} size={'1.4rem'} />
    }
  ]
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )
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
    <HeaderContainer>
      <div className="roleContainer">
        <h2>{user.role}</h2>
      </div>

      <div className="containerRigth">
        <div className="containerInfUser">
          <button className="circuleContainerIcons">
            <Badge badgeContent={2} color="error">
              <BsChatDots color={'#000000'} size={'1.4rem'} />
            </Badge>
          </button>
          <button className="circuleContainerIcons">
            <Badge badgeContent={3} color="error">
              <IoMdNotificationsOutline color={'#000000'} size={'1.4rem'} />
            </Badge>
          </button>

          <div className="optionContainer">
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Abrir configurações">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://i.pinimg.com/originals/80/d5/67/80d567a12cf5063f1e445c1efee11940.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map(setting => (
                  <MenuItem
                    key={setting.name}
                    onClick={() => handleCloseUserMenu(setting)}
                  >
                    {setting.icon}
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <div className="containerBaseInfo">
              <h4>{` ${user.first_name}  ${user.last_name} `}</h4>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </HeaderContainer>
  )
}

export default HeaderTabuleiro
