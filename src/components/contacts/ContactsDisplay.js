import classes from "./ContactsDisplay.module.css";

const ContactsDisplay = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <img src={props.image} alt="icon" />
      </div>
      <div className={classes.bottom}>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
        <p>{props.secDescription}</p>
      </div>
    </div>
  );
};

export default ContactsDisplay;
