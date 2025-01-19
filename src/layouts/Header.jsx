import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SlLock } from 'react-icons/sl'
import { CiSearch } from 'react-icons/ci'

import Logo from "../assets/svg/logo.svg" 
import Padlock from "../assets/svg/padlock.svg"
import Savings from "../assets/svg/savings.svg"
import Current from "../assets/svg/current.svg"
import Card from "../assets/svg/card.svg"
import Mortgage from "../assets/svg/mortgage.svg"
import Insurance from "../assets/svg/insurance.svg"
import Faq from "../assets/svg/faq.svg"

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



  


  return (
    <div className='bg-[#fff] fixed z-50 w-full px-[46px] py-5 flex items-center justify-between'>
        <img src={Logo} alt="Logo" className='w-[109px] h-[44px] cursor-pointer' onClick={() => {navigate("/"); window.scrollTo(0, 0)}}/>
        <div className='flex items-center gap-[32px]'>
            <p className='font-grava font-medium text-base text-[#002244] cursor-pointer' onClick={() => {navigate("/"); window.scrollTo(0, 0)}}>Home</p>
            <div className="relative inline-block dropdown-wrapper">
              <div 
                onMouseEnter={() => handleMouseEnter('about')}
                className="block font-grava font-medium text-base text-[#002244] cursor-pointer focus:outline-none"
              >
                About Us
              </div> 
              {/* {showAboutDropdown && (
                  <div 
                    className={`dropdown-menu bg-[#fff] transition-all duration-300 ease-in-out shadow-2xl absolute -left-44 rounded-xl mt-0 py-0 w-[566px] ${showAboutDropdown ? 'show' : ''}`} 
                    onMouseLeave={() => handleMouseLeave('about')}
                  >
                      <div className="block flex items-start gap-5 cursor-pointer px-6 py-5 text-BLUE-_200">
                        <div className="flex flex-col  gap-4 w-[237px]">
                          <div className='flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer' onClick={() => {navigate("/about"); window.scrollTo(0, 0)}}>
                            <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                              <img src={Savings} alt='Savings' className="w-6 h-6" />
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className='text-[#002244] text-xs font-medium font-grava'>Our Story</p>
                              <p className='text-[#546B82] text-[10px] font-grava'>Who we are and what we do.</p>
                            </div>
                          </div>

                          <div className='flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer'>
                            <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                              <img src={Current} alt='Current' className="w-6 h-6"/>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className='text-[#002244] text-xs font-medium font-grava'>Mission and Vision</p>
                              <p className='text-[#546B82] text-[10px] font-grava'>Innovation driving our purpose.</p>
                            </div>
                          </div>

                          <div className='flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer'>
                            <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                              <img src={Card} alt='Card' className="w-6 h-6"/>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className='text-[#002244] text-xs font-medium font-grava'>Services</p>
                              <p className='text-[#546B82] text-[10px] font-grava'>Innovative services designed for you.</p>
                            </div>
                          </div>

                          <div className='flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer' onClick={() => {navigate("/teams"); window.scrollTo(0, 0)}}>
                            <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                              <img src={Mortgage} alt='Mortgage' className="w-6 h-6"/>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className='text-[#002244] text-xs font-medium font-grava'>Our Team</p>
                              <p className='text-[#546B82] text-[10px] font-grava'>Meet the people behind our success.</p>
                            </div>
                          </div>

                        </div>
                        <div className="bg-[#E6E9EC] w-[1px] h-[260px]"></div>
                        <div className="flex flex-col gap-4">
                          <div className='flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer'>
                            <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                              <img src={Insurance} alt='Insurance' className="w-6 h-6"/>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className='text-[#002244] text-xs font-medium font-grava'>Careers</p>
                              <p className='text-[#546B82] text-[10px] font-grava'>Explore opportunities to grow with us</p>
                            </div>
                          </div>
                         </div>
                      </div>
                  </div>
              )} */}
            </div>
            <div className="relative inline-block dropdown-wrapper">
              <div 
                onMouseEnter={() => handleMouseEnter('personal')}
                className="block font-grava font-medium text-base text-[#002244] cursor-pointer focus:outline-none"
              >
                Personal 
              </div> 
              {/* {showPersonalDropdown && (
                  <div 
                    className={`dropdown-menu bg-[#fff] transition-all duration-300 ease-in-out shadow-2xl absolute -left-44 rounded-xl mt-1 py-0 w-[566px] ${showPersonalDropdown ? 'show' : ''}`} 
                    onMouseLeave={() => handleMouseLeave('personal')}
                  >
                      <div className="block flex items-start gap-5 cursor-pointer px-6 py-5 text-BLUE-_200">
                        <div className="flex flex-col gap-4 w-[237px]">
                          <div className='flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer' onClick={() => {navigate("/personal"); window.scrollTo(0, 0)}}>
                            <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                              <img src={Savings} alt='Savings' className="w-6 h-6" />
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className='text-[#002244] text-xs font-medium font-grava'>Savings Accounts</p>
                              <p className='text-[#546B82] text-[10px] font-grava whitespace-nowrap'>Flexible options to grow your savings.</p>
                            </div>
                          </div>

                          <div className='flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer'>
                            <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                              <img src={Current} alt='Current' className="w-6 h-6"/>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className='text-[#002244] text-xs font-medium font-grava'>Current Accounts</p>
                              <p className='text-[#546B82] text-[10px] font-grava'>Easy solutions for daily banking.</p>
                            </div>
                          </div>

                          <div className='flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer'>
                            <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                              <img src={Card} alt='Card' className="w-6 h-6"/>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className='text-[#002244] text-xs font-medium font-grava'>Cards ( Debit, Credit, Virtual)</p>
                              <p className='text-[#546B82] text-[10px] font-grava'>Seamless payments anywhere, anytime.</p>
                            </div>
                          </div>

                          <div className='flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer'>
                            <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                              <img src={Mortgage} alt='Mortgage' className="w-6 h-6"/>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className='text-[#002244] text-xs font-medium font-grava'>Loans and Mortgages</p>
                              <p className='text-[#546B82] text-[10px] font-grava'>Tailored financing to achieve your goals.</p>
                            </div>
                          </div>

                        </div>
                        <div className="bg-[#E6E9EC] w-[1px] h-[298px]"></div>
                        <div className="flex flex-col gap-4">
                          <div className='flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer'>
                            <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                              <img src={Insurance} alt='Insurance' className="w-6 h-6"/>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className='text-[#002244] text-xs font-medium font-grava'>Insurance Services</p>
                              <p className='text-[#546B82] text-[10px] font-grava'>Protect what matters most.</p>
                            </div>
                          </div>
                          <div className='flex flex-row gap-2 hover:bg-[#FFCC3314] hover:rounded-lg p-2 cursor-pointer '>
                            <div className="rounded-lg w-[40px] h-[40px] bg-[#FFFAEB] flex items-center justify-center">
                              <img src={Faq} alt='Faq' className="w-5 h-5"/>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className='text-[#002244] text-xs font-medium font-grava'>FAQ</p>
                              <p className='text-[#546B82] text-[10px] font-grava'>Quick answers to your banking questions.</p>
                            </div>
                          </div>
                         </div>
                      </div>
                  </div>
              )} */}
          </div>
  
            <p className='font-grava font-medium text-base text-[#002244] cursor-pointer' onClick={() => {navigate("/sme"); window.scrollTo(0, 0)}}>SME</p>
            <p className='font-grava font-medium text-base text-[#002244] cursor-pointer' onClick={() => {navigate("/corporate"); window.scrollTo(0, 0)}}>Corporate</p>
            <p className='font-grava font-medium text-base text-[#002244] cursor-pointer' onClick={() => {navigate("/private"); window.scrollTo(0, 0)}}>Private</p>
            <p className='font-grava font-medium text-base text-[#002244] cursor-pointer' onClick={() => {navigate("/resources"); window.scrollTo(0, 0)}}>Resources</p>
            <p className='font-grava font-medium text-base text-[#002244] cursor-pointer' onClick={() => {navigate("/help-and-support"); window.scrollTo(0, 0)}}>Help & Support</p>
            <p className='font-grava font-medium text-base text-[#002244] cursor-pointer' onClick={() => {navigate("/contact Us"); window.scrollTo(0, 0)}}>Contact Us</p>
        </div>
        <div className='flex items-center gap-[15px]'>
          <CiSearch className='w-5 h-5 text-[#002244]'/>
          <button
            className='bg-[#FFCC33] w-[195px] h-[54px] rounded-tl-lg rounded-br-lg gap-2 group flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#090540]'
            type='button'
            onClick={() => navigate("/")}
          >
            <SlLock
              className='w-5 h-5 text-[#090540] transition-colors duration-300 ease-in-out group-hover:text-[#FFCC33]'
            />
            <p
              className='font-medium text-base font-grava text-[#090540] transition-colors duration-300 ease-in-out group-hover:text-[#FFCC33]'
            >
              Internet Banking
            </p>
          </button>

        </div>        
    </div>
  )
}

export default Header