import FeaturedPro from "./FeaturedPro";
import OnSaleProducts from "./OnSaleProducts";
import classes from "./ProductsSection.module.css";
import TopRatedProducts from "./TopRatedProducts";

const ProductsSection = () =>{
return(
    <div className={classes.container}>
        <FeaturedPro />
        <OnSaleProducts />
        <TopRatedProducts />
    </div>
)
};

export default ProductsSection;