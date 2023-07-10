import classes from "./Services.module.css";
import { DUMMY_SERVICES } from "../constants/dummyServices";
import ServicesDisplay from "./servicesDisplay";
const Services = () => {
  const servicesList = DUMMY_SERVICES.map((service) => (
    <ServicesDisplay
      key={service.id}
      id={service.id}
      title={service.title}
      description={service.description}
      price={service.price}
      image={service.image}
      bg={service.bg}
    />
  ));

  return (
    <div>
      <div className={classes.topSection}>
        <p>OUR SERVICES</p>
        <h1>All Pet Care Services</h1>
      </div>
      <div className={classes.card}>{servicesList}</div>
    </div>
  );
};

export default Services;
