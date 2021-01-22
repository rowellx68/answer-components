import React from 'react'

export interface PrimaryPageTextProps {
  className?: string
  text: string
}

const PrimaryPageText: React.FC<PrimaryPageTextProps> = ({ text, className = '' }) => {
  return (
    <h1 className={`text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-600 via-blue-700 to-blue-700 bg-clip-text text-transparent ${className}`}>
      {text}
    </h1>
  )
}

export default PrimaryPageText
