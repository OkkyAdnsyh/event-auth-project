import React from 'react'
import Login from '@/components/module/Form/Login'
import Link from 'next/link'
import LinkButton from '@/components/element/Button/LinkButton'
import { BsArrowBarRight } from 'react-icons/bs'


export default async function Home() {


  return (
    <>
      <div className={`relative w-full h-screen flex items-center justify-center bg-[url('../public/login-bg.webp')] bg-cover bg-no-repeat bg-bottom`}>
        <div className={`w-full h-full absolute bg-main-grad`}>
        </div>
        <div className={`w-full h-full absolute flex flex-col items-start lg:items-center justify-start px-6 gap-y-6`}>
          <h1 className={`text-5xl text-slate-50 font-bold text-left uppercase mt-20 lg:mt-auto lg:text-6xl`}>
            Event Organizer Apps
          </h1>
          <p className={`text-md text-slate-50 font-thin text-left`}>
            Unleash your full potential of organizing event all around the world
          </p>
          <LinkButton className={`bg-btn-grad`} href={'/signUp'}>
            Try Demo Account 
            <BsArrowBarRight style={{fontSize : '28px'}}/>  
          </LinkButton>
          <p className={`text-md text-slate-50 font-medium text-left`}>
            Or use your own trial account
          </p>
          <Link href={'/login'} className={`py-4 px-8 border-b-4 border-slate-200 text-slate-100 font-bold rounded-sm`}>
            Go To Login Page
          </Link>
          <p className={`text-sm mt-auto mb-6 text-slate-50 font-medium text-left`}>
            * This is demo site, every account will be deleted within 1 month
          </p>
        </div>
        {/* <div className={`w-[80%] h-auto flex items-center justify-center`}>
          <Login/>
          <div className={`w-1/2 h-full px-6 py-8 bg-gray-200 flex flex-col items-center justify-between`}>
            <h2>This is Demo Apps</h2>
            <div className={`flex flex-col justify-center items-center`}>
              <p>Use this account to test out</p>
              <Link
                href={'/demo/dashboard'}
                className={`py-2 px-8 rounded-full bg-yellow-00 text-gray-950 text-md flex justify-center mt-4`}
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
        </div> */}
      </div>
    </>
  )
}