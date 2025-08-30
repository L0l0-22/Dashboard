/* eslint-disable no-unused-vars */
import React from 'react'
import { FaUsers, FaFileAlt, FaVideo, FaDollarSign } from 'react-icons/fa';
import Revenue from './Revenue';
import { motion  } from 'framer-motion';
import Purchase from './Purchase';
import Sales from './Sales';
import Viewers from './Viewers';
import Performance from './Performance';
import Map from './Map';
export default function Dashboard() {
// status 
    const stats = [
        {
          label: 'Total students',
          value: '40k',
          icon: <FaUsers className="text-green-500" size={28}/>,
          bg: 'bg-green-100',
        },
        {
          label: 'Courses',
          value: '45',
          icon: <FaFileAlt className="text-blue-500" size={28} />,
          bg: 'bg-blue-100',
        },
        {
          label: 'Total Videos',
          value: '120',
          icon: <FaVideo className="text-cyan-500" size={28} />,
          bg: 'bg-cyan-50',
        },
        {
          label: 'Total Earning',
          value: '$3200',
          icon: <FaDollarSign className="text-yellow-500" size={28} />,
          bg: 'bg-yellow-100',
        },
      ];
  return (
    <div className='md:space-y-5'>
    <div className="flex flex-col md:flex-row flex-wrap gap-y-5 justify-around">
      {/* row1 */}
        {/* 1 */}
        <Revenue/>
        {/* 2 */}
        <Purchase/>
        {/* 3 */}
        <Sales/>
      {/* row2 */}
        {/* 1 */}
        <Viewers/>
        {/* 2 */}
        <Performance/>
        {/* 3 */}
        <Map/>
      </div>
      {/* row3 */}
        <div className="bg-white rounded-xl shadow-md p-6 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5 mt-5 mx-2">
          {stats.map((item, i) => (
            <div key={i} className="flex items-center gap-4 px-4">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.bg}`}>
                {item.icon}
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                <p className=" text-gray-500">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
