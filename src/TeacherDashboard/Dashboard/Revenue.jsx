/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useEffect } from 'react';
import { motion, useMotionValue, animate  } from 'framer-motion';
export default function Revenue() {
    // Revenue Reports
    const incomeValue = useMotionValue(0);
    const withdrawValue = useMotionValue(0);
    const [incomePercent, setIncomePercent] = useState(0);
    const [withdrawPercent, setWithdrawPercent] = useState(0);
    useEffect(() => {
    const incomeAnim = animate(incomeValue, 56, {
        onUpdate: latest => setIncomePercent(Math.round(latest)),
    });
    const withdrawAnim = animate(withdrawValue, 42, {
        onUpdate: latest => setWithdrawPercent(Math.round(latest)),
    });
    return () => {
        incomeAnim.stop();
        withdrawAnim.stop();
    };
    }, []);
    return (
    <div className="bg-white rounded-xl p-4 shadow w-full md:w-[45%] lg:w-[32%] ">
            <h3 className="text-2xl font-bold mb-2 ">Revenue Reports</h3>
            <p className="text-2xl font-semibold text-gray-700 mb-4">$7601.96</p>
            <div className="flex justify-around">
                <div className="flex flex-col items-center space-y-2">
                <motion.div
                    className="radial-progress text-sec"
                    style={{ "--value": incomePercent }}
                    role="progressbar"
                    aria-valuenow={incomePercent}
                >
                    {incomePercent}%
                </motion.div>
                <p className="text-sm text-gray-500">Income</p>
                <p className="text-lg font-semibold text-main">$5200.98</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                <div
                    className="radial-progress text-sec"
                    style={{ "--value": withdrawPercent }}
                    role="progressbar"
                    aria-valuenow={withdrawPercent}
                >
                    {withdrawPercent}%
                </div>
                <p className="text-sm text-gray-500">Withdraw</p>
                <p className="text-lg font-semibold text-main">$2400.98</p>
                </div>
            </div>
    </div>
)
}
