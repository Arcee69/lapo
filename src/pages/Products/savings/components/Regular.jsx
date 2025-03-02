import React, { useState, useEffect } from 'react'
import SubSavingsHeader from '../../../../components/SubSavingsHeader'
import SavingsDetails from '../../../../components/SavingsDetails'
import axios from 'axios';

const RegularSavings = () => {
    const [faqCategories, setFaqCategories] = useState([]);
    const [faqByCategory, setFaqByCategory] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    
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
            title="Regular Deposit (Savings)"
            subtitle={`The Savings Plan Account is designed for individuals and groups who wish to save funds toward a particular project(s) over a specified period of time and earn interest on their savings.`}
        />

        <SavingsDetails
            img="https://res.cloudinary.com/dairsbzlv/image/upload/v1740874233/save_dcyh0e.png" 
            details={"At some point in time, every individual has projects to execute. LAPO MfB has designed Savings Plan Account for individuals and groups to save funds towards their specific projects for a specified period. The savings account will generate interest on your fund, while you plan your project."}
            listContent={[
                "Minimum opening and operating balance is just N200",
                "Savings Plan Account can be opened at any LAPO MfB branch nationwide",
                "Very low entry balance",
                "Easy access to your account",
                "Payments can be made anywhere nationwide with our Pocket Money banking service",
                "You are able to secure and grow savings",
                "Available to individuals and groups",
                "Expert financial advice"
            ]}
        />

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

        <section
            className='px-[120px] py-[112px] flex flex-col gap-[41px] items-center'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <p className='text-[54px] font-hanken leading-[51px] text-[#1E1E1E] '>Related Loan Products</p>
            <div className='flex items-start gap-[30px]'>
                <div className='flex flex-col shadow-md rounded-lg w-[22.9rem] h-[324px]'>
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
                        <p className='text-[#006A4E] text-base'>Learn More →</p>
                    </div>
                </div>
                <div className='flex flex-col shadow-md rounded-lg w-[22.9rem]  h-[324px]'>
                    <div className='bg-[#E9ECEF] w-full h-[160px] rounded-t-lg'></div>
                    <div className='flex flex-col p-5 gap-3'>
                        <p className="text-[#333333] font-hanken font-bold text-[18px]">Xpress Savings Account</p>
                        <p className='font-inter text-[#6C757D] text-sm'> 
                            This is a very flexible and convenient savings account designed 
                            for clients to save money on a voluntary basis.
                        </p>
                        <p className='text-[#006A4E] text-base'>Learn More →</p>
                    </div>
                </div>
                <div className='flex flex-col shadow-md rounded-lg w-[22.9rem] h-[324px]'>
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
                        <p className='text-[#006A4E] text-base'>Learn More →</p>
                    </div>
                </div>
            </div>
        </section>


    </div>
  )
}

export default RegularSavings