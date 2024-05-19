"use client"
export const runtime: 'edge' = 'edge';

import Banner from "@/components/sections/post/Banner";
import Body from "@/components/sections/post/Body";
import Author from "@/components/sections/post/Author";
import RelatedPost from "@/components/sections/post/RelatedPost";
import { useAppContext } from "@/app/context/AppContext";
import { useEffect } from "react";
// import fs from "fs";
// import matter from "gray-matter";
// import getPostMetadata from "@/utils/getPostMetadata";


// export async function generateStaticParams() {
//   const posts = getPostMetadata();
//   return posts.map((post) => ({
//     id: post.id,
//   }));
// }

// const getPostContent = (id: string) => {
//   try {
//   const folder = "posts/";
//   const file = `${folder}${id}.md`;
  
//   const content = fs.readFileSync(file, "utf8");
//   const matterResult = matter(content);

//   return matterResult;
//   } catch (error) {
//     return null 
//   }
// };
import Card1 from "@images/pages/blogs/fakedata/card1.jpg";
import Card2 from "@images/pages/blogs/fakedata/card2.png";
import Card3 from "@images/pages/blogs/fakedata/card3.png";
import Card4 from "@images/pages/blogs/fakedata/card4.png";
import Card5 from "@images/pages/blogs/fakedata/card5.png";
import Card6 from "@images/pages/blogs/fakedata/card6.png";
import { PostProps } from "@/components/sections/blogs/Projects/Slider";
import { StaticImageData } from "next/image";

export interface PostItems {
  _id: PostProps["_id"];
  category: PostProps["category"];
  postTime: PostProps["postTime"];
  tiltle: PostProps["title"];
  depcription: PostProps["desc"];
  pic: StaticImageData;
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



export default function Page({ params }: { params: { id: string } }) {
 
  function findIndexById(id: string): number {
    const index = listProjects.findIndex((project) => project._id === id);
    return index;
  }
  
  const index = findIndexById(params.id);

  // const post = getPostContent(id);
  const {activeBlogNav} = useAppContext()
  useEffect(() => {
    activeBlogNav()
  })
  return (
    <div>
      <Banner category={listProjects[index]?.category} tiltle={listProjects[index]?.title} pic={listProjects[index]?.img} _id={""} postTime={""} depcription={""}></Banner>
      <Body _id={""} category={[]} postTime={""} tiltle={""} depcription={""} pic={Card1}></Body>
      <Author></Author>
      <RelatedPost></RelatedPost>
    </div>
  );
}