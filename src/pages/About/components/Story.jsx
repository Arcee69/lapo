import React, { useEffect, useRef, useState } from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5';
import { FaEye } from "react-icons/fa";
import { PiTarget } from "react-icons/pi";

import Box from '../../../components/Box';


import Curve from "../../../assets/png/curve_about.png"

import People from "../../../assets/svg/people.svg"
import Integrity from "../../../assets/svg/integrity.svg"
import Fun from "../../../assets/svg/fun.svg"
import Passion from "../../../assets/svg/passion.svg"
import Teamwork from "../../../assets/svg/teamwork.svg"
import Excellence from "../../../assets/svg/excellence.svg"
import Sustainability from "../../../assets/svg/sustainability.svg"

const Story = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const milestoneRefs = useRef([]);
    
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
        <section
            className='flex flex-col px-5 py-[64px] lg:px-[64px] lg:py-[112px] gap-[80px]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex items-center justify-center gap-6 flex-col'>
                <div className='w-[63px] h-[32px] flex items-center justify-center rounded-lg bg-[#E8FFF4]'>
                <p className='font-hanken text-xs leading-[15px] text-[#00954B]'>History</p>
                </div>
                <p className='font-hanken text-[#000000] text-[28px] lg:text-[54px] leading-[120%] lg:leading-[64px]'>
                  30 Years of Transformation: Our Journey of Impact and Growth
                </p>
                <p className='text-[#444444] font-inter leading-[150%] lg:leading-[27px] text-base lg:text-[18px]'>
                  For over three decades, LAPO Microfinance Bank has empowered communities through financial inclusion. 
                  Founded by the Lift Above Poverty Organization (LAPO) in response to economic challenges, 
                  we have grown into a trusted institution with over 500 branches across 34 states and the FCT.
                </p>
                <p className='text-[#444444] font-inter leading-[27px] text-[18px]'>
                  We provide tailored financial solutions for micro, small, and medium enterprises (MSMEs) and 
                  low-income households, driving growth and economic resilience. Committed to sustainable development, 
                  we continue to bridge financial gaps and create opportunities nationwide.
                </p>
            </div>
            <img 
              src="https://res.cloudinary.com/dairsbzlv/image/upload/v1744807795/group_nut42n.png" 
              className='' 
              alt='Group' 
            />
      </section>

      <section
        className='bg-[#FAFBFB] py-[112px] px-5 lg:px-[64px] gap-[48px] flex flex-col items-center justify-center'
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        <div className='w-[138px] flex items-center justify-center p-2 bg-[#E8FFF4] rounded-[6px]'>
          <p className='font-hanken text-xs leading-[15px]'>The LAPO Philosophy</p>
        </div>
        <div className='lg:w-[636px] mx-auto flex items-center justify-center'>
          <p className='font-hanken text-[28px] lg:text-[54px] leading-[120%] lg:leading-[64px] text-center text-[#000]'>Pioneering Nigeria’s Financial Future</p>
        </div>

          {/* Vision & Mission Cards */}
        <div className="flex flex-col lg:flex-row items-center gap-6 w-full lg:max-w-[1200px]">
          {/* Vision Card */}
          <div className="bg-[#4380BE] rounded-[25px] w-full lg:w-1/2 p-8 relative shadow-lg flex flex-col justify-between min-h-[250px]">
            {/* Icon & Title */}
            <div className="flex items-center gap-3 text-white text-[30px] font-semibold">
              <FaEye size={32} strokeWidth={2.5} />
              Vision
            </div>

            {/* Text */}
            <p className="text-white font-inter text-[20px] font-bold leading-[30px]">
              The first choice financial institution committed to improving lives.
            </p>

            {/* Fold Effect */}
            <img
              src={Curve}
              alt="Fold Effect"
              className="absolute top-0 right-0 w-[50px] h-[50px]"
            />
          </div>

          {/* Mission Card */}
          <div className="bg-[#941D58] rounded-[25px] w-full lg:w-1/2 p-8 relative shadow-lg flex flex-col justify-between min-h-[250px]">
            {/* Icon & Title */}
            <div className="flex items-center gap-3 text-white text-[30px] font-semibold">
              <PiTarget size={32} strokeWidth={2.5} />
              Mission
            </div>

            {/* Text */}
            <p className="text-white font-inter text-[20px] font-bold leading-[30px]">
              Providing Value-Driven and Accessible Financial Services Through Innovation
            </p>

            {/* Fold Effect */}
            <img
              src={Curve}
              alt="Fold Effect"
              className="absolute top-0 right-0 w-[50px] h-[50px]"
            />
          </div>
        </div>

      </section>

      <section
        className='flex flex-col items-center justify-center bg-[#fff] px-[72px] py-[112px] gap-[48px]'
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <p className='text-[#000000] font-hanken text-[32px] lg:text-[48px] leading-[120%] lg:leading-[57px]'>Core Values</p>
        <div className='flex flex-col items-center gap-[55px] '>
          <div className='flex flex-col lg:flex-row items-start gap-10 lg:gap-0 lg:justify-center lg:pl-14'>

            <Box 
              className="w-[324px] h-[210px] border border-[#F99650] border-dashed border-t lg:border-t-0 border-b-0 border-r lg:border-r-0 rounded-[9px] p-5"
              img={People}
              alt="People"
              title="People First"
              content="Our customers, employees, and communities are at the heart of everything we do. "
            /> 

            <Box 
              className="w-[324px] h-[210px] border border-[#F99650] border-dashed border-t-0 border-b-0 border-r lg:border-r-0 rounded-[9px] p-5"
              img={Integrity}
              alt="Integrity"
              title="Integrity"
              content=" We believe in doing the right thing—always. Transparency, honesty, and strong ethical standards guide every decision and interaction."
            />

            <Box 
              className="w-[324px] h-[210px] border border-[#F99650] border-dashed border-t-0 border-b-0 border-r lg:border-r-0 rounded-[9px] p-5"
              img={Sustainability}
              alt="Sustainability"
              title="Commitment to Sustainability"
              content="We are devoted to practices that promote long-term growth and environmental stewardship, ensuring a better future for all. "
            />

            <Box 
              className="w-[324px] h-[210px] border border-[#F99650] border-dashed border-t-0 border-b-0 border-r lg:border-r-0 rounded-[9px] p-5"
              img={Excellence}
              alt="Excellence"
              title="Excellence"
              content="Every product, service, and interaction is an opportunity to exceed expectations."
            />

          </div>

          <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-center lg:px-[234px] items-start'>

            <Box 
              className="w-[324px] h-[210px] border border-[#F99650] border-dashed border-t-0 border-b-0 lg:border-b rounded-[9px] p-5"
              img={Passion}
              alt="Passion"
              title="Passion & Commitment"
              content="We are passionately committed to continuous improvement, driving us to innovate and excel in every endeavor."
            />

            <Box 
              className="w-[324px] h-[210px] border border-[#F99650] border-dashed border-t-0 border-b-0 lg:border-b rounded-[9px] p-5"
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

      

      <section
        className="bg-[#00984C] px-5 lg:px-16 py-28 text-white"
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
            <h2 className="text-[32px] lg:text-[54px] leading-[120%] lg:leading-[64px] font-normal font-hanken mt-4">
              Key Milestones in Our Journey
            </h2>
            <p className="mt-4 font-inter text-base lg:text-[18px] opacity-90">
              Since 1987, we’ve been on a mission to make financial services accessible to all. Along the way, 
              we’ve reached key milestones that reflect our dedication to inclusion, innovation, and impact. 
              Every achievement brings us closer to a future where individuals and businesses have the financial 
              tools they need to succeed. Our journey is far from over, and we’re excited about what’s ahead!
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
                  activeIndex === index ? "opacity-100 blur-0" : "opacity-100 blur-0"         //"opacity-50 blur-sm"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-3 top-4 w-3 h-3 bg-[#C2D280] rounded-full"></div>

                {/* Year */}
                <h3
                  className={`text-[32px] lg:text-[40px] leading-[120%] lg:leading-[48px] font-bold font-hanken ${
                    activeIndex === index ? "text-[#F99650]" : "opacity-50"
                  }`}
                >
                  {milestone.year}
                </h3>

                {/* Title */}
                <h4 className="text-[24px] lg:text-[32px] leading-[130%] lg:leading-[41px] font-hanken text-[#FFFFFF] font-medium mt-4">
                  {milestone.title}
                </h4>

                {/* Description */}
                {milestone.description && (
                  <p className="mt-[32px] text-base lg:text-[18px] font-inter opacity-80">
                    {milestone.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className='flex flex-col lg:flex-row items-center px-5 lg:px-[64px] gap-[80px] lg:gap-0 justify-between py-[112px]'
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        <div className='flex flex-col gap-4 lg:w-[601px]' data-aos="fade-right">
          <p className='font-hanken font-medium text-base leading-[24px]'>Board and Execs</p>
          <p className='font-hanken text-[#000000] text-[32px] lg:text-[54px] leading-[120%] lg:leading-[64px]'>
            Our Commitment to Financial Inclusion
          </p>
          <p className='text-[18px] font-inter text-[#000000] leading-[27px]'>
            At LAPO Microfinance Bank, we are committed to breaking financial barriers and empowering individuals, 
            small businesses, and underserved communities with accessible credit, savings, and financial literacy 
            programs, because when financial inclusion thrives, communities prosper.

          </p>
          {/* <div className='flex items-center gap-6'>
            <button
              className='bg-[#E78020] flex flex-col items-center justify-center w-[120px] h-[48px] rounded-[10px]'
            >
              <p className='font-hanken text-[#fff] text-base font-semibold'>Learn</p>
            </button>
            <button
              className='border-[#E78020] border flex flex-col items-center justify-center w-[120px] h-[48px] rounded-[10px]'
            >
              <p className='font-hanken text-[#E78020] text-base font-semibold'>Explore</p>
            </button>
          </div> */}
        </div>
        <div data-aos="fade-left">
          <img 
            src="https://res.cloudinary.com/dairsbzlv/image/upload/v1744807813/groupies_oaj4gv.png" 
            alt='Groupies' 
            className='rounded-[25px] lg:w-[531px] cursor-pointer transition-transform duration-300 ease-in-out transform ' />
        </div>
      </section>

    </div>
  )
}

export default Story