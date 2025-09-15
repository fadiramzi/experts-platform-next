import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TopNavbar() {
  return (
  <div className='bg-black dark:bg-green-950 flex justify-around p-4'>
    <div className=''>
        <ul className=" flex justify-between space-x-4">
          <li className='hover:bg-lime-950 hover:p-1' ><Link href="/" className='text-lime-500'>Home</Link></li>
          <li className='hover:bg-lime-950 hover:p-1' ><Link  className='text-lime-500' href="/about">About</Link></li>
          <li className='hover:bg-lime-950 hover:p-1' ><Link  className='text-lime-500'href="/contact">Contact</Link></li>
          <li className='hover:bg-lime-950 hover:p-1' ><Link  className='text-lime-500' href="/experts">Experts</Link></li>
        </ul>
    </div>
    <div className='bg-lime-950'>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  </div>
  )
}
