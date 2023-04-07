import React, { useEffect, useState } from "react";
import "./Home.css";
import hero1 from "../../assets/hero1.png";
import { motion } from "framer-motion";
import products from "../../assets/data/products";
import ProductList from "../Ui/ProductList";
import Footer from "../Footer/Footer";
function Home() {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [watchProducts, setWatchProducts] = useState([]);
  useEffect(() => {
    const filteredTrendingData = products.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSalesData = products.filter(
      (item) => item.category === "sofa"
    );

    const filteredMobileData = products.filter(
      (item) => item.category === "mobile"
    );

    const filteredWirelessData = products.filter(
      (item) => item.category === "wireless"
    );

    const filteredWatchData = products.filter(
      (item) => item.category === "watch"
    );
    setTrendingProducts(filteredTrendingData);
    setBestSalesProducts(filteredBestSalesData);
    setMobileProducts(filteredMobileData);
    setWirelessProducts(filteredWirelessData);
    setWatchProducts(filteredWatchData);
  }, []);
  const year = new Date().getFullYear();
  return (
    <>
      <div className="home">
        <div className="home-info">
          <p>Trending products in {year}</p>
          <h4>Make your interor minimalisitic & moderrn</h4>

          <motion.button whileTap={{ scale: 1.1 }}>Shop now</motion.button>
        </div>

        <div className="home-logo">
          <img alt="" src={hero1} />
        </div>
      </div>
      <div className="services">
        <motion.span whileTap={{ scale: 1.1 }} className="top-notch">
          Top-Notch Quality
        </motion.span>

        <motion.span whileTap={{ scale: 1.1 }} className="fast-delivery">
          Fastest Delivery
        </motion.span>
      </div>
      <div className="trending-products">
        <h3>Trending Products</h3>
        <div className="tr-pdts">
          <ProductList data={trendingProducts} />
        </div>
      </div>

      <div className="best-sales-products">
        <h3>Best Sales</h3>
        <div className="bst-sales-pdts">
          <ProductList data={bestSalesProducts} />
        </div>
      </div>

      <div className="mobile-products">
        <h3>New Arrivals</h3>
        <div className="mobile-pdts">
          <ProductList data={mobileProducts} />
          {/* <ProductList data={wirelessProducts} /> */}
        </div>
      </div>

      <div className="wireless-products">
        <h3>Wireless Prodcuts</h3>
        <div className="wr-pdts">
          <ProductList data={wirelessProducts} />
        </div>
      </div>

      <div className="watch-products">
        <h3>Top Branded </h3>
        <div className="wtch-pdts">
          <ProductList data={watchProducts} />
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
