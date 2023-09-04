import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/crew.css"

const Crew = ({ image, title, name, description }) => {



  return (
    <>
      <div >
        <h2 data-aos="fade-up" className="text-center text-white font-barlow pt-[34px] pb-[32px] md:pt-[40px] 
        md:text-left md:text-[20px] md:pl-[38.5px] md:pb-[60px]
        lg:pl-[166.5px] lg:pt-[76px] lg:text-[28px]">
          <span className="pr-[16px]">02</span>MEET THE CREW
        </h2>
      </div>

      <div data-aos="fade-up" data-aos-delay = "500" className="flex items-center justify-center flex-col md:flex-col-reverse
       lg:flex-row-reverse lg:items-start">
            <div className="flex flex-col lg:pb-0 lg:mb-0">
            <img
                src={image}
                alt=""
                className="w-[327px] h-[223px] object-contain
                md:w-[456.37px] md:h-[700px] lg:w-[568.07px] lg:h-[712px] "/>
            <span className="w-[327px] h-[1px] bg-[#383B4B] lg:hidden"></span>
            </div>
        <div className="flex flex-col justify-center items-center md:flex-col-reverse 
        lg:items-start lg:mr-[125.93px] lg:mb-0 lg:pb-0">
          <div className="flex items-center justify-between w-[88px] h-[10px] mt-[32px] mb-[32px] md:mb-[40px] lg:mb[94px] ">
          <Link to="/crew" className="w-[10px] h-[10px] bg-[#979797] rounded-full cursor-pointer hover:bg-white">
              <span></span>
          </Link>
          <Link to="/crew/mission" className="w-[10px] h-[10px] bg-[#979797] rounded-full cursor-pointer hover:bg-white">
              <span></span>
          </Link>
          <Link to="/crew/pilot" className="w-[10px] h-[10px] bg-[#979797] rounded-full cursor-pointer hover:bg-white">
              <span></span>
          </Link>
          <Link to="/crew/flight" className="w-[10px] h-[10px] bg-[#979797] rounded-full cursor-pointer hover:bg-white">
              <span></span>
          </Link>
         
          </div>
          <div className="text-white flex flex-col items-center justify-center lg:items-start lg:mb-0 lg:pb-0">
            <h4 className="text-[16px] font-bellefair mb-[8px] 
            md:text-[24px] lg:text-[32px] lg:mt-[154px] lg:mb-[16px]">{title}</h4>
            <h1 className="text-[24px] font-bellefair mb-[16px]
            md:text-[40px] lg:text-[56px] lg:mb-[27px]">{name}</h1>
            <p className="font-barlow text-[15px] text-center w-[327px] h-[100px] mb-[104px]
            md:w-[458px] md:h-[84px] md:leading-[28px] md:text-[16px] md:mb-[40px] lg:text-left 
            lg:text-[18px] lg:leading-[32px] lg:mb-[88px] lg:pb-0">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crew;
