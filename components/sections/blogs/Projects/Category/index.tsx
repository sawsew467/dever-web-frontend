import React from 'react'
import Image from "next/image";
import { PostProps } from '../Slider';

interface catePros {
    category : PostProps["category"];
}

function Category({category}: catePros) {
    return (
       <div className='flex  justify-center items-center sm:text-[12px] lg:text-[14px] bg-primary text-white font-[400] px-[8px] py-[4px] w-fit h-fit '>
            {category}
       </div>
    )
}

export default Category
