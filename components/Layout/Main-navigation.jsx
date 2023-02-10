import Link from "next/link";
import Logo from "./Logo";
import classes from "./main-navigation.module.css";

function MainNavigation() {
	return (
		<div className={classes.header}>
			{/* //NOTE The Link Component renders the anchor tag by default,if there is text inside the Link Tag, but if there is some other HTML Content or Component then we have to explicitly define the anchor & the Link tag will add the `ref` attribute to it.  */}
			<Link href="/">
				{/* <a> */}
				<Logo />
				{/* </a> */}
			</Link>
			<nav>
				<ul>
					<li>
						<Link href="/posts">Posts</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default MainNavigation;
