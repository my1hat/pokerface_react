import { Link } from 'react-scroll';
import './Intro.scss';
import Section from './Section';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import TiltParalax from '../settings/TiltParalax';

const Intro = () => {
  return (
    <Section addClass="intro" id="intro">
      <div className="titles">
        <div className="titles__div-main">
          <h1 className="titles__main">кавер-группа &laquo;PokerFace&raquo;</h1>
        </div>
        <div className="titles__div-desc">
          <h2 className="titles__desc">
            Музыкальный коллектив для тех, кому нужен яркий праздник
          </h2>
        </div>
      </div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          spyThrottle={500}
        >
          <TiltParalax>
            <Button
              className="intro__button"
              variant="contained"
              color="error"
              size="large"
              endIcon={<KeyboardDoubleArrowDownIcon />}
            >
              Подробнее
            </Button>
          </TiltParalax>
        </Link>
      </Box>
    </Section>
  );
};

export default Intro;
