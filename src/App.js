import { useState } from 'react';

import styles from './components/UI/CartIcon.module.scss';
import Wrapper from './components/Content/Wrapper';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Content/Section';
import Container from './components/Content/Container';
import Intro from './components/Content/Intro';
import About from './components/Content/About';
import Features from './components/Content/Features';
import Video from './components/Content/Video';
import Photo from './components/Content/Photo';
import Songes from './components/Songs/Songes';
import Popup from './components/UI/Popup';
import Contacts from './components/Content/Contacts';
import Footer from './components/Content/Footer';

function App() {
  const [tracks, setTracks] = useState([]); //Добавление песен в массив

  const addSongHandler = (author, song, length, isActive) => {
    const selectSongs = {
      author,
      song,
      length,
      isActive,
    };
    setTracks([...tracks, selectSongs]);
    isActive === false &&
      setTracks(tracks.filter((track) => track.song !== song)); //Удаление песни из массива при потворном клике на неё
  };
  return (
    <div className="App">
      {/* {tracks.length > 0 && ( */}
      <Popup
        count={tracks.length}
        tracks={tracks}
        deleteSong={addSongHandler}
      />
      {/* <CartIcon count={tracks.length} /> */}
      {/* )} */}
      <Navbar />
      <Wrapper>
        <Section addClass="intro" id="intro">
          <Intro />
        </Section>
        <Section addClass="about" id="about">
          <Container>
            <About />
          </Container>
        </Section>
        <Section addClass="features" id="features">
          <Container>
            <Features />
          </Container>
        </Section>
        <Section addClass="media" id="media">
          <Container>
            <Video />
            <Photo />
          </Container>
        </Section>
        <Section addClass="songs" id="songs">
          <Container>
            <h2 className="section-title">Репертуар</h2>
            <p className="paragraph">
              Вы можете собрать сет-лист на своё мероприятие и отправить сразу
              нам!
            </p>
            <Songes lang="Отечественные" addSong={addSongHandler} />
            <Songes lang="Зарубежные" addSong={addSongHandler} />
            <p className="paragraph">
              Длительность выступления минимум 90 минут. Сеты можно разделить
              как Вам удобно. Например: 3 по 30 минут или 2 по 45 минут.
            </p>
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
  );
}

export default App;
