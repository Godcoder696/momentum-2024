'use client'
import Image from 'next/image'
import Link from 'next/link'
import SignInButton from './SignInButton'

function NavBar() {
  return (
    <div className='z-50 flex text-white w-[100%] justify-between px-1 lg:px-6 xl:px-10 py-4 montserrat-light fixed '>
      <div className='flex items-center justify-center space-x-3'>
        <Image src="/NCU.png" alt='mmt' height={70} width={70} className='h-10 w-14'/>
        <Image src="/Logo.png" alt='mmt' height={50} width={50} className='h-10 w-10'/>
      </div>
      <div className='flex items-center space-x-5 xl:space-x-10 font-light'>
        <Link href="/" className='hover:font-normal cursor-pointer text-xs md:text-sm'>
          <div>Home</div>
          <hr />
        </Link>
        <Link href="/events" className='hover:font-normal cursor-pointer text-xs md:text-sm'>Events</Link>
        <SignInButton/>
      </div>
    </div>
  )
}

export default NavBar
