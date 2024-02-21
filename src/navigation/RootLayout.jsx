import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import RightSideBar from '../components/rightSideBar'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'

// Outlet displays the page that the selected route instead of displaying in whole page

const RootLayout = () => {
  return (
    <div className='flex flex-col h-screen w-screen items-center no-scrollbar'>
        <div className=' sticky top-0  w-[100%]'>
          <Header />
        </div>
        <div className='flex flex-row w-[100%] h-[82vh] sm:h-[91vh]'>
          <div className='hidden sm:flex basis-1/4 h-[100%]'><Sidebar /></div>
          <div className='w-[100%] sm:basis-1/2 h-[100%] overflow-y-auto overflow-x-hidden no-scrollbar'><Outlet /></div>
          <div className='hidden sm:flex basis-1/4  h-[100%]'><RightSideBar /></div>
        </div>
        <div className='flex sm:hidden sticky bottom-0 w-[100%] h-[9vh] '>
          <Footer />
        </div>
      </div>
  )
}

export default RootLayout