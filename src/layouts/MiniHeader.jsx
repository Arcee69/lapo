import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'

import Logo from "../assets/svg/logo.svg" 
import Menu from "../assets/svg/menu.svg" 
import Close from "../assets/svg/close.svg" 

import MobileNavBar from './MobileNavBar'



const MiniHeader = () => {
  const [open, setOpen] = useState(false)


  const navigate = useNavigate()
   

  return (
    <div className='w-full fixed z-30'>
        <div className='w-[100%] h-[58px] bg-[#fff] py-[16px] px-[20px] flex justify-between items-center'>
            <img src={Logo} alt='logo' className='w-[69px] h-[28px]' onClick={() => navigate("/")}/>
            <div className='flex items-center gap-2 ' >
              <CiSearch className='w-5 h-5 text-[#002244]'/>
              {open ?
                <img src={Close} alt='icon' className='w-4 h-4 cursor-pointer' onClick={() => {setOpen(false); console.log("close")}} />
                :
                <img src={Menu} alt='icon' className='w-[24px] h-[24px] cursor-pointer' onClick={() => setOpen(true)} />
              }
            </div>
     
        </div>
        {open && <MobileNavBar handleClose={() => setOpen(false)} /> }
    </div>
  )
}

export default MiniHeader