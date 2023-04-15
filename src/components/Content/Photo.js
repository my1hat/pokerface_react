import { Navigation, Thumbs, Zoom } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

import Box from '@mui/material/Box';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';
import 'swiper/scss/zoom';
import './Photo.scss';

import ph_8117 from '../../images/IMG_8117.jpg';
import ph_8164 from '../../images/IMG_8164.jpg';
import ph_8017 from '../../images/IMG_8017.jpg';
import ph_8179 from '../../images/IMG_8179.jpg';
import ph_8089 from '../../images/IMG_8089.jpg';
import ph_8042 from '../../images/IMG_8042.jpg';

function Photo() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          // marginBottom: '2rem',
        }}
      >
        <Swiper
          className="mainSwiper"
          title="Кликните два раза на фото, чтобы увеличить"
          modules={[Navigation, Thumbs, Zoom]}
          spaceBetween={10}
          speed={500}
          slidesPerView={1}
          // effect="coverflow"
          loop={true}
          grabCursor={true}
          watchSlidesProgress={true}
          // coverflowEffect={{
          //   rotate: 100,
          //   slideShadows: true,
          // }}
          breakpoints={{ 320: { zoom: { maxRatio: 2 } } }}
          zoom={{
            maxRatio: 2,
          }}
          thumbs={{
            swiper: thumbsSwiper,
          }}
          navigation
        >
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <img
                className="swiper-slide__img"
                src={ph_8017}
                loading="lazy"
                alt="Pokerface"
              />
            </div>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <img
                className="swiper-slide__img"
                src={ph_8089}
                loading="lazy"
                alt="Pokerface"
              />
            </div>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <img
                className="swiper-slide__img"
                src={ph_8042}
                loading="lazy"
                alt="Pokerface"
              />
            </div>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <img
                className="swiper-slide__img"
                src={ph_8117}
                loading="lazy"
                alt="Pokerface"
              />
            </div>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <img
                className="swiper-slide__img"
                src={ph_8164}
                loading="lazy"
                alt="Pokerface"
              />
            </div>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <img
                className="swiper-slide__img"
                src={ph_8179}
                loading="lazy"
                alt="Pokerface"
              />
            </div>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          className="minSwiper"
          modules={[Navigation, Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          // loop={true}
          spaceBetween={10}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 3, spaceBetween: 5 },
            640: { slidesPerView: 4, spaceBetween: 10 },
            1000: { slidesPerView: 5, spaceBetween: 10 },
            1400: { slidesPerView: 6, spaceBetween: 10 },
          }}
          // freeMode={true}
        >
          <SwiperSlide>
            <img
              className="swiper-slide__img"
              src={ph_8017}
              loading="lazy"
              alt="Pokerface"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swiper-slide__img"
              src={ph_8089}
              loading="lazy"
              alt="Pokerface"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swiper-slide__img vertical"
              src={ph_8042}
              loading="lazy"
              alt="Pokerface"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swiper-slide__img"
              src={ph_8117}
              loading="lazy"
              alt="Pokerface"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swiper-slide__img"
              src={ph_8164}
              loading="lazy"
              alt="Pokerface"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swiper-slide__img"
              src={ph_8179}
              loading="lazy"
              alt="Pokerface"
            />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
        </Swiper>
      </Box>
    </motion.div>
  );
}
export default Photo;
