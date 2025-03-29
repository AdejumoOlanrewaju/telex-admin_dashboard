import React from 'react'
import { FiCommand, FiSearch } from "react-icons/fi";
import { CommandMenu } from "./CmdKUtil"

const SearchPanelBar = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <div className='mb-4 bg-gray-200 flex items-center px-2 py-1.5 relative text-sm rounded'>
        <FiSearch className='mr-1' />
        <input 
          onFocus = {(e) => {
            e.target.blur()
            setOpen(true)
          }}
          type="text"
          placeholder='Search...'
          className='bg-transparent focus:outline-none placeholder:text-stone-700 w-[calc(100%-48px)]'
         />
         <span className='p-1 bg-stone-50 flex items-center gap-0.5 text-xs absolute right-1.5 top-1/2 -translate-y-1/2'>
          <FiCommand/>K
         </span>
      </div>
      <CommandMenu open = {open} setOpen = {setOpen}/>
    </>
  )
}

export default SearchPanelBar

