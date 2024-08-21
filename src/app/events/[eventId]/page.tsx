'use client'
import AboutEvent from '@/components/AboutEvent'
import Payment from '@/components/Register'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

function Page({params}) {
  const [proceedToPay, setProceedToPay]= useState(false);
  const { data: session } = useSession();

  useEffect(()=>{
    setProceedToPay(false);
  },[usePathname])
  return (
    <div className='event-bg min-h-screen'>
      <div className=' text-white z-30 flex justify-around pb-8 items-start px-16 pt-[110px] h-full'>
        {
          !proceedToPay?
          <AboutEvent setProceedToPay={setProceedToPay}/>
          :
          session && <Payment/>
        }
      </div>
    </div>
  )
}

export default Page
