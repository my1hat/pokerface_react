import { useEffect, useState, memo, useCallback } from 'react';
import SongWithAudio from './SongWithAudio';

const Song = ({ author, song, length, src, tracks, addSongHandler }) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = useCallback(() => {
    addSongHandler(author, song, length);
  }, [addSongHandler, author, length, song]);

  useEffect(() => {
    setChecked(
      tracks.find((track) => {
        return track.song === song;
      })
    );
  }, [tracks, song]);
  return (
    <li
      className={`songs-list__song-row ${checked ? 'checked' : ''}`}
      onClick={handleToggle}
    >
      <div className="songs-list__author">{author}</div>
      <div className="songs-list__song">{song}</div>
      <div className="songs-list__length">{length.replace('.', ':')}</div>
      {src ? (
        <SongWithAudio {...{ src }} />
      ) : (
        <div className="songs-list__play-button-no-audio">
          <div className="song-list__no-audio-text">нет аудиозаписи</div>
        </div>
      )}
    </li>
  );
};

export default memo(Song, (prevProps, nextProps) => {
  return prevProps.tracks === nextProps.tracks;
});
