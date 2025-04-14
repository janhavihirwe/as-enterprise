import React from 'react'
import data from "../../../data.json"
import certification from "../../assets/certification.png"
import rental from "../../assets/rentals.png"
import star from "../../assets/star.png"
import bulb from "../../assets/bulb.png"
import { useNavigate } from 'react-router-dom'

function Services() {
    const images = import.meta.glob('../../assets/*.png', { eager: true });
    const navigate = useNavigate();
  return (
    <div>
    <div className='text-center mt-[35px]'>
        <div className='text-[20px] leading-[20px] font-[600] sm:text-[20px] sm:leading-[22px] mb-[20px] md:text-[25px] md:leading-[24px] lg:text-[30px] lg:leading-[26px]'>Our Services</div>
        <div className='sm:text-[14px] md:text-[16px]  lg:text-[16px] font-[600]'>Explore our range of IT solutions tailored to meet your business and personal tech needs.</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-[90%] ml-[30px] lg:w-[70%] lg:mx-auto">
      {data.map((item, index) => {
        const matchedImg = Object.entries(images).find(([path]) =>
          path.includes(item.img)
        )?.[1]?.default;

        return (
          <div key={index} className="p-8 bg-white rounded-[8px] shadow border border-gray-200  w-[95%] text-left">
            <img src={matchedImg} alt={item.heading} className="w-[100%] h-auto object-contain" />
            <h2 className="text-lg font-semibold mt-2 ml-1">{item.heading}</h2>
            <p className="text-sm text-gray-600 mt-1 w-[85%] ml-1">{item.description}</p>
            <button className='bg-[#312E81] text-[16px] font-[500] leading-[24px] text-white w-[100%] h-[40px] rounded-[4px] mt-[20px] px-[24px] py-[8px] cursor-pointer' onClick={()=>navigate(`/services/${item.heading}`)}>Get Quote</button>
          </div>
        );
      })}
    </div>
    </div>
    <div className='flex flex-col gap-y-12 lg:flex-row mx-auto gap-x-2 mt-[20px] bg-[#F9FAFB] p-[30px]'>
        <div className='text-center'>
            <img src={certification} className='mx-auto'/>
            <div className='text-[16px] font-[600] leading-[28px]'>Lenovo Certification</div>
            <div className='text-[14px] font-normal w-[30%] leading-[16.8px] lg:w-[60%] mx-auto'>Authorized dealer providing genuine products and expert support</div>
        </div>
        <div className='text-center'>
            <img src={rental} className='mx-auto'/>
            <div className='text-[16px] font-[600] leading-[28px]'>Affordable Rentals</div>
            <div className='text-[14px] font-normal w-[30%] leading-[16.8px] lg:w-[70%] mx-auto'>Flexible rental options to suit your business needs and budget</div>
        </div>
        <div className='text-center'>
            <img src={star} className='mx-auto'/>
            <div className='text-[16px] font-[600] leading-[28px]'>8+ Years Excellence</div>
            <div className='text-[14px] font-normal  w-[30%] leading-[16.8px] lg:w-[85%] mx-auto'>Proven track record of delivering quality solutions</div>
        </div>
        <div className='text-center'>
            <img src={bulb} className='mx-auto'/>
            <div className='text-[16px] font-[600] leading-[28px]'>IT Consulting</div>
            <div className='text-[14px] font-normal w-[30%] leading-[16.8px] lg:w-[80%] mx-auto'>Expert guidance for your technology infrastructure</div>
        </div>
    </div>
    </div>
  )
}

export default Services