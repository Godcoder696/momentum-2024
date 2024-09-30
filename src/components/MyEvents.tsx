import React from 'react'
import eve from '../data/events.json';

function MyEvents({events}) {
  return (
    <>
        <div className='overflow-y-scroll text-xs md:text-sm min-h-5/6 flex flex-col space-y-3 '>
            {
                events.length==0?
                <>No Events found</>
                :
                events.map((event,index)=>{
                    return(
                      <div 
                        key={index}
                        className='h-14 border-[1px] border-[#41454d] rounded-md flex items-center px-2 md:px-4 justify-between'>
                          <div className='max-h-[60%]'>{eve[event].name}</div>
                      </div>
                    )
                })
              }
        </div>
    </>
  )
}

export default MyEvents
