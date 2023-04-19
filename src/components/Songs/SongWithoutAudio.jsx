const SongWithoutAudio = ({ checked, author, song, length, handleToggle }) => {
  return (
    <li
      className={`songs-list__song-row ${checked ? 'checked' : ''}`}
      onClick={handleToggle}
    >
      <div className="songs-list__author">{author}</div>
      <div className="songs-list__song">{song}</div>
      <div className="songs-list__length">{length.replace('.', ':')}</div>
      <div className="songs-list__play-button-no-audio">
        <div className="song-list__no-audio-text">нет аудиозаписи</div>
      </div>
    </li>
  );
};

export default SongWithoutAudio;
