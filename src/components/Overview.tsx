import { useAppContext } from '@/app/context/ContextProvider'
import React from 'react'

function Overview({loading}) {
  const {data}= useAppContext();
  return (
    <>
      {
        loading?
        <>Loading...</>
        :
        <div className='flex justify-between space-x-3'>
          <div className='h-10 bg-[#3c3c3c] w-full px-5 py-10 text-center rounded-lg'>
            Total Registrations: {data.payments}
          </div>
          <div className='h-10 bg-[#3c3c3c] w-full px-5 py-10 text-center rounded-lg'>
            Total Teams: {data.teams}
          </div>
          <div className='h-10 bg-[#3c3c3c] w-full px-5 py-10 text-center rounded-lg'>
            Total Users: {data.users}
          </div>
        </div>
      }
    </>
  )
}

export default Overview
