import AccountCtaUI from "./AccountCtaUI"
import Plan from "./Plan"
import RouteUI from "./RouteUI"
import SearchBar from "./SearchBar"
import MenuType from "../../types/utilTypes"
import { FiMenu } from "react-icons/fi"


const SideBarPanel = ({ openMenu, setOpenMenu }: MenuType) => {
  const handleOverlayClick = () => {
    if(setOpenMenu){
      setOpenMenu(prev => !prev)
    }
    console.log(openMenu)
  }
  return (
    <>
      <div onClick={(e) => e.stopPropagation()} className={`p-4 bg-stone-200 lg:rounded-s-md sidebarPanel z-[70] fixed top-0 left-0 lg:relative transition-transform -translate-x-[100%] lg:translate-x-0 ${openMenu ? "translate-x-0" : "-translate-x-[100%]"}`}>
        <div className='h-[calc(100vh-32px-48px)] sticky top-2 overflow-y-auto'>
          <span data-attr="close-menu" onClick={() => setOpenMenu && setOpenMenu(false)} className="cursor-pointer p-2 hover:bg-stone-400 block w-fit ml-auto rounded-sm mb-2 lg:hidden">
            <FiMenu />
          </span>
          <AccountCtaUI />
          <SearchBar />
          <RouteUI />
        </div>

        <Plan />

        </div>
        <div onClick={handleOverlayClick} className={`overlay h-[100vh] w-[100vw] bg-black/50 fixed top-0 left-0  ${openMenu ? "opacity-100 z-50" : "opacity-0 -z-10"}`}>
      </div>

    </>
  )
}

export default SideBarPanel
