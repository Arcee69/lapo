import React from 'react'
import { IoChevronForward } from 'react-icons/io5'

import Lock from "../assets/svg/lock.svg"

const BigBox = ({ title, subtitle, heading }) => {
  return (
    <div className='w-[584.89px] h-[500.46px] drop-shadow cursor-pointer group bg-[#fff] hover:border-0 border border-[#4380BE52] group hover:bg-[#00984C] rounded-[15px] gap-[212px] flex flex-col px-4 py-[19px] '>
        <div className='flex items-center justify-between'>
            <div className='w-auto h-[40px] flex items-center p-2 bg-[#F7F9FC]  group-hover:bg-[#00984C] justify-center rounded-[8px]'>
                <p className='text-xs font-hanken group-hover:text-[#fff] text-[#00984C] leading-[15px]'>{heading}</p>
            </div>
            <img src={Lock} alt="Lock" className='' />
        </div>
        <div className='flex flex-col '>
            <p 
                className='text-[#00984C] group-hover:text-[#fff] font-medium text-[40px] leading-[60px]'
                dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className='font-inter text-[#445D65] group-hover:text-[#FFFFFF] text-[20px] leading-[30px]'>
                {subtitle}
            </p>
            <div className='bg-[#FFFFFF] flex items-center gap-1 w-[127px] rounded h-[37px] py-2 group-hover:px-4'> {/* #FF5F08 */}
                <p className='text-[#FF5F08] font-inter whitespace-nowrap text-sm'>Learn More</p>
                <IoChevronForward className='text-[#FF5F08] w-5 h-5' /> 
            </div>
        </div>
    </div>
  )
}

export default BigBox