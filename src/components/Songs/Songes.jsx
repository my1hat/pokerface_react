import Accordion from '@mui/material/Accordion';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Song from './Song';
import ruSongs from './ru_songs.json';
import engSongs from './eng_songs.json';
import './Songes.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a4a4a4',
      my: '#000000',
    },
    secondary: {
      main: '#000000',
    },
    contrastThreshold: 5,
    tonalOffset: 0.2,
  },
});

function Songes({ lang, addSong }) {
  return (
    <ThemeProvider theme={theme}>
      <Accordion elevation={3} sx={{ backgroundColor: 'primary.light' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="secondary" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color="primary.contrastText" variant="h6">
            {lang}
          </Typography>
        </AccordionSummary>
        <AccordionDetails color="primary">
          <Typography
            color="primary.contrastText"
            variant="subtitle1"
            align="right"
          >
            Длительность
          </Typography>

          <ul>
            {lang === 'Отечественные'
              ? ruSongs.map((song, index) => {
                  return (
                    <Song
                      addSong={addSong}
                      key={index}
                      {...song}
                      isActive={false}
                    />
                  );
                })
              : engSongs.map((song, index) => {
                  return (
                    <Song
                      addSong={addSong}
                      key={index}
                      {...song}
                      isActive={false}
                    />
                  );
                })}
          </ul>
        </AccordionDetails>
      </Accordion>
    </ThemeProvider>
  );
}
export default Songes;
