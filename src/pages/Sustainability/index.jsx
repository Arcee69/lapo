import React, { useState } from 'react'

import SusBg from "../../assets/png/sus_bg.png"

import Stars from "../../assets/svg/stars.svg"

import Overview from './components/Overview'
import Social from './components/Social'
import EnvironmentalDimension from './components/EnvironmentalDimension'
import Principles from './components/Principles'
import Sdg from './components/Sdg'
import Badges from './components/Badges'

const Sustainability = () => {
  const [activeTab, setActiveTab] = useState("overview")

  const handleChangeTab = (value) => {
    setActiveTab(value)
  }

  return (
    <div className='w-full'>

      <section 
        style={{
          backgroundImage: `url(${SusBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
        className='flex flex-col items-center px-5 lg:px-0 justify-center h-[619px]'
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className='flex flex-col items-center lg:w-[741px] h-[253px] gap-[23px] lg:gap-[4px] relative z-10'>

          <div className='w-[211px] h-[28px] rounded-full gap-1 flex items-center justify-center bg-[#FDF2E9]'>
            <img src={Stars} alt='Stars' className='w-[13px] h-[13px]' />
            <p className='text-xs font-hanken text-[#E78020]'>Empowering 6M+ Nigerians</p>
          </div>

          <p className='font-semibold text-[32px] lg:text-[56px] text-center leading-[32px] lg:leading-[57px] font-hanken text-[#FAFAFA]'>
            Creating a Better Tomorrow, Today.
          </p>

          <p className='font-hanken leading-5 lg:leading-[30px] text-center text-[#FFFFFF] text-base lg:text-[20px]'>
            LAPO Microfinance Bank integrates sustainability into every aspect of banking—ensuring 
            prosperity for businesses, empowerment for individuals, and protection for our planet
          </p>

        </div>
      </section>

      <section
        className='bg-[#FAFBFB] flex items-center lg:justify-center px-5 lg:px-0 overflow-x-auto py-[32px] gap-4'
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        <div 
          onClick={() => handleChangeTab("overview")}
          className={`${activeTab === "overview" ? "bg-[#4380BE]" : "bg-[#FAFBFB]"} cursor-pointer w-full lg:w-[120px] h-[48px] p-4 lg:p-0 rounded-[15px] border flex items-center justify-center border-[#1E1E1E]`}
        >
          <p className={`${activeTab === "overview" ? "text-[#fff]" : "text-[#1E1E1E]"} whitespace-nowrap text-base leading-6 font-inter`}>Overview</p>
        </div>
        <div 
          onClick={() => handleChangeTab("social")}
          className={`${activeTab === "social" ? "bg-[#4380BE]" : "bg-[#FAFBFB]"} cursor-pointer w-full lg:w-[177px] h-[48px] p-4 lg:p-0 rounded-[15px] border flex items-center justify-center border-[#1E1E1E]`}
        >
          <p className={`${activeTab === "social" ? "text-[#fff]" : "text-[#1E1E1E]"} whitespace-nowrap text-base leading-6 font-inter`}>Social Dimension</p>
        </div>
        <div 
          onClick={() => handleChangeTab("environmental")}
          className={`${activeTab === "environmental" ? "bg-[#4380BE]" : "bg-[#FAFBFB]"} cursor-pointer w-full lg:w-[239px] h-[48px] p-4 lg:p-0 rounded-[15px] border flex items-center justify-center border-[#1E1E1E]`}
        >
          <p className={`${activeTab === "environmental" ? "text-[#fff]" : "text-[#1E1E1E]"} whitespace-nowrap text-base leading-6 font-inter`}>Environmental Dimension</p>
        </div>
        <div 
          onClick={() => handleChangeTab("nsbp")}
          className={`${activeTab === "nsbp" ? "bg-[#4380BE]" : "bg-[#FAFBFB]"} cursor-pointer w-full lg:w-[169px] h-[48px] p-4 lg:p-0 rounded-[15px] border flex items-center justify-center border-[#1E1E1E]`}
        >
          <p className={`${activeTab === "nsbp" ? "text-[#fff]" : "text-[#1E1E1E]"} whitespace-nowrap text-base leading-6 font-inter`}>NSBP Principles</p>
        </div>
        <div 
          onClick={() => handleChangeTab("sdgs")}
          className={`${activeTab === "sdgs" ? "bg-[#4380BE]" : "bg-[#FAFBFB]"} cursor-pointer w-full lg:w-[90px] h-[48px] p-4 lg:p-0 rounded-[15px] border flex items-center justify-center border-[#1E1E1E]`}
        >
          <p className={`${activeTab === "sdgs" ? "text-[#fff]" : "text-[#1E1E1E]"} whitespace-nowrap text-base leading-6 font-inter`}>SDGs</p>
        </div>
        {/* <div 
          onClick={() => handleChangeTab("badges")}
          className={`${activeTab === "badges" ? "bg-[#4380BE]" : "bg-[#FAFBFB]"} cursor-pointer w-full lg:w-[90px] h-[48px] p-4 lg:p-0 rounded-[15px] border flex items-center justify-center border-[#1E1E1E]`}
        >
          <p className={`${activeTab === "badges" ? "text-[#fff]" : "text-[#1E1E1E]"} whitespace-nowrap text-base leading-6 font-inter`}>Badges</p>
        </div> */}
      </section>

      <>
        {activeTab === "overview" && <Overview handleChangeTab={handleChangeTab} />}
        {activeTab === "social" && <Social />}
        {activeTab === "environmental" && <EnvironmentalDimension />}
        {activeTab === "nsbp" && <Principles />}
        {activeTab === "sdgs" && <Sdg />}
        {/* {activeTab === "badges" && <Badges />} */}
      </>

    </div>
  )
}

export default Sustainability