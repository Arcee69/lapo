import React, { useState } from 'react'

import AwardGreen from "../../../assets/svg/award_green.svg"
import AwardGrey from "../../../assets/svg/award_grey.svg"
import Google from "../../../assets/svg/google.svg"
import Apple from "../../../assets/svg/apple.svg"

import BackScreen from "../../../assets/png/back_screen.png"
import FrontScreen from "../../../assets/png/front_screen.png"

import YearAwarded from './YearAwarded'
import ByAwards from './ByAwards'
import { useNavigate } from 'react-router-dom'

const Awards = () => {
    const [activeTab, setActiveTab] = useState(1)

    const changeActiveTab = (value) => {
        setActiveTab(value)
    }

    const navigate = useNavigate()

  return (
    <div className='w-full'>
        <section className='flex flex-col px-5 lg:px-[112px] py-[96px] bg-[#fff] gap-[32px]'>
            <div className='flex items-center gap-2'>
                <div onClick={() => changeActiveTab(1)} className={`${activeTab === 1 ? "bg-[#00984C] rounded-lg" : "border border-x-0 border-t-0 border-[#34423B4D] "} w-[197px] h-[64px] flex items-center gap-2 justify-center p-2 cursor-pointer`}>
                    <img src={activeTab === 1 ? AwardGreen : AwardGrey} alt='Active' className='w-[21px] h-[26px]'/>
                    <p className={`${activeTab === 1 ? "text-[#fff]" : "text-[#00984C]"} font-nunito font-semibold leading-7 text-[18px]`}>By Year</p>
                </div>
                <div onClick={() => changeActiveTab(2)} className={`${activeTab === 2 ? "bg-[#00984C] rounded-lg" : "border border-x-0 border-t-0 border-[#34423B4D] "} w-[197px] h-[64px] flex items-center gap-2 justify-center p-2 cursor-pointer`}>
                    <img src={activeTab === 2 ? AwardGreen : AwardGrey} alt='Active' className='w-[21px] h-[26px]'/>
                    <p className={`${activeTab === 2 ? "text-[#fff]" : "text-[#00984C]"} font-nunito font-semibold leading-7 text-[18px]`}>By Awards</p>
                </div>
                
            </div>

            <>
                {activeTab === 1 && <YearAwarded />}
                {activeTab === 2 && <ByAwards />}
            </>
        </section>

        <section
            className='bg-[#E78020] h-[330px] flex px-5 lg:px-0 py-[96px] items-center justify-center'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='lg:w-[768px] flex flex-col gap-5'>
                <p className='font-inter font-semibold text-[24px] lg:text-[36px] leading-[120%] lg:leading-[44px] text-[#fff] text-center'>
                    Get your LAPO Debit Card today and unlock a world of financial freedom and convenience!
                </p>
                <p className='font-inter text-base lg:text-[20px] leading-[150%] lg:leading-[30px] text-center text-[#fff]'>
                    Visit any of our branches to apply for your card
                </p>
            </div>
        </section>

        <section
            className='w-full px-5 lg:px-[80px] py-[96px] lg:h-[512px] overflow-hidden'
            data-aos="fade-up" 
            data-aos-duration="1000"
            data-aos-easing="linear"
        >
            <div
            className='flex flex-col lg:flex-row items-center justify-center gap-[64px]'
            >
                <div className='lg:w-[576px] flex flex-col gap-6'>
                    <p className='font-medium font-hanken text-[32px] lg:text-[48px] leading-[60px]'>
                        Bank On the Go – Anytime, Anywhere!
                    </p>
                    <p className='text-[#667085] text-[20px] font-nunito leading-[30px] lg:w-[480px]'>
                        Download LAPO's mobile app for seamless banking, savings, 
                        and loans—all at your fingertips.
                    </p>
                    <div className='flex items-center gap-4'>
                    <img src={Apple} alt='Apple' className='w-[120px] cursor-pointer h-[40px]' onClick={() => window.open("https://apps.apple.com/ng/app/lapo-mobile-app/id6448030325", "_blank")} />
                    <img src={Google} alt='Google' className='w-[120px] cursor-pointer h-[40px]' onClick={() => window.open("https://play.google.com/store/apps/details?id=com.digicore.lapo", "_blank")}/>
                    </div>
                </div>
                <div className='bg-[#F3F5F4] w-full lg:w-[576px] h-[512px] lg:h-auto relative overflow-hidden flex items-center rounded-tl-[30px] rounded-tr-[30px]'>
                    <div className='w-[274px] hidden lg:block lg:relative left-10 -bottom-20'>
                    <img src={BackScreen} alt='BackScreen' className='' />
                    </div>
                    <div className='w-[281px] mx-auto relative lg:right-4 -bottom-10 z-10'>
                    <img src={FrontScreen} alt='FrontScreen' className=''  />
                    </div>
                </div>
            </div>
      </section>

    </div>
  )
}

export default Awards