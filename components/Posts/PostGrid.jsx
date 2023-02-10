import PostItem from './PostItem'
import classes from './PostGrid.module.css'

function PostGrid(props){
    // NOTE we only describe the layout of the posts grid & the SinglePosts will be rendered by another Component.
    const {posts} = props;  // We are expecting an array of Objects
    return(
        <ul className={classes.grid}>
            {
                posts.map((post)=>(
                    <PostItem key={post.slug} post={post}/>
                ))
            }
        </ul>
    )
    
}

export default PostGrid;