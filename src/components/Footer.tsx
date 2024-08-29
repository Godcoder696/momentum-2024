import Image from 'next/image'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FiYoutube } from 'react-icons/fi'

function Footer() {
  return (
    <div className='w-screen flex flex-col justify-center items-center text-white z-50 font-semibold footer-bg -mt-1'>
      <img src="/footer-bg.svg" alt="" className='z-10 p-0 -ml-[7px] '/>
      <span className='flex flex-col justify-center items-center bg-inherit absolute z-20 text-xl sm:text-2xl md:text-3xl xl:text-4xl '>
        <div>Memories are the stars that </div>
        <div>brighten our dreams !</div>
        <div className='space-x-2 self-end mt-4 sm:hidden flex'>
          <a href='https://www.instagram.com/ncumomentum/' target='_blank'>
            <FaInstagram size={18} color="white" />
          </a>
          <a href='https://youtube.com/@ncugurugram?si=1Fo1gwHJ0uvc6H1r' target='_blank'>
            <FiYoutube size={18} color="white" />
          </a>
        </div>
      </span>
    </div>
  )
}

export default Footer
