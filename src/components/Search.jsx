/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsPlus, BsDash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import img1 from "../assets/headphones.png";
import img2 from "../assets/playstation.png";
import img3 from "../assets/speaker.png";
import img4 from "../assets/iphone.png";
import img5 from "../assets/men.png";
import img6 from "../assets/rings.png";
import img7 from "../assets/flamingo.png";
import img8 from "../assets/kitchen2.png";
import banner from "../assets/banner.avif";
import MobileFiltersDrawer from "./MobileFiltersDrawer";

export default function Search() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const products5 = [
    {
      id: 1,
      nameKey: "products5.p1.name",
      byKey: "products5.p1.by",
      rateKey: "products5.p1.rate",
      image: img1,
      price: 199.99,
      oldPrice: 249.99,
      rating: 5,
      available: "80/100",
      categoryKey: "categories5.electronics",
      best: true,
    },
    {
      id: 2,
      nameKey: "products5.p2.name",
      byKey: "products5.p2.by",
      rateKey: "products5.p2.rate",
      image: img2,
      price: 79.99,
      oldPrice: 129.99,
      rating: 4,
      available: "60/100",
      categoryKey: "categories5.wearables",
    },
    {
      id: 3,
      nameKey: "products5.p3.name",
      byKey: "products5.p3.by",
      rateKey: "products5.p3.rate",
      image: img3,
      price: 499.99,
      oldPrice: 699.99,
      rating: 5,
      available: "90/100",
      categoryKey: "categories5.homeEntertainment",
      best: true,
    },
    {
      id: 4,
      nameKey: "products5.p4.name",
      byKey: "products5.p4.by",
      rateKey: "products5.p4.rate",
      image: img4,
      price: 1299.99,
      oldPrice: 1399.99,
      rating: 5,
      available: "50/100",
      categoryKey: "categories5.electronics",
      best: true,
    },
    {
      id: 5,
      nameKey: "products5.p5.name",
      byKey: "products5.p5.by",
      rateKey: "products5.p5.rate",
      image: img5,
      price: 75.0,
      oldPrice: 99.0,
      rating: 4,
      available: "60/100",
      categoryKey: "categories5.fashion",
    },
    {
      id: 6,
      nameKey: "products5.p6.name",
      byKey: "products5.p6.by",
      rateKey: "products5.p6.rate",
      image: img6,
      price: 300.0,
      oldPrice: 350.0,
      rating: 4,
      available: "12/100",
      categoryKey: "categories5.accessories",
    },
    {
      id: 7,
      nameKey: "products5.p7.name",
      byKey: "products5.p7.by",
      rateKey: "products5.p7.rate",
      image: img7,
      price: 45.0,
      oldPrice: 60.0,
      rating: 5,
      available: "50/100",
      categoryKey: "categories5.homeDecor",
    },
    {
      id: 8,
      nameKey: "products5.p8.name",
      byKey: "products5.p8.by",
      rateKey: "products5.p8.rate",
      image: img8,
      price: 130.0,
      oldPrice: 179.99,
      rating: 3,
      available: "40/100",
      categoryKey: "categories5.homeAppliance",
    },
  ];
  const [openAccordion, setOpenAccordion] = useState("category");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [price, setPrice] = useState(500);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedcategories5, setSelectedcategories5] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedbrands5, setSelectedbrands5] = useState([]);
  const [filteredproducts5, setFilteredproducts5] = useState(products5);

  const toggleFilter = (value, filterList, setFilterList) => {
    setFilterList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const applyFilters = () => {
    const filtered = products5.filter((product) => {
      const categoryText = t(product.categoryKey);
      const brandText = t(product.byKey);

      const matchCategory =
        selectedcategories5.length === 0 ||
        selectedcategories5.includes(categoryText);
      const matchRating =
        selectedRatings.length === 0 ||
        selectedRatings.includes(product.rating.toString());
      const matchBrand =
        selectedbrands5.length === 0 || selectedbrands5.includes(brandText);
      const matchPrice = product.price <= parseFloat(price);

      return matchCategory && matchRating && matchBrand && matchPrice;
    });
    setFilteredproducts5(filtered);
  };

  const clearFilters = () => {
    setSelectedcategories5([]);
    setSelectedRatings([]);
    setSelectedbrands5([]);
    setPrice(1500);
    setFilteredproducts5(products5);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? "" : section);
  };

  const updatePrice = (value) => setPrice(value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Category and brand lists use translated labels5
  const categoryKeys = [
    "categories5.electronics",
    "categories5.wearables",
    "categories5.homeEntertainment",
    "categories5.accessories",
    "categories5.homeAppliance",
    "categories5.fashion",
    "categories5.homeDecor",
  ];

  const brandKeys = [
    "brands5.sony",
    "brands5.samsung",
    "brands5.fitpro",
    "brands5.apple",
    "brands5.urbanWear",
    "brands5.kitchenPro",
    "brands5.diamondCo",
    "brands5.decoStyle",
  ];


  return (
    <div className="px-6 lg:px-24 mt-14">
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-between px-12">
        <p className="text-lg text-gray-500">
          {t("common5.home")} / {t("common5.shop")} /{" "}
          <span className="text-redS font-medium">
            {t("breadcrumb5.search")}
          </span>
        </p>
        <div className="relative inline-block text-left" ref={dropdownRef}>
          <div className="flex justify-end gap-4">
            <div className="w-48 relative">
              <select className="appearance-none w-full px-3 py-2 rounded-md text-xs lg:text-sm font-medium shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryGreen focus:border-transparent bg-white text-gray-700">
                <option value="">{t("sort.label")}</option>
                <option value="most-reviewed">{t("sort.mostReviewed")}</option>
                <option value="most-relevant">{t("sort.mostRelevant")}</option>
                <option value="highest-rated">{t("sort.highestRated")}</option>
                <option value="newest">{t("sort.newest")}</option>
              </select>
              <div
                className={`absolute inset-y-0 ${
                  isRTL ? "left-2" : "right-2"
                } flex items-center pointer-events-none text-gray-500 text-sm`}
              >
                ▼
              </div>
            </div>

            <MobileFiltersDrawer
              drawerOpen={drawerOpen}
              setDrawerOpen={setDrawerOpen}
              selectedcategories5={selectedcategories5}
              setSelectedcategories5={setSelectedcategories5}
              selectedRatings={selectedRatings}
              setSelectedRatings={setSelectedRatings}
              selectedbrands5={selectedbrands5}
              setSelectedbrands5={setSelectedbrands5}
              price={price}
              setPrice={setPrice}
              applyFilters={applyFilters}
              clearFilters={clearFilters}
              // Optional: you can also translate inside MobileFiltersDrawer similarly
            />

            <button className="block lg:hidden" onClick={() => setDrawerOpen(true)}>
              <MdOutlineDashboard size={32} className="text-primaryGreen" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row px-4 py-6 gap-6">
        {/* Sidebar Filters */}
        <div className="w-full hidden lg:block lg:w-1/4 space-y-4">
          {/* Rating */}
          <div className="bg-white p-4 rounded shadow">
            <div
              className="flex justify-between items-center cursor-pointer"
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
                      checked={selectedRatings.includes(r)}
                      onChange={() => toggleFilter(r, selectedRatings, setSelectedRatings)}
                      className="accent-redS"
                    />
                    <span>
                      {[...Array(parseInt(r))].map((_, i) => (
                        <AiFillStar key={i} className="text-yellow-500 inline" />
                      ))}{" "}
                      {t("filters.andUp")}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Category */}
          <div className="bg-white p-4 rounded shadow">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion("category")}
            >
              <h3 className="font-semibold">{t("filters.category")}</h3>
              {openAccordion === "category" ? <BsDash /> : <BsPlus />}
            </div>
            {openAccordion === "category" && (
              <div className="mt-3 space-y-2">
                {categoryKeys.map((k) => {
                  const label = t(k);
                  return (
                    <label
                      key={k}
                      className="flex items-center gap-2 text-sm py-1 px-2 hover:bg-gray-100 rounded cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedcategories5.includes(label)}
                        onChange={() => toggleFilter(label, selectedcategories5, setSelectedcategories5)}
                        className="accent-redS"
                      />
                      <span>{label}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>

          {/* Price */}
          <div className="bg-white p-4 rounded shadow">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion("price")}
            >
              <h3 className="font-semibold">{t("filters.price")}</h3>
              {openAccordion === "price" ? <BsDash /> : <BsPlus />}
            </div>
            {openAccordion === "price" && (
              <div className="mt-3">
                <input
                  type="range"
                  min="0"
                  max="1500"
                  value={price}
                  onChange={(e) => updatePrice(e.target.value)}
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>{t("filters.minPrice", { value: 0 })}</span>
                  <span>{t("filters.currentPrice", { value: price })}</span>
                </div>
              </div>
            )}
          </div>

          {/* Brand */}
          <div className="bg-white p-4 rounded shadow">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion("brand")}
            >
              <h3 className="font-semibold">{t("filters.brand")}</h3>
              {openAccordion === "brand" ? <BsDash /> : <BsPlus />}
            </div>
            {openAccordion === "brand" && (
              <div className="mt-3 space-y-2">
                {brandKeys.map((k) => {
                  const label = t(k);
                  return (
                    <label
                      key={k}
                      className="flex items-center gap-2 text-sm py-1 px-2 hover:bg-gray-100 rounded cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedbrands5.includes(label)}
                        onChange={() => toggleFilter(label, selectedbrands5, setSelectedbrands5)}
                      />
                      <span>{label}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex items-center justify-center mt-4 gap-4">
            <button
              onClick={applyFilters}
              className="w-full bg-redS hover:bg-red-700 text-white py-2  rounded font-semibold"
            >
              {t("filters.apply")}
            </button>
            <button
              onClick={clearFilters}
              className="w-full bg-gray-200 hover:bg-gray-300 text-main py-2 rounded font-semibold"
            >
              {t("filters.clear")}
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full lg:w-3/4">
          <img src={banner} className="mb-5 rounded-lg" alt="" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {filteredproducts5.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl p-4 shadow-sm border relative flex flex-col justify-between cursor-pointer hover:shadow-md transition"
                onClick={() => navigate(`/productdetails`)}
              >
                {product.best && (
                  <span className="absolute top-3 left-3 bg-gray-400 text-white text-sm px-2 py-1 rounded font-medium">
                    {t("badges.bestSeller")}
                  </span>
                )}
                <span
                  className="absolute top-3 right-3 bg-gray-100 text-gray-700 p-2 rounded-full hover:text-red-500"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaRegHeart size={18} />
                </span>

                <img
                  src={product.image}
                  alt={t(product.nameKey)}
                  className="w-full h-40 object-contain mb-4"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-semibold mb-1 line-clamp-2">
                      {t(product.nameKey)}
                    </h3>

                    <p className="text-xs text-gray-500 mb-1">
                      {t("labels5.byBrand", { brand: t(product.byKey) })}
                    </p>

                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < product.rating ? (
                            <AiFillStar className="text-yellow-400 text-sm" />
                          ) : (
                            <AiOutlineStar className="text-gray-300 text-sm" />
                          )}
                        </span>
                      ))}
                      <p className="text-sm text-gray-400 ml-2">
                        ({t(product.rateKey)})
                      </p>
                    </div>

                    <p className="text-lg font-bold text-main">
                      ${product.price.toFixed(2)}
                    </p>
                    <p className="text-xs text-red-500 mt-1">
                      {t("labels5.available", { value: product.available })}
                    </p>
                  </div>

                  <button
                    className="mt-4 bg-main text-white text-sm font-semibold py-2 rounded hover:bg-mainHover transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/cart");
                    }}
                  >
                    {t("actions.addToCart")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
