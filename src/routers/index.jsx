import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import PageLayout from "../layouts";
import About from "../pages/About";
import Loans from "../pages/Products/loans";
import Savings from "../pages/Products/savings";
import Festival from "../pages/Products/savings/components/Festival";
import Cards from "../pages/Digital/Cards";
import Pos from "../pages/Pos";
import Faqs from "../pages/Faq";
import Careers from "../pages/Careers";
import MobileApp from "../pages/Digital/MobileApp";
import Contact from "../pages/Contact";
import Sustainability from "../pages/Sustainability";
import ViewBlogPost from "../pages/Blog/components/ViewBlogPost";
import Regular from "../pages/Products/loans/components/Regular";
import CleanEnergy from "../pages/Products/loans/components/CleanEnergy";
import RegularSavings from "../pages/Products/savings/components/Regular";
import Pikin from "../pages/Products/savings/components/Pikin";
import FixedDeposit from "../pages/Products/savings/components/FixedDeposit";
import IndividualDeposit from "../pages/Products/savings/components/IndividualDeposit";
import Social from "../pages/Products/savings/components/Social";
import IndividualCurrent from "../pages/Products/savings/components/IndividualCurrent";
import Xpress from "../pages/Products/savings/components/Xpress";
import Sme from "../pages/Products/loans/components/Sme";
import Agricultural from "../pages/Products/loans/components/Agricultural";
import Asset from "../pages/Products/loans/components/Asset";
import Education from "../pages/Products/loans/components/Education";
import Special from "../pages/Products/loans/components/Special";
import Payroll from "../pages/Products/loans/components/Payroll";
import PicturesGallery from "../pages/Media/components/Pictures";
import Resources from "../pages/Resources";
import Blog from "../pages/Blog";
import Videos from "../pages/Media/components/Videos";
import Media from "../pages/Media";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import BvnConsent from "../pages/BvnConsent";


export default function Routers() {
  return (
    <div>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/products" element={<Loans />} />
          <Route path="/loans/regular" element={<Regular />} />
          <Route path="/loans/clean-energy" element={<CleanEnergy />} />
          <Route path="/loans/msme" element={<Sme />} />
          <Route path="/loans/agricultural" element={<Agricultural />} />
          <Route path="/loans/asset" element={<Asset />} />
          <Route path="/loans/education" element={<Education />} />
          <Route path="/loans/special" element={<Special />} />
          <Route path="/loans/payroll" element={<Payroll />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/media" element={<PicturesGallery />} />
          <Route path="/gallery/videos" element={<Videos />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/products/savings" element={<Savings />} />
          <Route path="/savings/regular" element={<RegularSavings />} />
          <Route path="/savings/pikin" element={<Pikin />} />
          <Route path="/savings/fixed" element={<FixedDeposit />} />
          <Route path="/savings/individual/savings" element={<IndividualDeposit />} />
          <Route path="/savings/individual/current" element={<IndividualCurrent />} />
          <Route path="/savings/xpress" element={<Xpress />} />
          <Route path="/savings/social" element={<Social />} />
          <Route path="/savings/festival" element={<Festival />} />
          <Route path="/gallery/pictures" element={<PicturesGallery />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pos" element={<Pos />} />
          <Route path="/digital" element={<MobileApp />} />
          <Route path="/digital/cards" element={<Cards />} />
          <Route path="/press-release" element={<Blog />} />
          <Route path="/articles" element={<Blog />} />
          <Route path="/view-post" element={<ViewBlogPost />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/bvn/consent" element={<BvnConsent />} />
        </Route>
      </Routes>
    </div>
  );
}
