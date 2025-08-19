import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Brands({ items = [], titleLeft = "brands.titlePart1", titleRight = "brands.titlePart2" }) {
  const { t } = useTranslation();

  return (
    <div className="px-4 py-20 bg-white lg:px-20">
      <h2 className="flex items-center justify-center mb-8 text-3xl font-bold text-center">
        {t(titleLeft)}
        <div className="h-1 mx-2 border border-redS w-7 bg-redS mt-7"></div>
        <span className="text-redS">{t(titleRight)}</span>
      </h2>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 place-items-center">
        {items.map((brand, idx) => {
          const keyOrName = brand.key ?? brand.name; // support both
          const label = t(`brands.names.${keyOrName}`, { defaultValue: brand.name || keyOrName });
          return (
            <Link to="/search"
              key={idx}
              className="flex flex-col items-center justify-center p-6 text-center transition-all duration-300 bg-gray-100 rounded-full shadow-md hover:shadow-xl w-36 h-36"
            >
              <div className="flex items-center justify-center w-16 h-16 overflow-hidden">
                <img src={brand.img} alt={label} className="object-contain w-full h-full" />
              </div>
              <p className="mt-5 text-base font-semibold text-main">{label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
