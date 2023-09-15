import React from "react";
import Card from "../../blogs/Projects/List/Card";
import Card1 from "@images/pages/blogs/fakedata/card1.jpg";
import Card2 from "@images/pages/blogs/fakedata/card2.png";
import Card3 from "@images/pages/blogs/fakedata/card3.png";
import Card4 from "@images/pages/blogs/fakedata/card4.png";
import Card5 from "@images/pages/blogs/fakedata/card5.png";
import Card6 from "@images/pages/blogs/fakedata/card6.png";


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
];

function RelatedPost() {
  return (
    <div className="max-w-[1440px] w-full  mx-auto sm:px-[20px] md:px-[40px] xl:px-[80px] flex flex-col justify-center sm:mb-[20px] lg:mb-[40px] xl:mb-[80px] space-y-[40px] ">
      <div className="mx-auto sm:text-[28px] lg:text-[36px]  w-fit leading-[44px] border-b-[8px] border-highlight sm:px-[10px] lg:px-[20px] font-[700]  ">
        Related Post
      </div>
      <div className="flex sm:space-y-[20px] md:space-y-[0px] md:space-x-[32px] sm:flex-col md:flex-row">
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
