import { UserRoundPen } from 'lucide-react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
const AccountCtaUI = () => {
  return (
    <div className="border-gray-400 border-b pb-2 mb-4">
      <button className='rounded flex gap-2 items-center p-1 hover:bg-stone-100 relative w-full'>
        <UserRoundPen size = {36} className=''/>
        <div>
            <span className="font-bold block">Hi there</span>
            <span className="font-medium text-stone-700 block text-xs">Olanrewaju</span>
        </div>
        <div className='absolute top-1/2 right-2 translate-y-[-50%]'>
          <FiChevronUp className='text-sm'/>
          <FiChevronDown  className='text-sm'/>
        </div>
      </button>
    </div>
  )
}

export default AccountCtaUI
