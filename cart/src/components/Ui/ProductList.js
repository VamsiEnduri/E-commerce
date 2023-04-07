import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";
// import { useNavigate } from "react-router-dom";
// import products from "../../assets/data/products";
function ProductList({ data }) {
  // let navigate = useNavigate();
  // const product = products.find((x) => x.id === "id");
  // // const { id } = product;
  return (
    <div className="pdt-cards">
      {data.map((item) => {
        return (
          // <div onClick={() => navigate(`${product.id}`)}>
          <ProductCard item={item} />
          // </div>
        );
      })}
    </div>
  );
}

export default ProductList;
