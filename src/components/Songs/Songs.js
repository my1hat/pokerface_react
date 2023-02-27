import { useState } from 'react';
import './section__songs.scss';
import Song from './Song';
import ruSongs from './ru_songs.json';
import engSongs from './eng_songs.json';
import { FaPlus } from 'react-icons/fa';

function Songs({ lang, addSong }) {
  const [active, setActive] = useState('');
  const [height, setHeight] = useState({ maxHeight: '0' });

  function openAndCloseList(event) {
    // console.log(event);
    if (active === '') {
      setActive('active');
      setHeight({
        maxHeight: event.target.parentElement.children[2].scrollHeight,
      });
    } else {
      setActive('');
      setHeight();
    }
  }
  return (
    <div className="section-list-songs">
      <h3
        className={`section-list-songs__title ${active}`}
        onClick={openAndCloseList}
      >
        {lang}
        <FaPlus className={`section-list-songs__fa-plus ${active}`} />
      </h3>
      <h4 className="section-list-songs__title-length">Длительность</h4>
      <ul className={`songs-list ${active}`} style={height}>
        {lang === 'Отечественные'
          ? ruSongs.map((song, index) => {
              return (
                <Song
                  addSong={addSong}
                  key={index}
                  {...song}
                  isActive={false}
                />
              );
            })
          : engSongs.map((song, index) => {
              return (
                <Song
                  addSong={addSong}
                  key={index}
                  {...song}
                  isActive={false}
                />
              );
            })}
      </ul>
    </div>
  );
}
export default Songs;
