import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getPostData(fileName) {
	const filePath = path.join(process.cwd(), "posts", fileName);
	const fileData = fs.readFileSync(filePath, "utf-8");
	// Now we have to separate the Meta data & Actual Content
	const { data, content } = matter(fileData);
	// It returns 2 things data -> Data -> Meta Data , Content -> Actual Content
	const postSlug = fileName.replace(/\.md$/, ""); //Removes the file Extension

	const postData = {
		slug: postSlug,
		...data,
		content,
	};
	return postData;
}

export function getAllPost() {
	// Get all markdown files
	const AllPostsPath = path.join(process.cwd(), "posts");

	const postFiles = fs.readdirSync(AllPostsPath);
	// In the postFile we got a list of all the Markdown Files.

	// Read all markdown files
	// map returns a new Array
	const AllPosts = postFiles.map((file) => {
		return getPostData(file);
	});

	const sortedPosts = AllPosts.sort((postA, postB) =>
		postA.date > postB.date ? -1 : 1
	);

	return sortedPosts;
}

export function getFeaturedPosts() {
	const allPosts = getAllPost();
	console.log("All Posts ", allPosts);
	const FeaturedPosts = allPosts.filter((post) => post.isFeatured);
	return FeaturedPosts;
}
