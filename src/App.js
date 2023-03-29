// Libraries
import { useState, lazy, Suspense } from 'react';
import TracksContext from './components/context/TracksContext';
import { Link } from 'react-scroll';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import TiltParalax from './components/settings/TiltParalax';
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
const Video = lazy(() => import('./components/Content/Video'));

function App() {
  const [tracks, setTracks] = useState([]); //Добавление песен в массив

  const addSongHandler = (author, song, length, id) => {
    const selectSongs = {
      author,
      song,
      length,
      id,
    };

    setTracks([...tracks, selectSongs]);
    tracks.find((track) => {
      return track.id === id;
    }) && setTracks(tracks.filter((track) => track.id !== id)); //Удаление песни из массива при потворном клике на неё
  };

  return (
    <TracksContext.Provider value={{ tracks, setTracks }}>
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
                  Музыкальный коллектив для тех, кому нужен яркий праздник.
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
            <div className="songs__header-clip"></div>
          </Section>
          <Section addClass="features" id="features">
            <Container>
              <Features />
            </Container>
          </Section>

          <Section addClass="songs" id="songs">
            <Container>
              <h2 className="section-title">Репертуар</h2>
              <p className="paragraph">
                Вы можете собрать сет-лист на своё мероприятие и отправить нам!
              </p>
              <Songs lang="Отечественные" addSong={addSongHandler} />
              <Songs lang="Зарубежные" addSong={addSongHandler} />
              <p className="paragraph after-songs-list">
                Длительность выступления минимум 90 минут. Сеты можно разделить
                как Вам удобно. Например: 3 по 30 минут или 2 по 45 минут.
              </p>
            </Container>
          </Section>
          <Box
            className="button-wrapper-songs"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <TiltParalax>
              <Button
                variant="contained"
                color="error"
                size="large"
                endIcon={<DownloadIcon />}
                href="https://disk.yandex.ru/d/ug8jsUuvOAowZA"
                target="_blank"
              >
                Скачать весь репертуар
              </Button>
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
                href="https://disk.yandex.ru/i/S2YOUbQRfuMDrQ"
                target="_blank"
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
                href="https://disk.yandex.ru/i/ksLFWK08r50sCg"
                target="_blank"
              >
                Технический райдер
              </Button>
            </TiltParalax>
          </Box>
          <Section addClass="contacts" id="contacts">
            <Container>
              <h2 className="section-title">Контакты</h2>
              <p className="paragraph">
                Свяжитесь с нами, чтобы получить полную информацию о цене,
                свободна ли дата и прочие условия.
              </p>
              <Contacts />
            </Container>
          </Section>
        </Wrapper>

        <Footer />
      </div>
    </TracksContext.Provider>
  );
}

export default App;
