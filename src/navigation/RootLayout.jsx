import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import RightSideBar from '../components/rightSideBar'
import Sidebar from '../components/sidebar'

// Outlet displays the page that the selected route instead of displaying in whole page

const RootLayout = () => {
  return (
    <div className='flex flex-col h-screen w-screen items-center'>
        <div className=' sticky top-0  w-[100%]'>
          <Header />
        </div>
        <div className='flex flex-row w-[100%] h-[91vh]'>
          <div className='basis-1/4 h-[100%]'><Sidebar /></div>
          <div className='basis-1/2 h-[100%] overflow-y-auto overflow-x-hidden'><Outlet /></div>
          <div className='basis-1/4  h-[100%]'><RightSideBar /></div>
        </div>
      </div>
  )
}

export default RootLayout