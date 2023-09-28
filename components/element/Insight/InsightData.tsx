import React from 'react'

const InsightData = ({data} : {data : string}) => {
  return (
    <>
      <div className={`flex h-full items-center justify-center gap-4 p-4`}>
          <p className={`text-black text-3xl`}>
              {data}
          </p>
      </div> 
    </>
  )
}

export default InsightData