import Button from '@/components/element/Button/Button'
import Link from 'next/link'
import React from 'react'
import * as FA from 'react-icons/fa'
import * as FA6 from 'react-icons/fa6'

const SideBar = () => {
  return (
    <aside className={`w-1/5 h-screen bg-sky-500 px-6 py-20 flex flex-col justify-between`}>
        <div className={`w-full h-1/2 flex flex-col justify-between`}>
            <Link
                href={'/dashboard'}
                className={`flex items-center justify-start gap-4 w-full text-white text-md font-bold`}
            >
                <FA.FaHome style={{fontSize : "24px"}}/>
                Home
            </Link>
            <Link
                href={'/dashboard/schedule'}
                className={`flex items-center justify-start gap-4 w-full text-white text-md font-bold`}
            >
                <FA.FaCalendarAlt style={{fontSize : "24px"}}/>
                Schedule
            </Link>
            <Link
                href={'/dashboard/report'}
                className={`flex items-center justify-start gap-4 w-full text-white text-md font-bold`}
            >
                <FA.FaBookOpen style={{fontSize : "24px"}}/>
                Event Report
            </Link>
            <Link
                href={'/dashboard/data'}
                className={`flex items-center justify-start gap-4 w-full text-white text-md font-bold`}
            >
                <FA.FaDatabase style={{fontSize : "24px"}}/>
                Barcode Data
            </Link>
        </div>
        <div className={`flex flex-col items-center justify-center gap-6`}>
            <Link
                href={'/dashboard/settings'}
                className={`flex items-center justify-start gap-4 w-full text-white text-md font-bold`}
            >
                <FA6.FaUserGear style={{fontSize : "24px"}}/>
                Account Settings
            </Link>
            <Button
                className={`bg-red-600`}
            >
                LOGOUT
            </Button>
        </div>
    </aside>
  )
}

export default SideBar