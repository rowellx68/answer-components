import React from 'react'

export interface ServiceOfferingProps {
  className?: string
  title: string
  text: string
}

const ServiceOffering: React.FC<ServiceOfferingProps> = ({ title, text, className = '' }) => {
  return (
    <div className={className}>
      <div className="flex justify-center md:justify-start pb-4">
        {/* replace with image here */}
        <div className="bg-gray-300 dark:bg-gray-700 w-60 h-60 rounded-3xl"></div>
      </div>
      <div className="font-black text-2xl text-pink-600 pb-2 text-center md:text-left">
        {title}
      </div>
      <p className="text-center md:text-left">{text}</p>
    </div>
  )
}

export default ServiceOffering
