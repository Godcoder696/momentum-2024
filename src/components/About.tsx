'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image'
import React, { useEffect } from 'react'

function About() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-sec",
        start: "top 550px", // when the top of the trigger hits the top of the viewport
        end: "bottom 300px",
        // markers: true,
        scrub: 0
      },
    });

    tl.fromTo(".ncu-logo",
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 1
      }
    )

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-sec",
        start: "top 550px", // when the top of the trigger hits the top of the viewport
        end: "bottom 300px",
        // markers: true,
        scrub: 0
      },
    });

    t2.fromTo(".about-text-anim",
      {
        y:-10,
        opacity: 0
      },
      {
        y:0,
        opacity: 1,
        duration: 1
      }
    )
  },[])
  return (
    <div className='bg-[#030919] w-screen flex justify-center items-center py-10 sm:px-5 xl:p-20 '>
      <div className='flex text-white items-center justify-evenly about-sec pb-3 space-x-2'>
        <img src="/NCU.png" alt='NCU' className='ncu-logo sm:block h-12 sm:h-24 md:h-30 xl:h-36 hidden'></img>
        <div className='sm:w-4/5 flex flex-col space-y-2 xl:space-y-3 px-3'>
            <div className='space-x-2 text-sm xl:text-2xl font-semibold about-text-anim flex justify-between align-bottom'>
              <span className='justify-end self-center'>POWERED BY</span>
              <img src="/NCU.png" alt='NCU' className='ncu-logo h-10 sm:hidden align-top'></img>
            </div>
            <span className='text-xl md:text-2xl xl:text-4xl font-bold about-text-anim flex items-center justify-between'>
              <span>THE NORTHCAP UNIVERSITY</span>
            </span>
            <span className='leading-relaxed text-xs xl:text-lg mb-4 about-text-anim text-start '>
              Momentum is a 2-day long festival organized in the month of November. Momentum is the university fest where we provide the student community from various Universities and Colleges with velocity. This year Momentum 2024, the 26th Edition is planned for <b> 24<sup>th</sup> - 25<sup>th</sup> October.</b>
            </span>
        </div>
      </div>
    </div>
  )
} 

export default About
