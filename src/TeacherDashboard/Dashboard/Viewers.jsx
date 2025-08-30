import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

export default function Viewers() {
    // viewers
        const data = [
        { name: '', value: 200 },
        { name: '', value: 100 },
        { name: '', value: 140 },
        { name: '', value: 300 },
        { name: '', value: 90 },
        { name: '', value: 230 },
        { name: '', value: 190 },
        ];
        const [chartKey, setChartKey] = useState(0);
        useEffect(() => {
        // Wait 2 frames to make sure layout is ready
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
            setChartKey(Date.now()); // unique key triggers remount
            });
        });
        }, []);
    return (
    <div className="bg-white rounded-xl p-4 shadow-md w-full md:w-[45%] lg:w-[32%]">
                <div className="flex justify-between items-center mb-5">
                    <h3 className="text-2xl font-bold mb-2 ">
                        Total viewers
                    </h3>
                    <p className="text-base font-normal text-gray-500">Last 30 days</p>
                </div>
                <div className="flex  space-x-6">
                <h5 className="leading-none text-3xl font-semibold text-gray-700 pb-2">32.4k</h5>
                <div className="flex items-center px-2 text-base font-semibold text-white rounded-lg bg-sec">
                    12%
                    <FaArrowUp size={16} className="mb-1 ml-1" />
                </div>
                    </div>
                {/* Graph */}
                <div className="w-full h-20 mt-6">
                    <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} key={chartKey}>
                        <defs>
                        <linearGradient id="colorGraph" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#65C1DD" stopOpacity={0.3} />
                            <stop offset="100%" stopColor="#65C1DD" stopOpacity={0} />
                        </linearGradient>
                        </defs>
                        <XAxis dataKey="name" hide />
                        <Tooltip
                    //    contentStyle={{ display: "none" }} 
                        />
                        <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#65C1DD"
                        fill="url(#colorGraph)"
                        strokeWidth={2}
                        dot={false}
                        isAnimationActive={true}
                        animationDuration={1000}
                        />
                    </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
    )
}
