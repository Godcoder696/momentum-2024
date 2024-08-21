import React from 'react'
import EventDetails from './EventDetails'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

function AboutEvent({setProceedToPay}) {
  const {data:session}= useSession();
  return (
    <>
        <div className='flex flex-col h-[500px] w-4/6 space-y-5 z-30 p-10 rounded-lg bg-[#030919ae] overflow-y-scroll'>
            <EventDetails/>
        </div>
        <div className='sticky top-[110px]'>
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
            </div>
        </div>
    </>
  )
}

export default AboutEvent
