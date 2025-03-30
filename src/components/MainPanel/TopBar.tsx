import React from 'react'
import { FiCalendar } from 'react-icons/fi'

const TopBar = () => {
  return (
    <div className='border-gray-400 border-b pb-2 mb-4'>
      <div className="flex justify-between items-center p-1">
        <div>
            <span className='text-sm font-bold block'>🚀 Good Afternoon OLanrewaju</span>
            <span className='text-xs block mt-1'>Tuesday, March 29 2025</span>
        </div>

        <button className='flex items-center gap-2 text-sm font-bold px-3 py-1.5 bg-violet-100 hover:bg-violet-300 hover:text-violet-900 rounded'>
            <FiCalendar/>
            <span>Prev & Months</span>
        </button>
      </div>
    </div>
  )
}

export default TopBar
