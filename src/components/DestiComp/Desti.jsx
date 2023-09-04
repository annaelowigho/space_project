import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../../styles/destination.css"

const Desti = ({
  title,
  image,
  description,
  estimatedTime,
  averageDistance,
}) => {
  // const params = useLocation()
  // const pathname = params.pathname

  return (
    <>
      <div data-aos = "fade-right"
        className="flex flex-wrap text-white font-barlow pt-[34px] pb-[32px] pl-[90.5px] pr-[76.5px]
           md:pt-[40px] md:pl-[38.5px] md:pb-[60px] md:text-[20px]
           lg:pl-[166.5px] lg:pt-[76px] lg:text[28px]"
      >
        <span className="pr-[18px] text-white">01</span>
        <h3>PICK YOUR DESTINATION</h3>
      </div>
      <div className="flex flex-wrap items-center justify-center md:flex-col lg:flex-row lg:pb-[118px]">
        <img data-aos = "zoom-in" data-aos-delay = "500"
          src={image}
          alt=""
          className="h-[170px] w-[170px] md:h-[300px] 
            md:w-[300px] lg:w-[445px] lg:h-[445px]"
        />
        <div>
          <div data-aos = "fade-left" data-aos-delay = "500" className="flex flex-wrap items-center justify-center md:flex-col lg:pl-[157px] lg:place-items-start">
            <ul
              className="flex gap-[26px] font-barlow text-white tracking-[2.36px] text-[14px] pt-[26px] pb-[8px] 
          md:pt[53px] md:pb-[32px] md:text-[16px] md:tracking-[2.7px] md:gap-[36px]
          lg:pb-[37px]"
            >
              <li><Link className="flex flex-col items-center group" to="/destination/">
              <span>MOON</span>
              <span className="w-full h-[2px] bg-white mt-[2px] hidden group-hover:block group-focus:block" />
              </Link></li>
              <li>
                <Link
                  className="flex flex-col items-center group"
                  to="/destination/mars"
                >
                  <span>MARS</span>
                  <span className="w-full h-[2px] bg-white mt-[2px] hidden group-hover:block group-focus:block" />
                </Link>
              </li>
              <li>
                <Link
                  className="flex flex-col items-center group"
                  to="/destination/europa"
                >
                  <span>EUROPA</span>
                  <span className="w-full h-[2px] bg-white mt-[2px] hidden group-hover:block group-focus:block" />
                </Link>
              </li>
              <li><Link className="flex flex-col items-center group" to="/destination/titan">
              <span>TITAN</span>
              <span className="w-full h-[2px] bg-white mt-[2px] hidden group-hover:block group-focus:block" />
              </Link></li>
              {/* <li><Link to="/destionation/europa">EUROPA</Link></li>
            <li><Link to="/destination/titan">TITANS</Link></li> */}
            </ul>
            {/* <span className=' w-full group-focus:block h-[20px] bg-white bottom-0 left-0 hidden group-hover:block ' /> */}

            <div className=" text-white text-center pt-[20px] font-barlow lg:text-left">
              <h1
                className="text-[56px] font-bellefair pb-[1px]
          md:text-[80px] md:pb-[8px] lg:text[100px] lg:pb-[14px] uppercase"
              >
                {title}
              </h1>
              <p
                className="text-[15px] w-[324px] font-barlow leading-[25px] pb-[32px]
          md:text-[16px] md:w-[573px] md:h-[84px] md:pb-[49px] lg:w-[444px] lg:pb-[54px]"
              >
                {description}
              </p>
            </div>
            <span className="bg-[#383B4B] w-[327px] h-[2px] md:w-[573px] lg:w-[444px]"></span>
            <div
              className="flex flex-col items-center justify-center gap-[32px] pt-[20px] pb-[58px] font-barlow
          md:flex-row md:pb-[82px]"
            >
              <span className="text-center lg:text-left md:pr-[12px]">
                <p className="text-[14px] text-[#D0D6F9] ">AVG. DISTANCE</p>
                <p
                  className="text-[28px] text-white
              "
                >
                  {averageDistance}
                </p>
              </span>
              <span className="text-center lg:text-left ">
                <p className="text-[14px] text-[#D0D6F9] ">Est. travel time</p>
                <p className="text-[28px] text-white">{estimatedTime}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desti;
