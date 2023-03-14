import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Slide from '@mui/material/Slide';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a4a4a4',
    },
  },
});
// const color = 'rgba(17, 17, 17, 0.9)';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    border: `2px solid transparent`,
  },
}));

export default function CartIcon({ count, onClick }) {
  return (
    <ThemeProvider theme={theme}>
      <Slide direction="left" in={count !== 0} mountOnEnter unmountOnExit>
        <IconButton
          className="mui-fixed"
          aria-label="cart"
          color="primary"
          size="large"
          onClick={onClick}
          sx={{
            position: 'fixed',
            right: '1rem',
            top: '6rem',
            zIndex: 1001,
          }}
        >
          <StyledBadge
            badgeContent={count}
            color="error"
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <ShoppingCartIcon fontSize="large" />
          </StyledBadge>
        </IconButton>
      </Slide>
    </ThemeProvider>
  );
}
