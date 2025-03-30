import React from 'react'
import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi';

const StatCard = () => {
    return (
        <>
            <Card
                title='Gross Revenue'
                value='$120,054.24'
                pillText='2.57%'
                trend='up'
                period='From Jan 1st - Jul 31st'
            />

            <Card
                title='Avg Order'
                value='$27.92'
                pillText='1.01%'
                trend='down'
                period='From Jan 1st - Jul 31st'
            />

            <Card
                title='Trailing Year'
                value='$278,054.24'
                pillText='68.75%'
                trend='up'
                period='Previous 365 days'
            />
        </>
    )
}

const Card = ({
    title,
    value,
    pillText,
    trend,
    period
}: {
    title: string;
    value: string;
    pillText: string;
    trend: "up" | "down";
    period?: string;
}) => {
    return (
        <>
            <div className="border border-stone-300 shadow p-4 col-span-12 xl:col-span-4  rounded">
                <div className="flex items-start justify-between mb-8">
                    <div>
                        <span className='mb-2 text-stone-500 text-sm'>{title}</span>
                        <p className='text-3xl font-semibold'>{value}</p>
                    </div>

                    <span className={`flex items-center gap-1 text-sm rounded px-2 py-1.5 ${
                        trend === "up" ? "bg-green-100 text-green-950" : "bg-red-100 text-red-950"
                    }`}>
                        {trend === "up" ? <FiTrendingUp/> : <FiTrendingDown/>}
                        {pillText}
                    </span>
                </div>

                <span className='text-stone-500 text-sm'>{period}</span>
            </div>
        </>
    )
}

export default StatCard
