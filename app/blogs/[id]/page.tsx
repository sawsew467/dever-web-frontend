
import Banner from "@/components/sections/post/Banner";
import Body from "@/components/sections/post/Body";
import Author from "@/components/sections/post/Author";
import RelatedPost from "@/components/sections/post/RelatedPost";
interface BlogPost {
  id: string;
  title: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  { id: '1', title: 'First Blog Post', content: 'This is the content of the first blog post.' },
  { id: '2', title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }
  
  return (
    <div>
      <Banner></Banner>
      <Body></Body>
      <Author></Author>
      <RelatedPost></RelatedPost>
    </div>
  );
}
