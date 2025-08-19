import { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import mainImg from "../assets/img1.jpg";
import mini1 from "../assets/img7.jpg";
import mini2 from "../assets/img6.jpg";
import mini3 from "../assets/img2.jpg";
import mini4 from "../assets/img5.jpg";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavsTabs from "../components/NavbsTabs";
import RelatedProducts from "../components/RelatedProducts";

export default function ProductDetails() {
  const { t } = useTranslation();
  const product = {
    name: t("product.name"),
    oldPrice: 79.99,
    price: 64.99,
    discount: 19,
    rating: 4,
    reviews: 428,
    said: 1234,
    colors: [t("colors.white"), t("colors.black")],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [mini1, mini2, mini3, mini4],
    description: [
      t("product.desc1"),
      t("product.desc2"),
      t("product.desc3"),
    ],
  };

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(mainImg);
  const navigate = useNavigate();

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="w-full px-4 lg:px-24 py-8">
      <p className="text-lg text-gray-500 mb-6">
        {t("breadcrumb.home")} / {t("breadcrumb.shop")} / <span className="text-redS font-medium">{product.name}</span>
      </p>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex flex-col gap-4 lg:w-[50%] w-full">
          <div className="w-full border rounded-lg overflow-hidden">
            <img
              className="w-full max-h-[30.3rem] object-cover bg-white p-4"
              src={selectedImage}
              alt="Selected Product"
            />
          </div>
          <div className="flex gap-3 justify-center">
            {[mainImg, ...product.images].map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`border-2 rounded-md overflow-hidden cursor-pointer transition duration-150 ease-in-out ${
                  selectedImage === img ? "border-black" : "border-transparent hover:border-gray-300"
                }`}
              >
                <img src={img} alt={`thumbnail-${index}`} className="w-24 h-20 object-cover rounded" />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex flex-col gap-1">
          <h2 className="text-3xl font-semibold mb-1">{product.name}</h2>

          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) =>
                i < product.rating ? (
                  <AiFillStar key={i} className="text-yellow-400 text-lg" />
                ) : (
                  <AiOutlineStar key={i} className="text-gray-300 text-lg" />
                )
              )}
            </div>
            <span className="text-main font-medium">[{product.rating}]</span>
            <span className="text-redS font-medium">
              {product.reviews} {t("product.reviews")}
            </span>
            <span className="text-gray-500 font-medium">· {product.said} {t("product.said")}</span>
          </div>

          <div className="flex items-center gap-4 text-main mb-2">
            <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
            <p className="text-gray-400 line-through text-base">${product.oldPrice.toFixed(2)}</p>
            <span className="text-green-700 bg-green-100 rounded-full px-2 py-1 font-medium text-sm">
              {product.discount}% {t("product.off")}
            </span>
          </div>

          <div className="mb-3">
            <p className="text-base font-semibold mb-2">{t("product.available_colors")}</p>
            <div className="flex gap-2 flex-wrap">
              {product.colors.map((color, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-1 rounded border ${selectedColor === color ? "bg-redS text-white" : "bg-white text-main"}`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-2">
            <p className="text-base font-semibold mb-2">{t("product.available_sizes")}</p>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-3 py-1 rounded text-sm ${selectedSize === size ? "bg-redS text-white" : "bg-white text-black"}`}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="text-sm text-redS mt-2">{t("product.stock_notice")}</p>
          </div>

          <div className="flex items-center gap-4 my-4">
            <div className="flex items-center border rounded-lg px-2 py-1">
              <button onClick={decreaseQty} className="p-1">
                <FiMinus className="text-gray-600" />
              </button>
              <span className="px-3 font-medium">{quantity}</span>
              <button onClick={increaseQty} className="p-1">
                <FiPlus className="text-gray-600" />
              </button>
            </div>
            <button
              className="bg-main hover:bg-mainHover text-white px-6 py-2 rounded-lg text-sm font-semibold"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/cart`);
              }}
            >
              {t("buttons.add_to_cart")}
            </button>
            <button className="border border-gray-300 p-2 rounded-full">
              <BiHeart className="text-gray-600 hover:text-redS text-xl" />
            </button>
          </div>

          <div className="mb-3">
            <p className="text-base font-semibold mb-2">{t("product.description")}</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {product.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="mb-2">
            <p className="text-base font-semibold mb-2">{t("shipping.title")}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="border rounded-md p-3 flex items-center gap-2">
                <div className="bg-gray-100 rounded-full p-2">
                  <TbTruckDelivery size={20} className="text-redS" />
                </div>
                <div>
                  <p className="text-gray-500 mb-1 text-sm">{t("shipping.delivery")}</p>
                  <p className="font-medium text-xs">{t("shipping.location")}</p>
                </div>
              </div>
              <div className="border rounded-md p-3 flex items-center gap-2">
                <div className="bg-gray-100 rounded-full p-2">
                  <GiCardboardBoxClosed size={20} className="text-redS" />
                </div>
                <div className="w-full">
                  <p className="text-gray-500 mb-1 text-sm">{t("shipping.shipping")}</p>
                  <p className="font-medium text-xs">{t("shipping.international")}</p>
                </div>
              </div>
              <div className="border rounded-md p-3 flex items-center gap-2">
                <div className="bg-gray-100 rounded-full p-2">
                  <MdDateRange size={20} className="text-redS" />
                </div>
                <div>
                  <p className="text-gray-500 mb-1 text-sm">{t("shipping.arrive")}</p>
                  <p className="font-medium text-xs">{t("shipping.eta")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NavsTabs />
      <RelatedProducts />
    </div>
  );
}
