import classes from "./FeaturedPost.module.css"
import PostGrid from "../Posts/PostGrid"

function FeaturedPost(props) {
  return (
    <section className="classes.latest">
      <h2>
        Featured Posts
      </h2>
      {/* 
        //NOTE As we have to use the Posts in the All Posts Page as well, so we will create a new component for the Posts Grid and use it in both the pages. 
      */}
      <PostGrid posts={props.posts}/>
    </section>
  )
}

export default FeaturedPost