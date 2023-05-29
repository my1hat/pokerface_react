import { useState } from 'react';
import AudioPlayer from '../UI/AudioPlayer/AudioPlayer';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import IconButton from '@mui/material/IconButton';

const SongWithAudio = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = (event) => {
    event.stopPropagation();
    setIsPlaying(!isPlaying);
  };
  return (
    <>
      <div className="songs-list__play-button">
        <IconButton onClick={togglePlayPause} color="inherit">
          {isPlaying ? (
            <PauseCircleIcon fontSize="large" />
          ) : (
            <PlayCircleIcon fontSize="large" />
          )}
        </IconButton>
      </div>

      <AudioPlayer {...{ src, isPlaying, setIsPlaying }} />
    </>
  );
};

export default SongWithAudio;
