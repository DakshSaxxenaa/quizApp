import React from 'react'

const Footer = () => {
  return (
    <div className="relative z-10">
      <p className='text-center text-xs sm:text-sm bg-gray-900 text-white py-3 sm:py-4 px-4'>&copy; {new Date().getFullYear()} QCG IITR. All rights reserved.</p>
    </div>
  )
}

export default Footer