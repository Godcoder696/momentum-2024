import React from 'react'

function MyEvents({events}) {
  return (
    <>
        <div className='overflow-y-scroll text-sm h-5/6 flex flex-col space-y-3 '>
            {
                events.length==0?
                <>No Events found</>
                :
                events.map((event,index)=>{
                    return(
                      <div 
                        key={index}
                        className='h-14 border-[1px] border-[#41454d] rounded-md flex items-center px-4 justify-between'>
                          <div>Event Name</div>
                          <div>Individual Event</div>
                          <div>1/1</div>
                      </div>
                    )
                })
            }
            
        </div>
    </>
  )
}

export default MyEvents
