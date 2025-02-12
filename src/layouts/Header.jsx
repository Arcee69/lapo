import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SlLock } from 'react-icons/sl'
import { CiSearch } from 'react-icons/ci'

import Logo from "../assets/svg/logo.svg" 

import './css/Header.css';

const Header = () => {
  const [showPersonalDropdown, setShowPersonalDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false)

  const navigate = useNavigate()


  const handleMouseEnter = (menu) => {
    if (menu === 'about') {
      setShowAboutDropdown(true);
      setShowPersonalDropdown(false);
    } else if (menu === 'personal') {
      setShowPersonalDropdown(true);
      setShowAboutDropdown(false);
    }
  };
  
  const handleMouseLeave = (menu) => {
    if (menu === 'about') {
      setShowAboutDropdown(false);
    } else if (menu === 'personal') {
      setShowPersonalDropdown(false);
    }
  };



  
//#FFFFFFE5

  return (
    <div className='bg-[#fff] fixed z-50 w-full pl-[32px] h-[80px] pr-[127px] py-5 flex items-center justify-between'>
        <img src={Logo} alt="Logo" className='w-[109px] h-[44px] cursor-pointer' onClick={() => {navigate("/"); window.scrollTo(0, 0)}}/>
        <div className='flex items-center gap-6'>
            <p 
              className='font-nunito font-medium text-base hover:border-[4px] hover:border-x-0 hover:border-t-0 hover:border-[#EC994B] hover:text-[#00954B] hover:font-bold text-[#10281D] cursor-pointer' 
              onClick={() => {navigate("/"); 
              window.scrollTo(0, 0)}}
            >
              Home
            </p>
            <p 
              className='font-nunito font-medium text-base hover:border-[4px] hover:border-x-0 hover:border-t-0 hover:border-[#EC994B] hover:text-[#00954B] hover:font-bold text-[#10281D] cursor-pointer'  
              onClick={() => {navigate("/about"); 
              window.scrollTo(0, 0)}}
            >
              About Us
            </p>
            <p 
              className='font-nunito font-medium text-base hover:border-[4px] hover:border-x-0 hover:border-t-0 hover:border-[#EC994B] hover:text-[#00954B] hover:font-bold text-[#10281D] cursor-pointer' 
              onClick={() => {navigate("/products"); 
              window.scrollTo(0, 0)}}
            >
              Products
            </p>
            <p 
              className='font-nunito font-medium text-base hover:border-[4px] hover:border-x-0 hover:border-t-0 hover:border-[#EC994B] hover:text-[#00954B] hover:font-bold text-[#10281D] cursor-pointer' 
              onClick={() => {navigate("/sustainability"); 
              window.scrollTo(0, 0)}}
            >
              Sustainability
            </p>
            <p 
              className='font-nunito font-medium text-base hover:border-[4px] hover:border-x-0 hover:border-t-0 hover:border-[#EC994B] hover:text-[#00954B] hover:font-bold text-[#10281D] cursor-pointer' 
              onClick={() => {navigate("/media"); 
              window.scrollTo(0, 0)}}
            >
              Media
            </p>
            <p 
              className='font-nunito font-medium text-base hover:border-[4px] hover:border-x-0 hover:border-t-0 hover:border-[#EC994B] hover:text-[#00954B] hover:font-bold text-[#10281D] cursor-pointer'  
              onClick={() => {navigate("/contact-us"); 
              window.scrollTo(0, 0)}}
            >
              Contact Us
            </p>
        </div>
        <div className='flex items-center gap-[15px]'>
          <button
            className='bg-[#E78020] w-[115px] h-[40px] rounded-lg gap-2 group flex items-center justify-center'
            type='button'
            onClick={() => navigate("/")}
          >
            <p
              className='font-medium text-base font-nunito text-[#fff]'
            >
              Join LAPO
            </p>
          </button>

        </div>        
    </div>
  )
}

export default Header