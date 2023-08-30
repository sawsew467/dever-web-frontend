import React from 'react'
import Image from 'next/image'
import avatar from "@images/pages/blogs/background.jpeg"
function Author() {
  return (
    <div>
        <div className='max-w-[1440px] w-full  mx-auto md:px-[40px] xl:px-[80px] flex justify-between  mb-[80px]'>
            <div className='space-y-[20px]'>
                <div className='px-[20px] border-l-8 border-highlight text-[36px] font-[700] leading-[48px] '>Author</div>
                <div className='w-[718px] space-x-[75px] flex '>
                    <Image src={avatar} alt='' className='w-[27.86%] rounded-[125px] w-[200px] h-[200px] overflow-hidden '></Image>
                    <div className='w-[61.7%]'>
                        <div>
                            <div className=' font-[700] '>Vo Huy Hoang</div>
                            <div>@hoangvh238.dev</div>
                        </div>
                        <div>Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.</div>
                        <div>
                            <div>K17DN</div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Author