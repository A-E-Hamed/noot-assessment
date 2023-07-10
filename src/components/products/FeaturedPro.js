import { DUMMY_FEATURE_PRODUCTS } from "../constants/dummyFeatureProducts";
import ProductsDisplay from "./ProductsDisplay";
import classes from "./ProductsDisplay.module.css";
const FeaturedPro = () => {
  const productsList = DUMMY_FEATURE_PRODUCTS.map((product) => (
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
      <div><h2>Featured Products</h2></div>
      <div>{productsList}</div>
    </div>
  );
};

export default FeaturedPro;
