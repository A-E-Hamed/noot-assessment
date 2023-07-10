import classes from "./SecFooterSection.module.css";

const SecFooterSection = () =>{
    return(
        <div className={classes.container}>
            <h3>Working Hours</h3>
            <div className={classes.content}>
                <div>
                    <p>Mon - Fri:</p>
                    <p>Saturday</p>
                    <p>Sunday</p>
                </div>
                <div>
                    <p>7am - 6pm</p>
                    <p>9am - 4pm</p>
                    <p>Closed</p>
                </div>
            </div>
        </div>
    )
};

export default SecFooterSection;