import React from 'react'
import watch from "../assets/watch.png"
import men from "../assets/men.png"
import rings from "../assets/rings.png"

export default function Categories() {
    return (
        <div className='max-w-[70rem] mx-auto'>
            <div className=' w-full px-4 flex justify-center flex-nowrap gap-8'>
                <div className="w-[350px] bg-white rounded-xl shadow-2xl p-6 flex justify-between items-center">
                    <div className="max-w-[50%] space-y-2">
                        <p className="w-fit text-xs font-semibold px-3 py-1 text-[#b25d5d] bg-[#ffe6e5] rounded-tr-2xl rounded-bl-2xl">
                        Summer Sale -20%
                        </p>
                        <h2 className="text-xl font-extrabold text-black leading-snug">
                        Smart Watch <br />
                        Deals 
                        </h2>
                        <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500 line-through">$150.00</span>
                        <span className="text-base font-bold text-[#FF3C3C]">$130.00</span>
                        </div>
                        <button className="bg-main text-white text-sm font-semibold px-4 py-2 rounded">
                        Shop Now
                        </button>
                    </div>
                    <div className="max-w-[45%]">
                        <img
                        src={watch}
                        alt="Smart Watch"
                        className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
                <div className="w-[350px] bg-white rounded-xl shadow-2xl p-6 flex justify-between items-center">
                    <div className="max-w-[50%] space-y-2">
                        <p className="w-fit text-xs font-semibold px-3 py-1 text-[#b25d5d] bg-[#ffe6e5] rounded-tr-2xl rounded-bl-2xl">
                        Summer Sale -20%
                        </p>
                        <h2 className="text-xl font-extrabold text-black leading-snug">
                        50% OFF Men's 
                        Fashion 
                        </h2>
                        <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-500">This Fashion word-of-mouth & makes it more</span>
                        </div>
                        <button className="bg-[#FF3C3C] text-white text-sm font-semibold px-4 py-2 rounded">
                        Shop Now
                        </button>
                    </div>
                    <div className="max-w-[45%]">
                        <img
                        src={men}
                        alt="Smart Watch"
                        className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
                <div className="w-[350px] bg-white rounded-xl shadow-2xl p-6 flex justify-between items-center">
                    <div className="max-w-[50%] space-y-2">
                        <p className="w-fit text-xs font-semibold px-3 py-1 text-[#b25d5d] bg-[#ffe6e5] rounded-tr-2xl rounded-bl-2xl">
                        Summer Sale -20%
                        </p>
                        <h2 className="text-xl font-extrabold text-black leading-snug">
                        Diamond Jewellery Sale 
                        </h2>
                        <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500 line-through">$150.00</span>
                        <span className="text-base font-bold text-[#FF3C3C]">$130.00</span>
                        </div>
                        <button className="bg-main text-white text-sm font-semibold px-4 py-2 rounded">
                        Shop Now
                        </button>
                    </div>
                    <div className="max-w-[45%]">
                        <img
                        src={rings}
                        alt="Smart Watch"
                        className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
)
}
