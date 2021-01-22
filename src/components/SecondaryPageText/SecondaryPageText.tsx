import React from 'react'

export interface SecondaryPageTextProps {
  className?: string
  text: string
}

const SecondaryPageText: React.FC<SecondaryPageTextProps> = ({ text, className = '' }) => {
  return (
    <h2 className={`text-2xl md:text-3xl font-extralight ${className}`}>{text}</h2>
  )
}

export default SecondaryPageText
