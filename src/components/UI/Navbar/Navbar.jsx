import { useState } from 'react';
import navStyles from './Navbar.module.scss';
import NavItem from './NavItem';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Button from '@mui/material/Button';
import Logo from '../Logo';
import Socials from '../Socials';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-scroll';

const StyledButton = styled(Button)(({ theme }) => ({
  //Стили для моб.устр-в

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
          '&.MuiMenuItem-root:hover': {
            backgroundColor: '#ffffff12',
          },
        },
      },
    },
  },
});
function Navbar() {
  //Если устройство планшет
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    //Закрытие меню
    setAnchorEl(null);
  };

  return (
    <div className={`${navStyles.navbar} mui-fixed`}>
      <div className={navStyles.navbarContainer}>
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
                  to="songlist"
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
                {/* <Link
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
                </Link> */}
                <Divider sx={{ borderColor: '#ffffff07' }} />
                <MenuItem //Logo
                  centerRipple
                  sx={{
                    justifyContent: 'center',
                  }}
                >
                  <Logo section={navStyles.snackMenuLogo} />
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Socials />
                </MenuItem>
                <MenuItem sx={{ justifyContent: 'center' }}>
                  <StyledButton
                    className={navStyles.navbarPhoneButton}
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
            <Logo section={navStyles.navbarLogo} />
            <nav className={navStyles.nav}>
              <ul className={navStyles.navList}>
                <NavItem name="О нас" link="about" />
                <NavItem name="Видео" link="video" />
                <NavItem name="Репертуар" link="songlist" />
                {/* <NavItem name="Цены" link="prices" /> */}
              </ul>
            </nav>
            <Socials />
            <ThemeProvider theme={theme}>
              <StyledButton
                className={navStyles.navbarPhoneButton}
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
