import React from 'react'
import CountUp from 'react-countup';
import { CgArrowLongRight } from 'react-icons/cg'
import { MdArrowOutward } from 'react-icons/md'

import Gift from "../../../assets/png/gift.png"
import Curve from "../../../assets/png/curve_left.png"
import Help from "../../../assets/png/help.png"
import Wind from "../../../assets/png/wind.png"
import Plant from "../../../assets/png/plant.png"
import Recycle from "../../../assets/png/recycle.png"

import Student from "../../../assets/svg/student.svg"
import Toolbox from "../../../assets/svg/toolbox.svg"
import Biohazard from "../../../assets/svg/biohazard.svg"

const Overview = ({ handleChangeTab }) => {
  return (
    <div className='w-full'>
        <section
            className='flex flex-col items-center px-5 lg:px-[63px] pt-[36px] lg:pt-[110px] pb-[27px] gap-[40px] lg:gap-[102px]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <p className='font-hanken text-[32px] whitespace-nowrap lg:text-[54px] leading-[29px] text-[#2C3E50]'>Sustainability Statement</p>

            <div
                className='bg-[#F8F9FA] py-[22px] flex items-center lg:justify-center border-[4px] border-y-0 border-r-0 border-[#007BFF]'
            >
                <p className='text-[#333333] italic font-inter text-[20px] pl-[28.11px] text-center pr-[23.48px] leading-[29px]'>
                    "To be a sustainable Microfinance bank that supports its partners to become proactive 
                    participants in positively impacting the environment and society through best sustainable 
                    practices and meeting the economic and social needs of its clients while fulfilling the expectations 
                    of its stakeholders."
                </p>
            </div>
        </section>

        <section
            className='bg-[#fff] px-5 lg:px-[61px] py-[48px] lg:py-[112px] flex flex-col lg:flex-row gap-10 lg:gap-0  items-start'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='lg:w-[692px] h-auto lg:h-[704px] rounded-[25px] border-[8px] border-[#fff] border-y-0 border-l-0 relative bg-[#4380BE]'>
                <div className='absolute left-0 top-0'>
                    <img src={Curve} alt='Curve' className='rounded-tl-xl ' />
                </div>
                <div className='flex flex-col px-5 lg:px-[38px] pb-[49px] lg:pb-0 pt-[69px] gap-6'>
                    <div className='flex gap-4 flex-col'>
                        <div className='w-[84px] h-[32px] bg-[#E8FFF4] rounded-[6px] flex items-center justify-center'>
                            <p className='text-[#00954B] font-hanken font-medium text-sm leading-[15px]'>Overview</p>
                        </div>
                        <p className='text-[32px] leading-[120%] lg:text-[54px] font-hanken text-[#FFFFFF] lg:leading-[64px]'>People. Planet.<br /> Prosperity</p>
                    </div>
                    <p className='font-inter text-base leading-[150%] lg:text-[18px] lg:leading-[27px] text-[#FFFFFF] '>
                        At LAPO Microfinance Bank, we are dedicated to empowering low-income households by providing 
                        access to sustainable financial services that improve lives and drive economic growth. 
                        As an offshoot of the Lift Above Poverty Organization (LAPO), our journey began in the late 1980s 
                        with a mission to tackle financial exclusion, poor health, and social inequalities.
                        Today, we lead the way in microfinance development, integrating Environmental, Social, and 
                        Governance (ESG) principles into our operations. Through strategic initiatives and dedicated 
                        board oversight, we remain committed to fostering financial inclusion while promoting sustainability 
                        and long-term prosperity for individuals and communities.
                    </p>

                </div>

            </div>
            <div className='lg:w-[665px] lg:h-[704px] rounded-tr-[24px] rounded-br-[24px]'>
                <img src={Gift} alt="Gift" className='w-full h-full' />
            </div>
        </section>

        <section
            className='bg-[#FAFBFB] w-full h-auto lg:h-[211px] px-5 lg:px-[72px] py-[50px] grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[150px]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex flex-col items-center lg:items-start gap-[17px]'>
                <p className='font-hanken text-[#4380BE] font-semibold text-[24px] leading-[120%] lg:text-[48px] lg:leading-[57px]'>
                    <CountUp end={3} duration={3} suffix="k+" />
                </p>
                <p className='font-inter text-base leading-[150%] lg:text-[24px] text-[#454545] lg:leading-[36px]'>Scholarships</p>
            </div>
            <div className='flex flex-col items-center lg:items-start gap-[17px]'>
                <p className='font-hanken text-[#4380BE] font-semibold text-[24px] leading-[120%] lg:text-[48px] lg:leading-[57px]'>
                    <CountUp end={29} duration={3} suffix="k+" />
                </p>
                <p className='font-inter text-center lg:text-left text-base leading-[150%] lg:text-[24px] text-[#454545] lg:leading-[36px] lg:whitespace-nowrap'>solar products provided.</p>
            </div>
            <div className='flex flex-col items-center lg:items-start gap-[17px]'>
                <p className='font-hanken text-[#4380BE] font-semibold text-[24px] leading-[120%] lg:text-[48px] lg:leading-[57px]'>
                    <CountUp end={34} duration={3} suffix="+" />
                </p>
                <p className='font-inter text-base leading-[150%] lg:text-[24px] text-[#454545] lg:leading-[36px] lg:whitespace-nowrap'>Active Compaigns</p>
            </div>
            <div className='flex flex-col items-center lg:items-start gap-[17px]'>
                <p className='font-hanken text-[#4380BE] font-semibold text-[24px] leading-[120%] lg:text-[48px] lg:leading-[57px]'>
                    $<CountUp end={34} duration={3} suffix="M" /> 
                </p>
                <p className='font-inter leading-[150%] lg:text-[24px] text-[#454545] lg:leading-[36px] lg:whitespace-nowrap'>Charity in last year</p>
            </div>
        </section>

        <section
            className='flex flex-col pt-[96px] px-5 lg:px-[76px] pb-[158px] items-center gap-[45px] lg:gap-[69px]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex flex-col items-center gap-2'>
            <div className='w-[83px] h-[32px] bg-[#E8FFF4] rounded-[6px] flex items-center justify-center'>
                <p className='font-hanken text-sm font-medium leading-[15px] text-[#00954B]'>Footprint</p>
            </div>
            <p className='text-[32px] leading-[40px] text-center lg:text-[54px] text-[#000504] lg:leading-[54px]'>Creating a Better Tomorrow, Today.</p>
            </div>

            <div className='flex flex-col lg:flex-row gap-[40px] items-start'>
                <div className='lg:w-[632px] bg-[#4380BE17] h-auto lg:h-[373.36px] px-[31.5px] pt-[32px] pb-[47.98px] rounded-[15px] border-[#BACEE2]'>
                    <div className='flex flex-col gap-1'>
                        <p className='font-medium text-[#101828] text-[24px] lg:text-[32px] leading-[30px] lg:leading-[48px] font-hanken'>Putting People First</p>
                        <p className='font-inter text-base text-[#101828] leading-6'>
                            At LAPO Microfinance Bank, our commitment goes beyond financial services—we prioritize the 
                            well-being of our clients. Through transparency, responsible pricing, and ethical banking practices, 
                            we ensure fair and accessible financial solutions. We protect clients from over-indebtedness, 
                            design products that meet their needs, safeguard their data, and provide clear feedback channels 
                            to address concerns. By putting people first, we create a banking experience built on trust, 
                            empowerment, and long-term financial stability.
                        </p>
                    </div>
                    
                    <button
                        className='bg-[#4380BE] w-[180px] h-[48px] rounded-[10px] mt-[28px] flex items-center justify-between px-[22px] py-2.5'
                        type='button'
                        onClick={() => {handleChangeTab('social'); window.scrollTo(0, 0)}}
                    >
                    <p className='font-hanken font-bold text-[#FFFFFF] text-base'>Learn More</p>
                    <CgArrowLongRight className='w-5 h-5 text-[#fff]'/>
                    </button>
                </div>
                <div className='lg:w-[600px] w-full lg:h-[373.36px]'>
                    <img src={Help} alt="Help" className="rounded-[18.65px] h-[373.36px] w-full" />
                </div>
            </div>

            <div className='flex gap-[40px] flex-col lg:flex-row items-start'>
                <div className='hidden lg:block w-[600px] h-[373.36px]'>
                    <img src={Wind} alt="Wind" className="rounded-[18.65px] h-[373.36px] w-full" />
                </div>

                <div className='lg:w-[632px] bg-[#4380BE17] lg:h-[373.36px] px-[31.5px] pt-[32px] pb-[47.98px] rounded-[15px] border-[#BACEE2]'>
                    <div className='flex flex-col gap-1'>
                        <p className='font-medium text-[#101828] text-[24px] lg:text-[32px] leading-[30px] lg:leading-[48px] font-hanken'>Our Commitment to a Sustainable Future</p>
                        <p className='font-inter text-base text-[#101828] leading-6'>
                            At LAPO Microfinance Bank, we recognize the vital role of environmental sustainability in 
                            building a better future. We integrate eco-friendly practices into our operations, 
                            promote responsible resource management, and support initiatives that mitigate environmental impact. 
                            By fostering awareness and adopting sustainable banking solutions, we contribute to a greener planet 
                            while empowering communities to thrive responsibly.
                        </p>
                    </div>
            
                    <button
                        className='bg-[#4380BE] w-[180px] h-[48px] rounded-[10px] mt-[28px] flex items-center justify-between px-[22px] py-2.5'
                    >
                        <p className='font-hanken font-bold text-[#FFFFFF] text-base'>Learn More</p>
                        <CgArrowLongRight className='w-5 h-5 text-[#fff]'/>
                    </button>
                </div>

                <div className='lg:hidden w-full md:h-[373.36px]'>
                    <img src={Wind} alt="Wind" className="rounded-[18.65px] md:h-[373.36px] w-full" />
                </div>
            
            </div>

            <div className='flex gap-[40px] flex-col lg:flex-row items-start'>
                <div className='lg:w-[632px] bg-[#4380BE17] h-auto lg:h-[401.36px] px-[31.5px] pt-[32px] pb-[47.98px] rounded-[15px] border-[#BACEE2]'>
                    <div className='flex flex-col gap-1'>
                    <p className='font-medium text-[#101828] text-[24px] lg:text-[32px] leading-[30px] lg:leading-[48px] font-hanken'>Nigerian Sustainable Banking Principles (NSBP) & LAPO MfB</p>
                    <p className='font-inter text-base text-[#101828] leading-6'>
                        LAPO MfB has deepened its social performance approach by engaging in activities 
                        that enhance our client protection principles and support, such as Transparency and 
                        Responsible pricing. Others are Prevention of over-indebtedness, Appropriate product design, 
                        Privacy of clients' data, and feedback methods, giving LAPO MfB ways to address clients' 
                        complaints so that they can be served more effectively.
                    </p>
                    </div>
                    
                    <button
                        className='bg-[#4380BE] w-[180px] h-[48px] rounded-[10px] mt-[28px] flex items-center justify-between px-[22px] py-2.5'
                    >
                        <p className='font-hanken font-bold text-[#FFFFFF] text-base'>Learn More</p>
                        <CgArrowLongRight className='w-5 h-5 text-[#fff]'/>
                    </button>
                </div>
                <div className='lg:w-[600px] w-full lg:h-[401.36px] md:h-[373.36px]'>
                    <img src={Plant} alt="Plant" className="rounded-[18.65px] md:h-[373.36px] lg:h-[401.36px] w-full" />
                </div>
            </div>

            <div className='flex gap-[40px] flex-col lg:flex-row items-start'>
                <div className='hidden lg:block w-[600px] h-[353.36px]'>
                    <img src={Recycle} alt="Recycle" className="rounded-[18.65px] h-[353.36px] w-full" />
                </div>

                <div className='lg:w-[632px] bg-[#4380BE17] lg:h-[353.36px] px-[31.5px] pt-[32px] pb-[47.98px] rounded-[15px] border-[#BACEE2]'>
                    <div className='flex flex-col gap-1'>
                        <p className='font-medium text-[#101828] text-[24px] lg:text-[32px] leading-[30px] lg:leading-[48px] font-hanken'>Sustainable Development Goals</p>
                        <p className='font-inter text-base text-[#101828] leading-6'>
                            LAPO MfB has deepened its social performance approach by engaging in activities that enhance 
                            our client protection principles and support, such as Transparency and Responsible pricing. 
                            Others are Prevention of over-indebtedness, Appropriate product design, Privacy of clients' data, 
                            and feedback methods, giving LAPO MfB ways to address clients' complaints so that they can be served 
                            more effectively.
                        </p>
                    </div>
                    <button
                        className='bg-[#4380BE] w-[180px] h-[48px] rounded-[10px] mt-[28px] flex items-center justify-between px-[22px] py-2.5'
                    >
                        <p className='font-hanken font-bold text-[#FFFFFF] text-base'>Learn More</p>
                        <CgArrowLongRight className='w-5 h-5 text-[#fff]'/>
                    </button>
                </div>

                <div className='lg:hidden w-full md:h-[373.36px] h-[450px]'>
                    <img 
                        src="https://res.cloudinary.com/dairsbzlv/image/upload/v1741887469/recycle_mobile_ceu3dd.png" 
                        alt="Recycle" 
                        className="rounded-[18.65px] md:h-[373.36px] h-[450px] w-full" 
                    />
                </div>
            
            </div>
        </section>

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

export default Overview