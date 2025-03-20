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
        className="w-full bg-[#00984C] h-[500px] lg:h-[745px] relative"
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        <div className='flex items-center justify-between absolute bottom-0 z-10 -inset-x-10'>
          <img src={Left} alt='Left' className='' />
          <img src={Right} alt='Right' className='' />
        </div>

        <div className='flex flex-col items-center pt-[132px]'>
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
        </div>

        <div className='flex items-center justify-center  absolute bottom-0 inset-x-20 gap-[21px] '> {/* items-end  left-[24px] md:left-[124px] lg:left-auto lg:-right-[1%] */}
          <img src={AboutA} alt='AboutA' className='w-[10.4rem] h-[120.06px] md:w-4/12 lg:w-auto lg:h-[213px] z-20' />
          <img src={AboutB} alt='AboutB' className='w-[10.4rem] h-[120.06px] md:w-4/12 lg:w-auto lg:h-[213px] z-20' />
          <img src={AboutC} alt='AboutC' className='w-[10.4rem] h-[120.06px] md:w-4/12 lg:w-auto lg:h-[213px] z-20' />
        </div>

      </section>

      <section
        className='bg-[#FAFBFB] flex items-center md:justify-center overflow-x-auto gap-4 px-5 lg:pl-0 py-8'
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        <div onClick={() => changeActiveTab(1)} className={`${activeTab === 1 ? "bg-[#00984C]" : "bg-[#98B3A226] "} w-auto lg:w-[168px] h-[48px] flex items-center justify-center rounded-lg p-2 cursor-pointer`}>
          <p className={`${activeTab === 1 ? "text-[#fff]" : "text-[#00984C]"} whitespace-nowrap font-inter leading-6 text-base`}>The LAPO story</p>
        </div>
        <div onClick={() => changeActiveTab(2)} className={`${activeTab === 2 ? "bg-[#00984C]" : "bg-[#98B3A226] "} w-auto lg:w-[221px] h-[48px] flex items-center justify-center rounded-lg p-2 cursor-pointer`}>
          <p className={`${activeTab === 2 ? "text-[#fff]" : "text-[#00984C]"} whitespace-nowrap font-inter leading-6 text-base`}>Board and Excos</p>
        </div>
        <div onClick={() => changeActiveTab(3)} className={`${activeTab === 3 ? "bg-[#00984C]" : "bg-[#98B3A226] "} w-auto lg:w-[221px] h-[48px] flex items-center justify-center rounded-lg p-2 cursor-pointer`}>
          <p className={`${activeTab === 3 ? "text-[#fff]" : "text-[#00984C]"} whitespace-nowrap font-inter leading-6 text-base`}>Corporate Governance</p>
        </div>
        <div onClick={() => changeActiveTab(4)} className={`${activeTab === 4 ? "bg-[#00984C]" : "bg-[#98B3A226]"} w-auto lg:w-[104px] h-[48px] flex items-center justify-center rounded-lg p-2 cursor-pointer`}>
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