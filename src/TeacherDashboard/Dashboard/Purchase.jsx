/* eslint-disable no-unused-vars */
import React from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis } from 'recharts';
import { motion  } from 'framer-motion';

export default function Purchase() {
    // Course purchase
        const purchase = [
            { name: '', value: 3 },
            { name: '', value: 5 },
            { name: '', value: 6 },
            { name: '', value: 8 },
            { name: '', value: 7 },
            { name: '', value: 9 },
            { name: '', value: 8 },
        ];
        const AnimatedBar = ({ x, y, width, height, fill }) => {
        return (
            <motion.rect
            initial={{
                height: 0,
                y: y + height,
                opacity: 0.5
            }}
            animate={{
                height,
                y,
                opacity: 1,
            }}
            transition={{
                duration: 1,
                ease: 'easeOut',
            }}
            x={x}
            width={width}
            fill={fill}
            rx={8}
            ry={8}
            />
        );
        };
  return (
    <div className="bg-white rounded-xl p-4 shadow-md w-full md:w-[45%] lg:w-[32%] ">
            <h3 className="text-2xl font-bold mb-2 ">
                Course purchase
            </h3>
            <p className="text-2xl font-semibold text-gray-700 mb-4">
                $12,000
            </p>
            <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                <BarChart data={purchase}>
                    <Bar
                    dataKey="value"
                    fill="#65C1DD"
                    barSize={18}
                    shape={<AnimatedBar />}
                    />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={false} />
                </BarChart>
                </ResponsiveContainer>
            </div>

      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>Last 30 days</span>
        <span> may</span>
      </div>
        </div>
  )
}
