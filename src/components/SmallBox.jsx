import React from 'react'
import { IoChevronForward } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

import Lock from "../assets/svg/lock.svg"
import LockLoan from "../assets/svg/lock_loan.svg"

const SmallBox = ({ title, subtitle, heading, link, location }) => {

    const navigate = useNavigate()

  return (
    <div className={`${location === "loans" ? "border-[#BE438029] hover:bg-[#941D58]" : "border-[#4380BE52]  hover:bg-[#00984C]"} w-full h-auto lg:w-[284.89px] lg:h-[286.09px] drop-shadow cursor-pointer bg-[#fff] border-[3px] group rounded-[15px] gap-[51px] flex flex-col p-2 hover:border-0 `}>
        <div className='flex items-center justify-between'>
            <div className={`${location === "loans" ? "bg-[#C65B900D] group-hover:bg-[#941D58]" : "bg-[#F7F9FC] group-hover:bg-[#00984C] "} w-fit h-[32px] flex items-center p-2 justify-center rounded`}>
                <p className={`${location === "loans" ? "text-[#941D58]" : "text-[#00984C]"} text-xs font-hanken group-hover:text-[#fff] leading-[15px]`}>{heading}</p>
            </div>
            <img src={location === "loans" ? LockLoan : Lock} alt="Lock" className='' />
        </div>
        <div className='flex flex-col '>
            <p 
                className={`${location === "loans" ? "text-[#941D58]" : "text-[#00984C]"} font-hanken group-hover:text-[#fff] font-medium leading-[100%] text-[20px] lg:leading-[30px]`}
                dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className='font-inter text-[#445D65] group-hover:text-[#FFFFFF] text-sm leading-[150%] lg:text-xs lg:leading-[18px]'>
               {subtitle}
            </p>
            <div onClick={() => {navigate(link), window.scrollTo(0, 0)}} className='bg-[#FFFFFF] flex items-center cursor-pointer gap-1 w-[127px] rounded h-[37px] py-2 group-hover:px-4'> {/* #FF5F08 */}
                <p className='text-[#FF5F08] font-inter whitespace-nowrap text-sm'>Learn More</p>
                <IoChevronForward className='text-[#FF5F08] w-5 h-5' /> 
            </div>
        </div>
    </div>
  )
}

export default SmallBox