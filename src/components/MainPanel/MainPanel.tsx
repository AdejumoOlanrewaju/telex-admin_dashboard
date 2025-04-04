import CardGrid from "./CardGrid"
import TopBar from "./TopBar"
import MenuType from "../../types/utilTypes";


const MainPanel = ({setOpenMenu}: MenuType) => {
  return (
    <div className='rounded-e-md bg-white p-4 w-full lg:w-auto'>
      <TopBar setOpenMenu = {setOpenMenu}/>
      <CardGrid/>
    </div>
  )
}

export default MainPanel
