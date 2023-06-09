import React from 'react'
import Image from 'next/image'
import {
    Rectangle2,
    Rectangle3,
    Vector,
    Rectangle1,
    VectorFirst,
} from "../svg/svg";
import logo from "../img/logodever1.png";
import avatar from "../img/avatar.png";
import group1498 from "../img/Group 1498.svg";

const LiListMember = () => {
  return (
    <li className=" cursor-pointer  relative">
                <Image
                  width={270}
                  height={400}
                  className="object-cover rounded-tl-[20px] rounded-br-[20px] lg:w-[270px] lg:h-[400px] sm:w-[200px] sm:h-[300px] 
                  w-[160px] h-[200px]"
                  alt=""
                  src={avatar}
                ></Image>
                <Image
                  className="absolute right-[14px] top-[14px] h-[25px] w-[28px]"
                  src={logo}
                  alt="anh thang"
                />
                <div className="h-[auto] absolute bottom-0 w-[100%]">
                  <Rectangle3 className="fill-[#FF00008C] h-[auto] absolute   bottom-0 w-[100%]" />
                  <Rectangle2 className="absolute bottom-0 h-[auto] lg:h-[auto] w-[100%]" />
                  <div className="font-['roboto'] relative z-10 lg:mx-[15px] sm:mx-[8px] mx-[4px] mt-[20px] mb-[4px] ">
                    <h4 className=" font-[800] lg:text-[20px] md:text-[15px] text-[12px] text-[#fff] ">
                      Trần Văn Bảo Thắng - K17
                    </h4>
                    <div className="lg:mt-[10px] sm:mt-[5px] mt-[2px] flex justify-between item-center ">
                      <div >
                        <p className="mb-[5px] font-[700] sm:text-[14px] text-[10px] leading-[17px] text-[#fff]">
                          Member
                        </p>
                        <p className=" font-[700] sm:text-[14px] text-[10px] leading-[17px] text-[#fff]">
                          Academic
                        </p>
                      </div>
                      <h3 className="align-middle inline text-[#fff] font-[800] sm:text-[20px] text-[14px]">
                        2023
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
  )
}

export default LiListMember