import React, { useState } from 'react'

function EventForm({rId,setRId, members, setMembers, teamName, setTeamName}) {
    function handleMemberChange(index,event){
        let data= [...members];
        data[index][event.target.name]= event.target.value;
        setMembers(data);
    }
  return (
    <div className='flex flex-col space-y-5'>
        <div className='flex flex-col space-y-1'>
            <div className='text-sm'>Team Name</div>
            <div className='flex space-x-3 text-black'>
                <input 
                    type="text" 
                    className='bg-gray-50 h-10 px-2 w-[49%] rounded-md outline-none' 
                    placeholder='Enter team name'
                    value={teamName}
                    onChange={(e)=>{
                        setTeamName(e.target.value)
                    }}
                    required
                />
            </div>
        </div>
        <div className='flex flex-col space-y-1'>
            <div className='text-sm'>Team Details</div>
            {
                members.map((input,index)=>{
                    return (
                        <div className='space-y-2' key={index}>
                            <div className='flex space-x-3 text-black'>
                                <input 
                                    name='name'
                                    type="text" 
                                    className='bg-gray-50 h-10 px-2 w-[49%] rounded-md outline-none' 
                                    placeholder={`Member ${index+1} name`}
                                    value={input.name}
                                    onChange={event=> handleMemberChange(index,event)}
                                />
                                <input 
                                    name='rollNum'
                                    type="text" 
                                    className='bg-gray-50 h-10 px-2 w-[49%] rounded-md' 
                                    placeholder={`Member ${index+1} roll number`}
                                    value={input.rollNum}
                                    onChange={event=> handleMemberChange(index,event)}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className='flex flex-col space-y-1'>
            <div className='text-sm'>Referral Id (optional)</div>
            <div className='flex space-x-3 text-black'>
                <input 
                    type="text" 
                    className='bg-gray-50 h-10 px-2 w-[49%] rounded-md outline-none' 
                    placeholder='Enter Id'
                    value={rId}
                    onChange={(e)=>{
                        setRId(e.target.value)
                    }}
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
