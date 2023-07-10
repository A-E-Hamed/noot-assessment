import classes from "./TopSection.module.css";
import Header from "../Header/Header";
import Info from "../Header/Info";
import MainDescription from "../DescriptionSection/MainDescription";

const TopSection = () => {
  return (
    <div>
      <div className={classes.topBar}>
        <Info />
      </div>
      <div className={classes.navBar}>
        <Header />
      </div>
      <div className={classes.bg}>
        <img src="/bg.png" alt="Background pic" />
      </div>
      <div className={classes.layer}>
        <img src="/dog1 1.png" alt="Dog pic" />
      </div>
      <div>
        <MainDescription />
      </div>
      
    </div>
  );
};

export default TopSection;
