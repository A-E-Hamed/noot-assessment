import Benefits from "../Benefits/Benefits";
import classes from "./MainDescription.module.css";

const MainDescription = () => {
  return (
    <div className={classes.textSection}>
      <div className={classes.firstText}>
        <p>WE CARE FOR YOUR PETS</p>
        <h2>We Help You Care for Animals with Nutrition</h2>
      </div>
      <div className={classes.secText}>
        <p>
          All offers are subject to availability. Ut tortor pretium viverra
          suspendisse potenti nullam ac tortor vitae. Consectetur a erat nam at.
          Potenti nullam ac tortor vitae purus faucibus ornare.
        </p>
      </div>
      <div>
        <Benefits />
      </div>
    </div>
  );
};

export default MainDescription;
