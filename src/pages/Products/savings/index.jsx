import React,  { useRef, useEffect, useState } from 'react'
import { IoChevronForward } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom'

import Left from "../../../assets/svg/left_brick.svg"
import Right from "../../../assets/svg/right_brick.svg"
import Stars from "../../../assets/svg/stars.svg"
import Wallet from "../../../assets/svg/wallet.svg"
import Employees from "../../../assets/svg/employees.svg"
import Bubbles from "../../../assets/svg/bubbles.svg"
import Parent from "../../../assets/svg/parent.svg"


import SmilingPeople from "../../../assets/png/smilingPeople.png"
import SmallBox from '../../../components/SmallBox'
import BigBox from '../../../components/BigBox'



const Savings = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    const { state } = useLocation()

    const saveRef = useRef(null)
    const productRef = useRef(null)

    const navigate = useNavigate()

    useEffect(() => {
        if (state?.section === "save" && saveRef.current) {
            saveRef.current.scrollIntoView({ behavior: "smooth" });
        }
        if (state?.section === "product" && productRef.current) {
            productRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, [state]);

  return (
    <div className='w-full'>

        <section
            className='bg-[#00984C] h-auto pt-[120px] relative overflow-hidden'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex items-center justify-between absolute top-44 z-10 -inset-x-4'>
                <img src={Left} alt='Left' className='hidden md:block' />
                <img src={Right} alt='Right' className='hidden md:block' />
            </div>

            <div className='flex flex-col items-center pt-[50px] px-5 lg:px-0 lg:pt-[100px] pb-[80px]'> {/* pt-[173px] */}
                <div className='flex flex-col items-center gap-4 w-full lg:w-[688px] mx-auto'>
                    <div className='w-[211px] h-[28px] rounded-[6px] gap-1 flex items-center justify-center bg-[#FDF2E9]'>
                        <img src={Stars} alt='Stars' className='w-[13px] h-[13px]' />
                        <p className='text-xs font-hanken text-[#E78020]'>Empowering 6M+ Nigerians</p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p className='font-hanken text-[32px] lg:text-[56px] text-center font-medium text-[#FFFFFF] leading-[32px] lg:leading-[56px]'>
                            Save for Tomorrow, <br />Start Today
                        </p>
                        <p className='font-hanken  text-base leading-[100%] lg:text-[20px] lg:leading-[30px] text-[#FFFFFF] text-center'>
                            Join countless satisfied customers who have taken the first step towards a secure 
                            financial future. Our savings plans are designed to help you achieve your goals with ease.
                        </p>
                    </div>
                    <div className='flex items-center gap-[17px]'>
                        <button
                            className='w-[160px] lg:w-[180px] h-[43px] z-10 lg:h-[56px] flex items-center cursor-pointer justify-center bg-[#fff] rounded-lg'
                            type='button'
                            onClick={() => {
                                navigate("/products/savings", {state: {section: "product"}}), 
                                window.scrollTo(0, 0)
                            }}
                        >
                            <p className='text-[#F99650] font-medium text-base leading-7'>Learn More</p>
                        </button>
                        {/* <button
                            className='w-[160px] lg:w-[182px] h-[43px] lg:h-[54px] border-[#FFFFFF] border flex items-center justify-center rounded-lg'
                        >
                            <p className='text-[#FFFFFF] font-medium text-base leading-7'></p>
                        </button> */}

                    </div>
                </div>
            </div>
        </section>

        <img src={SmilingPeople} alt='SmilingPeople' className='h-[297.55px] lg:h-[576px] w-full relative -top-2' />

        <section
            className='flex flex-col items-center px-5 lg:px-[75px] py-[112px] gap-[32px]'
        >
            <div className='w-[110px] h-[32px] bg-[#E8FFF4] rounded-lg p-1 flex items-center justify-center'>
                <p className='text-[#00954B] font-medium font-hanken text-sm leading-[15px]'>LAPO Savings</p>
            </div>
            <p className='text-[#000] font-hanken font-medium text-[32px] text-center lg:text-[54px] leading-[46px]'>Unlock Your Financial Potential with Our Savings</p>
            <div className='flex flex-col lg:flex-row items-center gap-[30px]'>
                <div 
                    className='w-full lg:w-[410px] h-[283px] border border-[#EAEEF2] rounded-[34px] py-[29.5px] px-[41.5px] flex flex-col gap-[17px]'
                >
                    <img src={Wallet} alt="Wallet" className='w-[68px] h-[68px]' />
                    <p className='font-inter font-bold text-[21px] leading-[30px] text-[#00984C]'>Lowest entry balance</p>
                    <p className='text-[#445D65] font-inter text-[15px] leading-6'>Start saving with as little as possible, making financial security accessible to everyone.</p>
                </div>
                <div 
                    className='w-full h-auto lg:w-[410px] lg:h-[283px] border border-[#EAEEF2] rounded-[34px] py-[29.5px] px-[41.5px] flex flex-col gap-[17px]'
                >
                    <img src={Employees} alt="Employees" className='w-[68px] h-[68px]' />
                    <p className='font-inter font-bold text-[21px] leading-[30px] text-[#00984C]'>Easy access to your funds</p>
                    <p className='text-[#445D65] font-inter text-[15px] leading-6'>
                        Enjoy seamless withdrawals through our Mobile App, Debit Card, 
                        and ATM services whenever you need cash.
                    </p>
                </div>
                <div 
                    className='w-full lg:w-[410px] h-[283px] border border-[#EAEEF2] rounded-[34px] py-[29.5px] px-[41.5px] flex flex-col gap-[17px]'
                >
                    <img src={Bubbles} alt="Bubbles" className='w-[68px] h-[68px]' />
                    <p className='font-inter font-bold text-[21px] leading-[30px] text-[#00984C]'>Tailored to your needs</p>
                    <p className='text-[#445D65] font-inter text-[15px] leading-6'>
                        Choose from a variety of savings options, whether you’re saving for a child’s future, 
                        a big investment, or just everyday expenses.
                    </p>
                </div>
            </div>
        </section>

        <section
            className='bg-[#F7F9FC] py-[51px] lg:py-[112px] px-5 lg:px-[64px] flex flex-col items-center gap-[40px] '
            ref={productRef}
        >
            <div className='flex flex-col items-center gap-6'>
                <div className='w-[110px] h-[32.59px] flex items-center justify-center p-1 rounded-lg bg-[#E8FFF4]'>
                    <p className='font-hanken font-medium text-sm leading-[15px] text-[#00954B]'>LAPO Savings</p>
                </div>
                <p className='font-hanken text-[#000000] text-[32px] text-center capitalize lg:text-[54px] leading-[120%] lg:leading-[64px]'>7 Ways to grow your future</p>
                <p className='text-base lg:text-[18px] text-[#000000] w-full lg:w-[947px] mx-auto font-inter text-center leading-[150%] lg:leading-[27px]'>
                    Whether you’re saving for your children’s education, growing your business, 
                    or preparing for emergencies, our savings accounts are designed to help you 
                    achieve your financial goals with ease.
                </p>
            </div>

            <div  className='flex flex-col gap-4' ref={productRef}>
                <div onClick={() => {navigate("/savings/festival"); window.scrollTo(0, 0)}} className='w-full h-auto lg:h-[330px] bg-[#fff] py-[10px] px-2 lg:px-[28px] rounded-xl flex flex-col gap-[51px] drop-shadow cursor-pointer group border-[3px] border-[#4380BE52] hover:border-0 hover:bg-[#00984C]'>
                    <div className='flex items-center justify-between'>
                        <div className='w-auto h-[40px] flex items-center p-2 bg-[#F7F9FC] group-hover:bg-[#00984C] justify-center rounded-[8px]'>
                            <p className='text-xs lg:text-[17px] font-hanken group-hover:text-[#fff] text-[#00984C] leading-[15px]'>High Yield Savings</p>
                        </div>
                        <img src={Parent} alt="Parent" className='' />
                    </div>
                    <div className='flex flex-col '>
                        <p 
                            className='text-[#00984C] group-hover:text-[#fff] font-medium text-[20px] leading-[100%] lg:text-[40px] lg:leading-[60px]'
                        >
                            Xpress Savings Account
                        </p>
                        <p className='font-inter text-[#000000] w-full lg:w-[830px] group-hover:text-[#FFFFFF] text-sm leading-[150%] lg:text-[20px] lg:leading-[30px]'>
                            This is a very flexible and convenient savings account designed for clients to save money on a voluntary basis.
                        </p>
                        <div onClick={() => {navigate("/savings/xpress"), window.scrollTo(0, 0)}} className='bg-[#FFFFFF] flex items-center gap-1 cursor-pointer w-[127px] rounded h-[37px] py-2 group-hover:px-4'> {/* #FF5F08 */}
                            <p className='text-[#FF5F08] font-inter whitespace-nowrap text-sm lg:text-[19px]'>Learn More</p>
                            <IoChevronForward className='text-[#FF5F08] w-5 h-5' /> 
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-4 items-center'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col lg:flex-row items-center gap-4'>
                            <SmallBox 
                                heading="Savings"
                                title="Regular Deposit (Savings)"
                                subtitle="The Savings Plan Account is designed for individuals and groups who wish to 
                                save funds toward a particular project(s) over a specified period of time and 
                                earn interest on their savings."
                                link="/savings/regular"
                            />
                            <SmallBox 
                                heading="Savings"
                                title="My Pikin & I Savings <br /> Account"
                                subtitle="Child-focused savings account with high interest and life insurance. 
                                A chance for your child to win LAPO MfB Scholarship."
                                link="/savings/pikin"
                            />
                        </div>
                        <BigBox 
                            heading="High Yield Savings"
                            title="Festival Savings"
                            subtitle="The Savings Plan Account is designed for individuals and groups who wish to save 
                            funds toward a particular project(s) over a specified period of time and earn 
                            interest on their savings."
                            link="/savings/festival"
                        />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <BigBox 
                            heading="High Yield Savings"
                            title="Fixed Deposit Account"
                            subtitle="The Savings Plan Account is designed for individuals and groups who wish to save funds toward a particular project(s) over a specified period of time and earn interest on their savings."
                            link="/savings/fixed"
                        />
                        <div className='flex flex-col lg:flex-row items-center gap-4'>
                            <SmallBox 
                                heading="Savings"
                                title="Individual Savings"
                                subtitle="The Savings Plan Account is designed for individuals and groups who wish to save funds toward a particular project(s) over a specified period of time and earn interest on their savings."
                                link="/savings/individual/savings"
                            />
                            <SmallBox 
                                heading="Investment Savings"
                                title="Individual Current"
                                subtitle="This account is designed for individuals that are either in business or employed by private or public companies as salary account"
                                link="/savings/individual/current"
                            />
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto lg:h-[330px] bg-[#fff] py-[10px] px-2 lg:px-[28px] rounded-xl flex flex-col gap-[51px] group  border-[3px] border-[#4380BE52] hover:border-0  hover:bg-[#00984C]'>
                    <div className='flex items-center justify-between'>
                        <div className='w-auto h-[40px] flex items-center p-2 bg-[#F7F9FC]  group-hover:bg-[#00984C] justify-center rounded-[8px]'>
                            <p className='text-xs lg:text-[17px] font-hanken group-hover:text-[#fff] text-[#00984C] leading-[15px]'>High Yield Savings</p>
                        </div>
                        <img src={Parent} alt="Parent" className='' />
                    </div>
                    <div className='flex flex-col '>
                        <p 
                            className='text-[#00984C] group-hover:text-[#fff] font-medium text-[20px] leading-[100%] lg:text-[40px] lg:leading-[60px]'
                        >
                            Social Impact Deposit (SID)
                        </p>
                        <p className='font-inter text-[#000000] lg:w-[830px] group-hover:text-[#FFFFFF] text-sm leading-[150%] lg:text-[20px] lg:leading-[30px]'>
                            The Savings Plan Account is designed for individuals and groups who wish to save 
                            funds toward a particular project(s) over a specified period of time and earn 
                            interest on their savings.
                        </p>
                        <div onClick={() => {navigate("/savings/social"), window.scrollTo(0, 0)}} className='bg-[#FFFFFF] flex items-center gap-1 w-[127px] cursor-pointer rounded h-[37px] py-2 group-hover:px-4'> {/* #FF5F08 */}
                            <p className='text-[#FF5F08] font-inter whitespace-nowrap text-sm lg:text-[19px]'>Learn More</p>
                            <IoChevronForward className='text-[#FF5F08] w-5 h-5' /> 
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section
            className='bg-[#fff] flex flex-col items-center py-[59px] gap-[59px]'
        >
            <div className='flex flex-col items-center'>
                <div className='bg-[#FDF2E9] rounded-[6px] flex items-center justify-center w-[119px] h-[32px]'>
                    <p className='font-hanken font-medium text-sm text-[#E78020] leading-[15px]'>Word of mouth</p>
                </div>
                <p className='font-hanken text-[32px] leading-[32px] lg:text-[54px] lg:leading-[56px] text-[#000] lg:w-[635px] text-center'>Hear From Our LAPO Saver</p>
            </div>

            <iframe 
                width={`${isMobile ? "450" : "1000"}`}
                height={`${isMobile ? "300" : "595" }`}
                src="https://www.youtube.com/embed/X8zt2HeyfWU?si=x3kx-nZT7rksqvHj" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
            ></iframe>
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

export default Savings