import React from 'react'

const InsightTitle = ({children} : {children : React.ReactNode}) => {
  return (
    <div className={`w-full flex gap-4 p-2 border-b-2 border-gray-300 items-center`}>
        {children}
    </div>
  )
}

export default InsightTitle