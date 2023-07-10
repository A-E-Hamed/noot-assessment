import classes from "./StFooterSection.module.css";

const StFooterSection = () => {
  return (
    <div className={classes.container}>
      <img src="/icons/footerLogo.png" alt="logo" />
      <p>
        Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim nec
        dui nunc mattis enim ut tellus. Sed ut perspiciatis unde ...
      </p>
      <div className={classes.bottom}>
        <img src="/icons/footerPhone.png" alt="Phone" />
        <div>
            <h2>(913) 756-3126</h2>
            <p>Got Questions? Call us 24/7</p>
        </div>
      </div>
    </div>
  );
};

export default StFooterSection;
