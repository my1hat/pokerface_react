import { useState } from 'react';
import { motion } from 'framer-motion';
// import TiltVideo from '../settings/TiltVideo';
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
    <>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Видео
      </motion.h2>
      <motion.p
        className="paragraph"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Вы можете помотреть другие видео c нашими выступлениями непосредственно
        на{' '}
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
        {/* <TiltVideo classEnter="video-container__item"> */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          viewport={{ once: true }}
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
        </motion.div>
        {/* </TiltVideo> */}
        {/* <TiltVideo classEnter="video-container__item"> */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
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
        </motion.div>
        {/* </TiltVideo> */}
        {/* <TiltVideo classEnter="video-container__item"> */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          viewport={{ once: true }}
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
        </motion.div>
        {/* </TiltVideo> */}
        {/* <TiltVideo classEnter="video-container__item"> */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
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
        </motion.div>
        {/* </TiltVideo> */}
      </div>
    </>
  );
}

export default Video;
