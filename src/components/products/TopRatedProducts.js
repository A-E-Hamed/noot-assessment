import { DUMMY_TOPRATED_PRODUCTS } from "../constants/dummyTopRated";
import ProductsDisplay from "./ProductsDisplay";
import classes from "./ProductsDisplay.module.css";


const TopRatedProducts = () => {
  const productsList = DUMMY_TOPRATED_PRODUCTS.map((product) => (
    <ProductsDisplay
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      image={product.image}
    />
  ));
  return (
    <div className={classes.section}>
      <div><h2>Top Rated Products</h2></div>
      <div>{productsList}</div>
    </div>
  );
};

export default TopRatedProducts;
