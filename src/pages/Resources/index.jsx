import React, { useState, useRef } from 'react'

import Left from "../../assets/svg/left_brick.svg"
import Right from "../../assets/svg/right_brick.svg"
import Stars from "../../assets/svg/stars.svg"

import Google from "../../assets/svg/google.svg"
import Apple from "../../assets/svg/apple.svg"

import BackScreen from "../../assets/png/back_screen.png"
import FrontScreen from "../../assets/png/front_screen.png"

import Featured from './components/Featured'
import Reports from './components/Reports'
import Brochures from './components/Brochures'
import Forms from './components/Forms'
import Sdg from './components/Sdg'
import { useNavigate } from 'react-router-dom'


const Resources = () => {
    const [activeTab, setActiveTab] = useState("featured")

    const handleTabChange = (value) => {
        setActiveTab(value)
    }

    const navigate = useNavigate()
    

    const featuredRef = useRef(null); 
    const reportRef = useRef(null); 
    const brochuresRef = useRef(null); 
    const formsRef = useRef(null); 
    const sdgRef = useRef(null); 

    return (
        <div className='w-full'>
            <section
                className='bg-[#00984C] h-[30.83rem] pt-[150px] relative overflow-hidden'
                data-aos="fade-up" 
                data-aos-duration="1000" 
                data-aos-easing="linear"
            >
                <div className='flex items-center justify-between absolute top-44 z-10 -inset-x-4'>
                    <img src={Left} alt='Left' className='' />
                    <img src={Right} alt='Right' className='' />
                </div>
    
                <div className='flex flex-col items-center pt-[45px] pb-[80px]'>
                    <div className='flex flex-col items-center gap-4 w-[651px] mx-auto'>
                        <div className='w-[211px] h-[28px] rounded-[6px] gap-1 flex items-center justify-center bg-[#FDF2E9]'>
                            <img src={Stars} alt='Stars' className='w-[13px] h-[13px]' />
                            <p className='text-xs font-hanken text-[#E78020]'>Empowering 6M+ Nigerians</p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <p className='font-hanken capitalize text-[56px] text-center font-medium text-[#FFFFFF] leading-[56px]'>
                                Download Our Resources
                            </p>
                            <p className='font-hanken text-[20px] leading-[30px] text-[#FFFFFF] text-center'>
                                Access and download our SDG badges, annual reports, 
                                brochures, and other resources.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section
                data-aos="fade-up" 
                data-aos-duration="1000" 
                data-aos-easing="linear"
                className='px-[112px] py-[48px] flex items-start gap-[32px]'
            >
                {/* Sidebar */}
                <aside className="w-1/4 p-4 bg-white shadow-md flex flex-col gap-6 rounded-lg">
                    <h2 className="text-[24px] font-hanken font-medium text-[#101828] mb-4">Resource Categories</h2>
                    <div className='flex flex-col gap-4'>
                        <div onClick={() => {
                            handleTabChange("featured");
                            navigate("/resources", {
                                 state: { section: "featured" },
                                }
                            )}} 
                            className={`${activeTab === "featured" ? "border-[#00984C] border-l-[3px] rounded-lg border-t-0 border-r-0 bg-[#F9FBFA]" : "border-x-0 border-t-0"} w-[14.5rem] h-[52px] p-3 flex border items-center gap-2 cursor-pointer`}>
                            <p className={`${activeTab === "featured" ? "text-[#00984C]" : ""} font-hanken text-[18px] leading-5`}>All Resources </p>
                            <div className={`${activeTab === "featured" ? "" : "bg-[#E5E7EB]"} rounded-full flex items-center justify-center p-1 w-[22px] h-[18px]`}>
                                <p className={`${activeTab === "featured" ? "text-[#00984C]" : "text-[#374151]"} font-inter text-[12px]`}>11</p>
                            </div>
                        </div>
                        <div 
                        onClick={() => { 
                            handleTabChange("reports");
                            navigate("/resources", {
                                state: { section: "reports" },
                               }
                           )}} 
                        className={`${activeTab === "reports" ? "border-[#00984C] border-l-[3px] border-t-0 rounded-lg border-r-0 bg-[#F9FBFA]" : "border-x-0 border-t-0"} w-[14.5rem] h-[52px] p-3 flex border items-center gap-2 cursor-pointer`}>
                            <p className={`${activeTab === "reports" ? "text-[#00984C]" : ""} font-hanken text-[18px] leading-5`}>Annual Reports</p>
                            <div className={`${activeTab === "reports" ? "" : "bg-[#E5E7EB]"} rounded-full flex items-center justify-center p-1 w-[22px] h-[18px]`}>
                                <p className={`${activeTab === "reports" ? "text-[#00984C]" : "text-[#374151]"} font-inter text-[12px]`}>3</p>
                            </div>
                        </div>
                        <div 
                            onClick={() => {
                                handleTabChange("brochures");
                                navigate("/resources", {
                                    state: { section: "brochures" },
                                   }
                               )}
                            } 
                            className={`${activeTab === "brochures" ? "border-[#00984C] border-l-[3px] border-t-0 rounded-lg border-r-0 bg-[#F9FBFA]" : "border-x-0 border-t-0"} w-[14.5rem] h-[52px] p-3 flex border items-center gap-2 cursor-pointer`}>
                            <p className={`${activeTab === "brochures" ? "text-[#00984C]" : ""} font-hanken text-[18px] leading-5`}>Brochures </p>
                            <div className={`${activeTab === "brochures" ? "" : "bg-[#E5E7EB]"} rounded-full flex items-center justify-center p-1 w-[22px] h-[18px]`}>
                                <p className={`${activeTab === "brochures" ? "text-[#00984C]" : "text-[#374151]"} font-inter text-[12px]`}>1</p>
                            </div>
                        </div>
                        <div 
                            onClick={() => {
                                handleTabChange("forms");
                                navigate("/resources", {
                                    state: { section: "forms" },
                                   }
                               )
                            }} 
                            className={`${activeTab === "forms" ? "border-[#00984C] border-l-[3px] border-t-0 rounded-lg border-r-0 bg-[#F9FBFA]" : "border-x-0 border-t-0"} w-[14.5rem] h-[52px] p-3 flex border items-center gap-2 cursor-pointer`}>
                            <p className={`${activeTab === "forms" ? "text-[#00984C]" : ""} font-hanken text-[18px] leading-5`}>Forms </p>
                            <div className={`${activeTab === "forms" ? "" : "bg-[#E5E7EB]"} rounded-full flex items-center justify-center p-1 w-[22px] h-[18px]`}>
                                <p className={`${activeTab === "forms" ? "text-[#00984C]" : "text-[#374151]"} font-inter text-[12px]`}>1</p>
                            </div>
                        </div>
                        <div onClick={() => {
                            handleTabChange("sdg");
                            navigate("/resources", {
                                state: { section: "sdg" },
                               }
                           )
                        }} 
                        className={`${activeTab === "sdg" ? "border-[#00984C] border-l-[3px] border-t-0 rounded-lg border-r-0 bg-[#F9FBFA]" : "border-x-0 border-t-0"} w-[14.5rem] h-[52px] p-3 flex border items-center gap-2 cursor-pointer`}>
                            <p className={`${activeTab === "sdg" ? "text-[#00984C]" : ""} font-hanken text-[18px] leading-5`}>SDG Resources</p>
                            <div className={`${activeTab === "sdg" ? "" : "bg-[#E5E7EB]"} rounded-full flex items-center justify-center p-1 w-[22px] h-[18px]`}>
                                <p className={`${activeTab === "sdg" ? "text-[#00984C]" : "text-[#374151]"} font-inter text-[12px]`}>5</p>
                            </div>
                        </div>
                    </div>
                </aside>

                 {/* Main Content */}
                <div className="w-3/4 p-4 gap-[48px] flex flex-col">
                    <Featured featuredRef={featuredRef} />
                    <Reports reportRef={reportRef} />
                    <Brochures brochuresRef={brochuresRef}/>
                    <Forms formsRef={formsRef}/>
                    <Sdg sdgRef={sdgRef}/>
                </div>
            </section>
            
            <section
                className='w-full px-[80px] py-[96px] h-[512px] overflow-hidden'
                data-aos="fade-up" 
                data-aos-duration="1000"
                data-aos-easing="linear"
            >
                <div
                className='flex items-center justify-center gap-[64px]'
                >
                <div className='w-[576px] flex flex-col gap-6'>
                    <p className='font-medium font-hanken text-[48px] leading-[60px]'>
                        Bank On the Go – Anytime, Anywhere!
                    </p>
                    <p className='text-[#667085] text-[20px] font-nunito leading-[30px] w-[480px]'>
                    Download LAPO's mobile app for seamless banking, savings, 
                    and loans—all at your fingertips.
                    </p>
                    <div className='flex items-center gap-4'>
                        <img src={Apple} alt='Apple' className='w-[120px] cursor-pointer h-[40px]' onClick={() => window.open("https://apps.apple.com/ng/app/lapo-mobile-app/id6448030325", "_blank")} />
                        <img src={Google} alt='Google' className='w-[120px] cursor-pointer h-[40px]' onClick={() => window.open("https://play.google.com/store/apps/details?id=com.digicore.lapo", "_blank")}/>
                    </div>
                </div>
                <div className='bg-[#F3F5F4] w-[576px] relative overflow-hidden flex items-center rounded-tl-[30px] rounded-tr-[30px]'>
                    <div className='w-[274px] relative left-10 -bottom-20'>
                    <img src={BackScreen} alt='BackScreen' className='' />
                    </div>
                    <div className='w-[281px] relative right-4 -bottom-10 z-10'>
                    <img src={FrontScreen} alt='FrontScreen' className=''  />
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Resources