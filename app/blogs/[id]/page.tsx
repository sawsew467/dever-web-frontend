export const runtime: 'edge' = 'edge';

import Banner from "@/components/sections/post/Banner";
import Body from "@/components/sections/post/Body";
import Author from "@/components/sections/post/Author";
import RelatedPost from "@/components/sections/post/RelatedPost";
import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "@/utils/getPostMetadata";


export async function generateStaticParams() {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    id: post.id,
  }));
}

const getPostContent = (id: string) => {
  try {
  const folder = "posts/";
  const file = `${folder}${id}.md`;
  
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return matterResult;
  } catch (error) {
    return null 
  }
};


export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const post = getPostContent(id);
  
  return (
    <div>
      <Banner></Banner>
      <Body></Body>
      <Author></Author>
      <RelatedPost></RelatedPost>
    </div>
  );
}
