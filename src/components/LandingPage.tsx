'use client'
import { FaInstagram } from 'react-icons/fa'
import { FiYoutube } from 'react-icons/fi'
import SVGAnim from './SVGAnim'
import { useEffect } from 'react'
import gsap from 'gsap'

function LandingPage() {
  useEffect(()=>{
    gsap.fromTo(".hero-head-anim",
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: "bounce.out",
      }
    )
  },[])
  return (
    <>
      <div className="h-screen hero-bg flex flex-col items-center justify-center text-white">
        <SVGAnim/>
        <div className="absolute text-5xl xl:text-8xl heading-txt blur-sm hero-head-anim">
          MOMENTUM
        </div>
        <div className="absolute text-5xl xl:text-8xl heading-txt hero-head-anim">
          MOMENTUM
        </div>
        <div className="hidden sm:h-24 sm:w-10 lg:h-32 lg:w-14 bg-white fixed end-0 sm:flex flex-col rounded-l-md items-center justify-evenly z-50">
          <a href='https://www.instagram.com/ncumomentum/' target='_blank' className='sm:p-2 lg:p-3'>
            <FaInstagram size="auto" color="black" />
          </a>
          <a href='https://youtube.com/@ncugurugram?si=1Fo1gwHJ0uvc6H1r' target='_blank' className='sm:p-2 lg:p-3'>
            <FiYoutube size="auto" color="black" />
          </a>
        </div>
        {/* <div className='bg-white text-black px-4'>
          Events Coming Soon ...
        </div> */}
      </div>
    </>
  )
}

export default LandingPage
