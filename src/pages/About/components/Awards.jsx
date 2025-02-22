import React, { useState } from 'react'

import AwardGreen from "../../../assets/svg/award_green.svg"
import AwardGrey from "../../../assets/svg/award_grey.svg"
import Google from "../../../assets/svg/google.svg"
import Apple from "../../../assets/svg/apple.svg"

import BackScreen from "../../../assets/png/back_screen.png"
import FrontScreen from "../../../assets/png/front_screen.png"

import YearAwarded from './YearAwarded'
import ByAwards from './ByAwards'

const Awards = () => {
    const [activeTab, setActiveTab] = useState(1)

    const changeActiveTab = (value) => {
        setActiveTab(value)
    }

  return (
    <div className='w-full'>
        <section className='flex flex-col px-[112px] py-[96px] bg-[#fff] gap-[32px]'>
            <div className='flex items-center gap-2'>
                <div onClick={() => changeActiveTab(1)} className={`${activeTab === 1 ? "bg-[#00984C] rounded-lg" : "border border-x-0 border-t-0 border-[#34423B4D] "} w-[197px] h-[64px] flex items-center gap-2 justify-center p-2 cursor-pointer`}>
                    <img src={activeTab === 1 ? AwardGreen : AwardGrey} alt='Active' className='w-[21px] h-[26px]'/>
                    <p className={`${activeTab === 1 ? "text-[#fff]" : "text-[#00984C]"} font-nunito font-semibold leading-7 text-[18px]`}>By Awards</p>
                </div>
                <div onClick={() => changeActiveTab(2)} className={`${activeTab === 2 ? "bg-[#00984C] rounded-lg" : "border border-x-0 border-t-0 border-[#34423B4D] "} w-[197px] h-[64px] flex items-center gap-2 justify-center p-2 cursor-pointer`}>
                    <img src={activeTab === 2 ? AwardGreen : AwardGrey} alt='Active' className='w-[21px] h-[26px]'/>
                    <p className={`${activeTab === 2 ? "text-[#fff]" : "text-[#00984C]"} font-nunito font-semibold leading-7 text-[18px]`}>By Year</p>
                </div>
            </div>

            <>
                {activeTab === 1 && <ByAwards />}
                {activeTab === 2 && <YearAwarded />}
            </>
        </section>

        <section
            className='bg-[#E78020] h-[330px] flex py-[96px] items-center justify-center'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='w-[768px] flex flex-col gap-5'>
                <p className='font-inter font-semibold text-[36px] leading-[44px] text-[#fff] text-center'>
                    Get your LAPO Debit Card today and unlock a world of financial freedom and convenience!
                </p>
                <p className='font-inter text-[20px] leading-[30px] text-center text-[#fff]'>
                    Visit any of our branches to apply for your card
                </p>
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
                <img src={Apple} alt='Apple' className='w-[120px] h-[40px]' />
                <img src={Google} alt='Google' className='w-[120px] h-[40px]'/>
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

export default Awards