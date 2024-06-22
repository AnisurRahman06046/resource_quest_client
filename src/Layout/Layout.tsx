import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='flex'>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default Layout