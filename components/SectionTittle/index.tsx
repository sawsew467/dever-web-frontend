import React from 'react'

interface TittlePros {
    tittle: string;
    subtittle: string;
    textPosition: "right" | "left";
}

function SectionTittle({tittle, subtittle, textPosition}: TittlePros) {
    return (
        <div className={`h-[86px] w-fit flex`}
        style={{
            flexDirection: textPosition === "left" ? "row-reverse" : "row"
        }}
        >
            <div className={``}
                style={{
                    textAlign: textPosition
                }}
            >
                <h2 className='font-[700] text-[40px] leading-[48px] text-[#0098FF]'>{tittle.toUpperCase()}</h2>
                <h3 className='font-[400] text-[28px] leading-[34px] text-[#22181C] mt-[4px]'>{subtittle}</h3>
            </div>
            <div className={`w-[10px] h-[86px] bg-[#FF0000]`}
            style={{
                margin: textPosition === 'left' ? "0px 10px 0px 0px" : "0px 0px 0px 10px"
            }}></div>
        </div>
    )
}

export default SectionTittle
