import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiHeart, FiShoppingBag, FiUser } from "react-icons/fi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="bg-white shadow-sm w-full z-50 h-40 md:h-[65px]">
      <div className="flex flex-col md:flex-row justify-between items-center md:px-4 lg:px-20 py-3">
        <div className="flex items-center lg:gap-6 w-full justify-between md:w-auto md:justify-normal">
          <NavLink to="/">
            <img src={logo} alt="QuickCart Logo" className="w-[150px] h-auto" />
          </NavLink>
          <button className="mt-2 text-gray-600 font-medium whitespace-nowrap flex items-center text-xs lg:text-lg hover:text-redS transition-colors duration-200 group">
            <FaLocationDot className="mr-1 text-redS group-hover:scale-110 transition-transform duration-200" size={22} />
            {t("deliver_to")}
            <span className="font-semibold text-black group-hover:text-redS ml-1 transition-colors duration-200">
              {t("location")}
            </span>
            <MdOutlineArrowDropDown size={22} className="text-black group-hover:text-redS transition-colors duration-200" />
          </button>
        </div>

        <div className="flex flex-1 lg:max-w-2xl mx-3 mt-1 lg:mt-0 w-full px-2 md:px-0">
          <input
            type="text"
            placeholder={t("search_placeholder")}
            className="w-full border border-gray-300 px-3 lg:px-4 py-1 lg:py-2 ltr:rounded-l-3xl rtl:rounded-r-3xl focus:outline-none"
          />
          <button
            onClick={() => navigate("/search")}
            className="bg-redS text-white px-3 lg:px-6 py-1 lg:py-2 ltr:rounded-r-3xl rtl:rounded-l-3xl font-medium text-lg"
          >
            {t("search_button")}
          </button>
        </div>

        <div className="flex items-center justify-end md:justify-normal mr-9 md:mr-0 gap-4 md:gap-1 lg:gap-4 text-gray-700 mt-3 md:mt-0 w-full md:w-auto">
          <button
            onClick={changeLanguage}
            className="lg:text-lg text-lg md:text-sm font-medium hover:text-gray-500 flex items-center"
          >
            {t("arabic")}
          </button>

          <FiHeart
            onClick={() => navigate("/wishlist")}
            className="bg-gray-100 rounded-full p-2 lg:p-2 md:p-1 md:w-[27px] md:h-[24px] lg:w-11 lg:h-10 w-11 h-10 cursor-pointer hover:text-redS"
          />
          <FiShoppingBag
            onClick={() => navigate("/cart")}
            className="bg-gray-100 rounded-full p-2 lg:p-2 md:p-1 md:w-[27px] md:h-[24px] lg:w-11 lg:h-10 w-11 h-10 cursor-pointer hover:text-gray-500"
          />
          <button
            onClick={() => navigate("/login")}
            className="md:text-xs text-lg lg:text-lg font-medium text-gray-700 flex items-center bg-gray-100 rounded-full px-2 md:px-2 lg:px-4 py-1 h-10 md:h-6 lg:h-10 hover:text-gray-500"
          >
            {t("login")}
            <FiUser className="ml-2 md:w-4 md:h-4 lg:w-6 lg:h-6 w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
