import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import { useNavigate } from 'react-router-dom'


const MobileNavBar = ({ handleClose }) => {
    const [openProductDropdown, setOpenProductDropdown] = useState(false);
    const [openPersonalDropdown, setOpenPersonalDropdown] = useState(false);
    const [openSmeDropdown, setOpenSmeDropdown] = useState(false);
    const [openMediaDropdown, setOpenMediaDropdown] = useState(false);
    const [openBlogDropdown, setOpenBlogDropdown] = useState(false);
    const [openPrivateDropdown, setOpenPrivateDropdown] = useState(false);
    const [openResourcesDropdown, setOpenResourcesDropdown] = useState(false);
    
    const navigate = useNavigate()

    const handleProduct = () => {
      setOpenProductDropdown(!openProductDropdown)
    }

    const handlePersonal = () => {
      setOpenPersonalDropdown(!openPersonalDropdown)
    }

    const handleSme = () => {
      setOpenSmeDropdown(!openSmeDropdown)
    }

    const handleMedia = () => {
      setOpenMediaDropdown(!openMediaDropdown)
    }

    const handleBlog = () => {
      setOpenBlogDropdown(!openBlogDropdown)
    }

    const handlePrivate = () => {
      setOpenPrivateDropdown(!openPrivateDropdown)
    }

    const handleResources = () => {
      setOpenResourcesDropdown(!openResourcesDropdown)
    }



  return (
    <div 
      className="fixed top-14 bg-[#FFF] w-[100%] left-0 h-[100vh] animate__animated  animate__bounceInDown animate__slow" 
      style={{zIndex: 9999}}
    >
       <div className="px-5 py-[32px] flex flex-col gap-[36px]">
          <p className="font-medium font-hanken text-[#334E69] text-base uppercase cursor-pointer" onClick={() => {navigate("/"); window.scrollTo(0,0); handleClose()}}>Home</p>
          <div className="flex flex-col gap-4">
            <p onClick={() => {navigate("/about"); window.scrollTo(0,0); handleClose()}} className="font-medium font-hanken cursor-pointer text-[#334E69] text-base uppercase">About Us</p>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between" onClick={handleProduct}>
              <p className="font-medium font-hanken text-[#334E69] text-base uppercase">PRODUCTS</p>
              {openProductDropdown ? <IoIosArrowUp className='text-[#141B34] text-[24px]'/> : <IoIosArrowDown className='text-[#141B34] text-[24px]' />}
            </div>
            {
              openProductDropdown && (
                <div className='flex flex-col gap-3 mt-3'>
                      <p onClick={() => {navigate("/products/savings"); window.scrollTo(0,0); handleClose()}} className="font-hanken font-[350] text-[#334E69] text-base uppercase">Savings</p>
                      <p onClick={() => {navigate("/products"); window.scrollTo(0,0); handleClose()}} className="font-hanken font-[350] text-[#334E69] text-base uppercase">Loans</p>
                      <p onClick={() => {navigate("/digital"); window.scrollTo(0,0); handleClose()}} className="font-hanken font-[350] text-[#334E69] text-base uppercase">Digital Banking</p>
                      <p onClick={() => {navigate("/pos"); window.scrollTo(0,0); handleClose()}} className="font-hanken font-[350] text-[#334E69] text-base uppercase">PoS Terminal</p>
                </div>
              )
            }
          </div>
          <div className="flex flex-col gap-4">
            <p onClick={() => {navigate("/sustainability"); window.scrollTo(0,0); handleClose()}} className="font-medium font-hanken cursor-pointer text-[#334E69] text-base uppercase">Sustainability</p>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between" onClick={handleMedia}>
              <p className="font-medium font-hanken text-[#334E69] text-base uppercase">Media</p>
              {openMediaDropdown ? <IoIosArrowUp className='text-[#141B34] text-[24px]'/> : <IoIosArrowDown className='text-[#141B34] text-[24px]' />}
            </div>
            {
              openMediaDropdown && (
                <div className='flex flex-col gap-3 mt-3'>
                    <p onClick={() => {navigate("/gallery/pictures"); window.scrollTo(0,0); handleClose()}} className="font-hanken font-[350] text-[#334E69] text-base uppercase">Pictures</p>
                    <p onClick={() => {navigate("/gallery/videos"); window.scrollTo(0,0); handleClose()}} className="font-hanken font-[350] text-[#334E69] text-base uppercase">Videos</p>
                </div>
              )
            }
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between" onClick={handleBlog}>
              <p className="font-medium font-hanken text-[#334E69] text-base uppercase">Blog</p>
              {openBlogDropdown ? <IoIosArrowUp className='text-[#141B34] text-[24px]'/> : <IoIosArrowDown className='text-[#141B34] text-[24px]' />}
            </div>
            {
              openBlogDropdown && (
                <div className='flex flex-col gap-3 mt-3'>
                    <p onClick={() => {navigate("/articles"); window.scrollTo(0,0); handleClose()}} className="font-hanken font-[350] text-[#334E69] text-base uppercase">Articles</p>
                    <p onClick={() => {navigate("/press-release"); window.scrollTo(0,0); handleClose()}} className="font-hanken font-[350] text-[#334E69] text-base uppercase">Press Release</p>
                </div>
              )
            }
          </div>
          <p onClick={() => {navigate("/contact-us"); window.scrollTo(0,0); handleClose()}} className="font-medium font-hanken text-[#334E69] cursor-pointer text-base uppercase">Contact us</p>
       </div>
    </div>
  )
}

export default MobileNavBar