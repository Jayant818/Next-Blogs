import AllPosts from "@/components/Posts/AllPosts";
import { getAllPost } from "@/helpers/post-utils";
import Head from "next/head";

function AllPostsPage(props) {
	console.log(props);
	// NOTE We keep our page neat and focus on the Data Fetching

	return (
		<>
			<Head>
				<title>All Posts</title>
				<meta name="description" content="A List of all the Blogs" />
			</Head>
			<AllPosts posts={props.posts} />
		</>
	);
}

export async function getStaticProps() {
	const allPosts = getAllPost();
	return {
		props: {
			posts: allPosts,
		},
	};
}

export default AllPostsPage;
