import React from 'react'
import { IoChevronForwardSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const LoanBox = ({ img, title, content, link }) => {

    const navigate = useNavigate()

  return (
    <div className='flex h-[462px] flex-col gap-6'>
        <img src={img} alt='Phone' className='' />
        <div className='flex flex-col gap-5'>
            <p className='font-hanken text-[#000000] font-medium text-[24px]'>{title}</p>
            <p className='text-[#000000] text-base leading-6 font-inter'>{content}</p>
            <div className='flex items-center cursor-pointer gap-2 ' onClick={() => navigate(`${link}`)}>
                <p className='text-[#FF5F08] text-base leading-6'>Learn More</p>
                <IoChevronForwardSharp className="w-5 h-5 text-[#FF5F08]" />
            </div>
        </div>
    </div>
  )
}

export default LoanBox