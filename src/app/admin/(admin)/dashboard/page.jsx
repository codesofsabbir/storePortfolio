import CategoryProjectsBarChart from '@/Components/adminComponents/CategoryProjectsBarChart'
import CategoryProjectsPieCharts from '@/Components/adminComponents/CategoryProjectsPieCharts'
import Insights from '@/Components/adminComponents/Insights'
import StatCard from '@/Components/adminComponents/StatCard'
import { AlertTriangle, Award, BarChart2, Clock, DollarSign, Package, ShoppingBag, TrendingUp, Users, Zap } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <div>
      <div className='grid grid-cols-4 gap-5'>
        <StatCard name={"Total Projects"} icon={Package} value={"17"}/>
        <StatCard name={"Years Of Experience"} icon={Clock} value={"3+"}/>
        <StatCard name={"Happy Customers"} icon={Users} value={"6+"}/>
        <StatCard name={"Honors and Awards"} icon={Award} value={"00"}/>
      </div>
      <div className='mt-5 grid grid-cols-2 gap-5'>
        <CategoryProjectsPieCharts />
        <CategoryProjectsBarChart />
      </div>
    </div>
  )
}

export default page