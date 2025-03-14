import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg'

import Google from "../../../assets/svg/google.svg"
import Apple from "../../../assets/svg/apple.svg"

import BackScreen from "../../../assets/png/back_screen.png"
import FrontScreen from "../../../assets/png/front_screen.png"
import { useNavigate } from 'react-router-dom'

const Social = () => {

    const navigate = useNavigate()

  return (
    <div className='w-full'>
        <section
            className='flex flex-col items-start px-5 lg:px-[63px] pt-[36px] lg:pt-[103px] pb-[27px] gap-[34px]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <p className='font-hanken text-[32px] lg:text-[54px] leading-[29px] text-[#2C3E50]'>LAPO MfB’s Social Dimension</p>

            <div
                className='bg-[#F8F9FA] py-[22px] flex items-center justify-center border-[4px] border-y-0 border-r-0 border-[#007BFF]'
            >
                <p className='text-[#333333] italic font-inter text-[20px] pl-[28.11px] pr-[23.48px] leading-[29px]'>
                    LAPO MfB has deepened its social performance approach by engaging in activities that enhance 
                    our client protection principles and support, such as Transparency and Responsible pricing. 
                    Others are Prevention of over-indebtedness, Appropriate product design, Privacy of clients' data, 
                    and feedback methods, giving LAPO MfB ways to address clients' complaints so that they can be 
                    served more effectively.
                    <span className='block'>LAPO Microfinance Bank has demonstrated its commitment to support its clients to provide </span>
                </p>
            </div>
        </section>

        <section
            className='flex flex-col items-center px-5 lg:px-[76px] py-[53px] gap-[50px]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex flex-col items-center gap-2'>
                <div className='w-[83px] h-[32px] rounded-lg flex items-center justify-center p-2 bg-[#E8FFF4]'>
                    <p className='font-hanken font-medium text-sm leading-[15px]'>Footprint</p>
                </div>
                <p className='font-hanken text-[32px] lg:text-[54px] lg:w-[846px] leading-[40px] lg:leading-[54px] text-center text-[#000504]'>
                    Creating a Better Tomorrow, Today.
                </p>
            </div>

            <div className="flex flex-col gap-10">
                <div className='flex flex-col lg:flex-row items-start gap-10'>
                    <div className='bg-[#4380BE17] px-6 py-[22px] h-auto lg:h-[355px] flex flex-col gap-1 rounded-xl w-full lg:w-6/12'>
                        <p className='font-hanken font-medium text-[24px] lg:text-[32px] leading-[30px] whitespace-nowrap lg:leading-[48px] text-[#101828]'>LAPO Scholarship Scheme.</p>
                        <p className='font-inter font-[300] text-[#101828] text-base leading-6'>
                            Quality education is critical to the development of a child for a productive adulthood. 
                            LAPO Microfinance Bank recognizes the importance of education in personal and national 
                            development. Unfortunately, access to quality education for children from low-income 
                            households is constrained by limited financial resources. This informed the establishment 
                            of the LAPO Scholarship and Skill Acquisition Support Scheme.
                            The seed fund for this program was the cash prize of USD 10,000 of the Grameen Foundation's 
                            Excellence in Microfinance Award in 2006. The primary focus is on support for the Secondary 
                            level, as children from low-income households usually drop out of the educational system at 
                            the
                        </p>
                    </div>
                    <div className='w-full lg:w-6/12 h-[355px]'>
                        <img 
                            src="https://res.cloudinary.com/dairsbzlv/image/upload/v1740236176/scholarship_ff9rba.png"
                            alt='Scholarship'
                            className='rounded-lg h-[355px] w-full'
                        /> 
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-start gap-10'>
                    <div className='hidden lg:block w-6/12 h-[355px]'>
                        <img 
                            src="https://res.cloudinary.com/dairsbzlv/image/upload/v1740236188/tailor_bz1vmk.png"
                            alt='Scholarship'
                            className='rounded-lg h-[355px] w-full'
                        /> 
                    </div>
                    <div className='bg-[#4380BE17] px-6 py-[22px] h-auto lg:h-[355px] flex flex-col gap-1 rounded-xl lg:w-6/12'>
                        <p className='font-hanken font-medium text-[24px] lg:text-[32px] leading-[30px] lg:leading-[48px] text-[#101828]'>Skills Acquisition</p>
                        <p className='font-inter font-[300] text-[#101828] text-base leading-6'>
                            To enable children of clients outside the formal educational system to benefit, 
                            a Skills Acquisition Scheme was launched in January 2016. The Scheme was piloted 
                            in Lagos and Benin but has spread to other states including, Ondo, Kwara, Osun, Kaduna, 
                            Imo and FCT. Over Nine hundred (900) awardees have been trained as of December 2022.
                            The scheme provides funding support for clients’ children through a general balloting 
                            and selection process that is organized by the staff but the actual balloting is carried 
                            out by clients at the LAPO Branch Council meeting in order to show transparency and 
                            fairness of the process.
                        </p>
                    </div>
                    <div className='lg:hidden block w-full h-[355px]'>
                        <img 
                            src="https://res.cloudinary.com/dairsbzlv/image/upload/v1740236188/tailor_bz1vmk.png"
                            alt='Scholarship'
                            className='rounded-lg h-[355px] w-full'
                        /> 
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-start gap-10'>
                    <div className='bg-[#4380BE17] px-6 py-[22px] h-auto lg:h-[355px] flex flex-col gap-1 rounded-xl lg:w-6/12'>
                        <p className='font-hanken font-medium text-[24px] leading-[30px] lg:text-[32px] lg:leading-[48px] text-[#101828]'>Health Intervention</p>
                        <p className='font-inter font-[300] text-[#101828] text-base leading-6'>
                            As a part of our Corporate Social Responsibility, we identify with Non-Governmental 
                            Organizations (NGOs) whose objective is to improve the living conditions of the poorest 
                            members of the society and make financial provisions for them. Our objective is to make 
                            quality health care available to poor Africans who constitute our major target through 
                            these NGOs
                        </p>
                    </div>
                    <div className='w-full lg:w-6/12 h-[355px]'>
                        <img 
                            src="https://res.cloudinary.com/dairsbzlv/image/upload/v1740236152/family_b1rfps.png"
                            alt='Family'
                            className='rounded-lg h-[355px] w-full'
                        /> 
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center gap-2'>
                <div className='bg-[#4380BE] rounded-[15px] flex flex-col py-[42px] px-6'>
                    <p className='font-hanken text-[#FFFFFF] font-medium text-[24px] lg:text-[32px] leading-[48px]'>Integration Programme</p>
                    <p className='font-inter text-base leading-6 text-[#FFFFFF]'>
                        Focus on clients' social and health needs is paramount to the ultimate poverty alleviation 
                        goal of LAPO MfB. Our integration program enables clients to access health information and 
                        screening services for early detection of common ailments such as HIV, Malaria, 
                        blood pressure (BP), blood sugar, Hepatitis, and Diabetes. Under the program, we also provide 
                        our clients awareness and intervention on HIV, Malaria, Maternal and Childbirth, blood pressure, 
                        diabetes, and hepatitis
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row items-center gap-[15px] '>
                    <div className='bg-[#fff] drop-shadow-md lg:h-[232px] w-full lg:w-6/12 rounded-[15px] py-[32px] px-6 flex flex-col gap-1'>
                        <p className="text-[#4380BE] font-medium text-[24px] lg:text-[32px] leading-[48px] font-hanken">Health Awareness</p>
                        <p className='text-[#101828] text-base font-inter leading-6 font-[300]'>
                            Poor health, nutrition and health service exclusion are all indicators of poverty. 
                            To address these challenges, we provide health intervention and awareness programs on HIV, 
                            malaria, blood pressure (BP), blood sugar, hepatitis, and diabetes. 
                            The early detection of these ailments will aid in better health management and life longevity.
                        </p>
                    </div>
                    <div className='bg-[#fff] drop-shadow-md h-auto lg:h-[232px] w-full lg:w-6/12 rounded-[15px] py-[32px] px-6 flex flex-col gap-1'>
                        <p className="text-[#4380BE] font-medium text-[24px] lg:text-[32px] leading-[48px] font-hanken">Insurance</p>
                        <p className='text-[#101828] text-base font-inter leading-6 font-[300]'>
                            We provide micro-insurance to all clients through a third-party insurance service provider. 
                            All the borrowers are offered general and personal insurance throughout the loan tenor, 
                            even as clients' savings are insured.
                        </p>
                    </div>
                </div>  
            </div>
        </section>

        {/* <section
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
            className='flex flex-col items-center gap-[41px] py-[112px] px-[74px]'
        >
            <p className='font-hanken text-[54px] leading-[51px] text-[#1E1E1E]'></p>
            <div className='flex items-center gap-[30px]'>
                <div className='drop-shadow-md w-[366px] h-[324px] flex flex-col items-start gap-[30px] px-2.5 pb-6 bg-[#ffff] rounded-lg'>
                    <img 
                        src="https://res.cloudinary.com/dairsbzlv/image/upload/v1740238686/wind_p3xnl2.png"
                        alt='Wind'
                        className='h-[152px] w-[346px] object-cover'
                    />
                    <div className='flex flex-col gap-[9px] items-start'>
                        <p className='font-hanken text-[18px] font-medium leading-5'>Environment Dimension.</p>
                        <p className='font-inter text-sm leading-[22px] text-[#6C757D]'>
                            Grow your business with our flexible financing 
                            options designed for entrepreneurs and SMEs.
                        </p>
                        <div className='flex items-center gap-2'>
                            <p className='text-[#006A4E] font-inter text-base leading-[25px]'>Learn More</p>
                            <CgArrowLongRight className='w-5 h-5 text-[#006A4E]'/>
                        </div>
                    </div>
                </div>
                <div className='drop-shadow-md w-[366px] h-[324px] flex flex-col items-start gap-[30px] px-2.5 pb-6 bg-[#ffff] rounded-lg'>
                    <img 
                        src="https://res.cloudinary.com/dairsbzlv/image/upload/v1740238685/plant_jnxuhq.png"
                        alt='Wind'
                        className='h-[152px] w-[346px] object-cover'
                    />
                    <div className='flex flex-col gap-[9px] items-start'>
                        <p className='font-hanken text-[18px] font-medium leading-5'></p>
                        <p className='font-inter text-sm leading-[22px] text-[#6C757D]'>
                           .
                        </p>
                        <div className='flex items-center gap-2'>
                            <p className='text-[#006A4E] font-inter text-base leading-[25px]'>Learn More</p>
                            <CgArrowLongRight className='w-5 h-5 text-[#006A4E]'/>
                        </div>
                    </div>
                </div>
                <div className='drop-shadow-md w-[366px] h-[324px] flex flex-col items-start gap-[30px] px-2.5 pb-6 bg-[#ffff] rounded-lg'>
                    <img 
                        src="https://res.cloudinary.com/dairsbzlv/image/upload/v1740238685/recycle_ntjphp.png"
                        alt='Wind'
                        className='h-[152px] w-[346px] object-cover'
                    />
                    <div className='flex flex-col gap-[9px] items-start'>
                        <p className='font-hanken text-[18px] font-medium leading-5'>Badges</p>
                        <p className='font-inter text-sm leading-[22px] text-[#6C757D]'>
                            Transform your living space with affordable financing for renovations and improvements.
                        </p>
                        <div className='flex items-center gap-2'>
                            <p className='text-[#006A4E] font-inter text-base leading-[25px]'>Learn More</p>
                            <CgArrowLongRight className='w-5 h-5 text-[#006A4E]'/>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}


        <section
            className='px-5 lg:px-[120px] py-[112px] flex flex-col gap-[41px] items-center'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <p className='text-[32px] lg:text-[54px] font-hanken leading-[51px] text-[#1E1E1E]'>More About Our Impact</p>
            <div className='flex flex-col lg:flex-row items-start gap-[30px]'>
                <div className='flex flex-col shadow-md rounded-lg w-[21.438rem] mx-auto lg:w-[22.9rem] h-auto lg:h-[324px]'>
                    <img 
                        src="https://res.cloudinary.com/dairsbzlv/image/upload/v1740238686/wind_p3xnl2.png"
                        alt='Savings' 
                        className='w-full h-[152px] object-cover rounded-t-lg' 
                    />
                    <div className='flex flex-col p-5 gap-3'>
                        <p className="text-[#333333] font-hanken font-bold text-[18px]">Environment Dimension.</p>
                        <p className='font-inter text-[#6C757D] text-sm'> 
                            Grow your business with our flexible financing 
                            options designed for entrepreneurs and SMEs.
                        </p>
                        <p onClick={() => {navigate("/sustainability"); window.scrollTo(0, 0)}} className='text-[#006A4E] cursor-pointer text-base'>Learn More</p>
                    </div>
                </div>
                <div className='flex flex-col shadow-md rounded-lg w-[21.438rem] mx-auto lg:w-[22.9rem] h-auto lg:h-[324px]'>
                    <img 
                        src="https://res.cloudinary.com/dairsbzlv/image/upload/v1740238685/plant_jnxuhq.png"
                        alt='Savings' 
                        className='w-full object-cover h-[152px] rounded-t-lg' 
                    />
                    <div className='flex flex-col p-5 gap-3'>
                        <p className="text-[#333333] font-hanken font-bold text-[18px]">Nigerian Sustainable Banking Principles (NSBP) & LAPO MfB</p>
                        <p className='font-inter text-[#6C757D] text-sm'> 
                            Fund your education or your children's schooling 
                            with our affordable education financing
                        </p>
                        <p onClick={() => {navigate("/sustainability"); window.scrollTo(0, 0)}} className='text-[#006A4E] cursor-pointer text-base'>Learn More</p>
                    </div>
                </div>
                <div className='flex flex-col shadow-md rounded-lg w-[21.438rem] mx-auto lg:w-[22.9rem] h-auto lg:h-[324px]'>
                    <img 
                        src="https://res.cloudinary.com/dairsbzlv/image/upload/v1740238685/recycle_ntjphp.png"
                        alt='Savings' 
                        className='w-full h-[152px] object-cover rounded-t-lg' 
                    />
                    <div className='flex flex-col p-5 gap-3'>
                        <p className="text-[#333333] font-hanken font-bold text-[18px]">Badges</p>
                        <p className='font-inter text-[#6C757D] text-sm'> 
                            Transform your living space with affordable financing for renovations and improvements.
                        </p>
                        <p onClick={() => {navigate("/sustainability"); window.scrollTo(0, 0)}} className='text-[#006A4E] cursor-pointer text-base'>Learn More</p>
                    </div>
                </div>
            </div>
        </section>

        <section
            className='w-full px-5 lg:px-[80px] py-[96px] lg:h-[512px] overflow-hidden'
            data-aos="fade-up" 
            data-aos-duration="1000"
            data-aos-easing="linear"
        >
            <div
                className='flex flex-col lg:flex-row items-center justify-center gap-[64px]'
            >
                <div className='lg:w-[576px] flex flex-col gap-6'>
                <p className='font-medium font-hanken text-[32px] lg:text-[48px] leading-[60px]'>
                    Bank On the Go – Anytime, Anywhere!
                </p>
                <p className='text-[#667085] text-[20px] font-nunito leading-[30px] lg:w-[480px]'>
                    Download LAPO's mobile app for seamless banking, savings, 
                    and loans—all at your fingertips.
                </p>
                <div className='flex items-center gap-4'>
                    <img src={Apple} alt='Apple' className='w-[120px] cursor-pointer h-[40px]' onClick={() => window.open("https://apps.apple.com/ng/app/lapo-mobile-app/id6448030325", "_blank")} />
                    <img src={Google} alt='Google' className='w-[120px] cursor-pointer h-[40px]' onClick={() => window.open("https://play.google.com/store/apps/details?id=com.digicore.lapo", "_blank")}/>
                </div>
                </div>
                <div className='bg-[#F3F5F4] w-full lg:w-[576px] h-[512px] lg:h-auto relative overflow-hidden flex items-center rounded-tl-[30px] rounded-tr-[30px]'>
                <div className='w-[274px] hidden lg:block lg:relative left-10 -bottom-20'>
                    <img src={BackScreen} alt='BackScreen' className='' />
                </div>
                <div className='w-[281px] mx-auto relative lg:right-4 -bottom-10 z-10'>
                    <img src={FrontScreen} alt='FrontScreen' className=''  />
                </div>
                </div>
            </div>
        </section>


    </div>
  )
}

export default Social