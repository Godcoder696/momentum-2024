import React from 'react'

function MyEvents() {
  return (
    <>
        <div className='overflow-y-scroll text-sm h-5/6 flex flex-col space-y-3 '>
            <div className='h-14 border-[1px] border-[#41454d] rounded-md flex items-center px-4 justify-between'>
                <div>Event Name</div>
                <div>Individual Event</div>
                <div>1/1</div>
            </div>
            <div className='h-14 border-[1px] border-[#41454d] rounded-md flex items-center px-4 justify-between'>
                <div>Event Name</div>
                <div>Team Event</div>
                <div>4/5</div>
            </div>
            <div className='h-14 border-[1px] border-[#41454d] rounded-md flex items-center px-4 justify-between'>
                <div>Event Name</div>
                <div>Individual Event</div>
                <div>1/1</div>
            </div>
        </div>
    </>
  )
}

export default MyEvents
