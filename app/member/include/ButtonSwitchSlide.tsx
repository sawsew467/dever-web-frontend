import React from 'react'
import Image from 'next/image'
import {
    Rectangle2,
    Rectangle3,
    Vector,
    Rectangle1,
    VectorFirst,
} from "./svg/svg";
const ButtonSwitchSlide = () => {
  return (
    <div className="mx-[auto] my-[10px]">
            <ul className="flex justify-center font-['Inter'] not-italic ">
              <li className="mx-[5px]">
                <button className=" sm:text-[16px] text-[12px] rounded-[2px] hover:bg-[#0098FF] focus:bg-[#0098FF] group lg:w-[40px] lg:h-[40px] sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
                  <VectorFirst  className="group-hover:fill-[#fff] group-focus:fill-[#fff]  mx-[auto] mt-[auto]" />
                </button>
              </li>
              <li className="mx-[5px]">
                <button className=" sm:text-[16px] text-[12px] rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff]  mx-[auto] mt-[auto] lg:w-[40px] lg:h-[40px] sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
                  1
                </button>
              </li>
              <li className="mx-[5px]">
                <button className=" sm:text-[16px] text-[12px] rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff]  mx-[auto] mt-[auto] lg:w-[40px] lg:h-[40px] sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
                  2
                </button>
              </li>
              <li className="mx-[5px]">
                <button className=" sm:text-[16px] text-[12px] rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff] mx-[auto] mt-[auto] lg:w-[40px] lg:h-[40px] sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
                  3
                </button>
              </li>
              <li className="mx-[5px]">
                <button className=" sm:text-[16px] text-[12px] rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff]  mx-[auto] mt-[auto] lg:w-[40px] lg:h-[40px] sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
                  4
                </button>
              </li>
              <li className="mx-[5px]">
                <button className=" rotate-180  text-[12px] sm:text-[16px] rounded-[2px] hover:bg-[#0098FF] focus:bg-[#0098FF] group lg:w-[40px] lg:h-[40px] sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
                  <VectorFirst  className="group-hover:fill-[#fff] group-focus:fill-[#fff]  mx-[auto] mt-[auto] sm:w-[100%] w-" />
                </button>
              </li>
            </ul>
          </div>
  )
}

export default ButtonSwitchSlide