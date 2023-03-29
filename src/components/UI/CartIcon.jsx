import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Slide from '@mui/material/Slide';
// import useMediaQuery from '@mui/material/useMediaQuery';

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
      main: '#a4a4a4',
    },
    secondary: {
      main: '#202020',
    },
  },
});
// const color = 'rgba(17, 17, 17, 0.9)';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    border: `2px solid #fff`,
    fontFamily: 'inherit',
  },
}));

export default function CartIcon({ count, onClick }) {
  return (
    <ThemeProvider theme={theme}>
      <Slide direction="left" in={count !== 0} mountOnEnter unmountOnExit>
        <IconButton
          className="mui-fixed"
          size="medium"
          onClick={onClick}
          sx={{
            position: 'fixed',
            right: '5rem',
            top: '8rem',
            zIndex: 1001,
            [theme.breakpoints.down('md')]: {
              top: '0.7rem',
              right: '6rem',
            },
          }}
        >
          <StyledBadge
            badgeContent={count}
            color="error"
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            overlap="rectangular"
            variant="standard"
            // sx={{ fontFamily: 'unset !important' }}
          >
            <ShoppingCartIcon fontSize="large" color="primary" />
          </StyledBadge>
        </IconButton>
      </Slide>
    </ThemeProvider>
  );
}
