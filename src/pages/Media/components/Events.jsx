import React, { useEffect, useState } from 'react'

import Left from "../../../assets/svg/left_brick.svg"
import Right from "../../../assets/svg/right_brick.svg"
import Stars from "../../../assets/svg/stars.svg"

import Google from "../../../assets/svg/google.svg"
import Apple from "../../../assets/svg/apple.svg"

import BackScreen from "../../../assets/png/back_screen.png"
import FrontScreen from "../../../assets/png/front_screen.png"
import axios from 'axios'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Events = () => {
    const [gallery, setGallery] = useState([])
    const [loading, setLoading] = useState(false)
    const [prevPageUrl, setPrevPageUrl] = useState(null);
    const [nextPageUrl, setNextPageUrl] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 6;

    const eventsPost = [
        { title: "Fintribe Fair", image: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741213195/man_hoc33g.png", count: 20 },
        { title: "ESG 2024", image: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741213214/group_buzkvv.png", count: 20 },
        { title: "Financial Inclusion Conference Day 1", image: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741213197/speech_jgxqfl.png", count: 20 },
        { title: "Financial Inclusion Conference Day 2", image: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741213198/guest_skyeo3.png", count: 20 },
        { title: "Fintribe Fair", image: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741213195/man_hoc33g.png", count: 20 },
        { title: "ESG 2024", image: "https://res.cloudinary.com/dairsbzlv/image/upload/v1741213214/group_buzkvv.png", count: 20 }
    ];

    const fetchImages = async (url = "https://lapo.smhptech.com/api/v1/gallery") => {
        setLoading(true)
        try {
          const res = await axios.get(url);
          console.log(res, "addict")
          const data = res.data;
    
          setGallery(data?.data || []);
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
        fetchImages();
      }, []);

      const totalPages = Math.ceil(gallery.length / postsPerPage);

      // Get the current page posts
      const indexOfLastGallery = currentPage * postsPerPage;
      const indexOfFirstGallery = indexOfLastGallery - postsPerPage;
      const currentGallery = gallery.slice(indexOfFirstGallery, indexOfLastGallery);
  
      // Change page function
      const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className='w-full'>
        <section
            className='bg-[#00984C] h-[27.83rem] pt-[100px] relative overflow-hidden'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex items-center justify-between absolute top-44 z-10 -inset-x-4'>
                <img src={Left} alt='Left' className='' />
                <img src={Right} alt='Right' className='' />
            </div>

            <div className='flex flex-col items-center pt-[45px] pb-[80px]'>
                <div className='flex flex-col items-center gap-4 w-[688px] mx-auto'>
                    <div className='w-[211px] h-[28px] rounded-[6px] gap-1 flex items-center justify-center bg-[#FDF2E9]'>
                        <img src={Stars} alt='Stars' className='w-[13px] h-[13px]' />
                        <p className='text-xs font-hanken text-[#E78020]'>Empowering 6M+ Nigerians</p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p className='font-hanken capitalize text-[56px] text-center font-medium text-[#FFFFFF] leading-[56px]'>
                            A picture is worth more
                        </p>
                        <p className='font-hanken text-[20px] leading-[30px] text-[#FFFFFF] text-center'>
                            Explore our galleries to see pictures of past seminars, trainings, meetings and other events
                        </p>
                    </div>
                    <div className='flex items-center gap-[17px]'>
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

                    </div>
                </div>
            </div>
        </section>

        <section
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
            className='py-[96px] px-[80px] flex flex-col items-center gap-[64px]'
        >
            <p className='font-hanken text-[48px] font-medium text-[#101828]'>Events Gallery</p>

            <div className='grid grid-cols-3 gap-6'>
                {currentGallery.map((event, index) => (
                    <div key={index} className='relative group overflow-hidden rounded-lg'>
                        <img src={event.image} alt={event.title} className='w-full h-auto object-cover' />
                        {/* <div className='absolute top-2 right-2 bg-black bg-opacity-50 px-3 py-1 rounded text-white'>{event.count}</div> */}
                        <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white'>{event.caption}</div>
                    </div>
                ))}
            </div>

           {/* Pagination */}
            <div className="flex justify-between w-full items-center py-5">
                {/* Previous Button */}
                <button
                    className={`flex items-center text-[#475467] font-inter text-sm ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <FiChevronLeft className="w-4 h-4 mr-1" /> Previous
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                        <button
                            key={number}
                            className={`w-8 h-8 rounded-md flex items-center justify-center font-inter text-sm ${
                                currentPage === number
                                    ? "bg-[#FEF3F2] text-[#E78020] font-semibold"
                                    : "text-[#475467]"
                            }`}
                            onClick={() => paginate(number)}
                        >
                            {number}
                        </button>
                    ))}
                </div>

                {/* Next Button */}
                <button
                    className={`flex items-center text-[#475467] font-inter text-sm ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next <FiChevronRight className="w-4 h-4 ml-1" />
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

export default Events