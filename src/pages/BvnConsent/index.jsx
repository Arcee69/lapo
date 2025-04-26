import React, { useState } from 'react'


const BvnConsent = () => {
  

  return (
    <div className='w-full'>
        <section
            className='h-[24.25rem] flex flex-col px-5 lg:px-[80px] items-center justify-center py-[96px] gap-[40px] bg-[#753412]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex flex-col items-center gap-4 lg:w-[60rem] mx-auto'>
                <p className='font-inter text-[#EAECF0] text-base font-semibold leading-6'>Bank Verification Number (BVN) Consent</p>
                <p className='font-hanken text-[#fff] leading-[32px] text-center lg:leading-[60px] text-[32px] lg:text-[54px] tracking-[-2%]'>Bank Verification Number (BVN) Consent Term</p>
                {/* <p className='text-[#EAECF0] text-center lg:w-[48rem] mx-auto font-inter text-base lg:text-[20px] leading-[100%] lg:leading-[30px]'>
                    Your privacy is important to us at LAPO MfB. 
                    We respect your privacy regarding any information we may collect from you across our website.
                </p> */}
            </div>
        </section>

        <section
            className='flex flex-col py-[96px] items-start px-5 lg:px-0 lg:w-[45rem] gap-[48px] mx-auto'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                By providing your <span className="font-semibold text-[#000]">Bank Verification Number (BVN) </span> to LAPO Microfinance Bank Ltd. ("LAPO
                MfB"), you consent to the collection, processing, and use of your BVN for the purpose of verifying
                your identity, conducting financial and compliance checks, and fulfilling the regulatory
                requirements under the <span className="font-semibold text-[#000]"> Nigeria Data Protection Regulation (NDPR) </span> and other relevant laws in
                Nigeria.
            </p>
          
            <div className="flex flex-col gap-4">
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    You expressly authorize LAPO MfB to access, verify, and store the BVN in accordance with
                    applicable legal and regulatory requirements, including but not limited to the 
                    <span className="font-semibold text-[#000]"> Central Bank of Nigeria (CBN) </span> guidelines, and other 
                    financial regulatory authorities. LAPO MfB may use the BVN for the following purposes:
                </p>
                <ul className="list-decimal pl-14 font-inter text-[18px] text-[#667085] leading-[28px]">
                    <li>
                        <span className="text-[#000] font-semibold">Identity Verification: </span> To confirm your identity and perform KYC (Know Your Customer)
                        due diligence.     
                    </li>
                    <li>
                        <span className="text-[#000] font-semibold">Regulatory Compliance: </span> To comply with statutory requirements set by the Central Bank
                        of Nigeria and other financial authorities, including anti-money laundering (AML) and
                        combating financing of terrorism (CFT) regulations.     
                    </li>
                    <li>
                        <span className="text-[#000] font-semibold">Financial Transactions: </span> To process 
                        transactions that require verification of your identity.     
                    </li>
                </ul>
            </div>
            
            <div className="flex flex-col gap-4">
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    You further acknowledge and agree that:
                </p>
                <ul className="list-disc pl-14 font-inter text-[18px] text-[#667085] leading-[28px]">
                    <li>
                        LAPO MfB shall take reasonable steps to protect your BVN and any personal data you
                        provide in compliance with the <span className="text-[#000] font-semibold"> Nigeria Data 
                        Protection Regulation (NDPR) </span> and other relevant privacy laws.    
                    </li>
                    <li>
                        Your BVN and related personal information will not be disclosed to third parties, except
                        as required for regulatory compliance or as mandated by law.    
                    </li>
                    <li>
                        You consent to the sharing of your BVN with regulatory bodies, financial institutions, and
                        other relevant authorities as required by law or for compliance purposes.   
                    </li>
                    <li>
                        Your BVN will be stored securely and processed in accordance with LAPO MfB’s internal
                        data protection policies.   
                    </li>
                </ul>
            </div>

            <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                By providing your BVN, you confirm that you have been fully informed and that you provide
                consent voluntarily, and you understand the purpose and legal basis for the collection and
                processing of your BVN.
            </p>

            <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                Should you wish to withdraw consent or have any concerns about how your personal data is
                being handled, you may contact LAPO MfB’s Data Protection Officer by writing to: 
                <span className="text-[#000] font-semibold italic"> The Data Protection Officer LAPO Development Centre, 
                15 Ikorodu Road, Maryland Bus-stop, Lagos, Nigeria.</span> or <span className="text-[#000] font-semibold italic">
                by e-mail at dpo@lapo-nigeria.org.</span> Please note that withdrawal of consent may affect your ability 
                to access certain services offered by LAPO MfB.
            </p>

           

           

           
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

export default BvnConsent