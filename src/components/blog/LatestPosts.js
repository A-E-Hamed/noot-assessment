import classes from "./LatestPosts.module.css";
import PostDisplay from "./PostDisplay";
import {DUMMY_POSTS} from "../constants/dummyPosts";

const LatestPosts = () => {
  const PostsList = DUMMY_POSTS.map((post) => (
    <PostDisplay
      key={post.id}
      id={post.id}
      title={post.title}
      description={post.description}
      image={post.image}
    />
  ));
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <p>Our Blog</p>
        <h1>Latest Post</h1>
      </div>
      <div className={classes.posts}>{PostsList}</div>
    </div>
  );
};

export default LatestPosts;
