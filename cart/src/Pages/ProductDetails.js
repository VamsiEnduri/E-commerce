import React, { useState } from "react";
import "./ProductDetails.css";
import products from "../assets/data/products";
import { useParams } from "react-router-dom";
import CommonSection from "../components/Ui/CommonSection";
import { AiOutlineStar } from "react-icons/ai";
import { motion } from "framer-motion";
import ProductList from "../components/Ui/ProductList";
import footer from "../components/Footer/Footer";
import Footer from "../components/Footer/Footer";
function ProductDetails() {
  const { id } = useParams();
  const product = products.find((x) => x.id === id);

  const [rating, setRating] = useState(null);
  const realtedProducts = products.filter(
    (item) => item.category === product.category
  );
  return (
    <>
      <CommonSection title={product.productName} />
      <div className="pdt-details-main">
        <div className="pdt-img">
          <img src={product.imgUrl} width="380px" />;
        </div>
        <div className="pdt-details">
          <h2>{product.productName}</h2>
          <p>
            <span onClick={() => setRating(1)}>
              <AiOutlineStar />
            </span>
            <span onClick={() => setRating(2)}>
              <AiOutlineStar />
            </span>
            <span onClick={() => setRating(3)}>
              <AiOutlineStar />
            </span>
            <span onClick={() => setRating(4)}>
              <AiOutlineStar />
            </span>
            <span onClick={() => setRating(5)}>
              <AiOutlineStar />
            </span>
            &nbsp; &nbsp;
            {product.avgRating} Ratings
          </p>
          <p>${product.price}</p>
          <p>{product.shortDesc}</p>
          <motion.button whileTap={{ scale: 0.8 }} className="cart-btn">
            Add To Cart
          </motion.button>
        </div>
      </div>
      {/* <div className="pdt-desc">
        <h4>Description:-</h4>
        <p>{product.description}</p>
      </div> */}
      <div className="review-form">
        <h4>Leave Your Experience</h4>
        <form action="">
          <div className="form-group">
            <input type="text" placeholder="Enter Name" />
          </div>
          <div className="form-group">
            <span>
              1<AiOutlineStar />
            </span>
            <span>
              2 <AiOutlineStar />
            </span>
            <span>
              3 <AiOutlineStar />
            </span>
            <span>
              4 <AiOutlineStar />
            </span>
            <span>
              5 <AiOutlineStar />
            </span>
          </div>
          <div className="form-group">
            <textarea rows={6}>Review message</textarea>
          </div>

          <button type="submit" className="">
            Submit
          </button>
        </form>
      </div>
      <div className="other">
        <h3>You might also like these</h3>
        <ProductList data={realtedProducts} />
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
