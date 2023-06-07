import React from 'react'
import Logo from '../../asset/logo.svg';
import Image from 'next/image';
function index() {
  return (
    <div className='w-[100%] h-[64px] flex justify-between items-center px-[5.5%] fixed z-[1]'>
             <Image
              src={Logo}
              width={161.6}
              height={32}
              alt="Picture of the author"
            />
          <div className='flex gap-[40px] text-[16px]'>
             <a className='hover:text-[#0098FF]' href=''>Home</a>
             <a className='hover:text-[#0098FF]' href=''>Activities</a>
             <a className='hover:text-[#0098FF]' href=''>Projects</a>
             <a className='hover:text-[#0098FF]' href=''>Members</a>       
          </div>
    </div>
  )
}

export default index