// Libraries
import { lazy, Suspense } from 'react';

// Styes
// import './styles/media_rules.scss';
// Components

import Navbar from './components/UI/Navbar/Navbar';
import Intro from './components/Pages/Intro';
import About from './components/Pages/About';
import Features from './components/Pages/Features';
import SongList from './components/Song_page/SongList';
import Contacts from './components/Pages/Contacts';
import Footer from './components/Pages/Footer';
const Video = lazy(() => import('./components/Pages/Video'));
// import Services from './components/Content/Services';

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Intro />
        <About />
        <Suspense fallback={<div>Loading...</div>}>
          <Video />
        </Suspense>
        <Features />
        <SongList />
        {/* <Services /> */}
        <Contacts />
      </div>
      <Footer />
    </>
  );
}

export default App;
