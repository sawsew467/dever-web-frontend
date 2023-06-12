import React from "react";

function Reaching() {
  const data = [
    {
      number: "100+",
      tittle: "Members",
    },
    {
      number: "5+",
      tittle: "Years grow",
    },
    {
      number: "10+",
      tittle: "Projects",
    },
    {
      number: "20+",
      tittle: "Prizes",
    },
  ];
  return (
    <div className="w-screen bg-gradient-to-r from-[#0065A9] via-[#0098FF] to-[#0065A9]  text-[#fff]">
      <div className="max-w-[1440px] mx-auto px-[80px] py-[40px] flex justify-between">
        {
            data.map((item)=>(
                <div className="flex flex-col items-center">
                    <a className="text-[40px] font-[700] h-[48px]">{item.number}</a>
                    <a className="text-[32px] font-[700] mt-[8px] h-[39px]">{item.tittle}</a>
                </div>
            ))
        }
      </div>
    </div>
  );
}

export default Reaching;
