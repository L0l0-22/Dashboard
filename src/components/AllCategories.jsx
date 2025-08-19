// src/components/CategoriesSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

export default function AllCategories({
  items = [],
  className = '',
  slidesPerView = 10,
  spaceBetween = 20,
  showPagination = true,
  freeMode = true,
  dir, // "rtl" | "ltr" | undefined
  breakpoints = {
    0: { slidesPerView: 2.5 },
    640: { slidesPerView: 3 },
    768: { slidesPerView: 5 },
    1024: { slidesPerView: 10 },
  },
  imgClassName = 'object-contain w-20 h-20 transition-transform duration-300 hover:scale-110',
  cardClassName = 'flex items-center justify-center mb-3 bg-white border border-gray-200 rounded-full shadow-lg shadow-gray-200 w-28 h-28',
}) {
  const { t } = useTranslation();
  if (!items.length) return null;

  return (
    <div className={`pt-12 ${className}`}>
      <div className="mx-10">
        <Swiper
          dir={(typeof dir === 'string' ? dir === 'rtl' : i18n.dir() === 'rtl') ? 'rtl' : 'ltr'}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          freeMode={freeMode}
          pagination={showPagination ? { clickable: true, dynamicBullets: true } : false}
          modules={[FreeMode, Pagination]}
          breakpoints={breakpoints}
          className={`scrollbar-hide relative pb-12 ${ (typeof dir === 'string' ? dir === 'rtl' : i18n.dir() === 'rtl') ? 'swiper-rtl' : '' }`}
        >
          {items.map((cat) => (
            <SwiperSlide key={cat.id}>
              <div className="flex flex-col items-center text-center">
                {cat.href ? (
                  <Link to="/search" onClick={cat.onClick}>
                    <div className={cardClassName}>
                      {cat.icon ? cat.icon : <img src={cat.image} alt={cat.labelKey ? t(`categories.${cat.labelKey}`) : (cat.name ?? '')} className={imgClassName} />}
                    </div>
                    <p className="text-base font-semibold">
                      {cat.labelKey ? t(`categories.${cat.labelKey}`) : (cat.name ?? '')}
                    </p>
                  </Link>
                ) : (
                  <Link to="/search"
                    className="contents"
                  >
                    <div className={cardClassName}>
                      {cat.icon ? cat.icon : <img src={cat.image} alt={cat.labelKey ? t(`categories.${cat.labelKey}`) : (cat.name ?? '')} className={imgClassName} />}
                    </div>
                    <p className="text-base font-semibold">
                      {cat.labelKey ? t(`categories.${cat.labelKey}`) : (cat.name ?? '')}
                    </p>
                  </Link>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
