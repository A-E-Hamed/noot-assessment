import classes from "./Info.module.css";

const Info = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftSection}>
        <img src="/icons/icon fb.png" alt="twitter icon" />
        <img src="/icons/icon insta.png" alt="twitter icon" />
        <img src="/icons/icon twitter.png" alt="twitter icon" />
        <img src="/icons/icon whatsapp.png" alt="twitter icon" />
      </div>
      <div className={classes.rightSection}>
        <div className={classes.infoElement}>
          <img src="/icons/phone-alt.png" alt="phone" />
          <p>0000 - 123456789</p>
        </div>
        <div className={classes.infoElement}>
          <img src="/icons/envelope.png" alt="envelop" />
          <p>info@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
