import DataInsight from '@/components/layout/DataInsight/DataInsight'
import React from 'react'

const page = () => {
  return (
    <>
      <div className={`w-full px-6 py-10 grid grid-rows-3 gap-y-4`}>
        <section className={`grid grid-cols-3 gap-x-6`}>
          <DataInsight>

          </DataInsight>
        </section>
      </div>
    </>
  )
}

export default page