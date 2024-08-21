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
    <div className='bg-[#030919] w-screen flex justify-center items-center py-10 px-5 xl:p-20 -mt-2'>
      <div className='flex text-white items-center justify-evenly about-sec'>
        <Image src="/logo-ncu.svg" height={200} width={200} alt='NCU' className='ncu-logo hidden xl:block'></Image>
        <div className='xl:w-3/5 flex flex-col space-y-2 xl:space-y-3'>
            <div className='space-x-2 text-sm xl:text-2xl font-semibold about-text-anim'>
                POWERED BY
            </div>
            <span className='text-xl xl:text-4xl font-bold about-text-anim flex items-center justify-between'>
              <span>THE NORTHCAP UNIVERSITY</span>
              <Image src="/ncu-logo.svg" height={200} width={200} alt='NCU' className='ncu-logo h-16 xl:hidden'></Image>
            </span>
            <span className='leading-relaxed text-xs xl:text-lg mb-4 about-text-anim text-start'>
              Momentum is a 2-day long festival organized in the month of November. Momentum is the university fest where we provide the student community from various Universities and Colleges with velocity. This year Momentum 2024, the 26th Edition is planned for 23rd-24th October.
            </span>
        </div>
      </div>
    </div>
  )
}

export default About
