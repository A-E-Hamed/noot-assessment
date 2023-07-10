import classes from "./PostDisplay.module.css";

const PostDisplay = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <img src={props.image} alt="Dog" />
      </div>
      <div className={classes.middle}>
        <img src="/icons/user.png" alt="user" />
        <p>by Corabelle Durrad</p>
        <img src="/icons/calendar-day.png" alt="calendar"/>
        <p>02.01.2022</p>
      </div>
      <div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default PostDisplay;
