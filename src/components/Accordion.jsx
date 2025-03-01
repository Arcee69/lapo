import React, { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md";

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b">
        <button
          className="flex justify-between items-center w-full p-4 text-lg font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-[#000000] font-nunito font-semibold text-[18px]">{title}</span>
          <span>{isOpen ? <MdKeyboardArrowDown className="w-5 h-5 text-[#000]" /> : <MdKeyboardArrowDown className="w-5 h-5 text-[#000]" />}</span>
        </button>
        {isOpen && <div className="p-4 bg-[#FCF7F9]">{content}</div>}
      </div>
    );
  };

export default  Accordion