import React from 'react'
import Link from 'next/link'
import arrowRight from "@images/pages/blogs/arrowRightNonColor.svg";
import Image from 'next/image';
interface DirectPros {
    currenPage : string
}


function Direction({currenPage}:DirectPros) {
  return (
    <>
    <div className='text-[14px] font-[400] leading-normal flex flex-row  align-center  '>
    <Link href={`/`}>
              <div>Home</div>
            </Link>
    <Image className=""src={arrowRight} alt='right arrow'></Image>
    <Link href={`/blogs`}>
              <div>Blogs</div>
            </Link>
    <Image className=""src={arrowRight} alt='right arrow'></Image>
    <div>{currenPage}</div>
    </div>
    </>
  )
}

export default Direction
