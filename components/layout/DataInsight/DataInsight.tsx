import React from 'react'

const DataInsight = ({children} : {children : React.ReactNode}) => {
  return (
    <>
        <section className={'w-full h-full rounded-xl shadow-md flex flex-col px-8'}>
            {children}
        </section>
    </>
  )
}

export default DataInsight