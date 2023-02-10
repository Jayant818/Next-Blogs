import PostContent from "@/components/Posts/Post-Details/PostContent";
import { getAllPost } from "@/helpers/post-utils";
import Head from "next/head";

function SinglePostPage(props) {
	// On a Single Post Page we have the Title,Img , Content & Code-Snippets
	return (
		<>
			<Head>
				<title>{props.title}</title>
				<meta name="description" content={props.description} />
			</Head>
			<PostContent post={props.post} />
		</>
	);
}

export async function getServerSideProps(context) {
	const { params } = context;

	const allPosts = getAllPost();

	const selectedPost = allPosts.find((post) => post.slug === params.slug);

	return {
		props: {
			post: selectedPost,
		},
	};
}

/*

Selected Posts {
  slug: 'getting-started-with-nextjs',
  title: 'Getting Started with NextJS',
  date: '2022-10-16',
  image: 'getting-started-nextjs.png',
  description: 'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships wi
th built-in SSR.',
  isFeatured: true,
  content: '\r\n' +
    'NextJS is a **framework for ReactJS**.\r\n' +
    '\r\n' +
    `Wait a second ... a "framework" for React? Isn't React itself already a framework for JavaScript?\r\n` +
    '\r\n' +
    'Well ... first of all, React is a "library" for JavaScript. That seems to be important for some people.\r\n' +
    '\r\n' +
    "Not for me, but still, there is a valid point: React already is a framework / library for JavaScript. So it's already an extra lay
er on top of JS.\r\n" +
    '\r\n' +
    '## Why would we then need NextJS?\r\n' +
    '\r\n' +
    'Because NextJS makes building React apps easier - especially React apps that should have server-side rendering (though it does way
 more than just take care of that).\r\n' +
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
*/

export default SinglePostPage;
