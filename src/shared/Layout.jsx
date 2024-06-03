import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

export default function Layout() {
  return (
    <div className="flex flex-row h-screen w-screen bg-neutral-100 overflow-hidden"> 
        <Sidebar/>
        <div className='flex-1'>
          <Header/>
          <p>{<Outlet/>}</p>  
        </div>        
    </div>
  )
}
