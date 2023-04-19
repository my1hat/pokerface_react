import { useState, lazy, Suspense } from 'react';

import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import IconButton from '@mui/material/IconButton';
const AudioPlayerLazy = lazy(() => import('../UI/AudioPlayer/AudioPlayer'));

const SongWithAudio = ({
  checked,
  author,
  song,
  length,
  handleToggle,
  src,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = (event) => {
    event.stopPropagation();
    setIsPlaying(!isPlaying);
  };
  return (
    <li
      className={`songs-list__song-row ${checked ? 'checked' : ''}`}
      onClick={handleToggle}
    >
      <div className="songs-list__author">{author}</div>
      <div className="songs-list__song">{song}</div>
      <div className="songs-list__length">{length.replace('.', ':')}</div>
      <div className="songs-list__play-button">
        <IconButton onClick={togglePlayPause} color="inherit">
          {isPlaying ? (
            <PauseCircleIcon fontSize="large" />
          ) : (
            <PlayCircleIcon fontSize="large" />
          )}
        </IconButton>
      </div>
      <Suspense fallback={<p>Загрузка...</p>}>
        <AudioPlayerLazy {...{ src, isPlaying, setIsPlaying }} />
      </Suspense>
    </li>
  );
};

export default SongWithAudio;
