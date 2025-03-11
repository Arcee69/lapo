import React, { useEffect, useRef, useState } from 'react'
import { IoChevronForwardSharp, IoChevronForward } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

import LoanPeople from "../../../assets/png/loan_people.png"
import Phone from "../../../assets/png/phone.png"

import Left from "../../../assets/svg/left_loans_spiral.svg"
import Right from "../../../assets/svg/right_loans_spiral.svg"
import Stars from "../../../assets/svg/stars.svg"
import Parent from "../../../assets/svg/parent_loans.svg"

import LoanBox from '../../../components/LoanBox'
import SmallBox from '../../../components/SmallBox'
import BigBox from '../../../components/BigBox'


const Loans = () => {
    const [faqCategories, setFaqCategories] = useState([]);
    const [faqByCategory, setFaqByCategory] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    const sectionRef = useRef(null);
    const stepsContainerRef = useRef(null); 

    const { state } = useLocation()
    const navigate = useNavigate()

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
            className='bg-[#FCF7F9] py-[112px] px-[64px] flex flex-col items-center gap-[40px] '
            // ref={saveRef}
        >
            <div className='flex flex-col items-center gap-6'>
                <div className='w-[110px] h-[32.59px] flex items-center justify-center p-1 rounded-lg bg-[#FFF0E8]'>
                    <p className='font-hanken font-medium text-sm leading-[15px] text-[#E78020]'>LAPO Loans</p>
                </div>
                <p className='font-hanken text-[#000000] text-[54px] leading-[64px]'>Loan Products</p>
                <p className='text-[18px] text-[#000000] w-[947px] mx-auto font-inter text-center leading-[27px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros 
                    elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, 
                    ut commodo diam libero vitae erat.
                </p>
            </div>

            <div  className='flex flex-col gap-4'>
                <div onClick={() => {navigate("/loans/regular"); window.scrollTo(0, 0)}} className='w-full h-[330px] bg-[#fff] py-[10px] px-[28px] rounded-xl flex flex-col gap-[51px] drop-shadow cursor-pointer group  border-[3px] border-[#BE438029] hover:border-0  hover:bg-[#941D58]'>
                    <div className='flex items-center justify-between'>
                        <div className='w-auto h-[40px] flex items-center p-2 bg-[#C65B900D]  group-hover:bg-[#941D58] justify-center rounded-[8px]'>
                            <p className='text-[17px] font-hanken group-hover:text-[#fff] text-[#941D58] leading-[15px]'>High Yield Savings</p>
                        </div>
                        <img src={Parent} alt="Parent" className='' />
                    </div>
                    <div className='flex flex-col '>
                        <p 
                            className='text-[#941D58] font-hanken group-hover:text-[#fff] font-medium text-[40px] leading-[60px]'
                        >
                            Regular Loan
                        </p>
                        <p className='font-inter text-[#000000] w-[830px] group-hover:text-[#FFFFFF] text-[20px] leading-[30px]'>
                            This loan product is designed to operate on a group (union) methodology.
                        </p>
                        <div className='bg-[#FFFFFF] flex items-center gap-1 w-[127px] rounded h-[37px] py-2 group-hover:px-4'> {/* #FF5F08 */}
                            <p className='text-[#FF5F08] font-inter whitespace-nowrap text-[19px]'>Learn More</p>
                            <IoChevronForward className='text-[#FF5F08] w-5 h-5' /> 
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-4'>
                            <SmallBox 
                                heading="Savings"
                                title="MSME Loan"
                                subtitle="The Savings Plan Account is designed for individuals and groups who wish to 
                                save funds toward a particular project(s) over a specified period of time and 
                                earn interest on their savings."
                                link="/loans/sme"
                                location="loans"
                            />
                            <SmallBox 
                                heading="Savings"
                                title="Asset Loan"
                                subtitle="Child-focused savings account with high interest and life insurance. 
                                A chance for your child to win LAPO MfB Scholarship."
                                link="/loans/asset"
                                location="loans"
                            />
                        </div>
                        <BigBox 
                            heading="High Yield Savings"
                            title="Education Loan"
                            subtitle="This is a very flexible and convenient savings account designed for clients to save money on a voluntary basis."
                            link="/loans/education"
                            location="loans"
                        />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <BigBox 
                            heading="High Yield Savings"
                            title="Agricultural Loan"
                            subtitle="The Savings Plan Account is designed for individuals and groups who wish to save funds toward a particular project(s) over a specified period of time and earn interest on their savings."
                            link="/loans/agricultural"
                            location="loans"
                        />
                        <div className='flex items-center gap-4'>
                            <SmallBox 
                                heading="Savings"
                                title="Special loan"
                                subtitle="The Savings Plan Account is designed for individuals and groups who wish to save funds toward a particular project(s) over a specified period of time and earn interest on their savings."
                                link="/loans/special"
                                location="loans"
                            />
                            <SmallBox 
                                heading="Investment Savings"
                                title="Payroll Lending."
                                subtitle="This account is designed for individuals that are either in business or employed by private or public companies as salary account"
                                link="/loans/payroll"
                                location="loans"
                            />
                        </div>
                    </div>
                </div>
                <div  className='w-full h-[330px] bg-[#fff] py-[10px] px-[28px] rounded-xl flex flex-col gap-[51px] group  border-[3px] border-[#BE438029] hover:border-0  hover:bg-[#941D58]'>
                    <div className='flex items-center justify-between'>
                        <div className='w-auto h-[40px] flex items-center p-2 bg-[#C65B900D]  group-hover:bg-[#941D58] justify-center rounded-[8px]'>
                            <p className='text-[17px] font-hanken group-hover:text-[#fff] text-[#941D58] leading-[15px]'>High Yield Savings</p>
                        </div>
                        <img src={Parent} alt="Parent" className='' />
                    </div>
                    <div className='flex flex-col '>
                        <p 
                            className='text-[#941D58] group-hover:text-[#fff] font-hanken font-medium text-[40px] leading-[60px]'
                        >
                           SUFEN Loan
                        </p>
                        <p className='font-inter text-[#000000] w-[830px] group-hover:text-[#FFFFFF] text-[20px] leading-[30px]'>
                            The Savings Plan Account is designed for individuals and groups who wish to save 
                            funds toward a particular project(s) over a specified period of time and earn 
                            interest on their savings.
                        </p>
                        <div onClick={() => {navigate("#"), window.scrollTo(0, 0)}} className='bg-[#FFFFFF] flex items-center gap-1 w-[127px] cursor-pointer rounded h-[37px] py-2 group-hover:px-4'> {/* #FF5F08 */}
                            <p className='text-[#FF5F08] font-inter whitespace-nowrap text-[19px]'>Learn More</p>
                            <IoChevronForward className='text-[#FF5F08] w-5 h-5' /> 
                        </div>
                    </div>
                </div>
            </div>
        </section>

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