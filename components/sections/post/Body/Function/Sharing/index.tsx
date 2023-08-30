import React from 'react'
import Image from 'next/image'
import fb from "@images/pages/blogs/Facebook.svg"
import twi from "@images/pages/blogs/Twitter.svg"

function Sharing() {
  return (
    <div>
        <div className=' space-y-[20px]'>
            <div className='w-[100%] border-b-8 border-highlight flex justify-center flex-col pb-[6px]'>
                <div className='text-[26px] font-[400] h-[31px] text-center'>528</div>
                <div className='text-[16px] font-[400] leading-[20px]  h-[17px]  text-center text-[#A7A7A7] '>Shares</div>
            </div>
            <div className='w-[100%] space-y-[10px] '>
                <div className='w-[100%] flex justify-end'>
                    <div className='w-[54px] h-[54px] bg-[#F8F9FA] rounded-[100%] flex justify-center content-center '>
                    <Image src={fb} alt=""></Image>
                    </div>
                   
                </div>
                <div className='w-[100%] flex justify-end'>
                    <div className='w-[54px] h-[54px] bg-[#F8F9FA] rounded-[100%] flex justify-center content-center '>
                    <Image src={twi} alt=""></Image>
                    </div>
                   
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Sharing