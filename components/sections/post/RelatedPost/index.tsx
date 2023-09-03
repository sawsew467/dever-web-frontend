import React from "react";
import Card from "../../blogs/Projects/List/Card";
import projectImage from "@images/pages/activity/banner.png";

const listProjects = [
  {
    _id: "0001",
    category: "java",
    postTime: "5 month ago",
    img: projectImage,
    title: "Game with reactjsreactjs",
    alt: "project demo pic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    _id: "0002",
    category: "java",
    postTime: "5 month ago",
    img: projectImage,
    title: "Game with reactjsreactjs",
    alt: "project demo pic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
  {
    _id: "0003",
    category: "java",
    postTime: "5 month ago",
    img: projectImage,
    title: "Game with reactjsreactjs",
    alt: "project demo pic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  },
];

function RelatedPost() {
  return (
    <div className="max-w-[1440px] w-full  mx-auto md:px-[40px] xl:px-[80px] flex flex-col justify-center mb-[80px] space-y-[40px] ">
      <div className="mx-auto text-[36px]  w-fit leading-[44px] border-b-[8px] border-highlight px-[20px] font-[700] ">
        Related Post
      </div>
      <div className="flex space-x-[32px]">
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
    </div>
  );
}

export default RelatedPost;
