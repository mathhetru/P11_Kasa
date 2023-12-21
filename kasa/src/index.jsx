import React from "react";
import ReactDOM from "react-dom/client";
import About from "./pages/About";
import Home from "./pages/Home";
import Housing from "./pages/Housing";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<Housing />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
);
