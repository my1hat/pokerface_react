import { useState, lazy, Suspense } from 'react';
import TracksContext from './components/context/TracksContext';
import './components/Content/Intro.scss';
import { Link } from 'react-scroll';
import Wrapper from './components/Content/Wrapper';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Content/Section';
import Container from './components/Content/Container';
// import Intro from './components/Content/Intro';
import About from './components/Content/About';
import Features from './components/Content/Features';
import Button from '@mui/material/Button';
import Songs from './components/Songs/Songs';
import Popup from './components/UI/Popup';
import Contacts from './components/Content/Contacts';
import Footer from './components/Content/Footer';
import Box from '@mui/material/Box';
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
              <h1 className="titles__main">КАВЕР ГРУППА "POKERFACE"</h1>
              <h2 className="titles__desc">Музыкальный коллектив для тех,</h2>
              <h2 className="titles__desc">кому нужен яркий праздник</h2>
            </div>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2rem',
              }}
            >
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <Button variant="contained" color="error" size="large">
                  Подробнее
                </Button>
              </Link>
            </Box>
          </Section>
          <Section addClass="about" id="about">
            <Container>
              <About />
              <Suspense fallback={<div>Loading...</div>}>
                <Video />
              </Suspense>
            </Container>
          </Section>
          <Section addClass="features" id="features">
            <Container>
              <Features />
            </Container>
          </Section>
          <Section addClass="media" id="media">
            <Container></Container>
            <div className="songs__header-clip"></div>
          </Section>
          <Section addClass="songs" id="songs">
            <Container>
              <h2 className="section-title">Репертуар</h2>
              <p className="paragraph">
                Вы можете собрать сет-лист на своё мероприятие и отправить сразу
                нам!
              </p>
              <Songs lang="Отечественные" addSong={addSongHandler} />
              <Songs lang="Зарубежные" addSong={addSongHandler} />
              <p className="paragraph after-songs-list">
                Длительность выступления минимум 90 минут. Сеты можно разделить
                как Вам удобно. Например: 3 по 30 минут или 2 по 45 минут.
              </p>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" color="error">
                  Скачать весь репертуар
                </Button>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '2rem',
                  gap: 2,
                }}
              >
                <Button
                  variant="contained"
                  color="error"
                  href="https://disk.yandex.ru/i/S2YOUbQRfuMDrQ"
                  target="_blank"
                >
                  Бытовой райдер
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  href="https://disk.yandex.ru/i/ksLFWK08r50sCg"
                  target="_blank"
                >
                  Технический райдер
                </Button>
              </Box>
            </Container>
          </Section>
          <Section addClass="contacts" id="contacts">
            <Container>
              <h2 className="section-title">Контакты</h2>
              <p className="paragraph">
                Свяжитесь с нами, чтобы получить полную информацию о цене,
                свободна ли дата и прочие условия. Или оставьте свои контакты мы
                позвоним Вам.
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
