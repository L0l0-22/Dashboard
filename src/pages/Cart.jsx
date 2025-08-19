import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import controllerImg from "../assets/img4.jpg";

export default function Cart() {
  const { t } = useTranslation();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "products2.dualsenseWireless",
      color: "White",
      size: "M",
      price: 64.99,
      quantity: 1,
      image: controllerImg,
    },
    {
      id: 2,
      name: "products2.dualsenseCharger",
      color: "White",
      size: "Standard",
      price: 29.99,
      quantity: 2,
      image: controllerImg,
    },
    {
      id: 3,
      name: "products2.pulse3D",
      color: "Midnight Black",
      size: "Standard",
      price: 99.99,
      quantity: 1,
      image: controllerImg,
    },
  ]);

  const updateQty = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.min(10, Math.max(1, item.quantity + delta)),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="px-6 lg:px-24 py-12 bg-gray-50 min-h-screen">
      <p className="text-lg text-gray-500 mb-4">
        {t("breadcrumbs2.home")} / {t("breadcrumbs2.shop")} / {" "}
        <span className="text-redS font-medium">{t("cart.title")}</span>
      </p>

      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-2/3 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col lg:flex-row gap-6"
            >
              <img
                src={item.image}
                alt={t(item.name)}
                className="w-28 h-28 object-contain"
              />
              <div className="flex-1">
                <h2 className="font-semibold text-lg hover:text-redS transition">
                  {t(item.name)}
                </h2>
                <p className="text-sm text-gray-500 my-1">
                  {t("cart.color")}: {item.color}
                </p>
                <p className="text-sm text-gray-500">
                  {t("cart.size")}: {item.size}
                </p>
                <div className="flex items-center mt-4 gap-3">
                  <div className="flex items-center border rounded-lg px-2">
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      className="p-1"
                    >
                      <FiMinus className="text-gray-600 hover:text-redS transition" />
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      className="p-1"
                    >
                      <FiPlus className="text-gray-600 hover:text-redS transition" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between items-end">
                <p className="text-lg font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <div className="flex justify-end items-end gap-4 w-full">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-500 bg-gray-100 rounded-full p-2 hover:text-redS font-medium"
                  >
                    <MdDeleteOutline size={26} />
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-500 bg-gray-100 rounded-full p-2 hover:text-redS font-medium"
                  >
                    <FiHeart size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 w-full h-fit lg:w-1/3 border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-main">
            {t("cart.summary")}
          </h3>
          <div className="flex justify-between text-sm text-gray-800 mb-2">
            <span>{t("cart.subtotal")}</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-800 mb-2">
            <span>{t("cart.save")}</span>
            <span className="text-redS">-${(subtotal * 0.1).toFixed(2)}</span>
          </div>
          <div className="border-t my-4"></div>
          <div className="flex justify-between text-lg font-semibold text-main mb-1">
            <span>{t("cart.total")}</span>
            <span>${(subtotal * 0.9).toFixed(2)}</span>
          </div>
          <p className="text-xs text-gray-400 mb-6">
            {t("cart.taxesNote")}
          </p>
          <div className="mb-6">
            <label className="text-sm font-semibold text-main mb-2 block">
              {t("cart.promo")}
            </label>
            <div className="flex justify-center items-center border border-gray-300 rounded overflow-hidden">
              <input
                type="text"
                placeholder={t("cart.promoPlaceholder")}
                className="flex-1 px-3 py-2 text-sm outline-none placeholder-gray-400 focus:ring-1 focus:ring-redS min-w-0"
              />
              <button className="bg-main text-white px-4 py-2 text-sm font-semibold hover:bg-mainHover">
                {t("cart.apply")}
              </button>
            </div>
          </div>
          <Link
            to="/checkout"
            className="w-full flex justify-center bg-main hover:bg-mainHover text-white py-3 text-sm font-semibold uppercase tracking-wide"
          >
            {t("cart.checkout")}
          </Link>
        </div>
      </div>
    </div>
  );
}
