import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import AboutView from "./pages/AboutView";
import HomeView from "./pages/HomeView";
import HousingView from "./pages/HousingView";
import ErrorView from "./pages/ErrorView";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/housing/:id" element={<HousingView />} />
        {/* <Route path="/housing/*" element={<HomeView />} /> */}
        <Route path="/*" element={<ErrorView />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
);
