import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useTranslation } from "react-i18next";

import rings from "../assets/rings.png";
import iphone from "../assets/iphone.png";
import headphones from "../assets/headphones.png";
import playstation from "../assets/playstation.png";
import speaker from "../assets/speaker.png";

export default function Wishlist() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: t("products.dualsenseWireless"),
      color: "White",
      size: "M",
      price: 64.99,
      image: speaker,
      rating: 4,
      reviews: 328,
      available: t("status.inStock"),
      isNew: true,
    },
    {
      id: 2,
      name: t("products.dualsenseCharger"),
      color: "White",
      size: "Standard",
      price: 29.99,
      image: rings,
      rating: 5,
      reviews: 122,
      available: t("status.only3"),
      isNew: false,
    },
    {
      id: 3,
      name: t("products.pulse3D"),
      color: "Midnight Black",
      size: "Standard",
      price: 99.99,
      image: headphones,
      rating: 4,
      reviews: 204,
      available: t("status.inStock"),
      isNew: false,
    },
    {
      id: 4,
      name: t("products.mediaRemote"),
      color: "White",
      size: "One Size",
      price: 24.99,
      image: iphone,
      rating: 3,
      reviews: 67,
      available: t("status.lowStock"),
      isNew: true,
    },
    {
      id: 5,
      name: t("products.hdCamera"),
      color: "Black",
      size: "Standard",
      price: 59.99,
      image: playstation,
      rating: 4,
      reviews: 180,
      available: t("status.inStock"),
      isNew: false,
    },
  ]);

  const removeItem = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="px-6 lg:px-24 py-12 bg-gray-50 min-h-screen">
      <p className="text-lg text-gray-500 mb-4">
        {t("breadcrumbs.home")} / {t("breadcrumbs.shop")} /{" "}
        <span className="text-redS font-medium">{t("wishlist.title")}</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {wishlistItems.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl p-4 shadow-sm border relative flex flex-col justify-between cursor-pointer hover:shadow-md transition"
            onClick={() => navigate(`/productdetails`)}
          >
            {product.isNew && (
              <span className="absolute top-3 left-3 bg-redS text-white text-xs px-2 py-1 rounded">
                {t("labels.new")}
              </span>
            )}
            <span
              className="absolute top-3 right-3 bg-gray-100 text-redS p-2 overflow-visible rounded-full cursor-pointer hover:text-red-600"
              onClick={(e) => {
                e.stopPropagation();
                removeItem(product.id);
              }}
            >
              <MdDeleteOutline size={24} />
            </span>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-4"
            />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-semibold mb-1 line-clamp-2">
                  {t(product.name)}
                </h3>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    <span key={index}>
                      {index < product.rating ? (
                        <AiFillStar className="text-yellow-400 text-xl" />
                      ) : (
                        <AiOutlineStar className="text-gray-300 text-xl" />
                      )}
                    </span>
                  ))}
                  <p className="text-sm text-gray-400 mb-1 ml-2">
                    ({product.reviews})
                  </p>
                </div>
                <p className="text-lg font-bold text-main">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-xs text-red-500 mt-1">
                  {t("wishlist.available")}: {product.available}
                </p>
              </div>
              <button
                className="mt-4 bg-main text-white text-sm font-semibold py-2 rounded hover:bg-mainHover transition"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/cart`);
                }}
              >
                {t("wishlist.addToCart")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
