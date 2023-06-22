import { createContext } from 'react';

const currentSongPlayingContext = createContext({
  currentSongPlaying: '',
  setCurrentSongPlaying: () => {},
});
export default currentSongPlayingContext;
