import classes from "./Benefits.module.css";

const Benefits = () => {
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.element}>
          <img src="/icons/trust.png" alt="trust" />
          <div>
            <h4>Trust & Safty</h4>
            <p>Velit euismod pellentes</p>
          </div>
        </div>
        <div className={classes.element}>
          <img src="/icons/support.png" alt="trust" />
          <div>
            <h4>Support</h4>
            <p>Egestas quis ipsum velit </p>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.element}>
          <img src="/icons/descount.png" alt="trust" />
          <div>
            <h4>Discounts </h4>
            <p>Bibendum ut tristique </p>
          </div>
        </div>
        <div className={classes.element}>
          <img src="/icons/garantee.png" alt="trust" />
          <div>
            <h4>Guarantee</h4>
            <p>Convallis tellus id interdum </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
