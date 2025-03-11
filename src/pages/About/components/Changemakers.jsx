import React from 'react'

import Groupies from "../../../assets/png/groupies.png"
import { IoChevronForwardOutline } from 'react-icons/io5'

const Changemakers = () => {


    const board = [
        {
            name: 'Godwin Ehigiamusoe',
            position: 'Founder/CEO',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1740180268/godwin_lbdsau.png'
        },
        {
            name: 'Cynthia Ikponmwosa',
            position: 'Managing Director',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1740180263/cynthia_mue8ye.png'
        },
        {
            name: 'Aigbe Olotu',
            position: 'Independent Non-Executive Director',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1741688653/aigbe_nqygpg.png'
        },
        {
            name: 'Bako Gloria',
            position: 'Head, Corporate Services Division.',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1740180264/bako_lsnbbh.png'
        },
        {
            name: 'Angela Omeiza',
            position: 'Independent Non-Executive Director',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1741688852/angela_uzs0oz.png'
        },
        {
            name: 'Joshua James',
            position: 'Non-Executive Director',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1741689056/josh_dvdzjf.png'
        },
        {
            name: 'Israel Aibuedefe',
            position: 'Head, Business Support Division.',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1740180265/isreal_pxx2lw.png'
        },
    ]

    const excos = [
        {
            name: 'Dorcas Thorpe',
            position: 'Head, Strategy And Transformation',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1740180265/dorcas_odwwhe.png'
        },
        {
            name: 'Abel Ovenseri Enoguanmwonsa',
            position: 'Head, Corporate Services',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1741689366/abel_s5rsit.png'
        },
        {
            name: 'Emmanuel Igiehon',
            position: 'Chief Finance Officer',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1740180248/emma_czmso4.png'
        },
        {
            name: 'Oluremi Akande rpa.',
            position: 'Head, Corporate Communications & Branding.',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1740180255/remi_kusuqa.png'
        },
        {
            name: 'Peggy Idehen',
            position: 'Hod, Corporate Secretariat',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1741689484/peggy_noxyih.png'
        },
        {
            name: 'Olasukanmi Subair',
            position: 'Head, Internal Audit',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1741689597/ola_q4celz.png'
        },
        {
            name: 'Lillian Ehigiamusoe',
            position: 'Head, Operations',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1740180266/lillian_jpsnd9.png'
        },
    ]

  return (
    <div className='w-full'>

        <section
            className='flex items-center py-[96px] w-full '
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='w-[960px] mx-auto gap-6 flex flex-col items-center'>
                <div className='flex items-center justify-center gap-3 flex-col'>
                    <div className='w-[165px] h-[32px] flex items-center justify-center rounded-lg bg-[#E8FFF4]'>
                        <p className='font-hanken text-sm leading-[15px] text-[#00954B]'>LAPO's Board</p>
                    </div>
                    <p className='font-hanken text-[#000000] text-[54px] leading-[60px]'>
                        Board of Directors
                    </p>
                </div>
                <p className='text-[#444444] font-inter leading-[30px] w-[768px] mx-auto text-center text-[20px]'>
                    Meet the minds behind our mission to empower communities through 
                    accessible and sustainable financial solutions.
                </p>
            </div>
        </section>

        <section
            className='flex items-center pb-[96px] px-[96px] bg-[#fff] w-full '
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='grid grid-cols-4 gap-[32px]'>
                {board.map((item, index) => (
                    <div className='flex flex-col items-start gap-6 ' key={index}>
                        <img src={item.image} alt={item.name} className='w-[296px] h-[296px] object-cover rounded-t-[15px] rounded-t-[15px]' />
                        <div className='flex flex-col items-start gap-1'>
                            <p className='font-inter text-[#101828] font-medium text-[20px] leading-[30px]'>{item.name}</p>
                            <p className='font-inter text-[#6941C6] text-[18px] leading-[28px]'>{item.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section
            className='flex items-center py-[96px] w-full '
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='w-[960px] mx-auto gap-6 flex flex-col items-center'>
                <div className='flex items-center justify-center gap-3 flex-col'>
                    <div className='w-[165px] h-[32px] flex items-center justify-center rounded-lg bg-[#E8FFF4]'>
                        <p className='font-hanken text-sm leading-[15px] text-[#00954B]'>LAPO's Excos</p>
                    </div>
                    <p className='font-hanken text-[#000000] text-[54px] leading-[60px]'>
                        Executives
                    </p>
                </div>
                <p className='text-[#444444] font-inter leading-[30px] w-[768px] mx-auto text-center text-[20px]'>
                    Meet the minds behind our mission to empower communities through 
                    accessible and sustainable financial solutions.
                </p>
            </div>
        </section>

        <section
            className='flex items-center pb-[96px] px-[96px] bg-[#fff] w-full '
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='grid grid-cols-4 gap-[32px]'>
                {excos.map((item, index) => (
                    <div className='flex flex-col items-start gap-6 ' key={index}>
                        <img src={item.image} alt={item.name} className='w-[296px] h-[296px] object-cover rounded-t-[15px] rounded-t-[15px]' />
                        <div className='flex flex-col items-start gap-1'>
                            <p className='font-inter text-[#101828] font-medium text-[20px] leading-[30px]'>{item.name}</p>
                            <p className='font-inter text-[#6941C6] text-[18px] leading-[28px]'>{item.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section
            className='bg-[#FAFBFB] py-[96px] px-[80px] flex w-full'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex flex-col items-start gap-10'>
                <div className='flex flex-col items-start gap-5'>
                    <div className='flex flex-col items-start gap-3'>
                        <div className='bg-[#FDF2E9] rounded-[6px] w-[91px] p-1 h-[32px] flex items-center justify-center'>
                            <p className='font-hanken text-[#E78020] text-sm font-medium leading-[15px]'>Our People</p>
                        </div>
                        <p className='font-hanken text-[54px] leading-[44px] text-[#101828]'>We’re just getting started</p>
                    </div>
                    <p className='font-inter text-[20px] text-[#667085] leading-[30px]'>
                        Our people are at the center of everything we do to deliver innovative services to the 
                        institution's clients.
                        <span className='mt-5 block'>
                            At LAPO Microfinance Bank, we realize that our staffs are the heart and hands of the 
                            organization; therefore, we understand that building a world-class institution is only 
                            possible when we have the right people. It is for this reason that everything we do – from 
                            building systems to pioneering innovative products – is defined by our people.
                        </span>
                        <span className='mt-5 block'>
                            They make the Bank what it is today - a vibrant organization renowned for innovation, excellence, 
                            sustainability and superior financial performance.
                        </span>
                    </p>
                </div>
                <div className='flex items-center gap-3'>
                    <button
                        className='border-[#D0D5DD] drop-shadow border flex items-center justify-center w-[200px] h-[48px] rounded-[10px] bg-[#fff]'
                        type='button'
                    >
                        <p className='font-inter font-medium text-base text-[#344054] leading-6'>Join us at LAPO MFB</p>
                    </button>
                    <button
                        className='drop-shadow flex items-center justify-center w-[109px] bg-[#E78020] rounded-[10px] h-[48px]'
                        type='button'
                    >
                        <p className='font-inter text-base font-medium text-[#fff] leading-6'>About us</p>
                    </button>
                </div>

            </div>

        </section>

        <section
            className='flex items-center px-[64px] justify-between py-[112px]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex flex-col gap-4 w-[601px]' data-aos="fade-right">
                <p className='font-hanken font-medium text-base leading-[24px]'>The Changemakers</p>
                <p className='font-hanken text-[#000000] text-[54px] leading-[64px]'>
                    Making Finance Work for Everyone
                </p>
                <p className='text-[18px] font-inter text-[#000000] leading-[27px]'>
                    At LAPO Microfinance Bank, we’re committed to breaking financial barriers and ensuring 
                    that everyone—regardless of background—has access to the financial services they need to thrive. 
                    From small business owners to everyday individuals, our inclusive financial solutions are designed 
                    to empower communities, foster growth, and create lasting impact. Because when opportunities are 
                    accessible to all, we all move forward together.
                </p>
                <div className='flex items-center gap-6'>
                    <button
                        className='bg-[#E78020] flex flex-col items-center justify-center w-[120px] h-[48px] rounded-[10px]'
                    >
                        <p className='font-hanken text-[#fff] text-base font-semibold'>Learn</p>
                    </button>
                    <button
                        className='border-[#E78020] border flex flex-col items-center justify-center w-[120px] h-[48px] rounded-[10px]'
                    >
                        <p className='font-hanken text-[#E78020] text-base font-semibold'>Explore</p>
                    </button>
                </div>
            </div>
            <div data-aos="fade-left">
                <img src={Groupies} alt='Groupies' className='rounded-[25px] w-[531px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110' />
            </div>
        </section>

    </div>
  )
}

export default Changemakers