import React from 'react'
import Image from 'next/image'
import Background from "../../assets/images/pages/blogs/banner.png";
import Cricle from "../../assets/images/pages/blogs/cricle.svg";
import Human from "../../assets/images/pages/blogs/human.svg";
import Button from '@/components/Button';
const Blogs = () =>
{
    return (
        <div>
            <div className='bg-white relative top-0 w-full'>
                 <div>
                     <div className='bg-[#F1F6FA]  absolute w-[100%] h-[20%] bottom-0 left-0'></div>
                     <Image src={Background} alt='background effect' className=' absolute w-[100%] h-[15%]  bottom-0 left-0'></Image>
                 </div>
                 <div>
                        <Image src={Background} alt='background effect' className='w-screen h-screen '></Image>
                        <Image src={Cricle} alt='big cricle' className='absolute top-0 right-0 h-screen w-[30%]'></Image>
                        <Image src = {Human} alt='dever model' className='absolute top-[43%] right-[80px] w-[26.5%] h-[47.5%]'></Image>
                 </div> 
                 <div className='px-[80px] absolute w-[49.9%] h-[50%] top-[25%] space-y-[60px]'>
                      <div className=' flex-col space-y-[35px] '>
                        <div className=' w-[100%]  text-[80px] font-semibold leading-[97px]'>  DEVER PROJECT BLOG </div>   
                        <div className=' text-[24px] leading-[29px] font-normal text-gray-800 text-opacity-50'>WE WANT TO INSPIRE PEOPLE</div>
                      </div>
                      <Button ></Button>
                 </div>
                       
            </div>       
         </div>
    )
}

export default Blogs