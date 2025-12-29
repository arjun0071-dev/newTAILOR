import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Blog from "./Components/Pages/Blog";
import Contact from "./Components/Pages/Contact";
import Service from "./Components/Pages/Service";



import Layout from "./Components/Hoc/Layout";

function App() {
  return (
    <Routes>
      {/* Layout Route */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        {/* API Routes */}
     
      </Route>
    </Routes>
  );
}

export default App;
