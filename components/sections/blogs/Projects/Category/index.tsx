import React from 'react'
import Image from "next/image";
import { postPros } from '../Slider';

interface catePros {
    category : postPros["category"];
}

function Category({category}: catePros) {
    return (
       <div className='flex justify-center items-center text-[14px] bg-primary text-white font-[400] px-[8px] py-[4px] '>
            {category}
       </div>
    )
}

export default Category
