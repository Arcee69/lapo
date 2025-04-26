import React, { useState } from 'react'


const CookiesPolicy = () => {
  

  return (
    <div className='w-full'>
        <section
            className='h-[24.25rem] flex flex-col px-5 lg:px-[80px] items-center justify-center py-[96px] gap-[40px] bg-[#753412]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex flex-col items-center gap-4 lg:w-[60rem] mx-auto'>
                <p className='font-inter text-[#EAECF0] text-base font-semibold leading-6'>Cookies Policy</p>
                <p className='font-hanken text-[#fff] leading-[32px] text-center lg:leading-[60px] text-[32px] lg:text-[54px] tracking-[-2%]'>Cookies Policy</p>
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
                LAPO Microfinance Bank (“we,” “our,” or “us”) is committed to protecting your privacy. 
                This Cookie Policy explains how we use cookies and similar technologies on our website. 
                By continuing to browse or use our website, you agree that we can store and access 
                cookies as described in this policy.
            </p>
            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    1. What Are Cookies?
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit 
                    a website. They help us enhance your experience, understand how our site is being used, and improve 
                    our services.
                </p>
                
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    2. Types of Cookies We Use
                </p>
                <div className="flex flex-col gap-4">
                    <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                        We use the following categories of cookies:
                    </p>
                    <ul className="pl-7 list-disc font-inter text-[#667085] text-[18px] leading-[28px]">
                        <li>
                            <span className="text-[#000] font-semibold">Strictly Necessary Cookies:</span> These are 
                            essential for the website to function properly. They include, for example, cookies that 
                            enable you to log into secure areas.
                        </li>
                        <li>
                            <span className="text-[#000] font-semibold">Performance Cookies:</span> These help us 
                            understand how visitors interact with our website by collecting anonymous information. 
                            This helps us improve the website's performance.
                        </li>
                        <li>
                            <span className="text-[#000] font-semibold">Functionality Cookies:</span> These remember 
                            your preferences and choices (e.g., language, region) to enhance your experience
                        </li>
                        <li>
                            <span className="text-[#000] font-semibold">Targeting/Advertising Cookies:</span> These 
                            cookies may be set by us or third-party providers to deliver relevant ads or content 
                            to you based on your browsing history.
                        </li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    3. How We Obtain Consent
                </p>
                <div className="flex flex-col gap-4">
                    <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                        In compliance with NDPR, we obtain your consent before placing any non-essential cookies 
                        (e.g., analytics or marketing cookies) on your device.
                    </p>
                    <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                        You will see a <span className="text-[#000] font-semibold">cookie banner </span>upon your 
                        first visit, which allows you to:
                    </p>
                    <ul className="pl-7 list-disc font-inter text-[#667085] text-[18px] leading-[28px]">
                        <li>Accept all cookies</li>
                        <li>Reject non-essential cookies</li>
                        <li>Customize your cookie preferences</li>
                    </ul>
                    <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                        You can change your cookie preferences at any time via your browser settings or 
                        by revisiting the cookie banner.
                    </p>
                </div>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    4. Third-Party Cookies
                </p>
                <div className="flex flex-col gap-3">
                    <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                        We may allow third-party service providers, such as analytics or advertising partners 
                        (e.g., Google Analytics), to place cookies on your device. These cookies are governed 
                        by the respective third party's privacy policies.
                    </p>
                </div>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    5. How to Manage or Disable Cookies
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    Most web browsers allow control over cookies through browser settings. 
                    You can choose to block or delete cookies, but please note that some 
                    parts of our website may not function properly if you do so.
                </p>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    6. Your Rights Under NDPR
                </p>
                <div className="flex flex-col gap-4">
                    <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                        You have the right to:
                    </p>
                    <ul className="pl-7 list-disc font-inter text-[#667085] text-[18px] leading-[28px]">
                        <li>Access the personal data we collect via cookies</li>
                        <li>Request correction or deletion of such data</li>
                        <li>Withdraw your consent at any time</li>
                    </ul>
                    <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                        To exercise these rights, please contact us using the details provided below.
                    </p>
                </div>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    7. Updates to This Policy
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    We may update this Cookie Policy from time to time. Any changes will be posted on this 
                    page with an updated effective date.
                </p> 
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    8. Contact Us
                </p>
                <div className="flex flex-col gap-4">
                    <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                        If you have any questions about our use of cookies, please contact us at:
                    </p>
                    <div className="flex flex-col">
                        <p className='font-inter text-[#000] text-[18px] font-semibold leading-[28px] italic'>
                            LAPO Microfinance Bank
                        </p>
                        <p className='font-inter text-[#667085] text-[18px] leading-[28px] italic'>
                            LAPO Development Centre, 15 Ikorodu Road, Maryland Bus-stop, Lagos, Nigeria.
                        </p>
                        <p className='font-inter text-[#667085] text-[18px] leading-[28px] italic'>
                            Email:
                        </p>
                        <p className='font-inter text-[#667085] text-[18px] leading-[28px] italic'>
                            Phone Number:
                        </p>
                    </div> 
                </div> 
            </div>
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

export default CookiesPolicy