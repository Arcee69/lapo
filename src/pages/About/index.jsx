import React, { useState } from 'react'

import AboutA from "../../assets/png/about_a.png"
import AboutB from "../../assets/png/about_b.png"
import AboutC from "../../assets/png/about_c.png"

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
        className="w-full bg-[#00984C] h-[745px] relative"
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        <div className='flex items-center justify-between absolute bottom-0 z-10 -inset-x-10'>
          <img src={Left} alt='Left' className='' />
          <img src={Right} alt='Right' className='' />
        </div>

        <div className='flex flex-col items-center pt-[112px]'>
            <div className='flex flex-col items-center gap-4 w-[768px] mx-auto'>
              <div className='w-[71px] h-[32px] rounded-[6px] flex items-center justify-center bg-[#FDF2E9]'>
                <p className='bg-[#FDF2E9] text-xs text-[#E78020]'>About us</p>
              </div>
              <div className='flex flex-col gap-6'>
                <p className='font-hanken text-[54px] font-medium text-[#FFFFFF] leading-[64px]'>Transforming Financial Futures</p>
                <p className='font-inter text-[18px] leading-[27px] text-[#FFFFFF] text-center'>
                  LAPO Microfinance Bank has been empowering communities through 
                  financial inclusion since its inception in 1987.
                </p>
              </div>
            </div>
        </div>

        <div className='flex items-end gap-[21px] absolute bottom-0 left-[64px] '>
          <img src={AboutA} alt='AboutA' className='w-4/12  h-[313px] z-20' />
          <img src={AboutB} alt='AboutB' className='w-4/12  h-[313px] z-20' />
          <img src={AboutC} alt='AboutC' className='w-4/12  h-[313px] z-20' />
        </div>

      </section>

      <section
        className='bg-[#FAFBFB] flex items-center justify-center gap-4 py-8'
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        <div onClick={() => changeActiveTab(1)} className={`${activeTab === 1 ? "bg-[#00984C]" : "bg-[#98B3A226] "} w-[168px] h-[48px] flex items-center justify-center rounded-lg p-2 cursor-pointer`}>
          <p className={`${activeTab === 1 ? "text-[#fff]" : "text-[#00984C]"} font-inter leading-6 text-base`}>The LAPO story</p>
        </div>
        <div onClick={() => changeActiveTab(2)} className={`${activeTab === 2 ? "bg-[#00984C]" : "bg-[#98B3A226] "} w-[221px] h-[48px] flex items-center justify-center rounded-lg p-2 cursor-pointer`}>
          <p className={`${activeTab === 2 ? "text-[#fff]" : "text-[#00984C]"} font-inter leading-6 text-base`}>Board and Excos</p>
        </div>
        <div onClick={() => changeActiveTab(3)} className={`${activeTab === 3 ? "bg-[#00984C]" : "bg-[#98B3A226] "} w-[221px] h-[48px] flex items-center justify-center rounded-lg p-2 cursor-pointer`}>
          <p className={`${activeTab === 3 ? "text-[#fff]" : "text-[#00984C]"} font-inter leading-6 text-base`}>Corporate Governance</p>
        </div>
        <div onClick={() => changeActiveTab(4)} className={`${activeTab === 4 ? "bg-[#00984C]" : "bg-[#98B3A226]"} w-[104px] h-[48px] flex items-center justify-center rounded-lg p-2 cursor-pointer`}>
          <p className={`${activeTab === 4 ? "text-[#fff]" : "text-[#00984C]"} font-inter leading-6 text-base`}>Awards</p>
        </div>
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