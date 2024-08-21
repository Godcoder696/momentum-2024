import { useState } from 'react';
import { FaAddressCard } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdPayments } from "react-icons/md";
import Gateway from './Gateway';

function Payment() {
  const [steps,setSteps]= useState(0);
  const stepsArr=[
    {
      data:"Fill In Details",
      icon: <FaAddressCard size={25} color='black'/>
    },
    {
      data:"Pay Fee",
      icon: <MdPayments size={25} color='black'/>
    },
    {
      data:"Registeration Complete",
      icon: <IoCheckmarkDoneCircle size={25} color='black'/>
    },
  ]
  return (
    <>
        <div className='h-4/5  w-full px-44'>
          <div className='bg-[#030919ae] px-10 py-7 gap-3 rounded-md flex'>
            <div className=' w-2/6 flex flex-col p-4  h-[480px] justify-between'>
              <div className='flex flex-col space-y-6'>
                <div className='w-full text-2xl font-semibold'>
                  {stepsArr[steps].data}
                </div>
                <hr />
                <div className='flex flex-col space-y-8 mt-7'>
                  {
                    stepsArr.map((step, index)=>{
                      return(
                        <div className='flex space-x-4 items-center cursor-pointer'
                          onClick={()=>{setSteps(index)}} key={index}>
                          <div className='h-12 w-12 rounded-[50%] bg-[#ffffffcf] flex justify-center items-center'>
                            {step.icon}
                          </div>
                          <div>{step.data}</div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              {/* <div className='self-end w-full flex gap-3 text-xs'>
                <button className='w-[50%] bg-white text-black py-3 rounded-md'>Previous</button>
                <button className='w-[50%] bg-white text-black py-3 rounded-md'>Next</button>
              </div> */}
            </div>
            <div className='w-4/6 text-sm font-light h-[480px] overflow-x-hidden ml-7'>
              {
                steps==0?
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfQT3eSIWkWOYcwMt37Gr4tvhWO45XKgLZAJlPZVZj5gU0Biw/viewform?embedded=true" width="640" height="480" >Loading…</iframe>
                :
                (
                  steps==1?
                  <Gateway/>
                  :
                  (
                    steps==2?
                    <>meow ji meow</>
                    :
                    <></>
                  )
                )
              }
            </div>
          </div>
        </div>
    </>
  )
}

export default Payment
