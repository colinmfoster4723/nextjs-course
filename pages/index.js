import { Fragment } from "react";
import FeaturedPosts from "../components/home/FeaturedPosts";
import Hero from "../components/home/Hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;

// 1) Hero section => present yourself/buisness
// 2) Featureed Posts
