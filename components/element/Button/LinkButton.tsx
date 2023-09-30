import Link, { LinkProps } from 'next/link'
import React from 'react'

interface ILinkButtonProps extends LinkProps{
    children : React.ReactNode,
    className : string
}

const LinkButton = ({children, className, ...rest} : ILinkButtonProps) => {
  return (
    <Link className={`py-4 px-8 text-md font-bold text-black rounded-xl flex gap-x-6 items-center ${className}`} {...rest}>{children}</Link>
  )
}

export default LinkButton