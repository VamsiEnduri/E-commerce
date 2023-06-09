import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails";
import Shop from "./Pages/Shop";
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/E-commerce" element={<Home />} />
          <Route exact path="shop" element={<Shop />} />
          <Route exact path="shop/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
