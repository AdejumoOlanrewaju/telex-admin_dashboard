import SideBarPanel from "../../components/SideBarPanel/SideBarPanel.tsx"
import MainPanel from '../../components/MainPanel/MainPanel.tsx'

const Home = () => {
  return (
    <div className='grid grid-cols-[200px,_1fr] p-2 bg-stone-100'>
      <SideBarPanel/>
      <MainPanel/>
    </div>
  )
}

export default Home
