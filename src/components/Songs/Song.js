import { useContext, useEffect, useState } from 'react';
import TracksContext from '../context/TracksContext';
// import PlayCircleIcon from '@mui/icons-material/PlayCircle';
// import PauseCircleIcon from '@mui/icons-material/PauseCircle';
// import IconButton from '@mui/material/IconButton';
// import ProgressBar from '../UI/ProgressBar';

function Song(props) {
  const { author, song, length, addSong } = props;
  const { tracks } = useContext(TracksContext);
  const [checked, setChecked] = useState(false);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const audioRef = useRef(null);

  const handleToggle = () => {
    addSong(author, song, length); //Добавляем песню в массив
  };

  // const handlePlay = () => {
  //   setIsPlaying(!isPlaying);
  // };

  useEffect(() => {
    setChecked(
      tracks.find((track) => {
        return track.song === song;
      })
    );
  }, [tracks, song]); //Устанавливаем класс, только если песня есть в корзине

  // useEffect(() => {
  //   if (audioRef.current && isPlaying) {
  //     audioRef.current.play();
  //   } else if (audioRef.current && !isPlaying) {
  //     audioRef.current.pause();
  //   }
  // }, [isPlaying]);

  return (
    <li
      className={`songs-list__song-row ${checked ? 'checked' : ''}`}
      onClick={handleToggle}
    >
      <div className="songs-list__author">
        {author}
        {/* <audio ref={audioRef} src="./Ivanushki.mp3"></audio> */}
      </div>
      <div className="songs-list__song">{song}</div>
      <div className="songs-list__length">{length.replace('.', ':')}</div>
      {/* <div className="songs-list__play-button">
        <IconButton color="inherit" onClick={handlePlay}>
          {isPlaying ? (
            <PauseCircleIcon fontSize="large" />
          ) : (
            <PlayCircleIcon fontSize="large" />
          )}
        </IconButton>
      </div> */}
      {/* <ProgressBar /> */}
      {/* <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        defaultValue="1"
        onChange={(event) => {
          audioRef.current.volume = event.target.value;
        }}
      /> */}
    </li>
  );
}

export default Song;
