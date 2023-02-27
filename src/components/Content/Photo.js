import { Navigation, Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './Photo.scss';
import ph_8117 from '../../images/IMG_8117.jpg';
import ph_8164 from '../../images/IMG_8164.jpg';
import ph_8017 from '../../images/IMG_8017.jpg';
import ph_0000 from '../../images/Photo_0000.jpg';

function Photo() {
  return (
    <>
      <h2 className="section-title">Фото</h2>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        spaceBetween={30}
        speed={500}
        // slidesPerView={1}
        effect="coverflow"
        loop={true}
        grabCursor={true}
        // watchSlidesProgress={true}
        coverflowEffect={{
          rotate: 100,
          slideShadows: true,
        }}
        zoom={{
          maxRatio: 2,
          //   minRatio: 1,
          toggle: true,
        }}
        navigation
        pagination={{ clickable: true }}
      >
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
            className="swiper-slide__img vertical"
            src={ph_8017}
            loading="lazy"
            alt="Pokerface"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiper-slide__img"
            src={ph_0000}
            loading="lazy"
            alt="Pokerface"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Photo;
