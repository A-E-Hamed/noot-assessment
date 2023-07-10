import classes from "./Footer.module.css";
import ForthFooterSection from "./ForthFooterSection";
import SecFooterSection from "./SecFooterSection";
import StFooterSection from "./StFooterSection";
import ThirdFooterSection from "./ThirdFooterSection";

const Footer = () => {
  return (
    <div>
      <div className={classes.container}>
        <StFooterSection />
        <SecFooterSection />
        <ThirdFooterSection />
        <ForthFooterSection />
      </div>
      <div className={classes.copyWrite}>
        <p>NOOT ©  All rights reserved Copyrights 2023    </p>
      </div>
    </div>
  );
};

export default Footer;
