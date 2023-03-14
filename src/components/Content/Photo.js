import { Navigation, Zoom, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/zoom';
import 'swiper/css/thumbs';
import { useState } from 'react';
import './Photo.scss';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
import ph_8117 from '../../images/IMG_8117.jpg';
import ph_8152 from '../../images/IMG_8152.jpg';
import ph_8017 from '../../images/IMG_8017.jpg';
import ph_8179 from '../../images/IMG_8179.jpg';
import ph_8089 from '../../images/IMG_8089.jpg';
import ph_8042 from '../../images/IMG_8042.jpg';

function Photo() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}
      >
        <Box sx={{ maxWidth: '100%' }}>
          <Swiper
            className="mainSwiper"
            title="Кликните два раза на фото, чтобы увеличить"
            modules={[Navigation, Zoom, Thumbs]}
            spaceBetween={30}
            speed={500}
            // slidesPerView={1}
            effect="coverflow"
            loop={true}
            grabCursor={true}
            // watchSlidesProgress={true}
            // coverflowEffect={{
            //   rotate: 100,
            //   slideShadows: true,
            // }}
            zoom={{
              maxRatio: 2,
              //   minRatio: 1,
              toggle: true,
            }}
            thumbs={{
              swiper: thumbsSwiper,
            }}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div class="swiper-zoom-container">
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
              <div class="swiper-zoom-container">
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
              <div class="swiper-zoom-container">
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
              <div class="swiper-zoom-container">
                <img
                  className="swiper-slide__img"
                  src={ph_8152}
                  loading="lazy"
                  alt="Pokerface"
                />
              </div>
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-zoom-container">
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
            loop={true}
            spaceBetween={10}
            slidesPerView={6}
            freeMode={true}
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
              <div className="swiper-zoom-container">
                <img
                  className="swiper-slide__img vertical"
                  src={ph_8042}
                  loading="lazy"
                  alt="Pokerface"
                />
              </div>
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
                src={ph_8152}
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
        {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '2rem',
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            color="error"
            href="https://disk.yandex.ru/i/S2YOUbQRfuMDrQ"
            target="_blank"
          >
            Бытовой райдер
          </Button>
          <Button
            variant="contained"
            color="error"
            href="https://disk.yandex.ru/i/ksLFWK08r50sCg"
            target="_blank"
          >
            Технический райдер
          </Button>
        </Box> */}
      </Box>
    </>
  );
}
export default Photo;
