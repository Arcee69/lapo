import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

import SubLoansHeader from '../../../../components/SubLoansHeader'

import Premium from "../../../../assets/png/premium.png"

import Amount from "../../../../assets/svg/amount.svg"
import Lab from "../../../../assets/svg/lab.svg"
import Collateral from "../../../../assets/svg/collateral.svg"
import Duration from "../../../../assets/svg/duration.svg"

import LoanDetails from '../../../../components/LoanDetails'



const Special = () => {
    const [faqCategories, setFaqCategories] = useState([]);
    const [faqByCategory, setFaqByCategory] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    let URL = import.meta.env.VITE_APP_API_URL;

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
    <div className='w-full'>
        <SubLoansHeader 
            title="Special loan"
            subtitle={`This loan product is desigThe Special Loan offers tailored financing options for clients with specific requirements, including emergency funds and support for community-driven projects, ensuring flexibility to meet diverse financial needsned to operate on a group (union) methodology.`}
            link="/loans/special"
        />
        <section
            className='bg-[#fff] px-5 lg:px-[64px] py-[39px] lg:py-[112px]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='bg-[#FCF7F9] rounded-lg grid grid-cols-2 lg:grid-cols-4'>
                <div className='flex w-[10.688rem] lg:w-[19.7rem] flex-col items-center py-[32px] justify-center gap-4 border border-l-0 border-r-[1px] border-y-0 border-[#EEEEEE]'>
                    <img src={Amount} alt='Amount' className='w-[36px] h-[40px]' />
                    <p className='text-xs lg:text-base font-inter leading-[22px] text-[#445D65]'>Loan Amount</p>
                    <p className='font-hanken font-semibold text-base lg:text-[20px] leading-5 lg:leading-[38px] text-[#360E22]'>₦50K - ₦250k</p>
                </div>
                <div className='flex w-[10.688rem] lg:w-[19.7rem] flex-col items-center py-[32px] justify-center gap-4 border border-l-0 border-r-[1px] border-y-0 border-[#EEEEEE]'>
                    <img src={Duration} alt='Duration' className='w-[36px] h-[40px]' />
                    <p className='text-xs lg:text-base font-inter leading-[22px] text-[#445D65]'>Repayment Duration</p>
                    <p className='font-hanken font-semibold lg:text-[20px] leading-5 lg:leading-[38px] text-[#360E22]'>6 Months</p>
                </div>
                <div className='flex w-[10.688rem] lg:w-[19.7rem] flex-col items-center py-[32px] justify-center gap-4 border border-l-0 border-r-[1px] border-y-0 border-[#EEEEEE]'>
                    <img src={Lab} alt='Lab' className='w-[36px] h-[40px]' />
                    <p className='text-xs lg:text-base font-inter leading-[22px] text-[#445D65]'>Methodology</p>
                    <p className='font-hanken font-semibold text-center lg:text-[20px] leading-5 lg:leading-[25px] text-[#360E22]'>Group</p>
                </div>
                <div className='flex w-[10.688rem] lg:w-[19.7rem] flex-col items-center py-[32px] justify-center gap-4'>
                    <img src={Collateral} alt='Collateral' className='w-[36px] h-[40px]' />
                    <p className='text-base font-inter leading-[22px] text-[#445D65]'>Collateral</p>
                    <p className='font-hanken font-semibold text-center lg:text-[20px] leading-5 lg:leading-[25px] text-[#360E22]'>Not Required*</p>
                </div>
            </div>
        </section>

        <LoanDetails
            img="https://res.cloudinary.com/dairsbzlv/image/upload/v1740853276/family_tjbggm.png" 
            listContent={[
                "No Collateral",
                "Access to other business loan products to strengthen client’s enterprise, e.g. Mid-term and Asset loan",
                "Flexible repayment structure",
                "Training on basic financial management, business planning and customer relations",
                "Low interest rate",
                "Expert Financial Advice"
            ]}
            details={` 
                LAPO MFB Special loan product was developed to meet the credit needs of existing regular loan 
                clients who require bigger loan sizes to strengthen their businesses.
                The development of this product was necessitated by the fact that after funding regular 
                loan clients for some time, their business activities expand to the point where they require 
                higher loans to sustain their business. In the same vein these clients also require monthly 
                loan repayment frequency as it is more convenient for them.
            `}
            featuresContent={[
                "Facility range: N50,000 (minimum) to N150,000 (maximum)",
                "Methodology: Group",
                "Duration: 12 months",
                "Grace period: 1 month",
            ]}
            documentContent={[
                "You must have had an excellent repayment performance while accessing Regular Loan",
                "Duly completed application form",
                "2 guarantors",
                "2 recent passport-size photographs",
                "Current utility bill",
                "A valid means of ID (national ID, driver's license, voter's card or international passport)"
            ]}
        />

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
                // ref={stepsContainerRef}
                className='flex flex-col lg:flex-row items-start gap-[38px] lg:mx-auto overflow-x-hidden overflow-y-hidden relative scrollbar-hide'
            >
                {[1, 2, 3, 4].map((step, index) => (
                    <div
                        key={step}
                        className='flex flex-row items-start lg:flex-col lg:items-center lg:w-[296px] gap-6 flex-shrink-0'
                    >
                        <div className='w-[60px] h-[40px] lg:w-[80px] lg:h-[80px] rounded-full flex items-center justify-center bg-[#fff]'>
                            <p className='font-hanken font-medium text-[#941D58] text-[20px] leading-[130%] lg:text-[32px] lg:leading-[41px]'>{step}</p>
                        </div>
                        <div className="flex flex-col items-start lg:items-center gap-2">
                            <p className='font-hanken font-medium text-base leading-[130%] lg:text-[20px] lg:leading-[26px] text-[#fff]'>
                                Step {step}: {index === 3 ? 'Get Approved' : 'Choose Your Loan Type'}
                            </p>
                            <p className='font-inter text-[#D9D9D9] text-base leading-[150%] lg:text-[20px] lg:leading-[30px] lg:text-center'>
                                {index === 3 ? 
                                    'Receive your loan approval and access funds quickly.' : 
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
                        <p className='font-hanken font-medium text-[13px] lg:text-base text-[#fff]'>Download the LAPO App</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section
            className='px-5 lg:px-[120px] py-[112px] flex flex-col gap-[41px] items-center'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <p className='text-[32px] lg:text-[54px] font-hanken leading-[51px] text-[#1E1E1E] '>Related Loan Products</p>
            <div className='flex flex-col lg:flex-row items-center gap-[30px]'>
                <div className='flex flex-col shadow-md rounded-lg w-[21.438rem] mx-auto lg:w-[22.9rem] h-[324px]'>
                    <div className='bg-[#E9ECEF] w-full h-[160px]'></div>
                    <div className='flex flex-col p-5 gap-3'>
                        <p className="text-[#333333] font-hanken font-bold text-[18px]">MSME Loan</p>
                        <p className='font-inter text-[#6C757D] text-sm'> 
                            Grow your business with our flexible financing options designed for entrepreneurs and SMEs.
                        </p>
                        <p onClick={() => {navigate("/loans/msme"); window.scrollTo(0, 0)}} className='text-[#006A4E] cursor-pointer text-base'>Learn More →</p>
                    </div>
                </div>
                <div className='flex flex-col shadow-md rounded-lg w-[21.438rem] mx-auto lg:w-[22.9rem] h-[324px]'>
                    <div className='bg-[#E9ECEF] w-full h-[160px]'></div>
                    <div className='flex flex-col p-5 gap-3'>
                        <p className="text-[#333333] font-hanken font-bold text-[18px]">Education Loan</p>
                        <p className='font-inter text-[#6C757D] text-sm'> 
                            Fund your education or your children's schooling with our affordable education financing.
                        </p>
                        <p onClick={() => {navigate("/loans/education"); window.scrollTo(0, 0)}} className='text-[#006A4E] cursor-pointer text-base'>Learn More →</p>
                    </div>
                </div>
                <div className='flex flex-col shadow-md rounded-lg w-[21.438rem] mx-auto lg:w-[22.9rem] h-[324px]'>
                    <div className='bg-[#E9ECEF] w-full h-[160px]'></div>
                    <div className='flex flex-col p-5 gap-3'>
                        <p className="text-[#333333] font-hanken font-bold text-[18px]">Public Sector Loan</p>
                        <p className='font-inter text-[#6C757D] text-sm'> 
                            Transform your living space with affordable financing for renovations and improvements.
                        </p>
                        <p onClick={() => {navigate("#"); window.scrollTo(0, 0)}} className='text-[#006A4E] cursor-pointer text-base'>Learn More →</p>
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

export default Special