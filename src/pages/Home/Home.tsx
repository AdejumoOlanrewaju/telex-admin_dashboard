import SideBarPanel from "../../components/SideBarPanel/SideBarPanel.tsx"
import MainPanel from '../../components/MainPanel/MainPanel.tsx'
import { useState } from "react"



const Home = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  return (
    <div className='grid lg:grid-cols-[200px,_1fr] p-2 bg-stone-100'>
      <SideBarPanel openMenu = {openMenu} setOpenMenu={setOpenMenu}/>
      <MainPanel openMenu = {openMenu} setOpenMenu={setOpenMenu}/>
    </div>
  )
}

export default Home

//React.Dispatch<React.SetStateAction<boolean>>