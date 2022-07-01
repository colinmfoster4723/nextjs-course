import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();

  console.log(router.query);
  //next js catches anything after blog in the URL and is made availibe in the slug property//
  //example : /blog/2022/12 => slug: [2022, 12]
  return (
    <div>
      <h1>Blog Posts</h1>
    </div>
  );
}

export default BlogPostsPage;
