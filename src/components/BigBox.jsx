import React from 'react'
import { IoChevronForward } from 'react-icons/io5'

import Lock from "../assets/svg/lock.svg"
import LockLoan from "../assets/svg/lock_loan.svg"
import { useNavigate } from 'react-router-dom'

const BigBox = ({ title, subtitle, heading, link, location }) => {

    const navigate = useNavigate()

  return (
    <div className={`${location === "loans" ? "border-[#BE438029] hover:bg-[#941D58]" : "border-[#4380BE52] hover:bg-[#00984C]"} w-full h-auto lg:w-[584.89px] lg:h-[500.46px] drop-shadow cursor-pointer group bg-[#fff] rounded-[15px] gap-[51px] lg:gap-[212px] flex flex-col px-2 lg:px-4 py-[19px] hover:border-0 border`}>
        <div className='flex items-center justify-between'>
            <div className={`${location === "loans" ? "bg-[#C65B900D] group-hover:bg-[#941D58]" : "bg-[#F7F9FC] group-hover:bg-[#00984C]"}  w-auto h-[40px] flex items-center p-2 justify-center rounded-[8px]`}>
                <p className={`${location === "loans" ? "text-[#941D58]" : "text-[#00984C]"} text-xs font-hanken group-hover:text-[#fff]  leading-[15px]`}>{heading}</p>
            </div>
            <img src={location === "loans" ? LockLoan : Lock} alt="Lock" className='' />
        </div>
        <div className='flex flex-col '>
            <p 
                className={`${location === "loans" ? "text-[#941D58]" : "text-[#00984C]"} font-hanken group-hover:text-[#fff] font-medium leading-[100%] text-[20px] lg:text-[40px] lg:leading-[60px]`}
                dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className='font-inter text-[#445D65] group-hover:text-[#FFFFFF] text-sm leading-[150%] lg:text-[20px] lg:leading-[30px]'>
                {subtitle}
            </p>
            <div onClick={() => {navigate(link), window.scrollTo(0,0)}} className='bg-[#FFFFFF] flex items-center gap-1 w-[127px] cursor-pointer rounded h-[37px] py-2 group-hover:px-4'> {/* #FF5F08 */}
                <p className='text-[#FF5F08] font-inter whitespace-nowrap text-sm'>Learn More</p>
                <IoChevronForward className='text-[#FF5F08] w-5 h-5' /> 
            </div>
        </div>
    </div>
  )
}

export default BigBox