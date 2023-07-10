import classes from "./MiddleBanner.module.css";
const MiddleBanner = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <img src="/middleBg.png" alt="blue Banner" />
        <div className={classes.bannerElements}>
        <div className={classes.element}>
          <img src="/icons/pets.png" alt="pets" />
          <img src="/icons/petsNum.png" alt="Number" />
        </div>
        <div className={classes.element}>
          <img src="/icons/Middal.png" alt="pets" />
          <img src="/icons/middalNum.png" alt="Number" />
        </div>
        <div className={classes.element}>
          <img src="/icons/pets.png" alt="pets" />
          <img src="/icons/foodNum.png" alt="Number" />
        </div>
        <div className={classes.element}>
          <img src="/icons/shopping-bag.png" alt="pets" />
          <img src="/icons/bagNum.png" alt="Number" />
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default MiddleBanner;
