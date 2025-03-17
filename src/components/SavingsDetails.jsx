import React, { useEffect, useRef} from "react";
import { useLocation } from "react-router-dom";
import Accordion from "./Accordion";

import Star from "../assets/svg/star_green.svg"
import Box from "../assets/svg/box_green.svg"
import Savings from "../assets/svg/savings_green.svg"

const SavingsDetails = ({ img, details, listContent, featuresContent, documentContent }) => {

     const { state } = useLocation()
     const detailsRef = useRef(null)

      useEffect(() => {
        if (state?.section === "details" && detailsRef.current) {
          detailsRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, [state]); 
    return (
        <section 
            className="flex flex-col lg:flex-row gap-8 p-6 pt-[66px] lg:pt-[154px] pb-[138px] max-w-6xl mx-auto"
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
            ref={detailsRef}
        >
            {/* Right Section - Image */}
            <div className="flex-1 lg:hidden ">
              <img
                  src={img} 
                  alt="Group Meeting"
                  className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Left Section - Loan Details */}
            <div className="flex-1 lg:pr-[63px]  lg:border-[1px] lg:border-l-0 lg:border-y-0 lg:border-r-[#BAE2CE]">
                <h2 className="text-[32px] font-hanken text-[#101828] font-medium">Details</h2>
                <p className="text-[#445D65] leading-6 text-base font-inter mt-2">
                    {details}
                </p>
    
              <div className="mt-6">
                  <Accordion
                      title={<div className="flex items-center gap-1"><img src={Star} alt="Star" className="w-6 h-6"/> <p className="text-[#000000] font-semibold font-nunito text-[18px]">Benefits</p></div>} 
                      content={
                          Array.isArray(listContent) ? (
                            <ul className="text-[#16181D] font-inter font-medium text-base space-y-2">
                              {listContent.map((point, i) => (
                                <li key={i}>• {point}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>{item.listContent}</p>
                          )
                        }
                      savingsComp={true}
                  />
                  <Accordion 
                      title={<div className="flex items-center gap-1"><img src={Savings} alt="Savings" className="w-6 h-6"/> <p className="text-[#000000] font-semibold font-nunito text-[18px]">Savings Plan Interest Rate</p></div>}
                      content={
                          Array.isArray(featuresContent) ? (
                            <ul className="text-[#16181D] font-inter font-medium text-base space-y-2">
                              {featuresContent.map((point, i) => (
                                <li key={i}>• {point}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>{item.featuresContent}</p>
                          )
                      }
                  />
                  <Accordion 
                      title={<div className="flex items-center gap-1"><img src={Box} alt="Box" className="w-6 h-6"/> <p className="text-[#000000] font-semibold font-nunito text-[18px]">Documents</p></div>}
                      content={
                          Array.isArray(documentContent) ? (
                            <ul className="text-[#16181D] font-inter font-medium text-base space-y-2">
                              {documentContent.map((point, i) => (
                                <li key={i}>• {point}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>{item.documentContent}</p>
                          )
                      }
                  />
              </div>
      
              {/* <button className="mt-6 bg-black font-hanken text-white px-6 py-3 rounded-lg">
                  Get Started 
              </button> */}
            </div>
    
            {/* Right Section - Image */}
            <div className="hidden lg:flex flex-1 ">
            <img
                src={img} 
                alt="Group Meeting"
                className="w-full h-[689px] rounded-lg"
            />
            </div>
        </section>
    );
  };
  
  export default SavingsDetails;