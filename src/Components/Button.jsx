import React from 'react'

const Button = (
  {
    children,
    type = 'button',
    textColor= 'text-white',
    className = '',
    bgColor = 'bg-blue-600',
    ...props 
   }) => {
  return (
    <Button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
     {...props}>{children}</Button>
  )
}

export default Button