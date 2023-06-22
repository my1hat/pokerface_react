// Libraries
import { lazy, Suspense } from 'react';

// import { makeStyles } from '@material-ui/core/styles';

// Styes
import './styles/media_rules.scss';
// Components
import Wrapper from './components/Content/Wrapper';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Content/Intro';
import About from './components/Content/About';
import Features from './components/Content/Features';
import SongList from './components/Content/SongList';
import Contacts from './components/Content/Contacts';
import Footer from './components/Content/Footer';
// import Services from './components/Content/Services';
const Video = lazy(() => import('./components/Content/Video'));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Wrapper>
        <Intro />
        <About />
        <Suspense fallback={<div>Loading...</div>}>
          <Video />
        </Suspense>
        <Features />
        <SongList />
        {/* <Services /> */}
        <Contacts />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
