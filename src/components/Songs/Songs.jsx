import './Songs.scss';
import Accordion from '@mui/material/Accordion';
import { useCallback } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Song from './Song';

// const linkJson = 'https://pokerfaceband.ru/listOfSongs.json';

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

const Songs = ({
  lang,
  ruSongs,
  engSongs,
  tracks,
  setTracks,
  isPlaying,
  setIsPlaying,
}) => {
  // const [isLoading, setIsLoading] = useState(true);

  const addSongHandler = useCallback(
    (author, song, length, src) => {
      const selectSongs = {
        author,
        song,
        length,
        src,
      };
      setTracks([...tracks, selectSongs]);
      tracks.find((track) => {
        return track.song === song;
      }) && setTracks(tracks.filter((track) => track.song !== song)); //Удаление песни из массива при потворном клике на неё
    },
    [tracks, setTracks]
  );
  return (
    <>
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
          <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />}>
            <h4 className="songs-list__header">{lang}</h4>
          </AccordionSummary>
          <AccordionDetails color="primary">
            <h4 className="songs-list__title-length">Длительность</h4>
            <ul>
              {lang === 'Отечественные'
                ? ruSongs.map((song) => {
                    return (
                      <Song
                        {...{
                          tracks,
                          setTracks,
                          addSongHandler,
                          isPlaying,
                          setIsPlaying,
                        }}
                        key={song.song}
                        {...song}
                      />
                    );
                  })
                : engSongs.map((song) => {
                    return (
                      <Song
                        {...{
                          tracks,
                          setTracks,
                          addSongHandler,
                          isPlaying,
                          setIsPlaying,
                        }}
                        key={song.song}
                        {...song}
                      />
                    );
                  })}
            </ul>
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </>
  );
};
export default Songs;
