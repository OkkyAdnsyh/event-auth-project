import Login from '@/components/module/Form/Login'
import React from 'react'

const page = () => {
  return (
    <>
        <div className={`bg-gray-950 w-full h-screen flex items-center justify-center px-6 py-8`}>
            <Login/>
        </div>
    </>
  )
}

export default page