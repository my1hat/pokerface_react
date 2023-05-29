import { useEffect, useState, memo } from 'react';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import PdfSongsRender from '../UI/PdfSongsRender';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
// import TiltParalax from '../settings/TiltParalax';
import Popup from '../UI/Popup';

import Songs from '../Songs/Songs';

const Inner = () => {
  const [listOfSongs, setlistOfSongs] = useState([]);
  const [tracks, setTracks] = useState([]); //Добавление песен в массив
  const [error, setError] = useState('');

  const linkJson = './listOfSongs.json';
  const ruSongs = listOfSongs.filter((song) => song.type === 'Отечественные');
  const engSongs = listOfSongs.filter((song) => song.type === 'Зарубежные');

  useEffect(() => {
    async function fetchData() {
      try {
        const resSongs = await fetch(linkJson);
        const fetchSongs = await resSongs.json();
        setlistOfSongs(fetchSongs);
      } catch (error) {
        setError(error.message);
      }
      // setIsLoading(false);
    }
    fetchData();
  }, []);
  if (error) {
    return <h3>Error: {error}</h3>;
  }
  return (
    <>
      <Popup count={tracks.length} {...{ tracks, setTracks }} />
      <Songs lang="Отечественные" {...{ ruSongs, tracks, setTracks }} />
      <Songs lang="Зарубежные" {...{ engSongs, tracks, setTracks }} />
      <Box
        className="button-wrapper-songs"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '2rem',
        }}
      >
        {/* <PDFDownloadLink
        className="songs-list-link__download"
        document={<PdfSongsRender ruSongs={ruSongs} engSongs={engSongs} />}
        fileName="Pokerface_songs.pdf"
      >
        {({blob, url, loading})=> loading? 'Loading doc': "Download"} */}
        <Button
          className="raider-button"
          variant="contained"
          color="error"
          size="large"
          endIcon={<DownloadIcon />}
          href="/Pokerface_songs.pdf"
          download="Pokerface_songs.pdf"
        >
          Скачать репертуар
        </Button>
        {/* </PDFDownloadLink> */}
        {/* <PdfSongsRender ruSongs={ruSongs} engSongs={engSongs} /> */}
        {/* <TiltParalax> */}
        {/* </TiltParalax> */}
      </Box>
    </>
  );
};

export default memo(Inner);
