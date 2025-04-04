import { FiCalendar, FiMenu } from 'react-icons/fi'
import MenuType from '../../types/utilTypes'

const TopBar = ({setOpenMenu}: MenuType) => {
  return (
    <div className='border-gray-400 border-b pb-2 mb-4'>
      <div className="flex justify-between items-center p-1 flex-wrap gap-3">
        <div className='flex gap-3 items-center '>
          <span className='lg:hidden' onClick={() =>setOpenMenu && setOpenMenu(prevState => !prevState)}>
            <FiMenu className='cursor-pointer size-6' />
          </span>
          <div>
            <span className='text-sm font-bold block'>Good Afternoon OLanrewaju</span>
            <span className='text-xs block mt-0.5'>Tuesday, March 29 2025</span>
          </div>
        </div>

        <button className='flex items-center gap-2 text-sm font-bold px-3 py-1.5 bg-violet-100 hover:bg-violet-300 hover:text-violet-900 rounded'>
          <FiCalendar />
          <span>Prev & Months</span>
        </button>
      </div>
    </div>
  )
}

export default TopBar
