import React, { useState, useEffect, useRef } from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";

import AboutA from "../../assets/png/about_a.png"
import AboutB from "../../assets/png/about_b.png"
import AboutC from "../../assets/png/about_c.png"
import Building from "../../assets/png/group.png"
import Curve from "../../assets/png/curve_about.png"
import Groupies from "../../assets/png/groupies.png"

import Box from '../../components/Box'

import Left from "../../assets/svg/left_about_spiral.svg"
import Right from "../../assets/svg/right_about_spiral.svg"
import People from "../../assets/svg/people.svg"
import Integrity from "../../assets/svg/integrity.svg"
import Fun from "../../assets/svg/fun.svg"
import Passion from "../../assets/svg/passion.svg"
import Teamwork from "../../assets/svg/teamwork.svg"
import Excellence from "../../assets/svg/excellence.svg"
import Sustainability from "../../assets/svg/sustainability.svg"

const About = () => {
  const [activeTab, setActiveTab] = useState(1)
  const [activeIndex, setActiveIndex] = useState(0);
  const milestoneRefs = useRef([]);


  const changeActiveTab = (value) => {
    setActiveTab(value)
  }

  const milestones = [
    {
      year: "1987",
      title: "First Branch Opened",
      description:
        "The Lift Above Poverty Organization (LAPO) started as a non-profit entity at Ogwashi-Uku in present-day Delta State, Nigeria.",
    },
    {
      year: "1991",
      title: "Ford Grant",
      description:
        "Ford Foundation gave the first ever grant to the Lift Above Poverty Organization (LAPO).",
    },
    {
      year: "1993",
      title: "CAC Incorporation",
      description:
        "The Lift Above Poverty Organization (LAPO) scaled up as a sustainable and effective lending institution drawing inspiration from the best practice model of Grameen and ASA methodology in Bangladesh.",
    },
    {
      year: "2004",
      title: "Scaling as a Sustainable Institution",
      description: "",
    },
  ];

  useEffect(() => {
    // Ensure the refs array matches the number of milestones
    milestoneRefs.current = milestoneRefs.current.slice(0, milestones.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the milestone index from a custom data attribute
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 } // Adjust this value to set when a milestone is "active"
    );

    milestoneRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup on unmount
    return () => {
      milestoneRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className='w-full'>

          {/* Hero */}
      <section
        className="w-full bg-[#00984C] h-[745px] relative"
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        <div className='flex items-center justify-between absolute bottom-0 z-10 -inset-x-10'>
          <img src={Left} alt='Left' className='' />
          <img src={Right} alt='Right' className='' />
        </div>

        <div className='flex flex-col items-center pt-[112px]'>
            <div className='flex flex-col items-center gap-4 w-[768px] mx-auto'>
              <div className='w-[71px] h-[32px] rounded-[6px] flex items-center justify-center bg-[#FDF2E9]'>
                <p className='bg-[#FDF2E9] text-xs text-[#E78020]'>About us</p>
              </div>
              <div className='flex flex-col gap-6'>
                <p className='font-hanken text-[54px] font-medium text-[#FFFFFF] leading-[64px]'>Transforming Financial Futures</p>
                <p className='font-inter text-[18px] leading-[27px] text-[#FFFFFF] text-center'>
                  LAPO Microfinance Bank has been empowering communities through 
                  financial inclusion since its inception in 1987.
                </p>
              </div>
            </div>
        </div>

        <div className='flex items-end gap-[21px] absolute bottom-0 left-[64px] '>
          <img src={AboutA} alt='AboutA' className='w-4/12  h-[313px] z-20' />
          <img src={AboutB} alt='AboutB' className='w-4/12  h-[313px] z-20' />
          <img src={AboutC} alt='AboutC' className='w-4/12  h-[313px] z-20' />
        </div>

      </section>

      <section
        className='bg-[#FAFBFB] flex items-center justify-center gap-4 py-8'
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        <div onClick={() => changeActiveTab(1)} className={`${activeTab === 1 ? "bg-[#00984C]" : "bg-[#98B3A226] "} w-[168px] h-[48px] flex items-center justify-center rounded-lg p-2 cursor-pointer`}>
          <p className={`${activeTab === 1 ? "text-[#fff]" : "text-[#00984C]"} font-inter leading-6 text-base`}>The LAPO story</p>
        </div>
        <div onClick={() => changeActiveTab(2)} className={`${activeTab === 2 ? "bg-[#00984C]" : "bg-[#98B3A226] "} w-[221px] h-[48px] flex items-center justify-center rounded-lg p-2 cursor-pointer`}>
          <p className={`${activeTab === 2 ? "text-[#fff]" : "text-[#00984C]"} font-inter leading-6 text-base`}>LAPO's Changemakers</p>
        </div>
        <div onClick={() => changeActiveTab(3)} className={`${activeTab === 3 ? "bg-[#00984C]" : "bg-[#98B3A226] "} w-[221px] h-[48px] flex items-center justify-center rounded-lg p-2 cursor-pointer`}>
          <p className={`${activeTab === 3 ? "text-[#fff]" : "text-[#00984C]"} font-inter leading-6 text-base`}>Corporate Governance</p>
        </div>
        <div onClick={() => changeActiveTab(4)} className={`${activeTab === 4 ? "bg-[#00984C]" : "bg-[#98B3A226]"} w-[104px] h-[48px] flex items-center justify-center rounded-lg p-2 cursor-pointer`}>
          <p className={`${activeTab === 4 ? "text-[#fff]" : "text-[#00984C]"} font-inter leading-6 text-base`}>Awards</p>
        </div>
      </section>

      <section
        className='flex flex-col px-[64px] py-[112px] gap-[80px]'
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        <div className='flex items-center justify-center gap-6 flex-col'>
            <div className='w-[63px] h-[32px] flex items-center justify-center rounded-lg bg-[#E8FFF4]'>
              <p className='font-hanken text-xs leading-[15px] text-[#00954B]'>History</p>
            </div>
              <p className='font-hanken text-[#000000] text-[54px] leading-[64px]'>
                Celebrating 30 Years of Empowering Communities
              </p>
            <p className='text-[#444444] font-inter leading-[27px] text-[18px]'>
              LAPO Microfinance Bank is an off-shoot of the Lift Above Poverty (LAPO) Organization, 
              a poverty-focused Non-Governmental Organization. It was initiated in the late 1980s in 
              response to the fall out of the implementation of the Structural Adjustment Program (SAP).
            </p>
            <p className='text-[#444444] font-inter leading-[27px] text-[18px]'>
              The Organization was incorporated in April 2007 and licensed to operate as a regulated State 
              Microfinance Bank by the Central Bank of Nigeria (CBN) in 2010. It became a National Microfinance 
              Bank in 2012.
              LAPO Microfinance Bank is an institution that provides a range of financial products and solutions 
              to assist micro, small and medium enterprises, and members of low-income households in 34 of the 36 
              states in Nigeria, including the Federal Capital Territory, Abuja and boasts of a broad network of 
              over 500 branches.
            </p>
        </div>
        <img src={Building} className='' alt='Building' />
      </section>

      <section
        className='bg-[#FAFBFB] py-[112px] px-[64px] gap-[48px] flex flex-col items-center justify-center'
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        <div className='w-[138px] flex items-center justify-center p-2 bg-[#E8FFF4] rounded-[6px]'>
          <p className='font-hanken text-xs leading-[15px]'>The LAPO Philosophy</p>
        </div>
        <div className='w-[636px] mx-auto  flex items-center justify-center'>
          <p className='font-hanken text-[54px] leading-[64px] text-center text-[#000]'>Pioneering Nigeria’s Financial Future</p>
        </div>
        <div className='flex items-center gap-4'>
          <div className='bg-[#4380BECC] rounded-[25px] w-6/12 flex flex-col relative gap-[212px] p-6'>
              <p className='text-[#EEEEEE] text-[54px] leading-[64px]'>Vision</p>
              <div className='flex flex-col gap-3'>
                <p className='font-inter font-bold text-[24px] leading-[29px] text-[#EEEEEE]'>
                  The first choice financial institution committed to improving lives.
                </p>
                <p className='text-[#EEEEEE] text-base leading-6'>
                  At LAPO, our vision is to be the go-to financial institution—one that isn’t just about banking, 
                  but about transforming lives. We aim to empower our communities and create lasting change, 
                  making us the first choice for those seeking trust, innovation, and excellence in financial services.
                </p>
              </div>
              <img src={Curve} alt='Curve' className='absolute top-0 right-0 w-[77px] h-[48px]' />
          </div>
          <div className='bg-[#941D58CC] rounded-[25px] w-6/12 flex flex-col relative gap-[212px] p-6'>
              <p className='text-[#EEEEEE] text-[54px] leading-[64px]'>Mission</p>
              <div className='flex flex-col gap-3'>
                <p className='font-inter font-bold text-[24px] leading-[29px] text-[#EEEEEE]'>
                  Providing Value-Driven and Accessible Financial Services Through Innovation
                </p>
                <p className='text-[#EEEEEE] text-base leading-6'>
                  At LAPO, our vision is to be the go-to financial institution—one that isn’t just about banking, 
                  but about transforming lives. We aim to empower our communities and create lasting change, 
                  making us the first choice for those seeking trust, innovation, and excellence in financial services..
                </p>
              </div>
              <img src={Curve} alt='Curve' className='absolute top-0 right-0 w-[77px] h-[48px]' />
          </div>
        </div>
      </section>

      <section
        className='flex flex-col items-center justify-center bg-[#fff] px-[72px] py-[112px] gap-[48px]'
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <p className='text-[#000000] font-hanken text-[48px] leading-[57px]'>Core Values</p>
        <div className='flex flex-col items-center gap-[55px] '>
          <div className='flex items-start justify-center'>

            <Box 
              className="w-[324px] h-[210px] border border-[#F99650] border-dashed border-t-0 border-b-0 border-r-0 p-5"
              img={People}
              alt="People"
              title="People First"
              content="Our customers, employees, and communities are at the heart of everything we do. "
            /> 

            <Box 
              className="w-[324px] h-[210px] border border-[#F99650] border-dashed border-t-0 border-b-0 border-r-0 p-5"
              img={Integrity}
              alt="Integrity"
              title="Integrity"
              content=" We believe in doing the right thing—always. Transparency, honesty, and strong ethical standards guide every decision and interaction."
            />

            <Box 
              className="w-[324px] h-[210px] border border-[#F99650] border-dashed border-t-0 border-b-0 border-r-0 p-5"
              img={Sustainability}
              alt="Sustainability"
              title="Commitment to Sustainability"
              content="We are devoted to practices that promote long-term growth and environmental stewardship, ensuring a better future for all. "
            />

            <Box 
              className="w-[324px] h-[210px] border border-[#F99650] border-dashed border-t-0 border-b-0 border-r-0 p-5"
              img={Excellence}
              alt="Excellence"
              title="Excellence"
              content="Every product, service, and interaction is an opportunity to exceed expectations."
            />

          </div>

          <div className='flex justify-center px-[234px] items-start'>

            <Box 
              className="w-[324px] h-[210px] border border-[#F99650] border-dashed border-t-0 rounded-[9px] p-5"
              img={Passion}
              alt="Passion"
              title="Passion & Commitment"
              content="We are passionately committed to continuous improvement, driving us to innovate and excel in every endeavor."
            />

            <Box 
              className="w-[324px] h-[210px] border border-[#F99650] border-dashed border-t-0 rounded-[9px] p-5"
              img={Teamwork}
              alt="Teamwork"
              title="Enterprise & Teamwork"
              content="By fostering a collaborative culture, we harness the power of collective expertise to drive our organization forward."
            />

            <Box 
              className="w-[324px] h-[210px] border border-[#F99650] border-dashed border-t-0 rounded-[9px] p-5"
              img={Fun}
              alt="Fun"
              title="Fun & Excitement"
              content="A vibrant and engaging environment is key to sparking innovation and ensuring that every milestone is a shared victory."
            />

          </div>

        </div>
      </section>

      {/* <section 
        className="bg-[#00984C] px-16 py-28 text-white"
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
      
          <div className="md:w-1/2">
            <span className="bg-[#E8FFF4] text-[#00954B] w-[82px] h-[32px] font-hanken px-3 py-1 rounded-[6px] text-sm">
              Milestones
            </span>
            <h2 className="text-[54px] leading-[64px] font-normal font-hanken mt-4">
              Key Milestones in Our Journey
            </h2>
            <p className="mt-4 font-inter text-[18px] opacity-90">
              Since our inception in 1987, we have achieved significant
              milestones. Each step has reinforced our commitment to financial
              inclusion and innovation.
            </p>
          </div>

          {/* Right Timeline 
          <div className="md:w-1/2 relative">
            {/* Vertical Line 
            <div className="absolute left-4 top-0 h-full w-1 bg-[#C2D280] rounded-lg"></div>

            {/* Timeline Items 
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-12 mb-8 ">
                {/* Dot 
                <div className="absolute left-3 top-4 w-3 h-3 bg-[#C2D280] rounded-full"></div>

                {/* Year 
                <h3 className={`text-[40px] leading-[48px] font-bold font-hanken ${
                  index === milestones.length - 1 ? "opacity-50" : "text-[#F99650]"
                }`}>
                  {milestone.year}
                </h3>

                {/* Title 
                <h4 className="text-[32px] leading-[41px] font-hanken text-[#FFFFFF] font-medium mt-4">{milestone.title}</h4>

                {/* Description 
                {milestone.description && (
                  <p className="mt-[32px] text-[18px] font-inter opacity-80">{milestone.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

<section
      className="bg-[#00984C] px-16 py-28 text-white"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="linear"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Section */}
        <div className="md:w-1/2">
          <span className="bg-[#E8FFF4] text-[#00954B] w-[82px] h-[32px] font-hanken px-3 py-1 rounded-[6px] text-sm">
            Milestones
          </span>
          <h2 className="text-[54px] leading-[64px] font-normal font-hanken mt-4">
            Key Milestones in Our Journey
          </h2>
          <p className="mt-4 font-inter text-[18px] opacity-90">
            Since our inception in 1987, we have achieved significant milestones.
            Each step has reinforced our commitment to financial inclusion and innovation.
          </p>
        </div>

        {/* Right Timeline */}
        <div className="md:w-1/2 relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-1 bg-[#C2D280] rounded-lg"></div>

          {/* Timeline Items */}
          {milestones.map((milestone, index) => (
            <div
              key={index}
              ref={(el) => (milestoneRefs.current[index] = el)}
              data-index={index}
              className={`relative pl-12 mb-8 transition duration-300 ${
                activeIndex === index ? "opacity-100 blur-0" : "opacity-50 blur-sm"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-3 top-4 w-3 h-3 bg-[#C2D280] rounded-full"></div>

              {/* Year */}
              <h3
                className={`text-[40px] leading-[48px] font-bold font-hanken ${
                  activeIndex === index ? "text-[#F99650]" : "opacity-50"
                }`}
              >
                {milestone.year}
              </h3>

              {/* Title */}
              <h4 className="text-[32px] leading-[41px] font-hanken text-[#FFFFFF] font-medium mt-4">
                {milestone.title}
              </h4>

              {/* Description */}
              {milestone.description && (
                <p className="mt-[32px] text-[18px] font-inter opacity-80">
                  {milestone.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

      <section
        className='flex items-center px-[64px] justify-between py-[112px]'
      >
        <div className='flex flex-col gap-4 w-[601px]' data-aos="fade-right">
          <p className='font-hanken font-medium text-base leading-[24px]'>The Changemakers</p>
          <p className='font-hanken text-[#000000] text-[54px] leading-[64px]'>
            Our Commitment to Financial Inclusion
          </p>
          <p className='text-[18px] font-inter text-[#000000] leading-[27px]'>
            At LAPO Microfinance Bank, we believe that everyone deserves access to financial services. 
            Our philosophy centers on empowering individuals and communities through inclusive financial solutions.
          </p>
          <div className='flex items-center gap-6'>
            <div className='w-[91px] h-[48px] border border-[#000000] flex items-center justify-center'>
              <p className='font-inter text-[#000000] text-base leading-6'>Learn</p>
            </div>
            <div className='flex items-center gap-2'>
              <p className="font-inter text-base text-[#000000]" >Explore</p>
              <IoChevronForwardOutline />
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <img src={Groupies} alt='Groupies' className='rounded-[25px] w-[631px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110' />
        </div>
      </section>


    </div>
  )
}

export default About