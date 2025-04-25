import React from 'react'
import { MdOutlineClose } from "react-icons/md";

const Profile = ({ handleClose, data }) => {
  return (
    <div className='bg-[#fff] w-[611px] h-[500px] overflow-y-scroll mt-[10px] rounded-lg flex flex-col'>
        <div className='flex items-center justify-end p-6'>
            <MdOutlineClose className="text-[#000] cursor-pointer w-5 h-5" onClick={handleClose}/>
        </div>
        <div className="p-5">
            <div dangerouslySetInnerHTML={{ __html: data.profile }}/>
        </div>
    </div>
  )
}

export default Profile