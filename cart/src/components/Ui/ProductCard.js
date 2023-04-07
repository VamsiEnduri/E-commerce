import React from "react";

import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import "./ProductCard.css";
import { useNavigate, Link } from "react-router-dom";
// import { Col } from "react-bootstrap";
function ProductCard({ item }) {
  // let navigate = useNavigate();
  return (
    <div className="pdt-item">
      <div className="pdt-img">
        <motion.img
          whileHover={{ scale: 0.8 }}
          src={item.imgUrl}
          width="230px"
        />
      </div>
      <div className="pdt-middie">
        <h5 className="pdt-name">
          <Link to={`/shop/${item.id}`}>{item.productName}</Link>
        </h5>
        <span>{item.category}</span>
      </div>
      <div className="pdt-bottom">
        <span className="pdt-price">${item.price}</span>
        <motion.span whileHover={{ scale: 1.3 }}>
          <FaPlus size={12} />
        </motion.span>
      </div>
    </div>
  );
}

export default ProductCard;
