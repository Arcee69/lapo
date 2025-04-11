import React,  { useEffect, useRef, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import Christmas from "../../assets/png/christmas.png"
import ChristmasB from "../../assets/png/christmas_b.png"
import Shopper from "../../assets/png/shopper.png"
import Fx from "../../assets/png/fx.png"

import Stars from "../../assets/svg/stars.svg"
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'


const Blog = () => {
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const [blogPost, setBlogPost] = useState([])
    const [prevPageUrl, setPrevPageUrl] = useState(null);
    const [nextPageUrl, setNextPageUrl] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [statusFilter, setStatusFilter] = useState("")
    const postsPerPage = 6;

     const { state } = useLocation() 

     let URL = import.meta.env.VITE_APP_API_URL;

    const navigate = useNavigate()
    const blogRef = useRef(null)

    useEffect(() => {
        if (state?.section === "blog" && blogRef.current) {
            blogRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [state])
 
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

    // const blogPost = [
    //     {
    //         id: 1,
    //         img: ChristmasB,
    //         publishedDate: "Rachel Edache • 04 March 2024",
    //         title: "Season of Love and giving: LAPO MFB's christmas Party",
    //         content: "Love was in the air at LAPO MFB as we came together to celebrate the yuletide with a heartwarming party filled with joy, laughter, and camaraderie. "
    //     },
    //     {
    //         id: 2,
    //         img: Shopper,
    //         publishedDate: "Rachel Edache • 04 March 2024",
    //         title: "Microfinancing in Nigeria: The Key to Empowering Small Businesses in the Future.",
    //         content: "As a developing country, Nigeria has a significant number of small businesses operating in various sectors of the economy. "
    //     },
    //     {
    //         id: 3,
    //         img: Fx,
    //         publishedDate: "Rachel Edache • 04 March 2024",
    //         title: "Recession-proof your finances.",
    //         content: " Financial planning will help you identify your goals and create a strategy for achieving them. But just how exactly do you set financial goals? And how far in the future can you realistically plan them? "
    //     },
    //     {
    //         id: 4,
    //         img: Shopper,
    //         publishedDate: "Rachel Edache • 04 March 2024",
    //         title: "Microfinancing in Nigeria: The Key to Empowering Small Businesses in the Future.",
    //         content: "As a developing country, Nigeria has a significant number of small businesses operating in various sectors of the economy. "
    //     },
    //     {
    //         id: 5,
    //         img: Fx,
    //         publishedDate: "Rachel Edache • 04 March 2024",
    //         title: "Recession-proof your finances.",
    //         content: " Financial planning will help you identify your goals and create a strategy for achieving them. But just how exactly do you set financial goals? And how far in the future can you realistically plan them? "
    //     },
    //     {
    //         id: 6,
    //         img: ChristmasB,
    //         publishedDate: "Rachel Edache • 04 March 2024",
    //         title: "Season of Love and giving: LAPO MFB's christmas Party",
    //         content: "Love was in the air at LAPO MFB as we came together to celebrate the yuletide with a heartwarming party filled with joy, laughter, and camaraderie. "
    //     },
    // ]

      // Calculate total pages
      
      const filteredPost = blogPost.filter((item) => {
        const matchSearch = item.title.toLowerCase().includes(search.toLowerCase() ||  "")
        return matchSearch
      })

      const totalPages = Math.ceil(filteredPost.length / postsPerPage);

      // Get the current page posts
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = filteredPost.slice(indexOfFirstPost, indexOfLastPost);
  
      // Change page function
      const paginate = (pageNumber) => setCurrentPage(pageNumber);
  

  return (
    <div className='w-full'>
        <section 
            style={{
                backgroundImage: `url(${Christmas})`,
                backgroundSize:"cover",
                backgroundRepeat: "no-repeat",
                position: "relative" 
            }}
                className='h-[619px] flex flex-col items-start pl-5 lg:pl-[64px] pt-[119px] lg:pt-[183px]'
                data-aos="fade-up" 
                data-aos-duration="1000" 
                data-aos-easing="linear"
        >
            <div className="absolute inset-0 bg-[#000] opacity-20"></div> 
            <div className='lg:w-[741px] h-[406px] z-10 flex flex-col gap-5'>
                <div className='flex items-center justify-center gap-2 bg-[#FAFAFA] w-[204px] rounded-full h-[28px] p-2'>
                    <img src={Stars} alt='Stars' className='w-[13px] h-[13px]' />
                    <p className='font-hanken font-medium text-[#E78020] text-xs'>Empowering 6M+ Nigerians</p>
                </div>
                <p className='font-semibold text-[32px] leading-[35px] lg:text-[56px] lg:leading-[57px] text-[#FAFAFA] font-hanken'>
                    Season of Love and giving: LAPO MFB's christmas Party
                </p>
                <p className='text-base lg:text-[20px] font-hanken text-[#FFFFFF] lg:w-[650px] leading-[30px]'>
                    Love was in the air at LAPO MFB as we came together to celebrate the yuletide with 
                    a heartwarming party filled with joy, laughter, and camaraderie. 
                </p>
                <div className='flex items-center gap-5'>
                    <button
                        className='bg-[#E78020] flex flex-col items-center justify-center w-[126px] h-[56px] rounded-[10px]'
                        type='button'
                        onClick={() => {navigate("/blog", {state: {section: "blog"}}), window.scrollTo(0, 0) }}
                    >
                    <p className='font-hanken text-[#fff] text-base font-semibold'>Read More</p>
                    </button>
                </div>
        
            </div>
        </section>

        <section
            className='bg-[#fff] py-[96px] px-5 lg:px-[80px] flex flex-col gap-[64px]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between'>
                <div className='flex items-center p-2 gap-1.5 w-[320px] rounded-lg border border-[#D0D5DD]'>
                    <CiSearch  className='w-4 h-4 text-[#D0D5DD]'/>
                    <input 
                        className='text-[#667085] font-inter text-base leading-6 outline-none'
                        placeholder='Search'
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                </div>

                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="flex items-center justify-between p-2 w-[320px] border border-[#D0D5DD] rounded-lg"
                >
                    {/* <option value="">Status</option> */}
                    <option value="true">Newest First</option>
                </select>
            </div>

            <div className='flex flex-col gap-[32px]' ref={blogRef}>
                <p className='font-semibold font-inter text-[#101828] leading-[32px] text-[24px]'>All blog posts</p>

                <div className={`${currentPosts?.length > 0 ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]" :  "flex items-center justify-center"}`}>
                    { loading ? 
                        <p className='text-2xl text-[#000] text-center font-semibold'>Loading Blog...</p> :
                        currentPosts.length > 0 ?
                        currentPosts.map((item) => (
                            <div key={item.id} className='flex cursor-pointer flex-col gap-[32px]' onClick={() => {navigate("/view-blog", {state: item}), window.scrollTo(0,0)}} >
                                <img src={item.image} alt="event" className='rounded-lg w-[384px] h-[240px]' />
                                <div className='flex flex-col gap-3'>
                                    <p className='font-inter text-[#E78020] font-semibold leading-5 text-sm'>{new Date(item.created_at).toDateString()}</p>
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
                        <p className='text-2xl text-[#000] text-center font-semibold'>No Blogs Available</p>
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
    </div>
  )
}

export default Blog