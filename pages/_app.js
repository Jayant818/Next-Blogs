import "@/styles/globals.css";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";

// Adding the Navbar to our Application using Layout Component

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}
