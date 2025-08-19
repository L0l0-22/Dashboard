// src/components/ExploreAccessories.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import mobiles from "../assets/mobile1.png"
import audio from "../assets/airpod1.png"
import wearables from "../assets/watch.png"
import tablets from "../assets/tablet1.png"
import mobileAccessories from "../assets/flash.png"
export default function ExploreAccessories({
  items = [],
  onViewAll,
  className = "",
}) {
  const { t } = useTranslation();
  const defaults = [
    {
      id: "mobiles",
      titleKey: "accessories.mobiles",
      img: mobiles,
      to: "/category/mobiles",
    },
    {
      id: "audio",
      titleKey: "accessories.audioDevices",
      img: audio,
      to: "/category/audio",
    },
    {
      id: "wearables",
      titleKey: "accessories.wearables",
      img: wearables,
      to: "/category/wearables",
    },
    {
      id: "tablets",
      titleKey: "accessories.tablets",
      img: tablets,
      to: "/category/tablets",
    },
    {
      id: "mobileAccessories",
      titleKey: "accessories.mobileAccessories",
      img: mobileAccessories,
      to: "/category/mobile-accessories",
    },
  ];
  const data = items.length >= 5 ? items : defaults;
  const big = data[0];
  const small = data.slice(1, 5);

  return (
    <section className={`py-12 px-6 md:px-4 lg:px-20 ${className}`}>
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between mb-4">
        <h2 className="text-3xl font-extrabold leading-snug md:text-4xl">
          {t("accessories.title.prefix")}
          <span className="inline-block mx-3 align-middle">
            <div className="w-10 h-1 mx-auto mt-3 rounded-sm bg-redS"></div>
          </span>
          <span className="text-redS">{t("accessories.title.suffix")}</span>
        </h2>

        {onViewAll ? (
          <button
            onClick={onViewAll}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            {t("common.viewAll")}
          </button>
        ) : (
          <Link
            to="/search"
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            {t("common.viewAll")}
          </Link>
        )}
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        {/* Big Card */}
        <Link
          to="/search"
          className="relative flex items-center justify-center h-56 col-span-2 row-span-2 transition-shadow bg-gray-100 border border-gray-200 rounded-2xl hover:shadow-lg md:h-[25rem]"
        >
          <img
            src={big.img}
            alt={t(big.titleKey)}
            className="max-h-[85%] object-contain drop-shadow-sm"
          />
          <div className="absolute w-full text-center bottom-3">
            <p className="text-base font-semibold text-gray-800 md:text-lg">
              {t(big.titleKey)}
            </p>
          </div>
        </Link>
        {/* Small Cards */}
        <div className="grid grid-cols-2 gap-4">
          {small.map((it) => (
            <Link
              key={it.id}
              to="/search"
              className="w-full md:w-auto relative flex items-center justify-center transition-shadow bg-gray-100 border border-gray-200 rounded-xl hover:shadow-md h-28 md:h-48"
            >
              <img
                src={it.img}
                alt={t(it.titleKey)}
                className="max-h-[70%] object-contain"
              />
              <div className="absolute w-full text-center bottom-2 ">
                <p className="text-[11px] md:text-xs font-bold tracking-wide text-gray-700 uppercase">
                  {t(it.titleKey)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
