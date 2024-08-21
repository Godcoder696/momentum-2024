'use client'
import { useState } from 'react';
import Faq from './Faq';
import FaqImage from './FaqImage';

function Faqs() {
    const faqs = [
        {
          ques: "How Can Students from outside NCU Join?",
          highlight: "bg-orange-600",
          ans: "The students must register for at least one event and carry their valid university identity proof  as an absolute requirement.",
        },
        {
          ques: " How do I confirm my participation in the fest?",
      
          ans: "To confirm your participation, you will receive a confirmation email.",
        },
        {
          ques: "How is Momentum being conducted this year ?",
      
          ans: "Momentum will be conducted at the NCU Campus, with a few events happening online.",
        },
        {
          ques: "Is the entry free for all? Who can attend ?",
      
          ans: "To secure your entry to Momentum, you must register for at least one event",
        },
        {
          ques: "Who can attend Momentum ?",
      
          ans: " Momentum is open to all students from any college. You can attend Momentum even if you are not part of any college fest committee. However carrying your College ID card is essential along with your event registration ticket.",
        },
        {
          ques: "Will there be food stalls in the fest ?",
      
          ans: "Yes, there will be a variety of food stalls available at the fest.",
        },
      ];
      const [toggle, setToggle]= useState(null);
  return (
    <div className='z-40 bg-gradient-to-b from-[#030919] to-[#020015] w-screen flex justify-center items-center px-5 xl:px-20 pb-10 -mt-2 py-10'>
      <div className='flex w-full text-white justify-around space-x-4 z-30'>
        <FaqImage/>
        <div className='xl:w-2/5 flex flex-col space-y-3'>
            <div className='space-x-2 text-lg xl:text-3xl font-semibold w-full'>
              FAQs
            </div>
            <div className='py-2 xl:space-y-4 space-y-2'>
                {
                    faqs.map((element, key)=>{
                        return (
                          <Faq key={key} element={element} toggle={toggle} setToggle={setToggle} index={key}/>
                        )
                    })
                }
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs
