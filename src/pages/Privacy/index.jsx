import React, { useState } from 'react'
import Legal from './components/Legal'
import Simple from './components/Simple'

const Privacy = () => {
    const [activeTab, setActiveTab] = useState("legal")

    const handleTabChange = (value) => {
        setActiveTab(value)
    }

  return (
    <div className='w-full'>
        <section
            className='h-[34.25rem] flex flex-col px-5 lg:px-[80px] items-center justify-center py-[96px] gap-[40px] bg-[#753412]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex flex-col items-center gap-4 lg:w-[60rem] mx-auto'>
                <p className='font-inter text-[#EAECF0] text-base font-semibold leading-6'>Privacy Policy</p>
                <p className='font-hanken text-[#fff] leading-[32px] text-center lg:leading-[60px] text-[32px] lg:text-[54px] tracking-[-2%]'>We care about your privacy</p>
                <p className='text-[#EAECF0] text-center lg:w-[48rem] mx-auto font-inter text-base lg:text-[20px] leading-[100%] lg:leading-[30px]'>
                    Your privacy is important to us at LAPO MfB. 
                    We respect your privacy regarding any information we may collect from you across our website.
                </p>
            </div>
            <div className='border border-[#F2F4F7] rounded-[8px] flex items-center gap-2 p-2 w-[290px] h-[56px]'>
                <div className={`${activeTab === "legal" ? "bg-[#FFFFFF] shadow" : ""} flex items-center justify-center cursor-pointer w-[130px] rounded-lg h-[44px]`} onClick={() => handleTabChange("legal")}>
                    <p className={`${activeTab === "legal" ? "text-[#344054]" : "text-[#fff]"} font-inter font-medium text-base leading-6`}>
                        Legal version
                    </p>
                </div>
                <div className={`${activeTab === "simple" ? "bg-[#FFFFFF] shadow" : ""} flex items-center justify-center cursor-pointer w-[130px] rounded-lg h-[44px]`} onClick={() => handleTabChange("simple")}>
                    <p className={`${activeTab === "simple" ? "text-[#344054]" : "text-[#fff]"} font-inter font-medium text-base leading-6`}>
                        Simple version
                    </p>
                </div>
            </div>
        </section>

        {activeTab === "legal" && <Legal />}
        {activeTab === "simple" && <Simple />}

        <section
            className='bg-[#00984C] h-[471px] px-5 lg:px-0 flex justify-center py-[107px] lg:py-[112px] items-center'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='lg:w-[768px] flex flex-col items-center gap-6'>
                <p className='font-hanken text-[32px] lg:text-[48px] text-center leading-[120%] lg:leading-[57px] text-[#FFFFFF]'>
                    Unlock new financial possibilities with us
                </p>
                <p className='font-inter text-base leading-[150%] text-center lg:text-[18px] lg:leading-[27px] text-[#FFFFFF]'>
                    Explore our diverse saving options tailored for personal, business, and educational needs.  
                </p>
                <div className='flex items-center gap-4'>
                    <div className='bg-[#fff] w-[128px] h-[48px] cursor-pointer rounded-[8px] p-2 flex items-center justify-center'>
                        <p className='font-hanken text-[#000000] font-medium text-[13px] lg:text-base leading-6'>Contact Us</p>
                    </div>
                    <div className='bg-[#000000] w-[187px] lg:w-[225px] cursor-pointer h-[48px] rounded-[8px] flex items-center justify-center p-2'>
                        <p className='font-hanken font-medium whitespace-nowrap text-[13px] lg:text-base text-[#fff]'>Download the LAPO App</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Privacy