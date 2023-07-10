import classes from "./ForthFooterSection.module.css";

const ForthFooterSection = () => {
  return (
    <div className={classes.container}>
      <h3>Newsletter</h3>
      <p>Be first in the queue! Get our latest news straight to your inbox.</p>
      <div className={classes.form}>
        <input placeholder="Email" />
        <button class="button">
          <span class="icon"><img src="/icons/arrow-right.png" alt="icon"/></span>
        </button>
      </div>
      <div className={classes.icons}>
        <img src="/icons/footerFb.png" alt="icon" />
        <img src="/icons/footerInsta.png" alt="icon" />
        <img src="/icons/footerTwi.png" alt="icon" />
        <img src="/icons/footerWhatsapp.png" alt="icon" />
      </div>
    </div>
  );
};

export default ForthFooterSection;
