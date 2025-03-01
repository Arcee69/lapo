import React, { useState } from "react";
import Accordion from "./Accordion";

import Star from "../assets/svg/star_purple.svg"
import Box from "../assets/svg/box_purple.svg"
import Features from "../assets/svg/features_purple.svg"

const LoanDetails = ({ img }) => {
    return (
        <section 
            className="flex flex-col lg:flex-row gap-8 p-6 pb-[138px] max-w-6xl mx-auto"
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            {/* Left Section - Loan Details */}
            <div className="flex-1 pr-[63px]  border-[1px] border-l-0 border-y-0 border-r-[#BAE2CE]">
                <h2 className="text-[32px] font-hanken text-[#101828] font-medium">Details</h2>
                <p className="text-[#445D65] leading-6 text-base font-inter mt-2">
                    This loan product is designed to operate on a group (union)
                    methodology. A union is a self-selected group of people who access
                    loans individually but have group guarantees. Regular Loan is created
                    to help meet the working capital needs of clients that run small
                    businesses.
                </p>
                {/* "⭐ " */}
    
            <div className="mt-6">
                <Accordion
                title={<div className="flex items-center gap-1"><img src={Star} alt="Star" className="w-6 h-6"/> <p className="text-[#000000] font-semibold font-nunito text-[18px]">Benefits</p></div>} 
                content={
                    <ul className="text-[#16181D] font-inter font-medium text-base space-y-2">
                    <li>• No Collateral</li>
                    <li>• Access To Funds For Business Expansion</li>
                    <li>• Access To Other Business Loan Products</li>
                    <li>• Flexible Repayment Structure</li>
                    <li>• Training On Basic Financial Management</li>
                    <li>• Low Interest Rate</li>
                    <li>• Expert Financial Advice</li>
                    </ul>
                }
                />
                <Accordion 
                    title={<div className="flex items-center gap-1"><img src={Box} alt="Box" className="w-6 h-6"/> <p className="text-[#000000] font-semibold font-nunito text-[18px]">Features</p></div>}
                    content={<p>Details about features...</p>} 
                />
                <Accordion 
                    title={<div className="flex items-center gap-1"><img src={Features} alt="Features" className="w-6 h-6"/> <p className="text-[#000000] font-semibold font-nunito text-[18px]">Documents</p></div>}
                    content={<p>Required documents...</p>} 
                />
            </div>
    
            <button className="mt-6 bg-black font-hanken text-white px-6 py-3 rounded-lg">
                Get Started →
            </button>
            </div>
    
            {/* Right Section - Image */}
            <div className="flex-1">
            <img
                src={img} // Replace with actual path
                alt="Group Meeting"
                className="w-full h-auto rounded-lg"
            />
            </div>
        </section>
    );
  };
  
  export default LoanDetails;