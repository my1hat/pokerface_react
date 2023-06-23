// import AudioPlayer from '../UI/AudioPlayer/AudioPlayer';
import songStyles from './SongList.module.scss';
import { memo, useState, useEffect } from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import IconButton from '@mui/material/IconButton';

const SongWithAudio = ({ src, srcSong, setSrcSong }) => {
  const [currentPlayingSong, setCurrentPlayingSong] = useState(false);

  const togglePlayPause = (event) => {
    event.stopPropagation();
    setSrcSong(src);
    setCurrentPlayingSong(!currentPlayingSong);
  };
  useEffect(() => {
    if (src !== srcSong) {
      setCurrentPlayingSong(false);
    }
  }, [src, srcSong]);

  return (
    <>
      <div className={songStyles.playButton}>
        <IconButton onClick={togglePlayPause} color="inherit">
          {srcSong === src && currentPlayingSong ? (
            <PauseCircleIcon fontSize="large" color="error" />
          ) : (
            <PlayCircleIcon fontSize="large" />
          )}
        </IconButton>
      </div>

      {/* <AudioPlayer {...{ src, isPlaying, setIsPlaying }} /> */}
    </>
  );
};

export default memo(SongWithAudio, (prevProps, nextProps) => {
  return (
    prevProps.srcSong === nextProps.srcSong
    // prevProps.setIsPlaying === nextProps.setIsPlaying
  );
});
