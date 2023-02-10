import Link from "next/link";
import Image from "next/image";
import classes from './PostItem.module.css'


function PostItem(props){
    // The Posts should be clickable also so we include the Link Tag but it should be inside the <li> tag not outside it.
    const {title,image,description,date,slug} = props.post;
    const humanReadableDate = new Date(date).toLocaleDateString("en-US",{
        day: 'numeric',
        month:'long', // 1 -> January
        year:'numeric'
    })
    return(
        <li classes={classes.post}>
            <Link href={`/posts/${slug}`}>
                <div className={classes.image}>
                    <Image
                        src={`/images/posts/${slug}/${image}`}
                        alt={title}
                        width={300}
                        height={200}
                        
                    />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{humanReadableDate}</time>
                    <p>{description}</p>
                </div>
            </Link>
        </li>
    )
}

export default PostItem