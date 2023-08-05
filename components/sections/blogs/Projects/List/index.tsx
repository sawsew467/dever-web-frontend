import React from "react";
import projectImage from "@images/pages/activity/img.png";
import Card from "./Card";
import { pageProps } from "@/components/ChangePage";

interface itemListsPros {
   page : pageProps["page"];
}

const listProjects = [
  {
    category: "java",
    postTime: "5 month ago",
    img: projectImage,
    title: "Game with reactjsreactjs",
    alt: "project demo pic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    category: "java",
    postTime: "5 month ago",
    img: projectImage,
    title: "Game with reactjsreactjs",
    alt: "project demo pic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    category: "java",
    postTime: "5 month ago",
    img: projectImage,
    title: "Game with reactjsreactjs",
    alt: "project demo pic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    category: "java",
    postTime: "5 month ago",
    img: projectImage,
    title: "Game with reactjsreactjs",
    alt: "project demo pic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    category: "java",
    postTime: "5 month ago",
    img: projectImage,
    title: "Game with reactjsreactjs",
    alt: "project demo pic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    category: "java",
    postTime: "5 month ago",
    img: projectImage,
    title: "Game with reactjsreactjs",
    alt: "project demo pic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
];

function List() {
  return (
    <div className="w-[100%] flex gap-y-[32px] gap-x-[2.5%] flex-wrap ">
      
        {listProjects.map((items,i) =>
          <Card
          key={i}
          category={items.category}
          postTime={items.postTime}
          tiltle={items.title}
          depcription={items.desc}
          pic={items.img}
        ></Card>
        )}
    </div>
  );
}

export default List;
