import React, { HTMLProps } from 'react'


const TextInput = ({type, name, id, placeholder, children, className, ...rest} : HTMLProps<HTMLInputElement>) => {
  return (
    <>
      <div className={`w-full`}>
        <div className={`mb-4`}>
          <label htmlFor={name} className={`text-md text-gray-100`}>{children}</label>
        </div>
        <input type={type} name={name} id={id} placeholder={placeholder} className={`w-full p-3 placeholder:text-sm rounded-md ${className}`} {...rest}/>
      </div>
    </>
  )
}

export default TextInput