const Homepage = () => {
    return (
        <main
            className='container mx-auto md:mb-[90px] gap-[81px]
         md:gap-[156px] flex mt-[48px] md:mt-[106px] lg:mt-[251px]
         justify-around lg:flex-row flex-col items-center px-[24px] lg:items-end'
        >
            <div
                className='flex lg:text-left text-center
             flex-col w-full max-w-[450px] text-white '
            >
                <h2
                    className='text-[16px] md:text-[20px] font-barlow
                lg:text-[28px] md:tracking-[3.8px] leading-[19px]
                tracking-[2.7px] lg:tracking-[4.72px] md:leading-[24px] lg:leading-[34px]'
                >
                    SO, YOU WANT TO TRAVEL TO
                </h2>
                <h1
                    className='text-[80px] md:text-[150px] font-bellefair
                 leading-[100px] md:leading-[172px] '
                >
                    SPACE
                </h1>
                <p
                    className='text-[15px] md:text-[16px] leading-[25px]
                lg:text-[18px] font-barlow lg:first-line md:leading-[24px] lg:leading-[32px] '
                >
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                </p>
            </div>
            <div
                style={{ aspectRatio: "1/1" }}
                className=' w-[140px] md:w-[242px] lg:w-[274px]
                rounded-full grid place-items-center bg-white group relative'
            >
                <span className='text-[20px] md:text-[32px] font-bellefair tracking-[1.25px] '>
                    EXPLORE
                </span>
                <div
                    style={{ aspectRatio: "1/1" }}
                    className='absolute -z-10 w-[150%]  group-hover:block hidden rounded-full left-[50%]
                     translate-x-[-50%] bg-[#ffffff12] backdrop-blur-sm'
                />
            </div>
        </main>
    );
};

export default Homepage;
