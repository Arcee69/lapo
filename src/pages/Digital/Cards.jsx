import React, { useRef, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'

import CardMain from "../../assets/png/card_main.png"
import Code from "../../assets/png/code.png"
import Premium from "../../assets/png/premium.png"

import Money from "../../assets/svg/money.svg"
import CardSmall from "../../assets/svg/card.svg"
import Smile from "../../assets/svg/smile.svg"
import Shield from "../../assets/svg/shield.svg"


const Cards = () => {

    const { state } = useLocation()

    const navigate = useNavigate()

    const cardsRef = useRef(null)
    const ussdRef = useRef(null)
    const detailsRef = useRef(null)

    useEffect(() => {
        if (state?.section === "cards" && cardsRef.current) {
            cardsRef.current.scrollIntoView({ behavior: "smooth" });
        }
        if (state?.section === "ussd" && ussdRef.current) {
            ussdRef.current.scrollIntoView({ behavior: "smooth" });
        }
        if (state?.section === "details" && detailsRef.current) {
            detailsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [state]);

  return (
    <div className='w-full' ref={cardsRef}>

        <section 
            className='bg-[#012412] lg:h-[875px] flex flex-col items-center gap-3 lg:gap-[64px] justify-center'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex flex-col pt-[133px]'>
                <div className='flex flex-col items-center px-5 lg:px-0 gap-4 lg:w-[1088px] mx-auto'>
                    <p className='font-inter font-semibold text-base lg:leading-[64px] text-[#EAECF0]'>
                        Super. Simple. Banking.
                    </p>
                    <div className='flex flex-col gap-6'>
                        <p className='font-hanken text-[32px] lg:text-[56px] leading-[100%] text-center font-medium text-[#FFFFFF] lg:leading-[56px]'>
                            Bank Anywhere, Anytime with <span className='text-[#F99650]'>Ease</span>
                        </p>
                        <p className='font-hanken text-[20px] leading-[30px] text-[#FFFFFF] text-center'>
                            Simple, transparent banking. No hidden fees and free overdrafts.
                        </p>
                    </div>
                    <div className='flex items-center gap-[17px]'>
                        <button
                            className='w-[160px] lg:w-[183px] h-[54px] flex items-center justify-center bg-[#fff] rounded-lg'
                            onClick={() => {navigate("/digital/cards", {state: {section: "details" }}); window.scrollTo(0, 0)}}
                        >
                            <p className='text-[#F99650] font-medium text-base leading-7'>Learn More</p>
                        </button>
                        {/* <button
                            className='w-[160px] lg:w-[182px] h-[54px] border-[#FFFFFF] border flex items-center justify-center rounded-lg'
                        >
                            <p className='text-[#FFFFFF] font-medium text-base leading-7'>Learn More</p>
                        </button> */}
                    </div>
                </div>
                <div className='w-full mx-auto mt-[64px]'>
                    <img 
                        src="https://res.cloudinary.com/dairsbzlv/image/upload/v1744710529/cards_transparent_sa51pb.png" 
                        alt="Card" 
                        className='w-[1000px] mx-auto' 
                    />
                </div>
            </div>
        </section>

        <section
            className='bg-[#fff] flex flex-col pt-[48px] pb-[148px] lg:py-[96px] px-[32px] lg:px-[80px] items-center gap-[64px] justify-center'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
            ref={detailsRef}
        >
            <div className='flex flex-col items-center justify-center gap-3'>
                <div className='bg-[#E8FFF4] w-[75px] flex items-center justify-center flex-col h-[32px] rounded-[6px]'>
                    <p className='font-hanken text-sm font-medium leading-[15px] text-[#00954B]'>Benefits</p>
                </div>
                <p className='font-hanken text-[#101828] text-center font-medium text-[32px] lg:text-[48px] leading-[44px]'>Why Choose the LAPO Debit Card?</p>
            </div>
            <div className='flex flex-col lg:flex-row items-start gap-[48px] lg:gap-[96px]'>
                <div className='lg:w-[391.82px] lg:h-[428px] flex flex-col gap-[48px]'>
                    <div className='flex flex-col gap-5'>
                        <img src={Money} alt="Money" className='w-[48px] h-[48px]' />
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#101828] font-inter font-medium text-[20px] leading-[30px]'>
                                Access your funds anytime, anywhere:
                            </p>
                            <p className='text-[#667085] font-inter text-base leading-6'>
                                Say goodbye to the limitations of cash and long queues at the Bank. 
                                With a LAPO Debit Card, your money is always at your fingertips.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <img src={Shield} alt="Shield" className='w-[48px] h-[48px]' />
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#101828] font-inter font-medium text-[20px] leading-[30px]'>
                                Enhanced security:
                            </p>
                            <p className='text-[#667085] font-inter text-base leading-6'>
                                Your debit card features EMV chip technology, PIN authentication, 
                                and zero-liability protection, ensuring safe and secure transactions for peace of mind.
                            </p>
                        </div>
                    </div>
                </div>
                
                <img src={CardMain} alt="CardMain" className='w-[374px] hidden lg:block h-2/3' />

                <div className='lg:w-[391.82px] lg:h-[428px] flex flex-col gap-[48px]'>
                    <div className='flex flex-col gap-5'>
                        <img src={CardSmall} alt="CardSmall" className='w-[48px] h-[48px]' />
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#101828] font-inter font-medium text-[20px] leading-[30px]'>
                                Convenient cashless payments:
                            </p>
                            <p className='text-[#667085] font-inter text-base leading-6'>
                                Embrace the future of payments and experience the speed, convenience, 
                                and hygiene benefits of a seamless contactless payment solution.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <img src={Smile} alt="Smile" className='w-[48px] h-[48px]' />
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#101828] font-inter font-medium text-[20px] leading-[30px]'>
                                Exclusive Discounts & Rewards
                            </p>
                            <p className='text-[#667085] font-inter text-base leading-6'>
                                Enjoy special offers, cashback, and discounts from partner merchants.
                            </p>
                        </div>
                    </div>
                </div>

                <img src={CardMain} alt="CardMain" className='w-[374px] mx-auto lg:hidden block h-2/3' />
            </div>

        </section>

        <section
            className='bg-[#E78020] h-[330px] flex py-[96px] px-[32px] lg:px-0 items-center justify-center'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='lg:w-[768px] flex flex-col gap-5'>
                <p className='font-inter font-semibold text-[24px] leading-[120%] lg:text-[36px] lg:leading-[44px] text-[#fff] text-center'>
                    Get your LAPO Debit Card today and unlock a world of financial freedom and convenience!
                </p>
                <p className='font-inter text-base leading-[150%] lg:text-[20px] lg:leading-[30px] text-center text-[#fff]'>
                    Visit any of our branches to apply for your card
                </p>
            </div>
        </section>

        <section
            className='lg:px-[80px] py-[96px] flex flex-col items-center gap-[21px]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
            ref={ussdRef}
        >
            <div className='flex flex-col items-center lg:w-[768px] justify-center gap-3'>
                <div className='bg-[#E8FFF4] w-[75px] flex items-center justify-center flex-col h-[32px] rounded-[6px]'>
                    <p className='font-hanken text-sm font-medium leading-[15px] text-[#00954B]'>Benefits</p>
                </div>
                <p className='font-hanken text-[#101828] text-center font-medium capitalize text-[32px] leading-[100%] lg:text-[54px] lg:leading-[70px]'>
                    Experience easy banking with our USSD platform
                </p>
            </div>

            <img src={Code} className="lg:w-[990px] mx-auto" alt='Code' />

            <div className='grid grid-cols-1 md:grid-cols-2 px-[32px] lg:px-0 lg:grid-cols-4 gap-[32px]'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[#101828] font-medium text-[20px] leading-[30px]'>Transfer</p>
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            Send money instantly to any bank, anytime, anywhere. Secure and hassle-free!
                        </p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='font-inter text-base text-[#E78020] font-medium leading-6'>Contact Us</p>
                        <FaArrowRight className='w-4 h-4 mt-[1px] text-[#E78020]' />
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[#101828] font-medium text-[20px] leading-[30px]'>Bills Payment</p>
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            Pay your electricity, water, TV, and other bills in seconds. No queues, no stress!
                        </p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='font-inter text-base text-[#E78020] font-medium leading-6'>Contact Us</p>
                        <FaArrowRight className='w-4 h-4 mt-[1px] text-[#E78020]' />
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[#101828] font-medium text-[20px] leading-[30px]'>Balance Enquiry</p>
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            Check your account balance instantly. Stay on top of your finances
                        </p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='font-inter text-base text-[#E78020] font-medium leading-6'>Contact Us</p>
                        <FaArrowRight className='w-4 h-4 mt-[1px] text-[#E78020]' />
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[#101828] font-medium text-[20px] leading-[30px]'>Airtime, Data Purchase and More!</p>
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            Top up airtime, buy data, and access more services—all in one place!
                        </p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='font-inter text-base text-[#E78020] font-medium leading-6'>Contact Us</p>
                        <FaArrowRight className='w-4 h-4 mt-[1px] text-[#E78020]' />
                    </div>
                </div>
               
                
            </div>
        </section>

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

    </div>
  )
}

export default Cards