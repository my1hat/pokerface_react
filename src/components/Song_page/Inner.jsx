import { useEffect, useState, memo } from 'react';
import './Inner.scss';
import audioStyles from '../UI/AudioPlayer.module.scss';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import PdfSongsRender from '../UI/PdfSongsRender';
import AudioPlayer from 'react-h5-audio-player';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download';
// import TiltParalax from '../settings/TiltParalax';
import Popup from '../UI/Popup';

import Songs from './SongsAccordion';

const Inner = () => {
  //Получение данных из файла JSON
  const [listOfSongs, setlistOfSongs] = useState([]);
  //Добавление песен в массив (для корзины)
  const [tracks, setTracks] = useState([]);
  //Показываем ошибку если не будет ответа от сервера
  const [error, setError] = useState('');
  //Получение ссылки на текущ. песню в плеере
  const [srcSong, setSrcSong] = useState(null);
  //Медиазапрос для MUI
  const tabletsAndMobiles = useMediaQuery('(max-width:908px)');

  //----------------------------------------------------------------------------//
  const linkJson = './listOfSongs.json';
  const ruSongs = listOfSongs.filter((song) => song.type === 'Отечественные');
  const engSongs = listOfSongs.filter((song) => song.type === 'Зарубежные');

  useEffect(() => {
    async function fetchData() {
      //Отправляем запрос и получаем данные о песнях из JSON файла
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
  const handleCloseAudioPlayer = () => setSrcSong(null); //Закрываем аудиоплеер при клике на крестик

  return (
    <>
      <Popup count={tracks.length} {...{ tracks, setTracks }} />
      <Songs
        lang="Отечественные"
        {...{ ruSongs, tracks, setTracks, srcSong, setSrcSong }}
      />
      <Songs
        lang="Зарубежные"
        {...{ engSongs, tracks, setTracks, srcSong, setSrcSong }}
      />
      {/* Аудиоплеер покажется на странице если пользователь кликнул послушать любую песню. */}
      {srcSong !== null && (
        <div className={audioStyles.audioplayer}>
          <div className={audioStyles.audioplayerContainer}>
            <div className={audioStyles.closeButtonAudioplayer}>
              <IconButton onClick={handleCloseAudioPlayer}>
                <CloseOutlinedIcon
                  color="error"
                  fontSize={tabletsAndMobiles ? 'large' : 'medium'}
                />
              </IconButton>
            </div>
            <AudioPlayer
              layout="horizontal"
              autoPlay
              src={srcSong}
              showJumpControls={false}
              customAdditionalControls={[]}
            />
          </div>
        </div>
      )}
      <Box
        className="buttonWrapperSongs"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
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
        <Button
          className="raider-button"
          variant="contained"
          color="error"
          size="large"
          endIcon={<DownloadIcon />}
          href="/Pokerface_Bytovoi_Rider.pdf"
          download="Pokerface_byt_rider.pdf"
        >
          Бытовой райдер
        </Button>
        <Button
          className="raider-button"
          variant="contained"
          color="error"
          size="large"
          endIcon={<DownloadIcon />}
          href="/Pokerface_Tech_Rider.pdf"
          download="Pokerface_tech_rider.pdf"
        >
          Технический райдер
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
