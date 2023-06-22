import { useEffect, useState, memo, useCallback } from 'react';
import SongWithAudio from './SongWithAudio';

const Song = ({
  author,
  song,
  length,
  src,
  tracks,
  addSongHandler,
  srcSong,
  setSrcSong,
}) => {
  const [checked, setChecked] = useState(false);
  const handleToggle = useCallback(() => {
    addSongHandler(author, song, length);
  }, [addSongHandler, author, length, song]); //добавляем в корзину песню по клику на неё

  useEffect(() => {
    setChecked(
      tracks.find((track) => {
        return track.song === song;
      })
    );
  }, [tracks, song]); //следим за песнями в корзине и убираем выделение из удаленных песен
  return (
    <li
      className={`songs-list__song-row ${checked ? 'checked' : ''}`}
      onClick={handleToggle}
    >
      <div className="songs-list__author">{author}</div>
      <div className="songs-list__song">{song}</div>
      <div className="songs-list__length">{length.replace('.', ':')}</div>
      {src ? (
        <SongWithAudio {...{ src, srcSong, setSrcSong }} />
      ) : (
        <div className="songs-list__play-button-no-audio">
          <div className="song-list__no-audio-text">нет аудиозаписи</div>
        </div>
      )}
    </li>
  );
};

export default memo(Song, (prevProps, nextProps) => {
  return (
    prevProps.tracks === nextProps.tracks &&
    prevProps.srcSong === nextProps.srcSong
  );
});
