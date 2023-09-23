import React from 'react'
import Login from '@/components/module/Form/Login'
import Link from 'next/link'



export default async function Home() {
  return (
    <>
      <div className={`w-full h-screen flex items-center justify-center`}>
        <div className={`w-[80%] h-auto flex items-center justify-center`}>
          <Login/>
          <div className={`w-1/2 h-full px-6 py-8 bg-gray-200 flex flex-col items-center justify-between`}>
            <h2>This is Demo Apps</h2>
            <div className={`flex flex-col justify-center items-center`}>
              <p>Use this account to test out</p>
              <Link
                href={'/demo/dashboard'}
                className={`py-2 px-8 rounded-full bg-yellow-100 text-gray-950 text-md flex justify-center mt-4`}
              >
                Go To Demo
              </Link>
              <p className='w-fit mt-4'>Or Create New Account</p>
              <Link
                href={'/signUp'}
                className={`py-2 px-8 rounded-full bg-sky-400 text-gray-950 text-md flex justify-center mt-4`}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}