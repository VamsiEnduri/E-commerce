import React, { useRef, useEffect } from "react";
import "./Header.css";
// import { Link } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
const Header = () => {
  const headerRef = useRef(null);
  const stickyHedaerFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40
      ) {
        headerRef.current.classList.add("sticky-header");
      } else {
        headerRef.current.classList.remove("sticky-header");
      }
    });
  };
  useEffect(() => {
    stickyHedaerFunc();
    return () => window.removeEventListener("scroll", stickyHedaerFunc);
  });
  return (
    <div className="header" ref={headerRef}>
      <div className="header-logo">
        {/* <Link to="/"> */}

        <h3 style={{ fontSize: 24 }}>
          <a href="/">VamsiMart</a>
        </h3>
        {/* </Link> */}
      </div>
      <div className="header-menu">
        <div className="header-menu-list">
          {" "}
          <p style={{ fontSize: 17 }}>Home</p>
          <p style={{ fontSize: 17 }}>
            <a href="/shop">Shop</a>
          </p>
          <p style={{ fontSize: 17 }}>Cart</p>
        </div>
      </div>
      <div className="header-icons">
        <span>
          <AiOutlineHeart />
          <span className="badge" style={{ fontSize: 17 }}>
            1
          </span>
        </span>

        <span>
          <AiOutlineShoppingCart />
          <span className="badge" style={{ fontSize: 17 }}>
            1
          </span>
        </span>
        <span>
          <AiOutlineUser />
        </span>
        {/* <span>
          <AiOutlineMenu />
        </span> */}
      </div>
    </div>
  );
};

export default Header;
