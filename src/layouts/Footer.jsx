import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/svg/logo.svg" 

const Footer = () => {

  const navigate = useNavigate()

  const isMobile = window.innerWidth < 768

  return (
    <div 
      className="w-full flex flex-col"
      data-aos="fade-up" 
      data-aos-duration="1000"
      data-aos-easing="linear"
    >
      <div className="border border-t-[#E2E2E2] border-x-0 border-b-0 px-[112px] pt-[56.98px] pb-[119.98px]">
        <div className="flex items-start gap-[32px]">
          <img src={Logo} alt="Logo" className='w-[153px] h-[50px] cursor-pointer' onClick={() => {navigate("/"); window.scrollTo(0, 0)}}/>
          <div className="flex w-[180px] flex-col gap-4">
            <p className="font-inter text-[20px] font-semibold text-[#34423B]">Products</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => {navigate('/products/savings'), window.scrollTo(0, 0)}}>Savings</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => {navigate("/products/cards"), window.scrollTo(0, 0)}}>Cards</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => {navigate("/products") }}>Loans <span className="bg-[#00954B] inline-flex text-xs rounded-[16px] p-1 items-center justify-center text-[#fff] w-[42px] h-[22px]">New</span></p>
          </div>
          <div className="flex w-[180px] flex-col gap-4">
            <p className="font-inter text-[20px] font-semibold text-[#34423B]">Company</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]" onClick={() => {navigate("/about"), window.scroll(0, 0)}}>About us</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">Careers</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">Find a Branch</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">Media</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">Contact</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">Sustainability</p>
          </div>
          <div className="flex w-[180px] flex-col gap-4">
            <p className="font-inter text-[20px] font-semibold text-[#34423B]">Resources</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">Blog</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">Newsletter</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">Events</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">Press</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">Help centre</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">Support</p>
          </div>
          <div className="flex w-[180px] flex-col gap-4">
            <p className="font-inter text-[20px] font-semibold text-[#34423B]">Social</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">Twitter</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">LinkedIn</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">Facebook</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">Youtube</p>
          </div>
          <div className="flex w-[180px] flex-col gap-4">
            <p className="font-inter text-[20px] font-semibold text-[#34423B]">Legal</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">Terms</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">Privacy</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">Cookies</p>
            <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">Licenses</p>
            {/* <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">Settings</p> */}
            {/* <p className="font-inter text-base font-medium cursor-pointer text-[#1E1E1E]">Contact</p> */}
          </div>
        </div>
      </div>

      <div className="mx-[31px] border border-t-[#E2E2E2] border-b-0 border-x-0 py-[32px] pb-[27px] flex items-center justify-between">
        <p className="text-[13px] font-inter text-[#011624]">© 2025 LAPO. All rights reserved.</p>
        <div className="flex items-center gap-[48px]">
          <p className="font-medium font-inter text-[13px] cursor-pointer text-[#011624]">Privacy Policy</p>
          <p className="font-medium font-inter text-[13px] cursor-pointer text-[#011624]">Terms of Service</p>
          <p className="font-medium font-inter text-[13px] cursor-pointer text-[#011624]">Cookies Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
