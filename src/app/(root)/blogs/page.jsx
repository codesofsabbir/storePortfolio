import Image from 'next/image'
import React from 'react'
import Error from "@/media/error.jpg"
function page() {
  return (
    <div className='w-full flex items-center justify-center h-[calc(100vh-145px)]'>
      <h2 className='text-2xl md:text-7xl font-extrabold subTitleText'>Coming <span className='activeText'>Soon</span></h2>
    </div>
  )
}

export default page