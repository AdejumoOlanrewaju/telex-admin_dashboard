import React from 'react'

const Plan = () => {
    return (
        <div className='flex flex-col justify-end gap-1 sticky top-[calc(100vh-48px-16px)] h-12 border-t border-stone-400 text-xs'>
            <div className='flex justify-between items-center'>
                <div>
                    <span className='block font-bold'>Enterprise</span>
                    <span className='block mt-1'>Pay as you go</span>
                </div>

                <span className='font-bold px-2 py-1.5 bg-gray-200 transition-colors hover:bg-gray-300'>Support</span>
            </div>
        </div>
    )
}

export default Plan
