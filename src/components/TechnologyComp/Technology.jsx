import React from "react";
import "../../styles/technology.css";
import { Link } from "react-router-dom";

const links = [
    "/technology",
    "/technology/technology1",
    "/technology/technology2",
]

const Technology = ({ image, image2, title, name, description }) => {
  return (
    <>
      <h2 data-aos = "fade-right"
        className="font-barlow text-white text-center mt-[34px] mb-[32px] text-[16px]
        md:text-left md:pl-[38.5px] md:pt-[40px] md:pb-[60px] md:text-[20px]
        lg:pl-[166.5px] lg:text-[28px] lg:tracking-[4.72px] lg:pb-[26px] lg:pt-[76px]"
      >
        <span className="pr-[16px] text-lightgray-500">03</span>SPACE LAUNCH 101</h2>
      <div data-aos = "zoom-in" data-aos-delay ="500" className="lg:flex items-center lg:flex-row-reverse lg:ml-[165px] lg:mt-[136px] lg:mb-[101px] ">
        
          <img 
            src={image}
            alt=""
            className="w-[375px] h-[170px] object-contain
              md:w-[768px] md:h-[310px] lg:hidden"
          />
          <img
            src={image2}
            alt=""
            className="hidden lg:block lg:w-[515px] lg:h-[525px] object-contain  "
          />
        
        <div
          className="flex flex-col items-center justify-center
            lg:flex-row lg:items-start"
        >
          <div
            className="w-[152px] h-[40px] flex items-center justify-between text-center
                font-bellefair text-[16px] text-white mt-[34px] lg:mt-0 mb-[26px]
                md:mb-[56px] md:w-[210px] md:h-[60px] md:text-[24px]
                lg:flex-col lg:gap-[32px] lg:pr-[80px] lg:text-[32px]"
          >
           {
            links.map((link, id)=>(
                <Link to={link}
                className="w-[40px] h-[40px] rounded-full border-white border-[1px] 
                      text-center cursor-pointer hover:bg-white hover:text-black
                      md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]  flex-shrink-0  grid place-items-center"
              >
                {id+1}
              </Link>
            ))
           }
           
          </div>
          <div  className="flex flex-col items-center justify-center
           text-white lg:pr-[130px]  lg:items-start">
            <h4
              className="text-[14px] pb-[9px] font-barlow md:[16px] md:pb[16px]
                    "
            >
              {title}
            </h4>
            <h3
              className="text-[24px] mb-[16px] font-bellefair
                    md:text-[40px]"
            >
              {name}
            </h3>
            <p
              className="text-[15px] w-[327px] h-[175px] mb-[56px] text-center font-barlow
                    md:text-[16px] md:mb-[97px] md:w-[458px] md:h-[140px] lg:text-left
                    lg;w-[444px] lg:h-[192px] lg:text-[18px] "
            >
             {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
