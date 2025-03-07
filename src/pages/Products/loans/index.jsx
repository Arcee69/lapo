import React, { useEffect, useRef, useState } from 'react'
import { IoChevronForwardSharp } from 'react-icons/io5'
import { useLocation } from 'react-router-dom'

import LoanPeople from "../../../assets/png/loan_people.png"
import Phone from "../../../assets/png/phone.png"

import Left from "../../../assets/svg/left_loans_spiral.svg"
import Right from "../../../assets/svg/right_loans_spiral.svg"
import Stars from "../../../assets/svg/stars.svg"
import LoanBox from '../../../components/LoanBox'
import axios from 'axios'

const Loans = () => {
    const [faqCategories, setFaqCategories] = useState([]);
    const [faqByCategory, setFaqByCategory] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    const sectionRef = useRef(null);
    const stepsContainerRef = useRef(null); 

    const { state } = useLocation()

    const loansRef = useRef(null)

    let URL = import.meta.env.VITE_APP_API_URL;

    useEffect(() => {
        if (state?.section === "loans" && loansRef.current) {
            loansRef.current.scrollIntoView({ behavior: "smooth" });
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
    <div className='w-full' ref={loansRef}>
        <section 
            className='bg-[#941D58] h-[545px] relative overflow-hidden'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex items-center justify-between absolute -bottom-32 z-10 -inset-x-14'>
                <img src={Right} alt='Right' className='' />
                <img src={Left} alt='Left' className='' />
            </div>

            <div className='flex flex-col items-center pt-[173px]'>
                <div className='flex flex-col items-center gap-4 w-[688px] mx-auto'>
                    <div className='w-[211px] h-[28px] rounded-[6px] gap-1 flex items-center justify-center bg-[#FDF2E9]'>
                        <img src={Stars} alt='Stars' className='w-[13px] h-[13px]' />
                        <p className='text-xs font-hanken text-[#E78020]'>Empowering 6M+ Nigerians</p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p className='font-hanken text-[54px] text-center font-medium text-[#FFFFFF] leading-[64px]'>
                            Get Easy Access Loans to Fund your Business
                        </p>
                        <p className='font-inter text-[18px] leading-[27px] text-[#FFFFFF] text-center'>
                            Enjoy flexible Loan options that meets all your life goals from your personal to business to education and property.
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
                            link="/loans/sme"
                        />
                        <LoanBox 
                            img={Phone}
                            title="Regular Loan"
                            content="Select from various loan options that suit your needs."
                            link="/loans/regular"
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
                            link="/loans/agricultural"
                        />
                        <LoanBox 
                            img={Phone}
                            title="Asset Loan"
                            content="Select from various loan options that suit your needs."
                            link="/loans/asset"
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
                            link="/loans/education"
                        />
                        <LoanBox 
                            img={Phone}
                            title="Special loan"
                            content="Select from various loan options that suit your needs."
                            link="/loans/special"
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