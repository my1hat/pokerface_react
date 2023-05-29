import { useEffect, useState, useRef, useCallback } from 'react';
import ProgressBar from './ProgressBar';

const AudioPlayer = ({ src, isPlaying, setIsPlaying }) => {
  const audioRef = useRef();
  const progressBarRef = useRef();
  const [duration, setDuration] = useState(0);
  const [timeProgress, setTimeProgress] = useState(0);
  const playAnimationRef = useRef();

  const onLoadedMetadata = () => {
    const seconds = Math.floor(audioRef.current.duration);
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, repeat, setIsPlaying]);

  const onEnded = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={isPlaying ? src : null}
        onEnded={onEnded}
        onLoadedMetadata={onLoadedMetadata}
      ></audio>
      <ProgressBar
        {...{
          progressBarRef,
          audioRef,
          duration,
          timeProgress,
          setDuration,
          setTimeProgress,
        }}
      />
    </>
  );
};

export default AudioPlayer;
