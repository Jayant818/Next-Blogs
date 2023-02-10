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
/* 
{
  posts: [
    {
      slug: 'getting-started-with-nextjs',
      title: 'Getting Started with NextJS',
      date: '2022-10-16',
      image: 'getting-started-nextjs.png',
      description: 'NextJS is a the React framework for production - it makes building fullstack React apps and sites
a breeze and ships with built-in SSR.',
      isFeatured: true,
      content: '\r\n' +
        'NextJS is a **framework for ReactJS**.\r\n' +
        '\r\n' +
        `Wait a second ... a "framework" for React? Isn't React itself already a framework for JavaScript?\r\n` +
        '\r\n' +
        'Well ... first of all, React is a "library" for JavaScript. That seems to be important for some people.\r\n'
+
        '\r\n' +
        "Not for me, but still, there is a valid point: React already is a framework / library for JavaScript. So it's
 already an extra layer on top of JS.\r\n" +
        '\r\n' +
        '## Why would we then need NextJS?\r\n' +
        '\r\n' +
        'Because NextJS makes building React apps easier - especially React apps that should have server-side renderin
g (though it does way more than just take care of that).\r\n' +
        '\r\n' +
        "In this article, we'll dive into the core concepts and features NextJS has to offer:\r\n" +
        '\r\n' +
        '- File-based Routing\r\n' +
        '- Built-in Page Pre-rendering\r\n' +
        '- Rich Data Fetching Capabilities\r\n' +
        '- Image Optimization\r\n' +
        '- Much More\r\n' +
        '\r\n' +
        '## File-based Routing\r\n' +
        '\r\n' +
        '![Create routes via your file + folder structure](nextjs-file-based-routing.png)\r\n' +
        '\r\n' +
        '... More content ...\r\n'
    }
  ]
}

*/

export async function getStaticProps() {
	const allPosts = getAllPost();
	console.log("ALL POSTS", allPosts);
	return {
		props: {
			posts: allPosts,
		},
	};
}

export default AllPostsPage;
