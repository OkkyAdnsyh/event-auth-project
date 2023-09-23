import SideBar from '@/components/layout/SideBar/SideBar'
import React from 'react'

const DashboardLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <>
      <div className={'flex'}>
        <SideBar/>
        {children}
      </div>
    </>
  )
}

export default DashboardLayout