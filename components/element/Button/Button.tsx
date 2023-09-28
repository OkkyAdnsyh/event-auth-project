import React, { HTMLProps } from 'react'

export interface IBtnProps extends HTMLProps<HTMLButtonElement>{
  type : "submit" | "button" | "reset" | undefined
}

const Button = ({children, type, className, ...rest} : IBtnProps) => {
  return (
    <>
        <button {...rest} type={type} className={`py-2 px-8 rounded-full text-gray-950 text-md ${className}`}>
            {children}
        </button>
    </>
  )
}

export default Button