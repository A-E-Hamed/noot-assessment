import classes from "./LatestPosts.module.css";
import PostDisplay from "./PostDisplay";
import {DUMMY_OTHER_POSTS} from "../constants/dummyOtherPosts";

const OtherPosts = () => {
  const PostsList = DUMMY_OTHER_POSTS.map((post) => (
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
        <h1>Other Posts</h1>
      </div>
      <div className={classes.posts}>{PostsList}</div>
    </div>
  );
};

export default OtherPosts;
