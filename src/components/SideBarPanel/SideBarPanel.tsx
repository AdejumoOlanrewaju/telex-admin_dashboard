import AccountCtaUI from "./AccountCtaUI"
import Plan from "./Plan"
import RouteUI from "./RouteUI"
import SearchBar from "./SearchBar"


const SideBarPanel = () => {
  return ( 
    <div className='p-4 bg-stone-200 rounded-s-md'>
      <div className='h-[calc(100vh-32px-50px)] sticky top-2 overflow-y-auto'>
        <AccountCtaUI/>
        <SearchBar/>
        <RouteUI/>
      </div>
     
     <Plan/>
    </div>
  )
}

export default SideBarPanel
