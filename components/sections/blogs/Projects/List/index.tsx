'use client'
import projectImage from "@images/pages/activity/img.png";
import Card from "./Card";
import ChangePage from "@/components/ChangePage";
import { useState } from "react";

interface pageProps {
  page: number;
  totalPages: number;
}

const listProjects = [
  {
    _id : "0001",
    category: "java",
    postTime: "5 month ago",
    img: projectImage,
    title: "Game with reactjsreactjs",
    alt: "project demo pic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    _id : "0002",
    category: "java",
    postTime: "5 month ago",
    img: projectImage,
    title: "Game with reactjsreactjs",
    alt: "project demo pic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    _id : "0003",
    category: "java",
    postTime: "5 month ago",
    img: projectImage,
    title: "Game with reactjsreactjs",
    alt: "project demo pic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    _id : "0004",
    category: "java",
    postTime: "5 month ago",
    img: projectImage,
    title: "Game with reactjsreactjs",
    alt: "project demo pic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    _id : "0005",
    category: "java",
    postTime: "5 month ago",
    img: projectImage,
    title: "Game with reactjsreactjs",
    alt: "project demo pic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    _id : "0006",
    category: "java",
    postTime: "5 month ago",
    img: projectImage,
    title: "Game with reactjsreactjs",
    alt: "project demo pic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
];

function List() {
  const [page, setPage] = useState<pageProps["page"]>(1);

  const getTotalPage = (value: string): number => {
    return 5; 
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
            _id = {items._id}
            category={items.category}
            postTime={items.postTime}
            tiltle={items.title}
            depcription={items.desc}
            pic={items.img}
          ></Card>
        ))}
      </div>

      <div className="flex justify-center  ">
        <ChangePage currentPage={page} onPageChange={onChangePage} totalPages={totalPages}></ChangePage>
      </div>
    </div>
  );
}

export default List;
