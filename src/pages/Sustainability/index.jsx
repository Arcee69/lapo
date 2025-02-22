import React, { useState } from 'react'

import SusBg from "../../assets/png/sus_bg.png"

import Stars from "../../assets/svg/stars.svg"

import Overview from './components/Overview'
import Social from './components/Social'

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
          backgroundRepeat: "no-repeat"
        }}
        className='flex flex-col items-center justify-center h-[619px]'
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        <div className='flex flex-col items-center w-[741px] h-[253px] gap-[4px]'>

          <div className='w-[211px] h-[28px] rounded-full gap-1 flex items-center justify-center bg-[#FDF2E9]'>
            <img src={Stars} alt='Stars' className='w-[13px] h-[13px]' />
            <p className='text-xs font-hanken text-[#E78020]'>Empowering 5M+ Nigerians</p>
          </div>

          <p className='font-semibold text-[56px] text-center leading-[57px] font-hanken text-[#FAFAFA]'>
            Creating a Better Tomorrow, Today.
          </p>

          <p className='font-hanken leading-[30px] text-center text-[#FFFFFF] text-[20px]'>
            LAPO Microfinance Bank integrates sustainability into every aspect of banking—ensuring 
            prosperity for businesses, empowerment for individuals, and protection for our planet
          </p>

        </div>
      </section>

      <section
        className='bg-[#FAFBFB] flex items-center justify-center py-[32px] gap-4'
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        <div 
          onClick={() => handleChangeTab("overview")}
          className={`${activeTab === "overview" ? "bg-[#4380BE]" : "bg-[#FAFBFB]"} cursor-pointer w-[120px] h-[48px] rounded-[15px] border flex items-center justify-center border-[#1E1E1E]`}
        >
          <p className={`${activeTab === "overview" ? "text-[#fff]" : "text-[#1E1E1E]"} text-base leading-6 font-inter`}>Overview</p>
        </div>
        <div 
          onClick={() => handleChangeTab("social")}
          className={`${activeTab === "social" ? "bg-[#4380BE]" : "bg-[#FAFBFB]"} cursor-pointer w-[177px] h-[48px] rounded-[15px] border flex items-center justify-center border-[#1E1E1E]`}
        >
          <p className={`${activeTab === "social" ? "text-[#fff]" : "text-[#1E1E1E]"} text-base leading-6 font-inter`}>Social Dimension</p>
        </div>
        <div 
          onClick={() => handleChangeTab("environmental")}
          className={`${activeTab === "environmental" ? "bg-[#4380BE]" : "bg-[#FAFBFB]"} cursor-pointer w-[239px] h-[48px] rounded-[15px] border flex items-center justify-center border-[#1E1E1E]`}
        >
          <p className={`${activeTab === "environmental" ? "text-[#fff]" : "text-[#1E1E1E]"} text-base leading-6 font-inter`}>Environmental Dimension</p>
        </div>
        <div 
          onClick={() => handleChangeTab("nsbp")}
          className={`${activeTab === "nsbp" ? "bg-[#4380BE]" : "bg-[#FAFBFB]"} cursor-pointer w-[169px] h-[48px] rounded-[15px] border flex items-center justify-center border-[#1E1E1E]`}
        >
          <p className={`${activeTab === "nsbp" ? "text-[#fff]" : "text-[#1E1E1E]"} text-base leading-6 font-inter`}>NSBP Principles</p>
        </div>
        <div 
          onClick={() => handleChangeTab("sdgs")}
          className={`${activeTab === "sdgs" ? "bg-[#4380BE]" : "bg-[#FAFBFB]"} cursor-pointer w-[90px] h-[48px] rounded-[15px] border flex items-center justify-center border-[#1E1E1E]`}
        >
          <p className={`${activeTab === "sdgs" ? "text-[#fff]" : "text-[#1E1E1E]"} text-base leading-6 font-inter`}>SDGs</p>
        </div>
      </section>

      <>
        {activeTab === "overview" && <Overview handleChangeTab={handleChangeTab} />}
        {activeTab === "social" && <Social />}
      </>

    </div>
  )
}

export default Sustainability