import React, { useEffect, useRef } from 'react'
import { IoChevronForwardSharp } from 'react-icons/io5'

import LoanPeople from "../../assets/png/loan_people.png"
import Phone from "../../assets/png/phone.png"

import Left from "../../assets/svg/left_loans_spiral.svg"
import Right from "../../assets/svg/right_loans_spiral.svg"
import Stars from "../../assets/svg/stars.svg"
import LoanBox from '../../components/LoanBox'

const Loans = () => {
    const sectionRef = useRef(null);
    const stepsContainerRef = useRef(null); 

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

  return (
    <div className='w-full'>
        <section 
            className='bg-[#941D58] h-[645px] relative overflow-hidden'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex items-center justify-between absolute -bottom-24 z-10 -inset-x-44'>
                <img src={Left} alt='Left' className='' />
                <img src={Right} alt='Right' className='' />
            </div>

            <div className='flex flex-col items-center pt-[173px]'>
                <div className='flex flex-col items-center gap-4 w-[688px] mx-auto'>
                    <div className='w-[211px] h-[28px] rounded-[6px] gap-1 flex items-center justify-center bg-[#FDF2E9]'>
                        <img src={Stars} alt='Stars' className='w-[13px] h-[13px]' />
                        <p className='text-xs font-hanken text-[#E78020]'>Empowering 5M+ Nigerians</p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p className='font-hanken text-[54px] text-center font-medium text-[#FFFFFF] leading-[64px]'>
                            Get Easy Access Loans to Fund your Business
                        </p>
                        <p className='font-inter text-[18px] leading-[27px] text-[#FFFFFF] text-center'>
                            We provide a range of loans for income-generating activities.
                        </p>
                    </div>
                    <button
                        className='w-[245px] h-[59px] flex items-center justify-center bg-[#fff] rounded-lg'
                    >
                        <p className='text-[#F99650] font-medium text-base leading-7' >Start your loan application</p>
                    </button>
                </div>
            </div>

        </section>

        <img src={LoanPeople} alt='LoanPeople' className='h-[576px] w-full' />

        <section 
            className='w-full py-[112px] px-[64px] flex items-start justify-between'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            {/* Left Sticky Container */}
            <div className='w-[340px] flex flex-col gap-6 sticky top-[112px]'>
                <div className='w-[90px] h-[32px] rounded-lg bg-[#E8FFF4] p-2 flex items-center justify-center'>
                    <p className='font-hanken text-xs leading-[15px] text-[#00954B]'>LAPO Credit</p>
                </div>
                <p className='font-hanken text-[#000] text-[48px] leading-[57px]'>Loan Products</p>
                <p className='font-inter text-[18px] text-[#000]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse varius enim in eros elementum tristique. 
                    Duis cursus, mi quis viverra ornare, 
                    eros dolor interdum nulla, 
                    ut commodo diam libero vitae erat.
                </p>
            </div>

            {/* Scroll-snapping Right Container */}
            <div className='w-[956px] h-[calc(100vh-224px)] overflow-y-hidden snap-y snap-mandatory'>
                {/* Pair 1 */}
                <section className='h-full snap-start'>
                    <div className='grid grid-cols-2 gap-6 h-full items-center'>
                        <LoanBox 
                            img={Phone}
                            title="SME Loan"
                            content="Select from various loan options that suit your needs."
                            link="#"
                        />
                        <LoanBox 
                            img={Phone}
                            title="Regular Loan"
                            content="Select from various loan options that suit your needs."
                            link="#"
                        />
                    </div>
                </section>

                {/* Pair 2 */}
                <section className='h-full snap-start'>
                    <div className='grid grid-cols-2 gap-6 h-full items-center'>
                        <LoanBox 
                            img={Phone}
                            title="Agricultural loan"
                            content="Select from various loan options that suit your needs."
                            link="#"
                        />
                        <LoanBox 
                            img={Phone}
                            title="Asset Loan"
                            content="Select from various loan options that suit your needs."
                            link="#"
                        />
                    </div>
                </section>

                {/* Pair 3 */}
                <section className='h-full snap-start'>
                    <div className='grid grid-cols-2 gap-6 h-full items-center'>
                        <LoanBox 
                            img={Phone}
                            title="Education Loan"
                            content="Select from various loan options that suit your needs."
                            link="#"
                        />
                        <LoanBox 
                            img={Phone}
                            title="Special loan"
                            content="Select from various loan options that suit your needs."
                            link="#"
                        />
                    </div>
                </section>

                {/* Pair 4 */}
                <section className='h-full snap-start'>
                    <div className='grid grid-cols-2 gap-6 h-full items-center'>
                        <LoanBox 
                            img={Phone}
                            title="SUFEN Loan"
                            content="Select from various loan options that suit your needs."
                            link="#"
                        />
                        <LoanBox 
                            img={Phone}
                            title="Public Sector Loan"
                            content="Select from various loan options that suit your needs."
                            link="#"
                        />
                    </div>
                </section>
            </div>
        </section>

        {/* <section
            className='px-[64px] py-[112px] gap-[80px] flex flex-col h-[695px] bg-[#941D58]'
        >
            <div
                className='flex items-center flex-col gap-6'
            >
                <div className='w-[85px] h-[32px] p-2 rounded-lg flex items-center justify-center bg-[#fff]'>
                    <p className='text-xs text-[#E78020] leading-[15px]'>Application</p>
                </div>

                <p className='font-hanken text-[56px] leading-[67px] text-[#fff]'>
                    Simple Steps to Secure Your Loan
                </p>

                <p className='text-[#D9D9D9] font-inter text-[20px] leading-[30px]'>
                    Our application process is designed to be straightforward and efficient. 
                    Follow these easy steps to get started on your loan journey.
                </p>
            </div>

            <div 
                className='flex items-start gap-[48px] overflow-x-scroll overflow-y-hidden relative'
            >
                <div
                    className='flex flex-col items-center w-[396px] gap-6'
                >
                    <div
                        className='w-[80px] h-[80px] rounded-full flex items-center justify-center bg-[#fff]'
                    >
                        <p className='font-hanken font-medium text-[#941D58] text-[32px] leading-[41px]'>1</p>
                    </div>
                    <p className='font-hanken font-medium text-[20px] leading-[26px] text-[#fff]'>Step 1: Choose Your Loan Type</p>
                    <p className='font-inter text-[#D9D9D9] text-[20px] leading-[30px] text-center'>
                        Select from various loan options that suit your needs.
                    </p>
                </div>

                <div className='h-1 bg-[#fff] w-[400px] mt-10 absolute left-52'></div>

                <div
                    className='flex flex-col items-center w-[396px] gap-6'
                >
                    <div
                        className='w-[80px] h-[80px] rounded-full flex items-center justify-center bg-[#fff]'
                    >
                        <p className='font-hanken font-medium text-[#941D58] text-[32px] leading-[41px]'>2</p>
                    </div>
                    <p className='font-hanken font-medium text-[20px] leading-[26px] text-[#fff]'>Step 2: Fill Out the Application</p>
                    <p className='font-inter text-[#D9D9D9] text-[20px] leading-[30px] text-center'>
                        Complete the online application form with accurate details.
                    </p>
                </div>

                <div className='h-1 bg-[#fff] w-[400px] mt-10 absolute left-52'></div>

                <div
                    className='flex flex-col items-center w-[396px] gap-6'
                >
                    <div
                        className='w-[80px] h-[80px] rounded-full flex items-center justify-center bg-[#fff]'
                    >
                        <p className='font-hanken font-medium text-[#941D58] text-[32px] leading-[41px]'>3</p>
                    </div>
                    <p className='font-hanken font-medium text-[20px] leading-[26px] text-[#fff]'>Step 3: Submit Your Documents</p>
                    <p className='font-inter text-[#D9D9D9] text-[20px] leading-[30px] text-center'>
                        Upload the required documents for verification.
                    </p>
                </div>

                <div className='h-1 bg-[#fff] w-[400px] mt-10 absolute left-52'></div>

                <div
                    className='flex flex-col items-center w-[396px] gap-6'
                >
                    <div
                        className='w-[80px] h-[80px] rounded-full flex items-center justify-center bg-[#fff]'
                    >
                        <p className='font-hanken font-medium text-[#941D58] text-[32px] leading-[41px]'>4</p>
                    </div>
                    <p className='font-hanken font-medium text-[20px] leading-[26px] text-[#fff]'>Step 4: Submit Your Documents</p>
                    <p className='font-inter text-[#D9D9D9] text-[20px] leading-[30px] text-center'>
                        Upload the required documents for verification.
                    </p>
                </div>

            </div>
        </section> */}

        <section
            ref={sectionRef}
            className='px-[64px] py-[112px] gap-[80px] flex flex-col h-[695px] bg-[#941D58]'
        >
            {/* Header section unchanged */}
            <div className='flex items-center flex-col gap-6'>
                <div className='w-[85px] h-[32px] p-2 rounded-lg flex items-center justify-center bg-[#fff]'>
                    <p className='text-xs text-[#E78020] leading-[15px]'>Application</p>
                </div>
                <p className='font-hanken text-[56px] leading-[67px] text-[#fff]'>
                    Simple Steps to Secure Your Loan
                </p>
                <p className='text-[#D9D9D9] font-inter text-[20px] leading-[30px]'>
                    Our application process is designed to be straightforward and efficient. 
                    Follow these easy steps to get started on your loan journey.
                </p>
            </div>

            {/* Steps container with hidden scrollbar */}
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
                            <p className='font-hanken font-medium text-[#941D58] text-[32px] leading-[41px]'>{step}</p>
                        </div>
                        <p className='font-hanken font-medium text-[20px] leading-[26px] text-[#fff]'>
                            Step {step}: {index === 3 ? 'Get Approved' : 'Choose Your Loan Type'}
                        </p>
                        <p className='font-inter text-[#D9D9D9] text-[20px] leading-[30px] text-center'>
                            {index === 3 ? 
                                'Receive your loan approval and access funds quickly.' : 
                                'Select from various loan options that suit your needs.'
                            }
                        </p>
                    </div>
                ))}

         
            </div>
        </section>

        <section 
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
                        Find answers to your questions about our loan offerings and application process.
                    </p>
                </div>
                <div className='flex flex-col gap-[48px]'>
                    <div className='flex flex-col gap-4'>
                        <p className='font-hanken text-[#753412] font-medium leading-[30px] text-[20px]'>What types of loans?</p>
                        <p className='font-inter text-[#000000] text-base leading-6'>
                            We offer a variety of loans including personal, business, SME, agricultural, education, 
                            and special loans. Each type is designed to meet specific needs. Explore our options to 
                            find the right fit for you.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-hanken text-[#753412] font-medium leading-[30px] text-[20px]'>Who is eligible?</p>
                        <p className='font-inter text-[#000000] text-base leading-6'>
                            Eligibility varies by loan type. Generally, applicants must be of legal age and
                            meet income requirements. Specific criteria can be found in each loan category.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-hanken text-[#753412] font-medium leading-[30px] text-[20px]'>What are the benefits?</p>
                        <p className='font-inter text-[#000000] text-base leading-6'>
                            Our loans offer competitive interest rates, flexible repayment terms, 
                            and quick processing times. Additionally, certain loans provide tailored 
                            support for specific sectors. Enjoy peace of mind with our reliable service.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-hanken text-[#753412] font-medium leading-[30px] text-[20px]'>How to apply?</p>
                        <p className='font-inter text-[#000000] text-base leading-6'>
                            Applying is simple! Start by filling out our online application form. Once submitted, 
                            our team will review your application and guide you through the next steps.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-hanken text-[#753412] font-medium leading-[30px] text-[20px]'>What is SUFEN Loan?</p>
                        <p className='font-inter text-[#000000] text-base leading-6'>
                            The SUFEN Loan is specifically designed for female entrepreneurs. 
                            It provides financial support to help women start or grow their businesses. 
                            We aim to empower women in the business sector.
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
        </section>

        <section
            className='bg-[#941D58] h-[413px] flex justify-center py-[112px] items-center'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='w-[768px] h-[189px] flex flex-col items-center gap-6'>
                <p className='font-hanken text-[48px] leading-[57px] text-[#FFFFFF]'>Apply for Your Loan Today</p>
                <p className='font-hanken text-[18px] leading-[27px] text-[#FFFFFF]'>
                    Explore our diverse loan options tailored for personal, business, and educational needs.
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

export default Loans