import React, { HTMLProps } from 'react'

const Button = ({children, type, className, ...rest} : HTMLProps<HTMLButtonElement>) => {
  return (
    <>
        <button {...rest} className={`py-2 px-8 rounded-full bg-yellow-100 text-gray-950 text-md ${className}`}>
            {children}
        </button>
    </>
  )
}

export default Button