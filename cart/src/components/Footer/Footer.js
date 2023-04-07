import React from "react";
import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa";
import {
  AiOutlineMail,
  AiOutlinePhone,
  //   AiOutlineCodepenCircle,
} from "react-icons/ai";
function Footer() {
  return (
    <div className="f-main">
      <div className="footer">
        <div className="footer-2">
          <h3>Categeory</h3>
          <p>Home</p>
          <p>Shop</p>
          <p>Cart</p>
        </div>
        <div className="footer-3">
          <h3>Contacts</h3>
          <p>
            <AiOutlineMail />:<span>vamsienduri1234@gmai.com</span>
          </p>
          <p>
            <AiOutlinePhone />: +91 72870 36641
          </p>
          <p>
            <FaWhatsapp /> : +91 7095178312
          </p>
        </div>
      </div>

      <div className="copy">
        <p>Copyrights are resservd for 2023-25</p>
      </div>
    </div>
  );
}

export default Footer;
