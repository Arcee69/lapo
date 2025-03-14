import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import Left from "../../assets/svg/left_brick.svg"
import Right from "../../assets/svg/right_brick.svg"
import Stars from "../../assets/svg/stars.svg"

import Google from "../../assets/svg/google.svg"
import Apple from "../../assets/svg/apple.svg"

import BackScreen from "../../assets/png/back_screen.png"
import FrontScreen from "../../assets/png/front_screen.png"

const Media = () => {

  const cards = [
    { title: "Events", description: "Photos and Videos of events at LAPO MfB", image: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741213198/guest_skyeo3.png" },
    { title: "Trainings", description: "Educational session helping staffs upskill", image: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741213198/guest_skyeo3.png" },
    { title: "Work Life Balance", description: "Photos and Videos of events at LAPO MfB", image: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741213198/guest_skyeo3.png" },
    { title: "Others", description: "Photos and Videos of events at LAPO MfB", image: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741213198/guest_skyeo3.png" },
    { title: "Sustainability", description: "Photos and Videos of events at LAPO MfB", image: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741213198/guest_skyeo3.png" },
  ];

  return (
    <div className='w-full'>
      <section
        className='bg-[#00984C] h-[27.83rem] pt-[100px] relative overflow-hidden'
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        <div className='hidden lg:flex items-center justify-between absolute top-44 z-10 -inset-x-4'>
            <img src={Left} alt='Left' className='' />
            <img src={Right} alt='Right' className='' />
        </div>
      
        <div className='flex flex-col items-center pt-[45px] pb-[80px]'>
            <div className='flex flex-col items-center gap-4 lg:w-[688px] mx-auto'>
                <div className='w-[211px] h-[28px] rounded-[6px] gap-1 flex items-center justify-center bg-[#FDF2E9]'>
                    <img src={Stars} alt='Stars' className='w-[13px] h-[13px]' />
                    <p className='text-xs font-hanken text-[#E78020]'>Empowering 6M+ Nigerians</p>
                </div>
                <div className='flex flex-col gap-6'>
                    <p className='font-hanken capitalize text-[32px] leading-[32px] lg:text-[56px] text-center font-medium text-[#FFFFFF] lg:leading-[56px]'>
                        A picture is worth more
                    </p>
                    <p className='font-hanken text-base lg:text-[20px] leading-[30px] text-[#FFFFFF] text-center'>
                        Explore our galleries to see pictures of past seminars, trainings, meetings and other events
                    </p>
                </div>
                <div className='hidden lg:flex items-center gap-[17px]'>
                    <button
                        className='w-[180px] h-[56px] flex items-center justify-center bg-[#fff] rounded-lg'
                    >
                        <p className='text-[#F99650] font-medium text-base leading-7'>Get Started</p>
                    </button>
                    <button
                        className='w-[182px] h-[54px] border-[#FFFFFF] border flex items-center justify-center rounded-lg'
                    >
                        <p className='text-[#FFFFFF] font-medium text-base leading-7'>Learn More</p>
                    </button>
                </div>
            </div>
        </div>
      </section>

      <section 
        className="px-[112px] py-[96px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        {cards.map((card, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 rounded-lg flex flex-col justify-center items-center cursor-pointer text-white p-4 ">
              <h3 className="text-[24px] lg:text-[30px] font-inter font-semibold">{card.title}</h3>
              <p className="text-base leading-6 font-inter mt-2 text-center">{card.description}</p>
            </div>
          </div>
        ))}
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

export default Media