import { useState } from "react";
import { Link } from "react-router-dom";

const navlinks = [
    {
        title: "Home",
        number: "00",
        link: "/",
    },
    {
        title: "Destination",
        number: "01",
        link: "/destination",
    },
    {
        title: "Crew",
        number: "02",
        link: "/crew",
    },
    {
        title: "Technology",
        number: "03",
        link: "/",
    },
];

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header
            className='container my-[23px] lg:my-[40px] font-barlow
         mx-auto flex items-center justify-between px-[24px] md:px-0 lg:px-[68px] sticky '
        >
            <img src='/assets/shared/logo.svg' alt='' />
            <span className='w-full relative left-7 z-10 h-[3px] bg-[#979797]  hidden lg:block ' />
            <div
                className='h-[96px] hidden  md:px-[48px] lg:px-[123px] md:block
             bg-[#ffffff0c] backdrop-blur-sm'
            >
                <ul className='flex  h-full gap-[48px]'>
                    {navlinks.map((link, id) => (
                        <NavItem {...link} key={id} />
                    ))}
                </ul>
            </div>
            <div
                onClick={handleMenuClick}
                className='block md:hidden cursor-pointer z-30'
            >
                <img
                    src={
                        !isMenuOpen
                            ? "/assets/shared/icon-hamburger.svg"
                            : "/assets/shared/icon-close.svg"
                    }
                    alt=''
                />
            </div>
            <MobileMenu isMenuOpen={isMenuOpen} />
        </header>
    );
};

export default Nav;

// eslint-disable-next-line react/prop-types
const NavItem = ({ number, title, link }) => {
    return (
        <li className='relative'>
            <Link
                to={link}
                href=''
                className='flex uppercase gap-2 h-full group items-center text-white text-[16px] tracking-[2.7px] '
            >
                <span className='hidden font-barlow lg:block'>{number}</span>
                <span>{title}</span>
                <span className='absolute w-full group-focus:block h-[2px] bg-white bottom-0 left-0 hidden group-hover:block ' />
            </Link>
        </li>
    );
};

// eslint-disable-next-line react/prop-types
const MobileMenu = ({ isMenuOpen }) => {
    return (
        <div
            className={`${isMenuOpen ? "w-[80%]  pl-[32px] " : "w-0"} fixed
            right-0 top-0 h-screen duration-500 font-barlow backdrop-blur-[81.55px] bg-[#25242440]`}
        >
            <div className='flex flex-col gap-8 mt-[106px]'>
                {navlinks.map((item, id) => (
                    <Link
                        key={id}
                        to={item.link}
                        className='flex items-center text-white gap-[14px]'
                    >
                        <span>{item.number}</span>
                        <span>{item.title}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};
