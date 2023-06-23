import { useEffect, useState, memo, useCallback } from 'react';
import songStyles from './SongList.module.scss';
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
      className={`${songStyles.songItem} ${checked ? songStyles.checked : ''}`}
      onClick={handleToggle}
    >
      <div className={songStyles.author}>{author}</div>
      <div className={songStyles.song}>{song}</div>
      <div className={songStyles.length}>{length.replace('.', ':')}</div>
      {src ? (
        <SongWithAudio {...{ src, srcSong, setSrcSong }} />
      ) : (
        <div className={songStyles.playButtonNoAudio}>
          <div className={songStyles.noAudioText}>нет аудиозаписи</div>
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
