import React from 'react'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import Girl from "../../../../assets/png/girl_big.png"

import Left from "../../../../assets/svg/left_about_spiral.svg"
import Right from "../../../../assets/svg/right_about_spiral.svg"
import Stars from "../../../../assets/svg/stars.svg"
import StarsA from "../../../../assets/svg/star_01.svg"
import Hex from "../../../../assets/svg/hex.svg"
import Cube from "../../../../assets/svg/cube_box.svg"
import Arrow from "../../../../assets/svg/arrow_long.svg"

const SavingsPlan = () => {
    const [openBenefitDropdown, setOpenBenefitDropdown] = useState(false)
    const [openSavingsDropdown, setOpenSavingsDropdown] = useState(false)
    const [openDocumentsDropdown, setOpenDocumentsDropdown] = useState(false)

    const handleOpenBenefitDropdown = () => {
        setOpenBenefitDropdown(!openBenefitDropdown)
    }

    const handleOpenSavingsDropdown = () => {
        setOpenSavingsDropdown(!openSavingsDropdown)
    }

    const handleOpenDocumentsDropdown = () => {
        setOpenDocumentsDropdown(!openDocumentsDropdown)
    }

  return (
    <div className='w-full'>

        <section
            className='bg-[#00984C] h-auto pt-[100px] relative overflow-hidden'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex items-center justify-between absolute top-34 z-10 -inset-x-4'>
                <img src={Left} alt='Left' className='' />
                <img src={Right} alt='Right' className='' />
            </div>

            <div className='flex flex-col items-center pt-[173px] pb-[80px]'>
                <div className='flex flex-col items-center gap-4 w-[688px] mx-auto'>
                    <div className='w-[105px] h-[28px] rounded-[6px] gap-1 flex items-center justify-center bg-[#FDF2E9]'>
                        <img src={Stars} alt='Stars' className='w-[13px] h-[13px]' />
                        <p className='text-xs font-hanken text-[#E78020]'>Savings</p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p className='font-hanken text-[56px] text-center font-medium text-[#FFFFFF] leading-[56px]'>
                            Savings Plan Account
                        </p>
                        <p className='font-hanken text-[20px] leading-[30px] text-[#FFFFFF] text-center'>
                            The Savings Plan Account is designed for individuals and groups who wish to save 
                            funds toward a particular project(s) over a specified period of time and earn 
                            interest on their savings.
                        </p>
                    </div>
                    <div className='flex items-center gap-[17px]'>
                        <button
                            className='w-[180px] h-[56px] flex items-center justify-center bg-[#fff] rounded-lg'
                        >
                            <p className='text-[#F99650] font-medium text-base leading-7' >Get Started</p>
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
            className='px-[100px] flex items-start gap-[39px] pb-[126.8px] pt-[143px]'
        >
            <div className='flex flex-col w-[569px] gap-[22px] py-[55px]'>
                <div className='h-[151px] flex flex-col gap-2'>
                    <p className='font-hanken text-[32px] leading-[48px] text-[#101828]'>Savings Plan </p>
                    <p className='font-inter text-[#445D65] leading-6 text-base'>
                        At some point in time, every individual has projects to execute. 
                        LAPO MfB has designed Savings Plan Account for individuals and groups 
                        to save funds towards their specific projects for a specified period. 
                        The savings account will generate interest on your fund, while you plan your project.
                    </p>
                </div>
                
                <div
                    onClick={handleOpenBenefitDropdown}
                    className="flex bg-[#fff] flex-col h-auto border-b-[1px] border-t-0 border-x-0 border-[#34423B4D]"
                >
                    <div className='flex items-center p-4 justify-between'>
                        <div className='flex items-start gap-2'>
                            <img src={StarsA} alt="StarsA" className='' />
                            <p className='font-semibold text-[#000000] leading-[28px] text-[18px] font-nunito'>Benefits</p>
                        </div>
                        {openBenefitDropdown ? <IoIosArrowUp className='text-[#141B34] w-4 h-4'/> : <IoIosArrowDown className='text-[#141B34] w-4 h-4' />}
                    </div>
                    {
                        openBenefitDropdown && (
                            <div className='bg-[#F7FCF9] flex flex-col gap-2 py-4 px-6'>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    Minimum opening and operating balance is just N200
                                </p>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    Savings Plan Account can be opened at any LAPO MfB branch nationwide
                                </p>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    Very low entry balance
                                </p>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    Easy Access to your account
                                </p>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    Payments can be made anywhere nationwide with our Pocket Money banking service
                                </p>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    You are able to secure and grow savings
                                </p>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    Available to individuals and groups
                                </p>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    Expert financial advice
                                </p>
                            </div>
                        )
                    }

                </div>

                <div
                    onClick={handleOpenSavingsDropdown}
                    className="flex bg-[#fff] flex-col h-auto border-b-[1px] border-t-0 border-x-0 border-[#34423B4D]"
                >
                    <div className='flex items-center p-4 justify-between'>
                        <div className='flex items-start gap-2'>
                            <img src={Hex} alt="Hex" className='' />
                            <p className='font-semibold text-[#000000] leading-[28px] text-[18px] font-nunito'>Savings Plan interest rate</p>
                        </div>
                        {openSavingsDropdown ? <IoIosArrowUp className='text-[#141B34] w-4 h-4'/> : <IoIosArrowDown className='text-[#141B34] w-4 h-4' />}
                    </div>
                    {
                        openSavingsDropdown && (
                            <div className='bg-[#F7FCF9] flex flex-col gap-2 py-4 px-6'>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    Minimum opening and operating balance is just N200
                                </p>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    Savings Plan Account can be opened at any LAPO MfB branch nationwide
                                </p>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    Very low entry balance
                                </p>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    Easy Access to your account
                                </p>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    Payments can be made anywhere nationwide with our Pocket Money banking service
                                </p>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    You are able to secure and grow savings
                                </p>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    Available to individuals and groups
                                </p>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    Expert financial advice
                                </p>
                            </div>
                        )
                    }

                </div>

                <div
                    onClick={handleOpenDocumentsDropdown}
                    className="flex bg-[#fff] flex-col h-auto border-b-[1px] border-t-0 border-x-0 border-[#34423B4D]"
                >
                    <div className='flex items-center p-4 justify-between'>
                        <div className='flex items-start gap-2'>
                            <img src={Cube} alt="Cube" className='' />
                            <p className='font-semibold text-[#000000] leading-[28px] text-[18px] font-nunito'>Documents</p>
                        </div>
                        {openDocumentsDropdown ? <IoIosArrowUp className='text-[#141B34] w-4 h-4'/> : <IoIosArrowDown className='text-[#141B34] w-4 h-4' />}
                    </div>
                    {
                        openDocumentsDropdown && (
                            <div className='bg-[#F7FCF9] flex flex-col gap-2 py-4 px-6'>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    Minimum opening and operating balance is just N200
                                </p>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    Savings Plan Account can be opened at any LAPO MfB branch nationwide
                                </p>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    Very low entry balance
                                </p>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    Easy Access to your account
                                </p>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    Payments can be made anywhere nationwide with our Pocket Money banking service
                                </p>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    You are able to secure and grow savings
                                </p>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    Available to individuals and groups
                                </p>
                                <p className='font-inter font-medium text-base leading-[28px]'>
                                    Expert financial advice
                                </p>
                            </div>
                        )
                    }

                </div>

                <button
                    className='bg-[#000000] w-[180px] h-[48px] rounded-lg mt-[32px] flex px-[22px] py-[10px] items-center gap-6 capitalize'
                >
                    <p className='font-hanken font-bold leading-[28px] text-[#fff] text-base'>get started</p>
                    <img src={Arrow} alt="Arrow" className='' />
                </button>

            </div>
            <div className='bg-[#BAE2CE] h-[700px] w-[1px]'></div>

            <div className='w-auto'>
                <img src={Girl} alt='Girl' className='w-[600px]' />
            </div>
        </section>

        <section 
            className='bg-[#fff] py-[112px] flex flex-col '
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        > 
            <div className='w-[768px] flex flex-col mx-auto gap-[80px]'>
                <div
                    className='flex flex-col gap-6 items-center'
                >
                    <p className='font-hanken font-medium text-[48px] leading-[57px] '>FAQs</p>
                    <p className='font-inter text-[#000000] text-[18px] leading-[27px]'>
                        Find answers to your questions about our loan offerings and application process.
                    </p>
                </div>
                <div className='flex flex-col gap-[48px]'>
                    <div className='flex flex-col gap-4'>
                        <p className='font-hanken text-[#753412] font-medium leading-[30px] text-[20px]'>What types of loans?</p>
                        <p className='font-inter text-[#000000] text-base leading-6'>
                            We offer a variety of loans including personal, business, SME, agricultural, education, 
                            and special loans. Each type is designed to meet specific needs. Explore our options to 
                            find the right fit for you.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-hanken text-[#753412] font-medium leading-[30px] text-[20px]'>Who is eligible?</p>
                        <p className='font-inter text-[#000000] text-base leading-6'>
                            Eligibility varies by loan type. Generally, applicants must be of legal age and
                            meet income requirements. Specific criteria can be found in each loan category.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-hanken text-[#753412] font-medium leading-[30px] text-[20px]'>What are the benefits?</p>
                        <p className='font-inter text-[#000000] text-base leading-6'>
                            Our loans offer competitive interest rates, flexible repayment terms, 
                            and quick processing times. Additionally, certain loans provide tailored 
                            support for specific sectors. Enjoy peace of mind with our reliable service.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-hanken text-[#753412] font-medium leading-[30px] text-[20px]'>How to apply?</p>
                        <p className='font-inter text-[#000000] text-base leading-6'>
                            Applying is simple! Start by filling out our online application form. Once submitted, 
                            our team will review your application and guide you through the next steps.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-hanken text-[#753412] font-medium leading-[30px] text-[20px]'>What is SUFEN Loan?</p>
                        <p className='font-inter text-[#000000] text-base leading-6'>
                            The SUFEN Loan is specifically designed for female entrepreneurs. 
                            It provides financial support to help women start or grow their businesses. 
                            We aim to empower women in the business sector.
                        </p>
                    </div>
                </div>
                <div className='w-[560px] flex flex-col items-center mx-auto gap-4'>
                    <p className='font-hanken text-[#000000] font-semibold text-[32px] leading-[41px]'>Still have questions?</p>
                    <p className='text-[18px] text-[#000000] leading-[27px]'>We're here to help you!</p>
                    <button
                        className='w-[104px] h-[48px] p-2 bg-black rounded-lg'
                    >
                        <p className='text-[#fff] font-hanken font-medium leading-6 text-base'>Contact</p>
                    </button>
                </div>
            </div>
        </section>

        <section
            className='bg-[#00984C] h-[471px] flex justify-center py-[112px] items-center'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='w-[768px] flex flex-col items-center gap-6'>
                <p className='font-hanken text-[48px] text-center leading-[57px] text-[#FFFFFF]'>
                    Unlock new financial possibilities with us
                </p>
                <p className='font-inter text-[18px] leading-[27px] text-[#FFFFFF]'>
                    Explore our diverse saving options tailored for personal, business, and educational needs.  
                </p>
                <div className='flex items-center gap-4'>
                    <div className='bg-[#fff] w-[128px] h-[48px] cursor-pointer rounded-[8px] p-2 flex items-center justify-center'>
                        <p className='font-hanken text-[#000000] font-medium text-base leading-6'>Contact Us</p>
                    </div>
                    <div className='bg-[#000000] w-[225px] cursor-pointer h-[48px] rounded-[8px] flex items-center justify-center p-2'>
                        <p className='font-hanken font-medium text-[#fff]'>Download the LAPO App</p>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default SavingsPlan