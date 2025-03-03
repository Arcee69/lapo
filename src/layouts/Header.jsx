import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

import Logo from "../assets/svg/logo.svg" 

import './css/Header.css';

const Header = () => {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showMediaDropdown, setShowMediaDropdown] = useState(false)

  const navigate = useNavigate()


  const handleMouseEnter = (menu) => {
    if (menu === 'products') {
      setShowProductsDropdown(true);
      setShowMediaDropdown(false);
    } else if (menu === "media") {
      setShowMediaDropdown(true);
      setShowProductsDropdown(false);
    } else if (menu === "nil") {
      setShowProductsDropdown(false);
      setShowMediaDropdown(false);
    }
  };
  
  const handleMouseLeave = (menu) => {
    if (menu === 'products') {
      setShowProductsDropdown(false);
    }  else if (menu === "media") {
      setShowMediaDropdown(false);
    } else if (menu === "nil") {
      setShowProductsDropdown(false);
    }
  };



  return (
    <div 
      className='bg-[#fff] fixed z-50 w-full pl-[32px] h-[80px] pr-[127px] py-5 flex items-center justify-between'
      onMouseLeave={() => {
        handleMouseEnter("nil"),
        handleMouseLeave("nil");
      }}
    >
        <img src={Logo} alt="Logo" className='w-auto h-[44px] cursor-pointer' onClick={() => {navigate("/"); window.scrollTo(0, 0)}}/>
        <div className='flex items-center gap-6'>
            <p 
              className='font-nunito font-medium text-base hover:border-[4px] hover:border-x-0 hover:border-t-0 hover:border-[#EC994B] hover:text-[#00954B] hover:font-bold text-[#10281D] cursor-pointer' 
              onClick={() => {navigate("/"); 
              window.scrollTo(0, 0)}}
            >
              Home
            </p>
            
            <p 
              className='font-nunito font-medium text-base hover:border-[4px] hover:border-x-0 hover:border-t-0 hover:border-[#EC994B] hover:text-[#00954B] hover:font-bold text-[#10281D] cursor-pointer'  
              onClick={() => {navigate("/about"); 
              window.scrollTo(0, 0)}}
            >
              About Us
            </p>

            <div className="relative inline-block dropdown-wrapper">
              <div
                onMouseEnter={() => handleMouseEnter("products")}
                className='block font-nunito font-medium text-base hover:border-[4px] hover:border-x-0 hover:border-t-0 hover:border-[#EC994B] hover:text-[#00954B] hover:font-bold text-[#10281D] cursor-pointer' 
                onClick={() => {navigate("/products"); 
                window.scrollTo(0, 0)}}
              >
                Products
              </div>
              {showProductsDropdown && (
                <div
                  className={`dropdown-menu bg-[#fff] transition-all duration-500 ease-in-out shadow-2xl absolute left-1/3 -translate-x-1/3 rounded-xl p-[32px] w-[85vw] ${
                    showProductsDropdown ? "show" : ""
                  }`}
                  onMouseLeave={() => handleMouseLeave("products")}
                >
                  <div className="block flex items-start gap-5 cursor-pointer px-6 py-5 ">

                    <div className='flex flex-col gap-6 w-[286px] '>
                      <p 
                        className='font-medium font-hanken cursor-pointer text-[20px] leading-5 text-[#16181D]'
                        onClick={() => {
                          navigate("/products/savings"),
                          window.scrollTo(0,0)
                        }}
                      >
                        Savings
                      </p>

                      <div 
                        className='flex flex-col gap-2 cursor-pointer hover:bg-[#FFF9F5] rounded-lg p-2'
                        onClick={() => {
                          navigate("/savings/xpress"),
                          window.scrollTo(0, 0)
                        }}
                      >
                        <p className='font-hanken text-[#101828] font-medium text-base leading-6'>Xpress Savings Account</p>
                        <p className='text-[#667085] font-inter text-sm leading-5'>A very flexible and convenient savings account</p>
                      </div>

                      <div 
                         onClick={() => {
                          navigate("/savings/fixed"),
                          window.scrollTo(0, 0)
                        }}
                        className='flex flex-col gap-2 cursor-pointer hover:bg-[#FFF9F5] rounded-lg p-2'
                      >
                        <p className='font-hanken text-[#101828] font-medium text-base leading-6'>Fixed Deposit Account</p>
                        <p className='text-[#667085] font-inter text-sm leading-5'>Earn more interest than traditional savings.</p>
                      </div>

                      <div 
                         onClick={() => {
                          navigate("/savings/pikin"),
                          window.scrollTo(0, 0)
                        }}
                        className='flex flex-col gap-2 cursor-pointer hover:bg-[#FFF9F5] rounded-lg p-2'
                      >
                        <p className='font-hanken text-[#101828] font-medium text-base leading-6'>My Pikin & I Savings Account</p>
                        <p className='text-[#667085] font-inter text-sm leading-5'>Child-focused savings account with high interest.....</p>
                      </div>

                      <div 
                         onClick={() => {
                          navigate("/products/savings", {
                            state: {section: "save"}
                          })
                        }}
                        className='flex items-center cursor-pointer gap-2 w-full'
                      >
                        <p className='text-[#F99650] font-inter whitespace-nowrap text-base leading-6 font-medium'>View all Savings Products</p>
                        <FaArrowRight className='text-[#F99650] w-4 h-4 mt-1' />
                      </div>

                    </div>

                    <div className='flex flex-col gap-6 w-[286px]'>
                      <p 
                        className='font-medium font-hanken cursor-pointer text-[20px] leading-5 text-[#16181D]'
                        onClick={() => {
                          navigate("/products", {
                            state: {section: "loans"}
                          })
                        }}
                      >
                        Loans
                      </p>

                      <div 
                        onClick={() => {
                          navigate("/loans/sme"),
                          window.scrollTo(0, 0)
                        }}
                        className='flex flex-col gap-2 cursor-pointer hover:bg-[#FFF9F5] rounded-lg p-2'
                      >
                        <p className='font-hanken text-[#101828] font-medium text-base leading-6'>SME Loan</p>
                        <p className='text-[#667085] font-inter text-sm leading-5'>Big businesses require big loans.</p>
                      </div>

                      <div 
                        onClick={() => {
                          navigate("/loans/regular"),
                          window.scrollTo(0, 0)
                        }}
                        className='flex flex-col gap-2 cursor-pointer hover:bg-[#FFF9F5] rounded-lg p-2'
                      >
                        <p className='font-hanken text-[#101828] font-medium text-base leading-6'>Regular Loan</p>
                        <p className='text-[#667085] font-inter text-sm leading-5'>Designed to operate on a group (union) methodology.</p>
                      </div>

                      <div 
                        onClick={() => {
                          navigate("/loans/agricultural"),
                          window.scrollTo(0, 0)
                        }}
                        className='flex flex-col gap-2 cursor-pointer hover:bg-[#FFF9F5] rounded-lg p-2'
                      >
                        <p className='font-hanken text-[#101828] font-medium text-base leading-6'>Agricultural loan</p>
                        <p className='text-[#667085] font-inter text-sm leading-5'>Designed to help farmers achieve better results</p>
                      </div>

                      <div 
                        className='flex items-center cursor-pointer gap-2 w-full'
                        onClick={() => {
                          navigate("/products", {
                            state: {section: "loans"}
                          })
                        }}
                      >
                        <p className='text-[#F99650] font-inter whitespace-nowrap text-base leading-6 font-medium'>View all Loans Products</p>
                        <FaArrowRight className='text-[#F99650] w-4 h-4 mt-1' />
                      </div>

                    </div>

                    <div className='flex flex-col gap-6 w-[286px]'>
                      <p className='font-medium font-hanken text-[20px] leading-5 text-[#16181D]'>Digital Banking</p>

                      <div 
                        onClick={() => {
                          navigate("/digital", {
                            state: {section: "app"}
                          })
                        }}
                        className='flex flex-col gap-2 cursor-pointer hover:bg-[#FFF9F5] rounded-lg p-2'
                      >
                        <p className='font-hanken text-[#101828] font-medium text-base leading-6'>Mobile App</p>
                        <p className='text-[#667085] font-inter text-sm leading-5'>The latest industry news.</p>
                      </div>

                      <div 
                        onClick={() => {
                          navigate("/digital/cards", {
                            state: {section: "cards"}
                          })
                        }}
                        className='flex flex-col gap-2 cursor-pointer hover:bg-[#FFF9F5] rounded-lg p-2'
                      >
                        <p className='font-hanken text-[#101828] font-medium text-base leading-6'>LAPO Card</p>
                        <p className='text-[#667085] font-inter text-sm leading-5'>Shop. Pay. Withdraw</p>
                      </div>

                      <div 
                        onClick={() => {
                          navigate("/digital/cards", {
                            state: {section: "cards"}
                          })
                        }}
                        className='flex flex-col gap-2 cursor-pointer hover:bg-[#FFF9F5] rounded-lg p-2'
                      >
                        <p className='font-hanken text-[#101828] font-medium text-base leading-6'>USSD Banking</p>
                        <p className='text-[#667085] font-inter text-sm leading-5'>Dial *351# to experience easy banking</p>
                      </div>

                      <div className='flex items-center cursor-pointer gap-2 w-full'>
                        <p className='text-[#F99650] font-inter whitespace-nowrap text-base leading-6 font-medium'>View all Digital Banking Products</p>
                        <FaArrowRight className='text-[#F99650] w-4 h-4 mt-1' />
                      </div>
                    </div>

                    <div className='flex flex-col gap-6 w-[286px]'>
                      <p className='font-medium font-hanken text-[20px] leading-5 text-[#16181D]'>POS Terminal</p>

                      <div 
                          onClick={() => {
                            navigate("/pos", {
                              state: {section: "pos"}
                            })
                          }}
                        className='flex items-center cursor-pointer gap-2 w-full'
                      >
                        <p className='text-[#F99650] font-inter whitespace-nowrap text-base leading-6 font-medium'>View all Pos Products</p>
                        <FaArrowRight className='text-[#F99650] w-4 h-4 mt-1' />
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <p 
              className='font-nunito font-medium text-base hover:border-[4px] hover:border-x-0 hover:border-t-0 hover:border-[#EC994B] hover:text-[#00954B] hover:font-bold text-[#10281D] cursor-pointer' 
              onClick={() => {navigate("/sustainability"); 
              window.scrollTo(0, 0)}}
            >
              Sustainability
            </p>

            <div className="relative inline-block dropdown-wrapper">
              <div
                onMouseEnter={() => handleMouseEnter("media")}
                className='block font-nunito font-medium text-base hover:border-[4px] hover:border-x-0 hover:border-t-0 hover:border-[#EC994B] hover:text-[#00954B] hover:font-bold text-[#10281D] cursor-pointer' 
                onClick={() => {navigate("/media"); 
                window.scrollTo(0, 0)}}
              >
                Media
              </div>
              {showMediaDropdown && (
                <div
                  className={`dropdown-menu bg-[#fff] transition-all duration-500 ease-in-out shadow-2xl absolute left-2/3 -translate-x-2/4 rounded-xl p-[32px] w-[85vw] ${
                    showMediaDropdown ? "show" : ""
                  }`}
                  onMouseLeave={() => handleMouseLeave("media")}
                >
                  <div className="block flex items-start gap-5 cursor-pointer px-6 py-5 ">

                    <div className='flex flex-col gap-6 w-[389px]'>
                      <p className='font-medium font-hanken text-[20px] leading-5 text-[#16181D]'>Blog</p>

                      <div 
                        className='flex flex-col gap-2 cursor-pointer hover:bg-[#FFF9F5] rounded-lg p-2'
                        // onClick={() => {
                        //   navigate("/products/savings", {
                        //     state: {section: "save"}
                        //   })
                        // }}
                      >
                        <p className='font-hanken text-[#101828] font-medium text-base leading-6'>Events</p>
                        <p className='text-[#667085] font-inter text-sm leading-5'>A very flexible and convenient savings account</p>
                      </div>

                      <div 
                        //  onClick={() => {
                        //   navigate("/products/savings", {
                        //     state: {section: "save"}
                        //   })
                        // }}
                        className='flex flex-col gap-2 cursor-pointer hover:bg-[#FFF9F5] rounded-lg p-2'
                      >
                        <p className='font-hanken text-[#101828] font-medium text-base leading-6'>Articles</p>
                        <p className='text-[#667085] font-inter text-sm leading-5'>Earn more interest than traditional savings.</p>
                      </div>

                      <div 
                         onClick={() => {
                          navigate("/products/savings")
                        }}
                        className='flex items-center cursor-pointer gap-2 w-full'
                      >
                        <p className='text-[#F99650] font-inter whitespace-nowrap text-base leading-6 font-medium'>View all</p>
                        <FaArrowRight className='text-[#F99650] w-4 h-4 mt-1' />
                      </div>

                    </div>

                    <div className='flex flex-col gap-6 w-[389px]'>
                      <p className='font-medium font-hanken text-[20px] leading-5 text-[#16181D]'>Gallery</p>

                      <div 
                        // onClick={() => {
                        //   navigate("/products", {
                        //     state: {section: "loans"}
                        //   })
                        // }}
                        className='flex flex-col gap-2 cursor-pointer hover:bg-[#FFF9F5] rounded-lg p-2'
                      >
                        <p className='font-hanken text-[#101828] font-medium text-base leading-6'>Pictures</p>
                        <p className='text-[#667085] font-inter text-sm leading-5'>Big businesses require big loans.</p>
                      </div>

                      <div 
                        // onClick={() => {
                        //   navigate("/products", {
                        //     state: {section: "loans"}
                        //   })
                        // }}
                        className='flex flex-col gap-2 cursor-pointer hover:bg-[#FFF9F5] rounded-lg p-2'
                      >
                        <p className='font-hanken text-[#101828] font-medium text-base leading-6'>Videos</p>
                        <p className='text-[#667085] font-inter text-sm leading-5'>Designed to operate on a group (union) methodology.</p>
                      </div>

                   

                      <div className='flex items-center cursor-pointer gap-2 w-full'>
                        <p className='text-[#F99650] font-inter whitespace-nowrap text-base leading-6 font-medium'>View all</p>
                        <FaArrowRight className='text-[#F99650] w-4 h-4 mt-1' />
                      </div>

                    </div>

                    <div className='flex flex-col gap-6 w-[389px]'>
                      <p className='font-medium font-hanken text-[20px] leading-5 text-[#16181D]'>Press Release</p>

                      <div 
                        // onClick={() => {
                        //   navigate("/digital", {
                        //     state: {section: "app"}
                        //   })
                        // }}
                        className='flex flex-col gap-2 cursor-pointer hover:bg-[#FFF9F5] rounded-lg p-2'
                      >
                        <p className='font-hanken text-[#101828] font-medium text-base leading-6'>LAPO Mfb News</p>
                        <p className='text-[#667085] font-inter text-sm leading-5'>The latest industry news.</p>
                      </div>

                      <div 
                        // onClick={() => {
                        //   navigate("/digital/cards", {
                        //     state: {section: "cards"}
                        //   })
                        // }}
                        className='flex flex-col gap-2 cursor-pointer hover:bg-[#FFF9F5] rounded-lg p-2'
                      >
                        <p className='font-hanken text-[#101828] font-medium text-base leading-6'>Media Kits</p>
                        <p className='text-[#667085] font-inter text-sm leading-5'>Shop. Pay. Withdraw</p>
                      </div>

                      <div className='flex items-center cursor-pointer gap-2 w-full'>
                        <p className='text-[#F99650] font-inter whitespace-nowrap text-base leading-6 font-medium'>View all</p>
                        <FaArrowRight className='text-[#F99650] w-4 h-4 mt-1' />
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <p 
              className='font-nunito font-medium text-base hover:border-[4px] hover:border-x-0 hover:border-t-0 hover:border-[#EC994B] hover:text-[#00954B] hover:font-bold text-[#10281D] cursor-pointer'  
              onClick={() => {navigate("/contact-us"); 
              window.scrollTo(0, 0)}}
            >
              Contact Us
            </p>
        </div>
        <div className='flex items-center gap-[15px]'>
          <button
            className='bg-[#E78020] w-[115px] h-[40px] rounded-lg gap-2 group flex items-center justify-center'
            type='button'
            onClick={() => navigate("/careers")}
          >
            <p
              className='font-medium text-base font-nunito text-[#fff]'
            >
              Join LAPO
            </p>
          </button>

        </div>        
    </div>
  )
}

export default Header