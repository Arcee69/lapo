import React from 'react'
import { IoChevronForward } from 'react-icons/io5'

import Left from "../../assets/svg/left_brick.svg"
import Right from "../../assets/svg/right_brick.svg"
import Stars from "../../assets/svg/stars.svg"
import Wallet from "../../assets/svg/wallet.svg"
import Employees from "../../assets/svg/employees.svg"
import Bubbles from "../../assets/svg/bubbles.svg"
import Parent from "../../assets/svg/parent.svg"


import SmilingPeople from "../../assets/png/smilingPeople.png"
import SmallBox from '../../components/SmallBox'
import BigBox from '../../components/BigBox'

const Savings = () => {
  return (
    <div className='w-full'>

        <section
            className='bg-[#00984C] h-auto relative overflow-hidden'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex items-center justify-between absolute top-44 z-10 -inset-x-4'>
                <img src={Left} alt='Left' className='' />
                <img src={Right} alt='Right' className='' />
            </div>

            <div className='flex flex-col items-center pt-[173px] pb-[80px]'>
                <div className='flex flex-col items-center gap-4 w-[688px] mx-auto'>
                    <div className='w-[211px] h-[28px] rounded-[6px] gap-1 flex items-center justify-center bg-[#FDF2E9]'>
                        <img src={Stars} alt='Stars' className='w-[13px] h-[13px]' />
                        <p className='text-xs font-hanken text-[#E78020]'>Empowering 5M+ Nigerians</p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p className='font-hanken text-[56px] text-center font-medium text-[#FFFFFF] leading-[56px]'>
                            Save for Tomorrow, Start Today
                        </p>
                        <p className='font-hanken text-[20px] leading-[30px] text-[#FFFFFF] text-center'>
                            Join countless satisfied customers who have taken the first step towards a secure 
                            financial future. Our savings plans are designed to help you achieve your goals with ease.
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

        <img src={SmilingPeople} alt='SmilingPeople' className='h-[576px] w-full relative -top-2' />

        <section
            className='flex flex-col items-center px-[75px] py-[112px] gap-[32px]'
        >
            <div className='w-[110px] h-[32px] bg-[#E8FFF4] rounded-lg p-1 flex items-center justify-center'>
                <p className='text-[#00954B] font-medium font-hanken text-sm leading-[15px]'>LAPO Savings</p>
            </div>
            <p className='text-[#000] font-hanken font-medium text-[54px] leading-[46px]'> Unlock Your Financial Potential with Our Savings</p>
            <div className='flex items-center gap-[30px]'>
                <div 
                    className='w-[410px] h-[283px] border border-[#EAEEF2] rounded-[34px] py-[29.5px] px-[41.5px] flex flex-col gap-[17px]'
                >
                    <img src={Wallet} alt="Wallet" className='w-[68px] h-[68px]' />
                    <p className='font-inter font-bold text-[21px] leading-[30px] text-[#00984C]'>Lowest entry balance</p>
                    <p className='text-[#445D65] font-inter text-[15px] leading-6'>Identify real talents without the hassle of time-consuming CV screening</p>
                </div>
                <div 
                    className='w-[410px] h-[283px] border border-[#EAEEF2] rounded-[34px] py-[29.5px] px-[41.5px] flex flex-col gap-[17px]'
                >
                    <img src={Employees} alt="Employees" className='w-[68px] h-[68px]' />
                    <p className='font-inter font-bold text-[21px] leading-[30px] text-[#00984C]'>Easy access to your funds</p>
                    <p className='text-[#445D65] font-inter text-[15px] leading-6'>
                        Online workforce assessments encourage
                        your employees to grow and cultivate a
                        positive team spirit
                    </p>
                </div>
                <div 
                    className='w-[410px] h-[283px] border border-[#EAEEF2] rounded-[34px] py-[29.5px] px-[41.5px] flex flex-col gap-[17px]'
                >
                    <img src={Bubbles} alt="Bubbles" className='w-[68px] h-[68px]' />
                    <p className='font-inter font-bold text-[21px] leading-[30px] text-[#00984C]'>Tailored to your needs</p>
                    <p className='text-[#445D65] font-inter text-[15px] leading-6'>
                        Choose from various plans tailored to fit your unique financial needs.
                    </p>
                </div>
            </div>
        </section>

        <section
            className='bg-[#F7F9FC] py-[112px] px-[64px] flex flex-col items-center gap-[40px] '
        >
            <div className='flex flex-col items-center gap-6'>
                <div className='w-[110px] h-[32.59px] flex items-center p-1 rounded bg-[#E8FFF4]'>
                    <p className='font-hanken font-medium text-sm leading-[15px] text-[#00954B]'>LAPO Savings</p>
                </div>
                <p className='font-hanken text-[#000000] text-[54px] leading-[64px]'>7 Ways to grow your future</p>
                <p className='text-[18px] text-[#000000] w-[947px] mx-auto font-inter text-center leading-[27px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse varius enim in eros elementum tristique.
                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, 
                    ut commodo diam libero vitae erat.
                </p>
            </div>

            <div className='flex flex-col gap-4'>
                <div className='flex gap-4 items-center'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-4'>
                            <SmallBox 
                                heading="Savings"
                                title="Savings Plan Account"
                                subtitle="The Savings Plan Account is designed for individuals and groups who wish to 
                                save funds toward a particular project(s) over a specified period of time and 
                                earn interest on their savings."
                                link="/products/savings/plan"
                            />
                            <SmallBox 
                                heading="Savings"
                                title="My Pikin & I Savings <br /> Account"
                                subtitle="Child-focused savings account with high interest and life insurance. 
                                A chance for your child to win LAPO MfB Scholarship."
                            />
                        </div>
                        <BigBox 
                            heading="High Yield Savings"
                            title="Xpress Savings Account"
                            subtitle="This is a very flexible and convenient savings account designed for clients to save money on a voluntary basis."
                        />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <BigBox 
                            heading="High Yield Savings"
                            title="Fixed Deposit Account"
                            subtitle="The Savings Plan Account is designed for individuals and groups who wish to save funds toward a particular project(s) over a specified period of time and earn interest on their savings."
                        />
                        <div className='flex items-center gap-4'>
                            <SmallBox 
                                heading="Savings"
                                title="Individual Savings"
                                subtitle="The Savings Plan Account is designed for individuals and groups who wish to save funds toward a particular project(s) over a specified period of time and earn interest on their savings."
                            />
                            <SmallBox 
                                heading="Investment Savings"
                                title="Social Impact Deposit (SID)"
                                subtitle="The Savings Plan Account is designed for individuals and groups who wish to save funds toward a particular project(s) over a specified period of time and earn interest on their savings."
                            />
                        </div>
                    </div>
                </div>
                <div className='w-full h-[330px] bg-[#fff] py-[10px] px-[28px] rounded-xl flex flex-col gap-[51px]'>
                    <div className='flex items-center justify-between'>
                        <div className='w-auto h-[40px] flex items-center p-2 bg-[#F7F9FC]  group-hover:bg-[#00984C] justify-center rounded-[8px]'>
                            <p className='text-[17px] font-hanken group-hover:text-[#fff] text-[#00984C] leading-[15px]'>High Yield Savings</p>
                        </div>
                        <img src={Parent} alt="Parent" className='' />
                    </div>
                    <div className='flex flex-col '>
                        <p 
                            className='text-[#00984C] group-hover:text-[#fff] font-medium text-[40px] leading-[60px]'
                        >
                            Festival Savings
                        </p>
                        <p className='font-inter text-[#000000] w-[830px] group-hover:text-[#FFFFFF] text-[20px] leading-[30px]'>
                            The Savings Plan Account is designed for individuals and groups who wish to save 
                            funds toward a particular project(s) over a specified period of time and earn 
                            interest on their savings.
                        </p>
                        <div className='bg-[#FFFFFF] flex items-center gap-1 w-[127px] rounded h-[37px] py-2 group-hover:px-4'> {/* #FF5F08 */}
                            <p className='text-[#FF5F08] font-inter whitespace-nowrap text-[19px]'>Learn More</p>
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
                <p className='font-hanken text-[54px] leading-[56px] text-[#000] w-[635px] text-center'>Hear From Our LAPO Saver</p>
            </div>

            <iframe 
                width="1000" 
                height="595" 
                src="https://www.youtube.com/embed/X8zt2HeyfWU?si=x3kx-nZT7rksqvHj" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
            ></iframe>
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

export default Savings