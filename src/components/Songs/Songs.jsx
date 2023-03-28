import Accordion from '@mui/material/Accordion';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Song from './Song';
import ruSongs from './ru_songs.json';
import engSongs from './eng_songs.json';
import './Songs.scss';

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
  return (
    <ThemeProvider theme={theme}>
      <Accordion
        className="accordion"
        elevation={2}
        sx={{
          backgroundColor: 'primary.light',
          width: '40%',
          margin: 'auto',
          transition: 'width 1s ease',
          // '&.Mui-expanded': {
          //   width: '50rem',
          //   margin: 'auto',
          // },
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
            {lang === 'Отечественные'
              ? ruSongs.map((song) => {
                  return <Song addSong={addSong} key={song.id} {...song} />;
                })
              : engSongs.map((song) => {
                  return <Song addSong={addSong} key={song.id} {...song} />;
                })}
          </ul>
        </AccordionDetails>
      </Accordion>
    </ThemeProvider>
  );
}
export default Songs;
