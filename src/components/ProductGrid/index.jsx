import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/products";

function ProductGrid() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products);

  console.log(products);
  if (products.length === 0) return <div>Loading</div>;
  else
    return (
      <div className="App">
        {products.map((product, index) => (
          <h4 onClick={() => dispatch(addToCart(product))} key={index}>
            {product.title}
          </h4>
        ))}
        <Link to="/cart">Cart</Link>
      </div>
    );
}

export default ProductGrid;
