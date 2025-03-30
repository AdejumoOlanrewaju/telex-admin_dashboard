import CardGrid from "./CardGrid"
import TopBar from "./TopBar"

const MainPanel = () => {
  return (
    <div className='rounded-e-md h-[200vh] bg-white p-4'>
      <TopBar/>
      <CardGrid/>
    </div>
  )
}

export default MainPanel
