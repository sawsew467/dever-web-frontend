// import fs from "fs";
// import matter from "gray-matter";

// export interface PostMetadata {
//     title: string;
//     date: string;
//     subtitle: string;
//     id: string;
//   }

// const getPostMetadata = (): PostMetadata[] => {
//   const folder = "posts/";
//   const files = fs.readdirSync(folder);
//   const markdownPosts = files.filter((file) => file.endsWith(".md"));

//   const posts = markdownPosts.map((fileName) => {
//     const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
//     const matterResult = matter(fileContents);
//     return {
//       title: matterResult.data.title,
//       date: matterResult.data.date,
//       subtitle: matterResult.data.subtitle,
//       id: fileName.replace(".md", ""),
//     };
//   });

//   return posts;
// };

// export default getPostMetadata;