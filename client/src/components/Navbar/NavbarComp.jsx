import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import configVariables from '../../Constants/configVariables';
import { Stack } from '@mui/material';

const pages = [
  {
    tag: 'Dashboard',
    link: '/'
  },
  {
    tag: 'Branches',
    link: '/branch_form'
  },
  {
    tag: 'Devices',
    link: '/device_form'
  },
  {
    tag: 'Marquees',
    link: '/add_marquee'
  },
  {
    tag: 'Users',
    link: '/add_user'
  },
  {
    tag: 'About',
    link: '/about'
  }
];

function NavbarComp() {

  const nav = useNavigate()
  const [anchorElNav, setAnchorElNav] = useState();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (link) => {
    if (link) {
      nav(link)
    }
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    localStorage.removeItem(configVariables.user_id)
    localStorage.removeItem(configVariables.user_role)
    return nav('/login_page')
  }


  return (
    <AppBar position='static' sx={{ height: '6vh' }} variant='outlined' color='background'>
      <Stack direction={'row'} justifyContent={'space-between'} height={'100%'}>
        <Stack direction={'row'}>
          {pages.map((page) => {
            if (!page.subTags) {
              return (
                <MenuItem key={page.tag} onClick={() => { handleCloseUserMenu(page.link) }}>
                  <Typography textAlign="center" variant='navLink'>{page.tag}</Typography>
                </MenuItem>
              )
            } else {
              return (
                <>
                  <MenuItem onClick={handleOpenUserMenu}>
                    <Typography textAlign="center" variant='navLink'>{page.tag}</Typography>
                  </MenuItem>
                  <Menu
                    // sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {page.subTags.map((subTag) => (
                      <MenuItem key={subTag.subTag} onClick={() => { handleCloseUserMenu(subTag.link) }}>
                        <Typography textAlign="center">{subTag.subTag}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              )
            }
          })}
        </Stack>
        <MenuItem onClick={handleLogOut}>
          <Typography textAlign="center" variant='navLink'>LogOut</Typography>
        </MenuItem>
      </Stack>
    </AppBar>
  );
}
export default NavbarComp;