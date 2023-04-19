import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import Container from './Container';
// import VKWidget from './components/UI/VKWidget';
// import TelegramWidget from './components/UI/TelegramWidget';
import './Video.scss';

function Video() {
  const [videoIndex, setVideoIndex] = useState(null);
  const videoLinks = [
    'https://www.youtube.com/embed/BGVDtUDIUxU?autoplay=1',
    'https://www.youtube.com/embed/9cd5487jIKg?autoplay=1',
    'https://www.youtube.com/embed/u_LfYj6CASY?autoplay=1',
    'https://www.youtube.com/embed/jo_fev_YwDQ?autoplay=1',
  ];

  const handleVideoClick = (index) => {
    setVideoIndex(index);
  };

  return (
    <Section addClass="video" id="video">
      <Container>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Видео
        </motion.h2>
        <motion.p
          className="paragraph"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Вы можете помотреть другие видео c нашими выступлениями
          непосредственно на{' '}
          <a
            className="paragraph__link_red"
            href="https://www.youtube.com/@pokerfacecoverband"
            target="_blank"
            rel="noreferrer"
          >
            нашем канале youtube
          </a>{' '}
          и в{' '}
          <a className="paragraph__link_blue " href="#contacts">
            соц.сетях.
          </a>
        </motion.p>
        <div className="video-container">
          <div
            className={`video-container__item preview-2 ${
              videoIndex === 0 ? 'active' : ''
            }`}
            onClick={() => handleVideoClick(0)}
          >
            {videoIndex === 0 ? '' : <div className="video__play-icon"></div>}
            {videoIndex === 0 && (
              <iframe
                className="video-iframe"
                title="video player"
                src={videoLinks[0]}
                frameBorder="0"
                allowFullScreen
                autoPlay
              />
            )}
          </div>

          <div
            className={`video-container__item preview-1 ${
              videoIndex === 1 ? 'active' : ''
            }`}
            onClick={() => handleVideoClick(1)}
          >
            {videoIndex === 1 ? '' : <div className="video__play-icon"></div>}
            {videoIndex === 1 && (
              <iframe
                className="video-iframe"
                title="video player"
                src={videoLinks[1]}
                frameBorder="0"
                allowFullScreen
              />
            )}
          </div>

          <div
            className={`video-container__item preview-3 ${
              videoIndex === 2 ? 'active' : ''
            }`}
            onClick={() => handleVideoClick(2)}
          >
            {videoIndex === 2 ? '' : <div className="video__play-icon"></div>}
            {videoIndex === 2 && (
              <iframe
                className="video-iframe"
                title="video player"
                src={videoLinks[2]}
                frameBorder="0"
                allowFullScreen
              />
            )}
          </div>

          <div
            className={`video-container__item preview-4 ${
              videoIndex === 3 ? 'active' : ''
            }`}
            onClick={() => handleVideoClick(3)}
          >
            {videoIndex === 3 ? '' : <div className="video__play-icon"></div>}
            {videoIndex === 3 && (
              <iframe
                className="video-iframe"
                title="video player"
                src={videoLinks[3]}
                frameBorder="0"
                allowFullScreen
              />
            )}
          </div>
        </div>
        {/* <div className="widgets-wrap">
                  <VKWidget />
                  <TelegramWidget />
                </div> */}
      </Container>
    </Section>
  );
}

export default Video;
