import { Fragment } from "react";
import Head from "next/head";
import FeaturedPosts from "../components/home/FeaturedPosts";
import Hero from "../components/home/Hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>{"Colin's Blog"}</title>
        <meta
          name="description"
          content="I post about programming and web dev"
        />
      </Head>
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
