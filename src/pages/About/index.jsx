import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Updated import
import 'swiper/css';
import 'swiper/css/pagination';

import Left from "../../assets/svg/left_about_spiral.svg"
import Right from "../../assets/svg/right_about_spiral.svg"
import Story from './components/Story'
import Changemakers from './components/Changemakers'
import Governance from './components/Governance'
import Awards from './components/Awards'


const About = () => {
  const [activeTab, setActiveTab] = useState(1)

  const changeActiveTab = (value) => {
    setActiveTab(value)
  }
  
  return (
    <div className='w-full'>

          {/* Hero */}
      <section
        className="w-full bg-[#00984C] h-[700px] lg:h-[800px] overflow-x-hidden overflow-y-hidden relative"
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        <div className='flex items-center justify-between absolute bottom-0 -z-10 -inset-x-10'>
          <img src={Left} alt='Left' className='' />
          <img src={Right} alt='Right' className='' />
        </div>

        <div className='flex flex-col items-center gap-[48px]  pt-[132px]'>
            <div className='flex flex-col items-center gap-4 lg:w-[768px] mx-auto'>
              <div className='w-[71px] h-[32px] rounded-[6px] flex items-center justify-center bg-[#FDF2E9]'>
                <p className='bg-[#FDF2E9] text-xs text-[#E78020]'>About us</p>
              </div>
              <div className='flex flex-col gap-6'>
                <p className='font-hanken text-[32px] lg:text-[54px] text-center font-medium text-[#FFFFFF] leading-[120%] lg:leading-[64px]'>Transforming Financial Futures</p>
                <p className='font-inter text-base leading-[150%] lg:text-[18px] lg:leading-[27px] text-[#FFFFFF] text-center'>
                  LAPO Microfinance Bank has been empowering communities through 
                  financial inclusion since its inception in 1987.
                </p>
              </div>
            </div>

            <div className='w-full px-4 md:px-0 pb-5 lg:pb-0 z-20 overflow-x-auto scrollbar-hide'>
              <div className='flex items-center md:justify-center  gap-4 w-max md:w-full'>
                {/* Tab items with flex-shrink-0 */}
                <div onClick={() => changeActiveTab(1)} className={`${activeTab === 1 ? "bg-[#00B259]" : "bg-[#007A3D]"} flex-shrink-0 w-auto lg:w-[168px] h-[48px] flex items-center justify-center rounded-lg p-2 cursor-pointer`}>
                  <p className='text-white whitespace-nowrap font-inter leading-6 text-base'>The LAPO story</p>
                </div>
                <div onClick={() => changeActiveTab(2)} className={`${activeTab === 2 ? "bg-[#00B259]" : "bg-[#007A3D]"} flex-shrink-0 w-auto lg:w-[221px] h-[48px] flex items-center justify-center rounded-lg p-2 cursor-pointer`}>
                  <p className='text-white whitespace-nowrap font-inter leading-6 text-base'>Board and Excos</p>
                </div>
                <div onClick={() => changeActiveTab(3)} className={`${activeTab === 3 ? "bg-[#00B259]" : "bg-[#007A3D]"} flex-shrink-0 w-auto lg:w-[221px] h-[48px] flex items-center justify-center rounded-lg p-2 cursor-pointer`}>
                  <p className='text-white whitespace-nowrap font-inter leading-6 text-base'>Corporate Governance</p>
                </div>
                <div onClick={() => changeActiveTab(4)} className={`${activeTab === 4 ? "bg-[#00B259]" : "bg-[#007A3D]"} flex-shrink-0 w-auto lg:w-[104px] h-[48px] flex items-center justify-center rounded-lg p-2 cursor-pointer`}>
                  <p className='text-white font-inter leading-6 text-base'>Awards</p>
                </div>
              </div>
            </div>

        </div>

        <div className='w-full flex flex-col mt-[50px] md:mt-[100px]   items-center gap-[32px]'>
          <div className='w-full'>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={32}
              grabCursor={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {[
                "https://res.cloudinary.com/dairsbzlv/image/upload/v1744807111/food_ecjkvc.png",
                "https://res.cloudinary.com/dairsbzlv/image/upload/v1744807105/fashion_cgcnxo.png",
                "https://res.cloudinary.com/dairsbzlv/image/upload/v1744807110/livestock_qcwero.png",
                "https://res.cloudinary.com/dairsbzlv/image/upload/v1744807111/food_ecjkvc.png",
                "https://res.cloudinary.com/dairsbzlv/image/upload/v1744807105/fashion_cgcnxo.png",
                "https://res.cloudinary.com/dairsbzlv/image/upload/v1744807110/livestock_qcwero.png",
              ].map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item} alt='people' className='mx-2.5 md:mx-0 w-[95%] md:w-full' />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* <div className='flex items-center justify-center  absolute bottom-0 inset-x-20 gap-[21px] '> 
          <img src={AboutA} alt='AboutA' className='w-[10.4rem] h-[120.06px] md:w-4/12 lg:w-auto lg:h-[213px] z-20' />
          <img src={AboutB} alt='AboutB' className='w-[10.4rem] h-[120.06px] md:w-4/12 lg:w-auto lg:h-[213px] z-20' />
          <img src={AboutC} alt='AboutC' className='w-[10.4rem] h-[120.06px] md:w-4/12 lg:w-auto lg:h-[213px] z-20' />
        </div> */}

      </section>

      <>
        {activeTab === 1 && <Story />}
        {activeTab === 2 && <Changemakers />}
        {activeTab === 3 && <Governance />}
        {activeTab === 4 && <Awards />}
      </>
      

    </div>
  )
}

export default About