import React from 'react'

function Button({
    children,
    type="button",
    bgcolor='bg-blue-600',
    textColor="text-white",
    classname="",
    ...props
}) {
  return (
   <button {...props} type={type} classname={`${classname} ${textColor} ${bgcolor} px-4 py-3 rounded-lg`} >{children}</button>
  )
}

export default Button
