import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import axios from 'axios'

import PosBanner from "../../assets/png/pos_banner.png"
import Terminal from "../../assets/png/terminal.png"
import FiveStars from "../../assets/png/five_stars.png"
import NDPR from "../../assets/png/ndpr.png"

import Stars from "../../assets/svg/stars.svg"
import CBN from "../../assets/svg/cbn.svg"
import NDIC from "../../assets/svg/ndic.svg"
import Dollar from "../../assets/svg/dollar.svg"
import Lightning from "../../assets/svg/lightning.svg"
import Tracker from "../../assets/svg/tracker.svg"



const Pos = () => {
    const [faqCategories, setFaqCategories] = useState([]);
    const [faqByCategory, setFaqByCategory] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    let URL = import.meta.env.VITE_APP_API_URL;

    const navigate = useNavigate()

    const sectionRef = useRef(null);
    const stepsContainerRef = useRef(null);

    const { state } = useLocation() 

    const posRef = useRef(null)
    const detailsRef = useRef(null)

    useEffect(() => {
        if (state?.section === "pos" && posRef.current) {
            posRef.current.scrollIntoView({ behavior: "smooth" });
        }
        if (state?.section === "details" && detailsRef.current) {
            detailsRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, [state]);


    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !stepsContainerRef.current) return;

            const section = sectionRef.current;
            const container = stepsContainerRef.current;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            // Calculate scroll boundaries
            const start = sectionTop - windowHeight;
            const end = sectionTop + sectionHeight;

            if (scrollY > start && scrollY < end) {
                const progress = (scrollY - start) / (end - start);
                container.scrollLeft = progress * maxScrollLeft;
            } else if (scrollY <= start) {
                container.scrollLeft = 0;
            } else if (scrollY >= end) {
                container.scrollLeft = maxScrollLeft;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


     // Fetch all categories
        const getFaqCategories = async () => {
        try {
            const res = await axios.get(`${URL}/v1/category`);
            setFaqCategories(res?.data?.data || []);
            } catch (err) {
                console.log(err, "err");
            }
        };
        
        // Find loan category and get its ID
        useEffect(() => {
            getFaqCategories();
        }, []);
    
        // When categories load, find the loan category
        useEffect(() => {
        if (faqCategories?.length > 0) {
            const loanCategory = faqCategories?.find(cat => cat.name === 'PoS Terminal');
            if (loanCategory) {
                setSelectedCategoryId(loanCategory.id);
            }
        }
        }, [faqCategories]);
        
        
        // Fetch FAQs when category ID is available
        const getFaqByCategory = async (categoryId) => {
            try {
                const res = await axios.get(`${URL}/v1/faq/category/${categoryId}`);
                setFaqByCategory(res?.data?.data || []);
            } catch (err) {
                console.log(err, "err");
            }
        };
    
        useEffect(() => {
            if (selectedCategoryId) {
                getFaqByCategory(selectedCategoryId);
            }
        }, [selectedCategoryId]);


  return (
    <div className='w-full' ref={posRef}>

        <section 
            style={{
                backgroundImage: `linear-gradient(to left, rgba(249, 150, 80, 0), #753412), url(${PosBanner})`,
                backgroundSize:"cover",
                backgroundRepeat: "no-repeat"
            }}
            className='h-[658px] lg:h-[832px]  flex flex-col items-start pl-5 lg:pl-[64px] pt-[118px] lg:pt-[213px]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >

            <div className='w-[310px] lg:w-[550px] h-[406px] flex flex-col gap-5'>
                <div className='flex items-center justify-center gap-2 bg-[#FFFFFFCF] w-[204px] rounded-full h-[28px] p-2'>
                    <img src={Stars} alt='Stars' className='w-[13px] h-[13px]' />
                    <p className='font-hanken font-medium text-[#E78020] text-xs'>Empowering 6M+ Nigerians</p>
                </div>
                <p className='text-[32px] lg:text-[56px] font-semibold leading-[30px] lg:leading-[57.6px] text-[#fff] font-hanken'>
                    Fast, <span className='text-[#1AFF8C]'>Secure</span>, and <span className='text-[#F99650]'>Reliable</span> Payments for Your Business.
                </p>
                <p className='text-base lg:text-[20px] font-hanken text-[#fff] lg:w-[550px] leading-[22px] lg:leading-[30px]'>
                    Trusted by generations to provide transparent, accessible financial services. 
                    we’re here to support you with solutions that fit your needs.
                </p>
                <div className='flex items-center gap-5'>
                    <button
                        className='bg-[#E78020] flex flex-col items-center justify-center w-[300px] lg:w-[211px] h-[56px] rounded-[10px]'
                        type='button'
                        onClick={() => {navigate("/pos", {state: {section: "details" }}); window.scrollTo(0, 0)}}
                    >
                        <p className='font-hanken text-[#fff] text-base font-semibold'>Learn More</p>
                    </button>
                    {/* <button
                        className='border-[#FFFFFF] border flex flex-col items-center justify-center w-[200px] lg:w-[182px] h-[56px] rounded-[10px]'
                    >
                        <p className='font-hanken text-[#FFFFFF] text-base font-semibold'>Learn More</p>
                    </button> */}
                </div>
                <div className='flex items-center gap-2 mt-3'>
                    <p className='text-xs font-hanken text-[#fff] font-medium capitalize'>licensed by </p>
                    <img src={CBN} alt='cbn_logo' className='w-[22px] h-[28px]' />
                    <img src={NDPR} alt='ndpr_logo' className='w-[22px] h-[28px]' />
                    <p className='text-xs font-hanken text-[#fff] font-medium capitalize'> insured by </p>
                    <img src={NDIC} alt='ndic_logo' className='w-[70px] h-[28px]' />
                </div>
            </div>
        </section>

        <section
            className='bg-[#fff] flex flex-col gap-[64px] py-[53px] px-[32px] lg:py-[92px] lg:px-[80px]'
            ref={detailsRef}
        >
            <div className='flex flex-col gap-3'>
                <div className='bg-[#FDF2E9] rounded-[6px] flex items-center flex-col justify-center p-2 h-[32px] w-[172px]'>
                    <p className='text-[#E78020] font-hanken font-medium text-sm leading-[15px]'>Why Choose Our PoS?</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='font-hanken font-medium capitalize text-[28px] leading-[100%] lg:text-[48px] lg:leading-[62px] tracking-[-2%]'>
                        Payment Solution to fuel your growth
                    </p>
                    <p className='font-inter text-base lg:text-[20px] leading-[30px] text-[#667085] '>
                        Spend smarter, lower your bills, get cashback on everything you buy, 
                        and unlock credit to grow your business.
                    </p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row items-start gap-[64px]'>
                <div className='lg:hidden block'>
                    <img src={Terminal} alt='Terminal' className='' />
                </div>
                <div className='flex flex-col gap-[48px] lg:w-[576px]'>
                    <div className='flex items-start gap-4'>
                        <img src={Lightning} alt='Lightning' className=''/>
                        <div className='flex flex-col gap-4 mt-2'>
                            <p className='font-inter text-[#101828] font-medium text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px]'>Modern, User-Friendly PoS Terminals</p>
                            <p className='text-[#667085] font-inter text-base leading-6 '>
                                Give your team the autonomy they need with access to as many cards as they need. 
                                Authorise purchases with a click. Simple.
                            </p>
                            {/* <div className='flex items-center gap-2'>
                                <p className='font-inter text-base text-[#E78020] font-medium leading-6'>Learn More</p>
                                <FaArrowRight className='w-4 h-4 mt-[1px] text-[#E78020]' />
                            </div> */}
                        </div>
                    </div>

                    <div className='flex items-start gap-4'>
                        <img src={Dollar} alt='Dollar' className=''/>
                        <div className='flex flex-col gap-4 mt-2'>
                            <p className='font-inter text-[#101828] font-medium text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px]'>No Hidden Charges</p>
                            <p className='text-[#667085] font-inter text-base leading-6 '>
                                Every card comes with configurable spending limits, purchase restrictions, 
                                and cancellations for each employee and team.
                            </p>
                            {/* <div className='flex items-center gap-2'>
                                <p className='font-inter text-base text-[#E78020] font-medium leading-6'>Learn More</p>
                                <FaArrowRight className='w-4 h-4 mt-[1px] text-[#E78020]' />
                            </div> */}
                        </div>
                    </div>

                    <div className='flex items-start gap-4'>
                        <img src={Tracker} alt='Tracker' className=''/>
                        <div className='flex flex-col gap-4 mt-2'>
                            <p className='font-inter text-[#101828] font-medium text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px]'>Real-Time Sales Tracking & Reporting</p>
                            <p className='text-[#667085] font-inter text-base leading-6 '>
                                An all-in-one platform that helps you balance everything your team 
                                need to be happy and your finances in order.
                            </p>
                            {/* <div className='flex items-center gap-2'>
                                <p className='font-inter text-base text-[#E78020] font-medium leading-6'>Learn More</p>
                                <FaArrowRight className='w-4 h-4 mt-[1px] text-[#E78020]' />
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className='w-[576px] hidden lg:block'>
                    <img src={Terminal} alt='Terminal' className='' />
                </div>
            </div>
        </section>

        {/* <section
            ref={sectionRef}
            className='px-[64px] py-[112px] gap-[80px] flex flex-col h-[695px] bg-[#1E1E1E]'
        >
            {/* Header section unchanged 
            <div className='flex items-center flex-col gap-6'>
                <div className='w-[85px] h-[32px] p-2 rounded-lg flex items-center justify-center bg-[#fff]'>
                    <p className='text-xs text-[#E78020] leading-[15px]'>Application</p>
                </div>
                <p className='font-hanken text-[56px] leading-[67px] text-[#fff]'>
                    Simple Steps to Getting your PoS
                </p>
                <p className='text-[#D9D9D9] font-inter text-[20px] leading-[30px]'>
                    Our application process is designed to be straightforward and efficient. 
                    Follow these easy steps to get started on your pos journey.
                </p>
            </div>

            {/* Steps container with hidden scrollbar 
            <div 
                ref={stepsContainerRef}
                className='flex items-start gap-[48px] overflow-x-hidden overflow-y-hidden relative scrollbar-hide'
            >
                {[1, 2, 3, 4].map((step, index) => (
                    <div
                        key={step}
                        className='flex flex-col items-center w-[396px] gap-6 flex-shrink-0'
                    >
                        <div className='w-[80px] h-[80px] rounded-full flex items-center justify-center bg-[#fff]'>
                            <p className='font-hanken font-medium text-[#000] text-[32px] leading-[41px]'>{step}</p>
                        </div>
                        <p className='font-hanken font-medium text-[20px] leading-[26px] text-[#fff]'>
                            Step {step}: {index === 0 ? 'Request a PoS' : index === 1 ? "Get it Delivered" :  index === 2 ?  'Start Accepting Payments' : 'Choose Your Loan Type'}
                        </p>
                        <p className='font-inter text-[#D9D9D9] text-[20px] leading-[30px] text-center'>
                            {   index === 0 ? 'Sign up online or visit our branch.' : 
                                index === 1 ? 'We’ll send it to your business location.' :
                                index === 2 ? 'Seamless transactions, happy customers!' : 
                                'Select from various loan options that suit your needs.'
                            }
                        </p>
                    </div>
                ))}
            </div>
        </section> */}

        <section
            // ref={sectionRef}
            className='px-5 py-[112px] gap-[80px] flex flex-col h-auto lg:h-[695px] bg-[#1E1E1E]'
        >
            {/* Header section unchanged */}
            <div className='flex lg:items-center flex-col gap-6'>
                <div className='w-[85px] h-[32px] p-2 rounded-lg flex items-center justify-center bg-[#fff]'>
                    <p className='text-xs text-[#E78020] leading-[15px]'>Application</p>
                </div>
                <p className='font-hanken text-[32px] capitalize leading-[120%] lg:text-[56px] lg:leading-[67px] text-[#fff]'>
                    Simple Steps to Getting your PoS
                </p>
                <p className='text-[#D9D9D9] font-inter text-base lg:text-[20px] leading-[30px]'>
                    Our application process is designed to be straightforward and efficient. 
                    Follow these easy steps to get started on your loan journey.
                </p>
            </div>

            {/* Steps container with hidden scrollbar */}
            <div 
                // ref={stepsContainerRef}
                className='flex flex-col lg:flex-row items-start gap-[38px] lg:mx-auto overflow-x-hidden overflow-y-hidden relative scrollbar-hide'
            >
                {[1, 2, 3].map((step, index) => (
                    <div
                        key={step}
                        className='flex flex-row items-start lg:flex-col lg:items-center lg:w-[296px] gap-6 flex-shrink-0'
                    >
                        <div className='w-[50px] h-[40px] lg:w-[80px] lg:h-[80px] rounded-full flex items-center justify-center bg-[#fff]'>
                            <p className='font-hanken font-medium text-[#000] text-[20px] leading-[130%] lg:text-[32px] lg:leading-[41px]'>{step}</p>
                        </div>
                        <div className="flex flex-col items-start lg:items-center gap-2">
                            <p className='font-hanken font-medium text-base whitespace-nowrap leading-[130%] lg:text-[20px] lg:leading-[26px] text-[#fff]'>
                                Step {step}: {index === 0 ? 'Request a PoS' : index === 1 ? "Get it Delivered" :  index === 2 ?  'Start Accepting Payments' : 'Choose Your Loan Type'}
                            </p>
                            <p className='font-inter text-[#D9D9D9] text-base leading-[150%] lg:text-[20px] lg:leading-[30px] lg:text-center'>
                                {   
                                    index === 0 ? 'Sign up online or visit our branch.' : 
                                    index === 1 ? 'We’ll send it to your business location.' :
                                    index === 2 ? 'Seamless transactions, happy customers!' : 
                                    'Select from various loan options that suit your needs.'
                                }
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>



        {/* <section
            className='bg-[#F7F9FC] py-[96px] px-5 lg:px-[80px] gap-6 flex flex-col items-center'
        >
            <img src={FiveStars} alt="FiveStars" className='w-[116px] h-[20px]' />
            <p className='font-hanken font-medium italic text-[30px] leading-[32px] lg:text-[72px] lg:leading-[93.82px] tracking-[-2%] text-center'>
                “This PoS transformed how we handle payments! Quick, reliable, and easy to use. 
            </p>
            <div className='flex flex-col items-center gap-[4px]'>
                <p className='font-medium text-[#101828] text-[18px] font-inter leading-[28px]'>— Ladidi WUraola</p>
                <p className='text-[#667085] font-inter text-base leading-[24px]'>Business Owner</p>
            </div>

        </section> */}
        
        <section
            className='bg-[#00984C] h-[471px] px-5 lg:px-0 flex justify-center py-[107px] lg:py-[112px] items-center'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='lg:w-[768px] flex flex-col items-center gap-6'>
                <p className='font-hanken text-[32px] capitalize lg:text-[48px] text-center leading-[120%] lg:leading-[57px] text-[#FFFFFF]'>
                    Unlock new financial possibilities with us
                </p>
                <p className='font-inter text-base leading-[150%] text-center lg:text-[18px] lg:leading-[27px] text-[#FFFFFF]'>
                    Explore our diverse saving options tailored for personal, business, and educational needs.  
                </p>
                <div className='flex items-center gap-4'>
                    <div 
                        className='bg-[#fff] w-[128px] h-[48px] cursor-pointer rounded-[8px] p-2 flex items-center justify-center'
                        onClick={() => {navigate("/contact-us"); window.scrollTo(0, 0)}}
                    >
                        <p className='font-hanken text-[#000000] font-medium text-[13px] lg:text-base leading-6'>Contact Us</p>
                    </div>
                    <div 
                        className='bg-[#000000] w-[187px] lg:w-[225px] cursor-pointer h-[48px] rounded-[8px] flex items-center justify-center p-2'
                        onClick={() => {navigate("/digital", {
                            state: {section: "app"}
                          }); window.scrollTo(0, 0)}}
                    >
                        <p className='font-hanken font-medium whitespace-nowrap text-[13px] lg:text-base text-[#fff]'>Download the LAPO App</p>
                    </div>
                </div>
            </div>
        </section>

        {/* <section 
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
                        Find answers to your questions about our PoS Terminal and application process.
                    </p>
                </div>
                <div className='flex flex-col gap-[48px]'>
                    <div className='flex flex-col gap-4'>
                        <p className='font-hanken text-[#753412] font-medium leading-[30px] text-[20px]'>How do I request a PoS?</p>
                        <p className='font-inter text-[#000000] text-base leading-6'>
                            You can request a PoS by signing up online or visiting any of our branches. 
                            Once approved, we’ll deliver it to your business location.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-hanken text-[#753412] font-medium leading-[30px] text-[20px]'>What are the transaction fees?</p>
                        <p className='font-inter text-[#000000] text-base leading-6'>
                            Our fees are transparent and competitive. You only pay a small percentage per transaction,
                            with no hidden charges. Contact us for detailed pricing.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-hanken text-[#753412] font-medium leading-[30px] text-[20px]'>What are the benefits?</p>
                        <p className='font-inter text-[#000000] text-base leading-6'>
                            Process transactions in seconds with top-tier security, multiple Payment Options – 
                            Accept card, mobile, and QR payments seamlessly, get your money quickly with no delays, 
                            monitor transactions and sales from anywhere, reliable 24/7 Support,transparent pricing 
                            with no surprises
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-hanken text-[#753412] font-medium leading-[30px] text-[20px]'>What happens if my PoS stops working?</p>
                        <p className='font-inter text-[#000000] text-base leading-6'>
                            If you experience any issues, our 24/7 support team is ready to assist you. 
                            We also offer quick replacements to keep your business running smoothly.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-hanken text-[#753412] font-medium leading-[30px] text-[20px]'>Can I track my transactions in real-time?</p>
                        <p className='font-inter text-[#000000] text-base leading-6'>
                            Yes! You can monitor all payments, settlements, 
                            and sales reports instantly through our online dashboard or mobile app.
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
        </section> */}

        <section 
            className='bg-[#fff] py-[88px] lg:py-[112px] flex flex-col '
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        > 
            <div className='lg:w-[768px] px-5 lg:px-0 flex flex-col mx-auto gap-[80px]'>
                <div
                    className='flex flex-col gap-6 items-center'
                >
                    <p className='font-hanken font-medium text-[32px] leading-[120%] lg:text-[48px] lg:leading-[57px] '>FAQs</p>
                    <p className='font-inter text-[#000000] text-base leading-[150%] lg:text-[18px] lg:leading-[27px]'>
                        Find answers to your questions about our PoS Terminal and application process.
                    </p>
                </div>
                <div className='flex flex-col gap-[48px]'>
                    {faqByCategory.length > 0 ? faqByCategory?.map((faqItem) => (
                        <div key={faqItem.id} className='flex flex-col gap-4'>
                            <p className='font-hanken text-[#753412] font-medium leading-[30px] text-[20px]'>
                                {faqItem.question}
                            </p>
                            <p className='font-inter text-[#000000] text-base leading-6'>
                                {faqItem.answer}
                            </p>
                        </div>
                    )) : (
                        <p className='text-center font-inter text-[#000]'>No Faq Available</p>
                    )}
                </div>
                <div className='w-full lg:w-[560px] flex flex-col items-center mx-auto gap-4'>
                    <p className='font-hanken text-[#000000] font-semibold text-[32px] leading-[41px]'>Still have questions?</p>
                    <p className='text-[18px] text-[#000000] leading-[27px]'>We're here to help you!</p>
                    <button
                        className='w-[104px] h-[48px] p-2 bg-black rounded-lg'
                        type='button'
                        onClick={() => {navigate("/contact-us"), window.scrollTo(0, 0)}}
                    >
                        <p className='text-[#fff] font-hanken font-medium leading-6 text-base'>Contact</p>
                    </button>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Pos