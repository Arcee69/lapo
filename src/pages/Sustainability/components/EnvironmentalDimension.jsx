import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg'

import Google from "../../../assets/svg/google.svg"
import Apple from "../../../assets/svg/apple.svg"

import BackScreen from "../../../assets/png/back_screen.png"
import FrontScreen from "../../../assets/png/front_screen.png"

const EnvironmentalDimension = () => {
  return (
    <div className='w-full'>
      <div className='mt-[4rem] flex flex-col gap-[4rem]'>
        <section 
          className='flex flex-col gap-[23px] px-5 lg:px-[7.5rem]'
          data-aos="fade-up" 
          data-aos-duration="1000" 
          data-aos-easing="linear"
        >
          <p className='font-hanken font-medium text-[32px] leading-[40px] lg:text-[48px] lg:leading-[51px]'>Our Commitment to Sustainability</p>
          <div className='flex flex-col gap-[15px]'>
            <p className='font-inter text-base text-[#333333] leading-[25px]'>
              LAPO Microfinance Bank (LAPO MfB) implements environmental protection and preservation initiatives through its "Green Clean Lending Programme (GCLP)"
              in alignment with the Nigerian Sustainable Banking Principles (NSBP).
            </p>
            <p className='font-inter text-base text-[#333333] leading-[25px]'>
              Our sustainability statement is to be "a sustainable Microfinance Bank that supports its partners to become proactive participants in positively impacting the
              environment and society through sustainable practices, meeting the economic and social needs of its clients while fulfilling the expectations of its stakeholders."
            </p>
          </div>
          <div className='flex flex-col lg:flex-row items-center gap-[32px]'>
            <div className='w-full lg:w-[23.875rem] h-[26.25rem] shadow-md flex flex-col'>
              <img 
                src="https://res.cloudinary.com/dairsbzlv/image/upload/v1741083415/harvesters_cgyhhj.png" 
                alt='Harvesters' 
                className='lg:w-[23.9rem] h-[12.5rem] rounded-t-lg' 
              />
              <div className='flex gap-[15px] flex-col p-6 rounded-b-lg'>
                <p className='font-hanken font-bold text-[#4380BE] text-[24px]'>Environmental Protection</p>
                <p className='font-inter text-base text-[#333333] leading-[25px]'>
                  We implement various initiatives towards
                  the protection and preservation of our
                  environment through environmentally
                  friendly products and services.
                </p>
              </div>

            </div>
            <div className='w-full lg:w-[23.875rem] h-[26.25rem] shadow-md flex flex-col'>
              <img 
                src="https://res.cloudinary.com/dairsbzlv/image/upload/v1741083838/support_m7urdj.png" 
                alt='Harvesters' 
                className='lg:w-[23.9rem] h-[12.5rem] rounded-t-lg' 
              />
              <div className='flex gap-[15px] flex-col p-6 rounded-b-lg'>
                <p className='font-hanken font-bold text-[#4380BE] text-[24px]'>Social Support</p>
                <p className='font-inter text-base text-[#333333] leading-[25px]'>
                  We provide social protection and support
                  programs focused on health, education,
                  and economic empowerment for our clients
                  and communities.
                </p>
              </div>

            </div>
            <div className='w-full lg:w-[23.875rem] h-[26.25rem] shadow-md flex flex-col'>
              <img 
                src="https://res.cloudinary.com/dairsbzlv/image/upload/v1741083838/esg_ukkcbd.png" 
                alt='ESG' 
                className='w-full lg:w-[23.9rem] h-[12.5rem] rounded-t-lg' 
              />
              <div className='flex gap-[15px] flex-col p-6 rounded-b-lg'>
                <p className='font-hanken font-bold text-[#4380BE] text-[24px]'>Institutional Strengthening</p>
                <p className='font-inter text-base text-[#333333] leading-[25px]'>
                  Our Board committee drives the ESG
                  process and ensures that a well-developed
                  long-term strategy that encompasses all
                  ESG issues is implemented.
                </p>
              </div>

            </div>
          </div>
        </section>

        <section 
          className='flex flex-col gap-[31px] px-5 lg:px-[7.5rem]'
          data-aos="fade-up" 
          data-aos-duration="1000" 
          data-aos-easing="linear"
        >
          <div className='flex flex-col gap-[23px]'>
            <p className='font-hanken text-[24px] lg:text-[48px] leading-[51px]'>ESG Implementation</p>
            <p className='font-inter text-base text-[#333333] leading-[25px]'>
              LAPO MfB commenced the implementation of the Environmental, Social and Governance (ESG) initiative in 2012. Under our Environment & Social
              Management System (ESMS), we screen loan appraisals to assess clients' environmental and social risks of their businesses.
            </p>
          </div>
          <div className='bg-[#FAFBFB] w-full flex flex-col md:flex-row gap-[32px]'>
            <div className='flex flex-col items-center justify-center lg:gap-2 w-[22.333rem] p-6'>
              <p className='text-[#4380BE] font-semibold font-inter text-[24px] lg:text-[40px] leading-[64px]'>2012</p>
              <p className='font-inter text-[#666666] md:whitespace-nowrap text-base'>ESG Initiative Commenced</p>
            </div>
            <div className='flex flex-col items-center justify-center lg:gap-2 w-[22.333rem] p-6'>
              <p className='text-[#4380BE] font-semibold font-inter text-[24px] lg:text-[40px] leading-[64px]'>40,816</p>
              <p className='font-inter text-[#666666] md:whitespace-nowrap text-base'>Loan Appraisals Screened</p>
            </div>
            <div className='flex flex-col items-center justify-center lg:gap-2 w-[22.333rem] p-6'>
              <p className='text-[#4380BE] font-semibold font-inter text-[24px] lg:text-[40px] leading-[64px]'>3</p>
              <p className='font-inter text-[#666666] md:whitespace-nowrap text-base'>Core ESG Elements</p>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <p className='font-inter font-semibold text-[#4380BE] text-[20px] lg:text-[24px]'>Areas Assessed Under ESMS:</p>
            <ul className='list-disc pl-7 font-inter text-base text-[#333333]'>
              <li>Housing</li>
              <li>Agriculture</li>
              <li>Supporting Female Entrepreneurs in Nigeria (SUFEN)</li>
              <li>Small Medium Enterprises (SME)</li>
              <li>Small Business Loans (SBL)</li>
            </ul>
            <p className='font-inter text-base text-[#333333] leading-[25.6px]'>
              This helps to reduce the environmental and social investment risk in projects with environmental 
              liabilities or social conflicts that may compromise the client's ability to pay; 
              it also ensures that the loans given out are sustainable for the client as well as the bank.
            </p>
          </div>
        </section>

        <section
          data-aos="fade-up" 
          data-aos-duration="1000" 
          data-aos-easing="linear"
          className='bg-[#FAFBFB] w-full lg:h-[25.5rem] px-5 lg:px-[7.5rem] py-[3rem] flex flex-col gap-[31px]'
        >
          <div className='flex flex-col gap-[23px]'>
            <p className='font-hanken text-[24px] lg:text-[48px] text-[#1E1E1E]'>Affordable Housing Loan Scheme (AHLS)</p>
            <p className='font-inter text-base text-[#333333] leading-[25px]'>
              The LAPO Microfinance Bank's Affordable Housing Loan (AHL) product was designed to assist members of low income households to own or improve their
              dwelling places. It was initiated in 2013 in collaboration with LAFARGE, the French cement solutions company and the French Agency for Development (AFD).
            </p>
          </div>
          <div className='flex flex-col lg:flex-row items-center gap-[32px]'>
            <div className='bg-[#FFFFFF] rounded-[22px] w-full lg:w-[34.5rem] h-[9rem] p-6 flex flex-col items-center justify-center gap-2'>
              <p className='font-inter text-[#4380BE] font-semibold text-[32px] lg:text-[40px] leading-[64px]'>2,877</p>
              <p className='font-inter text-base text-[#666666]'>Clients Served</p>
            </div>
            <div className='bg-[#FFFFFF] rounded-[22px] w-full lg:w-[34.5rem] h-[9rem] p-6 flex flex-col items-center justify-center gap-2'>
              <p className='font-inter text-[#4380BE] font-semibold text-[32px] lg:text-[40px] leading-[64px]'>₦4.08B</p>
              <p className='font-inter text-base text-[#666666]'>Total Disbursement</p>
            </div>
          </div>
        </section>

        <section
          data-aos="fade-up" 
          data-aos-duration="1000" 
          data-aos-easing="linear"
          className='px-5 lg:px-[7.5rem] flex flex-col gap-[31.9px]'
        >
          <div className='flex flex-col gap-[23px]'>
            <p className='text-[#1E1E1E] font-hanken text-[24px] lg:text-[48px] leading-[51px]'>Clean Energy Programs</p>
            <p className='font-inter text-[#333333] text-base'>
              LAPO MfB has implemented various clean energy initiatives to help clients reduce their 
              environmental impact while improving their quality of life and business operations.
            </p>
          </div>

          <div className='flex flex-col lg:flex-row gap-[32px]'>
            <div className='flex flex-col lg:w-[34.5rem] shadow-md'>
              <img 
                src="https://res.cloudinary.com/dairsbzlv/image/upload/v1741087679/gas_qbmqaq.png" 
                alt='Gas' 
                className='rounded-t-lg h-[11.25rem] lg:h-[277.13px]' 
              />
              <div className='flex flex-col gap-[15px] rounded-b-lg p-6 pb-[40px]'>
                <p className='text-[#4380BE] font-inter font-bold text-[24px]'>O-Gas Initiative</p>
                <p className='font-inter text-base leading-[25px] text-[#333333]'>
                  LAPO MfB teamed up with Oando since 2012 to distribute and market O-Gas, a liquefied natural cooking 
                  gas cylinder of different sizes that enables our clients to reduce and eventually eliminate their 
                  reliance on firewood and charcoal.
                </p>
                <p className='text-[#333333] font-inter text-base '>
                  <span className='font-bold'>Recent Impact:</span> 2,414 gas cylinders provided to clients with
                  ₦70,631,602 disbursed.
                </p>
              </div>
            </div>
            <div className='flex flex-col lg:w-[34.5rem] shadow-md'>
              <img 
                src="https://res.cloudinary.com/dairsbzlv/image/upload/v1741088151/solar_qwg6b9.png" 
                alt='Gas' 
                className='rounded-t-lg  h-[11.25rem] lg:h-[277.13px]' 
              />
              <div className='flex flex-col gap-[15px] rounded-b-lg p-6 pb-[40px]'>
                <p className='text-[#4380BE] font-inter font-bold text-[24px]'>Solar Light Lending</p>
                <p className='font-inter text-base leading-[25px] text-[#333333]'>
                  LAPO MfB has partnered with major distributors of solar products in Nigeria to promote 
                  power supply to the most vulnerable in society, particularly those with reduced access to 
                  national electricity supply due to their rural locations.
                </p>
                <p className='text-[#333333] font-inter text-base '>
                  <span className='font-bold'>Recent Impact:</span> 26,659 solar products provided to clients with
                  ₦1,809,162,033 disbursed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          data-aos="fade-up" 
          data-aos-duration="1000" 
          data-aos-easing="linear"
          className='px-5 lg:px-[7.5rem] bg-[#FAFBFB] flex flex-col pb-[64px] lg:pb-0 gap-[23px] lg:h-[53rem] pt-[48px]'
        >
          <p className='font-hanken text-[#1E1E1E] text-[24px] leading-[30px] lg:text-[48px] lg:leading-[51px]'>Workplace Safety and Health Initiatives</p>
          <div className='gap-[22px] flex flex-col'>
            <div className='flex flex-col gap-[15px]'>
              <p className='font-inter text-[#4380BE] text-[20px] lg:text-[24px] font-bold'>Occupational Health & Safety (OHS)</p>
              <p className='text-base font-inter text-[#333333] leading-[25px]'>
                LAPO MfB provides first aid boxes and fire safety equipment in all its branches nationwide yearly and 
                restocks as and when due. Our staff are being trained periodically by state and Federal fire service 
                personnel on fire safety, surveillance, and emergency first aid in the workplace.
              </p>
              <p className='text-base font-inter text-[#333333] leading-[25px]'>
                Energy-saving bulbs and inverters have been installed to reduce energy consumption. Also, our Head and Zonal offices have industrial printers to reduce paper
                usage due to having multiple printers. That way, paper usage is strictly tracked and monitored to minimize wastage.
              </p>
            </div>
            <div className='flex flex-col gap-[15px]'>
              <p className='font-inter text-[#4380BE] text-[20px] lg:text-[24px] font-bold'>Health Awareness Programs</p>
              <p className='text-base font-inter text-[#333333] leading-[25px]'>
                Poor health, nutrition and health service exclusion are all indicators of poverty. To address these challenges, we provide health intervention and awareness
                programs on:
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'> {/* flex items-center w-[17rem]*/}
              <div className='bg-[#4380BE] h-[126.39px] rounded-lg flex flex-col items-center justify-center'>
                <p className='font-inter font-bold text-[20px] lg:text-[24px] text-[#FFFFFF]'>HIV</p>
              </div>
              <div className='bg-[#4380BE] h-[126.39px] rounded-lg flex flex-col items-center justify-center'>
                <p className='font-inter font-bold text-[20px] lg:text-[24px] text-[#FFFFFF]'>Malaria</p>
              </div>
              <div className='bg-[#4380BE] h-[126.39px] rounded-lg flex flex-col items-center justify-center'>
                <p className='font-inter font-bold text-[20px] lg:text-[24px] text-[#FFFFFF]'>Blood Pressure</p>
              </div>
              <div className='bg-[#4380BE] h-[126.39px] rounded-lg flex flex-col items-center justify-center'>
                <p className='font-inter font-bold text-[20px] lg:text-[24px] text-[#FFFFFF]'>Blood Sugar</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='bg-[#4380BE] w-[35rem] h-[126.39px] rounded-lg flex flex-col items-center justify-center'>
                <p className='font-inter font-bold text-[24px] text-[#FFFFFF]'>Hepatitis</p>
              </div>
              <div className='bg-[#4380BE] w-[35rem] h-[126.39px] rounded-lg flex flex-col items-center justify-center'>
                <p className='font-inter font-bold text-[24px] text-[#FFFFFF]'>Diabetes</p>
              </div>
            </div>
          </div>
          <p className='font-inter text-[#00984C] font-semibold font-italic text-[20px] lg:text-[24px]'>
            The early detection of these ailments will aid in better health management and life longevity.
          </p>
        </section>
      </div>

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

      <section
          className='px-5 lg:px-[120px] py-[96px] lg:py-[112px] flex flex-col gap-[41px] items-center'
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

export default EnvironmentalDimension