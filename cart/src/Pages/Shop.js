import React, { useState } from "react";
import CommonSection from "../components/Ui/CommonSection";

import "./Shop.css";
import products from "../assets/data/products";

import ProductList from "../components/Ui/ProductList";
function Shop() {
  const [productsData, setProductsData] = useState(products);
  const handleSerach = (e) => {
    const searchTerm = e.target.value;
    const serachedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(serachedProducts);
  };
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductsData(filteredProducts);
    }
  };
  return (
    <>
      <CommonSection title="products" />
      <div className="shop">
        <div className="filter-widget" onChange={handleFilter}>
          <select>
            <option>Filter By Categeory</option>
            <option value="sofa">Sofa</option>
            <option value="mobile">Mobile</option>
            <option value="Chair">Chair</option>
            <option value="watch">Watch</option>
            <option value="wireless">Witeless</option>
          </select>
        </div>
        <div className="filter-widget">
          <select>
            <option>Sort By</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search......"
            onChange={handleSerach}
          />
        </div>
      </div>
      <div>
        {productsData.length === 0 ? (
          <h1>No products found</h1>
        ) : (
          <ProductList data={productsData} />
        )}
      </div>
    </>
  );
}

export default Shop;
