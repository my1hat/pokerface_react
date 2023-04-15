import { createContext } from 'react';

const SongListContext = createContext({
  ruSongs: '',
  engSongs: '',
  setRuSongs: () => {},
  setEngSongs: () => {},
});
export default SongListContext;
