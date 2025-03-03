import React, { useEffect, useState } from 'react';
import MoneyBag from "../../../assets/svg/money_bag.svg";
import Medal from "../../../assets/svg/medal_brown.svg";
import Graph from "../../../assets/svg/graph.svg";
import Star from "../../../assets/svg/star_big.svg";
import axios from 'axios';

const ByAwards = () => {
    const [awards, setAwards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [prevPageUrl, setPrevPageUrl] = useState(null);
    const [nextPageUrl, setNextPageUrl] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchAward = async (url = "https://lapo.smhptech.com/api/v1/award") => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            const data = res.data;
            setAwards(data?.data || []);
            setPrevPageUrl(data.pagination?.prev_page_url);
            setNextPageUrl(data.pagination?.next_page_url);
            setCurrentPage(data.pagination?.current_page);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAward();
    }, []);

    // Group awards by name and collect years
    const groupedAwards = awards.reduce((acc, award) => {
        if (!acc[award.name]) {
            acc[award.name] = [];
        }
        acc[award.name].push(award.year);
        return acc;
    }, {});

    // Convert grouped object into array and sort years descending
    const awardsList = Object.entries(groupedAwards).map(([name, years]) => ({
        name,
        years: [...new Set(years)].sort((a, b) => b - a),
        count: years.length
    }));

    // Assign icons based on award name (customize as needed)
    const getIcon = (name) => {
        if (name.includes("Microfinance Bank")) return Medal;
        if (name.includes("Financial Inclusion")) return MoneyBag;
        if (name.includes("Impact and Performance")) return Graph;
        return Star;
    };

    return (
        <div className='w-full'>
            <div className='flex flex-col gap-5'>
                <p className='font-hanken text-[32px] leading-[44px] text-[#101828]'>Awards</p>
                <div className='bg-[#FCFAF9] rounded-[20px] p-[40px] flex flex-col gap-[15px]'>
                    {/* Render each award group dynamically */}
                    {awardsList.map((award, index) => (
                        <div 
                            key={award.name}
                            className={`flex items-center rounded-lg drop-shadow bg-[#FFFFFF] gap-[22px] px-6 py-[20px] ${
                                // Apply side-by-side layout for specific indices if needed
                                index % 3 === 1 ? 'flex-row' : ''
                            }`}
                        >
                            <div className='flex items-center gap-[11px]'>
                                <img 
                                    src={getIcon(award.name)} 
                                    alt="Award" 
                                    className='w-[102px] h-[102px]' 
                                />
                                <p className="inline-block bg-gradient-to-b text-[#D35400] to-[#F99650] bg-clip-text text-transparent font-bold text-[73px]">
                                    {award.count}
                                </p>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <p className='font-hanken text-[#0F2145] font-bold leading-6 text-[18px]'>
                                    {award.name}
                                </p>
                                <p className='font-inter text-[#43526E] text-xs'>
                                    {award.years.join(', ')}
                                </p>
                            </div>
                            {/* Background shape for the last item (customize as needed) */}
                            {index === awardsList.length - 1 && (
                                <img 
                                    src="https://res.cloudinary.com/dairsbzlv/image/upload/v1740192262/shape_ssfamp.png" 
                                    alt='Shape' 
                                    className='absolute right-0 bottom-0 w-[418px] h-[118px]' 
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ByAwards;