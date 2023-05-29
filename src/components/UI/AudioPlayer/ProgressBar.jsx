// import './ProgressBar.scss';
import Slider from '@mui/material/Slider';
import { memo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#D32f2f',
    },
    secondary: {
      main: '#202020',
    },
    green: {
      main: '#25d366',
    },
  },
});

const ProgressBar = ({
  progressBarRef,
  audioRef,
  duration,
  timeProgress,
  setTimeProgress,
}) => {
  // const handleProgressChange = () => {
  //   audioRef.current.currentTime = progressBarRef.current.value;
  // };
  const handleProgressChange = (event, newValue) => {
    const newTimeProgress = newValue;
    audioRef.current.currentTime = newTimeProgress;
    setTimeProgress(newTimeProgress);
  };
  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };

  const matches = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <>
      <div className="progress">
        {formatTime(timeProgress)}/{formatTime(duration)}
      </div>
      <ThemeProvider theme={theme}>
        <Slider
          className="play-bar"
          size={matches ? 'small' : 'medium'}
          ref={progressBarRef}
          color="primary"
          value={parseFloat(timeProgress.toFixed(1))}
          max={duration}
          onChange={handleProgressChange}
          onClick={(e) => e.stopPropagation()}
          // sx={{
          //   '& .MuiSlider-track': {
          //     border: 'none',
          //   },
          //   '& .MuiSlider-thumb': {
          //     width: 24,
          //     height: 24,
          //     backgroundColor: '#fff',
          //     '&:before': {
          //       boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
          //     },
          //     '&:hover, &.Mui-focusVisible, &.Mui-active': {
          //       boxShadow: 'none',
          //     },
          //   },
          // }}
        />
      </ThemeProvider>
      {/* <input
        className="play-bar"
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
        onClick={(e) => e.stopPropagation()}
      /> */}
    </>
  );
};
export default memo(ProgressBar);
