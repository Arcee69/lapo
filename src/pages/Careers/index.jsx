import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { MdArrowOutward } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";

import Left from "../../assets/svg/left_brick.svg"
import Right from "../../assets/svg/right_brick.svg"
import Stars from "../../assets/svg/stars.svg"
import People from "../../assets/svg/people.svg"
import Integrity from "../../assets/svg/integrity.svg"
import Fun from "../../assets/svg/fun.svg"
import Passion from "../../assets/svg/passion.svg"
import Teamwork from "../../assets/svg/teamwork.svg"
import Excellence from "../../assets/svg/excellence.svg"
import Sustainability from "../../assets/svg/sustainability.svg"

import Box from '../../components/Box'

const Careers = () => {
    const [statusFilter, setStatusFilter] = useState("")
    const [search, setSearch] = useState("")
    const [location, setLocation] = useState("")


  return (
    <div className="w-full">
        <section
            className='bg-[#00984C] h-auto pt-[0px] relative overflow-hidden'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex items-center justify-between absolute top-24 z-10 -inset-x-4'>
                <img src={Left} alt='Left' className='' />
                <img src={Right} alt='Right' className='' />
            </div>

            <div className='flex flex-col items-center pt-[173px] pb-[10px]'>
                <div className='flex flex-col items-center gap-4 w-[657px] mx-auto'>
                    <div className='w-[211px] h-[28px] rounded-[6px] gap-1 flex items-center justify-center bg-[#FDF2E9]'>
                        <img src={Stars} alt='Stars' className='w-[13px] h-[13px]' />
                        <p className='text-xs font-hanken text-[#E78020]'>Empowering 5M+ Nigerians</p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p className='font-hanken text-[56px] text-center font-medium text-[#FFFFFF] leading-[56px]'>
                            Join Our Team
                        </p>
                        <p className='font-hanken text-[20px] leading-[30px] text-[#FFFFFF] text-center'>
                            As a development-focused organization, we believe in people empowerment by the provision 
                            of gainful employment and other social interventions.
                        </p>
                    </div>
                    <div className='flex items-center z-20 gap-[17px] mt-[30px]'>
              
                        <div className='flex items-center p-2 gap-1.5 w-[224px] rounded-lg bg-[#fff] '>
                            <CiSearch className='w-4 h-4 text-[#D0D5DD]'/>
                            <input 
                                className='text-[#667085] font-inter w-full text-base leading-6 outline-none'
                                placeholder='Search'
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                            />
                        </div>

                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="flex items-center justify-between p-2 w-[224px] outline-none border border-[#D0D5DD] rounded-lg"
                        >
                            {/* <option value="">Status</option> */}
                            <option value="true">Role</option>
                        </select>
                        <select
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="flex items-center justify-between p-2 w-[224px] outline-none border border-[#D0D5DD] rounded-lg"
                        >
                            {/* <option value="">Status</option> */}
                            <option value="true">Location</option>
                        </select>
           
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-[#fff] py-[112px] px-[75px] flex flex-col items-center gap-[45px]">

            <div className="flex flex-col items-center gap-[32px]">
                <div className="bg-[#E8FFF4] w-[110px] h-[32px] rounded-[6px] p-2 flex items-center">
                    <p className="font-hanken font-medium text-sm leading-[15px] text-[#00954B]">LAPO Savings</p>
                </div>
                <p className="font-hanken text-[#000000] text-[54px] leading-[46px]">Why Work at LAPO Microfinance Bank?</p>
            </div>

            <div className="flex items-start gap-[40px] w-full">
                <div className="flex flex-col px-[53px] w-[632px] rounded-lg border border-[#BACEE2] border-y-0 border-l-0 pt-[28px] pb-[44px]">
                    <p className="font-hanken text-[#00984C] font-semibold text-[32px] leading-[48px]">Career Development</p>
                    <p className="text-[#101828] font-inter text-base leading-6 w-[526px] font-[300]">
                        LAPO Microfinance Bank offers professional opportunities for career growth and advancement 
                        in personal skills set and ambitions. With us, you have a well-structured career pathway 
                        as well as access to resources for professional development and growth.
                    </p>
                </div>
                <div className="w-full">
                    <img 
                        src="https://res.cloudinary.com/dairsbzlv/image/upload/v1739903965/hands_small_wiow6d.png"
                        alt="Hands"
                        className="w-[600px] h-[463px]"
                    />
                </div>
            </div>

            <div className="flex items-start gap-[40px] w-full">
                <div className="w-full">
                    <img 
                        src="https://res.cloudinary.com/dairsbzlv/image/upload/v1739903965/hands_small_wiow6d.png"
                        alt="Hands"
                        className="w-[600px] h-[463px]"
                    />
                </div>
                <div className="flex flex-col px-[53px] w-[632px] border border-[#BACEE2] border-y-0 border-l-0 pt-[28px] pb-[44px]">
                    <p className="font-hanken text-[#00984C] font-semibold text-[32px] leading-[48px]">LAPO Institute for Microfinance and Management Studies</p>
                    <p className="text-[#101828] font-inter text-base leading-6 w-[526px] font-[300]">
                        LAPO Microfinance Bank recognizes the importance of leveraging a highly skilled workforce to 
                        achieve its strategic and operational goals. Through the LAPO Institute - a sister organization 
                        of the bank – we provide tailor-made capacity development programs and research for our people. 
                        The Institute is approved by the Federal Ministry of Education to function as a Tertiary 
                        institution.
                    </p>
                </div>
                
            </div>

        </section>

        <section
            className='flex flex-col items-center justify-center bg-[#fff] px-[72px] py-[112px] gap-[48px]'
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
        >
            <p className='text-[#000000] font-hanken text-[48px] leading-[57px]'>Core Values</p>
            <div className='flex flex-col items-center gap-[55px] '>
                <div className='flex items-start justify-center'>

                    <Box 
                        className="w-[324px] h-[210px] border border-[#F99650] border-dashed border-t-0 border-b-0 border-r-0 p-5"
                        img={People}
                        alt="People"
                        title="People First"
                        content="Our customers, employees, and communities are at the heart of everything we do."
                    /> 

                    <Box 
                        className="w-[324px] h-[210px] border border-[#F99650] border-dashed border-t-0 border-b-0 border-r-0 p-5"
                        img={Integrity}
                        alt="Integrity"
                        title="Integrity"
                        content=" We believe in doing the right thing—always. Transparency, honesty, and strong ethical standards guide every decision and interaction."
                    />

                    <Box 
                        className="w-[324px] h-[210px] border border-[#F99650] border-dashed border-t-0 border-b-0 border-r-0 p-5"
                        img={Sustainability}
                        alt="Sustainability"
                        title="Commitment to Sustainability"
                        content="We are devoted to practices that promote long-term growth and environmental stewardship, ensuring a better future for all. "
                    />

                    <Box 
                        className="w-[324px] h-[210px] border border-[#F99650] border-dashed border-t-0 border-b-0 border-r-0 p-5"
                        img={Excellence}
                        alt="Excellence"
                        title="Excellence"
                        content="Every product, service, and interaction is an opportunity to exceed expectations."
                    />

                </div>

                <div className='flex justify-center px-[234px] items-start'>

                    <Box 
                        className="w-[324px] h-[210px] border border-[#F99650] border-dashed border-t-0 rounded-[9px] p-5"
                        img={Passion}
                        alt="Passion"
                        title="Passion & Commitment"
                        content="We are passionately committed to continuous improvement, driving us to innovate and excel in every endeavor."
                    />

                    <Box 
                        className="w-[324px] h-[210px] border border-[#F99650] border-dashed border-t-0 rounded-[9px] p-5"
                        img={Teamwork}
                        alt="Teamwork"
                        title="Enterprise & Teamwork"
                        content="By fostering a collaborative culture, we harness the power of collective expertise to drive our organization forward."
                    />

                    <Box 
                        className="w-[324px] h-[210px] border border-[#F99650] border-dashed border-t-0 rounded-[9px] p-5"
                        img={Fun}
                        alt="Fun"
                        title="Fun & Excitement"
                        content="A vibrant and engaging environment is key to sparking innovation and ensuring that every milestone is a shared victory."
                    />

                </div>

            </div>
        </section>

        <section className="bg-[#fff] py-[112px] px-[64px] flex flex-col items-center gap-5">
            <div className="flex flex-col items-center w-[768px] mx-auto gap-4">
                <p className="font-semibold text-[#101828] font-hanken text-[36px] leading-[44px]">Open positions</p>
                <p className="text-[#667085] font-inter text-center text-[20px] leading-[30px]">
                    Our philosophy is simple — hire a team of diverse, passionate people and foster 
                    a culture that empowers you to do you best work.
                </p>
            </div>

            <div className="border border-[#EAECF0] p-6 w-[768px] mx-auto h-[144px] rounded-lg flex items-start justify-between">
                <div className="flex flex-col gap-2">
                    <p className="text-[#F99650] font-inter font-semibold text-sm leading-[20px]">Design</p>
                    <p className="text-[#101828] font-inter font-medium text-[18px] leading-[28px]">Product Designer</p>
                    <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                            <CiLocationOn className="w-5 h-5 text-[#667085]" />
                            <p className="text-[#667085] font-inter font-medium text-base">Remote</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoTimeOutline className="w-5 h-5 text-[#667085]" />
                            <p className="text-[#667085] font-inter font-medium text-base">Full-time</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-[#F99650] font-inter font-medium text-base leading-6">View job</p>
                    <MdArrowOutward className="text-[#F99650] w-5 h-5" />
                </div>
            </div>

            <div className="border border-[#EAECF0] p-6 w-[768px] mx-auto h-[144px] rounded-lg flex items-start justify-between">
                <div className="flex flex-col gap-2">
                    <p className="text-[#F99650] font-inter font-semibold text-sm leading-[20px]">Software Development</p>
                    <p className="text-[#101828] font-inter font-medium text-[18px] leading-[28px]">Engineering Manager</p>
                    <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                            <CiLocationOn className="w-5 h-5 text-[#667085]" />
                            <p className="text-[#667085] font-inter font-medium text-base">Remote</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoTimeOutline className="w-5 h-5 text-[#667085]" />
                            <p className="text-[#667085] font-inter font-medium text-base">Full-time</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-[#F99650] font-inter font-medium text-base leading-6">View job</p>
                    <MdArrowOutward className="text-[#F99650] w-5 h-5" />
                </div>
            </div>

            <div className="border border-[#EAECF0] p-6 w-[768px] mx-auto h-[144px] rounded-lg flex items-start justify-between">
                <div className="flex flex-col gap-2">
                    <p className="text-[#F99650] font-inter font-semibold text-sm leading-[20px]">Customer Success</p>
                    <p className="text-[#101828] font-inter font-medium text-[18px] leading-[28px]">Customer Success Manager</p>
                    <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                            <CiLocationOn className="w-5 h-5 text-[#667085]" />
                            <p className="text-[#667085] font-inter font-medium text-base">Remote</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoTimeOutline className="w-5 h-5 text-[#667085]" />
                            <p className="text-[#667085] font-inter font-medium text-base">Full-time</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-[#F99650] font-inter font-medium text-base leading-6">View job</p>
                    <MdArrowOutward className="text-[#F99650] w-5 h-5" />
                </div>
            </div>

            <div className="border border-[#EAECF0] p-6 w-[768px] mx-auto h-[144px] rounded-lg flex items-start justify-between">
                <div className="flex flex-col gap-2">
                    <p className="text-[#F99650] font-inter font-semibold text-sm leading-[20px]">Sales</p>
                    <p className="text-[#101828] font-inter font-medium text-[18px] leading-[28px]">Account Executive</p>
                    <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                            <CiLocationOn className="w-5 h-5 text-[#667085]" />
                            <p className="text-[#667085] font-inter font-medium text-base">Remote</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoTimeOutline className="w-5 h-5 text-[#667085]" />
                            <p className="text-[#667085] font-inter font-medium text-base">Full-time</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-[#F99650] font-inter font-medium text-base leading-6">View job</p>
                    <MdArrowOutward className="text-[#F99650] w-5 h-5" />
                </div>
            </div>

            <div className="border border-[#EAECF0] p-6 w-[768px] mx-auto h-[144px] rounded-lg flex items-start justify-between">
                <div className="flex flex-col gap-2">
                    <p className="text-[#F99650] font-inter font-semibold text-sm leading-[20px]">Marketing</p>
                    <p className="text-[#101828] font-inter font-medium text-[18px] leading-[28px]">SEO Marketing Manager</p>
                    <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                            <CiLocationOn className="w-5 h-5 text-[#667085]" />
                            <p className="text-[#667085] font-inter font-medium text-base">Remote</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoTimeOutline className="w-5 h-5 text-[#667085]" />
                            <p className="text-[#667085] font-inter font-medium text-base">Full-time</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-[#F99650] font-inter font-medium text-base leading-6">View job</p>
                    <MdArrowOutward className="text-[#F99650] w-5 h-5" />
                </div>
            </div>

        </section>

        
        <section
            className='bg-[#FBFAF9] px-[80px] py-[96px] flex items-center gap-[64px]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex flex-col gap-6 w-[576px]'>
                <p className='font-semibold text-[48px] whitespace-nowrap leading-[60px] text-[#101828] font-hanken'>
                    Premium customer support
                </p>
                <p className='text-[#667085] font-inter text-[20px] leading-[30px]'>
                    Enjoy the personalized service you need at LAPO Microfinance Bank, 
                    including long-term business financial planning and extended-hours 
                    access to our specialized business service team.
                </p>
                <ul className='pl-5 list-disc text-[#6A6A6A] text-[20px] font-hanken leading-[25px]'>
                    <li>One combined monthly statement for all of your business accounts</li>
                    <li>Extended-hours access to our specialized business service team</li>
                </ul>
                <button
                    className='w-[126px] h-[48px] rounded-lg flex items-center justify-center bg-[#E78020]'
                >
                    <p className='font-medium text-base leading-6 font-inter text-[#FFFFFF]'>Contact Us</p>
                </button>
            </div>
            <div className='w-[576px]'>
                <img 
                    src="https://res.cloudinary.com/dairsbzlv/image/upload/v1739908635/premium_ufkdlf.png"
                    alt="Premium" 
                    className='' 
                />
            </div>
        </section>

    </div>
  )
}

export default Careers