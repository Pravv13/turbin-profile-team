import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className='flex px-4 py-3 bg-[#D0E7D2] justify-around w-full'>
        <div className=''>
          <Link href="./">
            <Image 
              src="/assets/image/turbinwl.png" 
              alt='Icon Turbin'
              width={150}
              height={200}
              className='pr-5'
              />
          </Link>
        </div>
        <div className='flex items-center space-x-3 text-black font-bold font-mono text-xl'>
            <Link href="/team-list" className='block p-3 gap-2 rounded-xl hover:text-[#618264]'>Team Profile</Link>
        </div>
    </nav>
  )
}

export default Header
