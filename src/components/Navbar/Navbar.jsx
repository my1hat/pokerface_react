import NavItem from './NavItem';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import './Navbar.scss';
import Button from '@mui/material/Button';
import Logo from '../Content/Logo';
import Socials from '../Content/Socials';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';

import { styled } from '@mui/material/styles';
import { Link } from 'react-scroll';

const StyledButton = styled(Button)(({ theme }) => ({
  // fontSize: '1rem',
  // padding: '10px 20px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
    padding: '5px 10px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '0.8rem',
    padding: '5px 10px',
  },
}));

const StyledIcon = styled(PhoneAndroidIcon)(({ theme }) => ({
  fontSize: '1em',
  [theme.breakpoints.down('md')]: {
    // fontSize: '19px',
    // margin: '0.1rem',
    width: '1.2rem',
  },
}));

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#f5f5f5',
      my: '#111111',
    },
    secondary: {
      main: '#000000',
    },
    contrastThreshold: 5,
    tonalOffset: 0.2,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#202020',
          color: '#f5f5f5',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          // '&.MuiMenuItem-root:hover'
          '&.MuiMenuItem-root:hover': {
            backgroundColor: '#ffffff12',
          },
        },
      },
    },
  },
});
function Navbar() {
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar mui-fixed">
      <div className="navbar__container">
        {isTablet ? (
          <ThemeProvider theme={theme}>
            <Toolbar disableGutters variant="dense">
              <IconButton
                size="medium"
                color="primary"
                onClick={handleMenuClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                variant="menu"
              >
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <MenuItem
                    onClick={handleMenuClose}
                    sx={{ fontFamily: 'unset', justifyContent: 'center' }}
                    color="primary.main"
                  >
                    О нас
                  </MenuItem>
                </Link>
                <Link
                  to="video"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <MenuItem
                    onClick={handleMenuClose}
                    disableGutters
                    sx={{ fontFamily: 'unset', justifyContent: 'center' }}
                  >
                    Видео
                  </MenuItem>
                </Link>
                <Link
                  to="songs"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <MenuItem
                    onClick={handleMenuClose}
                    sx={{ fontFamily: 'unset', justifyContent: 'center' }}
                  >
                    Репертуар
                  </MenuItem>
                </Link>
                <Link
                  to="prices"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  <MenuItem
                    onClick={handleMenuClose}
                    sx={{ fontFamily: 'unset', justifyContent: 'center' }}
                  >
                    Цены
                  </MenuItem>
                </Link>
                <Divider sx={{ borderColor: '#ffffff07' }} />
                <MenuItem //Logo
                  centerRipple
                  sx={{
                    justifyContent: 'center',
                  }}
                >
                  <Logo section="snack-menu" />
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Socials />
                </MenuItem>
                <MenuItem sx={{ justifyContent: 'center' }}>
                  <StyledButton
                    className="navbar__phone-button"
                    variant="text"
                    color="primary"
                    startIcon={<StyledIcon />}
                    // size="large"
                    fullWidth
                    href="tel:+79264610236"
                  >
                    +7 (926) 461-02-36
                  </StyledButton>
                </MenuItem>
              </Menu>
            </Toolbar>
          </ThemeProvider>
        ) : (
          <>
            <Logo section="navbar" />
            <nav className="nav">
              <ul className="nav__list">
                <NavItem name="О нас" link="about" />
                <NavItem name="Видео" link="video" />
                <NavItem name="Репертуар" link="songs-list" />
                <NavItem name="Цены" link="prices" />
              </ul>
            </nav>
            <Socials />
            <ThemeProvider theme={theme}>
              <StyledButton
                className="navbar__phone-button"
                variant="text"
                color="primary"
                startIcon={<StyledIcon />}
                size="large"
                href="tel:+79264610236"
              >
                +7 (926) 461-02-36
              </StyledButton>
            </ThemeProvider>
          </>
        )}
      </div>
    </div>
  );
}
export default Navbar;
