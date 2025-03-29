import AccountCtaUI from "./AccountCtaUI"
import SearchBar from "./SearchBar"


const SideBarPanel = () => {
  return ( 
    <div className='p-2 bg-white border rounded-s-md'>
      <div className='h-[calc(100vh-48px)] sticky top-2'>
        <AccountCtaUI/>
        <SearchBar/>
      </div>
      <div>
        <span></span>
      </div>
    </div>
  )
}

export default SideBarPanel
