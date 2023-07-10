import RatingStars from "../constants/Stars";
import classes from "./ProductsDisplay.module.css";

const ProductsDisplay = (props) =>{
    return(
        <div className={classes.card}>
            <div >
                <img src={props.image} alt="product"/>
            </div>
            <div>
                <h5>{props.title}</h5>
                <RatingStars />
                <p>{props.price}</p>
            </div>
        </div>
    )
};

export default ProductsDisplay;