'use-client'

import Button from '@/components/Button'
import React from 'react'

function Product() {
    return (
       <section className='w-screen h-fit flex justify-center items-center'>
            <div className='w-[1440px] h-fit py-[60px] px-[80px] bg-red-200 flex justify-between'>
                <div className='w-[610px] h-[610px] bg-blue-200 flex flex-wrap gap-[50px]'>
                    <div className='w-[280px] h-[280px] bg-slate-200'>    
                    <Button></Button>
                    </div>  
                    <div className='w-[280px] h-[280px] bg-slate-200'></div>    
                    <div className='w-[280px] h-[280px] bg-slate-200'></div>    
                    <div className='w-[280px] h-[280px] bg-slate-200'></div>    

                </div>
                <div className='w-[610px] h-[610px] bg-blue-200'></div>
            </div>
      </section>
    )
}

export default Product
