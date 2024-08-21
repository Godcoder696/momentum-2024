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
      <div className="h-screen w-screen hero-bg flex items-center justify-center text-white">
        <SVGAnim></SVGAnim>
        <div className="absolute text-5xl xl:text-8xl heading-txt blur-sm hero-head-anim">
          MOMENTUM
        </div>
        <div className="absolute text-5xl xl:text-8xl heading-txt hero-head-anim">
          MOMENTUM
        </div>
        <div className="h-32 w-14 hidden bg-white fixed end-0 xl:flex flex-col rounded-l-md items-center justify-evenly z-50">
          <FaInstagram size={27} color="black"/>
          <FiYoutube size={27} color="black"/>
        </div>
      </div>
    </>
  )
}

export default LandingPage
