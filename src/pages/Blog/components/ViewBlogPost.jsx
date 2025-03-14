import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ViewBlogPost = () => {
    
    const { state } = useLocation()
    console.log(state, "state") 

    const navigate = useNavigate()

  return (
    <div className='w-full flex flex-col items-start gap-5 pt-[186px] pb-[49px] px-5 lg:px-[112px]'>
        <button onClick={() => {navigate(-1), window.scrollTo(0, 0)}} className='bg-[#000] w-[100px] flex items-center justify-center h-[44px] rounded-lg'>
            <p className='text-[#fff] font-inter text-lg'>Back</p>
        </button>
        <div className='flex flex-col  items-start gap-[64px]'>
            <p className='font-hanken font-semibold text-[#101828] text-[32px] lg:text-[48px] leading-[44px] lg:leading-[60px]'>{state.title}</p>
            <div className='flex flex-col gap-[32px] items-start  w-full'>
                <img src={state.image} className='lg:h-[516px]' alt='PostImage'/>
                <div className='flex flex-col gap-3'>
                    <p className='text-[#7F56D9] font-inter font-semibold text-[14px]'>Published On</p>
                    <p className='text-[#101828] text-[18px] font-medium'>{new Date(state.created_at).toDateString()}</p> 
                </div>
            </div>
            <div className='w-full'> {/*w-[46.875rem] mx-auto */}
                <p dangerouslySetInnerHTML={{ __html: state.body }} /> 
            </div>
    
        </div>
    </div>
  )
}

export default ViewBlogPost