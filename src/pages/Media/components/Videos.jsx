import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Left from "../../../assets/svg/left_brick.svg"
import Right from "../../../assets/svg/right_brick.svg"
import Stars from "../../../assets/svg/stars.svg"

import Google from "../../../assets/svg/google.svg"
import Apple from "../../../assets/svg/apple.svg"

import BackScreen from "../../../assets/png/back_screen.png"
import FrontScreen from "../../../assets/png/front_screen.png"

const Videos = () => {
    const [loading, setLoading] = useState(false)
    const [vid, setVid] = useState([])
    const [prevPageUrl, setPrevPageUrl] = useState(null);
    const [nextPageUrl, setNextPageUrl] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 6;
    const URL = import.meta.env.VITE_APP_API_URL;

    const getVids = async (url = `${URL}/v1/video`) => {
        setLoading(true)
        try {
          const res = await axios.get(url);
          console.log(res, "addict")
          const data = res.data;
    
          setVid(data?.data || []);
          setPrevPageUrl(data.pagination?.prev_page_url);
          setNextPageUrl(data.pagination?.next_page_url);
          setCurrentPage(data.pagination?.current_page);
        } catch (err) {
          console.error(err);
        } finally {
            setLoading(false)
        }
      };
    
      useEffect(() => {
        getVids();
      }, []);
    
      const handlePrevPage = () => {
        if (prevPageUrl) getVids(prevPageUrl);
      };
    
      const handleNextPage = () => {
        if (nextPageUrl) getVids(nextPageUrl);
      };
  

  return (
    <div className='w-full'>
        <section
            className='bg-[#00984C] h-[27.83rem] pt-[100px] relative overflow-hidden'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='hidden lg:flex items-center justify-between absolute top-44 z-10 -inset-x-4'>
                <img src={Left} alt='Left' className='' />
                <img src={Right} alt='Right' className='' />
            </div>

            <div className='flex flex-col items-center pt-[45px] pb-[80px]'>
                <div className='flex flex-col items-center gap-4 lg:w-[688px] mx-auto'>
                    <div className='w-[211px] h-[28px] rounded-[6px] gap-1 flex items-center justify-center bg-[#FDF2E9]'>
                        <img src={Stars} alt='Stars' className='w-[13px] h-[13px]' />
                        <p className='text-xs font-hanken text-[#E78020]'>Empowering 6M+ Nigerians</p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p className='font-hanken capitalize text-[32px] leading-[32px] lg:text-[56px] text-center font-medium text-[#FFFFFF] lg:leading-[56px]'>
                            A video is worth more
                        </p>
                        <p className='font-hanken text-base lg:text-[20px] leading-[30px] text-[#FFFFFF] text-center'>
                            Explore our galleries to see videos of past seminars, trainings, meetings and other events
                        </p>
                    </div>
                    {/* <div className='hidden lg:flex items-center gap-[17px]'>
                        <button
                            className='w-[180px] h-[56px] flex items-center justify-center bg-[#fff] rounded-lg'
                        >
                            <p className='text-[#F99650] font-medium text-base leading-7' >Get Started</p>
                        </button>
                        <button
                            className='w-[182px] h-[54px] border-[#FFFFFF] border flex items-center justify-center rounded-lg'
                        >
                            <p className='text-[#FFFFFF] font-medium text-base leading-7'>Learn More</p>
                        </button>

                    </div> */}
                </div>
            </div>
        </section>

        <section
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
            className='py-[96px] px-5 lg:px-[80px] flex flex-col items-center gap-[64px]'
        >
            <p className='font-hanken text-[32px] lg:text-[48px] font-medium text-[#101828]'>Videos Gallery</p>

            {/* <div className={`${vid?.length > 0 ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" :  "flex items-center justify-center"}`}>
                {loading ? 
                    <p className='text-2xl text-[#000] text-center font-semibold'>Loading Videos...</p> :
                    vid?.length > 0 ?
                    vid?.map((item, index) => (
                    <div key={index} className='relative group overflow-hidden rounded-lg'>
                        <video width="320" height="240" controls>
                            <source src={item.link} type="video/mp4" />
                        </video>
                        {/* <img src={event.image} alt={event.title} className='w-full h-auto object-cover' />
                        <div className='absolute top-2 right-2 bg-black bg-opacity-50 px-3 py-1 rounded text-white'>{event.count}</div>
                        <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white'>{event.title}</div> 
                    </div>
                    )) : 
                    <p className='text-2xl text-[#000] text-center font-semibold'>No Videos Available</p>
                }
            </div> */}

            <div className={`${vid?.length > 0 ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex items-center justify-center"}`}>
            {loading ? (
                <p className='text-2xl text-[#000] text-center font-semibold'>Loading Videos...</p>
            ) : vid?.length > 0 ? (
                vid?.map((item, index) => {
                    const youtubeId = item.link.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i)?.[1];

                return (
                    <div key={index} className='relative group overflow-hidden rounded-lg'>
                        {/* Video container with responsive sizing */}
                        <div className="w-full aspect-video"> {/* Maintain aspect ratio */}
                        {
                            youtubeId ? 
                                <iframe
                                    className="w-full h-full rounded-lg"
                                    src={`https://www.youtube.com/embed/${youtubeId}`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                :
                                <video 
                                    className="w-full h-full object-cover" // Make video fill container
                                    controls 
                                    preload="metadata" // Optimize loading
                                >
                                    <source src={item.link} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            }
                        </div>
                    </div>
                )})
            ) : (
                <p className='text-2xl text-[#000] text-center font-semibold'>No Videos Available</p>
            )}
            </div>

            {/* <div className='flex justify-between w-full items-center mt-10'>
                <button className='text-gray-400'>← Previous</button>
                <div className='flex gap-2'>
                    {[1, 2, 3, 8, 9, 10].map((page, index) => (
                        <button key={index} className={`px-3 py-1 rounded ${page === 1 ? 'bg-[#00984C] text-white' : 'text-gray-400'}`}>{page}</button>
                    ))}
                </div>
                <button className='text-gray-400'>Next →</button>
            </div> */}
            <div className="flex justify-center items-center gap-4 mt-10">
                <button
                        onClick={handlePrevPage}
                        disabled={!prevPageUrl}
                        className={`px-4 py-2 bg-[#00AA55] text-white font-bold rounded ${
                        !prevPageUrl && "opacity-50 cursor-not-allowed"
                        }`}
                >
                    Previous
                </button>
                <p className="text-[#222222] font-bold">Page {currentPage}</p>
                <button
                    onClick={handleNextPage}
                    disabled={!nextPageUrl}
                    className={`px-4 py-2 bg-[#00AA55] text-white font-bold rounded ${
                    !nextPageUrl && "opacity-50 cursor-not-allowed"
                    }`}
                >
                    Next
                </button>
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

export default Videos