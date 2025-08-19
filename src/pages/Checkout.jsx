import React, { useState } from "react";
import visa from "../assets/Visa.png";
import Mastercard from "../assets/Mastercard.png";
import Nagad from "../assets/Nagad.png";
import { Link } from "react-router-dom";
import iphone from "../assets/iphone.png";
import watch from "../assets/watch.png";
import playstation from "../assets/playstation.png";
import { FiUser, FiMapPin, FiPhone, FiBookmark } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function Checkout() {
  const { t } = useTranslation();
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [showModal, setShowModal] = useState(false);
  const [tempAddress, setTempAddress] = useState({});
  const [address, setAddress] = useState({
    name: "",
    location: "",
    unitNumber: "",
    phone: "",
    landmark: "",
  });

  const handleTempChange = (e) => {
    setTempAddress({ ...tempAddress, [e.target.name]: e.target.value });
  };

  const handleOpenModal = () => {
    setTempAddress(address);
    setShowModal(true);
  };

  const handleCancel = () => {
    setTempAddress({});
    setShowModal(false);
  };

  const checkoutProducts = [
    {
      id: 1,
      name: t("products4.iphone.name"),
      brand: t("products4.iphone.brand"),
      color: t("products4.iphone.color"),
      quantity: 1,
      price: 1199.0,
      deliveryDate: t("deliveryDate", { date: "July 17, 2025" }),
      image: iphone,
    },
    {
      id: 2,
      name: t("products4.watch.name"),
      brand: t("products4.watch.brand"),
      color: t("products4.watch.color"),
      quantity: 1,
      price: 429.0,
      deliveryDate: t("deliveryDate", { date: "July 18, 2025" }),
      image: watch,
    },
    {
      id: 3,
      name: t("products4.playstation.name"),
      brand: t("products4.playstation.brand"),
      color: t("products4.playstation.color"),
      quantity: 1,
      price: 499.0,
      deliveryDate: t("deliveryDate", { date: "July 20, 2025" }),
      image: playstation,
    },
  ];

  return (
    <div className="px-6 lg:px-24 py-12 min-h-screen">
      <p className="text-lg text-gray-500 mb-4">
        {t("breadcrumbs.home")} / {t("breadcrumbs.shop")} /{" "}
        <span className="text-redS font-medium">{t("breadcrumbs.checkout")}</span>
      </p>
      <div className="flex flex-col lg:flex-row justify-between gap-10 mx-6">
        {/* Left Section */}
        <div className="w-full lg:w-2/3 space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">
              {t("email")}
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 px-4 py-2 rounded text-sm"
              placeholder={t("emailPlaceholder")}
            />
          </div>
          <div className="mb-6">
            <button
              onClick={handleOpenModal}
              className="bg-redS text-white px-4 py-2 rounded-lg font-medium"
            >
              {t("manageAddress")}
            </button>
            {address.name && (
              <div className="mt-4 text-sm text-gray-700 bg-gray-100 p-4 rounded-lg shadow-sm space-y-3">
                <div className="flex items-start gap-2">
                  <FiUser className="text-redS mt-0.5" />
                  <p>
                    <span className="font-semibold">{t("addressFields.name")}:</span> {address.name}
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <FiMapPin className="text-redS mt-0.5" />
                  <p>
                    <span className="font-semibold">{t("addressFields.address")}:</span> {address.location}, {address.unitNumber}
                  </p>
                </div>

                {address.landmark && (
                  <div className="flex items-start gap-2">
                    <FiBookmark className="text-redS mt-0.5" />
                    <p>
                      <span className="font-semibold">{t("addressFields.landmark")}:</span> {address.landmark}
                    </p>
                  </div>
                )}

                <div className="flex items-start gap-2">
                  <FiPhone className="text-redS mt-0.5" />
                  <p>
                    <span className="font-semibold">{t("addressFields.phone")}:</span> {address.phone}
                  </p>
                </div>
              </div>
            )}
            {showModal && (
              <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl">
                  <h3 className="text-lg font-semibold mb-4">{t("enterDeliveryAddress")}</h3>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setAddress(tempAddress);
                      setTempAddress({});
                      setShowModal(false);
                    }}
                  >
                    <div className="grid gap-4">
                      <input
                        type="text"
                        name="name"
                        value={tempAddress.name || ""}
                        onChange={handleTempChange}
                        placeholder={t("addressPlaceholders.name")}
                        className="border px-4 py-2 text-sm rounded w-full"
                        required
                      />
                      <input
                        type="text"
                        name="location"
                        value={tempAddress.location || ""}
                        onChange={handleTempChange}
                        placeholder={t("addressPlaceholders.location")}
                        className="border px-4 py-2 text-sm rounded w-full"
                        required
                      />
                      <input
                        type="text"
                        name="unitNumber"
                        value={tempAddress.unitNumber || ""}
                        onChange={handleTempChange}
                        placeholder={t("addressPlaceholders.unitNumber")}
                        className="border px-4 py-2 text-sm rounded w-full"
                        required
                      />
                      <input
                        type="text"
                        name="landmark"
                        value={tempAddress.landmark || ""}
                        onChange={handleTempChange}
                        placeholder={t("addressPlaceholders.landmark")}
                        className="border px-4 py-2 text-sm rounded w-full"
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={tempAddress.phone || ""}
                        onChange={handleTempChange}
                        placeholder={t("addressPlaceholders.phone")}
                        className="border px-4 py-2 text-sm rounded w-full"
                        required
                      />
                    </div>
                    <div className="flex justify-end mt-6 gap-3">
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="px-4 py-2 border rounded text-gray-600"
                      >
                        {t("cancel")}
                      </button>
                      <button
                        type="submit"
                        className="bg-redS text-white px-4 py-2 rounded font-medium"
                      >
                        {t("saveAddress")}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-3">{t("shippingMethod")}</h2>
            <select
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-main"
              defaultValue="standard"
            >
              <option value="standard">{t("shippingOptions.standard")}</option>
              <option value="express">{t("shippingOptions.express")}</option>
            </select>
          </div>
          <div className="space-y-6 text-sm">
            {checkoutProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between border rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="flex gap-5 items-start">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-32 w-24 object-contain"
                  />
                  <div className="space-y-1.5">
                    <p className="text-lg font-semibold text-main">{product.name}</p>
                    <p className="text-gray-500">
                      {t("productDetails.brand")}: <span className="text-gray-700">{product.brand}</span>
                    </p>
                    <p className="text-gray-500">
                      {t("productDetails.color")}: <span className="text-gray-700">{product.color}</span>
                    </p>
                    <p className="text-gray-500">
                      {t("productDetails.quantity")}: <span className="text-gray-700">{product.quantity}</span>
                    </p>
                    <p className="text-redS font-medium">{product.deliveryDate}</p>
                  </div>
                </div>

                {/* Right section: price */}
                <div className="text-lg font-bold text-gray-800 whitespace-nowrap">
                  ${(product.price * product.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right Section */}
        <div className="bg-gray-100 py-6 px-8 rounded-lg w-full h-fit lg:w-1/2">
          <h3 className="text-xl font-semibold mb-4">
            {t("orderSummary.title", { count: 3 })}
          </h3>
          <div className="mt-6">
            <div className="flex border border-gray-300 rounded overflow-hidden">
              <input
                type="text"
                placeholder={t("promoCodePlaceholder")}
                className="flex-1 px-3 py-2 text-sm outline-none"
              />
              <button className="bg-black text-white px-4 text-sm font-semibold">
                {t("apply")}
              </button>
            </div>
          </div>
          <div className="text-sm mt-6 space-y-2">
            <div className="flex justify-between">
              <span>{t("orderSummary.subtotal")}</span>
              <span>$162.00</span>
            </div>
            <div className="flex justify-between text-redS">
              <span>{t("orderSummary.savings")}</span>
              <span>-$16.20</span>
            </div>
            <div className="flex justify-between">
              <span>{t("orderSummary.taxes")}</span>
              <span>$16.20</span>
            </div>
            <div className="flex justify-between text-redS">
              <span>{t("orderSummary.shipping")}</span>
              <span>{t("orderSummary.free")}</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>{t("orderSummary.total")}</span>
              <span>$145.80</span>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-lg my-3">{t("payment.title")}</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center gap-4">
                <div>
                  <input
                    type="radio"
                    name="payment"
                    value="credit"
                    checked={paymentMethod === "credit"}
                    onChange={() => setPaymentMethod("credit")}
                    className="accent-redS mr-2"
                  />
                  <span>{t("payment.creditCard")}</span>
                </div>
                <div className="flex gap-2">
                  <img src={visa} alt="Visa" className="h-6 w-auto" />
                  <img src={Mastercard} alt="Mastercard" className="h-6 w-auto" />
                  <img src={Nagad} alt="Nagad" className="h-6 w-auto" />
                </div>
              </div>
              {paymentMethod === "credit" && (
                <>
                  <input
                    type="text"
                    placeholder={t("paymentFields.cardNumber")}
                    className="border px-4 py-2 text-sm rounded w-full"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder={t("paymentFields.expiryDate")}
                      className="border px-4 py-2 text-sm rounded"
                    />
                    <input
                      type="text"
                      placeholder={t("paymentFields.securityCode")}
                      className="border px-4 py-2 text-sm rounded"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder={t("paymentFields.cardName")}
                    className="border px-4 py-2 text-sm rounded w-full"
                  />
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="accent-redS" />
                    {t("paymentFields.useShippingAddress")}
                  </label>
                </>
              )}
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={() => setPaymentMethod("paypal")}
                  className="accent-redS"
                />
                <span>{t("payment.paypal")}</span>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  name="payment"
                  value="afterpay"
                  checked={paymentMethod === "afterpay"}
                  onChange={() => setPaymentMethod("afterpay")}
                  className="accent-redS"
                />
                <span>{t("payment.cod")}</span>
              </div>
            </div>
          </div>
          <Link
            to="/"
            className="bg-black text-white px-6 py-3 mt-6 flex justify-center w-full font-semibold rounded-lg"
          >
            {t("placeOrder")}
          </Link>
        </div>
      </div>
    </div>
  );
}