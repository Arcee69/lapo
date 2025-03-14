import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg'

import Google from "../../../assets/svg/google.svg"
import Apple from "../../../assets/svg/apple.svg"

import BackScreen from "../../../assets/png/back_screen.png"
import FrontScreen from "../../../assets/png/front_screen.png"

const Sdg = () => {

  const sdgData = [
    {
      name: "SDG 1: No Poverty",
      img: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741196798/poverty_t5vgqg.png",
      bgc: "#D61930",
      title: "Eradicate extreme poverty for all people everywhere",
      content: `We have contributed to poverty reduction by providing
                easily accessible credits to over six million low-income
                people, sponsoring Skills Acquisition for over 700 young
                people, scholarships to over 3000 people and various CSR initiatives.`
    },
    {
      name: "SDG 2: Zero Hunger",
      img: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741196798/hunger_qdhika.png",
      bgc: "#DBA12E",
      title: "End hunger, achieve food security",
      content: `We tackle hunger through strategic agricultural lending to farmers and other agro-allied businesses.`
    },
    {
      name: "SDG 3: Good Health",
      img: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741196798/health_ayzbzf.png",
      bgc: "#489735",
      title: "Ensure healthy lives and promote well-being",
      content: `We promote good health and well-being through our
                screening services and free medical check-ups for clients, which cover HIV, 
                malaria, blood sugar, blood pressure, and hepatitis. The screening is aimed 
                to address the challenges of self-medication.`
    },
    {
      name: "SDG 4: Quality Education",
      img: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741196798/education_oeop1a.png",
      bgc: "#BA182A",
      title: "Ensure inclusive and equitable quality education",
      content: `We continue to promote education through our scholarship & skills acquisition programs. 
                As of December 2021, over 3,500 of our clients' children have benefited from our scholarship 
                program and over 770 from the skills acquisition program.`
    },
    {
      name: "SDG 5: Gender Equality",
      img: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741196798/gender_kf6086.png",
      bgc: "#FF260A",
      title: "Achieve gender equality and empowerment",
      content: `We support gender equality through the equitable
                distribution of opportunities and our HR policies. As of
                December 2021, the percentage of women in our workforce is 57.8%, 
                while the female representation in our management team is 44.4%.`
    },
    {
      name: "SDG 6: Clean Water",
      img: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741196798/water_vwfizj.png",
      bgc: "#1DB7DC",
      title: "Ensure availability and sustainable management",
      content: `We have water dispensers in all our offices to ensure free access to clean drinking water for staff, 
                clients, and visitors. We also ensure Housing Loan clients make adequate provisions for good sanitation 
                facilities.`
    },
    {
      name: "SDG 7: Clean Energy",
      img: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741196797/energy_yxdsgq.png",
      bgc: "#FFB001",
      title: "Ensure access to affordable, reliable energy",
      content: `We use energy-saving bulbs and inverters in our over 500 office locations and encourage 
                the use of renewable energy products through our clean green lending products.`
    },
    {
      name: "SDG 8: Decent Work",
      img: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741196797/work_zsnkor.png",
      bgc: "#A21942",
      title: "Promote sustainable and inclusive growth",
      content: `LAPO continues to promote sustainable economic growth
                through regular payment of salaries. During COVID-19, we
                provided a moratorium and interest reduction for all loan
                products while ensuring staff salaries were paid throughout.`
    },
    {
      name: "SDG 9: Innovation",
      img: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741196797/innovation_lz9lg4.png",
      bgc: "#FD6925",
      title: "Build resilient infrastructure",
      content: `We remain committed to using our innovative and
                technologically driven banking products and services to
                improve the condition of Nigeria's social infrastructure.`
    },
    {
      name: "SDG 10: Reduced Inequalities",
      img: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741196798/inequalities_mfzh8g.png",
      bgc: "#DD1367",
      title: "Reduce inequality within and among countries",
      content: `At LAPO Microfinance Bank, we welcome people from
                diverse backgrounds and nationalities into our workforce.`
    },
    {
      name: "SDG 11: Sustainable Cities",
      img: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741196797/cities_egex0v.png",
      bgc: "#FD9D24",
      title: "Make cities inclusive, safe, and sustainable",
      content: `We continue to make our cities safe through initiatives like
                our WASH (Water, Access, Sanitation, and Hygiene)
                campaign which focuses on avoiding open defecation and
                access to clean water.`
    },
    {
      name: "SDG 12: Responsible Consumption",
      img: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741196797/consumption_ahy7zm.png",
      bgc: "#BF8B2E",
      title: "Ensure sustainable consumption patterns",
      content: `We carry out several initiatives that help in efficient resource
                usage, such as our paperless banking initiative and
                ensuring appliances are switched off when not in use.`
    },
    {
      name: "SDG 13: Climate Action",
      img: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741196797/climate_uqncgv.png",
      bgc: "#3F7E44",
      title: "Take urgent action to combat climate change",
      content: `To minimize the effects of climate change, we conduct due
                diligence for clients whose activities may negatively impact
                the environment to ensure mitigation and remediation of
                their impacts.`
    },
    {
      name: "SDG 14: Life Below Water",
      img: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741196797/fish_ahjdlz.png",
      bgc: "#0A97D9",
      title: "Conserve and sustainably use marine resources",
      content: `In our agricultural lending, we do not fund farmers who use
                drift nets, which result in large by-catch of non-target fish
                and marine life.`
    },
    {
      name: "SDG 15: Life on Land",
      img: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741196797/land_s0wf4s.png",
      bgc: "#56C02B",
      title: "Protect and restore terrestrial ecosystems",
      content: `We encourage our Agricultural clients to desist from bush
                burning and the use of dangerous chemicals. We also
                encourage timber clients to plant more trees to avoid
                resource depletion.`
    },
    {
      name: "SDG 16: Peace and Justice",
      img: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741196797/peace_xmtlps.png",
      bgc: "#00689D",
      title: "Promote peaceful and inclusive societies",
      content: `LAPO continues to provide legal aid to promote the rights of
                women who are victims of gender-based violence and
                social injustices linked to traditional beliefs and practices.`
    },
    {
      name: "SDG 17: Partnerships",
      img: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741196797/partnership_fy5jfm.png",
      bgc: "#19486A",
      title: "Strengthen global partnerships",
      content: `We've formed partnerships with organizations like Global Alliance for Banking on Values, 
                Central Bank of Nigeria, African Development Bank, International Finance Corporation, 
                and Global Reporting Initiative.`
    },
  ]

  return (
    <div className='w-full'>
      <section 
        className='pb-[70px] pt-[40px] flex flex-col px-5 lg:px-[100px] gap-[30px]'
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        <div className="bg-[#F8F9FA] rounded-[20px] w-full lg:h-[21.188rem] p-5 gap-[18px] flex-col flex">
          <div className="border border-[#4380BE66] p-3 border-x-0 border-t-0">
            <p className="font-hanken text-[32px] lg:text-[54px] leading-[40px] text-[#1E1E1E] lg:leading-[59px]">United Nations Sustainable Development Goals (SDGs)</p>
          </div>
          <div className="flex flex-col gap-[15px]">
            <p className="text-[#333333] text-base leading-[25.6px] font-hanken">
              LAPO Microfinance Bank plays an active role in the actualization of the United Nations Sustainable Development Goals in Nigeria. This is a clear indication of our commitment to a better environment and a sustainable planet.
            </p>
            <p className="text-[#333333] text-base leading-[25.6px] font-hanken">
              Explore our contributions toward each of the 17 Sustainable Development Goals below and see how we're making a difference in communities across Nigeria.
            </p>
          </div>
        </div>
        <img 
          src="https://res.cloudinary.com/dairsbzlv/image/upload/v1741195964/world_man_w2zdyh.png"
          alt='World Man'
          className='lg:h-[34.125rem] w-full'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {
            sdgData.map((item, index) => (
              <div className='lg:h-[15.24rem] shadow flex flex-col lg:flex-row items-start' key={index}>
                <div 
                  style={{
                    backgroundColor: item.bgc
                  }}
                  className={`flex flex-col rounded-tl-lg lg:rounded-bl-lg items-center justify-center px-5 w-full lg:max-w-[120px] h-[11.313rem] lg:h-[15.24rem]`}
                >
                  <img src={item.img} alt='Sdg Img' className='w-[80px] h-[80px] object-cover' />
                  <p className='font-inter font-bold text-sm text-center leading-[23px] text-[#fff]'>{item.name}</p>
                </div>
                <div className='p-6 lg:h-[15.24rem] flex flex-col gap-[7.13px]'>
                  <div className='border border-[#F0F0F0] border-x-0 border-t-0'>
                    <p className='font-inter text-[#333333] font-semibold text-[20px] leading-[28px]'>{item.title}</p>
                  </div>
                  <p className='font-inter text-[#555555] text-sm leading-6'>{item.content}</p>
                </div>
              </div>
            ))
          }

        </div>
      </section>

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

export default Sdg