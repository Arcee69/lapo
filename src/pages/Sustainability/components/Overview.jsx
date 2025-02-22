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
            className='flex flex-col items-center px-[63px] pt-[110px] pb-[27px] gap-[102px]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <p className='font-hanken text-[54px] leading-[29px] text-[#2C3E50]'>Sustainability Statement</p>

            <div
                className='bg-[#F8F9FA] py-[22px] flex items-center justify-center border-[4px] border-y-0 border-r-0 border-[#007BFF]'
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
            className='bg-[#fff] px-[61px] py-[112px] flex items-start'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='w-[692px] h-[704px] rounded-[25px] border-[8px] border-[#fff] border-y-0 border-l-0 relative bg-[#4380BE]'>
            <div className='absolute left-0 top-0'>
                <img src={Curve} alt='Curve' className='rounded-tl-xl ' />
            </div>
            <div className='flex flex-col px-[38px] pt-[69px] gap-6'>
                <div className='flex gap-4 flex-col'>
                    <div className='w-[84px] h-[32px] bg-[#E8FFF4] rounded-[6px] flex items-center justify-center'>
                        <p className='text-[#00954B] font-hanken font-medium text-sm leading-[15px]'>Overview</p>
                    </div>
                    <p className='text-[54px] font-hanken text-[#FFFFFF] leading-[64px]'>People. Planet.<br /> Prosperity</p>
                </div>
                <p className='font-inter text-[18px] leading-[27px] text-[#FFFFFF] '>
                LAPO Microfinance Bank Limited is a pro-poor premium Microfinance Bank committed 
                to improving lives of low income households through creation of access to a range 
                of financial services delivered on a sustainable basis. It is an offshoot of Lift 
                Above Poverty Organization (LAPO) a non-profit community development organization 
                initiated in the late 1980s to address the challenges of lack of access to finance, 
                poor health, and social exclusion. Although the Bank has metamorphosed as the forerunner 
                in the microfinance development in the country it was able to drive this process through 
                its initiation and implementation of a board committee set up in 201 to provide guidance, 
                mitigation and drive in the field of Environment, Social & Governance; also known as Sustainability
                </p>

            </div>

            </div>
            <div className='w-[665px] h-[704px] rounded-tr-[24px] rounded-br-[24px]'>
            <img src={Gift} alt="Gift" className='w-full h-full' />
            </div>
        </section>

        <section
            className='bg-[#FAFBFB] w-full h-[211px] px-[72px] py-[50px] flex items-center gap-[150px]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex flex-col gap-[17px]'>
            <p className='font-hanken text-[#4380BE] font-semibold text-[48px] leading-[57px]'>
                <CountUp end={3} duration={3} suffix="k+" />
            </p>
            <p className='font-inter text-[24px] text-[#454545] leading-[36px]'>Scholarships</p>
            </div>
            <div className='flex flex-col gap-[17px]'>
            <p className='font-hanken text-[#4380BE] font-semibold text-[48px] leading-[57px]'>
                <CountUp end={29} duration={3} suffix="k+" />
            </p>
            <p className='font-inter text-[24px] text-[#454545] whitespace-nowrap leading-[36px]'> solar products provided.</p>
            </div>
            <div className='flex flex-col gap-[17px]'>
            <p className='font-hanken text-[#4380BE] font-semibold text-[48px] leading-[57px]'>
                <CountUp end={34} duration={3} suffix="+" />
            </p>
            <p className='font-inter text-[24px] text-[#454545] whitespace-nowrap leading-[36px]'>Active Compaigns</p>
            </div>
            <div className='flex flex-col gap-[17px]'>
            <p className='font-hanken text-[#4380BE] font-semibold text-[48px] leading-[57px]'>
                $<CountUp end={34} duration={3} suffix="M" /> 
            </p>
            <p className='font-inter text-[24px] text-[#454545] whitespace-nowrap leading-[36px]'>Charity in last year</p>
            </div>
        </section>

        <section
            className='flex flex-col pt-[96px] px-[76px] pb-[158px] items-center gap-[69px]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex flex-col items-center gap-2'>
            <div className='w-[83px] h-[32px] bg-[#E8FFF4] rounded-[6px] flex items-center justify-center'>
                <p className='font-hanken text-sm font-medium leading-[15px] text-[#00954B]'>Footprint</p>
            </div>
            <p className='text-[54px] text-[#000504] leading-[54px]'>Creating a Better Tomorrow, Today.</p>
            </div>

            <div className='flex gap-[40px] items-start'>
            <div className='w-[632px] bg-[#4380BE17] h-[788px] px-[31.5px] pt-[32px] pb-[47.98px] rounded-[15px] border-[#BACEE2]'>
                <div className='flex flex-col gap-1'>
                <p className='font-medium text-[#101828] text-[32px] leading-[48px] font-hanken'>Social Dimension</p>
                <p className='font-inter text-base text-[#101828] leading-6'>
                    LAPO MfB has deepened its social performance approach by engaging in activities that enhance 
                    our client protection principles and support, such as Transparency and Responsible pricing. 
                    Others are Prevention of over-indebtedness, Appropriate product design, Privacy of clients' data, 
                    and feedback methods, giving LAPO MfB ways to address clients' complaints so that they can be served 
                    more effectively.
                </p>
                </div>
                <div className='bg-[#FFFFFF] flex flex-col mt-[22px]'>

                <div className='flex items-center justify-between py-4 px-5 border border-x-0 border-t-0 border-b-[#34423B4D]'>
                    <div className='flex gap-3 items-center'>
                    <img src={Student} alt="Student" className='w-5 h-5' />
                    <p className='font-nunito text-[#000000] font-semibold text-[18px]'>LAPO Scholarship Scheme.</p>
                    </div>
                    <MdArrowOutward className='w-4 h-4 text-[#000000]' />
                </div>

                <div className='flex items-center justify-between py-4 px-5 border border-x-0 border-t-0 border-b-[#34423B4D]'>
                    <div className='flex gap-3 items-center'>
                    <img src={Toolbox} alt="Toolbox" className='w-5 h-5' />
                    <p className='font-nunito text-[#000000] font-semibold text-[18px]'>Skills Acquisition.</p>
                    </div>
                    <MdArrowOutward className='w-4 h-4 text-[#000000]' />
                </div>

                <div className='flex items-center justify-between py-4 px-5 border border-x-0 border-t-0 border-b-[#34423B4D]'>
                    <div className='flex gap-3 items-center'>
                    <img src={Biohazard} alt="Biohazard" className='w-5 h-5' />
                    <p className='font-nunito text-[#000000] font-semibold text-[18px]'>Health Intervention</p>
                    </div>
                    <MdArrowOutward className='w-4 h-4 text-[#000000]' />
                </div>

                <div className='flex items-center justify-between py-4 px-5 border border-x-0 border-t-0 border-b-[#34423B4D]'>
                    <div className='flex gap-3 items-center'>
                    <img src={Biohazard} alt="Biohazard" className='w-5 h-5' />
                    <p className='font-nunito text-[#000000] font-semibold text-[18px]'>Integration Programme</p>
                    </div>
                    <MdArrowOutward className='w-4 h-4 text-[#000000]' />
                </div>

                <div className='flex items-center justify-between py-4 px-5 border border-x-0 border-t-0 border-b-[#34423B4D]'>
                    <div className='flex gap-3 items-center'>
                    <img src={Biohazard} alt="Biohazard" className='w-5 h-5' />
                    <p className='font-nunito text-[#000000] font-semibold text-[18px]'>Health Awareness</p>
                    </div>
                    <MdArrowOutward className='w-4 h-4 text-[#000000]' />
                </div>

                <div className='flex items-center justify-between py-4 px-5 border border-x-0 border-t-0 border-b-[#34423B4D]'>
                    <div className='flex gap-3 items-center'>
                    <img src={Biohazard} alt="Biohazard" className='w-5 h-5' />
                    <p className='font-nunito text-[#000000] font-semibold text-[18px]'>Health Awareness</p>
                    </div>
                    <MdArrowOutward className='w-4 h-4 text-[#000000]' />
                </div>

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
            <div className='w-[600px] h-[780px]'>
                <img src={Help} alt="Help" className="" />
            </div>
            </div>

            <div className='flex gap-[40px] items-start'>
            <div className='w-[600px] h-[526px]'>
                <img src={Wind} alt="Wind" className="" />
            </div>

            <div className='w-[632px] bg-[#4380BE17] h-[526px] px-[31.5px] pt-[32px] pb-[47.98px] rounded-[15px] border-[#BACEE2]'>
                <div className='flex flex-col gap-1'>
                <p className='font-medium text-[#101828] text-[32px] leading-[48px] font-hanken'>Environment Dimension.</p>
                <p className='font-inter text-base text-[#101828] leading-6'>
                    LAPO MfB has deepened its social performance approach by engaging in activities that enhance 
                    our client protection principles and support, such as Transparency and Responsible pricing. 
                    Others are Prevention of over-indebtedness, Appropriate product design, Privacy of clients' data, 
                    and feedback methods, giving LAPO MfB ways to address clients' complaints so that they can be served 
                    more effectively.
                </p>
                </div>
                <div className='bg-[#FFFFFF] flex flex-col mt-[22px]'>

                <div className='flex items-center justify-between py-4 px-5 border border-x-0 border-t-0 border-b-[#34423B4D]'>
                    <div className='flex gap-3 items-center'>
                    <img src={Student} alt="Student" className='w-5 h-5' />
                    <p className='font-nunito text-[#000000] font-semibold text-[18px]'>International sustainability conference</p>
                    </div>
                    <MdArrowOutward className='w-4 h-4 text-[#000000]' />
                </div>

                <div className='flex items-center justify-between py-4 px-5 border border-x-0 border-t-0 border-b-[#34423B4D]'>
                    <div className='flex gap-3 items-center'>
                    <img src={Toolbox} alt="Toolbox" className='w-5 h-5' />
                    <p className='font-nunito text-[#000000] font-semibold text-[18px]'>Green Clean Lending.</p>
                    </div>
                    <MdArrowOutward className='w-4 h-4 text-[#000000]' />
                </div>

                </div>
                <button
                className='bg-[#4380BE] w-[180px] h-[48px] rounded-[10px] mt-[28px] flex items-center justify-between px-[22px] py-2.5'
                >
                <p className='font-hanken font-bold text-[#FFFFFF] text-base'>Learn More</p>
                <CgArrowLongRight className='w-5 h-5 text-[#fff]'/>
                </button>
            </div>
            
            </div>

            <div className='flex gap-[40px] items-start'>
            <div className='w-[632px] bg-[#4380BE17] h-[835px] px-[31.5px] pt-[32px] pb-[47.98px] rounded-[15px] border-[#BACEE2]'>
                <div className='flex flex-col gap-1'>
                <p className='font-medium text-[#101828] text-[32px] leading-[48px] font-hanken'>Nigerian Sustainable Banking Principles (NSBP) & LAPO MfB</p>
                <p className='font-inter text-base text-[#101828] leading-6'>
                    LAPO MfB has deepened its social performance approach by engaging in activities that enhance 
                    our client protection principles and support, such as Transparency and Responsible pricing. 
                    Others are Prevention of over-indebtedness, Appropriate product design, Privacy of clients' data, 
                    and feedback methods, giving LAPO MfB ways to address clients' complaints so that they can be served 
                    more effectively.
                </p>
                </div>
                <div className='bg-[#FFFFFF] flex flex-col mt-[22px]'>

                <div className='flex items-center justify-between py-4 px-5 border border-x-0 border-t-0 border-b-[#34423B4D]'>
                    <div className='flex gap-3 items-center'>
                    <img src={Student} alt="Student" className='w-5 h-5' />
                    <p className='font-nunito text-[#000000] font-semibold text-[18px]'>LAPO Scholarship Scheme.</p>
                    </div>
                    <MdArrowOutward className='w-4 h-4 text-[#000000]' />
                </div>

                <div className='flex items-center justify-between py-4 px-5 border border-x-0 border-t-0 border-b-[#34423B4D]'>
                    <div className='flex gap-3 items-center'>
                    <img src={Toolbox} alt="Toolbox" className='w-5 h-5' />
                    <p className='font-nunito text-[#000000] font-semibold text-[18px]'>Skills Acquisition.</p>
                    </div>
                    <MdArrowOutward className='w-4 h-4 text-[#000000]' />
                </div>

                <div className='flex items-center justify-between py-4 px-5 border border-x-0 border-t-0 border-b-[#34423B4D]'>
                    <div className='flex gap-3 items-center'>
                    <img src={Biohazard} alt="Biohazard" className='w-5 h-5' />
                    <p className='font-nunito text-[#000000] font-semibold text-[18px]'>Health Intervention</p>
                    </div>
                    <MdArrowOutward className='w-4 h-4 text-[#000000]' />
                </div>

                <div className='flex items-center justify-between py-4 px-5 border border-x-0 border-t-0 border-b-[#34423B4D]'>
                    <div className='flex gap-3 items-center'>
                    <img src={Biohazard} alt="Biohazard" className='w-5 h-5' />
                    <p className='font-nunito text-[#000000] font-semibold text-[18px]'>Integration Programme</p>
                    </div>
                    <MdArrowOutward className='w-4 h-4 text-[#000000]' />
                </div>

                <div className='flex items-center justify-between py-4 px-5 border border-x-0 border-t-0 border-b-[#34423B4D]'>
                    <div className='flex gap-3 items-center'>
                    <img src={Biohazard} alt="Biohazard" className='w-5 h-5' />
                    <p className='font-nunito text-[#000000] font-semibold text-[18px]'>Health Awareness</p>
                    </div>
                    <MdArrowOutward className='w-4 h-4 text-[#000000]' />
                </div>

                <div className='flex items-center justify-between py-4 px-5 border border-x-0 border-t-0 border-b-[#34423B4D]'>
                    <div className='flex gap-3 items-center'>
                    <img src={Biohazard} alt="Biohazard" className='w-5 h-5' />
                    <p className='font-nunito text-[#000000] font-semibold text-[18px]'>Health Awareness</p>
                    </div>
                    <MdArrowOutward className='w-4 h-4 text-[#000000]' />
                </div>

                </div>
                <button
                className='bg-[#4380BE] w-[180px] h-[48px] rounded-[10px] mt-[28px] flex items-center justify-between px-[22px] py-2.5'
                >
                <p className='font-hanken font-bold text-[#FFFFFF] text-base'>Learn More</p>
                <CgArrowLongRight className='w-5 h-5 text-[#fff]'/>
                </button>
            </div>
            <div className='w-[600px] h-[835px]'>
                <img src={Plant} alt="Plant" className="" />
            </div>
            </div>

            <div className='flex gap-[40px] items-start'>
            <div className='w-[600px] h-[780px]'>
                <img src={Recycle} alt="Recycle" className="" />
            </div>

            <div className='w-[632px] bg-[#4380BE17] h-[788px] px-[31.5px] pt-[32px] pb-[47.98px] rounded-[15px] border-[#BACEE2]'>
                <div className='flex flex-col gap-1'>
                <p className='font-medium text-[#101828] text-[32px] leading-[48px] font-hanken'>Sustainable Development Goals</p>
                <p className='font-inter text-base text-[#101828] leading-6'>
                    LAPO MfB has deepened its social performance approach by engaging in activities that enhance 
                    our client protection principles and support, such as Transparency and Responsible pricing. 
                    Others are Prevention of over-indebtedness, Appropriate product design, Privacy of clients' data, 
                    and feedback methods, giving LAPO MfB ways to address clients' complaints so that they can be served 
                    more effectively.
                </p>
                </div>
                <div className='bg-[#FFFFFF] flex flex-col mt-[22px]'>

                <div className='flex items-center justify-between py-4 px-5 border border-x-0 border-t-0 border-b-[#34423B4D]'>
                    <div className='flex gap-3 items-center'>
                    <img src={Student} alt="Student" className='w-5 h-5' />
                    <p className='font-nunito text-[#000000] font-semibold text-[18px]'>LAPO Scholarship Scheme.</p>
                    </div>
                    <MdArrowOutward className='w-4 h-4 text-[#000000]' />
                </div>

                <div className='flex items-center justify-between py-4 px-5 border border-x-0 border-t-0 border-b-[#34423B4D]'>
                    <div className='flex gap-3 items-center'>
                    <img src={Toolbox} alt="Toolbox" className='w-5 h-5' />
                    <p className='font-nunito text-[#000000] font-semibold text-[18px]'>Skills Acquisition.</p>
                    </div>
                    <MdArrowOutward className='w-4 h-4 text-[#000000]' />
                </div>

                <div className='flex items-center justify-between py-4 px-5 border border-x-0 border-t-0 border-b-[#34423B4D]'>
                    <div className='flex gap-3 items-center'>
                    <img src={Biohazard} alt="Biohazard" className='w-5 h-5' />
                    <p className='font-nunito text-[#000000] font-semibold text-[18px]'>Health Intervention</p>
                    </div>
                    <MdArrowOutward className='w-4 h-4 text-[#000000]' />
                </div>

                <div className='flex items-center justify-between py-4 px-5 border border-x-0 border-t-0 border-b-[#34423B4D]'>
                    <div className='flex gap-3 items-center'>
                    <img src={Biohazard} alt="Biohazard" className='w-5 h-5' />
                    <p className='font-nunito text-[#000000] font-semibold text-[18px]'>Integration Programme</p>
                    </div>
                    <MdArrowOutward className='w-4 h-4 text-[#000000]' />
                </div>

                <div className='flex items-center justify-between py-4 px-5 border border-x-0 border-t-0 border-b-[#34423B4D]'>
                    <div className='flex gap-3 items-center'>
                    <img src={Biohazard} alt="Biohazard" className='w-5 h-5' />
                    <p className='font-nunito text-[#000000] font-semibold text-[18px]'>Health Awareness</p>
                    </div>
                    <MdArrowOutward className='w-4 h-4 text-[#000000]' />
                </div>

                <div className='flex items-center justify-between py-4 px-5 border border-x-0 border-t-0 border-b-[#34423B4D]'>
                    <div className='flex gap-3 items-center'>
                    <img src={Biohazard} alt="Biohazard" className='w-5 h-5' />
                    <p className='font-nunito text-[#000000] font-semibold text-[18px]'>Health Awareness</p>
                    </div>
                    <MdArrowOutward className='w-4 h-4 text-[#000000]' />
                </div>

                </div>
                <button
                className='bg-[#4380BE] w-[180px] h-[48px] rounded-[10px] mt-[28px] flex items-center justify-between px-[22px] py-2.5'
                >
                <p className='font-hanken font-bold text-[#FFFFFF] text-base'>Learn More</p>
                <CgArrowLongRight className='w-5 h-5 text-[#fff]'/>
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

export default Overview