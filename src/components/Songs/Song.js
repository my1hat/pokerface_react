import { useContext, useEffect, useState } from 'react';
import TracksContext from '../context/TracksContext';

function Song(props) {
  const { author, song, length, id, addSong } = props;
  const { tracks } = useContext(TracksContext);
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    addSong(author, song, length, id); //Добавляем песню в массив
  };

  useEffect(() => {
    setChecked(
      tracks.find((track) => {
        return track.id === id;
      })
    );
  }, [tracks, id]); //Устанавливаем класс, только если песня есть в корзине

  return (
    <li
      className={`songs-list__song-row ${checked ? 'checked' : ''}`}
      onClick={handleToggle}
    >
      <span className="songs-list__author">{author}</span> -{' '}
      <span className="songs-list__song">{song}</span>
      <span className="songs-list__length">{length}</span>
    </li>
  );
}
export default Song;
