import React from 'react'

import Left from "../assets/svg/left_loans_spiral.svg"
import Right from "../assets/svg/right_loans_spiral.svg"
import Stars from "../assets/svg/stars.svg"

const SubSavingsHeader = ({title, subtitle }) => {

  return (
    <section 
        className='bg-[#00984C] h-[545px] relative overflow-hidden'
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
    >
        <div className='flex items-center justify-between absolute -bottom-32 z-10 -inset-x-14'>
            <img src={Right} alt='Right' className='' />
            <img src={Left} alt='Left' className='' />
        </div>
    
        <div className='flex flex-col items-center pt-[200px]'>
            <div className='flex flex-col items-center gap-4 w-[688px] mx-auto'>
                <div className='w-[96px] h-[28px] rounded-full gap-1 flex items-center justify-center bg-[#FDF2E9]'>
                    <img src={Stars} alt='Stars' className='w-[13px] h-[13px]' />
                    <p className='text-xs font-hanken text-[#E78020]'>Savings</p>
                </div>
                <div className='flex flex-col items-center gap-6'>
                    <p className='font-hanken text-[56px] text-center whitespace-nowrap font-medium text-[#FFFFFF] leading-[56px]'>
                        {title}
                    </p>
                    <p className='font-inter text-[14px] leading-[21px] text-[#FFFFFF] text-center'>
                        {subtitle}
                    </p>
                </div>
                <div className='flex items-center gap-[17px]'>
                    <button
                        className='w-[180px] h-[56px] flex items-center justify-center bg-[#fff] rounded-lg'
                    >
                        <p className='text-[#F99650] font-hanken font-medium text-base leading-7'>Get Started</p>
                    </button>
                    <button
                        className='w-[182px] h-[56px] flex items-center justify-center border border-[#fff] rounded-lg'
                    >
                        <p className='text-[#fff] font-medium text-base leading-7'>Learn More</p>
                    </button>

                </div>
            </div>
        </div>
    
    </section>
  )
}

export default SubSavingsHeader