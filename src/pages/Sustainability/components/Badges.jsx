import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CgArrowLongRight } from 'react-icons/cg';
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import Google from "../../../assets/svg/google.svg"
import Apple from "../../../assets/svg/apple.svg"

import BackScreen from "../../../assets/png/back_screen.png"
import FrontScreen from "../../../assets/png/front_screen.png"

const Badges = () => {
    const [loading, setLoading] = useState(false)
    const [blogPost, setBlogPost] = useState([])
    const [prevPageUrl, setPrevPageUrl] = useState(null);
    const [nextPageUrl, setNextPageUrl] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;
    
    let URL = import.meta.env.VITE_APP_API_URL;

    const fetchBlogPosts = async (url = `${URL}/v1/post`) => {
      setLoading(true)
      try {
        const res = await axios.get(url);
        console.log(res, "addict")
        const data = res.data;
  
        setBlogPost(data?.data || []);
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
      fetchBlogPosts();
    }, []); 
  
    const handlePrevPage = () => {
      if (prevPageUrl) fetchBlogPosts(prevPageUrl);
    };
  
    const handleNextPage = () => {
      if (nextPageUrl) fetchBlogPosts(nextPageUrl);
    };

    // const filteredPost = blogPost.filter((item) => {
    //   const matchSearch = item.title.toLowerCase().includes(search.toLowerCase() ||  "")
    //   return matchSearch
    // })

    const totalPages = Math.ceil(blogPost.length / postsPerPage);

    // Get the current page posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPost.slice(indexOfFirstPost, indexOfLastPost);

    // Change page function
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    
  return (
    <div className='w-full'>
      <section 
        className='pb-[70px] pt-[40px] flex flex-col px-5 lg:px-[100px] gap-[30px]'
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
      >
        <div className="bg-[#F8F9FA] rounded-[20px] w-full lg:h-[7.75rem] p-5 flex-col flex">
          <div className="border border-[#4380BE66] p-3 border-x-0 border-t-0">
            <p className="font-hanken text-[32px] leading-[40px]  lg:text-[54px] text-[#1E1E1E] lg:leading-[59px]">SDG Recognition Badges</p>
          </div>
        </div>

        <div
          className='flex flex-col gap-[32px]'
        >
                
          <div className={`${currentPosts?.length > 0 ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]" :  "flex items-center justify-center"}`}>
              { loading ? 
                  <p className='text-2xl text-[#000] text-center font-semibold'>Loading Badges...</p> :
                  currentPosts.length > 0 ?
                  currentPosts.map((item) => (
                      <div key={item.id} className='flex cursor-pointer flex-col gap-[32px]' onClick={() => {navigate("/view-post", {state: item}), window.scrollTo(0,0)}} >
                          <img src={item.image} alt="event" className='rounded-lg w-[384px] h-[240px]' />
                          <div className='flex flex-col gap-3'>
                              <p className='font-inter text-[#00984C] font-semibold leading-5 text-sm'>{new Date(item.created_at).toDateString()}</p>
                              <div className='flex items-start gap-1'>
                                  <p className='font-semibold font-hanken w-[344px] text-[#101828] text-[20px] lg:text-[24px] leading-[32px]'>{item.title}</p>
                                  <FiArrowUpRight className='w-5 h-5 mt-2 text-[#101828]' />
                              </div>
                              <p className='text-base text-[#667085] leading-6 font-inter'>
                                  {item.content}
                              </p>
                          </div>

                      </div>
                  )) : 
                  <p className='text-2xl text-[#000] text-center font-semibold'>No Badges Available</p>
              }

          </div>

          <div className="border border-x-0 border-b-0 border-[#EAECF0]"></div>


          {/* Pagination */}
          <div className="flex justify-between items-center py-5">
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

        </div>
      </section>

        <section
            className='bg-[#00984C] h-[471px] px-5 lg:px-0 flex justify-center py-[107px] lg:py-[112px] items-center'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='lg:w-[768px] flex flex-col items-center gap-6'>
                <p className='font-hanken text-[32px] capitalize lg:text-[48px] text-center leading-[120%] lg:leading-[57px] text-[#FFFFFF]'>
                    Unlock new financial possibilities with us
                </p>
                <p className='font-inter text-base leading-[150%] text-center lg:text-[18px] lg:leading-[27px] text-[#FFFFFF]'>
                    Explore our diverse saving options tailored for personal, business, and educational needs.  
                </p>
                <div className='flex items-center gap-4'>
                    <div 
                        className='bg-[#fff] w-[128px] h-[48px] cursor-pointer rounded-[8px] p-2 flex items-center justify-center'
                        onClick={() => {navigate("/contact-us"); window.scrollTo(0, 0)}}
                    >
                        <p className='font-hanken text-[#000000] font-medium text-[13px] lg:text-base leading-6'>Contact Us</p>
                    </div>
                    <div 
                        className='bg-[#000000] w-[187px] lg:w-[225px] cursor-pointer h-[48px] rounded-[8px] flex items-center justify-center p-2'
                        onClick={() => {navigate("/digital", {
                            state: {section: "app"}
                          }); window.scrollTo(0, 0)}}
                    >
                        <p className='font-hanken font-medium whitespace-nowrap text-[13px] lg:text-base text-[#fff]'>Download the LAPO App</p>
                    </div>
                </div>
            </div>
        </section>
                  
      <section
          className='px-5 lg:px-[120px] py-[96px] lg:py-[112px] flex flex-col gap-[41px] items-center'
          data-aos="fade-up" 
          data-aos-duration="1000" 
          data-aos-easing="linear"
      >
        <p className='text-[32px] lg:text-[54px] font-hanken leading-[51px] text-[#1E1E1E]'>More About Our Impact</p>
        <div className='flex flex-col lg:flex-row items-start gap-[30px]'>
            <div className='flex flex-col shadow-md rounded-lg w-[21.438rem] mx-auto lg:w-[22.9rem] h-auto lg:h-[324px]'>
                <img 
                    src="https://res.cloudinary.com/dairsbzlv/image/upload/v1740238686/wind_p3xnl2.png"
                    alt='Savings' 
                    className='w-full h-[152px] object-cover rounded-t-lg' 
                />
                <div className='flex flex-col p-5 gap-3'>
                    <p className="text-[#333333] font-hanken font-bold text-[18px]">Environment Dimension.</p>
                    <p className='font-inter text-[#6C757D] text-sm'> 
                        Grow your business with our flexible financing 
                        options designed for entrepreneurs and SMEs.
                    </p>
                    <p onClick={() => {navigate("/sustainability"); window.scrollTo(0, 0)}} className='text-[#006A4E] cursor-pointer text-base'>Learn More</p>
                </div>
            </div>
            <div className='flex flex-col shadow-md rounded-lg w-[21.438rem] mx-auto lg:w-[22.9rem] h-auto lg:h-[324px]'>
                <img 
                    src="https://res.cloudinary.com/dairsbzlv/image/upload/v1740238685/plant_jnxuhq.png"
                    alt='Savings' 
                    className='w-full object-cover h-[152px] rounded-t-lg' 
                />
                <div className='flex flex-col p-5 gap-3'>
                    <p className="text-[#333333] font-hanken font-bold text-[18px]">Nigerian Sustainable Banking Principles (NSBP) & LAPO MfB</p>
                    <p className='font-inter text-[#6C757D] text-sm'> 
                        Fund your education or your children's schooling 
                        with our affordable education financing
                    </p>
                    <p onClick={() => {navigate("/sustainability"); window.scrollTo(0, 0)}} className='text-[#006A4E] cursor-pointer text-base'>Learn More</p>
                </div>
            </div>
            <div className='flex flex-col shadow-md rounded-lg w-[21.438rem] mx-auto lg:w-[22.9rem] h-auto lg:h-[324px]'>
                <img 
                    src="https://res.cloudinary.com/dairsbzlv/image/upload/v1740238685/recycle_ntjphp.png"
                    alt='Savings' 
                    className='w-full h-[152px] object-cover rounded-t-lg' 
                />
                <div className='flex flex-col p-5 gap-3'>
                    <p className="text-[#333333] font-hanken font-bold text-[18px]">Badges</p>
                    <p className='font-inter text-[#6C757D] text-sm'> 
                        Transform your living space with affordable financing for renovations and improvements.
                    </p>
                    <p onClick={() => {navigate("/sustainability"); window.scrollTo(0, 0)}} className='text-[#006A4E] cursor-pointer text-base'>Learn More</p>
                </div>
            </div>
        </div>
      </section>
            
      <section
          className='w-full px-5 lg:px-[80px] py-[96px] lg:h-[512px] overflow-hidden'
          data-aos="fade-up" 
          data-aos-duration="1000"
          data-aos-easing="linear"
      >
          <div
              className='flex flex-col lg:flex-row items-center justify-center gap-[64px]'
          >
              <div className='lg:w-[576px] flex flex-col gap-6'>
              <p className='font-medium font-hanken text-[32px] lg:text-[48px] leading-[60px]'>
                  Bank On the Go – Anytime, Anywhere!
              </p>
              <p className='text-[#667085] text-[20px] font-nunito leading-[30px] lg:w-[480px]'>
                  Download LAPO's mobile app for seamless banking, savings, 
                  and loans—all at your fingertips.
              </p>
              <div className='flex items-center gap-4'>
                  <img src={Apple} alt='Apple' className='w-[120px] cursor-pointer h-[40px]' onClick={() => window.open("https://apps.apple.com/ng/app/lapo-mobile-app/id6448030325", "_blank")} />
                  <img src={Google} alt='Google' className='w-[120px] cursor-pointer h-[40px]' onClick={() => window.open("https://play.google.com/store/apps/details?id=com.digicore.lapo", "_blank")}/>
              </div>
              </div>
              <div className='bg-[#F3F5F4] w-full lg:w-[576px] h-[512px] lg:h-auto relative overflow-hidden flex items-center rounded-tl-[30px] rounded-tr-[30px]'>
              <div className='w-[274px] hidden lg:block lg:relative left-10 -bottom-20'>
                  <img src={BackScreen} alt='BackScreen' className='' />
              </div>
              <div className='w-[281px] mx-auto relative lg:right-4 -bottom-10 z-10'>
                  <img src={FrontScreen} alt='FrontScreen' className=''  />
              </div>
              </div>
          </div>
      </section>


    </div>
  )
}

export default Badges