'use client'
import React from "react";
import Link from "next/link";
import SectionTittle from "@/components/SectionTitle";
import Image from "next/image";
import goHome from "@pageImage/not-found/arrow-go-back-line.svg";
import logo404 from "@pageImage/not-found/404.svg";
import send from "@pageImage/not-found/send.svg";
import { useState, useRef } from "react";
import { ValueOf } from "next/dist/shared/lib/constants";
const postToServer = (text : any) =>{
  console.log('text', text);
}
const Not_found = () => {
  const input = useRef<HTMLParagraphElement | ValueOf<any> >(null);
  const [open, setOpen] = useState<boolean | undefined>(false);
  console.log('input.current.value', open )
  return (
    <article 
    onClick={(event : React.MouseEvent<HTMLElement>)=>{
      if(!input.current.contains(event.target) && input.current.innerText == "") setOpen(false)
    }}
    className="max-w-[1440px] flex flex-col gap-[40px] mx-[auto] xl:px-[80px] md:px-[40px] sm:px-[20px] my-[120px]">
      <div className="flex justify-between items-end md:flex-row sm:gap-[25px] md:gap-[20px] sm:flex-col ">
        <SectionTittle
          title="Page Not Found"
          subtitle="Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us."
          textPosition="left"
        ></SectionTittle>
        <Link
          href="/"
          className="min-w-[137px] flex-wrap content-center h-[54px] px-[14px] flex gap-[14px] bg-primary rounded-[10px] md:items-end sm:item-start"
        >
          <Image src={goHome} alt="go home" width={23} height={22} className="mt-[14px] mb-[18px]"></Image>
          <p className=" font-[700] text-[16px] mt-[14px] mb-[16px] text-[#fff]">Go Home</p>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-[40px]">
        <div className="flex gap-[31.5px] justify-center">
          <Image src={logo404} alt="logo" width={911} height={290}></Image>
        </div>
        <div className="flex gap-[40px] items-end">
          <div className="relative xl:w-[760px] z-1  h-[auto] min-h-[128px] border-[#0098FF] border-[2px] rounded-[10px]">
            <div ref={input}
               onKeyDown={(event : React.KeyboardEvent<HTMLDivElement>) => {
                if (event.code == "Enter") {
                  postToServer(input.current.innerText);
                  input.current.innerText="";
                  event.preventDefault();
                  setOpen(false);
            }
          }}  
            onClick={() =>setOpen(true)}
            contentEditable={true}  className="cursor-pointer font-[500] text-[16px] absolute z-2 flex items-start outline-0 pl-[20px] pt-[20px] top-0 left-0 w-[100%] h-[100%] text-left ">
            </div>
            <p className={`absolute left-[20px] ${open ? "top-0 opacity-[0.55]" : "top-[20px] opacity-[1]"} font-[500] transition-[top,opacity] duration-[0.5s] text-[#0098FF]`}>Send me your feedback, if you think this is a our problem.</p>
          </div>
          <button 
            onClick={()=>{
              postToServer(input.current.innerText);
              input.current.innerText="";
              setOpen(false);
            }}
            className="flex gap-[16px] px-[14px] rounded-[10px] w-[111px] h-[57px] items-center bg-primary">
            <Image src={send} alt="gui" width={27} height={23}></Image>
            <p className="font-[500] text-[16px] text-[#fff]">Send</p>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Not_found;
