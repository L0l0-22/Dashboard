import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsDash, BsPlus } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function MobileFiltersDrawer({
  drawerOpen,
  setDrawerOpen,
  selectedcategories5,
  setSelectedcategories5,
  selectedRatings,
  setSelectedRatings,
  selectedbrands5,
  setSelectedbrands5,
  price,
  setPrice,
  applyFilters,
  clearFilters,
  categoryKeys = [
    "categories5.electronics",
    "categories5.wearables",
    "categories5.homeEntertainment",
    "categories5.accessories",
    "categories5.homeAppliance",
    "categories5.fashion",
    "categories5.homeDecor"
  ],
  brandKeys = [
    "brands5.sony",
    "brands5.samsung",
    "brands5.fitpro",
    "brands5.apple",
    "brands5.urbanWear",
    "brands5.kitchenPro",
    "brands5.diamondCo",
    "brands5.decoStyle"
  ],
  minPrice = 0,
  maxPrice = 1500
}) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  const [openAccordion, setOpenAccordion] = React.useState("rating");

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? "" : section);
  };

  const toggleFilter = (value, list, setList) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleApply = () => {
    applyFilters?.();
    setDrawerOpen(false);
  };

  const handleClear = () => {
    clearFilters?.();
    setDrawerOpen(false);
  };
  const translatedCategories = categoryKeys.map((k) => t(k));
  const translatedBrands = brandKeys.map((k) => t(k));

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
        drawerOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={() => setDrawerOpen(false)}
    >
      <div
        className={`fixed top-0 ${isRTL ? "right-0" : "left-0"} min-h-100vh h-full w-4/5 md:max-w-sm bg-white shadow-xl transform transition-transform duration-300`}
        style={{
          transform: drawerOpen
            ? "translateX(0)"
            : `translateX(${isRTL ? "100%" : "-100%"})`
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b bg-white">
          <h4 className="text-lg font-bold text-primaryBlue">{t("filters.filter")}</h4>
          <button onClick={() => setDrawerOpen(false)} className="text-primaryBlue">
            <IoClose size={22} />
          </button>
        </div>

        <div className="h-[calc(100%-120px)] overflow-y-auto pb-4">
          {/* Rating */}
          <div className="bg-white p-4 border-b">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleAccordion("rating")}
            >
              <h3 className="font-semibold">{t("filters.rating")}</h3>
              {openAccordion === "rating" ? <BsDash /> : <BsPlus />}
            </div>

            {openAccordion === "rating" && (
              <div className="mt-3 space-y-2">
                {["5", "4", "3", "2"].map((r) => (
                  <label
                    key={r}
                    className="flex items-center gap-2 text-sm py-1 px-2 hover:bg-gray-100 rounded cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="accent-redS"
                      checked={selectedRatings.includes(r)}
                      onChange={() => toggleFilter(r, selectedRatings, setSelectedRatings)}
                    />
                    <span>
                      {[...Array(parseInt(r))].map((_, i) => (
                        <AiFillStar key={i} className="inline text-yellow-500" />
                      ))}{" "}
                      {t("filters.andUp")}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Category */}
          <div className="bg-white p-4 border-b">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleAccordion("category")}
            >
              <h3 className="font-semibold">{t("filters.category")}</h3>
              {openAccordion === "category" ? <BsDash /> : <BsPlus />}
            </div>

            {openAccordion === "category" && (
              <div className="mt-3 space-y-2">
                {translatedCategories.map((label) => (
                  <label
                    key={label}
                    className="flex items-center gap-2 text-sm py-1 px-2 hover:bg-gray-100 rounded cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="accent-redS"
                      checked={selectedcategories5.includes(label)}
                      onChange={() =>
                        toggleFilter(label, selectedcategories5, setSelectedcategories5)
                      }
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price */}
          <div className="bg-white p-4 border-b">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleAccordion("price")}
            >
              <h3 className="font-semibold">{t("filters.price")}</h3>
              {openAccordion === "price" ? <BsDash /> : <BsPlus />}
            </div>

            {openAccordion === "price" && (
              <div className="mt-3">
                <input
                  type="range"
                  className="w-full accent-redS"
                  min={minPrice}
                  max={maxPrice}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>{t("filters.minPrice")}</span>
                  <span>{t("filters.currentPrice", { value: price })}</span>
                </div>
              </div>
            )}
          </div>

          {/* Brand */}
          <div className="bg-white p-4 border-b">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleAccordion("brand")}
            >
              <h3 className="font-semibold">{t("filters.brand")}</h3>
              {openAccordion === "brand" ? <BsDash /> : <BsPlus />}
            </div>

            {openAccordion === "brand" && (
              <div className="mt-3 space-y-2">
                {translatedBrands.map((label) => (
                  <label
                    key={label}
                    className="flex items-center gap-2 text-sm py-1 px-2 hover:bg-gray-100 rounded cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="accent-redS"
                      checked={selectedbrands5.includes(label)}
                      onChange={() =>
                        toggleFilter(label, selectedbrands5, setSelectedbrands5)
                      }
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="sticky bottom-0 border-t p-4 flex gap-3">
          <button
            onClick={handleClear}
            className="flex-1 py-2 rounded font-medium border border-gray-300 text-gray-700"
          >
            {t("filters.clear")}
          </button>
          <button
            onClick={handleApply}
            className="flex-1 py-2 rounded font-medium bg-redS text-white"
          >
            {t("filters.apply")}
          </button>
        </div>
      </div>
    </div>
  );
}
