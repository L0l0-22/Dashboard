import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from "../assets/logoWhite.png";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-r from-[#1E1E1E] to-[#3A3A3A] text-gray-300 mt-12">
      <div className="px-6 lg:px-24 py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
        {/* Logo & Description */}
        <div className="col-span-2">
          <NavLink to="/">
            <img src={logo} alt="QuickCart Logo" className="w-[150px] h-auto mb-3" />
          </NavLink>
          <p className="text-gray-300 text-sm max-w-sm leading-6 lg:leading-5">
            {t('footer.description')}
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-lg">{t('footer.products.title')}</h4>
          <ul className="space-y-2 text-gray-400">
            <li>{t('footer.products.shoes')}</li>
            <li>{t('footer.products.clothing')}</li>
            <li>{t('footer.products.accessories')}</li>
            <li>{t('footer.products.giftCards')}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-lg">{t('footer.shop.title')}</h4>
          <ul className="space-y-2 text-gray-400">
            <li>{t('footer.shop.newArrivals')}</li>
            <li>{t('footer.shop.bestSellers')}</li>
            <li>{t('footer.shop.releaseDates')}</li>
            <li>{t('footer.shop.sale')}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-lg">{t('footer.about.title')}</h4>
          <ul className="space-y-2 text-gray-400">
            <li>{t('footer.about.blog')}</li>
            <li>{t('footer.about.careers')}</li>
            <li>{t('footer.about.investors')}</li>
            <li>{t('footer.about.aboutUs')}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-lg">{t('footer.help.title')}</h4>
          <ul className="space-y-2 text-gray-400">
            <li>{t('footer.help.shipping')}</li>
            <li>{t('footer.help.returns')}</li>
            <li>{t('footer.help.orderStatus')}</li>
            <li>{t('footer.help.contacts')}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 py-4 px-2 lg:px-6 flex flex-col sm:flex-row justify-between items-center">
        <p>&copy; 2025 - {t('footer.rights')}</p>
        <div className="flex gap-6 mt-2 sm:mt-0 text-xs md:text-base">
          <a href="#" className="hover:text-redS">{t('footer.links.data')}</a>
          <a href="#" className="hover:text-redS">{t('footer.links.privacy')}</a>
          <a href="#" className="hover:text-redS">{t('footer.links.terms')}</a>
        </div>
        <div className="flex gap-4 mt-4 sm:mt-0 sm:ml-6 text-xl">
          <FaFacebookF className="hover:text-redS cursor-pointer" />
          <FaInstagram className="hover:text-redS cursor-pointer" />
          <FaTwitter className="hover:text-redS cursor-pointer" />
          <FaYoutube className="hover:text-redS cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
