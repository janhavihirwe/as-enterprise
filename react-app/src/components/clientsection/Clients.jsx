import React from 'react'
import demo from "../../assets/demoimg.png"

function Clients() {
  return (
    <div className='mx-auto text-center mt-[30px] bg-[#F9FAFB] p-[45px]'>
        <div className='text-[30px] font-bold leading-[36px]'>Our Trusted Clients</div>
        <div className='flex flex-col gap-y-12 lg:flex-row gap-x-[150px] mx-auto w-[60%] mt-[5%] items-center '>
            <div>
                <img src={demo}/>
            </div>
            <div>
                <img src={demo}/>
            </div>
            <div>
                <img src={demo}/>
            </div>
            <div>
                <img src={demo}/>
            </div>
            <div>
                <img src={demo}/>
            </div>
        </div>
        <div className='text-[16px] font-normal leading-[24px] mt-[5%] text-[#4B5563]'>Trusted by leading companies across various industries</div>
    </div>
  )
}

export default Clients