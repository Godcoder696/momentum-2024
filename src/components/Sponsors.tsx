import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

function Sponsors() {
  return (
    <>
      <div className=' bg-[#030919] -mt-2 pt-7 pb-10 xl:pb-44 flex flex-col items-center justify-between w-screen space-y-10 xl:space-y-20'>
        <div className='flex justify-start text-white w-[90%] text-lg xl:text-3xl font-semibold'>
          <span>OUR SPONSORS</span>
        </div>
        {/* <div className='w-full flex -space-x-24'>
          <Image src="/Sponsors.webp" height={750} width={750} alt='sponsors' className='p-4'/>
          <Image src="/Sponsors.webp" height={750} width={750} alt='sponsors' className='p-4'/>
        </div> */}
        <Marquee autoFill={true}>
          <div className='w-full flex'>
            <Image src="/Sponsors.webp" height={750} width={750} alt='sponsors' />
            {/* <Image src="/Sponsors.webp" height={750} width={750} alt='sponsors' className='p-4'/> */}
          </div> 
        </Marquee>
      </div> 
    </>
  )
}

export default Sponsors
