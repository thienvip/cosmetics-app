import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Search from "../src/pages/Search";

import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserAuthContextProvider } from "./hooks/Context/UserAuthContext";

import useGetProducts from "./hooks/useGetProducts";
import Feature from "./pages/Feature";
import ScrollToTop from "./utils/ScrollToTop";
import NotFound from "./pages/NotFound";

function App() {
  const fullData = useGetProducts();

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <ToastContainer />
          <UserAuthContextProvider>
            <Routes>
              <Route path="/product" element={<Product />}>
                <Route path=":id" element={<Product />} />
              </Route>
              <Route path="/about" element={<About />}></Route>
              <Route
                path="/search"
                element={<Search data={fullData} />}
              ></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/feature" element={<Feature />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </UserAuthContextProvider>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
