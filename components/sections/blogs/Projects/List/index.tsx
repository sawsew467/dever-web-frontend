"use client";
import projectImage from "@images/pages/activity/img.png";
import Card from "./Card";
import ChangePage from "@/components/ChangePage";
import { useState } from "react";

import Card1 from "@images/pages/blogs/fakedata/card1.jpg";
import Card2 from "@images/pages/blogs/fakedata/card2.png";
import Card3 from "@images/pages/blogs/fakedata/card3.png";
import Card4 from "@images/pages/blogs/fakedata/card4.png";
import Card5 from "@images/pages/blogs/fakedata/card5.png";
import Card6 from "@images/pages/blogs/fakedata/card6.png";

interface pageProps {
  page: number;
  totalPages: number;
}

const listProjects = [
  {
    _id: "0001",
    category: ["Blockchain"],
    postTime: "5 months ago",
    img: Card1,
    title: "Building project using Blockchain",
    alt: "Project 1 Demo Image",
    desc: "This project focuses on the development of security with blockchain and...",
  },
  {
    _id: "0002",
    category: ["Java","Spring boot"],
    postTime: "3 months ago",
    img: Card2,
    title: "Java Spring Development is dead ?",
    alt: "Project 2 Demo Image",
    desc: "In this project, we delve into the world of Java. It helpfull with all dev in...",
  },
  {
    _id: "0003",
    category: ["C#","Dotnet"],
    postTime: "6 months ago",
    img: Card3,
    title: "Developing nice software with C#",
    alt: "Project 3 Demo Image",
    desc: "Our team specializes in building Windows applications using C#...",
  },
  {
    _id: "0004",
    category: ["Node.js","Reactjs"],
    postTime: "4 months ago",
    img: Card4,
    title: "Real-Time Web Applications with Node.js",
    alt: "Project 4 Demo Image",
    desc: "Node.js powers our real-time web application...",
  },
  {
    _id: "0005",
    category: ["SCSS"],
    postTime: "2 months ago",
    img: Card5,
    title: "Styling Web Applications with SCSS",
    alt: "Project 5 Demo Image",
    desc: "SCSS (Sassy CSS) is our choice for creating beautiful...",
  },
  {
    _id: "0006",
    category: ["TypeScript","Reactjs"],
    postTime: "1 month ago",
    img: Card6,
    title: "TypeScript in Modern Web Development",
    alt: "Project 6 Demo Image",
    desc: "TypeScript enhances our modern web development...",
  },
];


function List() {
  const [page, setPage] = useState<pageProps["page"]>(1);

  const getTotalPage = (value: string): number => {
    return 1;
  };

  const totalPages = getTotalPage("data");

  const onChangePage = (value: number): void => {
    setPage(value);
  };

  return (
    <div className="sm:space-y-[12px] md:space-y-[20px] xl:space-y-[24px] ">
      <div className="w-[100%] flex sm:flex-col md:flex-row sm:gap-y-[20px] md:gap-y-[12px] lg:gap-y-[20px] xl:gap-y-[32px] justify-between flex-wrap ">
        {listProjects.map((items, i) => (
          <Card
            key={i}
            _id={items._id}
            category={items.category}
            postTime={items.postTime}
            tiltle={items.title}
            depcription={items.desc}
            pic={items.img}
          ></Card>
        ))}
      </div>

      <div className="flex justify-center  ">
        <ChangePage
          currentPage={page}
          onPageChange={onChangePage}
          totalPages={totalPages}
        ></ChangePage>
      </div>
    </div>
  );
}

export default List;
