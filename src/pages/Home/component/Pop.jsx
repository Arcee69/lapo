import React from 'react'
import { MdOutlineClose } from "react-icons/md";

const Pop = ({ handleClose, popMedia }) => {
  return (
    <div className='bg-[#fff] w-[611px] h-[450px] overflow-y-scroll scrollbar-hide mt-[30px] rounded-lg flex flex-col'>
        <div className='flex items-center cursor-pointer justify-end p-6'>
            <MdOutlineClose className="text-[#000] w-5 h-5" onClick={handleClose}/>
        </div>

        <div className="flex flex-col p-2 gap-5">
            <img src={popMedia?.media} alt="item-image" className="w-full h-[250px]" />
            <p className="font-medium font-hanken text-[32px]  text-[#000]">{popMedia?.title}</p>
        </div>

    </div>
  )
}

export default Pop