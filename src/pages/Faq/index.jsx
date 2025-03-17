import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { PiMinusCircle, PiPlusCircle } from "react-icons/pi";

import Premium from "../../assets/png/premium.png"

import Left from "../../assets/svg/left_about_spiral.svg"
import Right from "../../assets/svg/right_about_spiral.svg"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Faqs = () => {
    const [search, setSearch] = useState("")
    const [activeTab, setActiveTab] = useState(null);
    const [faqCategory, setFaqCategory] = useState([]);
    const [faqByCategory, setFaqByCategory] = useState([]);
    const [openFaqs, setOpenFaqs] = useState({});

    let URL = import.meta.env.VITE_APP_API_URL;

    const navigate = useNavigate()

    // Fetch FAQ categories
    useEffect(() => {
        const getFaqCategory = async () => {
        try {
            const res = await axios.get(`${URL}/v1/category`);
            setFaqCategory(res?.data?.data);
            if (res?.data?.data?.length > 0) {
            setActiveTab(res.data.data[0].id); // Set first category as default
            }
        } catch (err) {
            console.error(err);
        }
        };
        getFaqCategory();
    }, []);
  
    // Fetch FAQs when active tab changes
    useEffect(() => {
        const getFaqByCategory = async () => {
        if (!activeTab) return;
        try {
            const res = await axios.get(`${URL}/v1/faq/category/${activeTab}`);
            setFaqByCategory(res?.data?.data);
        } catch (err) {
            console.error(err);
        }
        };
        getFaqByCategory();
    }, [activeTab]);
    
    const toggleFaq = (faqId) => {
        setOpenFaqs(prev => ({ ...prev, [faqId]: !prev[faqId] }));
    };

    console.log(faqCategory, 'faqCategory')

  return (
    <div className='w-full'>

        <section
            className='bg-[#753412] h-auto relative overflow-hidden'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex items-center justify-between absolute top-36 lg:top-34 -z-10 -inset-x-4'>
                <img src={Left} alt='Left' className='' />
                <img src={Right} alt='Right' className='' />
            </div>

            <div className='flex flex-col items-center pt-[173px] pb-[80px]'>
                <div className='flex flex-col items-center gap-4 lg:w-[960px] mx-auto'>
                    <p className='text-base font-inter font-semibold leading-6 text-[#EAECF0]'>FAQs</p>
                    <div className='flex flex-col gap-6'>
                        <p className='font-hanken text-[32px] capitalize leading-[32px] lg:text-[56px] text-center font-medium text-[#FFFFFF] lg:leading-[60px]'>
                            Frequently asked questions
                        </p>
                        <p className='font-inter text-base lg:text-[20px] leading-[30px] text-[#FFFFFF] text-center'>
                            Have questions? We’re here to help.
                        </p>
                    </div>

                    <div className='flex items-center gap-2 w-[320px] bg-[#FFFFFF] h-[48px] rounded-lg py-3 px-4'>
                        <CiSearch className="w-5 h-5 text-[#667085]" />
                        <input 
                            className='text-[#667085] font-inter text-base leading-6'
                            name='search'
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search"
                            value={search}
                        />
                    </div>

                </div>
            </div>
        </section>

        <section className='px-5 lg:px-[112px] pt-[96px] flex flex-col lg:flex-row items-start gap-[64px]'>
            {/* Categories Sidebar */}
            <div className='w-full flex flex-col gap-5 border-0 lg:border lg:border-t-0 lg:border-b-0 lg:border-l-0 lg:border-r-[#75341236] pr-5 lg:pb-[337px]'>
                <p className='font-hanken text-[#101828] font-medium leading-[44px] text-[36px]'>Table of content</p>
                <div className='flex flex-col'>
                    {faqCategory?.map(category => (
                    <div 
                        key={category.id}
                        onClick={() => setActiveTab(category.id)}
                        className={`${activeTab === category.id 
                        ? "bg-[#F9FBFA] border border-l-2 rounded-lg border-[#00984C] border-t-0 border-r-0" 
                        : "group hover:bg-[#F9FBFA] border border-l-0 border-[#34423B4D] hover:border-l-2 hover:rounded-lg hover:border-[#00984C] border-t-0 border-r-0"
                        } lg:w-[465px] h-[64px] flex items-center gap-2 capitalize py-4 px-[32px] cursor-pointer`}
                    >
                        <BiBriefcaseAlt2 className={`${activeTab === category.id ? "text-[#00954B]" : "group-hover:text-[#00954B] text-[#4380BE]"} w-5 h-5`} />
                        <p className={`${activeTab === category.id ? "text-[#00954B]" : "group-hover:text-[#00954B] text-[#000000]"} font-nunito font-semibold text-[18px] leading-[28px]`}>
                        {category.name}
                        </p>
                    </div>
                    ))}
                </div>
            </div>

            {/* FAQ Content */}
            <div className='lg:w-[663px] flex flex-col gap-2.5'>
            {faqCategory?.length > 0 && (
                <p className='text-[#101828] text-[36px] font-medium capitalize leading-[44px] tracking-[-2%] font-hanken'>
                {faqCategory.find(c => c.id === activeTab)?.name}
                </p>
            )}
            
            {faqByCategory.map(faq => (
                <div 
                key={faq.id}
                className={`${openFaqs[faq.id] ? "bg-[#F9FBFA] rounded-[16px]" : "bg-[#fff] border border-t-0 border-x-0 border-[#E7802036]"} p-[32px] w-full flex flex-col gap-2`}
                >
                <div className='flex items-center gap-10 lg:gap-0 justify-between'>
                    <p className='font-inter text-[#101828] text-[18px] leading-[28px] font-medium'>{faq.question}</p>
                    {openFaqs[faq.id] ? (
                    <PiMinusCircle className='w-5 h-5 text-[#00984C] cursor-pointer' onClick={() => toggleFaq(faq.id)} />
                    ) : (
                    <PiPlusCircle className='w-5 h-5 text-[#00984C] cursor-pointer' onClick={() => toggleFaq(faq.id)} />
                    )}
                </div>
                {openFaqs[faq.id] && (
                    <p className='text-[#667085] font-inter text-base leading-6'>
                    {faq.answer}
                    </p>
                )}
                </div>
            ))}
            </div>
        </section>

        {/* <section
            className='px-[112px] pt-[96px] flex items-start gap-[64px]'
        >
            <div className='flex flex-col gap-5 border border-t-0 border-b-0 border-l-0 border-[#75341236] pr-5 pb-[337px]'>
                <p className='font-hanken text-[#101828] font-medium leading-[44px] text-[36px]'>Table of content</p>
                <div className='flex flex-col'>
                    <div 
                        onClick={() => handleChangeTab("general")}
                        className={`${activeTab === "general" ? "bg-[#F9FBFA] border border-l-2 rounded-lg border-[#00984C] border-t-0 border-r-0" : "group hover:bg-[#F9FBFA] border border-l-0 border-[#34423B4D] hover:border-l-2 hover:rounded-lg hover:border-[#00984C] border-t-0 border-r-0"} w-[465px] h-[64px] flex items-center gap-2 py-4 px-[32px]`}
                    >
                        <BiBriefcaseAlt2 className={`${activeTab === "general" ? "text-[#00954B]" : "group-hover:text-[#00954B] text-[#4380BE]"}  w-5 h-5 `} />
                        <p className={`${activeTab === "general" ? "text-[#00954B]" : "group-hover:text-[#00954B] text-[#000000]"} font-nunito font-semibold text-[18px] leading-[28px]`}>
                            General
                        </p>
                    </div>
                    <div 
                        onClick={() => handleChangeTab("savings")}
                        className={`${activeTab === "savings" ? "bg-[#F9FBFA] border border-l-2 rounded-lg border-[#00984C] border-t-0 border-r-0" : "group hover:bg-[#F9FBFA] border border-l-0 border-[#34423B4D] hover:border-l-2 hover:rounded-lg hover:border-[#00984C] border-t-0 border-r-0"} w-[465px] h-[64px] flex items-center gap-2 py-4 px-[32px]`}
                    >
                        <BiBriefcaseAlt2 className={`${activeTab === "savings" ? "text-[#00954B]" : "group-hover:text-[#00954B] text-[#4380BE]"}  w-5 h-5 `} />
                        <p className={`${activeTab === "savings" ? "text-[#00954B]" : "group-hover:text-[#00954B] text-[#000000]"} font-nunito font-semibold text-[18px] leading-[28px]`}>
                            Savings
                        </p>
                    </div>
                    <div 
                        onClick={() => handleChangeTab("loans")}
                        className={`${activeTab === "loans" ? "bg-[#F9FBFA] border border-l-2 rounded-lg border-[#00984C] border-t-0 border-r-0" : "group hover:bg-[#F9FBFA] border border-l-0 border-[#34423B4D] hover:border-l-2 hover:rounded-lg hover:border-[#00984C] border-t-0 border-r-0"} w-[465px] h-[64px] flex items-center gap-2 py-4 px-[32px]`}
                    >
                        <BiBriefcaseAlt2 className={`${activeTab === "loans" ? "text-[#00954B]" : "group-hover:text-[#00954B] text-[#4380BE]"}  w-5 h-5 `} />
                        <p className={`${activeTab === "loans" ? "text-[#00954B]" : "group-hover:text-[#00954B] text-[#000000]"} font-nunito font-semibold text-[18px] leading-[28px]`}>
                            Loans
                        </p>
                    </div>
                    <div 
                        onClick={() => handleChangeTab("mobile")}
                        className={`${activeTab === "mobile" ? "bg-[#F9FBFA] border border-l-2 rounded-lg border-[#00984C] border-t-0 border-r-0" : "group hover:bg-[#F9FBFA] border border-l-0 border-[#34423B4D] hover:border-l-2 hover:rounded-lg hover:border-[#00984C] border-t-0 border-r-0"} w-[465px] h-[64px] flex items-center gap-2 py-4 px-[32px]`}
                    >
                        <BiBriefcaseAlt2 className={`${activeTab === "mobile" ? "text-[#00954B]" : "group-hover:text-[#00954B] text-[#4380BE]"}  w-5 h-5 `} />
                        <p className={`${activeTab === "mobile" ? "text-[#00954B]" : "group-hover:text-[#00954B] text-[#000000]"} font-nunito font-semibold text-[18px] leading-[28px]`}>
                            Mobile Banking
                        </p>
                    </div>
                    <div 
                        onClick={() => handleChangeTab("pos")}
                        className={`${activeTab === "pos" ? "bg-[#F9FBFA] border border-l-2 rounded-lg border-[#00984C] border-t-0 border-r-0" : "group hover:bg-[#F9FBFA] border border-l-0 border-[#34423B4D] hover:border-l-2 hover:rounded-lg hover:border-[#00984C] border-t-0 border-r-0"} w-[465px] h-[64px] flex items-center gap-2 py-4 px-[32px]`}
                    >
                        <BiBriefcaseAlt2 className={`${activeTab === "pos" ? "text-[#00954B]" : "group-hover:text-[#00954B] text-[#4380BE]"}  w-5 h-5 `} />
                        <p className={`${activeTab === "pos" ? "text-[#00954B]" : "group-hover:text-[#00954B] text-[#000000]"} font-nunito font-semibold text-[18px] leading-[28px]`}>
                            Pos Terminal
                        </p>
                    </div>
                    <div 
                        onClick={() => handleChangeTab("sustaianability")}
                        className={`${activeTab === "sustaianability" ? "bg-[#F9FBFA] border border-l-2 rounded-lg border-[#00984C] border-t-0 border-r-0" : "group hover:bg-[#F9FBFA] border border-l-0 border-[#34423B4D] hover:border-l-2 hover:rounded-lg hover:border-[#00984C] border-t-0 border-r-0"} w-[465px] h-[64px] flex items-center gap-2 py-4 px-[32px]`}
                    >
                        <BiBriefcaseAlt2 className={`${activeTab === "sustaianability" ? "text-[#00954B]" : "group-hover:text-[#00954B] text-[#4380BE]"}  w-5 h-5 `} />
                        <p className={`${activeTab === "sustaianability" ? "text-[#00954B]" : "group-hover:text-[#00954B] text-[#000000]"} font-nunito font-semibold text-[18px] leading-[28px]`}>
                            Sustaianability
                        </p>
                    </div>

                </div>
            </div>

            <div className='w-[663px] flex flex-col gap-2.5'>
                <p className='text-[#101828] text-[36px] font-medium leading-[44px] tracking-[-2%] font-hanken'>General</p>
                <div className={`${openTabOne ? "bg-[#F9FBFA] rounded-[16px]" : "bg-[#fff] border border-t-0 border-x-0 border-[#E7802036]"} p-[32px] w-full flex flex-col gap-2`}>
                    <div className='flex items-center justify-between'>
                        <p className='font-inter text-[#101828] text-[18px] leading-[28px] font-medium'>What is LAPO</p>
                        {openTabOne ?  <PiMinusCircle className='w-5 h-5 text-[#00984C] cursor-pointer' onClick={handleOpenTabOne} /> : <PiPlusCircle className='w-5 h-5 text-[#00984C] cursor-pointer' onClick={handleOpenTabOne}/>}
                    </div>
                    {
                        openTabOne && (
                            <p className='text-[#667085] font-inter text-base leading-6'>
                                LAPO is one of Nigeria's largest microfinance institutions. 
                                They offer loans to small business owners and salary earners.
                                 LAPO is known for its community-focused approach and outreach 
                                programs to educate clients on financial management. 
                            </p>
                        )
                    }
                </div>

                <div className={`${openTabTwo ? "bg-[#F9FBFA] rounded-[16px]" : "bg-[#fff] border border-t-0 border-x-0 border-[#E7802036]"} p-[32px] w-full flex flex-col gap-2`}>
                    <div className='flex items-center justify-between'>
                        <p className='font-inter text-[#101828] text-[18px] leading-[28px] font-medium'>Where is LAPO</p>
                        {openTabTwo ?  <PiMinusCircle className='w-5 h-5 text-[#00984C] cursor-pointer' onClick={handleOpenTabTwo} /> : <PiPlusCircle className='w-5 h-5 text-[#00984C] cursor-pointer' onClick={handleOpenTabTwo}/>}
                    </div>
                    {
                        openTabTwo && (
                            <p className='text-[#667085] font-inter text-base leading-6'>
                                LAPO is one of Nigeria's largest microfinance institutions. 
                                They offer loans to small business owners and salary earners.
                                 LAPO is known for its community-focused approach and outreach 
                                programs to educate clients on financial management. 
                            </p>
                        )
                    }
                </div>
            </div>

        </section> */}

        <section
            className='bg-[#FBFAF9] px-5 lg:px-[80px] py-[96px] flex flex-col lg:flex-row items-center gap-[64px]'
            data-aos="fade-up" 
            data-aos-duration="1000"     
            data-aos-easing="linear"
        >
            <div className='flex flex-col gap-6 w-[311px] lg:w-[576px]'>
                <p className='font-semibold text-[32px] lg:text-[48px] lg:whitespace-nowrap leading-[100%] lg:leading-[60px] text-[#101828] font-hanken'>
                    Premium customer support
                </p>
                <p className='text-[#667085] font-inter text-base lg:text-[20px] leading-[30px]'>
                    Enjoy the personalized service you need at LAPO Microfinance Bank, 
                    including long-term business financial planning and extended-hours 
                    access to our specialized business service team.
                </p>
                <ul className='pl-5 list-disc text-[#6A6A6A] text-base lg:text-[20px] font-hanken leading-[25px]'>
                    <li>One combined monthly statement for all of your business accounts</li>
                    <li>Extended-hours access to our specialized business service team</li>
                </ul>
                <button
                    className='w-[126px] h-[48px] rounded-lg flex items-center justify-center bg-[#E78020]'
                    onClick={() => {navigate("/contact-us"); window.scrollTo(0, 0)}}
                >
                    <p className='font-medium text-base leading-6 font-inter text-[#FFFFFF]'>Contact Us</p>
                </button>
            </div>
            <div className='lg:w-[576px]'>
                <img 
                    src={Premium} 
                    alt="Premium" 
                    className='' 
                />
            </div>
        </section>
      
    </div>
  )
}

export default Faqs