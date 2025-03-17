import React, { useRef, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Google from "../../assets/svg/google.svg"
import Apple from "../../assets/svg/apple.svg"
import PhoneIcon from "../../assets/svg/phone.svg"
import Wifi from "../../assets/svg/wifi.svg"
import Tv from "../../assets/svg/tv.svg"
import Lightning from "../../assets/svg/lightning_a.svg"
import Tablet from "../../assets/svg/tablet.svg"
import Cards from "../../assets/svg/cards_three.svg"
import Globe from "../../assets/svg/globe.svg"
import Heart from "../../assets/svg/heart.svg"
import LightningB from "../../assets/svg/lightning_b.svg"
import LockB from "../../assets/svg/lock_b.svg"

import Phone from "../../assets/png/phone_a.png"
import BackScreen from "../../assets/png/back_screen.png"
import FrontScreen from "../../assets/png/front_screen.png"
import Avatar from "../../assets/png/avatar.png"
import Transfer from "../../assets/png/transfer.png"
import Mask from "../../assets/png/mask.png"
import Love from "../../assets/png/love.png"
import axios from 'axios'


const MobileApp = () => {
    const [faqCategories, setFaqCategories] = useState([]);
    const [faqByCategory, setFaqByCategory] = useState([]);
    const [loading, setLoading] = useState(false)
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    const sectionRef = useRef(null); 
    const stepsContainerRef = useRef(null); 

    let URL = import.meta.env.VITE_APP_API_URL;

    const { state } = useLocation()
    const mobileRef = useRef(null)

    const navigate = useNavigate()

    useEffect(() => {
        if (state?.section === "mobile" && mobileRef.current) {
            mobileRef.current.scrollIntoView({ behavior: "smooth" });
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
            }   catch (err) {
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
                const loanCategory = faqCategories?.find(cat => cat.name.toLowerCase() === 'loans');
                if (loanCategory) {
                    setSelectedCategoryId(loanCategory.id);
                }
            }
        }, [faqCategories]);
    
        // Fetch FAQs when category ID is available
        const getFaqByCategory = async (categoryId) => {
            setLoading(true)
            try {
                const res = await axios.get(`${URL}/v1/faq/category/${categoryId}`);
                setFaqByCategory(res?.data?.data || []);
            } catch (err) {
                console.log(err, "err");
            } finally {
                setLoading(false)
            }
        };
    
        useEffect(() => {
            if (selectedCategoryId) {
                getFaqByCategory(selectedCategoryId);
            }
        }, [selectedCategoryId]);
    
  return (
    <div className='w-full' ref={mobileRef}>

        <section className='flex flex-col lg:flex-row items-center gap-5 px-5 pt-[120px] lg:pt-0 lg:px-[112px] lg:pb-[28px]'>
            <div className='flex flex-col lg:w-[634px] gap-10'>
                <div className='flex flex-col gap-5'>
                    <p className='font-hanken font-medium text-[32px] leading-[100%] lg:text-[54px] lg:leading-[57px] tracking-[-0.8px] text-[#101828]'>
                        Your Money, Your Way – In Just a Few Taps!
                    </p>
                    <p className='text-[#667085] font-inter text-[20px] leading-[30px]'>
                        Send money, pay bills, apply for loans, and save – all from one powerful app
                    </p>
                </div>
                <div className='flex gap-5 items-center'>
                    <img src={Apple} alt='Apple' className='cursor-pointer ' onClick={() => window.open("https://apps.apple.com/ng/app/lapo-mobile-app/id6448030325", "_blank")} />
                    <img src={Google} alt='Google' className='cursor-pointer' onClick={() => window.open("https://play.google.com/store/apps/details?id=com.digicore.lapo", "_blank")}/>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={Avatar} alt="Avatar" className='w-[152px] h-[40px]' />
                    <p className='text-[#667085] font-inter font-medium leading-6 text-base'>Over 50k Downloads</p>
                </div>

            </div>

            <div className='md:w-[560px] lg:h-[640px] flex items-center pt-[120px] overflow-hidden justify-center bg-[#F2F4F7] rounded-tl-[320px] rounded-tr-[320px] rounded-br-3xl rounded-bl-3xl'>
                <img src={Phone} alt="Phone" className="" />
            </div>

        </section>

        <section
            className='bg-[#753412] flex flex-col px-5 lg:px-0 py-[122px] lg:pt-[163px] lg:pb-[250px] items-center gap-[38px] lg:gap-[111px]'
        >
            <div className='flex flex-col items-center gap-[10px]'>
                <p className='font-hanken text-[#FFFFFF] font-medium text-[32px] text-center leading-[100%] lg:text-[48px] lg:leading-[62px]'>Features That give you freedom</p>
                <p className='font-inter text-[#FFFFFF] text-base lg:text-[20px] text-center leading-6'>Manage your finances effortlessly, wherever you are.</p>
            </div>
            <div className='flex flex-col gap-[60px]'>
                <div className='flex flex-col lg:flex-row lg:items-start md:items-center gap-[32px] lg:gap-[100px]'>
                    <div className='flex flex-col gap-6'>
                        <div className='bg-[#FFFFFF] rounded-[17px] md:w-[400px] h-[400px] overflow-hidden'>
                            <img 
                                src="https://res.cloudinary.com/dairsbzlv/image/upload/v1742216447/transfer_b_swdixa.png"
                                alt="Transfer" 
                                className='' 
                            />
                        </div>
                        <div className='flex flex-col gap-[7px]'>
                            <p className='font-inter text-[#fff] text-[24px] lg:text-[30px] leading-[36px]'>Easy Transfers</p>
                            <p className='font-inter text-[15px] text-[#C7C9CA] leading-6'>
                                Send and receive money in seconds – no hassle, no stress.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='bg-[#C2D280] rounded-[17px] md:w-[400px] h-[400px] overflow-hidden'>
                            <img 
                                src="https://res.cloudinary.com/dairsbzlv/image/upload/v1742216447/transfer_b_swdixa.png" 
                                alt="Transfer" 
                                className='' 
                            />
                        </div>
                        <div className='flex flex-col gap-[7px]'>
                            <p className='font-inter text-[#fff] text-[24px] lg:text-[30px] leading-[36px]'>Loan Access</p>
                            <p className='font-inter text-[15px] text-[#C7C9CA] leading-6'>
                                Apply for loans in minutes and track your repayments with ease.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col  lg:flex-row items-center gap-[32px] lg:gap-[100px]'>
                    <div className='flex flex-col gap-6'>
                        <div className='bg-[#00984C] rounded-[17px] md:w-[400px] h-[400px] overflow-hidden'>
                            <img src="https://res.cloudinary.com/dairsbzlv/image/upload/v1742216447/transfer_b_swdixa.png" alt="Transfer" className='' />
                        </div>
                        <div className='flex flex-col gap-[7px]'>
                            <p className='font-inter text-[#fff] text-[24px] lg:text-[30px] leading-[36px]'>Savings & Investment</p>
                            <p className='font-inter text-[15px] text-[#C7C9CA] leading-6'>
                                Grow your wealth with flexible savings options, all in one place.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 md:w-[400px]'>
                        <div className='bg-[#FBF8F6] md:w-[400px] rounded-[17px] py-[48.47px] lg:py-[56.68px] px-[75.46px] lg:px-[88px] grid grid-cols-2 gap-[49px] '>
                            <div className='flex flex-col items-center gap-[7px]'>
                                <div className='rounded-full flex items-center justify-center w-[84px] h-[84px] bg-[#FFFFFF]'>
                                    <img src={PhoneIcon} alt="PhoneIcon" className='w-[31px] h-[31px]' />
                                </div>
                                <p className='font-inter text-base lg:text-[20px] leading-6 text-[#000000]'>Airtime</p>
                            </div>
                            <div className='flex flex-col items-center gap-[7px]'>
                                <div className='rounded-full flex items-center justify-center w-[84px] h-[84px] bg-[#FFFFFF]'>
                                    <img src={Wifi} alt="Wifi" className='w-[31px] h-[31px]' />
                                </div>
                                <p className='font-inter text-base lg:text-[20px] leading-6 text-[#000000]'>Internet</p>
                            </div>
                            <div className='flex flex-col items-center gap-[7px]'>
                                <div className='rounded-full flex items-center justify-center w-[84px] h-[84px] bg-[#FFFFFF]'>
                                    <img src={Tv} alt="Tv" className='w-[31px] h-[31px]' />
                                </div>
                                <p className='font-inter text-base lg:text-[20px] whitespace-nowrap leading-6 text-[#000000]'>Cable TV</p>
                            </div>
                            <div className='flex flex-col items-center gap-[7px]'>
                                <div className='rounded-full flex items-center justify-center w-[84px] h-[84px] bg-[#FFFFFF]'>
                                    <img src={Lightning} alt="Lightning" className='w-[31px] h-[31px]' />
                                </div>
                                <p className='font-inter text-base lg:text-[20px] leading-6 text-[#000000]'>Utilities</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[7px]'>
                            <p className='font-inter text-[24px] lg:text-[31px] text-[#FFFFFF] leading-[36px]'>Bill Payments</p>
                            <p className='font-inter text-[#C7C9CA] leading-6'>
                                Settle your electricity, water, and subscription bills right from the app.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>

        <section
            className='bg-[#F8F1EE] flex flex-col items-center py-[90px] px-4 lg:px-[100px] gap-[32px] lg:gap-[60px]'
        >
            <p className='text-[32px] text-center lg:text-[44px] text-[#111111] font-hanken font-semibold leading-[52px]'>Why Choose LAPO Mobile App?</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] lg:gap-[50px]'>
                <div className='flex flex-col items-center gap-4'>
                    <div className='bg-[#fff] w-[84px] h-[84px] rounded flex items-center justify-center'>
                        <img src={LockB} alt="LockB" className='w-[32px] h-[32px]' />
                    </div>
                    <p className='font-hanken font-semibold text-[#111111] text-[20px] lg:text-[22px] leading-[28px]'>Secure Transactions</p>
                    <p className='text-center text-[#555555] text-base leading-[120%] lg:text-[18px] font-inter lg:leading-[28px]'>Your data is protected with top-tier encryption.</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <div className='bg-[#fff] w-[84px] h-[84px] rounded flex items-center justify-center'>
                        <img src={Cards} alt="Cards" className='w-[32px] h-[32px]' />
                    </div>
                    <p className='font-hanken font-semibold text-[#111111] text-[20px] lg:text-[22px] leading-[28px]'>Multiple Payment Options</p>
                    <p className='text-center text-[#555555] text-base leading-[120%] lg:text-[18px] font-inter lg:leading-[28px]'>Transfer funds, pay bills, and top up with various payment methods.</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <div className='bg-[#fff] w-[84px] h-[84px] rounded flex items-center justify-center'>
                        <img src={Tablet} alt="Tablet" className='w-[32px] h-[32px]' />
                    </div>
                    <p className='font-hanken font-semibold text-[#111111] text-[20px] lg:text-[22px] leading-[28px]'>User-Friendly Interface</p>
                    <p className='text-center text-[#555555] text-base leading-[120%] lg:text-[18px] font-inter lg:leading-[28px]'>Simple, intuitive, and easy to navigate.</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <div className='bg-[#fff] w-[84px] h-[84px] rounded flex items-center justify-center'>
                        <img src={Globe} alt="Globe" className='w-[32px] h-[32px]' />
                    </div>
                    <p className='font-hanken font-semibold text-[#111111] text-[20px] lg:text-[22px] leading-[28px]'>Anytime, Anywhere Access</p>
                    <p className='text-center text-[#555555] text-base leading-[120%] lg:text-[18px] font-inter lg:leading-[28px]'>Simple, intuitive, and easy to navigate.</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <div className='bg-[#fff] w-[84px] h-[84px] rounded flex items-center justify-center'>
                        <img src={Heart} alt="Heart" className='w-[32px] h-[32px]' />
                    </div>
                    <p className='font-hanken font-semibold text-[#111111] text-[20px] lg:text-[22px] leading-[28px]'>Friendly human support</p>
                    <p className='text-center text-[#555555] text-base leading-[120%] lg:text-[18px] font-inter lg:leading-[28px]'>Need help? Chat with our friendly support team anytime, anywhere.</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <div className='bg-[#fff] w-[84px] h-[84px] rounded flex items-center justify-center'>
                        <img src={LightningB} alt="LightningB" className='w-[32px] h-[32px]' />
                    </div>
                    <p className='font-hanken font-semibold text-[#111111] text-[20px] lg:text-[22px] leading-[28px]'>Instant Notifications</p>
                    <p className='text-center text-[#555555] text-base leading-[120%] lg:text-[18px] font-inter lg:leading-[28px]'>Stay updated on all your transactions.</p>
                </div>

            </div>

        </section>

     
        <section
            // ref={sectionRef}
            className='px-5  py-[112px] gap-[80px] flex flex-col h-auto lg:h-[695px] bg-[#753412]'
        >
            {/* Header section unchanged */}
            <div className='flex items-center flex-col gap-6'>
                <div className='w-[85px] h-[32px] p-2 rounded-lg flex items-center justify-center bg-[#fff]'>
                    <p className='text-xs text-[#E78020] leading-[15px]'>Application</p>
                </div>
                <p className='font-hanken text-[32px] leading-[120%] capitalize lg:text-[56px] lg:leading-[67px] text-[#fff]'>
                    How to register on the LAPO Mobile App
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
                        <div className='w-[60px] h-[40px] lg:w-[80px] lg:h-[80px] rounded-full flex items-center justify-center bg-[#fff]'>
                            <p className='font-hanken font-medium text-[#000] text-[20px] leading-[130%] lg:text-[32px] lg:leading-[41px]'>{step}</p>
                        </div>
                        <div className="flex flex-col items-start lg:items-center gap-2">
                            <p className='font-hanken font-medium text-base leading-[130%] lg:text-[20px] lg:leading-[26px] text-[#fff]'>
                                Step {step}: {index === 0 ? 'Download the app' : index === 1 ? "Register" : 'Start banking smarter'}
                            </p>
                            <p className='font-inter text-[#D9D9D9] text-base leading-[150%] lg:text-[20px] lg:leading-[30px] lg:text-center'>
                                {   
                                    index === 0 ? 'Download the LAPO Mobile App from Google Play or the App Store.' : 
                                    index === 1 ? 'Register with your LAPO account details on the app.' :
                                    'Seamless transactions, easy bill payment anytime, anywhere!'
                                }
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        
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
                        Find answers to your questions about our Digital Banking and application process. 
                    </p>
                </div>
                <div className='flex flex-col gap-[48px]'>
                    {loading ? <p className='text-center font-inter text-[#000]'>Loading...</p> 
                    : faqByCategory?.length > 0 ? faqByCategory?.map((faqItem) => (
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
                    >
                        <p className='text-[#fff] font-hanken font-medium leading-6 text-base'>Contact</p>
                    </button>
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
                        Find answers to your questions about our POS Terminal and application process.
                    </p>
                </div>
                <div className='flex flex-col gap-[48px]'>
                    <div className='flex flex-col gap-4'>
                        <p className='font-hanken text-[#753412] font-medium leading-[30px] text-[20px]'> Is the LAPO Mobile App free to use?</p>
                        <p className='font-inter text-[#000000] text-base leading-6'>
                            Yes! Download and use the app for free. Standard transaction charges may apply.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-hanken text-[#753412] font-medium leading-[30px] text-[20px]'>How do I reset my password?</p>
                        <p className='font-inter text-[#000000] text-base leading-6'>
                            Simply tap ‘Forgot Password’ on the login screen and follow the steps.
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
                        <p className='font-hanken text-[#753412] font-medium leading-[30px] text-[20px]'>Is my information safe?</p>
                        <p className='font-inter text-[#000000] text-base leading-6'>
                            Absolutely! We use bank-grade security to protect your data.
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
            className='w-full px-5 lg:px-[80px] py-[36px] lg:py-[96px] lg:h-[512px] overflow-hidden'
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

export default MobileApp