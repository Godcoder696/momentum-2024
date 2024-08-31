import React, { useState } from 'react'
import EventDetails from './EventDetails'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import BottomDrawer from './BottomDrawer';
import CustomDrawer from './CustomDrawer';

function AboutEvent({setProceedToPay}) {
  const {data:session}= useSession();
  const [drawerOpen, setDrawerOpen]= useState(false);
  return (
    <>
        <div className='xl:flex flex-col h-[500px] w-4/6 space-y-5 z-30 p-10 rounded-lg bg-[#030919ae] overflow-y-scroll hidden'>
          <EventDetails/>
        </div>
        <div className='absolute xl:sticky top-[110px]'>
            <div className='space-y-3'>
            <Image src="/event-poster.png" height={300} width={300} alt='p1' className='z-20 rounded-sm'/> 
              <button 
                className={`w-full px-5 py-2 rounded-sm ${session? 'hover:bg-green-600 bg-green-500':'bg-green-600'}`}
                onClick={()=>{setProceedToPay(true)}}
                disabled={session?false:true}>
                  {
                    session?
                    "Register !"
                    :
                    "Sign In To Register !"
                  }
              </button>
              <button
                className={`block sm:hidden w-full px-5 py-2 rounded-sm ${session? 'hover:bg-purple-600 bg-purple-500':'bg-purple-600'}`}
                onClick={()=>{setDrawerOpen(true)}}>
                Event Details
              </button>
            </div>
        </div>
        <BottomDrawer drawerOpen={drawerOpen} setDrawerOpen={ setDrawerOpen}/>
        {/* <CustomDrawer drawerOpen={drawerOpen} setDrawerOpen={ setDrawerOpen}/> */}
    </>
  )
}

export default AboutEvent
