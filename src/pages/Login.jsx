import React from "react";
import { Link, useNavigate } from "react-router-dom";
import loginimg from "../assets/login.png";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate(); 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/"); 
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="hidden lg:block lg:w-1/2 relative bg-beige">
        <img
          src={loginimg}
          alt={t("loginImageAlt")}
          className="w-full h-screen object-cover lg:h-screen"
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:my-0 my-auto">
        <div className="max-w-md w-full">
          <Link to="/">
            <img src={logo} alt={t("logoAlt")} className="w-72 mb-12 mx-auto" />
          </Link>
          <h5 className="text-4xl font-semibold mb-2 text-redS">
            {t("login2.title")}
          </h5>
          <h5 className="text-gray-600 mb-9">
            {t("login2.subtitle")}
          </h5>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t("login2.emailOrPhone")}
              </label>
              <input
                type="text"
                id="email"
                placeholder={t("login2.emailOrPhonePlaceholder")}
                className="w-full h-12 border border-gray-300 rounded px-3"
                required
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t("login2.password")}
              </label>
              <input
                type="password"
                id="password"
                placeholder={t("login2.passwordPlaceholder")}
                className="w-full h-12 border border-gray-300 rounded px-3"
                required
              />
            </div>

            <div className="flex justify-end text-sm mb-6">
              <Link to="/forgetpassword" className="text-redS hover:underline">
                {t("login2.forgotPassword")}
              </Link>
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="w-full h-12 bg-main hover:bg-mainHover text-white font-bold rounded"
              >
                {t("login2.button")}
              </button>
            </div>

            <div className="text-center text-sm">
              <p>
                {t("login2.noAccount")}
                <Link to="/register" className="text-redS hover:underline ml-1">
                  {t("login2.registerHere")}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}