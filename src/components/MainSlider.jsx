// src/components/MainSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import i18n from '../i18n';

export default function MainSlider({
  slides = [],                       // [{ src, alt, href, overlay, content }]
  autoplayDelay = 4000,
  loop = true,
  showNav = true,
  className = '',
  imgClassName = 'object-cover w-full h-full',
  dir,                                // force "rtl" | "ltr" if you want
}) {
  if (!slides.length) return null;

  const isRTL =
    typeof dir === 'string'
      ? dir === 'rtl'
      : (typeof i18n !== 'undefined' ? i18n.dir() === 'rtl' : false);

  return (
    <section id="home">
      <div className={` ${className}`}>
        <Swiper
          key={isRTL ? "rtl" : "ltr"}     // ✅ add this line
          dir={isRTL ? 'rtl' : 'ltr'}
          className={`w-full ${isRTL ? 'swiper-rtl' : ''}`}
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          navigation={showNav}
          autoplay={{ delay: autoplayDelay }}
          loop={loop}
        >
          {slides.map((s, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full ">
                  <img src={s.src} alt={s.alt || `Slide ${idx + 1}`} className={imgClassName} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>{`
          .swiper-pagination-bullet {
            background-color: #d1d5db !important;
            width: 30px !important;
            height: 5px !important;
            border-radius: 5px !important;
            opacity: 0.6 !important;
          }
          .swiper-pagination-bullet-active {
            background-color: #FF3C3C !important;
            opacity: 1 !important;
            width: 30px !important;
            height: 5px !important;
            border-radius: 5px !important;
          }
          .swiper-button-prev,
          .swiper-button-next {
            background: rgba(255, 255, 255, 0.6);
            width: 40px;
            height: 40px;
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .swiper-button-prev::after,
          .swiper-button-next::after {
            font-size: 20px;
            color: #1E1E1E;
            font-weight: 700;
          }
          @media (max-width: 640px) {
            .swiper-button-prev,
            .swiper-button-next {
              width: 28px !important;
              height: 28px !important;
            }
            .swiper-button-prev::after,
            .swiper-button-next::after {
              font-size: 14px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
