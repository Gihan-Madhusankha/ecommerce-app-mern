// eslint-disable-next-line no-unused-vars
import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import {ShopContext} from "../context/ShopContext.jsx";

const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e) => e.id === Number(productId))


  return (
    <div>

    </div>
  );
}

export default Product;
