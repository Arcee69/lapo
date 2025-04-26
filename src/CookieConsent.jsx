import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom"

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    const hasAcceptedCookies = Cookies.get("cookieConsent");
    if (!hasAcceptedCookies) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    Cookies.set("cookieConsent", "accepted", { expires: 30 });
    setShowBanner(false);
  };

  const handleRejectCookies = () => {
    Cookies.set("cookieConsent", "rejected", { expires: 30 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-5 z-50 left-5 right-5 md:left-8 md:right-8 md:w-[429px]  bg-[#FFFAEB] py-5 px-4 rounded-[16px] shadow-lg">
      <h2 className="text-[14px] lg:text-[16px] font-nunito font-semibold leading-6 tracking-[0.2%] text-[#000000]">Lapo MfB Use of Cookies</h2>
      <p className="text-[#011624] font-nunito font-[300] leading-5 tracking-[0.2%] text-[12px] lg:text-[14px] mt-3">
        We use cookies to enhance your experience, analyze site traffic, and serve tailored ads.
        By clicking “Accept All,” you consent to the use of all cookies. You can adjust your preferences or 
        withdraw consent at any time.
      </p>
      <div className="flex gap-[14px] mt-6">
        <button
          onClick={handleRejectCookies}
          className="bg-[#FFF] text-[#E78020] text-center text-[12px] lm:text-[14px] font-medium font-nunito whitespace-nowrap rounded-tl-[8.53px] rounded-br-[8.53px] w-6/12 h-[49.99px] lm:w-[191px] lm:h-[51.99px]"
        >
          Reject Non-Essentials
        </button>
        <button
          onClick={handleAcceptCookies}
          className="bg-[#E78020] text-center rounded-tl-[8.53px] rounded-br-[8.53px] w-6/12 h-[49.99px] lm:w-[191px] lm:h-[51.99px]"
        >
          <p className="font-nunito text-[#FFF] font-medium text-[12px] lm:text-[14px] ">
            Accept All
          </p>
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
