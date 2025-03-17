import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/svg/logo.svg" 

const Footer = () => {

  const navigate = useNavigate()

  const isMobile = window.innerWidth < 768

  return (
    <div 
      className="w-full flex flex-col relative"
      data-aos="fade-up" 
      data-aos-duration="1000"
      data-aos-easing="linear"
    >
      <div className="border border-t-[#E2E2E2] border-x-0 border-b-0 pl-[21px] pt-[56.98px] pb-[119.98px]">
        <div className="flex flex-col lg:flex-row items-start gap-[32px]">
          <img src={Logo} alt="Logo" className='w-[153px] h-[50px] cursor-pointer' onClick={() => {navigate("/"); window.scrollTo(0, 0)}}/>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-[32px]">
            <div className="flex w-[180px] flex-col gap-4">
              <p className="font-inter text-[20px] font-semibold text-[#34423B]">Products</p>
              <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => {navigate('/products/savings'), window.scrollTo(0, 0)}}>Savings</p>
              <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => {navigate("/products/cards"), window.scrollTo(0, 0)}}>Cards</p>
              <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => {navigate("/products"), window.scrollTo(0, 0) }}>Loans</p>
              <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => {navigate("/pos"), window.scrollTo(0, 0) }}>Pos <span className="bg-[#00954B] inline-flex text-xs rounded-[16px] p-1 items-center justify-center text-[#fff] w-[42px] h-[22px]">New</span></p>
              <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" 
                onClick={() => {navigate("/digital", {
                            state: {section: "app"}
                          }); window.scrollTo(0, 0)}}
              >
                Digital Banking
              </p>
            </div>
            <div className="flex w-[180px] flex-col gap-4">
              <p className="font-inter text-[20px] font-semibold text-[#34423B]">Company</p>
              <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => {navigate("/about"), window.scroll(0, 0)}}>About us</p>
              <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => {navigate("/careers"), window.scroll(0, 0)}}>Careers</p>
              <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => {navigate("/resources"), window.scroll(0, 0)}}>Resources</p>
              <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => {navigate("/about"), window.scroll(0, 0)}}>Awards</p>
              <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => {navigate("/about"), window.scroll(0, 0)}}>Board and Excos</p>
              <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => {navigate("/sustainability"), window.scroll(0, 0)}}>Sustainability</p>
            </div>
            <div className="flex w-[180px] flex-col gap-4">
              <p className="font-inter text-[20px] font-semibold text-[#34423B]">Media</p>
              <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => {navigate("/blog"), window.scroll(0, 0)}}>Blog</p>
              <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => {navigate("/events"), window.scroll(0, 0)}}>Gallery</p>
              <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => {navigate("/blog"), window.scroll(0, 0)}}>Press Release</p>
              <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => {navigate("/faqs"), window.scroll(0, 0)}}>FAQs</p>
            </div>
            <div className="flex w-[180px] flex-col gap-4">
              <p className="font-inter text-[20px] font-semibold text-[#34423B]">Social</p>
              <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => window.open("https://x.com/lapo_mfb", "_blank")}>X (Twitter)</p>
              <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => window.open("https://www.linkedin.com/company/lapo-microfinance/", "_blank")}>LinkedIn</p>
              <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => window.open("https://www.facebook.com/share/1ARzVT3J2E/?mibextid=LQQJ4d", "_blank")} >Facebook</p>
              <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => window.open("https://www.instagram.com/lapo_microfinance_bank", "_blank")}>Instagram</p>
            </div>
            <div className="flex w-[180px] flex-col gap-4">
              <p className="font-inter text-[20px] font-semibold text-[#34423B]">Contact</p>
              <a className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E] block" href="mailto:info@lapo-nigeria.org" >Email</a>
              <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">Support</p>
              <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" 
                onClick={() => {navigate("/contact-us", {state: {section: "branch"}}), window.scroll(0, 0)}}
              > 
                Branch Locator
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-[31px] border border-t-[#E2E2E2] border-b-0 border-x-0 py-[32px] pb-[27px] flex flex-col lg:flex-row lg:items-center justify-between">
        <p className="text-[13px] font-inter text-[#011624]">© 2025 LAPO. All rights reserved.</p>
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-[48px]">
          <p className="font-medium font-inter text-[13px] cursor-pointer text-[#011624]" onClick={() => {navigate("/privacy"), window.scrollTo(0, 0)}}>Privacy Policy</p>
          <p className="font-medium font-inter text-[13px] cursor-pointer text-[#011624]">Terms of Service</p>
          <p className="font-medium font-inter text-[13px] cursor-pointer text-[#011624]">Cookies Settings</p>
        </div>
      </div>

      <img 
        src="https://res.cloudinary.com/dairsbzlv/image/upload/v1740240205/circle_adyxy6.png" 
        alt="circle" 
        className="absolute right-0 bottom-0 w-[691px] h-[318px] -z-10" 
      />
    </div>
  );
};

export default Footer;
