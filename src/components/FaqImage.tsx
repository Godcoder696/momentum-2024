'use client'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useEffect } from 'react'

function FaqImage() {
    useEffect(()=>{
        gsap.fromTo(".q-mark",
            {
                y: -10
            },
            {
                y: 0,
                duration: 1,
                ease: 'power1.inOut',
                yoyo: true,
                repeat: -1

            }
        )
    },[])
    return (
        <div className='mt-10 hidden xl:block'>
            <Image src="/Q-mark.svg" height={250} width={250} alt='?' className='q-mark'></Image>
        </div>
    )
}

export default FaqImage
