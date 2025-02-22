import React, { useState } from 'react'

import AwardGreen from "../../../assets/svg/award_green.svg"
import AwardGrey from "../../../assets/svg/award_grey.svg"
import MoneyBag from "../../../assets/svg/money_bag.svg"
import Medal from "../../../assets/svg/medal.svg"
import Graph from "../../../assets/svg/graph.svg"

const YearAwarded = () => {
    const [activeTab, setActiveTab] = useState(false)
    
    const changeActiveTab = (value) => {
        setActiveTab(value)
    }

  return (
    <div className='w-full flex flex-col gap-[32px]'>
        <div className='flex flex-col gap-5'>
            <p className='font-hanken text-[32px] leading-[44px] text-[#101828]'>Year Awarded</p>
            <div className='grid grid-cols-6 gap-2'>
                <div onClick={() => changeActiveTab(1)} className={`${activeTab === 1 ? "bg-[#00984C] rounded-lg" : "border border-x-0 border-t-0 border-[#34423B4D] "} w-[197px] h-[64px] flex items-center gap-2 justify-center p-2 cursor-pointer`}>
                    <img src={activeTab === 1 ? AwardGreen : AwardGrey} alt='Active' className='w-[21px] h-[26px]'/>
                    <p className={`${activeTab === 1 ? "text-[#fff]" : "text-[#00984C]"} font-nunito font-semibold leading-7 text-[18px]`}>2023</p>
                </div>
                <div onClick={() => changeActiveTab(2)} className={`${activeTab === 2 ? "bg-[#00984C] rounded-lg" : "border border-x-0 border-t-0 border-[#34423B4D] "} w-[197px] h-[64px] flex items-center gap-2 justify-center p-2 cursor-pointer`}>
                    <img src={activeTab === 2 ? AwardGreen : AwardGrey} alt='Active' className='w-[21px] h-[26px]'/>
                    <p className={`${activeTab === 2 ? "text-[#fff]" : "text-[#00984C]"} font-nunito font-semibold leading-7 text-[18px]`}>2022</p>
                </div>
                <div onClick={() => changeActiveTab(3)} className={`${activeTab === 3 ? "bg-[#00984C] rounded-lg" : "border border-x-0 border-t-0 border-[#34423B4D] "} w-[197px] h-[64px] flex items-center gap-2 justify-center p-2 cursor-pointer`}>
                    <img src={activeTab === 3 ? AwardGreen : AwardGrey} alt='Active' className='w-[21px] h-[26px]'/>
                    <p className={`${activeTab === 3 ? "text-[#fff]" : "text-[#00984C]"} font-nunito font-semibold leading-7 text-[18px]`}>2021</p>
                </div>
                <div onClick={() => changeActiveTab(4)} className={`${activeTab === 4 ? "bg-[#00984C] rounded-lg" : "border border-x-0 border-t-0 border-[#34423B4D] "} w-[197px] h-[64px] flex items-center gap-2 justify-center p-2 cursor-pointer`}>
                    <img src={activeTab === 4 ? AwardGreen : AwardGrey} alt='Active' className='w-[21px] h-[26px]'/>
                    <p className={`${activeTab === 4 ? "text-[#fff]" : "text-[#00984C]"} font-nunito font-semibold leading-7 text-[18px]`}>2019</p>
                </div>
                <div onClick={() => changeActiveTab(5)} className={`${activeTab === 5 ? "bg-[#00984C] rounded-lg" : "border border-x-0 border-t-0 border-[#34423B4D] "} w-[197px] h-[64px] flex items-center gap-2 justify-center p-2 cursor-pointer`}>
                    <img src={activeTab === 5 ? AwardGreen : AwardGrey} alt='Active' className='w-[21px] h-[26px]'/>
                    <p className={`${activeTab === 5 ? "text-[#fff]" : "text-[#00984C]"} font-nunito font-semibold leading-7 text-[18px]`}>2018</p>
                </div>
                <div onClick={() => changeActiveTab(6)} className={`${activeTab === 6 ? "bg-[#00984C] rounded-lg" : "border border-x-0 border-t-0 border-[#34423B4D] "} w-[197px] h-[64px] flex items-center gap-2 justify-center p-2 cursor-pointer`}>
                    <img src={activeTab === 6 ? AwardGreen : AwardGrey} alt='Active' className='w-[21px] h-[26px]'/>
                    <p className={`${activeTab === 6 ? "text-[#fff]" : "text-[#00984C]"} font-nunito font-semibold leading-7 text-[18px]`}>2017</p>
                </div>
                <div onClick={() => changeActiveTab(7)} className={`${activeTab === 7 ? "bg-[#00984C] rounded-lg" : "border border-x-0 border-t-0 border-[#34423B4D] "} w-[197px] h-[64px] flex items-center gap-2 justify-center p-2 cursor-pointer`}>
                    <img src={activeTab === 7 ? AwardGreen : AwardGrey} alt='Active' className='w-[21px] h-[26px]'/>
                    <p className={`${activeTab === 7 ? "text-[#fff]" : "text-[#00984C]"} font-nunito font-semibold leading-7 text-[18px]`}>2016</p>
                </div>
                <div onClick={() => changeActiveTab(8)} className={`${activeTab === 8 ? "bg-[#00984C] rounded-lg" : "border border-x-0 border-t-0 border-[#34423B4D] "} w-[197px] h-[64px] flex items-center gap-2 justify-center p-2 cursor-pointer`}>
                    <img src={activeTab === 8 ? AwardGreen : AwardGrey} alt='Active' className='w-[21px] h-[26px]'/>
                    <p className={`${activeTab === 8 ? "text-[#fff]" : "text-[#00984C]"} font-nunito font-semibold leading-7 text-[18px]`}>2015</p>
                </div>
                <div onClick={() => changeActiveTab(9)} className={`${activeTab === 9 ? "bg-[#00984C] rounded-lg" : "border border-x-0 border-t-0 border-[#34423B4D] "} w-[197px] h-[64px] flex items-center gap-2 justify-center p-2 cursor-pointer`}>
                    <img src={activeTab === 9 ? AwardGreen : AwardGrey} alt='Active' className='w-[21px] h-[26px]'/>
                    <p className={`${activeTab === 9 ? "text-[#fff]" : "text-[#00984C]"} font-nunito font-semibold leading-7 text-[18px]`}>2014</p>
                </div>
                <div onClick={() => changeActiveTab(10)} className={`${activeTab === 10 ? "bg-[#00984C] rounded-lg" : "border border-x-0 border-t-0 border-[#34423B4D] "} w-[197px] h-[64px] flex items-center gap-2 justify-center p-2 cursor-pointer`}>
                    <img src={activeTab === 10 ? AwardGreen : AwardGrey} alt='Active' className='w-[21px] h-[26px]'/>
                    <p className={`${activeTab === 10 ? "text-[#fff]" : "text-[#00984C]"} font-nunito font-semibold leading-7 text-[18px]`}>2006</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-5'>
            <p className='font-hanken text-[32px] leading-[44px] text-[#101828]'>Awards</p>
            <div className='bg-[#FCFAF9] rounded-[20px] p-[40px] flex flex-col gap-[15px]'>
                <div className='flex items-center rounded-lg gap-2.5 p-5 bg-[#F1C40F1A] border-[#F1C40F] border'>
                    <img src={Medal} alt='Medal' className='w-6 h-6' />
                    <p className='font-inter text-base text-[#2C3E50]'>Microfinance Bank of the Year (BAFI Awards)</p>
                </div>
                <div className='flex items-center gap-2.5 p-5 bg-[#ECF0F1] border-[#1A5276] border-[4px] border-y-0 border-r-0'>
                    <img src={Graph} alt='Graph' className='w-6 h-6' />
                    <p className='font-inter text-base text-[#2C3E50]'>Highest Impact on MSMEs (DBN Awards)</p>
                </div>
                <div className='flex items-center gap-2.5 p-5 bg-[#F1ECEF] border-[#761A48] border-[4px] border-y-0 border-r-0'>
                    <img src={MoneyBag} alt='MoneyBag' className='w-6 h-6' />
                    <p className='font-inter text-base text-[#301C26]'>Financially Inclusive MFB of the Year</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default YearAwarded