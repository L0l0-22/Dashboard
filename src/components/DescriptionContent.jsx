import React from 'react';
import { useTranslation } from 'react-i18next';

export default function DescriptionContent() {
  const { t } = useTranslation();

  const leftSpecs = [
    { label: t("product2.weight"), value: "500 g" },
    { label: t("product2.color"), value: t("product2.white") },
    { label: t("product2.length"), value: "6.9 cm" },
    { label: t("product2.width"), value: "18.8 cm" },
    { label: t("product2.boxContents"), value: t("product2.controller") },
    { label: t("product2.modelNumber"), value: "CFI-ZCT1J/CFI-ZCT1G/CFI-ZCT1NA/CFI-ZCP1/CFI-ZCT1W" },
  ];

  const rightSpecs = [
    { label: t("product2.version"), value: t("product2.ksa") },
    { label: t("product2.connection"), value: t("product2.wireless") },
    { label: t("product2.height"), value: "18.9 cm" },
    { label: t("product2.consoleType"), value: "PlayStation 5 (PS5)" },
    { label: t("product2.features"), value: t("product2.microphoneAssistant") },
    { label: t("product2.modelName"), value: "DualSense" },
  ];

  return (
    <div id="content1" className="text-gray-800 leading-relaxed space-y-6 mt-5">
      {/* Long Description */}
      <div>
        <h2 className="text-2xl font-bold">{t("product2.overviewTitle")}</h2>
        <p className="mt-4">{t("product2.overview1")}</p>
        <p className="mt-2">{t("product2.overview2")}</p>
      </div>

      {/* Highlights */}
      <div>
        <h2 className="text-xl font-semibold">{t("product2.featuresTitle")}</h2>
        <ul className="list-disc marker:text-redS pl-6 mt-2 space-y-2">
          <li>{t("product2.feature1")}</li>
          <li>{t("product2.feature2")}</li>
          <li>{t("product2.feature3")}</li>
          <li>{t("product2.feature4")}</li>
          <li>{t("product2.feature5")}</li>
        </ul>
      </div>

      {/* Specifications */}
      <div>
        <h2 className="text-xl font-semibold mt-6">{t("product2.specifications")}</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[leftSpecs, rightSpecs].map((specList, i) => (
            <div key={i} className="rounded-lg border border-gray-200 overflow-hidden">
              {specList.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between px-4 py-3 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                >
                  <span className="text-gray-600 text-sm font-medium w-1/2">{item.label}</span>
                  <span className="text-sm font-semibold text-gray-900 w-1/2 text-right">{item.value}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
