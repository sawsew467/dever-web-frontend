import React from 'react'
import Logo from '../../assest/logo.svg';
import Image from 'next/image';
function index() {
  return (
    <div className='w-[100%] h-[64px] flex justify-between items-center px-[5.5%]'>
             <Image
              src={Logo}
              width={161.6}
              height={32}
              alt="Picture of the author"
            />
          <div className='flex gap-[40px]'>
             <a className='hover:text-[#0098FF]' href=''>Home</a>
             <a className='hover:text-[#0098FF]' href=''>Activities</a>
             <a className='hover:text-[#0098FF]' href=''>Projects</a>
             <a className='hover:text-[#0098FF]' href=''>Members</a>       
          </div>
    </div>
  )
}

export default index