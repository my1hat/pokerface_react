import { useEffect, useState, useRef, useCallback } from 'react';
import ProgressBar from './ProgressBar';

const AudioPlayer = ({ src, isPlaying, setIsPlaying }) => {
  const audioRef = useRef();
  const progressBarRef = useRef();
  const [duration, setDuration] = useState(0);
  const [timeProgress, setTimeProgress] = useState(0);

  const playAnimationRef = useRef();

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

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
      <ProgressBar {...{ progressBarRef, audioRef, duration, timeProgress }} />
    </>
  );
};

export default AudioPlayer;
