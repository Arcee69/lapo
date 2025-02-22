import React, { useState } from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'

import Plus from "../../../assets/svg/plus.svg"
import Multiply from "../../../assets/svg/multiply.svg"

import Groupies from "../../../assets/png/groupies.png"

const Governance = () => {
    const [openDropdownOne, setOpenDropdownOne] = useState(false)
    const [openDropdownTwo, setOpenDropdownTwo] = useState(false)

    const handleTabOne = () => {
        setOpenDropdownOne(!openDropdownOne)
    }

    const handleTabTwo = () => {
        // setOpenDropdownTwo(!openDropdownTwo)
    }

  return (
    <div className='w-full'>
        <section
            className='flex items-center py-[96px] w-full px-[80px] bg-[#fff]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex w-[960px] mx-auto gap-6 flex-col items-center'>
                <div className='flex items-center justify-center gap-3 flex-col'>
                    <div className='w-[105px] h-[32px] flex items-center justify-center rounded-lg bg-[#E8FFF4]'>
                        <p className='font-hanken text-sm leading-[15px] text-[#00954B]'>Governance</p>
                    </div>
                    <p className='font-hanken text-[#000000] text-[54px] leading-[60px]'>
                        Our Governance Structure
                    </p>
                </div>
                <p className='font-inter text-[20px] text-center text-[#667085] leading-[30px]'>
                    LAPO Microfinance Bank's governance framework aligns management with shareholder 
                    interests while balancing stakeholder needs. The framework provides strategic direction, 
                    ensures regulatory compliance, and is built on accountability, transparency, independence, 
                    fairness, and discipline.
                    <span className='mt-5 block'>
                        The Board and its committees regularly review governance policies to reflect changes in 
                        regulations and best practices. Performance is assessed through compliance reviews with 
                        CBN and FRCN codes.
                    </span>
                    <span className='mt-5 block'>
                        The Bank believes sound corporate practices are essential for transparency, 
                        attracting investment, protecting shareholders and stakeholders, and enhancing value.
                    </span>
                </p>
            </div>
        </section>

        <section
            className='flex flex-col gap-4 px-[125px] pb-[192px]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >

            <div className='bg-[#F9FBFA] flex items-start gap-6 p-8 border-[7px] border-[#00954B] rounded-tl-2xl rounded-bl-2xl border-y-0 border-r-0'>
                {openDropdownOne ? <img src={Multiply} alt='Multiply' className='w-8 h-8 cursor-pointer' onClick={handleTabOne} /> : <img src={Plus} alt='Plus' className='w-8 h-8 cursor-pointer' onClick={handleTabOne} />}
                <div className='flex flex-col items-start gap-4'>
                    <p className='font-inter text-[#101828] text-[28px] leading-7'>
                        The Board
                    </p>
                    {openDropdownOne && (   
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            The entire Board members of the Microfinance Bank actively play a pivotal role 
                            in the governance of the Bank, through the actualization and performance of their 
                            respective roles, in other to achieve a clear-cut success.
                        </p>
                    )}
                </div>
            </div>

            <div className='bg-[#F9FBFA] flex items-start gap-6 p-8 border-[7px] border-[#F99650] rounded-tl-2xl rounded-bl-2xl border-y-0 border-r-0'>
                {openDropdownTwo ? <img src={Multiply} alt='Multiply' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} /> : <img src={Plus} alt='Plus' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} />}
                <div className='flex flex-col items-start gap-4'>
                    <p className='font-inter text-[#101828] text-[28px] leading-7'>
                        Board of Directors
                    </p>
                    {openDropdownTwo && (   
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            The entire Board members of the Microfinance Bank actively play a pivotal role 
                            in the governance of the Bank, through the actualization and performance of their 
                            respective roles, in other to achieve a clear-cut success.
                        </p>
                    )}
                </div>
            </div>
            
            <div className='bg-[#F9FBFA] flex items-start gap-6 p-8 border-[7px] border-[#00954B] rounded-tl-2xl rounded-bl-2xl border-y-0 border-r-0'>
                {openDropdownTwo ? <img src={Multiply} alt='Multiply' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} /> : <img src={Plus} alt='Plus' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} />}
                <div className='flex flex-col items-start gap-4'>
                    <p className='font-inter text-[#101828] text-[28px] leading-7'>
                        Board Structure
                    </p>
                    {openDropdownTwo && (   
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            The entire Board members of the Microfinance Bank actively play a pivotal role 
                            in the governance of the Bank, through the actualization and performance of their 
                            respective roles, in other to achieve a clear-cut success.
                        </p>
                    )}
                </div>
            </div>

            <div className='bg-[#F9FBFA] flex items-start gap-6 p-8 border-[7px] border-[#F99650] rounded-tl-2xl rounded-bl-2xl border-y-0 border-r-0'>
                {openDropdownTwo ? <img src={Multiply} alt='Multiply' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} /> : <img src={Plus} alt='Plus' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} />}
                <div className='flex flex-col items-start gap-4'>
                    <p className='font-inter text-[#101828] text-[28px] leading-7'>
                        Responsibilities of The Board
                    </p>
                    {openDropdownTwo && (   
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            The entire Board members of the Microfinance Bank actively play a pivotal role 
                            in the governance of the Bank, through the actualization and performance of their 
                            respective roles, in other to achieve a clear-cut success.
                        </p>
                    )}
                </div>
            </div>

            <div className='bg-[#F9FBFA] flex items-start gap-6 p-8 border-[7px] border-[#00954B] rounded-tl-2xl rounded-bl-2xl border-y-0 border-r-0'>
                {openDropdownTwo ? <img src={Multiply} alt='Multiply' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} /> : <img src={Plus} alt='Plus' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} />}
                <div className='flex flex-col items-start gap-4'>
                    <p className='font-inter text-[#101828] text-[28px] leading-7'>
                        Board Committees
                    </p>
                    {openDropdownTwo && (   
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            The entire Board members of the Microfinance Bank actively play a pivotal role 
                            in the governance of the Bank, through the actualization and performance of their 
                            respective roles, in other to achieve a clear-cut success.
                        </p>
                    )}
                </div>
            </div>

            <div className='bg-[#F9FBFA] flex items-start gap-6 p-8 border-[7px] border-[#F99650] rounded-tl-2xl rounded-bl-2xl border-y-0 border-r-0'>
                {openDropdownTwo ? <img src={Multiply} alt='Multiply' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} /> : <img src={Plus} alt='Plus' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} />}
                <div className='flex flex-col items-start gap-4'>
                    <p className='font-inter text-[#101828] text-[28px] leading-7'>
                        Board Audit Committee
                    </p>
                    {openDropdownTwo && (   
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            The entire Board members of the Microfinance Bank actively play a pivotal role 
                            in the governance of the Bank, through the actualization and performance of their 
                            respective roles, in other to achieve a clear-cut success.
                        </p>
                    )}
                </div>
            </div>

            <div className='bg-[#F9FBFA] flex items-start gap-6 p-8 border-[7px] border-[#00954B] rounded-tl-2xl rounded-bl-2xl border-y-0 border-r-0'>
                {openDropdownTwo ? <img src={Multiply} alt='Multiply' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} /> : <img src={Plus} alt='Plus' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} />}
                <div className='flex flex-col items-start gap-4'>
                    <p className='font-inter text-[#101828] text-[28px] leading-7'>
                        Risk Management Committee
                    </p>
                    {openDropdownTwo && (   
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            The entire Board members of the Microfinance Bank actively play a pivotal role 
                            in the governance of the Bank, through the actualization and performance of their 
                            respective roles, in other to achieve a clear-cut success.
                        </p>
                    )}
                </div>
            </div>

            <div className='bg-[#F9FBFA] flex items-start gap-6 p-8 border-[7px] border-[#F99650] rounded-tl-2xl rounded-bl-2xl border-y-0 border-r-0'>
                {openDropdownTwo ? <img src={Multiply} alt='Multiply' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} /> : <img src={Plus} alt='Plus' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} />}
                <div className='flex flex-col items-start gap-4'>
                    <p className='font-inter text-[#101828] text-[28px] leading-7'>
                        Nomination and Remuneration Committee
                    </p>
                    {openDropdownTwo && (   
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            The entire Board members of the Microfinance Bank actively play a pivotal role 
                            in the governance of the Bank, through the actualization and performance of their 
                            respective roles, in other to achieve a clear-cut success.
                        </p>
                    )}
                </div>
            </div>

            <div className='bg-[#F9FBFA] flex items-start gap-6 p-8 border-[7px] border-[#00954B] rounded-tl-2xl rounded-bl-2xl border-y-0 border-r-0'>
                {openDropdownTwo ? <img src={Multiply} alt='Multiply' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} /> : <img src={Plus} alt='Plus' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} />}
                <div className='flex flex-col items-start gap-4'>
                    <p className='font-inter text-[#101828] text-[28px] leading-7'>
                        Board Credit Committee
                    </p>
                    {openDropdownTwo && (   
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            The entire Board members of the Microfinance Bank actively play a pivotal role 
                            in the governance of the Bank, through the actualization and performance of their 
                            respective roles, in other to achieve a clear-cut success.
                        </p>
                    )}
                </div>
            </div>

            <div className='bg-[#F9FBFA] flex items-start gap-6 p-8 border-[7px] border-[#F99650] rounded-tl-2xl rounded-bl-2xl border-y-0 border-r-0'>
                {openDropdownTwo ? <img src={Multiply} alt='Multiply' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} /> : <img src={Plus} alt='Plus' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} />}
                <div className='flex flex-col items-start gap-4'>
                    <p className='font-inter text-[#101828] text-[28px] leading-7'>
                        Finance and General Purpose Committee
                    </p>
                    {openDropdownTwo && (   
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            The entire Board members of the Microfinance Bank actively play a pivotal role 
                            in the governance of the Bank, through the actualization and performance of their 
                            respective roles, in other to achieve a clear-cut success.
                        </p>
                    )}
                </div>
            </div>
            
            <div className='bg-[#F9FBFA] flex items-start gap-6 p-8 border-[7px] border-[#00954B] rounded-tl-2xl rounded-bl-2xl border-y-0 border-r-0'>
                {openDropdownTwo ? <img src={Multiply} alt='Multiply' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} /> : <img src={Plus} alt='Plus' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} />}
                <div className='flex flex-col items-start gap-4'>
                    <p className='font-inter text-[#101828] text-[28px] leading-7'>
                        Environment, Social and Governance Committee
                    </p>
                    {openDropdownTwo && (   
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            The entire Board members of the Microfinance Bank actively play a pivotal role 
                            in the governance of the Bank, through the actualization and performance of their 
                            respective roles, in other to achieve a clear-cut success.
                        </p>
                    )}
                </div>
            </div>

            <div className='bg-[#F9FBFA] flex items-start gap-6 p-8 border-[7px] border-[#F99650] rounded-tl-2xl rounded-bl-2xl border-y-0 border-r-0'>
                {openDropdownTwo ? <img src={Multiply} alt='Multiply' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} /> : <img src={Plus} alt='Plus' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} />}
                <div className='flex flex-col items-start gap-4'>
                    <p className='font-inter text-[#101828] text-[28px] leading-7'>
                        Board Information Technology Committee
                    </p>
                    {openDropdownTwo && (   
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            The entire Board members of the Microfinance Bank actively play a pivotal role 
                            in the governance of the Bank, through the actualization and performance of their 
                            respective roles, in other to achieve a clear-cut success.
                        </p>
                    )}
                </div>
            </div>

            <div className='bg-[#F9FBFA] flex items-start gap-6 p-8 border-[7px] border-[#00954B] rounded-tl-2xl rounded-bl-2xl border-y-0 border-r-0'>
                {openDropdownTwo ? <img src={Multiply} alt='Multiply' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} /> : <img src={Plus} alt='Plus' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} />}
                <div className='flex flex-col items-start gap-4'>
                    <p className='font-inter text-[#101828] text-[28px] leading-7'>
                        Executive Management Committee
                    </p>
                    {openDropdownTwo && (   
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            The entire Board members of the Microfinance Bank actively play a pivotal role 
                            in the governance of the Bank, through the actualization and performance of their 
                            respective roles, in other to achieve a clear-cut success.
                        </p>
                    )}
                </div>
            </div>

            <div className='bg-[#F9FBFA] flex items-start gap-6 p-8 border-[7px] border-[#F99650] rounded-tl-2xl rounded-bl-2xl border-y-0 border-r-0'>
                {openDropdownTwo ? <img src={Multiply} alt='Multiply' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} /> : <img src={Plus} alt='Plus' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} />}
                <div className='flex flex-col items-start gap-4'>
                    <p className='font-inter text-[#101828] text-[28px] leading-7'>
                        Management Committee
                    </p>
                    {openDropdownTwo && (   
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            The entire Board members of the Microfinance Bank actively play a pivotal role 
                            in the governance of the Bank, through the actualization and performance of their 
                            respective roles, in other to achieve a clear-cut success.
                        </p>
                    )}
                </div>
            </div>

            <div className='bg-[#F9FBFA] flex items-start gap-6 p-8 border-[7px] border-[#00954B] rounded-tl-2xl rounded-bl-2xl border-y-0 border-r-0'>
                {openDropdownTwo ? <img src={Multiply} alt='Multiply' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} /> : <img src={Plus} alt='Plus' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} />}
                <div className='flex flex-col items-start gap-4'>
                    <p className='font-inter text-[#101828] text-[28px] leading-7'>
                        Executive Risk Management Committee
                    </p>
                    {openDropdownTwo && (   
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            The entire Board members of the Microfinance Bank actively play a pivotal role 
                            in the governance of the Bank, through the actualization and performance of their 
                            respective roles, in other to achieve a clear-cut success.
                        </p>
                    )}
                </div>
            </div>

            <div className='bg-[#F9FBFA] flex items-start gap-6 p-8 border-[7px] border-[#F99650] rounded-tl-2xl rounded-bl-2xl border-y-0 border-r-0'>
                {openDropdownTwo ? <img src={Multiply} alt='Multiply' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} /> : <img src={Plus} alt='Plus' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} />}
                <div className='flex flex-col items-start gap-4'>
                    <p className='font-inter text-[#101828] text-[28px] leading-7'>
                        Assets and Liability Committee
                    </p>
                    {openDropdownTwo && (   
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            The entire Board members of the Microfinance Bank actively play a pivotal role 
                            in the governance of the Bank, through the actualization and performance of their 
                            respective roles, in other to achieve a clear-cut success.
                        </p>
                    )}
                </div>
            </div>

            <div className='bg-[#F9FBFA] flex items-start gap-6 p-8 border-[7px] border-[#00954B] rounded-tl-2xl rounded-bl-2xl border-y-0 border-r-0'>
                {openDropdownTwo ? <img src={Multiply} alt='Multiply' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} /> : <img src={Plus} alt='Plus' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} />}
                <div className='flex flex-col items-start gap-4'>
                    <p className='font-inter text-[#101828] text-[28px] leading-7'>
                        Executive Credit Committee
                    </p>
                    {openDropdownTwo && (   
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            The entire Board members of the Microfinance Bank actively play a pivotal role 
                            in the governance of the Bank, through the actualization and performance of their 
                            respective roles, in other to achieve a clear-cut success.
                        </p>
                    )}
                </div>
            </div>

            <div className='bg-[#F9FBFA] flex items-start gap-6 p-8 border-[7px] border-[#F99650] rounded-tl-2xl rounded-bl-2xl border-y-0 border-r-0'>
                {openDropdownTwo ? <img src={Multiply} alt='Multiply' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} /> : <img src={Plus} alt='Plus' className='w-8 h-8 cursor-pointer' onClick={handleTabTwo} />}
                <div className='flex flex-col items-start gap-4'>
                    <p className='font-inter text-[#101828] text-[28px] leading-7'>
                        Information Technology Steering Committee
                    </p>
                    {openDropdownTwo && (   
                        <p className='font-inter text-[#667085] text-base leading-6'>
                            The entire Board members of the Microfinance Bank actively play a pivotal role 
                            in the governance of the Bank, through the actualization and performance of their 
                            respective roles, in other to achieve a clear-cut success.
                        </p>
                    )}
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
                <div className='w-[170px] bg-[#E8FFF4] h-[32px] rounded-lg p-1 flex items-center justify-center'>
                    <p className='font-hanken font-medium text-sm text-[#00954B] leading-[15px]'>Corporate Governance</p>
                </div>
                <p className='font-hanken text-[#000000] text-[54px] leading-[64px]'>
                    Our Commitment to Financial Inclusion
                </p>
                <p className='text-[18px] font-inter text-[#000000] leading-[27px]'>
                    At LAPO Microfinance Bank, we believe that everyone deserves access to financial services. 
                    Our philosophy centers on empowering individuals and communities through inclusive financial solutions.
                </p>
                <div className='flex items-center gap-6'>
                <div className='w-[91px] h-[48px] border border-[#000000] flex items-center justify-center'>
                    <p className='font-inter text-[#000000] text-base leading-6'>Learn</p>
                </div>
                <div className='flex items-center gap-2'>
                    <p className="font-inter text-base text-[#000000]" >Explore</p>
                    <IoChevronForwardOutline />
                </div>
                </div>
            </div>
            <div data-aos="fade-left">
                <img src={Groupies} alt='Groupies' className='rounded-[25px] w-[531px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110' />
            </div>
        </section>

    </div>
  )
}

export default Governance
