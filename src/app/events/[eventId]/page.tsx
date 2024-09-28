'use client'
import AboutEvent from '@/components/AboutEvent'
import EventFormWrapper from '@/components/EventFormWrapper'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

function Page({params}) {
  const [proceedToPay, setProceedToPay]= useState(false);
  const { data: session } = useSession();
  const router= useRouter();

  useEffect(()=>{
    console.log(params.eventId);
    let eventId= Number(params.eventId);
    console.log(eventId);
    if(eventId<0 || eventId>63 || Number.isNaN(eventId)){
      router.push("/events/"+params.eventId+"/page-not-found");
    }
  },[params.eventId])
  
  return (
    <>
      {
        ((params.eventId>=0 && params.eventId<=63)?
          <div className='event-bg min-h-screen'>
            <div className=' text-white z-30 flex justify-around pb-8 items-start xl:px-16 pt-[110px] h-full'>
              {
                !proceedToPay?
                <AboutEvent setProceedToPay={setProceedToPay} eventId={params.eventId}/>
                :
                session && <EventFormWrapper eventId={params.eventId}/>
              }
            </div>
          </div>
          :
          <></>
        )
      }
    </>
  )
}

export default Page
