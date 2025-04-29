import React from 'react'

const Legal = () => {
  return (
    <section
        className='flex flex-col py-[96px] items-start px-5 lg:px-0 lg:w-[45rem] gap-[48px] mx-auto'
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-easing="linear"
    >
            <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                LAPO Microfinance Bank (“we,” “our,” or “us”) values your privacy. 
                This Privacy Policy explains how we collect, use, and protect your 
                personal information when you interact with our services. By using our services, 
                you agree to the terms outlined in this policy.
            </p>
            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    What information do we collect?
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    We may collect personal information, including but not limited to:
                </p>
                <ul className='list-disc pl-7 font-inter text-[#667085] text-[18px] leading-[28px]'>
                    <li>Name, contact details, and identification information</li>
                    <li>Financial details related to banking transactions</li>
                    <li>Device and browsing information (e.g., IP address, cookies)</li>
                    <li>Any other information you voluntarily provided</li>
                </ul>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    How do we use your information?
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    We use your information to:
                </p>
                <ul className='list-disc pl-7 font-inter text-[#667085] text-[18px] leading-[28px]'>
                    <li>Provide and improve our banking services</li>
                    <li>Process transactions and verify identities</li>
                    <li>Comply with legal and regulatory obligations</li>
                    <li>Communicate with you regarding updates, offers, and security alerts</li>
                    <li>Prevent fraud and ensure security</li>
                </ul>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    Do we use cookies and other tracking technologies?
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    Yes, we use cookies and tracking technologies to enhance your experience, analyze website traffic, 
                    and improve security. You can manage your cookie preferences in your browser settings.
                </p>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    How long do we keep your information?
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    We retain your personal information as long as necessary to fulfill the purposes outlined 
                    in this policy, comply with legal requirements, and resolve disputes.
                </p>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    How do we keep your information safe?
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    We implement industry-standard security measures to protect your personal data from unauthorized 
                    access, alteration, disclosure, or destruction. However, no system is completely secure, 
                    and we encourage users to take precautions when sharing sensitive information.
                </p>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    What are your privacy rights?
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    You have the right to:
                </p>
                <ul className='list-disc pl-7 font-inter text-[#667085] text-[18px] leading-[28px]'>
                    <li>Access and request copies of your personal data</li>
                    <li>Correct inaccuracies in your information</li>
                    <li>Request deletion of your data under certain conditions</li>
                    <li>Opt out of marketing communications</li>
                    <li>Withdraw consent where applicable</li>
                </ul>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    For any privacy-related requests, please contact us using the details below.
                </p>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    How can you contact us about this policy?
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    Please also feel free to contact LAPO MfB if you have any questions about this Privacy Policy 
                    or LAPO MfB’s practices, or if you are seeking to exercise any of your statutory rights. 
                    You may contact us at customersupport@lapo-nigeria.org or at our mailing address below:
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    LAPO Microfinance Bank
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    LAPO PLACE,<br /> 15A Ikorodu-Ososun Road, <br /> Maryland, Ikeja, <br /> Lagos, Nigeria.
                </p>
            </div>
        </section>
  )
}

export default Legal