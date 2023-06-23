import { Link } from 'react-scroll';
import introStyles from './Intro.module.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import TiltParalax from '../UI/TiltParalax';

const Intro = () => {
  return (
    <section className={introStyles.intro} id="intro">
      <div className={introStyles.titles}>
        <div className="titles__div-main">
          <h1 className={introStyles.titlesMain}>
            кавер-группа &laquo;PokerFace&raquo;
          </h1>
        </div>
        <div className="titles__div-desc">
          <h2 className={introStyles.titlesDesc}>
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
              className={introStyles.introButton}
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
    </section>
  );
};

export default Intro;
