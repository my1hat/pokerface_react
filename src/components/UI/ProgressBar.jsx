// import './ProgressBar.scss';
// const ProgressBar = () => {
//   return (
//     <div className="progress">
//       <span className="time current"> 00 : 00 </span>
//       <input type="range" />
//       <span className="time"> 03 : 34 </span>
//     </div>
//   );
// };

// export default ProgressBar;
import React, { useEffect, useRef, useState } from 'react';

function ProgressBar() {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current.duration);
      });
      audioRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current.currentTime);
      });
    }
  }, []);

  const handleTimeDrag = (event) => {
    setIsDragging(true);
    const { duration } = audioRef.current;
    const newTime = (event.target.value / 100) * duration;
    setCurrentTime(newTime);
  };

  const handleTimeUpdate = () => {
    if (!isDragging && audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const pad = (n) => (n < 10 ? `0${n}` : n);
    return `${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <div className="progress-bar">
      <div className="progress-bar__time">{formatTime(currentTime)}</div>
      <input
        type="range"
        min="0"
        max="100"
        value={((currentTime / duration) * 100).toString}
        onChange={handleTimeDrag}
        onMouseUp={() => setIsDragging(false)}
        onTouchEnd={() => setIsDragging(false)}
      />
      <div className="progress-bar__time">{formatTime(duration)}</div>
      <audio
        ref={audioRef}
        src="./Ivanushki.mp3"
        onTimeUpdate={handleTimeUpdate}
      ></audio>
    </div>
  );
}

export default ProgressBar;
