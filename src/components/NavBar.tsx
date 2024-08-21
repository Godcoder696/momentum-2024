import React from 'react'
import SignInButton from './SignInButton'
import Image from 'next/image'
import Link from 'next/link'

function NavBar() {
  return (
    <div className='z-50 flex text-white w-[100%] justify-between px-3 md:px-24 py-4 montserrat-light fixed '>
      <Image src="/Logo.png" alt='mmt' height={50} width={50} className=''/>
      <div className='flex items-center space-x-10 font-light'>
        <Link href="/" className='hover:font-normal cursor-pointer'>
          <div>Home</div>
          <hr />
        </Link>
        <Link href="/events" className='hover:font-normal cursor-pointer'>Events</Link>
        <Link href="/" className='hover:font-normal cursor-pointer'>Faqs</Link>
        <Link href="/" className='hover:font-normal cursor-pointer'>Ambassador</Link>
        <SignInButton/>
      </div>
    </div>
  )
}

export default NavBar
