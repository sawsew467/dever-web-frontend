'use client';
import React, { useState } from 'react';
import SliderItem from './SliderItem';
import {motion} from "framer-motion"
import { StaticImageData } from 'next/image';
export interface PostProps {
  _id : string;
  category: Array<string>;
  postTime: string;
  img : StaticImageData;
  title: string;
  alt:string;
  desc: string;
  currPage: number;
  handlePageChange :(page:number) => void; 
}
import Card3 from "@images/pages/blogs/fakedata/card3.png";
import Card4 from "@images/pages/blogs/fakedata/card4.png";
import Card5 from "@images/pages/blogs/fakedata/card5.png";


function Slider() {
  const initialItems: PostProps[] = [
      {
        _id: "0003",
        category: ["C#","Dotnet"],
        postTime: "6 months ago",
        img: Card3,
        title: "Developing Full Application with C#",
        alt: "Project 3 Demo Image",
        desc: "Our team specializes in building Windows applications using C#...",
        currPage : 1,
        handlePageChange: ()=>{}
      },
      {
        _id: "0004",
        category: ["Node.js","Reactjs"],
        postTime: "4 months ago",
        img: Card4,
        title: "Real-Time Web Applications with Node.js",
        alt: "Project 4 Demo Image",
        desc: "Node.js powers our real-time web application...",
        currPage : 2,
        handlePageChange: ()=>{}
      },
      {
        _id: "0005",
        category: ["SCSS"],
        postTime: "2 months ago",
        img: Card5,
        title: "Styling Web Applications with SCSS",
        alt: "Project 5 Demo Image",
        desc: "SCSS (Sassy CSS) is our choice for creating beautiful...",
        currPage : 3,
        handlePageChange: ()=>{}
      },
    ];
    

  const [currentPage, setCurrentPage] = useState(1);

  const onChangePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <motion.div
      className='slider'
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      <div className="slider-container">
        <SliderItem
          _id={initialItems[currentPage - 1]._id}
          category={initialItems[currentPage - 1].category}
          postTime={initialItems[currentPage - 1].postTime}
          title={initialItems[currentPage - 1].title}
          desc={initialItems[currentPage - 1].desc}
          currPage={initialItems[currentPage - 1].currPage}
          handlePageChange={onChangePage} img={initialItems[currentPage-1].img} alt={''}        />
      </div>
    </motion.div>
  );
}

export default Slider;
