import React from 'react'
import { IoChevronForward } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

import Lock from "../assets/svg/lock.svg"

const SmallBox = ({ title, subtitle, heading, link }) => {

    const navigate = useNavigate()

  return (
    <div className='w-[284.89px] h-[286.09px] drop-shadow cursor-pointer group bg-[#fff] border-[3px] border-[#4380BE52] hover:border-0 group hover:bg-[#00984C] rounded-[15px] gap-[51px] flex flex-col p-2 '>
        <div className='flex items-center justify-between'>
            <div className='w-fit h-[32px] flex items-center p-2 bg-[#F7F9FC]  group-hover:bg-[#00984C] justify-center rounded'>
                <p className='text-xs font-hanken group-hover:text-[#fff] text-[#00984C] leading-[15px]'>{heading}</p>
            </div>
            <img src={Lock} alt="Lock" className='' />
        </div>
        <div className='flex flex-col '>
            <p 
                className='text-[#00984C] group-hover:text-[#fff] font-medium text-[20px] leading-[30px]'
                dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className='font-inter text-[#445D65] group-hover:text-[#FFFFFF] text-xs leading-[18px]'>
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