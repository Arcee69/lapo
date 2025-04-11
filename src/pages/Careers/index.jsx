import React, { useState, useEffect } from 'react'
import { CiSearch } from 'react-icons/ci'
import { MdArrowOutward } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import axios from "axios"

import BackScreen from "../../assets/png/back_screen.png"
import FrontScreen from "../../assets/png/front_screen.png"

import Left from "../../assets/svg/left_brick.svg"
import Right from "../../assets/svg/right_brick.svg"
import Stars from "../../assets/svg/stars.svg"
import Google from "../../assets/svg/google.svg"
import Apple from "../../assets/svg/apple.svg"


import People from "../../assets/svg/people.svg"
import Integrity from "../../assets/svg/integrity.svg"
import Fun from "../../assets/svg/fun.svg"
import Passion from "../../assets/svg/passion.svg"
import Teamwork from "../../assets/svg/teamwork.svg"
import Excellence from "../../assets/svg/excellence.svg"
import Sustainability from "../../assets/svg/sustainability.svg"

import Box from '../../components/Box'

const Careers = () => {
    const [roleFilter, setRoleFilter] = useState("")
    const [statesOptions, setStatesOptions] = useState([]);
    const [search, setSearch] = useState("")
    const [location, setLocation] = useState("")
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(false)
    const [prevPageUrl, setPrevPageUrl] = useState(null);
    const [nextPageUrl, setNextPageUrl] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const URL = import.meta.env.VITE_APP_API_URL

    const getStates = async () => {
        try {
            const res = await axios.get(`${URL}/v1/state`)
            setStatesOptions(res?.data.data)
        } catch (err) {
            console.log(err, "err")
        }
    }

    useEffect(() => {
        getStates()
    }, [])

    const items = [
        {
          image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1741880399/soccer_team_iupx8s.png',
          title: 'Extracurricular Activities'
        },
        {
          image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1741880397/culture_wbogxj.png',
          title: 'Inclusive Culture'
        },
        {
          image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1741880396/capacity_hickpv.png',
          title: 'Capacity Building'
        }
      ];


    const fetchJobs = async (url = `${URL}/v1/job`) => {
        setLoading(true)
        try {
          const res = await axios.get(url);
          const data = res.data;
    
          setJobs(data?.data || []);
          setPrevPageUrl(data.pagination?.prev_page_url);
          setNextPageUrl(data.pagination?.next_page_url);
          setCurrentPage(data.pagination?.current_page);
        } catch (err) {
          console.error(err);
        } finally {
            setLoading(false)
        }
      };


      const filteredJobs = jobs.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase() || "");
        const matchesLocation = item.state.name.toLowerCase().includes(location.toLowerCase() || "");
        const matchesRole = item.role.toLowerCase().includes(roleFilter.toLowerCase() || "");

        return matchesSearch && matchesLocation && matchesRole
      })
    
      useEffect(() => {
        fetchJobs();
      }, []);
    
    const handlePrevPage = () => {
        if (prevPageUrl) fetchJobs(prevPageUrl);
    };
    
    const handleNextPage = () => {
        if (nextPageUrl) fetchJobs(nextPageUrl);
    };


  return (
    <div className="w-full">
        <section
            className='bg-[#00984C] h-auto pt-[0px] px-5 lg:px-0 relative overflow-hidden'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='hidden lg:flex items-center justify-between absolute top-24 z-10 -inset-x-4'>
                <img src={Left} alt='Left' className='' />
                <img src={Right} alt='Right' className='' />
            </div>

            <div className='flex flex-col items-center pt-[173px] pb-[81px]'>
                <div className='flex flex-col items-center gap-4 lg:w-[657px] mx-auto'>
                    <div className='w-[211px] h-[28px] rounded-[6px] gap-1 flex items-center justify-center bg-[#FDF2E9]'>
                        <img src={Stars} alt='Stars' className='w-[13px] h-[13px]' />
                        <p className='text-xs font-hanken text-[#E78020]'>Empowering 5M+ Nigerians</p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p className='font-hanken text-[32px] leading-[32px] lg:text-[56px] text-center font-medium text-[#FFFFFF] lg:leading-[56px]'>
                            Join Our Team
                        </p>
                        <p className='font-inter text-base lg:text-[20px] leading-[30px] text-[#FFFFFF] text-center'>
                            As a development-focused organization, we believe in people empowerment by the provision 
                            of gainful employment and other social interventions.
                        </p>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center z-20 gap-[17px] mt-[30px]'>
              
                        <div className='flex items-center p-2 gap-1.5 lg:w-[224px] rounded-lg bg-[#fff] '>
                            <CiSearch className='w-4 h-4 text-[#D0D5DD]'/>
                            <input 
                                className='text-[#667085] font-inter w-full text-base leading-6 outline-none'
                                placeholder='Search'
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                            />
                        </div>

                        <select
                            value={roleFilter}
                            onChange={(e) => setRoleFilter(e.target.value)}
                            className="flex items-center justify-between p-2 w-full lg:w-[224px] outline-none border border-[#D0D5DD] rounded-lg"
                        >
                            <option value="">Role</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Sales">Sales</option>
                            <option value="Product">Product</option>
                            <option value="Operation">Operation</option>
                        </select>
                        <select
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="flex items-center justify-between p-2 w-full lg:w-[224px] outline-none border border-[#D0D5DD] rounded-lg"
                        >
                            <option value="">Location</option>
                            {
                                statesOptions?.map((item) => (
                                    <option key={item.id} value={item.name}>{item.name}</option> 
                                ))
                            }
                        </select>
           
                    </div>
                </div>
            </div>
        </section>

        
        <section className="bg-[#fff] py-[48px] lg:py-[112px] px-5 lg:px-[64px] flex flex-col items-center gap-5">
            <div className="flex flex-col items-center lg:w-[768px] mx-auto gap-4">
                <p className="font-semibold text-[#101828] font-hanken text-[24px] lg:text-[36px] leading-[44px]">Open positions</p>
                <p className="text-[#667085] font-inter text-center text-base leading-[100%] lg:text-[20px] lg:leading-[30px]">
                    Our philosophy is simple — hire a team of diverse, passionate people and foster 
                    a culture that empowers you to do you best work.
                </p>
            </div>

            {/* <div className="flex flex-col">

            </div> */}

            {
                loading ? 
                <p className='text-2xl font-inter text-[#000] text-center font-semibold mt-10'>Loading...</p>
                : filteredJobs.length > 0 ?
                filteredJobs?.map((item) => (
                    <div className="border border-[#EAECF0] p-6 w-full lg:w-[768px] mx-auto h-[144px] rounded-lg flex items-start justify-between">
                        <div className="flex flex-col gap-2">
                            <p className="text-[#F99650] font-inter font-semibold text-sm leading-[20px]">{item.role}</p>
                            <p className="text-[#101828] font-inter font-medium text-[18px] leading-[28px]">{item.title}</p>
                            <div className="flex gap-6">
                                <div className="flex items-center gap-2">
                                    <CiLocationOn className="w-5 h-5 text-[#667085]" />
                                    <p className="text-[#667085] font-inter font-medium capitalize text-base">{item.work_type}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <IoTimeOutline className="w-5 h-5 text-[#667085]" />
                                    <p className="text-[#667085] font-inter font-medium capitalize text-base">{item.employment_type}</p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:flex cursor-pointer items-center gap-2" onClick={() => window.open(item.link, "_blank")}>
                            <p className="text-[#F99650] font-inter font-medium text-base leading-6">View job</p>
                            <MdArrowOutward className="text-[#F99650] w-5 h-5" />
                        </div>
                    </div>
                ))
                :
                <p className='text-2xl text-[#000] text-center font-semibold mt-10'>No Jobs Available</p>
            }

        </section>

        <section className="bg-[#fff] py-[48px] lg:py-[112px] px-5 lg:px-[75px] flex flex-col items-center gap-[32px] lg:gap-[45px]">

            <div className="flex flex-col items-center gap-[32px]">
                <div className="bg-[#E8FFF4] w-[110px] h-[32px] rounded-[6px] p-2 flex items-center">
                    <p className="font-hanken font-medium text-sm leading-[15px] text-[#00954B]">LAPO Savings</p>
                </div>
                <p className="font-hanken text-[#000000] text-center text-[32px] font-medium lg:text-[54px] leading-[46px]">Why Work at LAPO Microfinance Bank?</p>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-[40px] w-full">
                <div className="flex flex-col lg:px-[53px] lg:w-[632px] rounded-lg pt-[28px] lg:pb-[44px]">
                    <p className="font-hanken text-[#00984C] font-semibold text-[24px] lg:text-[32px] leading-[48px]">Career Development</p>
                    <p className="text-[#101828] font-inter text-base leading-6 lg:w-[526px] font-[300]">
                        LAPO Microfinance Bank offers professional opportunities for career growth and advancement 
                        in personal skills set and ambitions. With us, you have a well-structured career pathway 
                        as well as access to resources for professional development and growth.
                    </p>
                </div>
                <div className="w-full">
                    <img 
                        src="https://res.cloudinary.com/dairsbzlv/image/upload/v1739903965/hands_small_wiow6d.png"
                        alt="Hands"
                        className="lg:w-[600px] lg:h-[463px]"
                    />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-[40px] w-full">
                <div className="hidden lg:block w-full">
                    <img 
                        src="https://res.cloudinary.com/dairsbzlv/image/upload/v1739903965/hands_small_wiow6d.png"
                        alt="Hands"
                        className="lg:w-[600px] lg:h-[463px]"
                    />
                </div>
                <div className="flex flex-col lg:px-[53px] gap-4 lg:w-[632px] pt-[28px] lg:pb-[44px]">
                    <p className="font-hanken text-[#00984C] font-semibold text-[24px] leading-[25px] lg:text-[32px] lg:leading-[48px]">LAPO Institute for Microfinance and Management Studies</p>
                    <p className="text-[#101828] font-inter text-base leading-6 lg:w-[526px] font-[300]">
                        LAPO Microfinance Bank recognizes the importance of leveraging a highly skilled workforce to 
                        achieve its strategic and operational goals. Through the LAPO Institute - a sister organization 
                        of the bank – we provide tailor-made capacity development programs and research for our people. 
                        The Institute is approved by the Federal Ministry of Education to function as a Tertiary 
                        institution.
                    </p>
                </div>
                <div className="w-full lg:hidden">
                    <img 
                        src="https://res.cloudinary.com/dairsbzlv/image/upload/v1739903965/hands_small_wiow6d.png"
                        alt="Hands"
                        className="lg:w-[600px] lg:h-[463px]"
                    />
                </div>
                
            </div>
        </section>

        <section className="bg-[#FBFAF9] px-5 lg:px-[75px] flex flex-col gap-[32px] py-[112px]">
            <div className="text-center">
                <span className="bg-[#E8FFF4] text-[#00954B] font-hanken px-3 py-1 rounded-full text-sm font-medium">Culture</span>
                <h2 className="text-[32px] leading-[100%] lg:text-[54px] font-hanken lg:leading-[46px] font-medium mt-4">Life at LAPO Microfinance Bank?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <div key={index} className="relative rounded-xl overflow-hidden shadow-lg">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        <div className="absolute bottom-4 font-medium font-hanken left-4 text-white text-[24px] lg:text-[32px]">
                            {item.title}
                        </div>
                    </div>
                ))}
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

export default Careers