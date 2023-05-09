import "./App.css";
import Nav from "./components/Nav/Nav";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Provider } from "./components/Context/Context";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Product from "./pages/Product/Product";
import Contact from "./pages/contact/Contact";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Provider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
    </Provider>
  );
}

export default App;
