import React, { HTMLProps } from 'react'


const TextInput = ({type, name, id, placeholder, children, className, ...rest} : HTMLProps<HTMLInputElement>) => {
  return (
    <>
      <div className={`mb-2`}>
        <div className={`mb-2`}>
          <label htmlFor={name}>{children}</label>
        </div>
        <input type={type} name={name} id={id} placeholder={placeholder} className={`w-full p-2 rounded-md ${className}`} {...rest}/>
      </div>
    </>
  )
}

export default TextInput