import InsightData from '@/components/element/Insight/InsightData'
import InsightTitle from '@/components/element/Insight/InsightTitle'
import DataInsight from '@/components/layout/DataInsight/DataInsight'
import React from 'react'
import  Link  from 'next/link'
import * as FA from 'react-icons/fa'

const page = () => {
  return (
    <>
      <div className={`w-full h-screen px-6 py-6 grid grid-rows-5 gap-y-4`}>
        <section className={`w-full flex items-center justify-between`}>
          <article className={`flex flex-col items-start justify-start gap-4`}>
            <h1 className={`text-3xl text-black font-semibold`}>Welcome, Admin</h1>
            <p className={`text-xl text-gray-400 font-medium`}>Here is an overview</p>
          </article>
        </section>
        <section className={`row-span-4 grid grid-cols-4 grid-rows-3 gap-x-6`}>
          <div className={`row-span-3 flex flex-col border-2 border-sky-300 rounded`}>
            <article className={`flex items-center justify-center gap-4 p-4`}>
              <FA.FaChartPie
                style={{
                  fontSize : '24px',
                  color : 'rgb(125, 211, 252)'
                }}
              />
              <p className={`text-md font-bold`}>
                Overview
              </p>
            </article>
            <div className={`h-full grid grid-rows-3 p-2 gap-y-5`}>
              <DataInsight>
                <InsightTitle>
                  <FA.FaDatabase style={{fontSize : "16px", color : "#232323"}}/>
                  <p className={`text-md text-gray-600`}>
                    Barcode
                  </p>
                  <Link
                    className={`bg-sky-500 w-7 h-7 flex items-center justify-center rounded ml-auto`}
                    href='/dashboard/barcode'
                  >
                    <FA.FaRegPlusSquare style={{fontSize : '16px', color : '#ffffff'}}/>
                  </Link>
                </InsightTitle>
                <InsightData data='3000'/>
              </DataInsight>
              <DataInsight>
                <InsightTitle>
                  <FA.FaCalendarAlt style={{fontSize : "16px", color : "#232323"}}/>
                  <p className={`text-md text-gray-600`}>
                    Event
                  </p>
                  <Link
                    className={`bg-sky-500 w-7 h-7 flex items-center justify-center rounded ml-auto`}
                    href='/dashboard/barcode'
                  >
                    <FA.FaRegPlusSquare style={{fontSize : '16px', color : '#ffffff'}}/>
                  </Link>
                </InsightTitle>
                <InsightData data='10'/>
              </DataInsight>
              <DataInsight>
                <InsightTitle>
                  <FA.FaCalendarCheck style={{fontSize : "16px", color : "#232323"}}/>
                  <p className={`text-md text-gray-600`}>
                    Finished Event
                  </p>
                </InsightTitle>
                <InsightData data='10'/>
              </DataInsight>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default page