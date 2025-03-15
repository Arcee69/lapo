import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Notes from "../../../assets/svg/notes.svg"


const Brochures = ({ brochuresRef, data, loading }) => {

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
            {/* <p  className="text-[#2E8B57] font-inter cursor-pointer font-medium text-sm">View all Brochures</p> */}
        </div>
        <div className='grid grid-cols-1'>
            {
                loading ? 
                    <p className='text-2xl font-inter text-[#000] text-center font-semibold mt-10'>Loading...</p> :
                data?.length > 0 ?
                data?.map((item) => (
                    <div key={item.id} className='gap-6 p-6 flex flex-col shadow-md'>
                        <div className='items-start gap-4 flex'>
                            <img src={Notes} className='w-[3rem] h-[3rem]' alt='icon' />
                            <div className='flex flex-col gap-2'>
                                <p className='font-medium font-inter text-[18px] leading-[28px] text-[#101828]'>{item.title}</p>
                                <p className='font-inter text-[#6B7280] text-sm leading-5'>{item.desc}</p>
                            </div>
                        </div>
                        <div className='flex items-start justify-between'>
                            <div className='flex items-center gap-2'>
                                <div className='bg-[#FFE8F3] rounded-lg flex items-center justify-center p-1'>
                                    <p className='font-inter font-medium text-[#941D58] text-xs'>{item.file.split('?')[0].split('.').pop().toUpperCase()}</p>
                                </div>
                                {/* <p className='text-xs text-[#6B7280] leading-4'>{item.size}</p> */}
                            </div>

                            <button onClick={() => window.open(item.file, "_blank")} className='bg-[#2E8B57] outline-none rounded p-1 w-[5rem] h-[1.8rem]'>
                                <p className='text-[#fff] text-xs font-inter text-center font-medium'>Download</p>
                            </button>

                        </div>
                    </div>
                )) :
                <p className='text-2xl font-inter text-[#000] text-center font-semibold mt-10'>No Brochures Available</p>
            }

        </div>
    </div>
  )
}

export default Brochures