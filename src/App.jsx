// Component: App โดย  NinniN style
// จะใช้ในการทำตัว Routing/re-render page component


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import Product from "./pages/Product";
import Smartphone from "./pages/Smartphone";
import Computer from "./pages/Computer";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/smartphone" element={<Smartphone />} />
        <Route path="/product/computer" element={<Computer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}