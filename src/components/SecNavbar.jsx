import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import 'swiper/css';
import 'swiper/css/navigation';

export default function SecNavbar() {
  const { t } = useTranslation();
  const [key, setKey] = useState(0); // Key to force re-render
  const isRTL = i18n.dir() === 'rtl';

  // Refresh Swiper when language/direction changes
  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [i18n.language]);

  const categories = [
    { label: t('electronics'), path: '/electronics' },
    { label: t('womens_fashion'), path: '/' },
    { label: t('mens_fashion'), path: '/' },
    { label: t('kids_fashion'), path: '/' },
    { label: t('supermarket'), path: '/supermarket' },
    { label: t('health_nutrition'), path: '/' },
    { label: t('home_appliances'), path: '/' },
    { label: t('beauty_fragrance'), path: '/' },
    { label: t('toys_games'), path: '/' },
    { label: t('sports_outdoors'), path: '/' },
    { label: t('stationery_books'), path: '/' },
    { label: t('automotive'), path: '/' },
    { label: t('baby'), path: '/' },
  ];

  return (
    <nav className="mt-[2px] pb-2 pt-4 w-full z-40 bg-white shadow-md px-4 xl:px-0 overflow-hidden">
      <div className="relative w-full px-20 ">
        <Swiper
          key={key}
          dir={isRTL ? 'rtl' : 'ltr'}
          modules={[Navigation]}
          spaceBetween={5}
          slidesPerView={'auto'}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            disabledClass: "swiper-button-disabled"
          }}
          className={isRTL ? 'swiper-rtl' : ''}
          breakpoints={{
            640: { spaceBetween: 20 },
            1024: { spaceBetween: 25 },
            1280: { spaceBetween: 30 }
          }}
        >
          {categories.map((item, idx) => (
            <SwiperSlide key={idx} className="!w-auto">
              <NavLink
                to={item.path}
                className="px-2 text-sm font-semibold text-gray-500 hover:text-redS hover:underline underline-offset-4 lg:text-lg whitespace-nowrap"
              >
                {item.label}
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>

        <style>
          {`
          .swiper-button-prev,
            .swiper-button-next {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .swiper-button-prev::after,
            .swiper-button-next::after {
              font-size: 16px !important;
              color: #1E1E1E;
              font-weight: 700;
            }
            @media (max-width: 640px) {
              .swiper-button-prev::after,
              .swiper-button-next::after {
                font-size: 14px !important;
              }
            }
            .swiper-button-disabled {
              opacity: 0.35;
              cursor: auto;
              pointer-events: none;
            }
          `}
        </style>

        <div className="swiper-button-prev !left-12 !top-1/2" />
        <div className="swiper-button-next !right-12 !top-1/2" />
      </div>
    </nav>
  );
}