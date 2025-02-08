import React from 'react'

const Box = ({ className, img, alt, title, content }) => {
  return (
    <div className={className}>
        <div className='flex flex-col gap-[11px] h-full w-full bg-white'>
        <div className='flex items-center gap-1'>
            <img src={img} alt={alt} className='' />
            <p className='font-medium font-hanken whitespace-nowrap text-[18px] leading-[30px]'>{title}</p>
        </div>
        <p className='font-inter text-base leading-6 text-[#5B6960]'>
            {content}
        </p>
        </div>
    </div>
  )
}

export default Box

