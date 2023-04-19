import { useEffect, useState, lazy, Suspense } from 'react';

const SongWithoutAudio = lazy(() => import('./SongWithoutAudio'));
const SongWithAudio = lazy(() => import('./SongWithAudio'));
function Song({ author, song, length, src, tracks, addSongHandler }) {
  // const { tracks } = useContext(TracksContext);
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    addSongHandler(author, song, length);
  };

  useEffect(() => {
    setChecked(
      tracks.find((track) => {
        return track.song === song;
      })
    );
  }, [tracks, song]);

  if (!src) {
    return (
      <Suspense>
        <SongWithoutAudio
          {...{ checked, author, song, length, handleToggle }}
        />
      </Suspense>
    );
  }

  return (
    <Suspense>
      <SongWithAudio
        {...{ checked, author, song, length, handleToggle, src }}
      />
    </Suspense>
  );
}

export default Song;
