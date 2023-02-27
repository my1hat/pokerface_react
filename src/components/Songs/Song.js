import { useState } from 'react';

function Song(props) {
  const { author, song, length, addSong, isActive } = props;
  const [checked, setChecked] = useState(false);

  // console.log(props);

  const handleToggle = () => {
    setChecked(!checked);
    checked && addSong(author, song, length, isActive); //Если песня не выбрана
    !checked && addSong(author, song, length, !isActive); //Если песня выбрана
  };
  return (
    <li
      className={`songs-list__song-row ${!checked ? '' : 'checked'}`}
      onClick={handleToggle}
    >
      <span className="songs-list__author">{author}</span> -{' '}
      <span className="songs-list__song">{song}</span>
      <span className="songs-list__length">{length}</span>
    </li>
  );
}
export default Song;
