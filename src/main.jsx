// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Careers from "./pages/Careers/Careers";
import About from "./pages/About/About";
import ScrollToTop from "./components/ScrollToTop";
import Works from "./pages/Works/Works";
import Erynits from "./pages/Works/Erynits";
import Agil from "./pages/Works/Agil";
import Mudra from "./pages/Works/Mudra";
import Soniva from "./pages/Works/Soniva";
import EcoRoot from "./pages/Works/EcoRoot";
import Tekninja from "./pages/Works/Tekninja";
import Services from "./pages/Services/Services";
import Solutions from "./pages/Solutions/Solutions";
import Industries from "./pages/Industries/Industries";
import Blog from "./pages/Blog/Blog";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/global.css";
import Lenis from "@studio-freight/lenis";

// Global Lenis initialization
const lenis = new Lenis({
  duration: 1,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});
window.lenis = lenis;

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/eryntis" element={<Erynits />} />
        <Route path="/works/agil" element={<Agil />} />
        <Route path="/works/mudra" element={<Mudra />} />
        <Route path="/works/soniva" element={<Soniva />} />
        <Route path="/works/eco-root" element={<EcoRoot />} />
        <Route path="/works/tekninja" element={<Tekninja />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
);
