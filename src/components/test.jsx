import { useState } from "react";
import { TfiReload } from "react-icons/tfi";
import { TbTruckDelivery } from "react-icons/tb";
import { Heart } from "lucide-react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import full from "../assets/images/image (4).png";
import mini1 from "../assets/images/image (5).png";
import mini2 from "../assets/images/image (6).png";
import mini3 from "../assets/images/image (7).png";
import mini4 from "../assets/images/image (8).png";
import SectionHeader from "../components/SectionHeader";
import ProductCard from "../components/ProductCard";
import keyboard from "../assets/images/keyboard-Photoroom.png";
import LCD from "../assets/images/LCD-Photoroom.png";
import play from "../assets/images/playHome-Photoroom.png";
import soundwave from "../assets/images/sound-Photoroom.png";

const products = [
    {
        id: 1,
        name: "HAVIT HV-G92 Gamepad",
        price: 129.99,
        oldPrice: 159.99,
        rating: 4,
        rate: 88,
        image: play,
        sale: 40,
    },
    {
        id: 2,
        name: "AK-900 Wired Keyboard",
        price: 960,
        oldPrice: 1160,
        rating: 4,
        rate: 88,
        image: keyboard,
        sale: 40,
    },
    {
        id: 3,
        name: "IPS LCD Gaming Monitor",
        price: 370,
        oldPrice: 400,
        rating: 4,
        rate: 88,
        image: LCD,
        sale: 40,
    },
    {
        id: 7,
        name: "RGB liquid CPU Cooler",
        price: 370,
        oldPrice: 400,
        rating: 4,
        rate: 88,
        image: soundwave,
    },
];

const product = {
    name: "Havic HV G-92 Gamepad",
    price: "$192.00",
    rating: 4,
    reviews: 150,
    inStock: true,
    description:
        "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    colors: ["#bfdbfe ", "#fecaca"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [mini1, mini2, mini3, mini4],
};

export default function ProductDetails() {
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState("M");
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-32 p-4 md:p-8 w-full md:w-[90%] mx-auto">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="hidden md:flex flex-col gap-2">
                        {product.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="thumbnail"
                                className="w-24 md:w-48 rounded-sm cursor-pointer object-cover h-full"
                            />
                        ))}
                    </div>
                    <div className="w-full h-full md:hidden block lg:block">
                        <img src={full} alt="Product" className="object-cover w-full" />
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-full md:w-[50%] mt-4 md:mt-0">
                    <h2 className="text-2xl md:text-3xl font-bold">{product.name}</h2>
                    <div className="flex items-center gap-2">
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
                        </div>
                        <span className="text-gray-500">({product.reviews} Reviews)</span>
                        <span className="text-green-400 font-medium">
                            {product.inStock ? "In Stock" : "Out of Stock"}
                        </span>
                    </div>
                    <p className="text-xl font-semibold">{product.price}</p>
                    <p className="text-gray-600">{product.description}</p>
                    <div>
                        <span className="font-semibold">Colours:</span>
                        {product.colors.map((color, index) => (
                            <button
                                key={index}
                                className={`w-6 h-6 rounded-full mx-1 border-2 ${
                                    selectedColor === color ? "border-black" : "border-gray-100"
                                }`}
                                style={{ backgroundColor: color }}
                                onClick={() => setSelectedColor(color)}
                            />
                        ))}
                    </div>
                    <div className="space-y-12">
                        <div>
                            <p className="font-semibold mb-7">Size:</p>
                            <div className="flex gap-2 mt-1">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        className={`border px-4 py-1 rounded ${
                                            selectedSize === size ? "bg-red-500 text-white" : "bg-white"
                                        }`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="border border-black rounded-sm w-1/3 flex justify-between">
                                <button
                                    className="border lg:px-4 p-1 lg:py-[6px] text-lg hover:bg-red-500 hover:text-white"
                                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                >
                                    -
                                </button>
                                <span className="lg:px-4 p-1 lg:py-[6px]">{quantity}</span>
                                <button
                                    className="border lg:px-4 p-1 lg:py-[6px] text-lg hover:bg-red-500 hover:text-white"
                                    onClick={() => setQuantity((q) => q + 1)}
                                >
                                    +
                                </button>
                            </div>
                            <button className="bg-red-500 w-[40%] text-white p-2 lg:px-6 lg:py-2 rounded">
                                Buy Now
                            </button>
                            <button className="border px-4 py-2 rounded">
                                <Heart />
                            </button>
                        </div>
                        <hr />
                        <div className="border border-black rounded-md">
                            <table className="w-full">
                                <tbody>
                                    <tr>
                                        <td className="p-4 flex">
                                            <TbTruckDelivery className="text-4xl mr-5" />
                                            <div className="flex-col flex">
                                                <span className="items-center text-sm font-medium">Free Delivery </span>
                                                <a href="#" className="text-xs underline">
                                                    Enter postal code
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-1 w-full">
                                            <hr className="w-full border-t border-gray-300" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 flex">
                                            <TfiReload className="text-3xl mr-5" />
                                            <div className="flex-col flex">
                                                <span className="items-center text-sm font-medium">Return Delivery</span>
                                                <a href="#" className="text-xs underline">
                                                    Free 30 Days Returns.Details
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-14">
                <div className="w-[88%] mx-auto my-14">
                    <SectionHeader title="Related Items" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] lg:max-w-7xl mx-auto">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
}