import { useState } from 'react'
import Header from './components/header'
import SideBar from './components/sidebar'
import HomePage from './pages/HomePage'
import RightSideBar from './components/rightSideBar'

function App() {

  return (
      <div className='flex flex-col h-screen w-screen items-center'>
        <div className=' sticky top-0  w-[100%]'>
          <Header />
        </div>
        <div className='flex flex-row w-[100%] h-[91vh]'>
          <div className='basis-1/4 h-[100%]'><SideBar /></div>
          <div className='basis-1/2 bg-slate-500  h-[100%] overflow-y-auto overflow-x-hidden'><HomePage /></div>
          <div className='basis-1/4  h-[100%]'><RightSideBar /></div>

        </div>
      </div>
  )
}

export default App
