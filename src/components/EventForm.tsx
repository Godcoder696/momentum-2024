import React from 'react'

function EventForm() {
  return (
    <div className='flex flex-col space-y-5'>
        <div className='flex flex-col space-y-1'>
            <div className='text-sm'>Team Leader Details</div>
            <div className='flex space-x-3 text-black'>
                <input 
                    type="text" 
                    className='bg-gray-50 h-10 px-2 w-[49%] rounded-md outline-none' 
                    placeholder='Full name'
                />
                <input 
                    type="text" 
                    className='bg-gray-50 h-10 px-2 w-[49%] rounded-md' 
                    placeholder='Roll number'
                />
            </div>
        </div>
        <div className='flex flex-col space-y-1'>
            <div className='text-sm'>Team Details</div>
            <div className='space-y-2'>
                <div className='flex space-x-3 text-black'>
                    <input 
                        type="text" 
                        className='bg-gray-50 h-10 px-2 w-[49%] rounded-md outline-none' 
                        placeholder='Member 1 name'
                    />
                    <input 
                        type="text" 
                        className='bg-gray-50 h-10 px-2 w-[49%] rounded-md' 
                        placeholder='Member 1 roll number'
                    />
                </div>
                <div className='flex space-x-3 text-black'>
                    <input 
                        type="text" 
                        className='bg-gray-50 h-10 px-2 w-[49%] rounded-md outline-none' 
                        placeholder='Member 1 name'
                    />
                    <input 
                        type="text" 
                        className='bg-gray-50 h-10 px-2 w-[49%] rounded-md' 
                        placeholder='Member 1 roll number'
                    />
                </div>
                <div className='flex space-x-3 text-black'>
                    <input 
                        type="text" 
                        className='bg-gray-50 h-10 px-2 w-[49%] rounded-md outline-none' 
                        placeholder='Member 1 name'
                    />
                    <input 
                        type="text" 
                        className='bg-gray-50 h-10 px-2 w-[49%] rounded-md' 
                        placeholder='Member 1 roll number'
                    />
                </div>
                <div className='flex space-x-3 text-black'>
                    <input 
                        type="text" 
                        className='bg-gray-50 h-10 px-2 w-[49%] rounded-md outline-none' 
                        placeholder='Member 1 name'
                    />
                    <input 
                        type="text" 
                        className='bg-gray-50 h-10 px-2 w-[49%] rounded-md' 
                        placeholder='Member 1 roll number'
                    />
                </div>
            </div>
        </div>
        <div className='flex flex-col space-y-1'>
            <div className='text-sm'>Referral Id (optional)</div>
            <div className='flex space-x-3 text-black'>
                <input 
                    type="text" 
                    className='bg-gray-50 h-10 px-2 w-[49%] rounded-md outline-none' 
                    placeholder='Enter Id'
                />
            </div>
        </div>
        <div className='text-xs'>
            <span className='font-bold'>**Note** </span>
            Kindly provide valid team details as they would be verified at the time of event.
        </div>
    </div>
  )
}

export default EventForm
