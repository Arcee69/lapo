import React from 'react'

const Simple = () => {
  return (
    <section
            className='flex flex-col py-[96px] items-start px-5 lg:px-0 lg:w-[45rem] gap-[48px] mx-auto'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                At LAPO Microfinance Bank, your privacy is important to us. This policy explains how we collect, 
                use, and protect your personal information in a simple way. If you ever have questions, 
                feel free to reach out!
            </p>
            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    What information do we collect?
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    We collect:
                </p>
                <ul className='list-disc pl-7 font-inter text-[#667085] text-[18px] leading-[28px]'>
                    <li>Your name and contact details</li>
                    <li>Information about your bank transactions</li>
                    <li>Your device and browsing details when you visit our website</li>
                    <li>Any information you provide when using our services</li>
                </ul>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    Do we use cookies and other tracking technologies?
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    Yes! Cookies help us understand how you use our website so we can improve your experience. 
                    You can turn them off in your browser settings if you prefer.
                </p>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    How long do we keep your information?
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    We only keep your information as long as we need it for banking services, 
                    legal reasons, or to protect against fraud.
                </p>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    How do we keep your information safe?
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    We use strong security measures to protect your data, but we also encourage you to 
                    use strong passwords and be cautious when sharing personal details online..
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
                    <li>Ask for a copy of your information</li>
                    <li>Request corrections if something is wrong</li>
                    <li>Ask us to delete your data (in some cases)</li>
                    <li>Opt out of marketing messages</li>
                    <li>Withdraw your consent where applicable</li>
                </ul>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    How can you contact us about this policy?
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    Please also feel free to contact LAPO MfB if you have any questions about this Privacy Policy 
                    or LAPO MfB’s practices, or if you are seeking to exercise any of your statutory rights. 
                    You may contact us at info@LAPO MfBfs.com or at our mailing address below:
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    For Customers and Authorized Users who use Workspaces 
                    established for Customers in the US:
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

export default Simple