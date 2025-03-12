import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AwardGreen from "../../../assets/svg/award_green.svg"
import AwardGrey from "../../../assets/svg/award_grey.svg"
import MoneyBag from "../../../assets/svg/money_bag.svg"
import Medal from "../../../assets/svg/medal.svg"
import Graph from "../../../assets/svg/graph.svg"

const YearAwarded = () => {
    const [activeTab, setActiveTab] = useState(null)
    const [awards, setAwards] = useState([])
    const [uniqueYears, setUniqueYears] = useState([])
    const [loading, setLoading] = useState(false)
    const [prevPageUrl, setPrevPageUrl] = useState(null)
    const [nextPageUrl, setNextPageUrl] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)

    const awardStyles = [
        { bg: 'bg-[#F1C40F1A]', border: '#F1C40F' },
        { bg: 'bg-[#ECF0F1]', border: '#1A5276' },
        { bg: 'bg-[#F1ECEF]', border: '#761A48' }
    ]

    const icons = [Medal, Graph, MoneyBag]

    const fetchAward = async (url = "https://lapo.smhptech.com/api/v1/award") => {
        setLoading(true)
        try {
            const res = await axios.get(url)
            const data = res.data
            setAwards(data?.data || [])
            setPrevPageUrl(data.pagination?.prev_page_url)
            setNextPageUrl(data.pagination?.next_page_url)
            setCurrentPage(data.pagination?.current_page)
            
            // Extract and sort unique years
            const years = [...new Set(data.data?.map(award => award.year))]
            years.sort((a, b) => parseInt(b, 10) - parseInt(a, 10))
            setUniqueYears(years)
            
            // Set initial active tab
            if (years.length > 0 && !activeTab) {
                setActiveTab(years[0])
            }
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchAward()
    }, [])

    const filteredAwards = awards.filter(award => award.year === activeTab)

    return (
        <div className='w-full flex flex-col gap-[32px]'>
            <div className='flex flex-col gap-5'>
                <p className='font-hanken text-[24px] lg:text-[32px] leading-[44px] text-[#101828]'>Year Awarded</p>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2'>
                    {uniqueYears.map(year => (
                        <div 
                            key={year}
                            onClick={() => setActiveTab(year)}
                            className={`${activeTab === year 
                                ? "bg-[#00984C] rounded-lg" 
                                : "border border-x-0 border-t-0 border-[#34423B4D]"
                            } w-[197px] h-[64px] flex items-center gap-2 justify-center p-2 cursor-pointer`}
                        >
                            <img 
                                src={activeTab === year ? AwardGreen : AwardGrey} 
                                alt='Award' 
                                className='w-[21px] h-[26px]'
                            />
                            <p className={`${activeTab === year 
                                ? "text-[#fff]" 
                                : "text-[#00984C]"
                            } font-nunito font-semibold leading-7 text-[18px]`}>
                                {year}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col gap-5'>
                <p className='font-hanken text-[24px] lg:text-[32px] leading-[44px] text-[#101828]'>Awards</p>
                <div className='bg-[#FCFAF9] rounded-[20px] p-[40px] flex flex-col gap-[15px]'>
                    {filteredAwards.length === 0 ? (
                        <p className="text-center text-gray-500">No awards found for this year</p>
                    ) : (
                        filteredAwards.map((award, index) => {
                            const isFirst = index === 0
                            const style = awardStyles[index % awardStyles.length]
                            const icon = icons[index % icons.length]

                            return (
                                <div
                                    key={award.id}
                                    className={`flex items-center gap-2.5 p-5 ${style.bg} ${
                                        isFirst ? 'rounded-lg border' : 'border-l-4 border-y-0 border-r-0'
                                    }`}
                                    style={{ borderColor: style.border }}
                                >
                                    <img src={icon} alt={award.name} className='w-6 h-6' />
                                    <div>
                                        <p className='font-inter text-base text-[#2C3E50] font-semibold'>
                                            {award.name}
                                        </p>
                                        <p className='font-inter text-sm text-[#2C3E50] mt-1'>
                                            {award.body}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </div>
    )
}

export default YearAwarded