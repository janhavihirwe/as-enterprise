import React from 'react'
import mission from "../../assets/mission.png"

function Aboutus() {
  return (
    <div className='pt-[30px] mt-[30px] mb-[50px]'>
        <div className='mx-auto text-center text-[30px] font-bold'>About Us</div>
        <div className='flex flex-col ml-[30px] lg:flex-row lg:w-[70%] gap-x-14 lg:mx-auto mt-[50px]'>
          <div className='p-[20px] w-[90%] lg:w-[100%] shadow-sm'>
            <img src={mission}/>
            <div className='text-[20px] font-[600] mt-[10px]'>Our Mission</div>
            <div className='text-[16px] font-[normal] mt-[10px] text-[#4B5563] w-[90%] leading-[24px]'>To provide innovative IT solutions that empower businesses to achieve their full potential through technology.</div>
          </div>
          <div className='p-[20px]  w-[90%] lg:w-[100%] shadow-sm'>
            <img src={mission}/>
            <div className='text-[20px] font-[600] mt-[10px]'>Company Overview</div>
            <div className='text-[16px] font-[normal] mt-[10px] text-[#4B5563] leading-[24px] w-[95%]'>With over 15 years of experience, we've helped countless businesses optimize their IT infrastructure and achieve digital transformation.</div>
          </div>
          <div className=' p-[20px]  w-[90%] lg:w-[100%] shadow-sm'>
            <img src={mission}/>
            <div className='text-[20px] font-[600] mt-[10px]'>Our Vision</div>
            <div className='text-[16px] font-[normal] mt-[10px] text-[#4B5563] leading-[24px] w-[95%]'>To be the leading IT solutions provider, known for excellence in service, innovation, and customer satisfaction.</div>
          </div>
        </div>
    </div>
  )
}

export default Aboutus