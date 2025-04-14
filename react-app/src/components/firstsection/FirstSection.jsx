import React from 'react';
import bgimg from '../../assets/lenovosticer.png';
import bgimg1 from '../../assets/bgimg1.png';

function FirstSection() {
  return (
    <div>
      {/* Top Section */}
      <div className='w-full text-white shadow-sm'>
        {/* Show for small screens */}
        {/* Show for small screens */}
<div className='block md:hidden relative w-full h-[160px]'>
  <img
    src={bgimg}
    alt='lenovo'
    className='w-full h-full object-cover absolute top-0 left-0 z-0'
  />
  {/* Gradient overlay */}
  <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-[#E31F24] opacity-80 z-10'></div>

  {/* Content over the gradient image */}
  <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center px-4 z-20'>
    <div className='text-2xl leading-[36px]'>Lenovo Authorized Partner</div>
    <div className='text-base font-normal'>
      Official partner for ThinkPad®, ThinkCentre®, and ThinkStation®
      products and solutions
    </div>
  </div>
</div>


        {/* Show for medium and larger screens */}
        <div
          className='hidden md:flex items-center justify-center h-[162px]'
          style={{
            backgroundImage: `url(${bgimg}), linear-gradient(90deg, #000000 0%, #E31F24 100%)`,
            backgroundRepeat: 'no-repeat, no-repeat',
            backgroundPosition: 'left center, left',
            backgroundSize: 'auto, cover',
          }}
        >
          <div className='flex flex-col gap-2 text-left px-4'>
            <div className='text-2xl leading-[36px]'>Lenovo Authorized Partner</div>
            <div className='text-base font-normal'>
              Official partner for ThinkPad®, ThinkCentre®, and ThinkStation® <br />
              products and solutions
            </div>
          </div>
        </div>
      </div>
      <div
  className="w-full text-white flex justify-center items-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgimg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '367px',
  }}
>
  <div className="flex flex-col justify-center items-center text-center px-4">
    <div className="text-[20px] sm:text-[32px] font-semibold leading-[28px] sm:leading-[38.4px]">
      Your Trusted Partner for IT Solutions & System Services
    </div>
    <div className="text-[14px] sm:text-[20px] font-normal leading-[20px] sm:leading-[28px] pt-[12px] sm:pt-[20px]">
      We provide comprehensive IT consulting, system <br className="hidden sm:block" />
      rentals, and maintenance services to help your business thrive in the digital age.
    </div>
    <div className="flex flex-col sm:flex-row gap-4 pt-[30px] sm:pt-[45px]">
      <button className="bg-[#312E81] text-white rounded-[4px] w-[150px] sm:w-[176px] h-[44px] sm:h-[52px] text-[14px] sm:text-[16px] font-[500] cursor-pointer">
        Explore Services
      </button>
      <button className="bg-transparent border border-white rounded-[4px] w-[150px] sm:w-[176px] h-[44px] sm:h-[52px] text-[14px] sm:text-[16px] font-[500] cursor-pointer">
        Contact Us
      </button>
    </div>
  </div>
</div>

    </div>
  );
}

export default FirstSection;
