/* eslint-disable react/no-unescaped-entities */
"use client"

import React, { useState, useRef } from 'react'

import Image from 'next/image'
import UploadIcon from '@pageImage/home/icon/UploadIcon.svg'
import dashedVector from '@pageImage/home/join/Vector 1.svg'
import plan from '@pageImage/home/join/Group.svg'

import pdfLogo from '@pageImage/home/join/pdf_318-148750.png'
import mp4Logo from '@pageImage/home/join/mp4-file-logo.png'
import ptsLogo from '@pageImage/home/join/PSD_file_icon.png'
import aiLogo from '@pageImage/home/join/Ai-file-logo.png'
import wordLogo from '@pageImage/home/join/docx_icon.svg.png'
import powerpointLogo from '@pageImage/home/join/pptx_icon.png'

function Join() {
    const [selectedProfileFile, setSelectedProfileFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null)

    const handleSelectFile = () => {
        // fileInputRef.current.click();
        // console.log(fileInputRef);
    }

    const handleOnChangeSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if(file && isValidFileType(file)) {
            setSelectedProfileFile(file);
        } else {
            setSelectedProfileFile(null);
        }
    }

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
        event.dataTransfer.dropEffect = "copy";
        console.log(isDragging);
        
    }

    const handleDropFile = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
        
        const file = event.dataTransfer.files[0];

        if(file && isValidFileType(file)) {
            setSelectedProfileFile(file);
        } else {
            setSelectedProfileFile(null);
        }
        setIsDragging(false);
    };
    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);
    }

    const isValidFileType = (file: File) => {
        const acceptedTypes = [
            'image/png',
            'image/jpeg',
            'image/gif',
            'video/mp4',
            'application/pdf',
            'image/vnd.adobe.photoshop',
            'application/illustrator',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-powerpoint',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
          ];
        return acceptedTypes.includes(file.type);
    }

    const handleDelectItem = () => {
        setSelectedProfileFile(null)
    }
    const handleDisplayTypeOfResume = (file: File)  =>  {
        if(file.type === 'application/pdf') return pdfLogo
        if(file.type === 'image/vnd.adobe.photoshop') return ptsLogo
        if(file.type === 'application/illustrator') return aiLogo
        if(file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') return wordLogo
        if(file.type === 'application/vnd.ms-powerpoint'|| file.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') return powerpointLogo 
        if(file.type === 'video/mp4') return mp4Logo
        return ""
    }

    const handleOpenViewTab = (file: File) => {
        const url = URL.createObjectURL(file)
        window.open(url, '_blank')
    }
    return (
        <section className='h-fit flex justify-center '>
            <div className='max-w-[1440px] w-[100%] h-fit py-[60px] px-[80px]'>
                <div className='h-[646px] w-[100%] flex flex-col items-center relative'>
                    <div className='w-[731px] flex flex-col justify-center items-center'>
                        <h1 className='font-[700] text-[40px] leading-[40px] text-primary' >JOIN WITH US</h1>
                        <p className='text-center mt-[4px] font-[400] text-[26px] leading-[33px]'>Whether you're a beginner taking first step or an experienced programmer. Join us and unlock the limitless potential of programming!</p>
                    </div>
                    <div className='max-w-[462px] w-[100%] flex flex-col mt-[32px]'>
                        <input type="text" placeholder='Full name' className='outline-none border-b-2 border-[#676767] placeholder:text-[#676767] h-[32px]'/>
                        <input type="text" placeholder='Email' className='outline-none border-b-2 border-[#676767] placeholder:text-[#676767] h-[32px] mt-[16px]'/>
                        <div className='w-[100%] flex flex-col items-center  mt-[16px] z-[2]'>
                            <h3 className='font-[700] text-[20px] leading-[24px] text-[#0f0f0f]'>Upload CV</h3>
                            <div className='w-[462px] h-[157px] py-[20px] px-[20px] borderStrock flex flex-col items-center mt-[12px] z-1 relative'
                            onDrop={(e) => handleDropFile(e)}
                            onDragLeave={(e) => handleDragLeave(e)}
                            onDragOver={(e) => handleDragOver(e)}
                            >
                                {
                                    selectedProfileFile ? 
                                    (<> 
                                        <div className='absolute w-[100%] h-[100%] top-0 right-0 left-0 p-[20px] flex flex-row justify-between'>
                                            <div className='w-[calc(100%-140px)] h-full mr-[20px] flex flex-row justify-between'>
                                                <Image src = {
                                                    selectedProfileFile.type === "image/png" || selectedProfileFile.type === "image/jpeg" || selectedProfileFile.type === "image/gif" ? 
                                                    URL.createObjectURL(selectedProfileFile) : handleDisplayTypeOfResume(selectedProfileFile)
                                                } width={100} height={117} alt='file' className='object-cover w-[100px] h-[117px] rounded-md cursor-pointer'
                                                    onClick={() => handleOpenViewTab(selectedProfileFile)}
                                                />
                                                <div className='w-[140px] flex flex-col justify-between'>
                                                    <div className='h-fit'>
                                                            <h3 className='font-[700] text-primary'>File name: </h3>
                                                            <h3 className='font-[400] text-primary whitespace-nowrap overflow-hidden text-ellipsis'>{selectedProfileFile.name}</h3>
                                                    </div>
                                                    <div className='h-fit'>
                                                        <button className=' w-full py-[14px] px-[10px] border-2 border-primary border-opacity-1 font-[400] text-primary'
                                                        onClick={handleDelectItem}
                                                        >Cancle upload</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <input type="file" name='file' id='file' className='hidden' multiple ref={fileInputRef} onChange={handleOnChangeSelectFile} />
                                                <label htmlFor='file' className='w-[140px] h-[100%] flex flex-col justify-center cursor-pointer items-center border-2 border-primary'>
                                                    {isDragging ? 
                                                    (<>
                                                        <div className='p-[20px] flex justify-center items-center'>
                                                            <h4 className='font-[700] text-[18px] text-center text-primary '>Drag <br/>&<br/> drop</h4>
                                                        </div>
                                                    </>): 
                                                    (<> 
                                                        <Image src={UploadIcon} width={70} height={60} alt='icon' className='mt-[-1px] pointer-events-none'/>
                                                        <h4 className='font-[700] text-primary '>Add other file</h4>
                                                    </>)}
                                                </label>
                                            </div>
                                        </div>
                                    </>) : 
                                    (<>
                                        <Image src={UploadIcon} width={70} height={60} alt='icon' className=''/>
                                        <h4 className='font-[700] text-[16px] leading-[19px] text-[#0f0f0f] mt-[10px] '>Drag & Drop files or 
                                        <input type="file" name='file' id='file' className='hidden' multiple ref={fileInputRef} onChange={handleOnChangeSelectFile} />
                                        <label htmlFor="file" className='text-primary cursor-pointer underline decoration-[2px] pl-[5px]'
                                            onClick={() => handleSelectFile()}
                                        >Browse</label></h4>
                                        <p className='h-[17px] font-[400] text-[12px] leading-[18px] text-[#676767] mt-[10px]'>Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
                                    </>)
                                }
                            </div>
                            <button className='w-[100%] bg-primary opacity-[0.5] py-[12px] px-[174px] mt-[32px] hover:opacity-[1] transition'><p className='font-[700] text-[16px] text-[#FFFFFF] leading-[18px] '>UPLOAD FILES</p></button>
                        </div>
                    </div>
                    <div className='w-[100%] h-[606px] z-[-1] absolute bottom-0 left-0 right-0'>
                        <Image src={plan}  alt='plan' className='absolute top-[26px] left-[80px]'/>
                        <Image src={dashedVector}  alt='vector' className='absolute bottom-0 right-0 left-0'/>
                    </div>
                  </div>
                <div className=''></div>
            </div>
        </section>
    )
}

export default Join
