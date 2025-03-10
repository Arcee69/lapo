import React, { useState, useEffect, useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Updated import
import 'swiper/css';
import 'swiper/css/pagination';
import { useTransform, motion, useScroll } from "motion/react";
import Lenis from "@studio-freight/lenis";


import HomeBg from "../../assets/png/home_bg.png"
import Girl from "../../assets/png/girl.png"
import CurveLeft from "../../assets/png/curve_left.png"
import CurveRight from "../../assets/png/curve_right.png"
import PhoneA from "../../assets/png/phone_a.png"
import Spiral from "../../assets/png/spiral.png"
import People from "../../assets/png/people.png"
import PhoneB from "../../assets/png/phone_b.png"
import Grandma from "../../assets/png/grandma.png"
import FirstBoy from "../../assets/png/first_boy.png"
import SecondBoy from "../../assets/png/second_boy.png"
import Card from "../../assets/png/card.png"
import PosMachine from "../../assets/png/pos_machine.png"
import POS from "../../assets/png/pos_machine_a.png"
import Nurse from "../../assets/png/nurse.png"
import BackScreen from "../../assets/png/back_screen.png"
import FrontScreen from "../../assets/png/front_screen.png"
import Happy from "../../assets/png/happy_girl.png"
import Model from "../../assets/png/model.png"

import Stars from "../../assets/svg/stars.svg"
import OneStar from "../../assets/svg/one_star.svg"
import Cube from "../../assets/svg/cube.svg"
import Box from "../../assets/svg/box.svg"
import CBN from "../../assets/svg/cbn.svg"
import NDIC from "../../assets/svg/ndic.svg"
import Google from "../../assets/svg/google.svg"
import Apple from "../../assets/svg/apple.svg"
import Lightning from "../../assets/svg/lightning_c.svg"
import LightningGreen from "../../assets/svg/lightning_green.svg"
import Tracking from "../../assets/svg/tracking.svg"
import TrackingGreen from "../../assets/svg/tracking_green.svg"
import Dollar from "../../assets/svg/dollar_a.svg"
import DollarGreen from "../../assets/svg/dollar_green.svg"
import Lock from "../../assets/svg/lock_b.svg"
import Multiple from "../../assets/svg/multiple.svg"
import Tablet from "../../assets/svg/tablet.svg"

import "./css/styles.css";
import "./css/card.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [activeTab, setActiveTab] = useState("savings")
  const cardsRef = useRef([]);

  const handleTabChange = (value) => {
    setActiveTab(value)
  }

  const navigate = useNavigate()

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }); 

  useEffect(() => {
    const cards = cardsRef.current;

    // Apply padding and scaling effects
    cards.forEach((card, index) => {
      const offsetTop = 20 + index * 20; // Adjust overlap amount
      card.style.paddingTop = `${offsetTop}px`;

      if (index === cards.length - 1) return;

      const toScale = 1 - (cards.length - 1 - index) * 0.1; // Scale down effect
      const nextCard = cards[index + 1];
      const cardInner = card.querySelector(".card__inner");

      const handleScroll = () => {
        const rect = nextCard.getBoundingClientRect();
        const percentageY = Math.max(
          0,
          Math.min(1, (window.innerHeight - rect.top) / window.innerHeight)
        );

        cardInner.style.transform = `scale(${valueAtPercentage({
          from: 1,
          to: toScale,
          percentage: percentageY,
        })})`;
        cardInner.style.filter = `brightness(${valueAtPercentage({
          from: 1,
          to: 0.6,
          percentage: percentageY,
        })})`;
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    });
  }, []);

  return (
    <div className='w-full '>

      <section 
        style={{
          backgroundImage: `url(${HomeBg})`,
          backgroundSize:"cover",
          backgroundRepeat: "no-repeat"
        }}
        className='h-[732px] bg-[#fff] flex flex-col items-start pl-[64px] pt-[213px]'
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        <div className='w-[688px] h-[406px] flex flex-col gap-5'>
          <div className='flex items-center justify-center gap-2 bg-[#E780201A] w-[204px] rounded-full h-[28px] p-2'>
            <img src={Stars} alt='Stars' className='w-[13px] h-[13px]' />
            <p className='font-hanken font-medium text-[#E78020] text-xs'>Empowering 6M+ Nigerians</p>
          </div>
          <p className='font-normal text-[60px] leading-[66px] text-[#0E3622] font-hanken'>
            Your Financial Partner <br /> for a Brighter Future
          </p>
          <p className='text-[20px] font-hanken text-[#34423B] w-[650px] leading-[30px]'>
            Empowering individuals, businesses, and communities with tailored financial solutions for over 30 years
          </p>
          <div className='flex items-center gap-5'>
            <button
              className='bg-[#E78020] flex flex-col items-center justify-center w-[180px] h-[56px] rounded-[10px]'
              onClick={() => navigate("/contact-us")}
            >
              <p className='font-hanken text-[#fff] text-base font-semibold'>Join  LAPO</p>
            </button>
            <button
              className='border-[#E78020] border flex flex-col items-center justify-center w-[180px] h-[56px] rounded-[10px]'
            >
              <p className='font-hanken text-[#E78020] text-base font-semibold'>Learn More</p>
            </button>
          </div>
          <div className='flex items-center gap-2 mt-3'>
            <p className='text-xs font-nunito text-[#34423B] font-medium'>Licensed by </p>
            <img src={CBN} alt='cbn_logo' className='w-[22px] h-[28px]' />
            <p className='text-xs font-nunito text-[#34423B] font-medium'> insured by </p>
            <img src={NDIC} alt='ndic_logo' className='w-[70px] h-[28px]' />
          </div>
        </div>
      </section>

      <section
        className='w-full mt-[39px] flex flex-col items-center pt-[44px] pb-[86px] px-[31.99px] gap-[97px]'
        data-aos="fade-up" 
        data-aos-duration="1000"
        data-aos-easing="linear"
      >
        <div className='flex flex-col items-center justify-center gap-5'>
          <div className='flex items-center gap-2 bg-[#E780201A] w-[89px] rounded-full h-[32px] p-2'>
            <p className='font-hanken font-medium text-[#E78020] whitespace-nowrap text-xs'>Our Solutions</p>
          </div>
          <p className='w-[806px] flex items-center text-[#011624] text-center font-hanken text-[54px] font-medium leading-[54px]'> 
            Discover Our Comprehensive Financial Services
          </p>
        </div>

        <div className='flex flex-col gap-[64px]'>
          <div className='flex items-center justify-between w-[1146px]'>
            <div className='flex items-center gap-4'>
              <div 
                onClick={() => handleTabChange("savings")}
                className={`${activeTab === "savings" ? "bg-[#00954B] border-[#34423B]" : "border-[#E2E2E2]"} cursor-pointer w-[143px] h-[48px] group hover:bg-[#00954B] flex flex-col rounded-[15px] border items-center justify-center`}
              >
                <p 
                  className={`${activeTab === "savings" ? "text-[#FFFFFF]" : "text-[#011624] "}  font-semibold font-hanken group-hover:text-[#fff] text-base`}
                >
                  Savings
                </p>
              </div>
              <div 
                onClick={() => handleTabChange("pos")}
                className={`${activeTab === "pos" ? "bg-[#00954B] border-[#34423B]" : "border-[#E2E2E2]"} cursor-pointer  w-[143px] h-[48px] group hover:bg-[#00954B] flex flex-col rounded-[15px] border items-center justify-center`}
              >
                <p 
                  className={`${activeTab === "pos" ? "text-[#FFFFFF]" : "text-[#011624] "}  font-semibold font-hanken group-hover:text-[#fff] text-base`}
                >
                  POS
                </p>
              </div>
              <div 
                onClick={() => handleTabChange("digital banking")}
                className={`${activeTab === "digital banking" ? "bg-[#00954B] border-[#34423B]" : "border-[#E2E2E2]"}  w-[143px] h-[48px] cursor-pointer group hover:bg-[#00954B] flex flex-col rounded-[15px] border items-center justify-center`}
              >
                <p 
                  className={`${activeTab === "digital banking" ? "text-[#FFFFFF]" : "text-[#011624] "}  font-semibold font-hanken group-hover:text-[#fff] text-base`}
                >
                  Digital Banking
                </p>
              </div>
              <div 
                onClick={() => handleTabChange("loans")}
                className={`${activeTab === "loans" ? "bg-[#00954B] border-[#34423B]" : "border-[#E2E2E2]"}  w-[143px] h-[48px] cursor-pointer group hover:bg-[#00954B] flex flex-col rounded-[15px] border items-center justify-center`}
              >
                <p 
                  className={`${activeTab === "loans" ? "text-[#FFFFFF]" : "text-[#011624] "}  font-semibold font-hanken group-hover:text-[#fff] text-base`}
                >
                  Loans
                </p>
              </div>
            </div>

            <div className='flex items-center hidden gap-4'>
              <div className='rounded-full flex items-center cursor-pointer justify-center p-3 w-[47.98px] h-[47.98px] border border-[#E2E2E2]'>
                <FaArrowLeft className='w-5 h-5 text-[#011624]' />
              </div>
              <div className='rounded-full flex items-center cursor-pointer justify-center p-3 w-[47.98px] h-[47.98px] border border-[#E2E2E2]'>
                <FaArrowRight className='w-5 h-5 text-[#011624]' />
              </div>

            </div>

          </div>

           {/* Content Section */}
        <div className="w-[1146px] h-[500px] relative overflow-hidden flex gap-0 transition-all duration-500">
          {/* Savings */}
          {activeTab === "savings" ? (
            <div className="w-auto h-full flex gap-[32px] cursor-pointer justify-start" onClick={() => handleTabChange("savings")}>
              <div className='w-[85px] bg-[#00954B] rounded-tl-2xl pt-[47px] rounded-bl-2xl flex flex-col gap-[180px] items-center'>
                <p className='font-inter text-[#fff] text-xs'>01</p>
                <p className='font-semibold font-hanken text-[#fff] text-[20px] [writing-mode:vertical-rl] rotate-180'>Savings</p>
              </div>
              <div className='flex gap-1 items-center'>
                <div className='flex flex-col'>
                  <h2 className="font-hanken text-[32px] text-[#101828] font-semibold">7 Ways to Grow Your Savings</h2>
                  <div className='flex flex-col'>
                    <div className='border border-t-0 border-x-0 border-b-[#34423B4D] p-4 w-[398px] flex flex-col gap-1.5'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <img src={OneStar} alt='OneStar' className='w-6 h-6' />
                          <p className='font-nunito text-[18px] font-semibold'>High-Interest Returns</p>
                        </div>
                        <IoIosArrowDown className='w-5 h-5 text-[#34423B]' />
                      </div>
                    </div>
                    <div className='border border-t-0 border-x-0 border-b-[#34423B4D] p-4 w-[398px] flex flex-col gap-1.5'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <img src={Cube} alt='Cube' className='w-6 h-6' />
                          <p className='font-nunito text-[18px] font-semibold'>Flexible Savings Plans</p>
                        </div>
                        <IoIosArrowDown className='w-5 h-5 text-[#34423B]' />
                      </div>
                    </div>
                    <div className='border border-t-0 border-x-0 border-b-[#34423B4D] p-4 w-[398px] flex flex-col gap-1.5'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <img src={Box} alt='Box' className='w-6 h-6' />
                          <p className='font-nunito text-[18px] font-semibold'>Automatic Saving</p>
                        </div>
                        <IoIosArrowDown className='w-5 h-5 text-[#34423B]' />
                      </div>
                    </div>
                  </div>
                  <button 
                    className="mt-[54px] px-6 w-[180px] flex gap-6 items-center py-2 bg-black text-white rounded"
                    onClick={() => {navigate("/savings/regular"); window.scrollTo(0, 0)}}
                  >
                    <p className='font-medium text-base font-nunito'>Get Started</p> 
                    <p className='font-medium text-base font-nunito'>→</p>
                  </button>
                </div>
                <div className='w-[320px]'>
                  <img src={Girl} alt='Girl' className='w-[320px]' />
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex gap-[32px] cursor-pointer" onClick={() => handleTabChange("savings")}>
              <div className='w-[85px] bg-[#00954B] rounded-tl-2xl pt-[47px] rounded-bl-2xl flex flex-col gap-[180px] items-center'>
                <p className='font-inter text-[#fff] text-xs'>01</p>
                <p className='font-semibold font-hanken text-[#fff] text-[20px] [writing-mode:vertical-rl] rotate-180'>Savings</p>
              </div>
            </div>
          )}

          {/* POS */}
          {activeTab === "pos" ? (
            <div className="w-auto h-full flex gap-[32px] cursor-pointer justify-start" onClick={() => handleTabChange("pos")}>
               <div className='w-[85px] bg-[#E78020] pt-[47px] flex flex-col gap-[180px] items-center'>
                 <p className='font-inter text-[#fff] text-xs'>02</p>
                 <p className='font-semibold font-hanken text-[#fff] text-[20px] [writing-mode:vertical-rl] rotate-180'>POS</p>
               </div>
               <div className='flex gap-1 items-center'>
                 <div className='flex flex-col'>
                   <h2 className="font-hanken text-[32px] text-[#101828] font-semibold">Payment Solution to fuel your growth</h2>
                   <div className='flex flex-col'>
                     <div className='border border-t-0 border-x-0 border-b-[#34423B4D] p-4 w-[398px] flex flex-col gap-1.5'>
                       <div className='flex items-center justify-between'>
                         <div className='flex items-center gap-2'>
                           <img src={Lightning} alt='Lightning' className='w-6 h-6' />
                           <p className='font-nunito text-[18px] font-semibold'>Modern, User-Friendly POS Terminals</p>
                         </div>
                       </div>
                     </div>
                     <div className='border border-t-0 border-x-0 border-b-[#34423B4D] p-4 w-[398px] flex flex-col gap-1.5'>
                       <div className='flex items-center justify-between'>
                         <div className='flex items-center gap-2'>
                           <img src={Dollar} alt='Dollar' className='w-6 h-6' />
                           <p className='font-nunito text-[18px] font-semibold'>No Hidden Charges</p>
                         </div>
                       </div>
                     </div>
                     <div className='border border-t-0 border-x-0 border-b-[#34423B4D] p-4 w-[398px] flex flex-col gap-1.5'>
                       <div className='flex items-center justify-between'>
                         <div className='flex items-center gap-2'>
                           <img src={Tracking} alt='Tracking' className='w-6 h-6' />
                           <p className='font-nunito text-[18px] font-semibold'>Real-Time Sales Tracking & Reporting</p>
                         </div>
                       </div>
                     </div>
                   </div>
                   <button 
                     className="mt-[54px] px-6 w-[180px] flex gap-6 items-center py-2 bg-black text-white rounded"
                     onClick={() => {navigate("/pos"); window.scrollTo(0, 0)}}
                   >
                     <p className='font-medium text-base font-nunito'>Learn More</p> 
                     <p className='font-medium text-base font-nunito'>→</p>
                   </button>
                 </div>
                 <div className='w-[380px] h-full'>
                   <img src={POS} alt='POS' className='w-[434px] rounded-tl-[18px] rounded-bl-[18px] h-full' />
                 </div>
               </div>
            </div> 
          ) : (
            <div className="h-full flex cursor-pointer gap-[32px]" onClick={() => handleTabChange("pos")}>
              <div className='w-[85px] bg-[#E78020] pt-[47px] flex flex-col gap-[180px] items-center'>
                <p className='font-inter text-[#fff] text-xs'>02</p>
                <p className='font-semibold font-hanken text-[#fff] text-[20px] [writing-mode:vertical-rl] rotate-180'>POS</p>
              </div>
            </div>
          ) 
          
          }

          {/* Digital Banking */}
          {activeTab === "digital banking" ? (
            <div className="w-auto h-full flex cursor-pointer gap-[32px] justify-start" onClick={() => handleTabChange("digital banking")}>
              <div className='w-[85px] bg-[#012413] pt-[47px] flex flex-col gap-[180px] items-center'>
                <p className='font-inter text-[#fff] text-xs'>03</p>
                <p className='font-semibold font-hanken text-[#fff] text-[20px] [writing-mode:vertical-rl] rotate-180'>Digital Banking</p>
              </div>
              <div className='flex gap-1 items-center'>
                <div className='flex flex-col'>
                  <h2 className="font-hanken text-[32px] text-[#101828] font-semibold">Payment Solution to fuel your growth</h2>
                  <div className='flex flex-col'>
                    <div className='border border-t-0 border-x-0 border-b-[#34423B4D] p-4 w-[398px] flex flex-col gap-1.5'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <img src={Lock} alt='Lock' className='w-6 h-6' />
                          <p className='font-nunito text-[18px] font-semibold'>Secure Transactions</p>
                        </div>
                      </div>
                    </div>
                    <div className='border border-t-0 border-x-0 border-b-[#34423B4D] p-4 w-[398px] flex flex-col gap-1.5'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <img src={Multiple} alt='Multiple' className='w-6 h-6' />
                          <p className='font-nunito text-[18px] font-semibold'>Multiple Payment Options</p>
                        </div>
                      </div>
                    </div>
                    <div className='border border-t-0 border-x-0 border-b-[#34423B4D] p-4 w-[398px] flex flex-col gap-1.5'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <img src={Tablet} alt='Tablet' className='w-6 h-6' />
                          <p className='font-nunito text-[18px] font-semibold'>User-Friendly Interface</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button 
                    className="mt-[54px] px-6 w-[180px] flex gap-6 items-center py-2 bg-black text-white rounded"
                    onClick={() => {navigate("/digital"); window.screenTo(0, 0)}}
                  >
                    <p className='font-medium text-base font-nunito'>Learn More</p> 
                    <p className='font-medium text-base font-nunito'>→</p>
                  </button>
                </div>
                <div className='w-[346px] h-full'>
                  <img src={Happy} alt='Happy' className='w-[346px] h-full' />
                </div>
              </div>
            </div> 
          ) : (
            <div className="h-full flex gap-[32px] cursor-pointer" onClick={() => handleTabChange("digital banking")}>
              <div className='w-[85px] bg-[#012413] pt-[47px] flex flex-col gap-[180px] items-center'>
                <p className='font-inter text-[#fff] text-xs'>03</p>
                <p className='font-semibold font-hanken text-[#fff] text-[20px] [writing-mode:vertical-rl] rotate-180'>Digital Banking</p>
              </div>
            </div>
          )}

          {/* Loans */}
          {activeTab === "loans" ? (
            <div className="w-auto h-full flex gap-[32px] justify-start cursor-pointer" onClick={() => handleTabChange("loans")}>
              <div className='w-[85px] bg-[#34423B] pt-[47px] flex flex-col gap-[180px] items-center'>
                <p className='font-inter text-[#fff] text-xs'>04</p>
                <p className='font-semibold font-hanken text-[#fff] text-[20px] [writing-mode:vertical-rl] rotate-180'>Loans</p>
              </div>
              <div className='flex gap-1 items-center'>
                <div className='flex flex-col'>
                  <h2 className="font-hanken text-[32px] text-[#101828] font-semibold">Uninterrupted Funds Supply</h2>
                  <div className='flex flex-col'>
                    <div className='border border-t-0 border-x-0 border-b-[#34423B4D] p-4 w-[398px] flex flex-col gap-1.5'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <img src={LightningGreen} alt='LightningGreen' className='w-6 h-6' />
                          <p className='font-nunito text-[18px] font-semibold'>Quick Approval</p>
                        </div>
                      </div>
                    </div>
                    <div className='border border-t-0 border-x-0 border-b-[#34423B4D] p-4 w-[398px] flex flex-col gap-1.5'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <img src={DollarGreen} alt='DollarGreen' className='w-6 h-6' />
                          <p className='font-nunito text-[18px] font-semibold'>Flexible Terms</p>
                        </div>
                      </div>
                    </div>
                    <div className='border border-t-0 border-x-0 border-b-[#34423B4D] p-4 w-[398px] flex flex-col gap-1.5'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <img src={TrackingGreen} alt='TrackingGreen' className='w-6 h-6' />
                          <p className='font-nunito text-[18px] font-semibold'>No Hidden Charges</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button 
                    className="mt-[54px] px-6 w-[180px] flex gap-6 items-center py-2 bg-black text-white rounded"
                    onClick={() => {navigate("/loans/regular"); window.scrollTo(0, 0)}}
                  >
                    <p className='font-medium text-base font-nunito'>Get Started</p> 
                    <p className='font-medium text-base font-nunito'>→</p>
                  </button>
                </div>
                <div className='w-[346px] h-full'>
                  <img src={Model} alt='Model' className='w-[346px]' />
                </div>
              </div>
            </div> 
          ) : (
            <div className="h-full flex gap-[32px]" onClick={() => handleTabChange("loans")}>
              <div className='w-[85px] bg-[#34423B] pt-[47px] cursor-pointer flex flex-col rounded-tr-2xl rounded-br-2xl gap-[180px] items-center'>
                <p className='font-inter text-[#fff] text-xs'>03</p>
                <p className='font-semibold font-hanken text-[#fff] text-[20px] [writing-mode:vertical-rl] rotate-180'>Loans</p>
              </div>
            </div>
          )}
        </div>
        </div>

      </section>

      <section 
        className='w-full mt-[59px] flex flex-col gap-[64px] px-[97px] py-[59px]'
        data-aos="fade-up" 
        data-aos-duration="1000"
        data-aos-easing="linear"
      >
        <div className='flex flex-col items-center gap-2 w-[636px] mx-auto'>
          <div className='w-[128px] h-[32px] flex items-center justify-center rounded-md bg-[#E8FFF4]'>
            <p className='font-hanken text-xs text-[#00954B] font-medium'>The Lapo advantage</p>
          </div>
          <p className='font-hanken text-[54px] font-medium leading-[64px] text-center'>
            Unlock Your Financial Potential
          </p>
        </div>

        <div className='flex flex-col gap-[19px]'>
          <div  ref={container}  className='w-full  h-[478px] relative flex justify-between rounded-tl-xl shadow-lg pl-[48px] border border-[#fcfcfc] items-center '>
            <div className='absolute left-0 top-0'>
              <img src={CurveLeft} alt='CurveLeft' className='rounded-tl-xl ' />
            </div>
            <div className='flex flex-col gap-[63px] w-[683px]'>
              <p className='font-semibold font-inter text-[#121212] text-[20px] '>Business on the go</p>
              <div className='flex flex-col gap-[37px]'>
                <p className='font-inter font-semibold text-[48px] leading-[57px] '>
                  <span className='text-[#F2761B]'>Zero wait time. </span> 
                   Instant Access: 
                </p>
                <p className='font-inter font-medium text-[20px] leading-[34px]'>
                  Open your personal or business account in minutes and take control of your finances—fast, 
                  secure, and hassle-free.
                </p>
              </div>
            </div>
            <div className='flex absolute bottom-20 right-0'>
              <img src={PhoneA} alt='PhoneA' className='absolute right-10 z-10 -top-28 w-[352px] ' />
              <img src={Spiral} alt='Spiral' className='w-[397px] relative -bottom-14 ' />

            </div>
          </div>

          <div className='w-full h-[512px] flex'  ref={container} >
            <div className='bg-[#012412] w-6/12 rounded-tl-lg rounded-bl-lg flex flex-col p-[48px] gap-[63px]'>
              <p className='font-inter font-semibold text-[#1AFF8C] text-[20px]'>
                The First and the Best to ever do it
              </p>
              <div className='flex flex-col gap-5'>
                <p className='font-hanken font-semibold text-[48px] leading-[57px]'>
                  <span className='text-[#F2761B]'>30+ </span>
                  <span className='text-[#fff]'>years of empowering Nigerians.</span> 
                </p>
                <p className='text-[#6A6A6A] font-inter font-medium text-[20px]'>
                  For over three decades, LAPO Microfinance Bank has empowered communities through financial inclusion.
                </p>
              </div>
            </div>

            <div className='w-6/12 '>
              <img src={People} alt='People' className='w-full h-[512px] rounded-tr-lg rounded-br-lg'/>
            </div>
          </div>

          <div className='w-full h-[478px] relative flex justify-between rounded-tl-xl shadow-lg pl-[48px] border border-[#fcfcfc] items-center '>
            <div className='flex flex-col gap-[63px] w-[683px]'>
              <p className='font-semibold font-inter text-[#121212] text-[20px] '>Uninterrupted Funds Supply</p>
              <div className='flex flex-col gap-[37px]'>
                <p className='font-inter font-semibold text-[48px] text-[#121212] leading-[57px] '>
                  <span className='text-[#00954B]'>Flexible Loan </span> 
                  options for you and your business.
                </p>
                <p className='font-inter font-medium text-[20px] text-[#6A6A6A] leading-[34px]'>
                  Enjoy Loan Products that meets all your life goals from your personal to 
                  business to education and property.
                </p>
              </div>
            </div>
            <div className='flex absolute bottom-20 right-0'>
              <img src={PhoneB} alt='PhoneB' className='absolute right-10 z-10 -top-28 w-[352px] ' />
              <img src={Spiral} alt='Spiral' className='w-[397px] relative -bottom-14 ' />
            </div>
            <div className='absolute bottom-0 right-0'>
              <img src={CurveRight} alt='CurveRight' className='rounded-br-xl ' />
            </div>
          </div>

          <div className='flex items-center gap-[18px]'>
            <div className='w-6/12 h-[571px] shadow-lg flex flex-col relative items-center justify-center rounded-lg gap-[32px]'>
              <div className='absolute left-0 top-0'>
                <img src={CurveLeft} alt='CurveLeft' className='rounded-tl-xl ' />
              </div>
              <div className='flex items-center relative'>
                <img src={Grandma} alt='Grandma' className='w-[120px] absolute -top-10 -left-24 h-[120px] rounded-xl' /> 
                <img src={FirstBoy} alt='FirstBoy' className='w-[120px] h-[120px] absolute -top-5 z-10 rounded-xl' /> 
                <img src={SecondBoy} alt='SecondBoy' className='w-[120px] h-[120px] relative -right-24 -top-16 rounded-xl' /> 
              </div>
              <div className='flex flex-col gap-[28px]'>
                  <p className='font-hanken font-medium text-[#121212] text-[32px] leading-[44px]'>USSD Payement Options</p>
                  <ul className='font-hanken text-[20px] leading-[34px] pl-8 list-disc text-[#6A6A6A]'>
                    <li>Transfer</li>
                    <li>Bills Payment</li>
                    <li>Balance Enquiry</li>  
                    <li>Airtime, Data Purchase and More!</li>
                  </ul>
              </div>
            </div>

            <div className='w-6/12 h-[571px] shadow-lg px-[48px] flex flex-col relative items-center py-[28px] rounded-lg gap-[28px]'>
              <div>
                <img src={Card} alt='Card' className='w-[374px] h-[240px]' />
              </div>
              <div className='flex flex-col gap-[28px]'>
                <p className='font-hanken font-medium text-[32px] '><span className='text-[#121212]'>Shop.</span> <span className='text-[#00954B]'>Pay.</span> <span className='text-[#E78020]'>Withdraw</span></p>
                <p className='font-hanken text-[#6A6A6A] text-[20px]'>
                  Access your funds anytime, anywhere: Say goodbye to the limitations of cash and long queues at 
                  the Bank. With a LAPO Debit Card, your money is always at your fingertips.
                </p>
              </div>
              <div className='absolute bottom-0 right-0'>
                <img src={CurveRight} alt='CurveRight' className='rounded-br-xl ' />
              </div>
            </div>

          </div>

          <div className='w-full h-[478px] relative flex justify-between overflow-hidden rounded-xl shadow-lg pl-[48px] bg-[#012412] items-center '>
              <div className='absolute left-0 top-0'>
                <img src={CurveLeft} alt='CurveLeft' className='rounded-tl-xl ' />
              </div>
              <div className='flex flex-col gap-[63px] w-[683px]'>
                <p className='font-semibold font-inter text-[#fff] text-[20px] '>Ready to level up?</p>
                <div className='flex flex-col gap-[37px]'>
                  <p className='font-hanken font-semibold text-[#fff] text-[28px] leading-[37px]'>
                    Start accepting payments today Powering your business with speed,
                    <span className='text-[#1AFF8C]'> Security, </span> 
                    and <span className='text-[#F99650]'> Reliability </span>
                  
                  </p>
                  <ul className='font-hanken pl-5 list-disc text-[18px] text-[#E2E2E2] leading-[34px]'>
                    <li>
                      Lightning-Fast Transactions  – Get paid instantly, every time.
                    </li> 
                    <li>Affordable & Transparent – No hidden fees, just great rates.</li>  
                    <li>Universal Payment Acceptance – All cards, mobile transfers, no limits.</li>  
                    <li>24/7 Support & Seamless Integration – Always on, always connected.</li>  
                   
                  </ul>
                </div>
              </div>
              <div className='w-[485px]'>
                <img src={PosMachine} alt='PosMachine' className='h-[481px]' />
              </div>
              {/* <div className='flex absolute bottom-20 right-0'>
              </div> */}
          </div>

        </div>

      </section>

      <section 
        className='bg-[#0E362205] h-auto flex flex-col pt-[59px] gap-[59px] items-center justify-center'
        data-aos="fade-up" 
        data-aos-duration="1000"
        data-aos-easing="linear"
      >
        <div className='flex flex-col items-center gap-[8px]'>
            <div className='bg-[#FDF2E9] w-[105px] flex items-center justify-center p-1 rounded-lg'>
              <p className='text-[#E78020] font-hanken text-xs'>Word of mouth</p>
            </div>
            <p className='font-hanken text-[40px] leading-[56px] text-[#000000]'>Our Impact Stories</p>
        </div>
        <div className='w-full flex flex-col gap-[32px]'>
          <div className='w-full'>
            <Swiper
              modules={[Autoplay]} 
              spaceBetween={32} // Space between slides
              slidesPerView={'3'} // Automatically adjust to fit the number of cards
              grabCursor={true}
              autoplay={{
                  delay: 3000, // Slide transition delay in milliseconds
                  disableOnInteraction: false, // Continue autoplay after interaction
                  }}
              loop={true} // Enables infinite looping of slides
              // style={{
              //     display: isMobile ? "none" : "block" 
              // }}
            >
                                              {/* Individual Card */}
              <SwiperSlide>
                <iframe 
                  width="450" 
                  height="300" 
                  src="https://www.youtube.com/embed/X8zt2HeyfWU?si=x3kx-nZT7rksqvHj" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" 
                  allowfullscreen></iframe>
              </SwiperSlide>

              <SwiperSlide>
                <iframe 
                  width="450" 
                  height="300" 
                  src="https://res.cloudinary.com/dairsbzlv/video/upload/v1740324812/3045a841-cd2e-4f58-a3c0-6f54b0d0bf17_prgzj3.mp4" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" 
                  allowfullscreen></iframe>
              </SwiperSlide>

              <SwiperSlide>
                <iframe 
                  width="450" 
                  height="300" 
                  src="https://res.cloudinary.com/dairsbzlv/video/upload/v1740325190/Testimonial_3_bdcxcn.mp4" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" 
                  allowfullscreen></iframe>
              </SwiperSlide>
              
              <SwiperSlide>
                <iframe 
                  width="450" 
                  height="300" 
                  src="https://res.cloudinary.com/dairsbzlv/video/upload/v1740325370/6421573a-07d3-4e4c-9927-8045526d4d20_nvpdmc.mp4" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" 
                  allowfullscreen></iframe>
               
              </SwiperSlide>

              <SwiperSlide>
                <iframe 
                  width="450" 
                  height="300" 
                  src="https://res.cloudinary.com/dairsbzlv/video/upload/v1740325569/c6233548-0776-42e9-a5a7-20d9732767f5_kz3gxo.mp4" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" 
                  allowfullscreen></iframe>
               
              </SwiperSlide>
            
            </Swiper>
          </div>
          
        </div>
      </section>

      <section
        className='w-full px-[80px] py-[96px] h-[512px] overflow-hidden'
        data-aos="fade-up" 
        data-aos-duration="1000"
        data-aos-easing="linear"
      >
        <div
          className='flex items-center justify-center gap-[64px]'
        >
          <div className='w-[576px] flex flex-col gap-6'>
            <p className='font-medium font-hanken text-[48px] leading-[60px]'>
              Bank On the Go – Anytime, Anywhere!
            </p>
            <p className='text-[#667085] text-[20px] font-nunito leading-[30px] w-[480px]'>
              Download LAPO's mobile app for seamless banking, savings, 
              and loans—all at your fingertips.
            </p>
            <div className='flex items-center gap-4'>
              <img src={Apple} alt='Apple' className='w-[120px] cursor-pointer h-[40px]' onClick={() => window.open("https://apps.apple.com/ng/app/lapo-mobile-app/id6448030325", "_blank")} />
              <img src={Google} alt='Google' className='w-[120px] cursor-pointer h-[40px]' onClick={() => window.open("https://play.google.com/store/apps/details?id=com.digicore.lapo", "_blank")}/>
            </div>
          </div>
          <div className='bg-[#F3F5F4] w-[576px] relative overflow-hidden flex items-center rounded-tl-[30px] rounded-tr-[30px]'>
            <div className='w-[274px] relative left-10 -bottom-20'>
              <img src={BackScreen} alt='BackScreen' className='' />
            </div>
            <div className='w-[281px] relative right-4 -bottom-10 z-10'>
              <img src={FrontScreen} alt='FrontScreen' className=''  />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home