import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import PageLayout from "../layouts";
import About from "../pages/About";
import Loans from "../pages/Products/Loans";
import Savings from "../pages/Products/Savings";
import SavingsPlan from "../pages/Products/components/SavingsPlan";
import Cards from "../pages/Products/Cards";
import Pos from "../pages/Products/Pos";
import Faqs from "../pages/Faq";


export default function Routers() {
  return (
    <div>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/products" element={<Loans />} />
          <Route path="/products/savings" element={<Savings />} />
          <Route path="/products/cards" element={<Cards />} />
          <Route path="/products/pos" element={<Pos />} />
          <Route path="/products/savings/plan" element={<SavingsPlan />} />
        </Route>
      </Routes>
    </div>
  );
}
