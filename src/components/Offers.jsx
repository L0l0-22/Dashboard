import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

/**
 * i18n-ready Offers section
 * - Left: headline/discount/subtext/CTA (defaults use i18n)
 * - Right: grid of offer cards
 *
 * Props (all optional):
 * - headline, discount, subtext, ctaText: strings (override i18n)
 * - onCtaClick: () => void
 * - items: [{
 *     id, image,
 *     title,            // plain string (optional)
 *     titleKey,         // i18n key like "offers.items.tomato" (optional)
 *     price, oldPrice,  // strings (e.g., "EGP 39.99")
 *     badge,            // plain string (optional)
 *     badgeKey          // i18n key like "offers.badges.limited" (optional)
 *   }]
 */
export default function Offers({
  headline,
  discount,
  subtext,
  ctaText,
  onCtaClick = () => {},
  items = [],
}) {
  const { t } = useTranslation();

  const _headline = headline ?? t("offers.headline");
  const _discount = discount ?? t("offers.discount");
  const _subtext  = subtext  ?? t("offers.subtext");
  const _ctaText  = ctaText  ?? t("offers.cta");

  return (
    <section className="w-full bg-gray-100">
      <div className="max-w-[90%] mx-auto py-12">
        <div className="overflow-hidden">
          <div className="grid grid-cols-12 gap-0">
            {/* Left panel */}
            <div className="col-span-12 p-8 space-y-6 lg:col-span-4 lg:p-10">
              <p className="text-xl font-semibold tracking-wide text-main">
                {_headline}
              </p>
              <h2 className="text-[5.5rem] leading-[1.05] font-extrabold text-redS">
                {_discount}
              </h2>
              <p className="text-xl font-semibold text-main">{_subtext}</p>
              <button
                onClick={onCtaClick}
                className="inline-flex items-center justify-center px-6 py-3 mt-8 font-semibold text-white transition rounded-lg bg-main hover:bg-mainHover"
                aria-label={_ctaText}
              >
                {_ctaText}
              </button>
            </div>

            {/* Right cards */}
            <div className="col-span-12 p-6 lg:col-span-8 lg:p-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {items.map((it) => {
                  const title =
                    (it.titleKey && t(it.titleKey, it.title ?? "")) ||
                    it.title ||
                    "";
                  const badge =
                    (it.badgeKey && t(it.badgeKey, it.badge ?? "")) ||
                    it.badge ||
                    "";

                  return (
                    <div
                      key={it.id}
                      className="relative p-5 transition bg-white border border-gray-200 shadow-xl rounded-2xl hover:shadow-2xl overflow-hidden"
                    >
                      {badge && (
                        <div className="absolute top-1 -left-8">
                          <div className="px-9 py-1 pr-20 text-xs font-bold text-white transform -rotate-45 shadow-md bg-red-600">
                            {badge}
                          </div>
                        </div>
                      )}

                      <Link
                        to="/productdetails"
                        className="flex items-center justify-center h-52"
                      >
                        <img
                          src={it.image}
                          alt={title}
                          className="object-contain max-h-36"
                          loading="lazy"
                        />
                      </Link>

                      <div className="flex items-center justify-between mt-4">
                        <h3 className="text-sm font-medium text-main line-clamp-2">
                          {title}
                        </h3>
                        <div className="mt-1 text-end">
                          <span className="text-base font-extrabold text-redS">
                            {it.price}
                          </span>
                          {it.oldPrice && (
                            <span className="ml-1 text-xs text-gray-400 line-through">
                              {it.oldPrice}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
