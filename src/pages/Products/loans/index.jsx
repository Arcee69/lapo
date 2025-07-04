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
    const productRef = useRef(null);
    const stepsContainerRef = useRef(null); 

    const { state } = useLocation()
    const navigate = useNavigate()

    const loansRef = useRef(null)

    let URL = import.meta.env.VITE_APP_API_URL;

    useEffect(() => {
        if (state?.section === "loans" && loansRef.current) {
            loansRef.current.scrollIntoView({ behavior: "smooth" });
        }
        if (state?.section === "products" && productRef.current) {
            productRef.current.scrollIntoView({ behavior: "smooth" });
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
            const loanCategory = faqCategories?.find(cat => cat.name === 'Loans');
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
            className='bg-[#941D58] h-[545px] lg:h-[585px] relative overflow-hidden'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex items-center justify-between absolute -bottom-32 -z-10 -inset-x-14'>
                <img src={Right} alt='Right' className='' />
                <img src={Left} alt='Left' className='hidden md:block' />
            </div>

            <div className='flex flex-col items-center px-5 lg:px-0 pt-[213px]'> {/* pt-[173px] */}
                <div className='flex flex-col items-center gap-4 lg:w-[688px] mx-auto'>
                    <div className='w-[211px] h-[28px] rounded-[6px] gap-1 flex items-center justify-center bg-[#FDF2E9]'>
                        <img src={Stars} alt='Stars' className='w-[13px] h-[13px]' />
                        <p className='text-xs font-hanken text-[#E78020]'>Empowering 6M+ Nigerians</p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p className='font-hanken text-[32px] lg:text-[54px] text-center font-medium text-[#FFFFFF] leading-[32px] lg:leading-[64px]'>
                            Get Easy Access Loans to Fund your Business
                        </p>
                        <p className='font-inter text-base leading-[100%] lg:text-[18px] lg:leading-[27px] text-[#FFFFFF] text-center'>
                            Enjoy flexible Loan options that meets all your life goals from your personal to business to education and property.
                        </p>
                    </div>
                    <button
                        className='w-[180px] h-[59px] flex items-center justify-center bg-[#fff] rounded-lg'
                        type='button'
                        onClick={() => {
                            navigate("/products", {state: {section: "products"}}), 
                            window.scrollTo(0, 0)
                        }}
                    >
                        <p className='text-[#F99650] font-medium text-base leading-7'>Learn More</p>
                    </button>
                </div>
            </div>

        </section>

        <img src={LoanPeople} alt='LoanPeople' className='h-[297.55px] lg:h-[576px] w-full' />

        <section
            className='bg-[#FCF7F9] py-[61px] lg:py-[112px] px-5 lg:px-[64px] flex flex-col items-center gap-[40px] '
            ref={productRef}
        >
            <div className='flex flex-col items-center gap-6'>
                <div className='w-[150px] h-[32.59px] flex items-center justify-center p-1 rounded-lg bg-[#FFF0E8]'>
                    <p className='font-hanken font-medium text-sm leading-[15px] text-[#E78020]'>LAPO MfB Loans</p>
                </div>
                <p className='font-hanken text-[#000000] text-[32px] leading-[120%] lg:text-[54px] lg:leading-[64px]'>Loan Products</p>
                <p className='text-[18px] text-[#000000] lg:w-[947px] mx-auto font-inter text-center leading-[27px]'>
                    A Loan can be a valuable financial tool for achieving your goals. Our loan options are designed to provide you with all the help you need
                </p>
            </div>

            <div  className='flex flex-col gap-4'>
                <div onClick={() => {navigate("/loans/regular"); window.scrollTo(0, 0)}} className='w-full h-auto lg:h-[330px] bg-[#fff] py-[10px] p-2 lg:px-[28px] rounded-xl flex flex-col gap-[51px] drop-shadow cursor-pointer group  border-[3px] border-[#BE438029] hover:border-0  hover:bg-[#941D58]'>
                    <div className='flex items-center justify-between'>
                        <div className='w-auto h-[40px] flex invisible items-center p-2 bg-[#C65B900D]  group-hover:bg-[#941D58] justify-center rounded-[8px]'>
                            <p className='text-xs lg:text-[17px] font-hanken group-hover:text-[#fff] text-[#941D58] leading-[15px]'>Regular Loans</p>
                        </div>
                        <img src={Parent} alt="Parent" className='' />
                    </div>
                    <div className='flex flex-col '>
                        <p 
                            className='text-[#941D58] font-hanken group-hover:text-[#fff] font-medium text-[20px] leading-[100%] lg:text-[40px] lg:leading-[60px]'
                        >
                            Regular Loan
                        </p>
                        <p className='font-inter text-[#000000] lg:w-[830px] group-hover:text-[#FFFFFF] leading-[150%] lg:text-[20px] lg:leading-[30px]'>
                            This loan product is designed to operate on a group (union) methodology.
                        </p>
                        <div className='bg-[#FFFFFF] flex items-center gap-1 w-[127px] rounded h-[37px] py-2 group-hover:px-4'> {/* #FF5F08 */}
                            <p className='text-[#FF5F08] font-inter whitespace-nowrap text-sm lg:text-[19px]'>Learn More</p>
                            <IoChevronForward className='text-[#FF5F08] w-5 h-5' /> 
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-4 items-center'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col lg:flex-row items-center gap-4'>
                            <SmallBox 
                                heading="Individual Loans"
                                title="MSME Loan"
                                subtitle="The LAPO Microfinance Bank “MSME Loan” is a credit product designed specifically to support Micro, Small and Medium Enterprises (MSMEs) operators in Nigeria."
                                link="/loans/msme"
                                location="loans"
                            />
                            <SmallBox 
                                heading="Individual and Group Loans"
                                title="Asset Loan"
                                subtitle="Asset loan as the name implies is targeted to help existing clients of LAPO MfB purchase assets."
                                link="/loans/asset"
                                location="loans"
                            />
                        </div>
                        <BigBox 
                            heading="Individual and Group Loans"
                            title="Education Loan"
                            subtitle="Loans provided to enhance the quality of education. It supports parents to meet education expenses for the children and owners of educational institutions to enhance their facilities."
                            link="/loans/education"
                            location="loans"
                        />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <BigBox 
                            heading="Individual and Group Loans"
                            title="Agricultural Loan"
                            subtitle="Agricultural financing is designed to help farmers achieve better results through the provision of agricultural loans."
                            link="/loans/agricultural"
                            location="loans"
                        />
                        <div className='flex flex-col lg:flex-row items-center gap-4'>
                            <SmallBox 
                                heading="Group Loans"
                                title="Special loan"
                                subtitle="LAPO MFB Special loan product was developed to meet the credit needs of existing regular loan clients who require bigger loan sizes to strengthen their businesses."
                                link="/loans/special"
                                location="loans"
                            />
                            <SmallBox 
                                heading="Individual Loans"
                                title="Payroll Lending."
                                subtitle="LAPO Payroll Lending is a product that offers personal loans through Payroll Lending to Civil Servants at the State and Federal levels"
                                link="/loans/payroll"
                                location="loans"
                            />
                        </div>
                    </div>
                </div>
                <div onClick={() => {navigate("/loans/clean-energy"); window.scrollTo(0, 0)}}  className='w-full h-auto lg:h-[330px] bg-[#fff] py-[10px] p-2 lg:px-[28px] rounded-xl flex flex-col gap-[51px] group  border-[3px] border-[#BE438029] hover:border-0  hover:bg-[#941D58]'>
                    <div className='flex items-center justify-between'>
                        <div className='w-auto invisible h-[40px] flex items-center p-2 bg-[#C65B900D]  group-hover:bg-[#941D58] justify-center rounded-[8px]'>
                            <p className='text-xs lg:text-[17px] font-hanken group-hover:text-[#fff] text-[#941D58] leading-[15px]'>Individual and Group Loans</p>
                        </div>
                        <img src={Parent} alt="Parent" className='' />
                    </div>
                    <div className='flex flex-col'>
                        <p 
                            className='text-[#941D58] group-hover:text-[#fff] font-hanken font-medium text-[20px] leading-[100%] lg:text-[40px] lg:leading-[60px]'
                        >
                           Clean Energy Loan
                        </p>
                        <p className='font-inter text-[#000000] lg:w-[830px] group-hover:text-[#FFFFFF] text-sm leading-[150%] lg:text-[20px] lg:leading-[30px]'>
                            This loan product is designed to provide Individual and Group with  clean energy products.
                        </p>
                        <div  className='bg-[#FFFFFF] flex items-center gap-1 w-[127px] cursor-pointer rounded h-[37px] py-2 group-hover:px-4'>
                            <p className='text-[#FF5F08] font-inter whitespace-nowrap text-sm lg:text-[19px]'>Learn More</p>
                            <IoChevronForward className='text-[#FF5F08] w-5 h-5' /> 
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section
            // ref={sectionRef}
            className='px-5  py-[112px] gap-[80px] flex flex-col h-auto lg:h-[695px] bg-[#941D58]'
        >
            {/* Header section unchanged */}
            <div className='flex items-center flex-col gap-6'>
                <div className='w-[85px] h-[32px] p-2 rounded-lg flex items-center justify-center bg-[#fff]'>
                    <p className='text-xs text-[#E78020] leading-[15px]'>Application</p>
                </div>
                <p className='font-hanken text-[32px] leading-[120%] lg:text-[56px] lg:leading-[67px] text-[#fff]'>
                    Simple Steps to Secure Your Loan
                </p>
                <p className='text-[#D9D9D9] font-inter text-base lg:text-[20px] leading-[30px]'>
                    Our application process is designed to be straightforward and efficient. 
                    Follow these easy steps to get started on your loan journey.
                </p>
            </div>

            {/* Steps container with hidden scrollbar */}
            <div 
                // ref={stepsContainerRef} flex flex-col lg:flex-row items-start lg:mx-auto
                className='grid grid-cols-1 lg:grid-cols-4 gap-[18px]  overflow-x-hidden overflow-y-hidden relative scrollbar-hide'
            >
                {[1, 2, 3, 4].map((step, index) => (
                    <div
                        key={step}
                        className='flex flex-row items-start lg:flex-col lg:items-center gap-6 flex-shrink-0' //lg:w-[296px]
                    >
                        <div className='w-[60px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-full flex items-center justify-center bg-[#fff]'>
                            <p className='font-hanken font-medium text-[#941D58] text-[20px] leading-[130%] lg:text-[32px] lg:leading-[41px]'>{step}</p>
                        </div>
                        <div className="flex flex-col items-start lg:items-center gap-2">
                            <p className='font-hanken font-medium text-base capitalize leading-[130%] lg:text-[18px] lg:leading-[26px] text-[#fff]'>
                                Step {step}: {
                                    index === 1 ? 'Choose your loan amount' : 
                                    index === 2 ? 'Choose repayment plan' :
                                    index === 3 ? 'Submit for approval' : 'Choose Your Loan Type'
                                }
                            </p>
                            <p className='font-inter text-[#D9D9D9] text-base leading-[150%]  lg:leading-[30px] lg:text-center'>
                                {
                                    index === 1 ? 'Select your eligible amount' : 
                                    index === 2 ? 'Repayment plan from month 2 to 12' :
                                    index === 3 ? 'Wait to get approval' : 
                                    'Select from various loan options that suit your needs.'
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

        <section
            className='bg-[#941D58] h-[413px] flex justify-center py-[112px] items-center'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='lg:w-[768px] h-[189px] flex flex-col items-center gap-6'>
                <p className='font-hanken text-[32px] leading-[120%] text-center lg:text-[48px] lg:leading-[57px] text-[#FFFFFF]'>Apply for Your Loan Today</p>
                <p className='font-hanken text-center text-base lg:text-[18px] leading-[150%] lg:leading-[27px] text-[#FFFFFF]'>
                    Explore our diverse loan options tailored for personal, business, and educational needs.
                </p>
                <div className='flex items-center gap-4'>
                    <div className='bg-[#fff] w-[128px] h-[48px] cursor-pointer rounded-[8px] p-2 flex items-center justify-center'>
                        <p className='font-hanken text-[#000000] font-medium  text-[13px] lg:text-base leading-6'>Contact Us</p>
                    </div>
                    <div className='bg-[#000000] w-[187px] lg:w-[225px] cursor-pointer h-[48px] rounded-[8px] flex items-center justify-center p-2'>
                        <p className='font-hanken font-medium text-[13px] lg:text-base text-[#fff]'>Download the LAPO MfB App</p>
                    </div>
                </div>
            </div>
        </section>

    
    </div>
  )
}

export default Loans