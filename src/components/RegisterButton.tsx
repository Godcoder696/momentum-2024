import { useAppContext } from '@/app/context/ContextProvider';
import { useSession } from 'next-auth/react';
import React from 'react'

function RegisterButton({eventId, setProceedToPay}) {
    
  const {data:session}= useSession();
  
  const {user}= useAppContext();
  return (
    <>
        <button 
          className={`w-full px-5 py-2 rounded-sm ${session? 'hover:bg-green-600 bg-green-500':'bg-green-600'}`}
          onClick={()=>{setProceedToPay(true)}}
          disabled={(!session || (user && user.events.includes(eventId)) || (user && !user.userVerified))?true:false}>
            {
              user && user.events.includes(eventId)?
              "Registered"
              :
              (
                  session?
                  (user && !user.userVerified? "Kindly Fill your Details": "Register !")
                  :
                  "Sign In To Register !"
              )
            }
        </button>
    </>
  )
}

export default RegisterButton
