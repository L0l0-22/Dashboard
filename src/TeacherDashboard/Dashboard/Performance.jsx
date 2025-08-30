import React, { useEffect, useState } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

export default function Performance() {
    // student performance
    const performance = [
      { name: 'On track', value: 60 },
      { name: 'At risk', value: 20 },
      { name: 'Behind', value: 20 },
    ];
    const COLORS = ['#65C1DD', '#4CA8C4', '#338FAB'];
    const [renderChart, setRenderChart] = useState(false);
    useEffect(() => {
      requestAnimationFrame(() => {
        setRenderChart(Date.now());
      });
    }, []);
  return (
    <div className="bg-white rounded-xl p-6 shadow-md w-full md:w-[45%] lg:w-[32%] flex flex-col">
        <h3 className="text-2xl font-bold mb-9">
        Student performance
        </h3>
    <div className="flex items-center justify-evenly">
        {/* Donut Chart */}
        <div className="w-28 h-28">
        {renderChart && (
            <ResponsiveContainer width="100%" height="100%">
            <PieChart key={renderChart}>
                <Pie
                data={performance}
                innerRadius={40}
                outerRadius={55}
                paddingAngle={2}
                dataKey="value"
                isAnimationActive={true}
                animationDuration={1000}
                >
                {performance.map((entry, index) => (
                    <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    />
                ))}
                </Pie>
            </PieChart>
            </ResponsiveContainer>
        )}
        </div>
        <div className="ml-2 text-sm space-y-2">
        {performance.map((entry, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-700">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }}></span>
            {entry.name}
            </div>
        ))}
        </div>
    </div>
    </div> 
    )
}
