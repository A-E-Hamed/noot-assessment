import { DUMMY_ONSALE_PRODUCTS } from "../constants/dummyOnSale";
import ProductsDisplay from "./ProductsDisplay";
import classes from "./ProductsDisplay.module.css";


const OnSaleProducts = () => {
  const productsList = DUMMY_ONSALE_PRODUCTS.map((product) => (
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
      <div><h2>On Sale Products</h2></div>
      <div>{productsList}</div>
    </div>
  );
};

export default OnSaleProducts;
