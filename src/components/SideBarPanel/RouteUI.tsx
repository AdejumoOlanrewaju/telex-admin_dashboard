import React from 'react'
import { IconType } from 'react-icons';
import { FiDollarSign, FiHome, FiLink, FiPaperclip, FiUsers } from 'react-icons/fi';

const RouteUI = () => {
  return (
    <div className='space-y-2'>
      <Route selected = {true} Icon={FiHome} title='Dashboard' />
      <Route selected = {false} Icon={FiUsers} title='Team' />
      <Route selected = {false} Icon={FiPaperclip} title='Invoices' />
      <Route selected = {false} Icon={FiLink} title='Integration' />
      <Route selected = {false} Icon={FiDollarSign} title='Finances' />
    </div>
  )
}

const Route = ({
    selected,
    Icon,
    title
}: {
    selected : boolean;
    Icon : IconType;
    title : string;
}) => {
    return(
        <button className={`flex items-center justify-start gap-2 w-full rounded text-sm px-2 py-1.5 transition-[background-color,_box-shadow,_color]
        ${
            selected ? 'bg-white text-stone-950 shadow' : 'hover:bg-gray-50 group-hover:text-violet-300 text-stone-700'
        }
        `}>
            <Icon className={selected ? "text-violet-400" : ""}/>
            <span>{title}</span>
        </button>
    )
}

export default RouteUI
