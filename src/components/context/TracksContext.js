import { createContext } from 'react';

const TracksContext = createContext({
  tracks: '',
  setTracks: () => {},
});
export default TracksContext;
