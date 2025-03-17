import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

import SubSavingsHeader from '../../../../components/SubSavingsHeader'
import SavingsDetails from '../../../../components/SavingsDetails'
import axios from 'axios';

const Pikin = () => {
    const [faqCategories, setFaqCategories] = useState([]);
    const [faqByCategory, setFaqByCategory] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    const navigate = useNavigate()
    
    let URL = import.meta.env.VITE_APP_API_URL;

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
        <SubSavingsHeader 
            title="My Pikin & I Savings Account"
            subtitle={`Saving money for your child’s future is as important as raising them well. My Pikin is a savings account designed to provide clients the opportunity to save towards the welfare of their children/dependents.`}
        />

        <SavingsDetails
            img="https://res.cloudinary.com/dairsbzlv/image/upload/v1740876998/kid_gaibe0.png" 
            details={`
                My Pikin & I Savings Account is one of the bank’s deposit product targeted at parents who want to 
                invest in their children’s future. It gives clients opportunity to save and earn attractive interest, 
                get free insurance for the first one year (subject to qualification criteria). 
                With opening balance as little as N200, the savings account enables parents save for the 
                future of their wards and the account can be handed over to the child/ward at 18 years and above.
            `}
            listContent={[
                "N200 Initial deposit & minimum account balance",
                "Interest on Savings : 4.05% per annum",
                "Savings Plan Account can be opened at any LAPO MfB branch nationwide",
                "A chance for your Child / Ward to win LAPO MfB LTD Scholarship",
                "Minimum Monthly Accumulated Savings of N5,000",
                "Available to both New & Existing Groups and Individuals Clients",
                "Easy access to your account",
                "Payments can be made anywhere nationwide with our Pocket Money banking service",
                "Expert financial advice"
            ]}
            featuresContent={[
                "Interest on Savings : 4.05% per annum",
                "A chance for your Child / Ward to win LAPO MfB LTD Scholarship",
                "Available to both New & Existing Groups and Individuals Clients",
                "Minimum Monthly Accumulated Savings of N5,000",
            ]}
            documentContent={[
                // "N200 Initial deposit & minimum account balance.",
                "Duly completed account opening forms ",
                "Four (4) Recent passport photographs of the parent and two (2) of the child/ward",
                "A valid means of ID: Parent / Guardian - National ID, Driver’s license, Voter's card or International passport",
                "Utility Bill: BEDC Bill, Refuse Disposal Receipt, Water Supply Bill or Store Rent Receipt.",
                "Duly completed account opening forms including Mandate Signature Card",
            ]}
        />

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

        <section
            className='px-5 lg:px-[120px] py-[112px] flex flex-col gap-[41px] items-center'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <p className='text-[32px] lg:text-[54px] font-hanken leading-[51px] text-[#1E1E1E]'>Related Loan Products</p>
            <div className='flex flex-col lg:flex-row items-start gap-[30px]'>
                <div className='flex flex-col shadow-md rounded-lg w-[21.438rem] mx-auto lg:w-[22.9rem] h-[324px]'>
                    <img 
                        src="https://res.cloudinary.com/dairsbzlv/image/upload/v1740876015/lock_i0spvu.png" 
                        alt='Savings' 
                        className='w-full h-[160px] rounded-t-lg' 
                    />
                    <div className='flex flex-col p-5 gap-3'>
                        <p className="text-[#333333] font-hanken font-bold text-[18px]">Fixed Deposit Account</p>
                        <p className='font-inter text-[#6C757D] text-sm'> 
                            The Savings Plan Account is designed for individuals and groups who wish to save funds...
                        </p>
                        <p onClick={() => {navigate("/savings/fixed"); window.scrollTo(0, 0)}} className='text-[#006A4E] cursor-pointer text-base'>Learn More</p>
                    </div>
                </div>
                <div className='flex flex-col shadow-md rounded-lg w-[21.438rem] mx-auto lg:w-[22.9rem] h-[324px]'>
                    <div className='bg-[#E9ECEF] w-full h-[160px] rounded-t-lg'></div>
                    <div className='flex flex-col p-5 gap-3'>
                        <p className="text-[#333333] font-hanken font-bold text-[18px]">Xpress Savings Account</p>
                        <p className='font-inter text-[#6C757D] text-sm'> 
                            This is a very flexible and convenient savings account designed 
                            for clients to save money on a voluntary basis.
                        </p>
                        <p onClick={() => {navigate("/savings/xpress"); window.scrollTo(0, 0)}} className='text-[#006A4E] cursor-pointer text-base'>Learn More</p>
                    </div>
                </div>
                <div className='flex flex-col shadow-md rounded-lg w-[21.438rem] mx-auto lg:w-[22.9rem] h-[324px]'>
                    <img 
                        src="https://res.cloudinary.com/dairsbzlv/image/upload/v1740876025/plant_evn1tz.png" 
                        alt='Savings' 
                        className='w-full h-[160px] rounded-t-lg' 
                    />
                    <div className='flex flex-col p-5 gap-3'>
                        <p className="text-[#333333] font-hanken font-bold text-[18px]">Social Impact Deposit (SID)</p>
                        <p className='font-inter text-[#6C757D] text-sm'> 
                            The Savings Plan Account is designed for individuals and groups who wish to save funds...
                        </p>
                        <p onClick={() => {navigate("/savings/social"); window.scrollTo(0, 0)}} className='text-[#006A4E] cursor-pointer text-base'>Learn More</p>
                    </div>
                </div>
            </div>
        </section>


    </div>
  )
}

export default Pikin