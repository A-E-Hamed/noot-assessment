import classes from "./Contacts.module.css";
import ContactsDisplay from "./ContactsDisplay";
import {DUMMY_CONTACTS} from "../constants/dummyContacts";

const Contacts = () => {
  const ContactsList = DUMMY_CONTACTS.map((contact) => (
    <ContactsDisplay
      key={contact.id}
      id={contact.id}
      title={contact.title}
      description={contact.description}
      secDescription={contact.secDescription}
      image={contact.image}
    />
  ));
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <p>OUR CONTACTS</p>
        <h1>Contacts</h1>
        <p>Massa enim nec dui nunc mattis enim ut tellus</p>
      </div>
      <div className={classes.posts}>{ContactsList}</div>
    </div>
  );
};

export default Contacts;
