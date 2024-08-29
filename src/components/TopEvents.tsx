'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

function TopEvents() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{
    gsap.fromTo(".go-dn-1",{
      y: -50,
    },
    {
      y: 50,
      duration: 6, 
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    }
    )
    gsap.fromTo(".go-dn-2",{
      y: -50,
    },
    {
      y: 50,
      duration: 3, 
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    }
    )
    gsap.fromTo(".go-up-1",{
      y: 50,
    },
    {
      y: -100,
      duration: 6, 
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    }
    )
    gsap.fromTo(".go-up-2",{
      y: 20,
    },
    {
      y: -50,
      duration: 3, 
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    }
    )
  },[])
  return (
    <div className='min-h-80 xl:min-h-screen w-screen flex flex-col justify-between -mt-2 z-50'>
      <div className='flex items-center'>
        {/* <span className='absolute text-white ml-10 text-7xl'>FEATURED</span> */}
        <div className='xl:flex absolute w-screen justify-between hidden'>
          <Image src="/Planet.svg" width={300} height={500} alt='' className='xl:mt-32 mt-16 h-24 xl:h-80'/>
          <Image src="/megaphone.svg" width={400} height={500} alt='' className='xl:-mt-30 align-bottom xl:-mr-20 ml-40 h-28 xl:h-80'/>
        </div>
        <Image src="/featured-1.svg" width={100} height={100} alt='' className='w-screen'/>
      </div>
      <div className='min-h-96 md:min-h-screen px-1 xl:px-6 flex space-x-4 justify-between bg-[#bd56ec] -mt-28 xl:-mt-36 -z-10 texture-bg'> 
        <div className='space-y-2 xl:space-y-4 go-dn-1'>
          <Image src="/top-events/5.jpg" height={400} width={350} alt='p1' className='shadow-lg shadow-[#00000081]'/>
          <Image src="/top-events/6.jpg" height={400} width={350} alt='p1' className='shadow-lg shadow-[#000000]'/>
          <Image src="/top-events/3.jpg" height={400} width={350} alt='p1' className='block sm:hidden shadow-lg shadow-[#00000081]'/>
          <Image src="/top-events/4.jpg" height={400} width={350} alt='p1' className='block md:hidden shadow-lg shadow-[#00000081]'/>
        </div>
        <div className='space-y-2 xl:space-y-4 go-up-1'>
          <Image src="/top-events/1.jpg" height={400} width={350} alt='p1' className='shadow-lg shadow-[#00000081]'/>
          <Image src="/top-events/9.jpg" height={400} width={350} alt='p1' className='shadow-lg shadow-[#00000081]'/>
          <Image src="/top-events/7.jpg" height={400} width={350} alt='p1' className='block sm:hidden shadow-lg shadow-[#00000081]'/>
          <Image src="/top-events/8.jpg" height={400} width={350} alt='p1' className='block md:hidden shadow-lg shadow-[#00000081]'/>
        </div>
        <div className='space-y-1 xl:space-y-3 go-dn-2'>
          <Image src="/top-events/2.jpg" height={400} width={350} alt='p1' className='shadow-lg shadow-[#00000081]'/>
          <Image src="/top-events/10.jpg" height={400} width={350} alt='p1' className='shadow-lg shadow-[#00000081]'/>
          <Image src="/top-events/11.jpg" height={400} width={350} alt='p1' className='block sm:hidden shadow-lg shadow-[#00000081]'/>
          <Image src="/top-events/12.jpg" height={400} width={350} alt='p1' className='block md:hidden shadow-lg shadow-[#00000081]'/>
        </div>
        <div className='space-y-1 xl:space-y-2 go-up-2'>
          <Image src="/top-events/4.jpg" height={400} width={350} alt='p1' className='shadow-lg shadow-[#00000081]'/>
          <Image src="/top-events/12.jpg" height={400} width={350} alt='p1' className='shadow-lg shadow-[#00000081]'/>
          <Image src="/top-events/5.jpg" height={400} width={350} alt='p1' className='block sm:hidden shadow-lg shadow-[#00000081]'/>
          <Image src="/top-events/1.jpg" height={400} width={350} alt='p1' className='block md:hidden shadow-lg shadow-[#00000081]'/>
        </div>
      </div>
      <div className='flex items-center justify-end -mt-48 xl:-mt-96'>
        <Image src="/featured-2.svg" width={100} height={100} alt='' className='w-screen'/>
        {/* <button className='xl:py-3 xl:px-10 px-6 py-2 bg-gray-200 hover:bg-white absolute text-sm mr-3 xl:mr-20 xl:text-xl rounded-[2rem] xl:mb-10 -mb-3'>
          SEE ALL
        </button> */}
      </div>
    </div>
  )
}

export default TopEvents
