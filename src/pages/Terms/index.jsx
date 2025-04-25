import React, { useState } from 'react'


const Terms = () => {
  

  return (
    <div className='w-full'>
        <section
            className='h-[24.25rem] flex flex-col px-5 lg:px-[80px] items-center justify-center py-[96px] gap-[40px] bg-[#753412]'
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-easing="linear"
        >
            <div className='flex flex-col items-center gap-4 lg:w-[60rem] mx-auto'>
                <p className='font-inter text-[#EAECF0] text-base font-semibold leading-6'>Terms and Conditions</p>
                <p className='font-hanken text-[#fff] leading-[32px] text-center lg:leading-[60px] text-[32px] lg:text-[54px] tracking-[-2%]'>Terms and Conditions of Use</p>
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
                By accessing this website, you acknowledge and agree to be bound by these 
                <span className="font-semibold text-[#000]"> Terms and Conditions of Use</span> ("Terms"). If you do not agree to these Terms, 
                please refrain from using this website. LAPO Microfinance Bank Ltd. ("LAPO MfB") 
                reserves the right to modify, amend, or change these Terms at any time without prior notice. 
                Any such modifications or amendments shall be effective immediately upon posting. 
                It is your responsibility to review these Terms periodically to ensure that you are aware of any changes. 
                By continuing to access or use this website after such modifications, you will be deemed to have accepted 
                those changes.
            </p>
            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    Disclaimer Regarding Accuracy of Information
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    While LAPO MfB takes reasonable measures to ensure that the information on this website is 
                    accurate and up-to-date, we do not warrant, express or imply, the accuracy, adequacy, or 
                    completeness of the information provided. LAPO MfB expressly disclaims any liability for 
                    errors or omissions in the information. We do not provide any warranty, express or implied, 
                    including but not limited to, implied warranties of merchantability, fitness for a particular 
                    purpose, or freedom from viruses, regarding the materials on this website. Under no circumstances 
                    will LAPO MfB be liable for any damages arising from the use of this website or any inability to 
                    use it, including, without limitation, direct, indirect, special, incidental, or consequential 
                    damages, losses, costs, or expenses resulting from any failure of performance, error, omission, 
                    interruption, defect, delay in operation or transmission, computer virus, or system failure, 
                    even if LAPO MfB has been advised of the possibility of such damages.
                </p>
                
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    Third-Party Links
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    This website may contain links to other websites operated by third parties. 
                    LAPO MfB is not responsible for the contents of any such third-party websites or 
                    any other websites linked to those websites. The inclusion of any third-party link 
                    does not imply endorsement, approval, or sponsorship by LAPO MfB. You acknowledge 
                    that the use of any third-party website is at your own risk, and LAPO MfB is not liable 
                    for any loss, injury, or damage arising from your use of such sites. Additionally, 
                    LAPO MfB does not control or assume responsibility for the placement of cookies, webcasting, 
                    or any other transmission received from any linked site.
                </p>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    Indemnification
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    You agree to indemnify, defend, and hold harmless LAPO MfB, its directors, officers, 
                    employees, agents, and affiliates from and against any and all claims, damages, losses, 
                    liabilities, costs, and expenses, including but not limited to attorney's fees, arising 
                    from your breach of these Terms or any violation of the rights of any third party, 
                    including but not limited to copyrights, intellectual property rights, privacy rights, 
                    or any other legal rights. This indemnification obligation will survive the termination 
                    of these Terms and your use of this website.
                </p>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    Copyrights and Intellectual Property
                </p>
                <div className="flex flex-col gap-3">
                    <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                        The contents of this website, including but not limited to graphics, 
                        logos, icons, text, images, software, and overall design, are the exclusive 
                        property of LAPO MfB or its licensors and are protected by applicable intellectual 
                        property laws, including copyright and trademark laws. The display of such content 
                        does not grant you any rights, including the right to copy, reproduce, distribute, 
                        or otherwise use the materials for commercial purposes unless expressly authorized 
                        by LAPO MfB or the relevant third party owner of the intellectual property.
                    </p>
                    <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                        You agree not to delete, modify, or alter any copyright, trademark, or other 
                        proprietary notices contained in the content obtained from this website. 
                        You may download or copy materials for your personal, non-commercial use, 
                        provided that you retain all copyright and other proprietary notices. 
                        You are prohibited from downloading, copying, or otherwise using any material on 
                        this website or any linked third-party site in violation of any intellectual property laws.
                    </p>
                </div>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    Limitation of Liability
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    To the fullest extent permitted by law, LAPO MfB, its affiliates, officers, 
                    directors, employees, and agents shall not be liable for any direct, indirect, 
                    special, consequential, or incidental damages, including but not limited to, 
                    loss of profits, business interruption, or loss of data arising from the use or 
                    inability to use this website, even if LAPO MfB has been advised of the possibility of such damages.
                </p>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    Governing Law and Dispute Resolution
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    These Terms and Conditions of Use shall be governed by and construed in accordance with the 
                    laws of the Federal Republic of Nigeria. Any dispute, controversy, or claim arising out of 
                    or in connection with these Terms, including the validity, interpretation, performance, or 
                    breach thereof, shall be settled through Arbitration in accordance with the Arbitration and 
                    Conciliation Act 2023 of Nigeria. The arbitration shall take place in Lagos, Nigeria, and 
                    shall be conducted in English. The decision of the arbitrator shall be final and binding on 
                    both parties.
                </p>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    Severability
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    If any provision of these Terms is found to be unlawful, void, 
                    or for any reason unenforceable, then that provision shall be deemed 
                    severable from these Terms and shall not affect the validity and enforceability 
                    of the remaining provisions.
                </p> 
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-inter font-semibold text-[#101828] text-[30px] leading-[38px]'>
                    Privacy Policy
                </p>
                <p className='font-inter text-[#667085] text-[18px] leading-[28px]'>
                    LAPO MfB is committed to protecting your privacy and ensuring the security of any 
                    personal information you provide. Please review our Privacy Policy to understand how we 
                    collect, use, and safeguard your information.
                </p> 
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

export default Terms