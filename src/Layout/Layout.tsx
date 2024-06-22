import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='flex h-screen'>
    <SideBar />
    <div className='flex-1  lg:ms-56 bg-slate-700 min-h-screen'>
      <Outlet />
    </div>
  </div>
  )
}

export default Layout