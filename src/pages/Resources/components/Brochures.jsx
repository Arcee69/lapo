import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Notes from "../../../assets/svg/notes.svg"


const Brochures = ({ brochuresRef }) => {

    const { state } = useLocation()

    const brochure = [
        {
            icon: Notes,
            title: "Product Brochure 2024",
            content: "Overview of all our financial products and services",
            type: "PDF",
            size: "3.8MB"
        },
    ]

    useEffect(() => {
        if (state?.section === "brochures" && brochuresRef.current) {
            brochuresRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [state])

  return (
    <div className='w-full gap-6 flex flex-col' ref={brochuresRef}>
        <div className="flex justify-between items-center ">
            <h2 className="text-[24px] font-medium font-hanken text-[#0E3622]">Brochures</h2>
            <p  className="text-[#2E8B57] font-inter cursor-pointer font-medium text-sm">View all Brochures</p>
        </div>
        <div className='grid grid-cols-1'>
            {
                brochure.map((item, index) => (
                    <div key={index} className='gap-6 p-6 flex flex-col shadow-md'>
                        <div className='items-start gap-4 flex'>
                            <img src={item.icon} className='w-[3rem] h-[3rem]' alt='icon' />
                            <div className='flex flex-col gap-2'>
                                <p className='font-medium font-inter text-[18px] leading-[28px] text-[#101828]'>{item.title}</p>
                                <p className='font-inter text-[#6B7280] text-sm leading-5'>{item.content}</p>
                            </div>
                        </div>
                        <div className='flex items-start justify-between'>
                            <div className='flex items-center gap-2'>
                                <div className='bg-[#FFE8F3] rounded-lg flex items-center justify-center p-1'>
                                    <p className='font-inter font-medium text-[#941D58] text-xs'>{item.type}</p>
                                </div>
                                <p className='text-xs text-[#6B7280] leading-4'>{item.size}</p>
                            </div>

                            <button className='bg-[#2E8B57] rounded p-1 w-[5rem] h-[1.8rem]'>
                                <p className='text-[#fff] text-xs font-inter font-medium'>Download</p>
                            </button>

                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Brochures