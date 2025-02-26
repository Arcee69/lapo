import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import PageLayout from "../layouts";
import About from "../pages/About";
import Loans from "../pages/Products/Loans";
import Savings from "../pages/Products/Savings";
import SavingsPlan from "../pages/Products/components/SavingsPlan";
import Cards from "../pages/Digital/Cards";
import Pos from "../pages/Pos";
import Faqs from "../pages/Faq";
import Careers from "../pages/Careers";
import MobileApp from "../pages/Digital/MobileApp";
import Contact from "../pages/Contact";
import Media from "../pages/Media";
import Sustainability from "../pages/Sustainability";
import ViewBlogPost from "../pages/Media/components/ViewBlogPost";


export default function Routers() {
  return (
    <div>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/products" element={<Loans />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/media" element={<Media />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/products/savings" element={<Savings />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/pos" element={<Pos />} />
          <Route path="/products/savings/plan" element={<SavingsPlan />} />
          <Route path="/digital" element={<MobileApp />} />
          <Route path="/digital/cards" element={<Cards />} />
          <Route path="/view-post" element={<ViewBlogPost />} />
        </Route>
      </Routes>
    </div>
  );
}
