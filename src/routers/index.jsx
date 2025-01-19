import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PageLayout from "../layouts";
import About from "../pages/About";


export default function Routers() {
  return (
    <div>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}
