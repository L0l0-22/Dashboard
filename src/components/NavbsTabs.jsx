import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DescriptionContent from './DescriptionContent';
import ReviewsContent from './ReviewsContent';

const NavsTabs = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('overview');

  const getTabClass = (tabId) => {
    const baseClass = "inline-block p-4 border-b-2 rounded-t-lg";
    const inactiveClass = "dark:border-transparent text-gray-700 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300";
    const activeClass = "text-redS hover:text-redS dark:text-blue-500 dark:hover:text-blue-500 border-redS dark:border-blue-500";

    return `${baseClass} ${activeTab === tabId ? activeClass : inactiveClass}`;
  };

  return (
    <div className="my-4">
      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px font-medium text-center" role="tablist">
          <li className="me-2" role="presentation">
            <button
              className={getTabClass('overview')}
              id="Product-Overview-tab"
              type="button"
              role="tab"
              onClick={() => setActiveTab('overview')}
            >
              {t('tabs.product_overview')}
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={getTabClass('reviews')}
              id="Product-Ratings-Reviews-tab"
              type="button"
              role="tab"
              onClick={() => setActiveTab('reviews')}
            >
              {t('tabs.product_reviews')}
            </button>
          </li>
        </ul>
      </div>

      {/* Tab Contents */}
      <div className="w-[80%] mx-auto md:w-full mt-5">
        {activeTab === 'overview' && <DescriptionContent />}
        {activeTab === 'reviews' && <ReviewsContent />}
      </div>
    </div>
  );
};

export default NavsTabs;
