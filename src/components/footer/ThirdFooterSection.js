import classes from "./ThirdFooterSection.module.css";

const ThirdFooterSection = () => {
  return (
    <div className={classes.container}>
      <h3>Useful Links</h3>
      <div className={classes.content}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Shop</li>
        </ul>
        <ul>
          <li>FAQ</li>
          <li>Gallery</li>
          <li>Delivery</li>
          <li>Sales</li>
        </ul>
      </div>
    </div>
  );
};

export default ThirdFooterSection;
