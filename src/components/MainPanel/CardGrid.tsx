import React from 'react'
import StatCard from './StatCard'
import ActivityGraph from './ActivityGraph'
import RadarChartUI from './RadarChartUI'
import RecentTransactions from './RecentTransactions'

const CardGrid = () => {
  return (
    <div className=' grid gap-3 grid-cols-12'>
      <StatCard/>
      <ActivityGraph/>
      <RadarChartUI/>
      <RecentTransactions/>
    </div>
  )
}

export default CardGrid
