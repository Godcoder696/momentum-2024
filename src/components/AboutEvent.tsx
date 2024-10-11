import { useAppContext } from '@/app/context/ContextProvider';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import events from '../data/events.json';
import EventDetails from './EventDetails';
import RegisterButton from './RegisterButton';

function AboutEvent({setProceedToPay, eventId}) {
  const {data:session}= useSession();
  const [drawerOpen, setDrawerOpen]= useState(false);
  const {user}= useAppContext();

  console.log(user);
  

  return (
    <>
      <div className='flex flex-col max-h-[500px] xl:w-4/6 xl:space-y-5 z-30 p-6 xl:p-10 rounded-lg bg-[#030919ae] overflow-y-scroll '>
        <EventDetails event={events[eventId]}/>
      </div>
      <div className='xl:sticky top-[110px]'>
        <div className='space-y-3'>
        <Image src={events[eventId].imgUrl} height={300} width={300} alt='p1' className='z-20 rounded-sm hidden sm:block'/> 
          <div className='hidden sm:block'>
            {
              user && user.events.includes(eventId)?
              <a href={events[eventId].waLink} target='_blank' className='w-full'>
                <button className={`w-full px-5 py-2 rounded-sm ${session? 'hover:bg-purple-600 bg-purple-500':'bg-purple-600'}`}>
                  Join Whatsapp Group
                </button>
              </a>
              :
              <RegisterButton setProceedToPay={setProceedToPay} eventId={eventId} />
            }
          </div>
        </div>
      </div>
      <div className='sm:hidden w-full'>
        {
          user && user.events.includes(eventId)?
          <a href={events[eventId].waLink} target='_blank' className='w-full'>
            <button className={`w-full px-5 py-2 rounded-sm ${session? 'hover:bg-purple-600 bg-purple-500':'bg-purple-600'}`}></button>
          </a>
          :
          <RegisterButton setProceedToPay={setProceedToPay} eventId={eventId} />
        }
      </div>
    </>
  )
}

export default AboutEvent
