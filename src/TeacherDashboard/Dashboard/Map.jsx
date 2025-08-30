import React from 'react'
import world from "../../assets/world.png";
export default function Map() {
    // map
    const map = [
        { country: 'Egypt', top: '49%', left: '56%', color: '#65C1DD', percent: 65 },
        { country: 'UAE', top: '58%', left: '65%', color: '#005BFF', percent: 20 },
        { country: 'Canada', top: '28%', left: '23%', color: '#767FFF', percent: 5 },
        { country: 'Netherlands', top: '37.5%', left: '49.5%', color: '#FB923C', percent: 2 },
        { country: 'South Africa', top: '75%', left: '56%', color: '#8B5CF6', percent: 8 },
    ];
    return (
    <div className="bg-white rounded-xl p-6 shadow-md w-full md:w-[45%] lg:w-[32%] flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Top Engagement</h3>
        <div className="relative ">
        {/* World map background */}
        <img src={world} alt="World Map" className="object-cover w-full opacity-90 h-28" />
        {/* Country markers */}
        {map.map((point, i) => (
            <div
            key={i}
            className="absolute w-4 h-4 rounded-full border-2 border-white shadow"
            style={{
                top: point.top,
                left: point.left,
                backgroundColor: point.color,
                transform: 'translate(-50%, -50%)',
            }}
            title={`${point.country} - ${point.percent}%`}
            ></div>
        ))}
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-700">
        {map.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
            {item.country} <span className="font-semibold text-gray-900">{item.percent}%</span>
            </div>
        ))}
        </div>
    </div>
  )
}
