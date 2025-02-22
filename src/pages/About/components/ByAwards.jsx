import React from 'react'

import MoneyBag from "../../../assets/svg/money_bag.svg"
import Medal from "../../../assets/svg/medal_brown.svg"
import Graph from "../../../assets/svg/graph.svg"
import Star from "../../../assets/svg/star_big.svg"

const ByAwards = () => {
  return (
    <div className='w-full'>
        <div className='flex flex-col gap-5'>
            <p className='font-hanken text-[32px] leading-[44px] text-[#101828]'>Awards</p>
            <div className='bg-[#FCFAF9] rounded-[20px] p-[40px] flex flex-col gap-[15px]'>
                <div className='flex items-center rounded-lg drop-shadow bg-[#FFFFFF] gap-[22px] px-6 py-[20px]'>
                    <div className='flex items-center gap-[11px]'>
                        <img src={Medal} alt='Medal' className='w-[102px] h-[102px]' />
                        <p className="inline-block bg-gradient-to-b text-[#D35400] to-[#F99650] bg-clip-text text-transparent font-bold text-[73px]">
                            9
                        </p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='font-hanken text-[#0F2145] font-bold leading-6 text-[18px]'>Microfinance Bank of the Year Winner (BAFI Awards)</p>
                        <p className='font-inter text-[#43526E] text-xs'>
                            2023, 2022, 2021, 2020, 2019, 2017, 2016, 2015, 2014
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-[15px]'>
        
                    <div className='flex items-center rounded-lg drop-shadow bg-[#FFFFFF] gap-[22px] px-6 py-[20px]'>
                        <div className='flex items-center gap-[11px]'>
                            <img src={MoneyBag} alt='MoneyBag' className='w-[102px] h-[102px]' />
                            <p className="inline-block bg-gradient-to-b text-[#D35400] to-[#F99650] bg-clip-text text-transparent font-bold text-[73px]">
                                5
                            </p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='font-hanken text-[#0F2145] text-nowrap font-bold leading-6 text-[18px]'>Financial Inclusion and Support Awards:</p>
                            <p className='font-inter text-[#43526E] text-xs'>
                                2023, 2022, 2021, 2020, 2016
                            </p>
                        </div>
                    </div>
 
                    <div className='flex items-center rounded-lg drop-shadow bg-[#FFFFFF] gap-[22px] px-6 py-[20px]'>
                        <div className='flex items-center gap-[11px]'>
                            <img src={Graph} alt='Graph' className='w-[102px] h-[102px]' />
                            <p className="inline-block bg-gradient-to-b text-[#D35400] to-[#F99650] bg-clip-text text-transparent font-bold text-[73px]">
                                2
                            </p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='font-hanken text-[#0F2145] font-bold leading-6 text-nowrap text-[18px]'>Impact and Performance Awards:</p>
                            <p className='font-inter text-[#43526E] text-xs'>
                                2023, 2021
                            </p>
                        </div>
                    </div>
 
                </div>
                <div className='flex items-center relative rounded-lg drop-shadow bg-[#FFFFFF] gap-[22px] px-6 py-[20px]'>
                    <div className='flex items-center gap-[11px]'>
                        <img src={Star} alt='Star' className='w-[102px] h-[102px]' />
                        <p className="inline-block bg-gradient-to-b text-[#D35400] to-[#F99650] bg-clip-text text-transparent font-bold text-[73px]">
                            3
                        </p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='font-hanken text-[#0F2145] font-bold leading-6 text-[18px]'>Specialized Recognitions:</p>
                        <p className='font-inter text-[#43526E] text-xs'>
                            2021, 2020, 2019
                        </p>
                    </div>
                    <img src="https://res.cloudinary.com/dairsbzlv/image/upload/v1740192262/shape_ssfamp.png" alt='Shape' className='absolute right-0 bottom-0 w-[518px] h-[118px]' />
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default ByAwards