import React from 'react'

export interface WrapperProps {
  className?: string
}

const Wrapper: React.FC<WrapperProps> = ({ children, className = '' }) => {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

export default Wrapper
