import React, { useEffect, useState, useRef } from 'react'
import { FiMessageCircle } from "react-icons/fi";
import { CiLocationOn, CiMail, CiSearch } from 'react-icons/ci'
import { LiaPhoneSolid } from "react-icons/lia";
import { IoIosArrowDown } from 'react-icons/io';
import { useLocation, useNavigate } from "react-router-dom"
import axios from 'axios';
// import { RiWhatsappFill } from 'react-icons/ri';
import { FaWhatsapp  } from "react-icons/fa";

import Curve from "../../assets/png/curve_top_right.png"
import Premium from "../../assets/png/premium.png"
import Whatsapp from "../../assets/png/whatsapp_logo.png"


const Contact = () => {
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [expandedState, setExpandedState] = useState("");
    const [search, setSearch] = useState("");
    const [apiBranches, setApiBranches] = useState([]);
    const [loading, setLoading] = useState(false)
    
    const URL = import.meta.env.VITE_APP_API_URL;

    const { state } = useLocation()
    const navigate = useNavigate()

    const branchRef = useRef(null) 

    useEffect(() => {
        if (state?.section === "branch" && branchRef.current) {
            branchRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, [state]);


    const fetchBranches = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`${URL}/v1/branch`);
            const branchesData = res?.data?.data;
            setApiBranches(branchesData);
            
            if (branchesData?.length > 0) {
                setSelectedBranch(branchesData[0]);
                setExpandedState(branchesData[0]?.state?.name);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchBranches();
    }, []);

    // Filter and group branches
    const filteredBranches = apiBranches?.filter(branch => {
        const searchTerm = search.toLowerCase();
        return (
            branch.state.name.toLowerCase().includes(searchTerm) ||
            branch.lga.name.toLowerCase().includes(searchTerm) ||
            branch.name.toLowerCase().includes(searchTerm)
        );
    });

    const groupedBranches = filteredBranches?.reduce((acc, branch) => {
        const stateName = branch.state.name;
        if (!acc[stateName]) acc[stateName] = [];
        acc[stateName].push(branch);
        return acc;
    }, {});

    useEffect(() => {
        if (filteredBranches?.length > 0) {
            const isSelectedValid = selectedBranch && 
                filteredBranches?.some(b => b.id === selectedBranch.id);
            if (!isSelectedValid) {
                setSelectedBranch(filteredBranches[0]);
                setExpandedState(filteredBranches[0].state.name);
            }
        } else {
            setSelectedBranch(null);
        }
    }, [filteredBranches]);


    

  return (
    <div className='w-full'>
        
        <section
            className='flex flex-col h-[350px] px-5 lg:px-[80px] items-center gap-6 pt-[176px]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex flex-col items-center gap-4 w-[311px] lg:w-[960px] mx-auto'>
                <div className='w-[90px] h-[32px] rounded-[6px] gap-1 flex items-center justify-center bg-[#FDF2E9]'>
                    <p className='text-xs font-hanken text-[#E78020]'>Contact Us</p>
                </div>
                <div className='flex flex-col gap-6'>
                    <p className='font-hanken text-[32px] capitalize leading-[32px] lg:text-[56px] text-center font-medium text-[#101828] lg:leading-[60px]'>
                        We’d love to hear from you
                    </p>
                    <p className='font-inter text-base lg:text-[20px] leading-[30px] text-[#667085] text-center'>
                        Our friendly team is always here to chat.
                    </p>
                </div>  
            </div>
        </section>

        <section 
            className='w-full mt-[96px]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <img 
                src="https://res.cloudinary.com/dairsbzlv/image/upload/v1744711061/lapo_building_b_weohyz.png" 
                className='' 
                alt='Building' 
            />
        </section>

        <section
            className='bg-[#fff] px-5 lg:px-[112px] flex items-center gap-6 pt-[64px] pb-[96px]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='h-[314px] bg-[#00984C] rounded-[10px] overflow-hidden relative p-6'>
                    <img src={Curve} alt="Curve" className='absolute -right-2 w-[77px] h-[66px] -top-1 rounded-tr-[2rem]' />
                    <div className='w-[48px] h-[48px] rounded-[10px] bg-[#00B85C] p-2 flex items-center justify-center'>
                        <CiMail className='w-5 h-5 text-[#fff]' />
                    </div>
                    <div className='flex flex-col gap-5  mt-[64px]'>
                        <div className='flex flex-col gap-2'>
                            <p className='font-inter font-semibold text-[#FFFFFF] text-[20px] leading-[30px]'>Send us an Email</p>
                            <p className='font-inter text-[#FFFFFF] text-base leading-6'>We're here to help</p>
                        </div>
                        <p className='font-inter text-[#FFFFFF] font-medium text-base leading-6'>info@lapo-nigeria.org</p>
                    </div>
                </div>
                <div className='h-[314px] bg-[#00984C] rounded-[10px] overflow-hidden relative p-6'>
                    <img src={Curve} alt="Curve" className='absolute -right-2 w-[77px] h-[66px] -top-1 rounded-tr-[2rem]' />
                    <div className='w-[48px] h-[48px] rounded-[10px] bg-[#00B85C] p-2 flex items-center justify-center'>
                        <FiMessageCircle className='w-5 h-5 text-[#fff]' />
                    </div>
                    <div className='flex flex-col gap-5  mt-[64px]'>
                        <div className='flex flex-col gap-2'>
                            <p className='font-inter font-semibold text-[#FFFFFF] text-[20px] leading-[30px]'>Get Instant response</p>
                            <p className='font-inter text-[#FFFFFF] text-base leading-6'>Speak to our friendly team</p>
                        </div>
                        <p onClick={() => window.open("https://tinyurl.com/lapomfbwhatsapp")} className='font-inter text-[#FFFFFF] font-medium text-base cursor-pointer leading-6'> 
                            <FaWhatsapp  className='w-10 h-10 ' />
                            {/* <img src={Whatsapp} alt="Whatsapp" className='w-10 h-10 ' /> */}
                        </p>
                    </div>
                </div>
                <div className='h-[314px] bg-[#00984C] rounded-[10px] overflow-hidden relative p-6'>
                    <img src={Curve} alt="Curve" className='absolute -right-2 w-[77px] h-[66px] -top-1 rounded-tr-[2rem]' />
                    <div className='w-[48px] h-[48px] rounded-[10px] bg-[#00B85C] p-2 flex items-center justify-center'>
                        <CiLocationOn className='w-5 h-5 text-[#fff]' />
                    </div>
                    <div className='flex flex-col gap-5  mt-[64px]'>
                        <div className='flex flex-col gap-2'>
                            <p className='font-inter font-semibold text-[#FFFFFF] text-[20px] leading-[30px]'>Head Office</p>
                            <p className='font-inter text-[#FFFFFF] text-base leading-6'>Visit our office HQ.</p>
                        </div>
                        <p className='font-inter text-[#FFFFFF] font-medium text-base leading-6'>LAPO PLACE, 15A Ikorodu-Ososun Road, Maryland, Ikeja, Lagos, Nigeria.</p>
                    </div>
                </div>
                <div className='h-[314px] bg-[#00984C] rounded-[10px] overflow-hidden relative p-6'>
                    <img src={Curve} alt="Curve" className='absolute -right-2 w-[77px] h-[66px] -top-1 rounded-tr-[2rem]' />
                    <div className='w-[48px] h-[48px] rounded-[10px] bg-[#00B85C] p-2 flex items-center justify-center'>
                        <LiaPhoneSolid className='w-5 h-5 text-[#fff]' />
                    </div>
                    <div className='flex flex-col gap-5  mt-[64px]'>
                        <div className='flex flex-col gap-2'>
                            <p className='font-inter font-semibold text-[#FFFFFF] text-[20px] leading-[30px]'>Call us</p>
                            <p className='font-inter text-[#FFFFFF] text-base leading-6'>Mon-Fri from 8am to 5pm.</p>
                        </div>
                        <p className='font-inter text-[#FFFFFF] font-medium text-base leading-6'> +2348139840230</p>
                    </div>
                </div>
            </div>
        </section>

        <section
            className='flex items-center lg:pb-[62px] flex-col gap-[27px] lg:gap-[96px] bg-[#fff] '
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
            ref={branchRef}
        >
            <div className='flex flex-col px-5 lg:px-0 items-center lg:gap-4'>
                <div className='w-[111px] h-[32px] rounded-[6px] gap-1 flex items-center justify-center bg-[#E8FFF4]'>
                    <p className='text-xs font-hanken text-[#00954B]'>Find a branch</p>
                </div>
                <p className='font-inter font-semibold text-[#101828] leading-[100px] lg:leading-[60px] text-[32px] lg:text-[48px] tracking-[-2%]'>Branch Locator</p>
                <p className='font-inter text-[#667085] leading-[30px] text-center text-base lg:text-[20px]'>Find our nearest branch for convenient and accessible banking services.</p>
            </div>

            <div className="flex flex-col w-full lg:flex-row items-start gap-6 p-4">
                {/* Left Panel - Branch List */}
                <div className="w-full lg:w-[33.313rem] flex flex-col bg-gray-100 p-4 rounded-lg">
                    <div className='flex items-center rounded-md mb-4 bg-[#F7F9FC] p-2'>
                        <CiSearch className='w-4 h-4 text-[#667085]' />
                        <input 
                            type="text" 
                            placeholder="Search State, LGA, branch" 
                            className="w-full p-2 bg-[#F7F9FC] outline-none" 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    
                    {loading ?
                        <p className="font-hanken font-medium text-base">Fetching Branches...</p> 
                        :
                        apiBranches?.length > 0 ?
                        Object.keys(groupedBranches).map((state) => (
                            <div key={state} className="mb-2 border border-x-0 border-t-0 border-[#34423B4D]">
                                <button
                                    className={`w-full text-left p-3 font-bold flex items-center justify-between ${
                                        expandedState === state ? "bg-[#00984C] text-white rounded-xl" : "bg-[#fff]"
                                    }`}
                                    onClick={() => setExpandedState(expandedState === state ? "" : state)}
                                >
                                    <p>{state}</p>
                                    <IoIosArrowDown className={`${
                                        expandedState === state ? "text-[#fff]" : "text-[#000]"
                                    } w-3 h-3`} />
                                </button>   
                                
                                {expandedState === state && (
                                    <div className="bg-[#F7FCF9] rounded-md shadow p-2">
                                        {groupedBranches[state].map((branch) => (
                                            <div
                                                key={branch.id}
                                                className={`p-2 border-b cursor-pointer ${
                                                    selectedBranch?.id === branch.id ? "bg-green-100" : ""
                                                }`}
                                                onClick={() => setSelectedBranch(branch)}
                                            >
                                                {branch.name}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )) 
                        :
                        <p className="font-hanken font-medium text-base">No Branches Available</p> 
                    }
                </div>

                {/* Right Panel - Map & Details */}
                <div className="md:w-[43.438rem] relative mx-auto">
                    {selectedBranch ? (
                        <>
                            <iframe
                                title="Google Map"
                                src={`https://www.google.com/maps?q=${encodeURIComponent(
                                    selectedBranch?.address
                                )}&output=embed`}
                                className="md:w-[43.438rem] h-[500px] rounded-lg"
                            />
                            <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg flex flex-col">
                                <h2 className="font-bold text-lg">{selectedBranch?.name} Branch</h2>
                                <p className="flex items-center text-gray-700">
                                    <CiLocationOn className="mr-2 text-[#00984C]" /> 
                                    {selectedBranch?.address}
                                </p>
                                <p className="flex items-center text-gray-700">
                                    <LiaPhoneSolid className="mr-2 text-[#00984C]" /> 
                                    {selectedBranch?.phone_number}
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="w-full h-[500px] rounded-lg bg-gray-100 flex items-center justify-center">
                            <p className="text-gray-500">No branches found</p>
                        </div>
                    )}
                </div>
            </div>

        </section>

        <section
            className='bg-[#FBFAF9] px-5 lg:px-[80px] py-[96px] flex flex-col lg:flex-row items-center gap-[64px]'
            data-aos="fade-up" 
            data-aos-duration="1000"     
            data-aos-easing="linear"
        >
            <div className='flex flex-col gap-6 w-[311px] lg:w-[576px]'>
                <p className='font-semibold text-[32px] lg:text-[48px] lg:whitespace-nowrap leading-[100%] lg:leading-[60px] text-[#101828] font-hanken'>
                    Premium customer support
                </p>
                <p className='text-[#667085] font-inter text-base lg:text-[20px] leading-[30px]'>
                    Enjoy the personalized service you need at LAPO Microfinance Bank, 
                    including long-term business financial planning and extended-hours 
                    access to our specialized business service team.
                </p>
                <ul className='pl-5 list-disc text-[#6A6A6A] text-base lg:text-[20px] font-hanken leading-[25px]'>
                    <li>One combined monthly statement for all of your business accounts</li>
                    <li>Extended-hours access to our specialized business service team</li>
                </ul>
                <button
                    className='w-[126px] h-[48px] rounded-lg flex items-center justify-center bg-[#E78020]'
                    onClick={() => {navigate("/contact-us"); window.scrollTo(0, 0)}}
                >
                    <p className='font-medium text-base leading-6 font-inter text-[#FFFFFF]'>Contact Us</p>
                </button>
            </div>
            <div className='lg:w-[576px]'>
                <img 
                    src={Premium} 
                    alt="Premium" 
                    className='' 
                />
            </div>
        </section>

    </div>
  )
}

export default Contact