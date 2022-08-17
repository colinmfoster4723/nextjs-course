import AllPosts from "../../components/posts/AllPosts";
import { DUMMY_POSTS } from "../../DUMMY.JS";
import { getAllPosts } from "../../lib/posts-util";

function allPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default allPostsPage;
