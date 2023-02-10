// Homepage - As it is a Page so we don't write that much HTML & CSS in page we use the Component, Instead we use the GetStaticProps to get the Data in the Pages.

import Hero from "@/components/HomePage/Hero";
import FeaturedPost from "@/components/HomePage/FeaturedPost";
import { getFeaturedPosts } from "@/helpers/post-utils";
import Head from "next/head";

function HomePage(props) {
	return (
		<>
			{/*
      Hero Section Tells about the user.
    */}
			<Head>
				<title>Jayant's Blog</title>
				<meta
					name="description"
					content="Hi I am Jayant, A React JS web Developer"
				/>
			</Head>
			<Hero />
			<FeaturedPost posts={props.posts} />
		</>
	);
}

export async function getStaticProps() {
	const getFeaturedPost = getFeaturedPosts();
	return {
		props: {
			posts: getFeaturedPost,
		},
	};
}

export default HomePage;
