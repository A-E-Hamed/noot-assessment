import classes from "./BottomBanner.module.css";

const BottomBanner = () => {
  return (
    <div className={classes.container}>
      <div>
        <img src="/BottomBanner.png" alt="Banner" />
      </div>
      <div className={classes.yellow}>
        <img src="/yellowDog.png" alt="Dog" />
      </div>
      <div className={classes.gray}>
        <img src="/grayDog.png" alt="Dog" />
      </div>
    </div>
  );
};

export default BottomBanner;
