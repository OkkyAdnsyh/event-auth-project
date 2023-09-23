import React, { HTMLProps } from 'react'


const FormControl = ({children, onSubmit, className, ...rest} : HTMLProps<HTMLFormElement>) => {
  return (
    <form onSubmit={onSubmit} className={className}>
        {children}
    </form>
  )
}

export default FormControl