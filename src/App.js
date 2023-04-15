// Libraries
import { useState, lazy, Suspense } from 'react';
import TracksContext from './components/context/TracksContext';
import SongListContext from './components/context/SongListContext';
import { Link } from 'react-scroll';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import TiltParalax from './components/settings/TiltParalax';
import { motion } from 'framer-motion';
import { PDFDownloadLink } from '@react-pdf/renderer';

// import { makeStyles } from '@material-ui/core/styles';

// Styes
import './components/Content/Intro.scss';
import './styles/media_rules.scss';
// Components
import Wrapper from './components/Content/Wrapper';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Content/Section';
import Container from './components/Content/Container';
import About from './components/Content/About';
import Features from './components/Content/Features';
import Songs from './components/Songs/Songs';
import Popup from './components/UI/Popup';
import Contacts from './components/Content/Contacts';
import Footer from './components/Content/Footer';
import VKWidget from './components/UI/VKWidget';
import TelegramWidget from './components/UI/TelegramWidget';
import MyDocument from './components/UI/MyDocument';
const Video = lazy(() => import('./components/Content/Video'));

function App() {
  const [tracks, setTracks] = useState([]); //Добавление песен в массив
  const [ruSongs, setRuSongs] = useState([]);
  const [engSongs, setEngSongs] = useState([]);

  const addSongHandler = (author, song, length) => {
    const selectSongs = {
      author,
      song,
      length,
    };

    setTracks([...tracks, selectSongs]);
    tracks.find((track) => {
      return track.song === song;
    }) && setTracks(tracks.filter((track) => track.song !== song)); //Удаление песни из массива при потворном клике на неё
  };

  return (
    <TracksContext.Provider value={{ tracks, setTracks }}>
      <SongListContext.Provider
        value={{ ruSongs, setRuSongs, engSongs, setEngSongs }}
      >
        <div className="App">
          <Popup
            count={tracks.length}
            tracks={tracks}
            deleteSong={addSongHandler}
          />
          <Navbar />
          <Wrapper>
            <Section addClass="intro" id="intro">
              <div className="titles">
                <div className="titles__div-main">
                  <h1 className="titles__main">
                    кавер-группа &laquo;PokerFace&raquo;
                  </h1>
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
            <Section addClass="about" id="about">
              <Container>
                <About />
              </Container>
            </Section>
            <Section addClass="media" id="media">
              <Container>
                <Suspense fallback={<div>Loading...</div>}>
                  <Video />
                </Suspense>
              </Container>
            </Section>
            <Section>
              <Container>
                <div className="widgets-wrap">
                  <VKWidget />
                  <TelegramWidget />
                </div>
              </Container>
            </Section>
            <Section addClass="features" id="features">
              <Container>
                <Features />
              </Container>
            </Section>
            <Section addClass="songs" id="songs">
              <Container>
                <motion.h2
                  className="section-title"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  Репертуар
                </motion.h2>
                <motion.p
                  className="paragraph"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  Вы можете собрать сет-лист на своё мероприятие и отправить
                  нам!
                </motion.p>
                <Songs lang="Отечественные" addSong={addSongHandler} />
                <Songs lang="Зарубежные" addSong={addSongHandler} />
              </Container>
            </Section>
            <Box
              className="button-wrapper-songs"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '1rem',
              }}
            >
              {/* <MyDocument ruSongs={ruSongs} engSongs={engSongs} /> */}
              <TiltParalax>
                <PDFDownloadLink
                  style={{ textDecoration: 'none' }}
                  document={
                    <MyDocument ruSongs={ruSongs} engSongs={engSongs} />
                  }
                  fileName="somename.pdf"
                >
                  <Button
                    variant="contained"
                    color="error"
                    size="large"
                    endIcon={<DownloadIcon />}
                    // href="/Pokerface_songs.pdf"
                    // download="Pokerface_songs.pdf"
                  >
                    Скачать весь репертуар
                  </Button>
                </PDFDownloadLink>
              </TiltParalax>
            </Box>
            <Box
              className="raider-wrapper raiders"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '2rem',
                gap: 2,
              }}
            >
              <TiltParalax>
                <Button
                  className="raider-button"
                  variant="contained"
                  endIcon={<DownloadIcon />}
                  size="large"
                  color="error"
                  href="/Pokerface_Bytovoi_Rider.pdf"
                  download="Pokerface_Bytovoi_Rider.pdf"
                >
                  Бытовой райдер
                </Button>
              </TiltParalax>
              <TiltParalax>
                <Button
                  className="raider-button"
                  variant="contained"
                  endIcon={<DownloadIcon />}
                  color="error"
                  size="large"
                  href="/Pokerface_Tech_Rider.pdf"
                  download="Pokerface_Tech_Rider.pdf"
                >
                  Технический райдер
                </Button>
              </TiltParalax>
            </Box>

            <Section addClass="contacts" id="contacts">
              <Container>
                <motion.h2
                  className="section-title"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  Контакты
                </motion.h2>
                <motion.p
                  className="paragraph"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  Свяжитесь с нами, чтобы получить полную информацию о цене,
                  свободна ли дата и прочие условия.
                </motion.p>
                <Contacts />
              </Container>
            </Section>
          </Wrapper>

          <Footer />
        </div>
      </SongListContext.Provider>
    </TracksContext.Provider>
  );
}

export default App;
