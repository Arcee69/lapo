import React, { useState } from 'react'

import ModalPop from "../../../components/modal/modalPop"
import Profile from "./Profile"

import Groupies from "../../../assets/png/groupies.png"

import { IoChevronForwardOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { FaExternalLinkAlt } from "react-icons/fa";

const Changemakers = () => {
    const [openModal, setOpenModal] = useState(false)
    const [data, setData] = useState([])


    const navigate = useNavigate()

    const board = [
        {
            name: 'Godwin Eseiwi Ehigiamusoe',
            position: 'Board Chairman',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1741960790/chairman_uiyhij.png',
            profile: `<div class="flex flex-col gap-5">
                <p class="font-hanken font-semibold text-base text-[#000]">Godwin Eseiwi Ehigiamusoe - Board Chairman</p>
                <p class="text-[#444444] font-inter text-sm">
                    Godwin Eseiwi Ehigiamusoe is an acknowledged microfinance practitioner and social entrepreneur. 
                    His impactful works have significantly expanded the frontiers of finance. 
                    In the late 1980s, Dr. Ehigiamusoe founded Lift Above Poverty Organisation (LAPO) a poverty-focused 
                    development organization, in response to the spike in poverty; a fall-out of the implementation of 
                    the Structural Adjustment Programme.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    LAPO has evolved into a network of mutually reinforcing institutions in microfinance, 
                    micro-insurance, micro-leasing, healthcare, and education meeting the needs of 
                    millions in Nigeria and Sierra Leone.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    Dr. Ehigiamusoe contributed to the development of the microfinance sector in Nigeria and beyond; 
                    he was actively involved in the formulation of Nigeria’s Microfinance Policy and Regulatory 
                    Framework and as well as in building capacity for key actors in the sector.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    He earned a doctorate degree in policy and development studies with emphasis on policy 
                    instruments and financial inclusion. He is a certified microfinance banker and a fellow 
                    of the Chartered Institute of Bankers of Nigeria. In 2008, he won the FATE Foundation’s 
                    Model Entrepreneur, and Prof Schwab Foundation’s Outstanding Social Entrepreneur – Africa-2010. 
                    In 2014, has won the Distinguished Alumni Award of the Lagos Business School. 
                    In 2016, he was honoured by the University of Benin, Benin City, Nigeria, his alma mater, with D.Sc. 
                    (honoris causa).
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    He has authored books on non-profit, microfinance and enterprise development
                </p>
            </div>`
        },
        {
            name: 'Cynthia Ikponmwosa',
            position: 'Managing Director/CEO',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1745692517/MD_mklirj.jpg',
            profile: `<div class="flex flex-col gap-5">
                <p class="font-hanken font-semibold text-base text-[#000]">Cynthia Ikponmwosa - Managing Director</p>
                <p class="text-[#444444] font-inter text-sm">
                    Mrs. Ikponmwosa Iranmwinran Cynthia holds a Bachelor of Arts degree in English from the 
                    Edo State University (Ambrose Alli University), Ekpoma (1996) and a Master of Law degree 
                    in Corporate Governance and Law from the University of Portsmouth, United Kingdom (2014). 
                    She has attended several national and international trainings including the Blueprint 
                    Certified (ICSA) training by the University of Portsmouth.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    She has over twenty-three years’ experience in the microfinance sector with rich pedigree in good 
                    Corporate Governance practice. She anchored the transformation process of Lift Above Poverty Organisation 
                    (LAPO) from an NGO to a regulated entity (LAPO MfB). She is a member of the Institute of Chartered Secretaries 
                    and Administration (ICSA) London and Chartered Institute of Bankers of Nigeria (CIBN).
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    She joined the Bank in September, 2001 and rose through various ranks to become Executive Director, 
                    Corporate Services until her appointment as Managing Director/Chief Executive Officer of the Bank 
                    in 2020.
                </p>
            </div>`
        },
        {
            name: 'Joshua James Etopidiok',
            position: 'Non-Executive Director',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1741689056/josh_dvdzjf.png',
            profile: `<div class="flex flex-col gap-5">
                <p class="font-hanken font-semibold text-base text-[#000]">Joshua James Etopidiok - Non-Executive Director</p>
                <p class="text-[#444444] font-inter text-sm">
                    Mr. Joshua James Etopidiok holds a Bachelor's Degree in Banking and Finance from the 
                    University of Calabar (1983), a Master of Business Administration Degree in Investment 
                    Banking from the University of Lagos, Nigeria (1989), and a Diploma in Microfinance from the 
                    Antoneo De Manila University, Philippines (2008). 
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    He has attended several executive management programmes at leading global institutions including 
                    Federal Deposit Insurance Corporation(USA), Global Management and Consulting Services(London), 
                    Federal Reserve Bank(USA), International Monetary Fund(USA), Darden School of Business(USA), 
                    Financial Institutions Training Centre(Lagos), Royal Institute of Public Administration, (London), 
                    Islamic Finance Institute (South Africa) and Central Bank of Nigeria. 
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    He is a Fellow of the Chartered Institute of Bankers (CIBN), 
                    Association of Enterprise Risk Management (AERM), the Nigerian Institute of Management (NIM), 
                    and the Institute of Chartered Economists of Nigeria (ICEN). 
                    Joshua has a successful career spanning over three and half decades and retired as 
                    Director of Special Insured Institutions Department/Controller Lagos Office (CLO), 
                    Nigeria Deposit Insurance Corporation (NDIC). He has held Ad-hoc responsibilities as 
                    Executive Director, Operations in Afex Bank Plc, and Group Merchant Bank.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    Joshua is a conscientious leader who is reliable and a stickler for ethical governance. 
                    He is a seasoned and astute financial strategist with cognate and varied experience in Finance, 
                    Insurance, Risk Management, Compliance, Operations, and Strategic Management.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    He joined the Board of LAPO Microfinance Bank on 13th May 2024 and Chairs the Board Credit 
                    Committee and Board Risk Management Committee.
                </p>
            </div>`
        },
        {
            name: 'Aigbe Olotu',
            position: 'Independent Non-Executive Director',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1741688653/aigbe_nqygpg.png',
            profile: `<div class="flex flex-col gap-5">
                <p class="font-hanken font-semibold text-base text-[#000]">Aigbe Olotu - Independent Non-Executive Director</p>
                <p class="text-[#444444] font-inter text-sm">
                    Mr. Olotu Aigbe holds a Bachelor of Science degree in Geology from the University of Calabar (1982). 
                    He is a fellow of the Institute of Chartered Accountants of Nigeria (ICAN) and Chartered Institute of 
                    Taxation of Nigeria (CITN).
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    He has over thirty years’ cognate experience which cuts across Accounting, Auditing, 
                    Taxation and Financial Advisory. He currently serves as a consultant for Sahara Power Group Limited,
                    Nigeria.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    Mr. Olotu joined the Board of LAPO Microfinance Bank Limited as an 
                    Independent Non-Executive Director (INED) on 24th October, 2019. He is currently the 
                    Chairman of the Board Audit Committee, Board Finance and General Purpose Committee and 
                    the Information Technology Board Committee.
                </p>
            </div>`
        },
        {
            name: 'Angela Omeiza',
            position: 'Independent Non-Executive Director',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1741688852/angela_uzs0oz.png',
            profile: `<div class="flex flex-col gap-5">
                <p class="font-hanken font-semibold text-base text-[#000]">Angela Omeiza - Independent Non- Executive Director </p>
                <p class="text-[#444444] font-inter text-sm">
                    Ms. Angela Omeiza holds a Bachelors Degree, in Commercial Law from the University of Westminster, 
                    United Kingdom (2007), a Masters Degree in Commercial & Corporate Law from Queen Mary, 
                    University of London United Kingdom (2008), obtained her Barrister-at-Law (B.L) 
                    qualification from the Nigerian Law School Abuja, (2010) and a member of the Nigerian Bar Association.
                    She is a 2019 Mandela Washington Fellow of the U.S Department of State, with a certificate in 
                    Leadership in Civic Engagement from Indiana University, USA. She has over ten years of experience 
                    in Corporate & Commercial legal practice.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    Angela is a notable International Development Expert leading transformative initiatives in 
                    Nigeria through Jela's Development Initiatives, where she serves as CEO/Founder. 
                    Her focus includes sustainable water access, blood donation, youth empowerment, and mental health, 
                    collaborating with global partners impacting over 50,000 people directly. 
                    With expertise in program design, project management, policy development and analysis, 
                    fundraising and stakeholder engagement, she has a track record of delivering impactful 
                    solutions for governments and non-profits. Angela is the solution architect of “J Blood Match”, 
                    an app working with Google’s API to connect blood donors with recipients using their blood type 
                    and location LIVE nationwide.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    Angela is also a seasoned media consultant with extensive experience in radio broadcasting where 
                    she addressed various social issues and recognized as a social impact and equity advocate reaching 
                    over 1 million people.She excels in developing and implementing effective media strategies, 
                    including crisis communications, reputation management, media training, and content creation. 
                    Angela has a proven track record of delivering high - impact campaigns for clients in diverse 
                    sectors such as aviation, healthcare, education, and local and international non - profits.Her 
                    collaborative nature and adeptness in complex media environments have established her as a trusted 
                    advisor and strategic partner.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                   She has received various awards and recognitions amongst them being listed by the Guardian 
                   Newspaper as 100 most Inspiring Women in Nigeria 2018, Amazon of the Year Woman on Fire 2018, 
                   Donors for Africa Top 100 Women in Development 2020, The Bridge Church Excellence Award 2021 
                   and received the highest recognition by the Abuja Municipal Rotary Club as an Honorary Member in 2021.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                   Ms.Angela Omeiza displays exemplary leadership and strategic acumen and joined the Board of 
                   LAPO Microfinance Bank Limited on 17th July 2024. She is currently the Chairperson of the Board 
                   Environmental, Social, and Governance Committee and Board Nomination and Remuneration Committee.
                </p>
            </div>`
        },
        {
            name: 'Israel Aibuedefe',
            position: 'Executive Director, Business Support Division.',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1745691762/MR_ISRAEL_evwvwf.jpg',
            profile: `<div class="flex flex-col gap-5">
                <p class="font-hanken font-semibold text-base text-[#000]">Israel Aibuedefe - Executive Director, Business Support</p>
                <p class="text-[#444444] font-inter text-sm">
                    Israel holds a bachelor’s degree in computer science from Lagos State University, Nigeria, 
                    with an MBA in Business Administration from Rome Business School and an ongoing DBA in 
                    Strategic Management at EMAS Business School.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    He has attended several international trainings and taken various courses at London Business School 
                    in the UK, Gordon Institute of Business Science in South Africa, including the prestigious Back to 
                    Boulder at Boulder Institute in Washington DC, United States of America.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    He is a member of the Chartered Institute of Bankers Nigeria (CIBN), and Chartered 
                    Institute of Directors (CIoD).
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    Israel has over twenty years of work experience from reputable organizations such as Coca-Cola 
                    Nigeria Limited, Nigerian Bottling Company, Cadbury Nigeria, Nokia West Africa, and Microsoft, 
                    which spans Business Intelligence, Technology Solutions, Sales Operations, Retail Analytics, 
                    Planning, and Forecasting.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    He joined LAPO in 2015 and rose through various ranks until his appointment as Executive Director, 
                    Business Support Services on September 13, 2023.
                </p>
            </div>`
        },
        {
            name: 'Bako Gloria',
            position: 'Executive Director, Corporate Services Division.',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1740180264/bako_lsnbbh.png',
            profile: `<div class="flex flex-col gap-5">
                <p class="font-hanken font-semibold text-base text-[#000]">Gloria Bako - Executive Director, Corporate Services</p>
                <p class="text-[#444444] font-inter text-sm">
                    Mrs. Gloria Bako holds a bachelor’s degree in Economics from the University of Uyo (1994) and a 
                    Masters of Economics from the University of Benin (2000). She has attended several national and 
                    international trainings including Risk Governance course by Basel Accord, Dubai, 
                    United Arab Emirates (2018), Strategic Management course, Frankfurt Business School (2023), 
                    Board Risk Governance Workshop by Conrad (2024), and the Back to Boulder at Boulder Institute in 
                    Washington DC, United States of America.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    She has over twenty-seven years (27) years in the microfinance sector with a rich pedigree in 
                    Business Management. She is a member of the Chartered Institute of Bankers of Nigeria (CIBN), 
                    and Association of Enterprise Risk Management Professional.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    She joined LAPO in 1997 and rose through various ranks and was appointed as Head, 
                    Corporate Services in July 2020 until her appointment as Executive Director, 
                    Corporate Services in September 13, 2023.
                </p>
            </div>`
        },
        {
            name: 'Lilian Ehigiamusoe',
            position: 'Executive Director, Operations',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1745692005/MADAM_LILLIAN_a7xgk6.jpg',
            profile: `<div class="flex flex-col gap-5">
                <p class="font-hanken font-semibold text-base text-[#000]">Lilian Ehigiamusoe - Head, Operations</p>
                <p class="text-[#444444] font-inter text-sm">
                    Mrs. Lilian Ehigiamusoe obtained a Bachelor’s Degree in Public Administration from Ambrose Alli 
                    University, Ekpoma (2000), and a Master’s Degree in Public Administration from the University of 
                    Benin (2010). She has attended several executive management programs at prestigious institutions, 
                    including the Lagos Business School (Nigeria), Development Bank of Nigeria(DBN), Risk and Compliance 
                    Training (Kenya), and various specialized training sessions in business continuity, risk management, 
                    and operational excellence, from B.Adedipe Associates(BAA) Consults(Nigeria) and the Frankfurt 
                    School(Germany).
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    She has over two decades of experience in the microfinance sector with a rich pedigree in 
                    Enterprise Risk Management, holding key leadership roles, such as Head of Risk Management 
                    and Group Head of Operations & Information and Technology Risk Management.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    A certified microfinance banker and a certified risk management professional with the 
                    Risk Management Society, United States of America (USA), Lilian is also a member of the 
                    Chartered Institute of Finance and Control (CIFC) and a member of the Administrative Staff 
                    College of Nigeria (ASCON).
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    She joined the Bank in 2004 as a Branch Manager and rose through various ranks over the 
                    years and appointed Head, Risk Management Department, until her appointment on 27th November 2024 
                    as Head, Operations.
                </p>
            </div>`
        },
    ]

    const excos = [
        {
            name: 'Cynthia Ikponmwosa',
            position: 'Managing Director/CEO',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1745692517/MD_mklirj.jpg',
            profile: `<div class="flex flex-col gap-5">
                <p class="font-hanken font-semibold text-base text-[#000]">Cynthia Ikponmwosa - Managing Director</p>
                <p class="text-[#444444] font-inter text-sm">
                    Mrs. Ikponmwosa Iranmwinran Cynthia holds a Bachelor of Arts degree in English from the 
                    Edo State University (Ambrose Alli University), Ekpoma (1996) and a Master of Law degree 
                    in Corporate Governance and Law from the University of Portsmouth, United Kingdom (2014). 
                    She has attended several national and international trainings including the Blueprint 
                    Certified (ICSA) training by the University of Portsmouth.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    She has over twenty-three years’ experience in the microfinance sector with rich pedigree in good 
                    Corporate Governance practice. She anchored the transformation process of Lift Above Poverty Organisation 
                    (LAPO) from an NGO to a regulated entity (LAPO MfB). She is a member of the Institute of Chartered Secretaries 
                    and Administration (ICSA) London and Chartered Institute of Bankers of Nigeria (CIBN).
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    She joined the Bank in September, 2001 and rose through various ranks to become Executive Director, 
                    Corporate Services until her appointment as Managing Director/Chief Executive Officer of the Bank 
                    in 2020.
                </p>
            </div>`
        },
        {
            name: 'Israel Aibuedefe',
            position: 'Executive Director, Business Support Division.',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1745691762/MR_ISRAEL_evwvwf.jpg',
            profile: `<div class="flex flex-col gap-5">
                <p class="font-hanken font-semibold text-base text-[#000]">Israel Aibuedefe - Executive Director, Business Support</p>
                <p class="text-[#444444] font-inter text-sm">
                    Israel holds a bachelor’s degree in computer science from Lagos State University, Nigeria, 
                    with an MBA in Business Administration from Rome Business School and an ongoing DBA in 
                    Strategic Management at EMAS Business School.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    He has attended several international trainings and taken various courses at London Business School 
                    in the UK, Gordon Institute of Business Science in South Africa, including the prestigious Back to 
                    Boulder at Boulder Institute in Washington DC, United States of America.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    He is a member of the Chartered Institute of Bankers Nigeria (CIBN), and Chartered 
                    Institute of Directors (CIoD).
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    Israel has over twenty years of work experience from reputable organizations such as Coca-Cola 
                    Nigeria Limited, Nigerian Bottling Company, Cadbury Nigeria, Nokia West Africa, and Microsoft, 
                    which spans Business Intelligence, Technology Solutions, Sales Operations, Retail Analytics, 
                    Planning, and Forecasting.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    He joined LAPO in 2015 and rose through various ranks until his appointment as Executive Director, 
                    Business Support Services on September 13, 2023.
                </p>
            </div>`
        },
        {
            name: 'Bako Gloria',
            position: 'Executive Director, Corporate Services Division.',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1740180264/bako_lsnbbh.png',
            profile: `<div class="flex flex-col gap-5">
                <p class="font-hanken font-semibold text-base text-[#000]">Gloria Bako - Executive Director, Corporate Services</p>
                <p class="text-[#444444] font-inter text-sm">
                    Mrs. Gloria Bako holds a bachelor’s degree in Economics from the University of Uyo (1994) and a 
                    Masters of Economics from the University of Benin (2000). She has attended several national and 
                    international trainings including Risk Governance course by Basel Accord, Dubai, 
                    United Arab Emirates (2018), Strategic Management course, Frankfurt Business School (2023), 
                    Board Risk Governance Workshop by Conrad (2024), and the Back to Boulder at Boulder Institute in 
                    Washington DC, United States of America.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    She has over twenty-seven years (27) years in the microfinance sector with a rich pedigree in 
                    Business Management. She is a member of the Chartered Institute of Bankers of Nigeria (CIBN), 
                    and Association of Enterprise Risk Management Professional.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    She joined LAPO in 1997 and rose through various ranks and was appointed as Head, 
                    Corporate Services in July 2020 until her appointment as Executive Director, 
                    Corporate Services in September 13, 2023.
                </p>
            </div>`
        },
        {
            name: 'Lilian Ehigiamusoe',
            position: 'Executive Director, Operations',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1745692005/MADAM_LILLIAN_a7xgk6.jpg',
            profile: `<div class="flex flex-col gap-5">
                <p class="font-hanken font-semibold text-base text-[#000]">Lilian Ehigiamusoe - Head, Operations</p>
                <p class="text-[#444444] font-inter text-sm">
                    Mrs. Lilian Ehigiamusoe obtained a Bachelor’s Degree in Public Administration from Ambrose Alli 
                    University, Ekpoma (2000), and a Master’s Degree in Public Administration from the University of 
                    Benin (2010). She has attended several executive management programs at prestigious institutions, 
                    including the Lagos Business School (Nigeria), Development Bank of Nigeria(DBN), Risk and Compliance 
                    Training (Kenya), and various specialized training sessions in business continuity, risk management, 
                    and operational excellence, from B.Adedipe Associates(BAA) Consults(Nigeria) and the Frankfurt 
                    School(Germany).
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    She has over two decades of experience in the microfinance sector with a rich pedigree in 
                    Enterprise Risk Management, holding key leadership roles, such as Head of Risk Management 
                    and Group Head of Operations & Information and Technology Risk Management.
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    A certified microfinance banker and a certified risk management professional with the 
                    Risk Management Society, United States of America (USA), Lilian is also a member of the 
                    Chartered Institute of Finance and Control (CIFC) and a member of the Administrative Staff 
                    College of Nigeria (ASCON).
                </p>
                <p class="text-[#444444] font-inter text-sm">
                    She joined the Bank in 2004 as a Branch Manager and rose through various ranks over the 
                    years and appointed Head, Risk Management Department, until her appointment on 27th November 2024 
                    as Head, Operations.
                </p>
            </div>`
        },
        {
            name: 'Emmanuel Igiehon',
            position: 'Chief Finance Officer',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1740180248/emma_czmso4.png',
            profile: `<div class="flex flex-col gap-5">
            <p class="font-hanken font-semibold text-base text-[#000]">Emmanuel Igiehon - Chief Finance Officer</p>
            <p class="text-[#444444] font-inter text-sm">
                Mr Emmanuel Igiehon holds a Bachelor of Science (Education) degree from the University of Benin (1998), 
                Master in Business Administration from the National Open University of Nigeria(2017) and a Post Graduate 
                Diploma in Accounting from the University of Lagos(2018).He is a Fellow of the Institute of Chartered 
                Accountants of Nigeria(ICAN)
            </p>
            <p class="text-[#444444] font-inter text-sm">
                Mr Igiehon obtained a certificate from the Association of Chartered Certified Accountants (ACCA) 
                and is a certified microfinance practitioner(MCIB) from the Chartered Institute of Bankers of 
                Nigeria(CIBN).He has attended several international trainings including Financial Planning and 
                Analysis using Microfin 4.0 in Cape Town South Africa and Microfinance Masterclass at Frankfurt 
                School of Finance and Management, Frankfurt, Germany.
            </p>
            <p class="text-[#444444] font-inter text-sm">
                Mr Igiehon joined LAPO Microfinance Bank Limited in 2004 and served in different 
                capacities before assuming the office of the Chief Finance Officer(CFO) in July 2020.
            </p>
        </div>`
        },
        {
            name: 'Peggy Idehen',
            position: 'Head, Corporate Secretariat',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1745942175/MADAM_PEGGY_mmzahf.jpg',  //'https://res.cloudinary.com/dairsbzlv/image/upload/v1741689484/peggy_noxyih.png',
            profile: `<div class="flex flex-col gap-5">
            <p class="font-hanken font-semibold text-base text-[#000]">Peggy Osaiyekemwen Idehen - Head, Corporate Secretariat/Company Secretary</p>
            <p class="text-[#444444] font-inter text-sm">
                Mrs. Peggy Osaiyekemwen Idehen is a seasoned corporate governance leader with extensive 
                experience in strategy formulation, team leadership, and business transformation. 
                She specializes in corporate governance, strategic compliance, risk management, and visionary leadership.
            </p>
            <p class="text-[#444444] font-inter text-sm">
                She holds a Master of Science (MSc) in Corporate Governance and Leadership from the University of 
                Northampton, United Kingdom, where she graduated with distinction. She also earned a Bachelor of 
                Laws (B.L.) from Ambrose Alli University and was called to the Nigerian Bar in 2007.
            </p>
            <p class="text-[#444444] font-inter text-sm">
                Peggy has refined her executive leadership skills through prestigious programs at IESE Business School 
                (Spain), Frankfurt School of Finance and Management (Germany), Lagos Business School (Nigeria), and the 
                Pan-Atlantic School of Media & Communications (Nigeria).
            </p>
            <p class="text-[#444444] font-inter text-sm">
                She is an active member of several esteemed organizations, including the Chartered Governance Institute 
                United Kingdom, Society for Corporate Governance, Chartered Institute of Bankers of Nigeria, 
                Nigerian Bar Association, Nigerian Institute of Chartered Arbitrators, Compliance Institute of Nigeria,  
                Institute of Directors Nigeria and a life member of the Lagos Business School.
            </p>
            <p class="text-[#444444] font-inter text-sm">
                A passionate advocate for mental health, wellness, and a positive mindset, Peggy embraces a holistic 
                approach to leadership and personal development. She joined LAPO Microfinance Bank in 2007 and 
                currently leads the Corporate Secretariat Department at LAPO Microfinance Bank, having previously 
                served as the Bank’s Chief Compliance Officer.
            </p>
        </div>`
        },
        {
            name: 'Oluremi Akande rpa.',
            position: 'Head, Corporate Communications ',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1740180255/remi_kusuqa.png',
            profile: `<div class="flex flex-col gap-5">
            <p class="font-hanken font-semibold text-base text-[#000]">Oluremi Olatunji Akande - Director, Communication And Branding</p>
            <p class="text-[#444444] font-inter text-sm">
                Oluremi Akande rpa. is a consummate Marketing and Marketing Communications professional with over 
                17 years of cognate experience spanning, Advertising, Brand Strategy & Development, 
                Research & Marketing, and Media Consultancy.
            </p>
            <p class="text-[#444444] font-inter text-sm">
                In various managerial capacities, he has worked with leading firms such as Dali Communications, 
                Phillips Consulting, and Skye Bank Plc, delivering innovative ideas and impacting organizational 
                objectives.
            </p>
            <p class="text-[#444444] font-inter text-sm">
                Oluremi holds a Master’s Degree in Diplomacy & Strategic Studies from the University of Lagos and a 
                Bachelor’s Degree in Linguistics & Nigerian Languages from the University of Ilorin. 
                He is also a certified Chartered Marketer by the Chartered Institute of Marketing (UK), 
                a Certified Digital Marketing Professional from Red & Yellow Creative School of Business, 
                an SA Registered Advertising Practitioner by the Advertising Practitioners Council of Nigeria (APCON) 
                and a certified Microfinance Practitioner by the Chartered Institute of Bankers of Nigeria (CIBN).
            </p>
            <p class="text-[#444444] font-inter text-sm">
                Oluremi has also attended other Advanced Management Programmes at the Lagos Business School and 
                Pan Atlantic School of Media & Communications, Nigeria.
            </p>
            <p class="text-[#444444] font-inter text-sm">
                He joined LAPO Microfinance Bank in 2019 and is currently the Director of Corporate Communications 
                and Branding.
            </p>
        </div>`
        },
        {
            name: 'Olasunkanmi Subair',
            position: 'Head, Internal Audit',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1741689597/ola_q4celz.png',
            profile: `<div class="flex flex-col gap-5">
            <p class="font-hanken font-semibold text-base text-[#000]">Olasunkanmi Subair - Head, Internal Audit</p>
            <p class="text-[#444444] font-inter text-sm">
                Olasunkanmi Subair is an experienced Audit, Control, Governance, and Risk Professional with a 
                demonstrated history of working in the Banking, Leasing and Pension industries. 
                He obtained his first degree in Accounting at the University of Lagos, Nigeria. 
                He has over 18 years' experience spanning Internal Audit, Internal control, and Fraud Investigation.
            </p>
            <p class="text-[#444444] font-inter text-sm">
                Before joining LAPO Microfinance Bank in 2024, he was the Head of Internal Audit at Aquila Leasing 
                Limited. He has also worked in other financial institutions, including Union Bank and Stanbic IBTC Bank, 
                with primary responsibilities of providing assurance to the businesses using risk-based internal audit 
                methodology.
            </p>
            <p class="text-[#444444] font-inter text-sm">
                Olasunkanmi is a Fellow of the Institute of Chartered Accountants of Nigeria. 
                He also holds a Post-Graduate Diploma in Finance from the University of Leicester, UK.
            </p>
        </div>`
        },
        {
            name: 'Abel Enoguanmwonsa Ovenseri',
            position: 'Head, Corporate Services',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1746813950/Dr_Abel_ghxc90.jpg',
            profile: `<div class="flex flex-col gap-5">
            <p class="font-hanken font-semibold text-base text-[#000]">Abel Enoguanmwonsa Ovenseri - Head, Corporate Services</p>
            <p class="text-[#444444] font-inter text-sm">
                Abel is a strategic and results-oriented professional with over a decade of experience in advancing 
                financial inclusion, institutional development, and sustainable impact. As Head of Corporate Services 
                at LAPO Microfinance Bank, he provides strategic leadership to the People & Culture and General Services 
                departments, ensuring alignment with the Bank's mission while driving organisational efficiency, 
                performance, and innovation.
            </p>
            <p class="text-[#444444] font-inter text-sm">
                He began his professional journey with LAPO Microfinance Bank in November 2012 and has steadily 
                risen through the ranks into executive leadership. His career progression within the LAPO Group 
                includes secondments to key subsidiaries such as LAPO Institute for Microfinance and Management 
                Studies and LAPO Development Services, where he led initiatives in research, talent development, 
                operations, stakeholder engagement, corporate strategy, and business development.
            </p>
            <p class="text-[#444444] font-inter text-sm">
                Abel has played a pivotal role in cultivating strategic partnerships with reputable international 
                institutions, including the AFOS Foundation, Grameen Foundation, Water.org, Partners for Development, 
                and the European Investment Bank. These collaborations have attracted significant grant funding and 
                contributed to the achievement of critical development goals.
            </p>
            <p class="text-[#444444] font-inter text-sm">
                He holds a Bachelor of Science degree in Political Science from Obafemi Awolowo University, 
                as well as Master's and Doctoral degrees in Public Administration from the University of Benin. 
                He is a Fellow of the Chartered Institute of Human Resources and Strategic Management and a 
                member of the Chartered Institute of Bankers of Nigeria. His expertise has also been enhanced by 
                several local and international learning programs and conferences, including the Nigerian Microfinance 
                Platform Microfinance Exposure Visits to Uganda and Kenya (2019), the Creating Strategy for Competitive 
                Advantage Course at the Lagos Business School (2020), the BMC Strategy Design Bootcamp, 
                United Kingdom (2022), the Opportunity International Global Education Finance Conference, Kenya (2022), 
                the World Bank 7th Mini Grid Action Learning Event, Kenya (2023) and the Policy, Strategy and Leadership 
                Course at the National Institute for Policy and Strategic Studies, Kuru-Jos (2024).
            </p>
        </div>`
        },
        {
            name: 'Dorcas Thorpe',
            position: 'Head, Strategy And Transformation',
            image: 'https://res.cloudinary.com/dairsbzlv/image/upload/v1740180265/dorcas_odwwhe.png',
            profile: `<div class="flex flex-col gap-5">
            <p class="font-hanken font-semibold text-base text-[#000]">Dorcas Thorpe - Head, Strategy And Transformation</p>
            <p class="text-[#444444] font-inter text-sm">
                Dorcas Thorpe is a dynamic and visionary leader with over a decade of experience driving 
                transformative change and organizational growth in Nigeria’s financial services sector. 
                As the Head of Strategy & Transformation at LAPO Microfinance Bank Limited, she excels in 
                strategic planning, project management, digital transformation, change management, and business analysis. 
                Her innovative leadership has seen her pioneer the establishment of a Project Management Office that 
                revolutionized project execution and implement cutting-edge digital banking strategies including the 
                rollout of prepaid and debit cards, agency banking, and branchless banking platforms that expanded 
                customer access and boosted operational efficiency, contributing to a remarkable 355% profit increase 
                in a single year.
            </p>
            <p class="text-[#444444] font-inter text-sm">
                Dorcas holds a Bachelor of Science in Information Technology & Networking and a Master of Science 
                in Computer & Information Networks from Middlesex University and University of Essex, United Kingdom, 
                respectively. She is a certified member of the Chartered Institute of Bankers (MCIB) and an Associate 
                of the Chartered Institute of Customer Relationship Management (ACIRM), and has further honed her 
                leadership skills through the Advanced Management Program (AMP) at Lagos Business School and IESE 
                University, Spain. 
            </p>
            <p class="text-[#444444] font-inter text-sm">
                Beyond her primary role, she serves on the boards of over Ten (10) companies spanning technology, 
                insurance, health, and education including a foundation and volunteers as the Lead of the Partnerships 
                team at TEDxLagos, where she continues to champion innovative ideas and community growth.
            </p>
        </div>`
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
            <div className='lg:w-[960px] mx-auto gap-6 flex flex-col px-5 lg:px-0 items-center'>
                <div className='flex items-center justify-center gap-3  flex-col'>
                    <div className='w-[165px] h-[32px] flex items-center justify-center rounded-lg bg-[#E8FFF4]'>
                        <p className='font-hanken text-sm leading-[15px] text-[#00954B]'>LAPO MfB Board</p>
                    </div>
                    <p className='font-hanken text-[#000000] text-[32px] lg:text-[54px] leading-[32px] lg:leading-[60px]'>
                        Board of Directors
                    </p>
                </div>
                <p className='text-[#444444] font-inter leading-[30px] lg:w-[768px] mx-auto text-center text-base lg:text-[20px]'>
                    Meet the minds behind our mission to empower communities through 
                    accessible and sustainable financial solutions.
                </p>
            </div>
        </section>

        <section
            className='flex flex-col lg:flex-row items-center pb-[96px] px-5 lg:px-[96px] bg-[#fff] w-full '
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]'>
                {board.map((item, index) => (
                    <div className='flex flex-col items-start gap-6 ' key={index}>
                        <img src={item.image} alt={item.name} className='w-[296px] h-[296px] object-cover rounded-t-[15px]' />
                        <div className='flex flex-col items-start gap-1'>
                            <p className='font-inter text-[#101828] font-medium text-[20px] leading-[30px]'>{item.name}</p>
                            <p className='font-inter text-[#6941C6] text-[18px] leading-[28px]'>{item.position}</p>
                            <div className="flex items-center gap-2 hover:underline cursor-pointer" onClick={() => {setOpenModal(true), setData(item)}}>
                                <p className='font-inter text-[#444444]  text-[18px] leading-[28px]'>
                                    Profile 
                                </p>
                                <FaExternalLinkAlt className="inline-block w-5 h-5 text-[#444444] " />
                            </div>
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
            <div className='lg:w-[960px] mx-auto gap-6 px-5 lg:px-0 flex flex-col items-center'>
                <div className='flex items-center justify-center gap-3 flex-col'>
                    <div className='w-[165px] h-[32px] flex items-center justify-center rounded-lg bg-[#E8FFF4]'>
                        <p className='font-hanken text-sm leading-[15px] text-[#00954B]'>LAPO MfB Executives</p>
                    </div>
                    <p className='font-hanken text-[#000000] text-[32px] lg:text-[54px] leading-[32px] lg:leading-[60px]'>
                        Executives
                    </p>
                </div>
                <p className='text-[#444444] font-inter leading-[30px] lg:w-[768px] mx-auto text-center text-base lg:text-[20px]'>
                    Meet the minds behind our mission to empower communities through 
                    accessible and sustainable financial solutions.
                </p>
            </div>
        </section>

        <section
            className='flex flex-col lg:flex-row items-center pb-[96px] px-5 lg:px-[96px] bg-[#fff] w-full'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]'>
                {excos.map((item, index) => (
                    <div className='flex flex-col items-start mx-auto gap-6 ' key={index}>
                        <img src={item.image} alt={item.name} className='w-[296px] h-[296px] object-cover rounded-t-[15px]' />
                        <div className='flex flex-col items-start gap-1'>
                            <p className='font-inter text-[#101828] font-medium text-[20px] leading-[30px]'>{item.name}</p>
                            <p className='font-inter text-[#6941C6] text-[18px] leading-[28px]'>{item.position}</p>
                            <div className="flex items-center gap-2 hover:underline cursor-pointer" onClick={() => {setOpenModal(true), setData(item)}}>
                                <p className='font-inter text-[#444444]  text-[18px] leading-[28px]'>
                                    Profile 
                                </p>
                                <FaExternalLinkAlt className="inline-block w-5 h-5 text-[#444444] " />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section
            className='bg-[#FAFBFB] py-[96px] px-5 lg:px-[80px] flex w-full'
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
                        <p className='font-hanken text-[54px] leading-[44px] text-[#101828]'>We are just getting started</p>
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
                        className='drop-shadow flex items-center justify-center w-[200px] h-[48px] rounded-[10px] bg-[#E78020]'
                        type='button'
                        onClick={() => {navigate('/careers'), window.scrollTo(0, 0)}}
                    >
                        <p className='font-inter font-medium text-base  text-[#fff] leading-6'>Join us at LAPO MFB</p>
                    </button>
                    {/* <button
                        className='drop-shadow flex items-center justify-center w-[109px] bg-[#E78020] rounded-[10px] h-[48px]'
                        type='button'
                    >
                        <p className='font-inter text-base font-medium text-[#fff] leading-6'>About us</p>
                    </button> */}
                </div>

            </div>

        </section>

        <section
            className='flex flex-col lg:flex-row lg:items-center px-5 gap-[80px] lg:gap-0 lg:px-[64px] justify-between py-[112px]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex flex-col gap-4 lg:w-[601px]' data-aos="fade-right">
                <p className='font-hanken text-[#000000] text-[32px] lg:text-[54px] leading-[120%] lg:leading-[64px]'>
                    Making Finance Work for Everyone
                </p>
                <p className='text-[18px] font-inter text-[#000000] leading-[27px]'>
                    At LAPO Microfinance Bank, we are committed to breaking financial barriers and ensuring 
                    that everyone—regardless of background—has access to the financial services they need to thrive. 
                    From small business owners to everyday individuals, our inclusive financial solutions are designed 
                    to empower communities, foster growth, and create lasting impact. Because when opportunities are 
                    accessible to all, we all move forward together.
                </p>
                {/* <div className='flex items-center gap-6'>
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
                </div> */}
            </div>
            <div data-aos="fade-left">
                <img src={Groupies} alt='Groupies' className='rounded-[25px] lg:w-[531px] cursor-pointer transition-transform duration-300 ease-in-out transform ' />
            </div>
        </section>

        <ModalPop isOpen={openModal}>
            <Profile 
                handleClose={() => setOpenModal(false)}
                data={data}
            />
        </ModalPop>

    </div>
  )
}

export default Changemakers