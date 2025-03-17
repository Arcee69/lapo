import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg'

import Google from "../../../assets/svg/google.svg"
import Apple from "../../../assets/svg/apple.svg"

import BackScreen from "../../../assets/png/back_screen.png"
import FrontScreen from "../../../assets/png/front_screen.png"

const Principles = () => {


  const principlesData = [
    {
      title: "Principle 1: Our Business Activities",
      subtitle: `<p class="font-bold italic text-base text-[#333333]">Environmental & Social Risk Management: <span class="font-normal">Integration of
                  Environmental and Social considerations into our lending activities.</span></p>`,
      points: [
        "We integrate our Environment and Social Management System (ESMS) into our new Core Banking System (CBS).",
        "Before the new CBS, we used the e-leader platform to conduct our E & S Due Diligence Assessment, mitigation, conformity and reporting."
      ]
    },
    {
      title: "Principle 2: Our Business Operations",
      subtitle: `<p class="font-bold italic text-base text-[#333333]">Environmental & Social Footprint: <span class="font-normal">Avoidance of the negative impact of our Business Operations.</span></p>`,
      points: [
        "We saved over ₦7.3M by not using or printing 124,770 sheets of paper. Our paper consumption decreased due to the digitization of some of our processes.",
        "Following the introduction of energy-saving policies such as switching off all electrical appliances not in use, using energy-saving bulbs and inverters in our offices, and using solar panels in some of our operating branches among others, our energy consumption dropped."
      ]
    },
    {
      title: "Principle 3: Human Rights",
      subtitle: `<p class="font-bold italic text-base text-[#333333]">Respect for the rights of all in Business Operations.</p>`,
      points: [
        "All transactions were screened using the ESMS screening process to discourage child and forced labour.",
      ]
    },
    {
      title: "Principle 4: Women's Economic Empowerment",
      subtitle: `<p class="font-bold italic text-base text-[#333333]">Promote economic empowerment through a gender-inclusive workplace culture and provide products and services for men.</p>`,
      points: [
        "We have empowered thousands of women through SUFEN (Supporting Female Entrepreneurs), a loan product specifically designed for women empowerment.",
        "61% of our employees are females as against 39% male employees.",
        "Our board gender composition is four women and three men.",
        "We have 36% women in the Management Team."
      ]
    },
    {
      title: "Principle 5: Financial Inclusion",
      subtitle: `<p class="font-bold italic text-base text-[#333333]">Promotion of financial inclusion and provision of financial services to individuals and communities with limited or no access to the formal financial sector.</p>`,
      points: [
        "LAPO has Agents in rural locations in Thirty-Four (34) states to reach the unbankable populace.",
        "Our products and services are accessed by all interested persons, including economically-active and physically challenged persons.",
        "A total of 2,388 new accounts was opened in 2022.",
        "The total sum of N847, 779,464 was mobilized through Agents business locations.",
        "To improve customer satisfaction, the Bank is developing a new Agent Application to address customer needs.",
      ]
    },
    {
      title: "Principle 6: E&S Governance",
      subtitle: `<p class="font-bold italic text-base text-[#333333]">Implementation of transparent E & S risks governance practices within the institution and we assess the E & S governance of our clients.</p>`,
      points: [
        "Monthly and quarterly reports to the Board and Management Executive Management and to the ESG board on our E & S performance.",
        "Our Internal Audit team checks the computation of the paperless banking report before it is shared.",
        "We provided updates to our investors (DFC, AfDB, OIKO, DBN, IFC, etc.)",
      ]
    },
    {
      title: "Principle 7: Capacity Building",
      subtitle: `<p class="font-bold italic text-base text-[#333333]">Development of the capacity to identify, assess and manage E &S risks and opportunities associated with the bank's business activities and operations.</p>`,
      points: [
        "LAPO trained over five thousand (5,000) employees on Anti Money Laundering and code of conduct of the bank.",
        "LAPO trained clients before and after accessing loan on business management and record keeping.",
        "ESG Team attended training on ISO 45001 (OHS), ISO 14001 (EMS), ESMS training by DBN, fire safety / management and Sustainability awareness for Management.",
      ]
    },
    {
      title: "Principle 8: Collaborative Partnerships",
      subtitle: `<p class="font-bold italic text-base text-[#333333]">Collaboration across the sector and leveraging on international partnerships; moving in unison with the financial sector as a whole, and ensuring consistency with international standards.</p>`,
      points: [
        "We have collaborated with Edojobs, women development Centre, NDE on skills Acquisition.",
        "D.light, Sunking, Tech Upload by Ovi pilot, NTA Star by Startimes Television, OVH by Oando Gas, So-light, Stallion Bajaj, LEMI Renewable Solar, SALPHA Energy on clean green energy products.",
        "IFC, DBN, World Bank, AFDB",
        "Global Alliance for Banking on Values (GABV)"
      ]
    },
    {
      title: "Principle 9: Reporting",
      subtitle: `<p class="font-bold italic text-base text-[#333333]">Regularly review and report our progress in meeting the principle at the individual institutional and sector level.</p>`,
      points: [
        "The Microfinance Bank provides periodic updates to our investors such as AfDB, OIKO, etc. regarding our E & S performance, mitigation, and evaluation.",
        "We produced a Sustainability report which is shared among stakeholders annually.",
      ]
    },
  ]


  return (
    <div className='w-full'>
      <div 
        className='pb-[70px] pt-[40px] flex flex-col px-5 lg:px-[100px] gap-[30px]'
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        <div className="bg-[#F8F9FA] rounded-[20px] w-full lg:h-[16.125rem] p-5 gap-[44px] flex-col flex">
          <div className="border border-[#4380BE66] p-3 border-x-0 border-t-0">
            <p className="font-hanken text-[32px] lg:text-[54px] text-[#1E1E1E] leading-[38px]">Nigeria's Sustainable Banking Principles</p>
          </div>
          <div className="flex flex-col gap-[15px]">
            <p className="text-[#333333] text-base leading-[25.6px] font-hanken">
              LAPO Microfinance Bank aligns with the Nigerian Sustainable Banking Principles and United Nations Sustainable Development Goals and has integrated into the
              Microfinance Business activities and operations the provisions of the nine (9) principles of Nigerian Sustainable Banking Principles (NSBP).
            </p>
            <p className="text-[#333333] text-base leading-[25.6px] font-hanken">
              The table below highlights some of our key achievements in the implementation of CBN's NSBP in the year 2022.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {
            principlesData.map((item, index) => (
              <div key={index} className='h-auto lg:h-[30.813rem] shadow flex flex-col items-start gap-5'>
                <div className='bg-[#4380BE] h-auto p-[14px] w-full'>
                  <p className='font-bold text-[#fff] text-[19px] '>{item.title}</p>
                </div>
                <div className='flex flex-col gap-5 p-5'>
                  <div className='bg-[#EEF4F9] p-2 h-auto border-[4px] border-[#4380BE] border-y-0 border-r-0'>
                    <p dangerouslySetInnerHTML={{ __html: item.subtitle }} /> 
                  </div>
                  <p className='text-[#333333] font-hanken font-bold text-base'>LAPO's IMPACT UPDATE</p>
                  <div className='flex flex-col gap-2'>
                    {
                      item.points.map((i, index) => (
                        <div className='flex items-start gap-2' key={index}>
                          <p className='text-[#4380BE] font-hanken'>✔</p> 
                          <p className='text-[#333333] font-hanken'>{i}</p>
                        </div>
                      ))
                    }
                  </div>

                </div>

              </div>
            ))
          }
      
        </div>
      </div>

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

export default Principles