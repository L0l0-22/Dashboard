/* eslint-disable no-unused-vars */
import React from 'react'
import { motion  } from 'framer-motion';

export default function Sales() {
    return (
    <div className="bg-white rounded-xl p-4 shadow-md w-full md:w-[45%] lg:w-[32%] ">
        <h3 className="text-2xl font-bold mb-2">Course sales</h3>
        <p className="text-2xl font-semibold text-gray-700 mb-12">$3200.98</p>
        <div className="flex justify-between text-sm text-gray-500 mt-2 mb-3">
            <div>
            <p>Current</p>
            <p className='text-lg font-semibold text-gray-800'>$12,000</p>
            </div>
            <div>
            <p>Last term</p>
            <p className='text-lg font-semibold text-gray-800'>$15.200</p>
            </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden ">
            <motion.div
            className="bg-[#65C1DD] h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '75%' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            />
        </div>
        
    </div>  
)
}
