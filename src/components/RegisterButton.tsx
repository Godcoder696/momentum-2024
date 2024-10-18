import { useAppContext } from '@/app/context/ContextProvider';
import { useSession } from 'next-auth/react';
import React from 'react'
import events from '../data/events.json'

function RegisterButton({eventId, setProceedToPay}) {
    
  const {data:session}= useSession();
  
  const {user}= useAppContext();
  return (
    <>
        <button 
          className={`w-full rounded-sm ${session? 'hover:bg-green-600 bg-green-500':'bg-green-600'}`}
          onClick={()=>{setProceedToPay(true)}}
          disabled={(!session || (user && user.events.includes(eventId)) || (user && !user.userVerified) || (events[eventId].closed && events[eventId].closed))?true:false}>
            {
              user && user.events.includes(eventId)?
              <div className='px-5 py-4 w-full h-full'>
                Registered
              </div>
              :
              (
                  (events[eventId].closed && events[eventId].closed)?
                  <div className='px-5 py-4 w-full h-full'>
                    Closed
                  </div>
                  :
                  <>
                    {
                      session?
                      (user && !user.userVerified? 
                        <a href='/profile' className='w-full h-full'>
                          <div className='px-5 py-4'>
                            Kindly Fill your Details
                          </div>
                        </a>
                        : 
                        <div className='px-5 py-4 w-full h-full'>
                          Register !
                        </div>
                      )
                      :
                      <div className='px-5 py-4 w-full h-full'>
                        Sign In To Register !
                      </div>
                    }
                  </>
              )
            }
        </button>
    </>
  )
}

export default RegisterButton
