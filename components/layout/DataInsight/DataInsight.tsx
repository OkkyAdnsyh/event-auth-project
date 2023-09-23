import React from 'react'

const DataInsight = ({children} : {children : React.ReactNode}) => {
  return (
    <>
        <section className={'w-full h-full rounded-xl shadow-xl flex flex-col'}>
            {children}
        </section>
    </>
  )
}

export default DataInsight