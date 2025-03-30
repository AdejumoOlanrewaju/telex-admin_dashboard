import React from 'react'
import { FiArrowUpRight, FiDollarSign, FiMoreHorizontal } from 'react-icons/fi'

const RecentTransactions = () => {
    return (
        <div className='col-span-12 p-3 border border-stone-300 rounded'>
            <div className="mb-4 flex items-center justify-between">
                <h3 className='flex items-center gap-1.5 font-medium'>
                    <FiDollarSign />Recent Transactions
                </h3>
                <button className='text-sm text-violet-500 hover:underline'>See all</button>
            </div>

            <table className='table-auto  w-full'>
                <TableHead />
                <tbody>
                    <TableRow
                        cusID='#48149'
                        sku="Pro 1 month"
                        date="Aug 2nd"
                        price='$9.75'
                        order={1}
                    />

                    <TableRow
                        cusID='#1942s'
                        sku="Pro 3 month"
                        date="Aug 2nd"
                        price='$21.25'
                        order={2}
                    />

                    <TableRow
                        cusID='#4192'
                        sku="Pro 1 year"
                        date="Aug 1st"
                        price='$94.25'
                        order={3}
                    />
                    <TableRow
                        cusID='#460192'
                        sku="Pro 12 months"
                        date="Aug 1st"
                        price='$48.25'
                        order={4}
                    />
                    <TableRow
                        cusID='#11927'
                        sku="Pro 2 years"
                        date="Aug 1st"
                        price='$32.25'
                        order={5}
                    />
                </tbody>
            </table>
        </div>
    )
}

const TableHead = () => {
    return (
        <thead>
            <tr className='text-sm text-stone-500 font-normal'>
                <th className='text-start p-1.5'>Customer ID</th>
                <th className='text-start p-1.5'>SKU</th>
                <th className='text-start p-1.5'>Date</th>
                <th className='text-start p-1.5'>Price</th>
                <th className='text-start p-1.5'></th>
            </tr>
        </thead>
    )
}

const TableRow = ({
    cusID,
    sku,
    date,
    price,
    order

}: {
    cusID: string;
    sku: string;
    date: string;
    price: string;
    order: number
}) => {
    return (
        <tr className={order % 2 ? "bg-stone-100 text-sm" : "text-sm"}>
            <td className="p-1.5">
                <a href="#" className="underline text-violet-500 flex items-center gap-1">
                    <FiArrowUpRight/>{cusID}
                </a>
            </td>
            <td className="p-1.5">{sku}</td>
            <td className="p-1.5">{date}</td>
            <td className="p-1.5">{price}</td>
            <td className="w-8">
                <button className='hover:bg-stone-200 transition-colors grid place-content-center rounded size-8 '>
                    <FiMoreHorizontal/>
                </button>
            </td>
        </tr>
    )
}

export default RecentTransactions
