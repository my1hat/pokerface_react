import './Songs.scss';
import { useEffect, useState, useContext } from 'react';
import SongListContext from '../context/SongListContext';
import Accordion from '@mui/material/Accordion';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Song from './Song';
// import ruSongs from './ru_songs.json';
// import engSongs from './eng_songs.json';
const songsRuUrl = 'https://pokerfaceband.ru/ru_songs.json';
const songsEngUrl = 'https://pokerfaceband.ru/eng_songs.json';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f5f5f5',
      my: '#000000',
    },
    secondary: {
      main: '#000000',
    },
    contrastThreshold: 5,
    tonalOffset: 0.2,
  },
});

function Songs({ lang, addSong }) {
  // const [ruSongs, setRuSongs] = useState([]);
  // const [engSongs, setEngSongs] = useState([]);
  const { ruSongs, setRuSongs, engSongs, setEngSongs } =
    useContext(SongListContext);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const resRu = await fetch(songsRuUrl);
        const resEng = await fetch(songsEngUrl);
        const ruSong = await resRu.json();
        const engSong = await resEng.json();
        setRuSongs(ruSong);
        setEngSongs(engSong);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [setEngSongs, setRuSongs]);
  if (error) {
    return <h3>Error: {error}</h3>;
  }
  return (
    <ThemeProvider theme={theme}>
      <Accordion
        className="accordion"
        elevation={4}
        sx={{
          backgroundColor: 'primary.light',
          width: '40%',
          margin: 'auto',
          transition: 'width 1s ease',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="secondary" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h4 className="songs-list__header">{lang}</h4>
        </AccordionSummary>
        <AccordionDetails color="primary">
          <h4 className="songs-list__title-length">Длительность</h4>
          <ul>
            {isLoading ? (
              <h3>Loading...</h3>
            ) : lang === 'Отечественные' ? (
              ruSongs.map((song) => {
                return <Song addSong={addSong} key={song.song} {...song} />;
              })
            ) : (
              engSongs.map((song) => {
                return <Song addSong={addSong} key={song.song} {...song} />;
              })
            )}
          </ul>
        </AccordionDetails>
      </Accordion>
    </ThemeProvider>
  );
}
export default Songs;
