import React from 'react'
import john from "../../assets/john.png"
import sarah from "../../assets/sarah.png"

function Feedback() {
  return (
    <div className='pt-[50px] mt-[30px] pb-[50px] bg-[#F9FAFB]'>
        <div className='text-[30px] font-[700] text-center mx-auto'>What Our Clients Say</div>
        <div className='flex  flex-col lg:flex-row lg:gap-y-8 gap-x-12 w-[90%] ml-[40px] lg:mx-auto mt-[30px]'>
            <div className='shadow-sm bg-white rounded-[8px] p-4 w-[85%]  lg:w-[100%]'>
                <div className='flex gap-x-2 items-center'>
                    <img src={john}/>
                    <div>
                        <div className='text-[16px] font-[600]'>John Anderson</div>
                        <div className='text-[16px] font-normal'>CEO, Tech Solutions Inc.</div>
                    </div>
                </div>
                <div className='text-[16px] font-[600] leading-[24px] w-[100%] mt-[10px]'>"Their maintenance service has been crucial in keeping our systems running smoothly. The team is professional and always available when we need them."</div>
            </div>
            <div className='shadow-sm bg-white  rounded-[8px] p-4 w-[85%] lg:w-[100%]'>
                <div className='flex gap-x-2 items-center'>
                    <img src={sarah}/>
                    <div>
                        <div className='text-[16px] font-[600]'>Sarah Mitchell</div>
                        <div className='text-[16px] font-normal'>IT Director, Global Corp</div>
                    </div>
                </div>
                <div className='text-[16px] font-[600] leading-[24px] w-[100%] mt-[10px]'>"Exceptional service quality and response time. They've helped us maintain 99.9% uptime for our critical systems."</div>
            </div>
        </div>
    </div>
  )
}

export default Feedback