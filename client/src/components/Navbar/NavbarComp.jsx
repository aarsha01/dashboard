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

const pages = [
  {
    tag: 'Dashboard',
    link: '/'
  },
  {
    tag: 'Master',
    subTags: [
      {
        subTag: 'Add Branch',
        link: '/add_branch'
      },
      {
        subTag: 'Add Device',
        link: '/add_device'
      },
      {
        subTag: 'Add Marquee',
        link: '/add_marquee'
      },
      {
        subTag: 'Add Zone',
        link: '/add_zone'
      },
      {
        subTag: 'Add User',
        link: '/add_user'
      }
    ]
  },
  {
    tag: 'All Devices',
    link: '/all_devices'
  },
  {
    tag: 'Logout',
    link: 'logout'
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
      if (link === 'logout') {
        localStorage.removeItem(configVariables.user_id)
        localStorage.removeItem(configVariables.user_role)
        return nav('/login_page')
      }
      nav(link)
    }
    setAnchorElUser(null);
  };


  return (
    <AppBar position='static' sx={{ height: 'auto' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{minHeight:'unset !important'}}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => {
              if (!page.subTags) {
                return (
                  <MenuItem key={page.tag} onClick={() => { handleCloseUserMenu(page.link) }}>
                    <Typography textAlign="center">{page.tag}</Typography>
                  </MenuItem>
                )
              } else {
                return (
                  <>
                    <MenuItem onClick={handleOpenUserMenu}>
                      <Typography textAlign="center">{page.tag}</Typography>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavbarComp;